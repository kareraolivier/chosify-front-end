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
          <Image src={images.logo} alt="logo" />
        </div>
      </div>
      <div className={styles.nav_content}>
        <div className={styles.nav_buttons}>
          <Button
            text="Login"
            color="#252526"
            bcolor="white"
            width="5rem"
            border="solid #252526"
          />
          <Button
            text="Request demo"
            color="white"
            bcolor="rgb(42, 62, 126)"
            width="9rem"
            border="solid #252526"
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
