import { React, useState } from "react";
import { images } from "../../Assets";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import styles from "../../../styles/NavBar.module.scss";
import Button from "../Button";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={styles.app__navbar} id={styles.Home}>
      <div className={styles.app__navbar_logo}>
        <div className={styles.myimg}>
          <Image src={images.logo1} alt="logo" />
        </div>
      </div>
      <div className={styles.nav_content}>
        <div className={styles.nav_buttons}>
          <Button
            text="Login"
            color="#FFFFFF"
            bcolor="#000035"
            width="9rem"
            border="solid #FF645A"
          />
          <Button
            text="Request demo"
            color="white"
            bcolor="#FF645A"
            width="10rem"
            border="none"
          />
        </div>
        <div>
          <ul className={styles.app__navbar_links}>
            {["Pricing", "Aboutus", "Demo", "Cases", "contact"].map((item) => (
              <li key={`link-${item}`} className="app__flex p-text">
                <a href={`#${item}`}>{item}</a>
                <div />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.app__navbar_menu}>
        <HiMenu onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />

            <Button
              text="Login"
              color="#FFFFFF"
              bcolor="#000035"
              width="9rem"
              border="solid #FF645A"
            />
            <Button
              text="Request demo"
              color="white"
              bcolor="#FF645A"
              width="10rem"
              border="none"
            />
            <ul>
              {["Pricing", "About us", "Demo", "Cases", "contact"].map(
                (item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
