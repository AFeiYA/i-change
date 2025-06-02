import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="container">
            <div className="detail">
                <h1>📖 关于易经</h1>
                
                <section>
                    <h2>🎋 易经简介</h2>
                    <p>
                        《易经》，又称《周易》，是中国古代的一部占卜奇书，也是一部哲学典籍。
                        它被誉为"群经之首"，是中华文化的重要组成部分。
                    </p>
                    <p>
                        易经包含六十四卦，每卦都有其独特的象征意义和人生智慧。
                        通过占卜和学习，我们可以获得对当前处境的洞察和指导。
                    </p>
                </section>

                <section>
                    <h2>🔮 占卜方法</h2>
                    <p>
                        本应用提供两种占卜方式：
                    </p>
                    <ul>
                        <li><strong>快速占卜</strong>：基于现代随机算法，快速获得卦象指导</li>
                        <li><strong>三币占卜</strong>：模拟传统的硬币占卜方法，更加贴近古法</li>
                    </ul>
                </section>

                <section>
                    <h2>💫 使用建议</h2>
                    <p>
                        占卜前请：
                    </p>
                    <ul>
                        <li>静心思考你想要了解的问题</li>
                        <li>保持开放和谦逊的心态</li>
                        <li>将占卜结果作为参考，而非绝对的指示</li>
                        <li>结合自己的实际情况进行理解和应用</li>
                    </ul>
                </section>

                <section>
                    <h2>🌟 应用特色</h2>
                    <ul>
                        <li>完整的六十四卦数据库</li>
                        <li>中英文对照的卦象解释</li>
                        <li>传统与现代相结合的占卜方式</li>
                        <li>简洁优雅的用户界面</li>
                        <li>响应式设计，支持多种设备</li>
                    </ul>
                </section>

                <section>
                    <h2>📚 学习资源</h2>
                    <p>
                        建议进一步学习的经典著作：
                    </p>
                    <ul>
                        <li>《周易正义》- 孔颖达</li>
                        <li>《易传》- 相传为孔子所作</li>
                        <li>《易学启蒙》- 朱熹</li>
                        <li>现代解读类书籍</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;