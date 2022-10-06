import React from "react";
import styles from "../../styles/About.module.scss";
import Button from "../components/Button";
import Image from "next/image";
import { images } from "../Assets";
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
              text="Read more"
              color="#FFFFFF"
              bcolor="#FF645A"
              width="10rem"
              border="none"
            />
          </div>
        </div>
        <div className={styles.about_lower}>
          <div>
            <div className={styles.about_lower_content}>
              <h2>Shosipfy make it easy</h2>
              <p>
                we have made the following intergration with the most common
                system
              </p>
            </div>
            <div className={styles.about_lower_image}>
              <div className={styles.image1}>
                <div className={styles.smallimage}>
                  <Image src={images.a} alt="a" width="100%" height="100%" />
                </div>
                <div className={styles.smallimage}>
                  <Image src={images.b} alt="b" width="100%" height="100%" />
                </div>
              </div>
              <div className={styles.image2}>
                <div className={styles.smallimage}>
                  <Image src={images.c} alt="c" width="100%" height="100%" />
                </div>
                <div className={styles.smallimage}>
                  <Image src={images.d} alt="d" width="100%" height="100%" />
                </div>
              </div>
              <div className={styles.image3}>
                <div className={styles.smallimage}>
                  <Image src={images.e} alt="e" width="100%" height="100%" />
                </div>
                <div className={styles.smallimage}>
                  <Image src={images.f} alt="f" width="100%" height="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
