import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';

function App() {
  const currenTheme = localStorage.getItem('currentTheme');

  const [theme, setTheme] = useState(currenTheme ? currenTheme : 'light');

  useEffect(() => {
    localStorage.setItem('currentTheme', theme);
  }, [theme]);

  return (
    <>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
      </div>
    </>
  );
}

export default App;
