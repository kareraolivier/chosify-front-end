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
            <div className={styles.home_button}>
              <Button
                text="Learn more"
                color="#FFFFFF"
                bcolor="none"
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
          <div className={styles.home_image}>
            <Image src={images.homeimg} alt="home image" />
          </div>
        </div>
        <div className={styles.home_lower}>
          <h1>
            Chosefy the best
            <b> choice </b>
            <br />
            to make a<b> choice</b>
          </h1>
          <div className={styles.home_lower_content}>
            <div>
              <Image src={images.ai1} alt="home image" />
              <p>20% comversational boost</p>
            </div>
            <div>
              <Image src={images.ai2} alt="home image" />
              <p>35% comversational boost</p>
            </div>
            <div>
              <Image src={images.ai3} alt="home image" />
              <p>100% More customer satisfaction</p>
            </div>
          </div>
        </div>
        <div className={styles.badge}>
          <h1>
            Create survey to give your client the best product recommendation
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
