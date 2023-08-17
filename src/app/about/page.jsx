import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Programmers from "public/programmers.jpg";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={Programmers} fill={true} alt="" className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digtal experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who am I?</h1>
          <p className={styles.desc}>
            I am an experienced software developer who is very proficient at
            building scalable, fast-performing applications and software using
            React Js / Next Js and its ecosystem.
            <br />
            <br />I have thrived in the web development space for more than 3+
            years now and have amassed the prerequisite expertise needed to
            bring your web product to life. What gives me an edge is the fact
            that I also know how to make eye-catching graphic design.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What I do?</h1>
          <p className={styles.desc}>
            We create stunning, responsive and dynamic websites to help improve
            your online presence.
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Graphic Design
            <br />
            <br /> - Islamic & Arabic Education
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
