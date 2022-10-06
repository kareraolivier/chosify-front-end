import React from "react";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import { images } from "../Assets";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className={styles.homesection}>
      <div className={styles.container}>
        <div className={styles.home}>
          <div className={styles.home_content}>
            <h2>Boost your comversationwith 40%off</h2>
            <p>
              Help your customer to make the right choice based on AI and
              machine learning. It is hard to make a choice out of buch similar
              products. Let chosify help you to make the right choice.
            </p>
          </div>
          <div className={styles.home_image}>
            <Image src={images.home} alt="home image" />
          </div>
          <div className={styles.home_button}>
            <Button
              text="Learn more"
              color="#FFFFFF"
              bcolor="#000035"
              width="9rem"
              border="solid #FF645A"
            />
            <Button
              text="start trial"
              color="#FFFFFF"
              bcolor="#FF645A"
              width="9rem"
              border="none"
            />
          </div>
        </div>
        <div className={styles.home_lower}>
          <div>
            <h1>
              Chosefy the best
              <b> choice </b>
              <br />
              to make a<b> choice</b>
            </h1>
            <div className={styles.home_lower_content}>
              <div>
                <Image
                  src={images.ai11}
                  alt="home image"
                  width={120}
                  height={120}
                />
                <p>CONVERSATIONAL INCREASE</p>
              </div>
              <div>
                <Image
                  src={images.ai22}
                  alt="home image"
                  width={120}
                  height={120}
                />
                <p>BETTER CUSTOMER EXPERIENCE</p>
              </div>
              <div>
                <Image
                  src={images.ai33}
                  alt="home image"
                  width={120}
                  height={120}
                />
                <p>LESS RETURN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.badge}>
        <h1>
          Create survey to give your client the best product recommendation
        </h1>
      </div>
    </div>
  );
};

export default Home;
