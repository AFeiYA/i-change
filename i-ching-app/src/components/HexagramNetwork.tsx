import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Hexagram } from '../data/hexagrams';
import { 
    filterEdgesByRelation, 
    RelationType, 
    HexagramNode, 
    HexagramEdge,
    NetworkStats,
    calculateNetworkStats
} from '../utils/hexagramRelations';
import { networkNodes, networkEdges } from '../data/inverseHexagramData';

interface HexagramNetworkProps {
    hexagrams: Hexagram[];
    onNodeClick?: (hexagram: HexagramNode) => void;
    width?: number;
    height?: number;
    enableFilters?: boolean;
}

const HexagramNetwork: React.FC<HexagramNetworkProps> = ({
    hexagrams,
    onNodeClick,
    width = 1200,
    height = 800,
    enableFilters = true
}) => {
    const svgRef = useRef<SVGSVGElement>(null);    const [activeFilters, setActiveFilters] = useState<RelationType[]>([
        RelationType.INVERSE,    // 错卦关系
        RelationType.COMPLEMENT  // 相综关系
    ]);
    const [networkData, setNetworkData] = useState<{
        nodes: HexagramNode[];
        edges: HexagramEdge[];
    } | null>(null);    const [stats, setStats] = useState<NetworkStats | null>(null);
    const [selectedNode, setSelectedNode] = useState<HexagramNode | null>(null);
    const [focusedNode, setFocusedNode] = useState<HexagramNode | null>(null); // 新增：聚焦的节点    // 使用预定义的网络数据
    useEffect(() => {
        const data = {
            nodes: networkNodes,
            edges: networkEdges
        };
        setNetworkData(data);
        setStats(calculateNetworkStats(data.nodes, data.edges));
    }, []);// 渲染D3网络图
    useEffect(() => {
        if (!networkData || !svgRef.current) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();        // 过滤边
        let filteredEdges = filterEdgesByRelation(networkData.edges, activeFilters);
        let filteredNodes = networkData.nodes;
        let connectedNodeIds = new Set<number>();

        // 如果有聚焦节点，只显示与其直接相连的边和节点
        if (focusedNode) {
            // 找到所有与聚焦节点直接相连的边
            const directEdges = filteredEdges.filter(edge => 
                edge.source === focusedNode.id || edge.target === focusedNode.id
            );
            
            // 收集所有与聚焦节点直接相连的节点ID
            connectedNodeIds.add(focusedNode.id); // 包含聚焦节点本身
            directEdges.forEach(edge => {
                if (edge.source === focusedNode.id) {
                    connectedNodeIds.add(edge.target);
                } else {
                    connectedNodeIds.add(edge.source);
                }
            });
            
            // 只保留直接相连的边
            filteredEdges = directEdges;
            
            // 只保留直接相连的节点
            filteredNodes = networkData.nodes.filter(node => connectedNodeIds.has(node.id));
        }// 创建力模拟
        const simulation = d3.forceSimulation(filteredNodes)
            .force('link', d3.forceLink(filteredEdges)
                .id((d: any) => d.id)
                .distance(80)
                .strength(0.1))
            .force('charge', d3.forceManyBody()
                .strength(-300))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('collision', d3.forceCollide().radius(30));

        // 创建缩放行为
        const zoom = d3.zoom<SVGSVGElement, unknown>()
            .scaleExtent([0.1, 4])
            .on('zoom', (event) => {
                g.attr('transform', event.transform);
            });

        svg.call(zoom);

        // 创建主容器
        const g = svg.append('g');

        // 添加边
        const links = g.append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(filteredEdges)
            .enter().append('line')
            .attr('class', 'network-link')
            .attr('stroke', d => getRelationColor(d.relation))
            .attr('stroke-width', d => d.weight / 2)
            .attr('stroke-opacity', 0.6);        // 添加节点容器
        const nodeGroup = g.append('g')
            .attr('class', 'nodes')
            .selectAll('g')
            .data(filteredNodes)
            .enter().append('g')
            .attr('class', 'node-group')
            .call(d3.drag<SVGGElement, HexagramNode>()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended));

        // 节点点击处理函数
        const handleNodeClick = (event: any, d: HexagramNode) => {
            // 如果点击的是当前聚焦的节点，则取消聚焦
            if (focusedNode && focusedNode.id === d.id) {
                setFocusedNode(null);
            } else {
                // 否则设置新的聚焦节点
                setFocusedNode(d);
            }
            
            setSelectedNode(d);
            if (onNodeClick) onNodeClick(d);
        };

        // 添加节点圆圈
        nodeGroup.append('circle')
            .attr('class', 'network-node')
            .attr('r', d => focusedNode && focusedNode.id === d.id ? 25 : 20) // 聚焦节点更大
            .attr('fill', d => {
                if (focusedNode && focusedNode.id === d.id) {
                    return '#e74c3c'; // 聚焦节点用红色高亮
                }
                return getNodeColor(d.group || 0);
            })
            .attr('stroke', d => focusedNode && focusedNode.id === d.id ? '#c0392b' : '#333')
            .attr('stroke-width', d => focusedNode && focusedNode.id === d.id ? 3 : 2)
            .on('click', handleNodeClick)
            .on('mouseover', function(event, d) {
                if (!focusedNode || focusedNode.id !== d.id) {
                    d3.select(this).attr('r', 25);
                }
                showTooltip(event, d);
            })
            .on('mouseout', function(event, d) {
                if (!focusedNode || focusedNode.id !== d.id) {
                    d3.select(this).attr('r', 20);
                }
                hideTooltip();
            });

        // 添加节点文本
        nodeGroup.append('text')
            .attr('class', 'network-node-text')
            .attr('text-anchor', 'middle')
            .attr('dy', '.35em')
            .attr('font-size', '10px')
            .attr('fill', 'white')
            .attr('pointer-events', 'none')
            .text(d => d.symbol);

        // 添加节点标签
        nodeGroup.append('text')
            .attr('class', 'network-node-label')
            .attr('text-anchor', 'middle')
            .attr('dy', '35px')
            .attr('font-size', '8px')
            .attr('fill', 'var(--text-primary)')
            .attr('pointer-events', 'none')
            .text(d => d.chineseName);

        // 力模拟更新
        simulation.on('tick', () => {
            links
                .attr('x1', (d: any) => d.source.x)
                .attr('y1', (d: any) => d.source.y)
                .attr('x2', (d: any) => d.target.x)
                .attr('y2', (d: any) => d.target.y);

            nodeGroup
                .attr('transform', d => `translate(${d.x},${d.y})`);
        });

        // 拖拽事件处理
        function dragstarted(event: any, d: HexagramNode) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(event: any, d: HexagramNode) {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragended(event: any, d: HexagramNode) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

        // 工具提示
        function showTooltip(event: MouseEvent, d: HexagramNode) {
            const tooltip = d3.select('body').append('div')
                .attr('class', 'network-tooltip')
                .style('opacity', 0);

            tooltip.transition()
                .duration(200)
                .style('opacity', .9);

            tooltip.html(`
                <strong>${d.chineseName}</strong><br/>
                ${d.name}<br/>
                第${d.id}卦<br/>
                上卦: ${d.upperTrigram}<br/>
                下卦: ${d.lowerTrigram}
            `)
                .style('left', (event.pageX + 10) + 'px')
                .style('top', (event.pageY - 28) + 'px');
        }

        function hideTooltip() {
            d3.selectAll('.network-tooltip').remove();
        }

        return () => {
            simulation.stop();
        };

    }, [networkData, activeFilters, focusedNode, width, height]);

    // 获取关系类型颜色
    const getRelationColor = (relation: RelationType): string => {
        const colors = {
            [RelationType.INVERSE]: '#e74c3c',
            [RelationType.COMPLEMENT]: '#3498db',
            [RelationType.NUCLEAR]: '#2ecc71',
            [RelationType.CHANGING]: '#f39c12',
            [RelationType.TRIGRAM]: '#9b59b6'
        };
        return colors[relation];
    };    // 获取节点颜色
    const getNodeColor = (group: number): string => {
        const colors = [
            '#1abc9c', '#16a085', '#2ecc71', '#27ae60',
            '#3498db', '#2980b9', '#9b59b6', '#8e44ad'
        ];
        const index = group % colors.length;
        return colors[index] ?? '#1abc9c';
    };

    // 切换过滤器
    const toggleFilter = (relation: RelationType) => {
        setActiveFilters(prev => 
            prev.includes(relation)
                ? prev.filter(r => r !== relation)
                : [...prev, relation]
        );
    };

    return (
        <div className="hexagram-network">
            {enableFilters && (
                <div className="network-controls">
                    <h3>关系过滤器</h3>
                    <div className="filter-buttons">
                        {Object.values(RelationType).map(relation => (
                            <button
                                key={relation}
                                className={`filter-btn ${activeFilters.includes(relation) ? 'active' : ''}`}
                                onClick={() => toggleFilter(relation)}
                                style={{ borderColor: getRelationColor(relation) }}
                            >
                                {getRelationName(relation)}
                            </button>
                        ))}                    </div>
                    
                    {/* 聚焦控制区域 */}
                    <div className="focus-controls">
                        <h3>聚焦控制</h3>
                        {focusedNode ? (
                            <div className="focused-node-info">
                                <p><strong>聚焦卦象：</strong></p>
                                <p>第{focusedNode.id}卦 - {focusedNode.chineseName}</p>
                                <button 
                                    className="filter-btn active"
                                    onClick={() => setFocusedNode(null)}
                                    style={{ 
                                        backgroundColor: '#e74c3c',
                                        borderColor: '#e74c3c',
                                        color: 'white',
                                        marginTop: '10px'
                                    }}
                                >
                                    🔄 显示全部卦象
                                </button>
                            </div>
                        ) : (
                            <div className="focus-hint">
                                <p style={{ fontSize: '0.9em', color: 'var(--text-secondary)' }}>
                                    💡 点击任意卦象节点可聚焦显示其相关关系
                                </p>
                            </div>
                        )}
                    </div>
                      {stats && (
                        <div className="network-stats">
                            <h4>网络统计</h4>
                            {focusedNode ? (
                                <>
                                    <p><strong>聚焦模式</strong></p>
                                    <p>显示节点: {(() => {
                                        const filteredEdges = filterEdgesByRelation(networkData?.edges || [], activeFilters);
                                        const directEdges = filteredEdges.filter(edge => 
                                            edge.source === focusedNode.id || edge.target === focusedNode.id
                                        );
                                        const connectedIds = new Set([focusedNode.id]);
                                        directEdges.forEach(edge => {
                                            connectedIds.add(edge.source);
                                            connectedIds.add(edge.target);
                                        });
                                        return connectedIds.size;
                                    })()} / {stats.totalNodes}</p>
                                    <p>显示关系: {(() => {
                                        const filteredEdges = filterEdgesByRelation(networkData?.edges || [], activeFilters);
                                        return filteredEdges.filter(edge => 
                                            edge.source === focusedNode.id || edge.target === focusedNode.id
                                        ).length;
                                    })()}</p>
                                    <p>聚焦卦象: 第{focusedNode.id}卦</p>
                                </>
                            ) : (
                                <>
                                    <p>节点数: {stats.totalNodes}</p>
                                    <p>关系数: {stats.totalEdges}</p>
                                    <p>平均连接: {stats.averageConnections.toFixed(1)}</p>
                                    <p>最多连接: 第{stats.mostConnectedHexagram.id}卦 
                                       ({stats.mostConnectedHexagram.connections}个)</p>
                                </>
                            )}
                        </div>
                    )}
                </div>
            )}

            <div className="network-container">
                <svg
                    ref={svgRef}
                    width={width}
                    height={height}
                    className="network-svg"
                >
                </svg>
            </div>

            {selectedNode && (
                <div className="selected-node-info">
                    <h4>{selectedNode.chineseName} - {selectedNode.name}</h4>
                    <p>第{selectedNode.id}卦</p>
                    <p>上卦: {selectedNode.upperTrigram}</p>
                    <p>下卦: {selectedNode.lowerTrigram}</p>
                </div>
            )}
        </div>
    );
};

// 获取关系类型中文名
function getRelationName(relation: RelationType): string {
    const names = {
        [RelationType.INVERSE]: '相错',
        [RelationType.COMPLEMENT]: '相综',
        [RelationType.NUCLEAR]: '互卦',
        [RelationType.CHANGING]: '变卦',
        [RelationType.TRIGRAM]: '八卦'
    };
    return names[relation];
}

export default HexagramNetwork;
