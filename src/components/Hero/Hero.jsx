import Image from "next/image";
import hero from "@/assets/images/hero.jpeg";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={`${styles.Hero} col-12`}>
      <h1 className={styles.title}>Lorem ipsum dolor sit amet</h1>
      <Image src={hero} alt="hero" className={styles.bg} />
      <div className={styles.overlay}></div>
    </div>
  );
};

export default Hero;
