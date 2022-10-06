import React from "react";
import Image from "next/image";
import { images } from "../Assets";
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
              color="#FFFFFF"
              bcolor="#FF645A"
              width="10rem"
              border="none"
            />
          </div>
        </div>
        <div className={styles.footer_lower}>
          <div>
            <h3>INTERGRATIONs</h3>
            <p>magento</p>
            <p>woocommerce</p>
            <p>Google tag manager</p>
            <p>Custom implementation</p>
          </div>
          <div>
            <h3>INTERGRATION</h3>
            <p>Product recommendation</p>
            <p>size helper</p>
            <p>funnel helper</p>
          </div>
          <div>
            <h3>ABOUT US</h3>
            <p>How it started</p>
            <p>Company info</p>
            <p>term</p>
            <p>privacy</p>
          </div>
          <div>
            <h3>CONTACT US</h3>
            <p>Dr. van deenweg 151 8011HJ Zwolle</p>
            <p>+31(0) 933 02 292</p>
            <p>info@chosify.com</p>
          </div>
        </div>
        <div className={styles.lastlogo}>
          <Image src={images.logo} alt="footerlogo" width={150} height={60} />
        </div>
      </div>
    </div>
  );
};
export default Footer;
