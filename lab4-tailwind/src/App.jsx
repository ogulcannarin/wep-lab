import { useState, useEffect } from 'react';
import UIKit from './pages/UIKit';
import Portfolio from './pages/Portfolio';

function App() {
  const [currentPage, setCurrentPage] = useState('portfolio');
  const [isDark, setIsDark] = useState(false);

  // Initialize dark mode based on classList on mount
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleDarkMode = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    if (nextTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <>
      <div className="fixed top-4 left-4 z-50 flex gap-2">
        <button
          onClick={() => setCurrentPage(currentPage === 'portfolio' ? 'uikit' : 'portfolio')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          {currentPage === 'portfolio' ? 'Show UI Kit' : 'Show Portfolio'}
        </button>
      </div>
      
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden">☾</span>
        <span className="hidden dark:inline">☀</span>
      </button>

      {currentPage === 'portfolio' ? <Portfolio /> : <UIKit />}
    </>
  );
}

export default App;
