import React from "react";
import styles from "../../styles/Footer.module.scss";
import Button from "../components/Button";
const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.footer_works}>
          <h1>How it works</h1>
          <p className={styles.p1}>1. Create a survey</p>
          <p className={styles.p2}>2. Connect your webshop</p>
          <p className={styles.p3}>
            3. Atribute product specification to answers
          </p>
          <p className={styles.p4}>4. Place the widget to your webshop</p>

          <div className={styles.works_button}>
            <Button
              text="Book a demo"
              color="#252526"
              bcolor="white"
              width="10rem"
              border="solid #252526"
            />
          </div>
        </div>
        <div className={styles.footer_lower}>
          <div>
            <h3>PRODUCT</h3>
          </div>
          <div>
            <h3>INTERGRATION</h3>
          </div>
          <div>
            <h3>RESOURCES</h3>
          </div>
          <div>
            <h3>ABOUT US</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
