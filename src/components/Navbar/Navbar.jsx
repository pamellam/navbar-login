import logoLight from '../../assets/logo-black.png';
import logoDark from '../../assets/logo-white.png';
import searchIconLight from '../../assets/search-w.png';
import searchIconDark from '../../assets/search-b.png';
import toggleLightIcon from '../../assets/night.png';
import toggleDarkIcon from '../../assets/day.png';
import './Navbar.css';

const Navbar = ({ theme, setTheme }) => {
  const toggleMode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div className={`navbar ${theme}`}>
      <img
        src={theme == 'light' ? logoLight : logoDark}
        alt="Logo"
        className="logo"
      />

      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>

      <div className={`${theme} search-box `}>
        <input type="text" placeholder="Search" />
        <img
          src={theme == 'light' ? searchIconLight : searchIconDark}
          alt="Search icon"
        />
      </div>

      <img
        onClick={() => {
          toggleMode();
        }}
        src={theme == 'light' ? toggleLightIcon : toggleDarkIcon}
        alt="Search icon"
        className="toggle-icon"
      />
    </div>
  );
};

export default Navbar;
