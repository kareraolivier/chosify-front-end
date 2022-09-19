import React from "react";
import styles from "../../styles/About.module.scss";
import Button from "../components/Button";
const About = () => {
  return (
    <div>
      {/* <div className="container"> */}
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
        <div className={styles.about_lower}></div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default About;
