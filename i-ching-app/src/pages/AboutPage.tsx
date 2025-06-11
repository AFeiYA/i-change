import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="page-container about-page">
            {/* 背景装饰 */}
            <div className="background-decoration">
                {Array.from({ length: 12 }, (_, i) => (
                    <div key={i} className={`floating-symbol symbol-${i + 1}`}>
                        {['☰', '☱', '☲', '☳', '☴', '☵', '☶', '☷', '太', '极', '阴', '阳'][i]}
                    </div>
                ))}
            </div>

            <div className="container">
                {/* 页面头部 */}
                <div className="page-header">
                    <div className="header-icon">📖</div>
                    <h1>关于易经</h1>
                    <p className="header-subtitle">探索古老智慧，洞察人生真理</p>
                </div>

                {/* 内容分区 */}
                <div className="content-sections">
                    <div className="content-section">
                        <div className="section-header">
                            <span className="section-icon">🎋</span>
                            <h2>易经简介</h2>
                        </div>
                        <div className="section-content">
                            <p>
                                《易经》，又称《周易》，是中国古代的一部占卜奇书，也是一部哲学典籍。
                                它被誉为"群经之首"，是中华文化的重要组成部分。
                            </p>
                            <p>
                                易经包含六十四卦，每卦都有其独特的象征意义和人生智慧。
                                通过占卜和学习，我们可以获得对当前处境的洞察和指导。
                            </p>
                        </div>
                    </div>

                    <div className="content-section">
                        <div className="section-header">
                            <span className="section-icon">🔮</span>
                            <h2>占卜方法</h2>
                        </div>
                        <div className="section-content">
                            <p>本应用提供两种占卜方式：</p>
                            <ul className="method-list">
                                <li>
                                    <strong>快速占卜</strong>：基于现代随机算法，快速获得卦象指导
                                </li>
                                <li>
                                    <strong>三币占卜</strong>：模拟传统的硬币占卜方法，更加贴近古法
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="content-section">
                        <div className="section-header">
                            <span className="section-icon">💫</span>
                            <h2>使用建议</h2>
                        </div>
                        <div className="section-content">
                            <p>占卜前请：</p>
                            <ul className="advice-list">
                                <li>静心思考你想要了解的问题</li>
                                <li>保持开放和谦逊的心态</li>
                                <li>将占卜结果作为参考，而非绝对的指示</li>
                                <li>结合自己的实际情况进行理解和应用</li>
                            </ul>
                        </div>
                    </div>

                    <div className="content-section">
                        <div className="section-header">
                            <span className="section-icon">🌟</span>
                            <h2>应用特色</h2>
                        </div>
                        <div className="section-content">
                            <ul className="feature-list">
                                <li>完整的六十四卦数据库</li>
                                <li>中英文对照的卦象解释</li>
                                <li>传统与现代相结合的占卜方式</li>
                                <li>简洁优雅的用户界面</li>
                                <li>响应式设计，支持多种设备</li>
                            </ul>
                        </div>
                    </div>

                    <div className="content-section">
                        <div className="section-header">
                            <span className="section-icon">📚</span>
                            <h2>学习资源</h2>
                        </div>
                        <div className="section-content">
                            <p>建议进一步学习的经典著作：</p>
                            <ul className="resource-list">
                                <li>《周易正义》- 孔颖达</li>
                                <li>《易传》- 相传为孔子所作</li>
                                <li>《易学启蒙》- 朱熹</li>
                                <li>现代解读类书籍</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 智慧引言 */}
                <div className="wisdom-quote">
                    <div className="quote-icon">✨</div>
                    <blockquote>
                        <p>"一阴一阳之谓道，继之者善也，成之者性也。"</p>
                        <footer>—— 《易传·系辞上》</footer>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;