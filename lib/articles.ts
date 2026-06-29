export interface Article {
  id: string;
  icon: string;
  title: string;
  description: string;
  content: string;
}

export const articles: Record<string, Record<string, Article[]>> = {
  'en': {
    'basics': [
      {
        id: 'what-is-prediction-market',
        icon: '📚',
        title: 'What is a Prediction Market?',
        description: 'Explore how prediction markets work, their history, and why they are valuable tools for understanding future events.',
        content: `<h2>What is a Prediction Market?</h2>
<p>Prediction markets are exchange-traded markets where the prices of contracts reflect the likelihood of future events. They allow participants to speculate on the outcomes of uncertain future events and collectively aggregate information about these events.</p>
<h3>How They Work</h3>
<p>In a prediction market, participants buy and sell contracts based on their beliefs about future outcomes. The price of a contract typically ranges from 0 to 1 (or 0% to 100%), where higher prices indicate higher probabilities of the event occurring.</p>
<h3>History</h3>
<p>Prediction markets have existed in various forms for centuries, from commodity futures to political betting markets. Modern prediction markets emerged in the late 1980s with the Iowa Electronic Markets.</p>
<h3>Why They Matter</h3>
<p>Prediction markets are valuable because they:</p>
<ul>
<li>Aggregate diverse information and opinions</li>
<li>Provide real-time probability assessments</li>
<li>Often outperform traditional forecasting methods</li>
<li>Allow for risk hedging and portfolio diversification</li>
</ul>`
      },
      {
        id: 'understanding-odds',
        icon: '📊',
        title: 'Understanding Odds',
        description: 'Master the different odds systems used in prediction markets, including decimal odds, fractional odds, and their relationship to probability.',
        content: `<h2>Understanding Odds</h2>
<p>Odds represent the probability of an event occurring and are expressed in different formats depending on the market and region.</p>
<h3>Decimal Odds</h3>
<p>Decimal odds represent the total payout (including the original stake) for every unit wagered. For example, odds of 2.0 mean that for every $1 wagered, you receive $2 in total.</p>
<h3>Fractional Odds</h3>
<p>Fractional odds show the profit relative to the stake. Odds of 1/2 mean that for every $2 wagered, you make $1 profit.</p>
<h3>Probability Conversion</h3>
<p>To convert decimal odds to probability: Probability = 1 / Decimal Odds</p>
<p>To convert fractional odds to probability: Probability = Denominator / (Numerator + Denominator)</p>`
      },
      {
        id: 'how-to-get-started',
        icon: '🎯',
        title: 'How to Get Started',
        description: 'Your first steps into prediction markets. Learn about account setup, market selection, and placing your first prediction bet.',
        content: `<h2>How to Get Started with Prediction Markets</h2>
<h3>1. Choose a Platform</h3>
<p>Select a reputable prediction market platform that operates in your jurisdiction. Research the platform's features, fees, and user reviews.</p>
<h3>2. Set Up Your Account</h3>
<p>Create an account with your email, verify your identity, and set up your payment method. Most platforms require KYC (Know Your Customer) verification.</p>
<h3>3. Fund Your Account</h3>
<p>Deposit funds using your preferred payment method. Start with a small amount until you're comfortable with how the platform works.</p>
<h3>4. Explore Markets</h3>
<p>Browse available prediction markets and understand the events you can predict on. Read market descriptions and historical data.</p>
<h3>5. Place Your First Bet</h3>
<p>Start with small bets on events you're confident about. As you gain experience, you can increase your bet sizes and explore more complex markets.</p>`
      },
      {
        id: 'common-mistakes',
        icon: '💡',
        title: 'Common Mistakes',
        description: 'Learn from others\' experiences. Understand common pitfalls and misconceptions when participating in prediction markets.',
        content: `<h2>Common Mistakes in Prediction Markets</h2>
<h3>1. Overconfidence Bias</h3>
<p>Many participants overestimate their ability to predict events. Remember that uncertainty is inherent in prediction markets.</p>
<h3>2. Ignoring Base Rates</h3>
<p>When making predictions, consider the historical frequency of similar events, not just current news or narratives.</p>
<h3>3. Insufficient Diversification</h3>
<p>Putting all your money on a single prediction is risky. Diversify across multiple markets and outcomes.</p>
<h3>4. Emotional Betting</h3>
<p>Don't let emotions drive your decisions. Stick to your analysis and rational decision-making process.</p>
<h3>5. Ignoring Liquidity</h3>
<p>Low-liquidity markets can make it difficult to enter and exit positions. Always check the trading volume before placing bets.</p>`
      }
    ],
    'how-to': [
      {
        id: 'getting-started-guide',
        icon: '🚀',
        title: 'Getting Started Guide',
        description: 'A comprehensive guide to beginning your prediction market journey.',
        content: `<h2>Getting Started Guide</h2>
<p>This guide will walk you through everything you need to know to start trading in prediction markets.</p>
<p>Content details...</p>`
      },
      {
        id: 'portfolio-strategy',
        icon: '💼',
        title: 'Portfolio Strategy',
        description: 'Learn how to build a balanced prediction portfolio.',
        content: `<h2>Portfolio Strategy</h2>
<p>Building a successful prediction portfolio requires diversification and risk management.</p>
<p>Content details...</p>`
      },
      {
        id: 'risk-management',
        icon: '🛡️',
        title: 'Risk Management',
        description: 'Essential techniques for managing risk in prediction markets.',
        content: `<h2>Risk Management</h2>
<p>Proper risk management is crucial for long-term success in prediction markets.</p>
<p>Content details...</p>`
      },
      {
        id: 'advanced-trading',
        icon: '📈',
        title: 'Advanced Trading',
        description: 'Advanced strategies for experienced traders.',
        content: `<h2>Advanced Trading</h2>
<p>Once you master the basics, explore these advanced trading strategies.</p>
<p>Content details...</p>`
      }
    ],
    'sports': [
      {
        id: 'sports-prediction-basics',
        icon: '⚽',
        title: 'Sports Prediction Basics',
        description: 'Understanding sports prediction markets.',
        content: `<h2>Sports Prediction Basics</h2>
<p>Sports markets are among the most liquid and popular prediction markets.</p>
<p>Content details...</p>`
      },
      {
        id: 'analyzing-team-performance',
        icon: '📊',
        title: 'Analyzing Team Performance',
        description: 'How to analyze teams for better predictions.',
        content: `<h2>Analyzing Team Performance</h2>
<p>Key metrics and analysis methods for sports predictions.</p>
<p>Content details...</p>`
      },
      {
        id: 'weather-and-injuries',
        icon: '⛅',
        title: 'Weather and Injuries',
        description: 'Impact factors in sports prediction.',
        content: `<h2>Weather and Injuries</h2>
<p>External factors that affect sports outcomes.</p>
<p>Content details...</p>`
      },
      {
        id: 'sports-arbitrage',
        icon: '🔄',
        title: 'Sports Arbitrage',
        description: 'Finding and exploiting arbitrage opportunities.',
        content: `<h2>Sports Arbitrage</h2>
<p>Advanced technique for risk-free profits in sports markets.</p>
<p>Content details...</p>`
      }
    ],
    'politics': [
      {
        id: 'election-markets',
        icon: '🗳️',
        title: 'Election Markets',
        description: 'Understanding political prediction markets.',
        content: `<h2>Election Markets</h2>
<p>Political prediction markets offer insights into election outcomes.</p>
<p>Content details...</p>`
      },
      {
        id: 'polling-vs-markets',
        icon: '📈',
        title: 'Polling vs Markets',
        description: 'Comparing traditional polls with prediction market data.',
        content: `<h2>Polling vs Markets</h2>
<p>How prediction markets compare to traditional polling.</p>
<p>Content details...</p>`
      },
      {
        id: 'policy-outcomes',
        icon: '📋',
        title: 'Policy Outcomes',
        description: 'Predicting policy decisions and implementations.',
        content: `<h2>Policy Outcomes</h2>
<p>Forecasting government policy decisions.</p>
<p>Content details...</p>`
      },
      {
        id: 'geopolitical-events',
        icon: '🌍',
        title: 'Geopolitical Events',
        description: 'Navigating international political predictions.',
        content: `<h2>Geopolitical Events</h2>
<p>Understanding global political uncertainties.</p>
<p>Content details...</p>`
      }
    ],
    'finance': [
      {
        id: 'crypto-predictions',
        icon: '₿',
        title: 'Crypto Predictions',
        description: 'Forecasting cryptocurrency markets.',
        content: `<h2>Crypto Predictions</h2>
<p>Trading predictions in cryptocurrency markets.</p>
<p>Content details...</p>`
      },
      {
        id: 'stock-market-outlook',
        icon: '📉',
        title: 'Stock Market Outlook',
        description: 'Predicting stock market movements.',
        content: `<h2>Stock Market Outlook</h2>
<p>Strategies for stock market predictions.</p>
<p>Content details...</p>`
      },
      {
        id: 'economic-indicators',
        icon: '💹',
        title: 'Economic Indicators',
        description: 'Using economic data for predictions.',
        content: `<h2>Economic Indicators</h2>
<p>How economic indicators affect prediction markets.</p>
<p>Content details...</p>`
      },
      {
        id: 'interest-rate-markets',
        icon: '💰',
        title: 'Interest Rate Markets',
        description: 'Predicting central bank decisions.',
        content: `<h2>Interest Rate Markets</h2>
<p>Forecasting monetary policy decisions.</p>
<p>Content details...</p>`
      }
    ],
    'data': [
      {
        id: 'market-data-analysis',
        icon: '📊',
        title: 'Market Data Analysis',
        description: 'Analyzing prediction market data.',
        content: `<h2>Market Data Analysis</h2>
<p>Using market data to inform your strategies.</p>
<p>Content details...</p>`
      },
      {
        id: 'historical-accuracy',
        icon: '📈',
        title: 'Historical Accuracy',
        description: 'Understanding prediction market accuracy.',
        content: `<h2>Historical Accuracy</h2>
<p>How accurate are prediction markets?</p>
<p>Content details...</p>`
      },
      {
        id: 'volume-trends',
        icon: '📉',
        title: 'Volume Trends',
        description: 'Interpreting trading volume patterns.',
        content: `<h2>Volume Trends</h2>
<p>What trading volume tells us about market confidence.</p>
<p>Content details...</p>`
      },
      {
        id: 'probability-distributions',
        icon: '📐',
        title: 'Probability Distributions',
        description: 'Understanding probability in markets.',
        content: `<h2>Probability Distributions</h2>
<p>Statistical analysis of prediction outcomes.</p>
<p>Content details...</p>`
      }
    ],
    'other': [
      {
        id: 'climate-predictions',
        icon: '🌡️',
        title: 'Climate Predictions',
        description: 'Forecasting climate and environmental events.',
        content: `<h2>Climate Predictions</h2>
<p>Prediction markets for climate and environmental outcomes.</p>
<p>Content details...</p>`
      },
      {
        id: 'technology-trends',
        icon: '💻',
        title: 'Technology Trends',
        description: 'Predicting technology developments.',
        content: `<h2>Technology Trends</h2>
<p>Forecasting technological breakthroughs and adoptions.</p>
<p>Content details...</p>`
      },
      {
        id: 'scientific-breakthroughs',
        icon: '🔬',
        title: 'Scientific Breakthroughs',
        description: 'Predicting scientific discoveries.',
        content: `<h2>Scientific Breakthroughs</h2>
<p>Understanding scientific prediction markets.</p>
<p>Content details...</p>`
      },
      {
        id: 'social-trends',
        icon: '👥',
        title: 'Social Trends',
        description: 'Forecasting social and cultural changes.',
        content: `<h2>Social Trends</h2>
<p>Predicting social and cultural developments.</p>
<p>Content details...</p>`
      }
    ]
  },
  'zh-cn': {
    'basics': [
      {
        id: 'what-is-prediction-market',
        icon: '📚',
        title: '什么是预测市场？',
        description: '探索预测市场如何运作、其历史以及为什么它们是理解未来事件的有价值工具。',
        content: `<h2>什么是预测市场？</h2>
<p>预测市场是交易所交易的市场，其中合约的价格反映未来事件发生的可能性。它允许参与者对不确定的未来事件结果进行推测，并集体汇总有关这些事件的信息。</p>
<h3>它们如何运作</h3>
<p>在预测市场中，参与者根据他们对未来结果的信念买卖合约。合约的价格通常在0到1（或0%到100%）之间，价格越高表示事件发生的可能性越大。</p>
<h3>历史</h3>
<p>预测市场以各种形式存在了几个世纪，从商品期货到政治赔率市场。现代预测市场在20世纪80年代末随着爱荷华电子市场的出现而产生。</p>
<h3>为什么它们很重要</h3>
<p>预测市场很有价值，因为它们：</p>
<ul>
<li>汇总不同的信息和观点</li>
<li>提供实时概率评估</li>
<li>通常优于传统预测方法</li>
<li>允许风险对冲和投资组合多样化</li>
</ul>`
      },
      {
        id: 'understanding-odds',
        icon: '📊',
        title: '理解赔率',
        description: '掌握预测市场中使用的不同赔率制度，包括小数赔率、分数赔率及其与概率的关系。',
        content: `<h2>理解赔率</h2>
<p>赔率代表事件发生的概率，根据市场和地区的不同以不同的格式表示。</p>
<h3>小数赔率</h3>
<p>小数赔率代表每下注一个单位的总支付（包括原始赌注）。例如，2.0的赔率意味着对于每下注1美元，您总共获得2美元。</p>
<h3>分数赔率</h3>
<p>分数赔率显示相对于赌注的利润。1/2的赔率意味着对于每下注2美元，您赚取1美元的利润。</p>
<h3>概率转换</h3>
<p>要将小数赔率转换为概率：概率 = 1 / 小数赔率</p>
<p>要将分数赔率转换为概率：概率 = 分母 / (分子 + 分母)</p>`
      },
      {
        id: 'how-to-get-started',
        icon: '🎯',
        title: '如何开始',
        description: '进入预测市场的首步。了解账户设置、市场选择和首次预测下注。',
        content: `<h2>如何开始使用预测市场</h2>
<h3>1. 选择平台</h3>
<p>选择在您所在司法管辖区运营的信誉良好的预测市场平台。研究平台的功能、费用和用户评论。</p>
<h3>2. 设置您的账户</h3>
<p>使用您的电子邮件创建账户、验证您的身份并设置您的支付方式。大多数平台需要KYC（了解您的客户）验证。</p>
<h3>3. 为您的账户注资</h3>
<p>使用您喜欢的支付方式存入资金。在习惯平台的工作方式之前，先存入少量资金。</p>
<h3>4. 探索市场</h3>
<p>浏览可用的预测市场并了解您可以预测的事件。阅读市场描述和历史数据。</p>
<h3>5. 进行首次投注</h3>
<p>从您有信心的事件的小额投注开始。随着您获得经验，您可以增加投注规模并探索更复杂的市场。</p>`
      },
      {
        id: 'common-mistakes',
        icon: '💡',
        title: '常见错误',
        description: '从他人的经验中学习。了解参与预测市场时的常见陷阱和误解。',
        content: `<h2>预测市场中的常见错误</h2>
<h3>1. 过度自信偏差</h3>
<p>许多参与者高估了他们预测事件的能力。记住不确定性在预测市场中是固有的。</p>
<h3>2. 忽视基础比率</h3>
<p>在进行预测时，请考虑类似事件的历史频率，而不仅仅是当前新闻或叙述。</p>
<h3>3. 缺乏充分的多样化</h3>
<p>将所有资金投入到单一预测是有风险的。跨越多个市场和结果进行多样化。</p>
<h3>4. 情绪化投注</h3>
<p>不要让情绪驱动您的决策。坚持您的分析和理性的决策制定过程。</p>
<h3>5. 忽视流动性</h3>
<p>流动性低的市场可能会使进入和退出头寸变得困难。在下注前始终检查交易量。</p>`
      }
    ],
    'how-to': [
      {
        id: 'getting-started-guide',
        icon: '🚀',
        title: '入门指南',
        description: '开始您的预测市场之旅的综合指南。',
        content: `<h2>入门指南</h2>
<p>本指南将引导您了解开始在预测市场中交易所需的一切。</p>
<p>详细内容...</p>`
      },
      {
        id: 'portfolio-strategy',
        icon: '💼',
        title: '投资组合策略',
        description: '了解如何构建平衡的预测投资组合。',
        content: `<h2>投资组合策略</h2>
<p>构建成功的预测投资组合需要多样化和风险管理。</p>
<p>详细内容...</p>`
      },
      {
        id: 'risk-management',
        icon: '🛡️',
        title: '风险管理',
        description: '在预测市场中管理风险的基本技术。',
        content: `<h2>风险管理</h2>
<p>适当的风险管理是在预测市场中长期成功的关键。</p>
<p>详细内容...</p>`
      },
      {
        id: 'advanced-trading',
        icon: '📈',
        title: '高级交易',
        description: '有经验交易者的高级策略。',
        content: `<h2>高级交易</h2>
<p>一旦您掌握了基础知识，探索这些高级交易策略。</p>
<p>详细内容...</p>`
      }
    ],
    'sports': [
      {
        id: 'sports-prediction-basics',
        icon: '⚽',
        title: '体育预测基础',
        description: '理解体育预测市场。',
        content: `<h2>体育预测基础</h2>
<p>体育市场是流动性最强和最受欢迎的预测市场。</p>
<p>详细内容...</p>`
      },
      {
        id: 'analyzing-team-performance',
        icon: '📊',
        title: '分析球队表现',
        description: '如何分析球队以做出更好的预测。',
        content: `<h2>分析球队表现</h2>
<p>体育预测的关键指标和分析方法。</p>
<p>详细内容...</p>`
      },
      {
        id: 'weather-and-injuries',
        icon: '⛅',
        title: '天气和伤情',
        description: '体育预测中的影响因素。',
        content: `<h2>天气和伤情</h2>
<p>影响体育结果的外部因素。</p>
<p>详细内容...</p>`
      },
      {
        id: 'sports-arbitrage',
        icon: '🔄',
        title: '体育套利',
        description: '寻找和利用套利机会。',
        content: `<h2>体育套利</h2>
<p>在体育市场中实现无风险利润的高级技术。</p>
<p>详细内容...</p>`
      }
    ],
    'politics': [
      {
        id: 'election-markets',
        icon: '🗳️',
        title: '选举市场',
        description: '理解政治预测市场。',
        content: `<h2>选举市场</h2>
<p>政治预测市场提供了对选举结果的见解。</p>
<p>详细内容...</p>`
      },
      {
        id: 'polling-vs-markets',
        icon: '📈',
        title: '民调与市场',
        description: '比较传统民调与预测市场数据。',
        content: `<h2>民调与市场</h2>
<p>预测市场与传统民调的比较。</p>
<p>详细内容...</p>`
      },
      {
        id: 'policy-outcomes',
        icon: '📋',
        title: '政策结果',
        description: '预测政策决定和实施。',
        content: `<h2>政策结果</h2>
<p>预测政府政策决定。</p>
<p>详细内容...</p>`
      },
      {
        id: 'geopolitical-events',
        icon: '🌍',
        title: '地缘政治事件',
        description: '导航国际政治预测。',
        content: `<h2>地缘政治事件</h2>
<p>理解全球政治不确定性。</p>
<p>详细内容...</p>`
      }
    ],
    'finance': [
      {
        id: 'crypto-predictions',
        icon: '₿',
        title: '加密货币预测',
        description: '预测加密货币市场。',
        content: `<h2>加密货币预测</h2>
<p>在加密货币市场中进行预测交易。</p>
<p>详细内容...</p>`
      },
      {
        id: 'stock-market-outlook',
        icon: '📉',
        title: '股市展望',
        description: '预测股票市场走向。',
        content: `<h2>股市展望</h2>
<p>股票市场预测的策略。</p>
<p>详细内容...</p>`
      },
      {
        id: 'economic-indicators',
        icon: '💹',
        title: '经济指标',
        description: '使用经济数据进行预测。',
        content: `<h2>经济指标</h2>
<p>经济指标如何影响预测市场。</p>
<p>详细内容...</p>`
      },
      {
        id: 'interest-rate-markets',
        icon: '💰',
        title: '利率市场',
        description: '预测央行决策。',
        content: `<h2>利率市场</h2>
<p>预测货币政策决定。</p>
<p>详细内容...</p>`
      }
    ],
    'data': [
      {
        id: 'market-data-analysis',
        icon: '📊',
        title: '市场数据分析',
        description: '分析预测市场数据。',
        content: `<h2>市场数据分析</h2>
<p>使用市场数据为您的策略提供信息。</p>
<p>详细内容...</p>`
      },
      {
        id: 'historical-accuracy',
        icon: '📈',
        title: '历史准确性',
        description: '理解预测市场准确性。',
        content: `<h2>历史准确性</h2>
<p>预测市场有多准确？</p>
<p>详细内容...</p>`
      },
      {
        id: 'volume-trends',
        icon: '📉',
        title: '交易量趋势',
        description: '解释交易量模式。',
        content: `<h2>交易量趋势</h2>
<p>交易量如何告诉我们市场信心。</p>
<p>详细内容...</p>`
      },
      {
        id: 'probability-distributions',
        icon: '📐',
        title: '概率分布',
        description: '理解市场中的概率。',
        content: `<h2>概率分布</h2>
<p>预测结果的统计分析。</p>
<p>详细内容...</p>`
      }
    ],
    'other': [
      {
        id: 'climate-predictions',
        icon: '🌡️',
        title: '气候预测',
        description: '预测气候和环保事件。',
        content: `<h2>气候预测</h2>
<p>气候和环保结果的预测市场。</p>
<p>详细内容...</p>`
      },
      {
        id: 'technology-trends',
        icon: '💻',
        title: '技术趋势',
        description: '预测技术发展。',
        content: `<h2>技术趋势</h2>
<p>预测技术突破和采用。</p>
<p>详细内容...</p>`
      },
      {
        id: 'scientific-breakthroughs',
        icon: '🔬',
        title: '科学突破',
        description: '预测科学发现。',
        content: `<h2>科学突破</h2>
<p>理解科学预测市场。</p>
<p>详细内容...</p>`
      },
      {
        id: 'social-trends',
        icon: '👥',
        title: '社会趋势',
        description: '预测社会和文化变化。',
        content: `<h2>社会趋势</h2>
<p>预测社会和文化发展。</p>
<p>详细内容...</p>`
      }
    ]
  },
  'hi': {
    'basics': [
      {
        id: 'what-is-prediction-market',
        icon: '📚',
        title: 'भविष्यवाणी बाजार क्या है?',
        description: 'जानें कि भविष्यवाणी बाजार कैसे काम करते हैं, उनका इतिहास और वे भविष्य की घटनाओं को समझने के लिए मूल्यवान क्यों हैं।',
        content: `<h2>भविष्यवाणी बाजार क्या है?</h2>
<p>भविष्यवाणी बाजार विनिमय-व्यापारित बाजार हैं जहां अनुबंध की कीमतें भविष्य की घटनाओं की संभावना को दर्शाती हैं।</p>
<p>विस्तृत सामग्री...</p>`
      },
      {
        id: 'understanding-odds',
        icon: '📊',
        title: 'बाधाओं को समझना',
        description: 'भविष्यवाणी बाजारों में उपयोग की जाने वाली विभिन्न बाधा प्रणालियों में महारत हासिल करें।',
        content: `<h2>बाधाओं को समझना</h2>
<p>बाधाएं किसी घटना की संभावना को दर्शाती हैं और बाजार और क्षेत्र के आधार पर विभिन्न प्रारूपों में व्यक्त की जाती हैं।</p>
<p>विस्तृत सामग्री...</p>`
      },
      {
        id: 'how-to-get-started',
        icon: '🎯',
        title: 'कैसे शुरू करें',
        description: 'भविष्यवाणी बाजारों में प्रवेश के पहले कदम।',
        content: `<h2>भविष्यवाणी बाजारों के साथ शुरुआत कैसे करें</h2>
<p>एक प्रतिष्ठित भविष्यवाणी बाजार प्लेटफॉर्म चुनें जो आपके अधिकार क्षेत्र में काम करता है।</p>
<p>विस्तृत सामग्री...</p>`
      },
      {
        id: 'common-mistakes',
        icon: '💡',
        title: 'सामान्य गलतियां',
        description: 'दूसरों के अनुभव से सीखें। भविष्यवाणी बाजारों में भाग लेते समय सामान्य नुकसान और गलतफहमियों को समझें।',
        content: `<h2>भविष्यवाणी बाजारों में सामान्य गलतियां</h2>
<p>अत्यधिक आत्मविश्वास पूर्वाग्रह से बचें और बुद्धिमानी से निर्णय लें।</p>
<p>विस्तृत सामग्री...</p>`
      }
    ],
    'how-to': [
      {
        id: 'getting-started-guide',
        icon: '🚀',
        title: 'शुरुआत गाइड',
        description: 'आपकी भविष्यवाणी बाजार यात्रा शुरू करने के लिए व्यापक मार्गदर्शन।',
        content: `<h2>शुरुआत गाइड</h2>
<p>यह मार्गदर्शन आपको भविष्यवाणी बाजारों में व्यापार शुरू करने के लिए आवश्यक सब कुछ बताएगा।</p>
<p>विस्तृत सामग्री...</p>`
      },
      {
        id: 'portfolio-strategy',
        icon: '💼',
        title: 'पोर्टफोलियो रणनीति',
        description: 'एक संतुलित भविष्यवाणी पोर्टफोलियो बनाना सीखें।',
        content: `<h2>पोर्टफोलियो रणनीति</h2>
<p>एक सफल भविष्यवाणी पोर्टफोलियो बनाने के लिए विविधता और जोखिम प्रबंधन की आवश्यकता है।</p>
<p>विस्तृत सामग्री...</p>`
      },
      {
        id: 'risk-management',
        icon: '🛡️',
        title: 'जोखिम प्रबंधन',
        description: 'भविष्यवाणी बाजारों में जोखिम प्रबंधन की आवश्यक तकनीकें।',
        content: `<h2>जोखिम प्रबंधन</h2>
<p>उचित जोखिम प्रबंधन भविष्यवाणी बाजारों में दीर्घकालिक सफलता के लिए महत्वपूर्ण है।</p>
<p>विस्तृत सामग्री...</p>`
      },
      {
        id: 'advanced-trading',
        icon: '📈',
        title: 'उन्नत व्यापार',
        description: 'अनुभवी व्यापारियों के लिए उन्नत रणनीतियां।',
        content: `<h2>उन्नत व्यापार</h2>
<p>एक बार जब आप मूलभूत बातों में महारत हासिल कर लें, ये उन्नत व्यापार रणनीतियों का अन्वेषण करें।</p>
<p>विस्तृत सामग्री...</p>`
      }
    ],
    'sports': [
      {
        id: 'sports-prediction-basics',
        icon: '⚽',
        title: 'खेल भविष्यवाणी मूलभूत',
        description: 'खेल भविष्यवाणी बाजारों को समझना।',
        content: `<h2>खेल भविष्यवाणी मूलभूत</h2>
<p>खेल बाजार सबसे अधिक तरल और लोकप्रिय भविष्यवाणी बाजार हैं।</p>
<p>विस्तृत सामग्री...</p>`
      },
      {
        id: 'analyzing-team-performance',
        icon: '📊',
        title: 'टीम प्रदर्शन का विश्लेषण',
        description: 'बेहतर भविष्यवाणियों के लिए टीमों का विश्लेषण कैसे करें।',
        content: `<h2>टीम प्रदर्शन का विश्लेषण</h2>
<p>खेल भविष्यवाणियों के लिए मुख्य मेट्रिक्स और विश्लेषण विधियां।</p>
<p>विस्तृत सामग्री...</p>`
      },
      {
        id: 'weather-and-injuries',
        icon: '⛅',
        title: 'मौसम और चोटें',
        description: 'खेल भविष्यवाणी में प्रभावशाली कारक।',
        content: `<h2>मौसम और चोटें</h2>
<p>खेल के परिणामों को प्रभावित करने वाले बाहरी कारक।</p>
<p>विस्तृत सामग्री...</p>`
      },
      {
        id: 'sports-arbitrage',
        icon: '🔄',
        title: 'खेल आर्बिट्रेज',
        description: 'आर्बिट्रेज अवसरों को खोजना और दोहन करना।',
        content: `<h2>खेल आर्बिट्रेज</h2>
<p>खेल बाजारों में जोखिम-मुक्त लाभ के लिए उन्नत तकनीक।</p>
<p>विस्तृत सामग्री...</p>`
      }
    ],
    'politics': [
      {
        id: 'election-markets',
        icon: '🗳️',
        title: 'चुनाव बाजार',
        description: 'राजनीतिक भविष्यवाणी बाजारों को समझना।',
        content: `<h2>चुनाव बाजार</h2>
<p>राजनीतिक भविष्यवाणी बाजार चुनाव के परिणामों में अंतर्दृष्टि प्रदान करते हैं।</p>
<p>विस्तृत सामग्री...</p>`
      },
      {
        id: 'polling-vs-markets',
        icon: '📈',
        title: 'सर्वेक्षण बनाम बाजार',
        description: 'पारंपरिक सर्वेक्षण और भविष्यवाणी बाजार डेटा की तुलना करना।',
        content: `<h2>सर्वेक्षण बनाम बाजार</h2>
<p>भविष्यवाणी बाजार पारंपरिक सर्वेक्षणों की तुलना कैसे करते हैं।</p>
<p>विस्तृत सामग्री...</p>`
      },
      {
        id: 'policy-outcomes',
        icon: '📋',
        title: 'नीति परिणाम',
        description: 'नीति निर्णयों और कार्यान्वयनों का भविष्यवाणी करना।',
        content: `<h2>नीति परिणाम</h2>
<p>सरकारी नीति निर्णयों का पूर्वानुमान लगाना।</p>
<p>विस्तृत सामग्री...</p>`
      },
      {
        id: 'geopolitical-events',
        icon: '🌍',
        title: 'भू-राजनीतिक घटनाएं',
        description: 'अंतरराष्ट्रीय राजनीतिक भविष्यवाणियों को नेविगेट करना।',
        content: `<h2>भू-राजनीतिक घटनाएं</h2>
<p>वैश्विक राजनीतिक अनिश्चितताओं को समझना।</p>
<p>विस्तृत सामग्री...</p>`
      }
    ],
    'finance': [
      {
        id: 'crypto-predictions',
        icon: '₿',
        title: 'क्रिप्टो भविष्यवाणियां',
        description: 'क्रिप्टोकरेंसी बाजारों का पूर्वानुमान लगाना।',
        content: `<h2>क्रिप्टो भविष्यवाणियां</h2>
<p>क्रिप्टोकरेंसी बाजारों में व्यापार भविष्यवाणियां।</p>
<p>विस्तृत सामग्री...</p>`
      },
      {
        id: 'stock-market-outlook',
        icon: '📉',
        title: 'स्टॉक बाजार दृष्टिकोण',
        description: 'स्टॉक बाजार की गतिविधियों का पूर्वानुमान लगाना।',
        content: `<h2>स्टॉक बाजार दृष्टिकोण</h2>
<p>स्टॉक बाजार भविष्यवाणियों के लिए रणनीतियां।</p>
<p>विस्तृत सामग्री...</p>`
      },
      {
        id: 'economic-indicators',
        icon: '💹',
        title: 'आर्थिक संकेतक',
        description: 'भविष्यवाणियों के लिए आर्थिक डेटा का उपयोग करना।',
        content: `<h2>आर्थिक संकेतक</h2>
<p>आर्थिक संकेतक भविष्यवाणी बाजारों को कैसे प्रभावित करते हैं।</p>
<p>विस्तृत सामग्री...</p>`
      },
      {
        id: 'interest-rate-markets',
        icon: '💰',
        title: 'ब्याज दर बाजार',
        description: 'केंद्रीय बैंक के निर्णयों का पूर्वानुमास।',
        content: `<h2>ब्याज दर बाजार</h2>
<p>मौद्रिक नीति निर्णयों का पूर्वानुमास लगाना।</p>
<p>विस्तृत सामग्री...</p>`
      }
    ],
    'data': [
      {
        id: 'market-data-analysis',
        icon: '📊',
        title: 'बाजार डेटा विश्लेषण',
        description: 'भविष्यवाणी बाजार डेटा का विश्लेषण।',
        content: `<h2>बाजार डेटा विश्लेषण</h2>
<p>अपनी रणनीतियों को सूचित करने के लिए बाजार डेटा का उपयोग करना।</p>
<p>विस्तृत सामग्री...</p>`
      },
      {
        id: 'historical-accuracy',
        icon: '📈',
        title: 'ऐतिहासिक सटीकता',
        description: 'भविष्यवाणी बाजार सटीकता को समझना।',
        content: `<h2>ऐतिहासिक सटीकता</h2>
<p>भविष्यवाणी बाजार कितने सटीक हैं?</p>
<p>विस्तृत सामग्री...</p>`
      },
      {
        id: 'volume-trends',
        icon: '📉',
        title: 'वॉल्यूम ट्रेंड्स',
        description: 'व्यापार वॉल्यूम पैटर्नों की व्याख्या करना।',
        content: `<h2>वॉल्यूम ट्रेंड्स</h2>
<p>व्यापार वॉल्यूम हमें बाजार के विश्वास के बारे में क्या बताता है।</p>
<p>विस्तृत सामग्री...</p>`
      },
      {
        id: 'probability-distributions',
        icon: '📐',
        title: 'संभावना वितरण',
        description: 'बाजारों में संभावना को समझना।',
        content: `<h2>संभावना वितरण</h2>
<p>भविष्यवाणी परिणामों का सांख्यिकीय विश्लेषण।</p>
<p>विस्तृत सामग्री...</p>`
      }
    ],
    'other': [
      {
        id: 'climate-predictions',
        icon: '🌡️',
        title: 'जलवायु भविष्यवाणियां',
        description: 'जलवायु और पर्यावरणीय घटनाओं का पूर्वानुमास लगाना।',
        content: `<h2>जलवायु भविष्यवाणियां</h2>
<p>जलवायु और पर्यावरणीय परिणामों के लिए भविष्यवाणी बाजार।</p>
<p>विस्तृत सामग्री...</p>`
      },
      {
        id: 'technology-trends',
        icon: '💻',
        title: 'तकनीकी ट्रेंड्स',
        description: 'तकनीकी विकास का पूर्वानुमास लगाना।',
        content: `<h2>तकनीकी ट्रेंड्स</h2>
<p>तकनीकी सफलताओं और अपनाने का पूर्वानुमास लगाना।</p>
<p>विस्तृत सामग्री...</p>`
      },
      {
        id: 'scientific-breakthroughs',
        icon: '🔬',
        title: 'वैज्ञानिक सफलताएं',
        description: 'वैज्ञानिक खोजों का पूर्वानुमास लगाना।',
        content: `<h2>वैज्ञानिक सफलताएं</h2>
<p>वैज्ञानिक भविष्यवाणी बाजारों को समझना।</p>
<p>विस्तृत सामग्री...</p>`
      },
      {
        id: 'social-trends',
        icon: '👥',
        title: 'सामाजिक ट्रेंड्स',
        description: 'सामाजिक और सांस्कृतिक परिवर्तनों का पूर्वानुमास लगाना।',
        content: `<h2>सामाजिक ट्रेंड्स</h2>
<p>सामाजिक और सांस्कृतिक विकास का पूर्वानुमास लगाना।</p>
<p>विस्तृत सामग्री...</p>`
      }
    ]
  }
};

export function getArticles(lang: string, category: string): Article[] {
  return articles[lang]?.[category] || [];
}

export function getArticle(lang: string, category: string, articleId: string): Article | undefined {
  return articles[lang]?.[category]?.find(a => a.id === articleId);
}
