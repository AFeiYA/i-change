import { useState, useEffect, useCallback } from 'react';
import { performanceUtils } from '../utils/validation';

export interface PerformanceMetrics {
    loadTime: number;
    renderTime: number;
    componentCount: number;
    memoryUsage?: any;
    navigationTiming?: PerformanceNavigationTiming;
}

export const usePerformanceMonitoring = () => {
    const [metrics, setMetrics] = useState<PerformanceMetrics>({
        loadTime: 0,
        renderTime: 0,
        componentCount: 0,
    });

    const [isMonitoring, setIsMonitoring] = useState(false);

    const startMonitoring = useCallback(() => {
        setIsMonitoring(true);
        const startTime = performance.now();

        // Monitor page load time
        window.addEventListener('load', () => {
            const loadTime = performance.now() - startTime;
            setMetrics(prev => ({
                ...prev,
                loadTime,
                navigationTiming: performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming,
            }));
        });

        // Monitor memory usage if available
        const updateMemoryUsage = () => {
            const memoryUsage = performanceUtils.getMemoryUsage();
            setMetrics(prev => ({
                ...prev,
                memoryUsage,
            }));
        };

        updateMemoryUsage();
        const memoryInterval = setInterval(updateMemoryUsage, 5000); // Every 5 seconds

        return () => {
            clearInterval(memoryInterval);
            setIsMonitoring(false);
        };
    }, []);

    const measureComponentRender = useCallback(async (componentName: string, renderFn: () => Promise<void> | void) => {
        return await performanceUtils.measureTime(renderFn, `${componentName} render`);
    }, []);

    const incrementComponentCount = useCallback(() => {
        setMetrics(prev => ({
            ...prev,
            componentCount: prev.componentCount + 1,
        }));
    }, []);

    const getPerformanceReport = useCallback(() => {
        const report = {
            ...metrics,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href,
        };

        console.group('🚀 Performance Report');
        console.log('Load Time:', `${metrics.loadTime.toFixed(2)}ms`);
        console.log('Render Time:', `${metrics.renderTime.toFixed(2)}ms`);
        console.log('Component Count:', metrics.componentCount);
        if (metrics.memoryUsage) {
            console.log('Memory Usage:', metrics.memoryUsage);
        }
        if (metrics.navigationTiming) {
            console.log('Navigation Timing:', metrics.navigationTiming);
        }
        console.groupEnd();

        return report;
    }, [metrics]);

    useEffect(() => {
        const cleanup = startMonitoring();
        return cleanup;
    }, [startMonitoring]);

    return {
        metrics,
        isMonitoring,
        measureComponentRender,
        incrementComponentCount,
        getPerformanceReport,
    };
};

export default usePerformanceMonitoring;
