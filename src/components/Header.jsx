import Link from 'next/link';
import styles from '../app/styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Top Black Strip */}
      <div className={styles.topStrip}></div>

      {/* Main Header */}
      <div className={styles.topHeader}>
        {/* Header Content Container */}
        <div className={styles.headerContent}>
          {/* Left: Logo */}
          <div className={styles.logo}>
            <img src="/Logo.svg" alt="Logo" className={styles.logoImage} />
          </div>

          {/* Center: Company Name */}
          <div className={styles.companyName}>
            <h1>LOGO</h1>
          </div>

          {/* Right: Icons */}
          <div className={styles.iconContainer}>
            <div className={styles.icons}>
              <img src="/search-normal.svg" alt="Search" className={styles.icon} />
              <img src="/heart.svg" alt="Wishlist" className={styles.icon} />
              <img src="/shopping-bag.svg" alt="Cart" className={styles.icon} />
              <img src="/profile.svg" alt="Profile" className={styles.icon} />
              <img src="/Language.svg" alt="Language" className={styles.languageIcon} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Navigation Bar */}
      <nav className={styles.navbar}>
        {/* New div container for nav elements */}
        <div className={styles.navContainer}>
          <ul className={styles.navList}>
            <li><a href="#">SHOP</a></li>
            <li><a href="#">SKILLS</a></li>
            <li><a href="#">STORIES</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT US</a></li>
          </ul>
        </div>
      </nav>

      {/* Gray Line Below Navigation */}
      <div className={styles.grayLine}></div>
    </header>
  );
};

export default Header;
