import React, { useState } from "react";
import styles from "./styles.module.css";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;
  const [isDisplay, setIsDisplay] = useState(true);

  return (
    <>
      <nav>
        <div className={styles.nav}>
          <div className={styles.lnav}>
            <span className="text-blue-500 text-2xl">
              blogs<span className="text-pink-700">Spot</span>
            </span>
          </div>
          <div className={`${styles.rnav}  ${styles.tgclass}`}>
            <ul className={`${styles.ullist}  ${styles.tgclass} mb-0`}>
              <li
                className={
                  pathname === "/blogs" ? styles.navtext : styles.textcolor
                }
              >
                <Link href={"/blogs"}>Home</Link>
              </li>
              <li
                className={
                  pathname === "/about" ? styles.navtext : styles.textcolor
                }
              >
                <Link href={"/about"}>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={styles.navbar}>
        <div className={styles.navheading}>
          <span className="text-blue-500 text-2xl">
            blogs<span className="text-pink-700 ">Spot</span>
          </span>
          <FaBars onClick={() => setIsDisplay(!isDisplay)} />
        </div>
      </div>
      <div
        className={`${styles.navpanel} ${
          isDisplay ? styles.show : styles.hide
        } `}
      >
        <div
          className={`${styles.opac_layer}`}
          onClick={() => setIsDisplay(!isDisplay)}
        ></div>
        <div className={styles.cart_content}>
          <div>
            <ul>
              <li className="flex justify-end text-xl">
                <IoMdClose onClick={() => setIsDisplay(!isDisplay)} />
              </li>
            </ul>
            <ul className={styles.uline}>
              {pathname === "/blogs" && <li className={styles.activetag}></li>}
              <Link className={`${styles.navitem}`} href={"/blogs"}>
                Home
              </Link>
            </ul>
            <ul className={styles.uline}>
              {pathname === "/about" && <li className={styles.activetag}></li>}
              <Link className={`${styles.navitem}`} href={"/about"}>
                About
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
