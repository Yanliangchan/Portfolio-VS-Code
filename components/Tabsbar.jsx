import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="home.jsx" path="/" style={{ color: 'white' }} />
      <Tab icon="/html_icon.svg" filename="about.html" path="/about" style={{ color: 'white' }} />
      <Tab icon="/css_icon.svg" filename="contact.css" path="/contact" style={{ color: 'white' }} />
      <Tab icon="/js_icon.svg" filename="projects.js" path="/projects" style={{ color: 'white' }} />
      <Tab icon="/markdown_icon.svg" filename="github.md" path="/github" style={{ color: 'white' }} />
    </div>
  );
};
 
export default Tabsbar;
