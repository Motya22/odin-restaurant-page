import home from './home';
import switchTab from './index';
import './styles.css';

export default function init() {
  const contentEl = document.querySelector('#content');

  // Add header
  const headerEl = document.createElement('header');
  headerEl.classList.add('header');

  const navEl = document.createElement('nav');
  navEl.classList.add('nav');

  function clickHandlerTabButton(e) {
    e.preventDefault();

    const selectedTabName = e.target.dataset.tabName;

    if (!selectedTabName) return;

    const selectedTab = e.target;

    if (selectedTab.classList.contains('active')) return;

    const tabs = document.querySelectorAll('.btn');

    switchTab(selectedTabName);
    tabs.forEach((tab) => tab.classList.remove('active'));
    selectedTab.classList.add('active');
  }

  const pageNames = ['Home', 'Menu', 'Contact'];
  pageNames.forEach((name, index) => {
    const btn = document.createElement('a');
    btn.href = '';
    btn.textContent = name;
    btn.dataset.tabName = name;
    btn.classList.add('btn');

    if (index === 0) btn.classList.add('active');

    btn.addEventListener('click', clickHandlerTabButton);

    navEl.appendChild(btn);
  });

  headerEl.appendChild(navEl);

  contentEl.appendChild(headerEl);

  // Add main
  const mainEl = document.createElement('main');
  mainEl.classList.add('main');

  contentEl.appendChild(mainEl);

  home();
}
