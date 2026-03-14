const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const translations = {
  en: {
    nav: { home: 'Home', install: 'Install', api: 'API', demo: 'Demo' },
    hero: { title: 'OpenCode Controller', subtitle: 'Control OpenCode to execute development tasks via CLI', cta: 'Get Started' },
    features: {
      title: 'Features',
      session: { title: 'Session Management', desc: 'Create and manage development sessions through OpenCode API' },
      autoStart: { title: 'Auto Start', desc: 'Automatically detect and start OpenCode Server' },
      automation: { title: 'Workflow Automation', desc: 'Integrate with external systems like OpenCLAW' }
    },
    install: { title: 'Installation', desc: 'Quick start guide to get OCC running', step1: 'Ensure OpenCode CLI is installed', step2: 'Clone or download the OCC repository', step3: 'Run the provided scripts', code: 'node scripts/bin/opencode-server.js create "Your task"' },
    api: { title: 'API Reference', query: { title: 'Query Sessions', desc: 'List all existing sessions', code: 'node scripts/bin/opencode-server.js query' }, create: { title: 'Create Session', desc: 'Create a new development session', code: 'node scripts/bin/opencode-server.js create "task"' }, continue: { title: 'Continue Session', desc: 'Continue an existing session', code: 'node scripts/bin/opencode-server.js continue <id> "task"' } },
    demo: { title: 'Live Demo', desc: 'Try OCC right now in your terminal' },
    footer: { text: 'OpenCode Controller - Automate your development workflow' }
  },
  zh: {
    nav: { home: '首页', install: '安装', api: '接口', demo: '演示' },
    hero: { title: 'OpenCode 控制器', subtitle: '通过CLI控制OpenCode执行开发任务', cta: '立即开始' },
    features: {
      title: '功能特性',
      session: { title: '会话管理', desc: '通过OpenCode API创建和管理开发会话' },
      autoStart: { title: '自动启动', desc: '自动检测并启动OpenCode服务器' },
      automation: { title: '工作流自动化', desc: '与外部系统(如OpenCLAW)集成' }
    },
    install: { title: '安装指南', desc: '快速入门指南', step1: '确保已安装OpenCode CLI', step2: '克隆或下载OCC仓库', step3: '运行提供的脚本', code: 'node scripts/bin/opencode-server.js create "你的任务"' },
    api: { title: 'API参考', query: { title: '查询会话', desc: '列出所有现有会话', code: 'node scripts/bin/opencode-server.js query' }, create: { title: '创建会话', desc: '创建新的开发会话', code: 'node scripts/bin/opencode-server.js create "任务"' }, continue: { title: '继续会话', desc: '使用新任务继续现有会话', code: 'node scripts/bin/opencode-server.js continue <id> "任务"' } },
    demo: { title: '在线演示', desc: '立即在终端中试用OCC' },
    footer: { text: 'OpenCode 控制器 - 自动化您的开发工作流' }
  }
};

app.use((req, res, next) => {
  const lang = req.query.lang || 'en';
  res.locals.lang = translations[lang] ? lang : 'en';
  res.locals.t = translations[res.locals.lang];
  res.locals.currentLang = res.locals.lang;
  next();
});

const renderPage = (res, template, page) => {
  res.render(template, { t: res.locals.t, lang: res.locals.currentLang, page });
};

app.get('/', (req, res) => renderPage(res, 'index', 'home'));
app.get('/install', (req, res) => renderPage(res, 'install', 'install'));
app.get('/api', (req, res) => renderPage(res, 'api', 'api'));
app.get('/demo', (req, res) => renderPage(res, 'demo', 'demo'));

app.listen(PORT, () => {
  console.log(`OCC Website running at http://localhost:${PORT}`);
});
