import React from 'react';
import styles from '../app/styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <div className={styles.leftTop}>
          <h3>Be the first to know</h3>
          <p>Sign up for updates from Meta Muse</p>
          <div className={styles.subscribe}>
            <input type="email" placeholder="Enter your email" className={styles.emailInput} />
            <button className={styles.subscribeBtn}>Subscribe</button>
          </div>
        </div>
        <div className={styles.rightTop}>
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <p>CURRENCY</p>
          <div className={styles.currency}>
            <img src="/usa.svg" alt="USA Flag" className={styles.flagIcon} />
            <span>USD</span>
          </div>
          <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>

      {/* Separator */}
      <div className={styles.separator}></div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.leftBottom}>
          <h4>mettā muse</h4>
          <ul className={styles.list}>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className={styles.middleBottom}>
          <h4>Quick Links</h4>
          <ul className={styles.list}>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className={styles.rightBottom}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            <img src="/socialLink.svg" alt="Social Links" />
          </div>
          <p>Meta Muse accepts:</p>
          <div className={styles.paymentMethods}>
            <img src="/payment.svg" alt="Payment Method" />
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className={styles.footerBottom}>
        <p>© 2024 Meta Muse. All rights reserved. | Privacy Policy | Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
