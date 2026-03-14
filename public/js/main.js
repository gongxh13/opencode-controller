(function() {
  const themeToggle = document.getElementById('theme-toggle');
  const langToggle = document.getElementById('lang-toggle');
  
  const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  
  const getStoredTheme = () => localStorage.getItem('theme');
  
  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  };
  
  const initTheme = () => {
    const stored = getStoredTheme();
    const theme = stored || getSystemTheme();
    applyTheme(theme);
  };
  
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
  
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!getStoredTheme()) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
  
  langToggle.addEventListener('change', (e) => {
    const currentPath = window.location.pathname;
    const url = new URL(window.location.href);
    url.searchParams.set('lang', e.target.value);
    window.location.href = url.toString();
  });
  
  initTheme();
})();
