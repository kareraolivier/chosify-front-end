import React from "react";
import styles from "../../styles/About.module.scss";
import Button from "../components/Button";
const About = () => {
  return (
    <div id="Aboutus">
      <div className={styles.about}>
        <div className={styles.about_feature}>
          <h1>Features</h1>
          <div className={styles.about_feature_content}>
            <div className={styles.content1}>
              <h2>
                Fast and easy intergration no <br />
                coding needed
              </h2>
            </div>
            <div className={styles.content2}>
              <h2>
                Fast and easy intergration no
                <br /> coding needed
              </h2>
            </div>
            <div className={styles.content3}>
              <h2>
                Fast and easy intergration no
                <br /> coding needed
              </h2>
            </div>
          </div>
          <div className={styles.feature_button}>
            <Button
              text="Book a demo"
              color="#252526"
              bcolor="white"
              width="10rem"
              border="solid #252526"
            />
          </div>
        </div>
        <div className={styles.about_lower}>
          <div className={styles.about_lower_content}>
            <h2>Shosipfy make it easy</h2>
            <p>
              we have made the following intergration with the most common
              system
            </p>
          </div>
          <div className={styles.about_lower_image}>
            <div className={styles.image1}>
              <h2>
                Fast and easy intergration no <br />
                coding needed
              </h2>
            </div>
            <div className={styles.image2}>
              <h2>
                Fast and easy intergration no
                <br /> coding needed
              </h2>
            </div>
            <div className={styles.image3}>
              <h2>
                Fast and easy intergration no
                <br /> coding needed
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
