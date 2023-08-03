import Image from "next/image";
import banner from "@/assets/images/banner.jpeg";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={`${styles.Banner} col-12`}>
      <div className={styles.content}>
        <p className={styles.text}>
          <span>+20</span>
          <span>Destinazioni</span>
        </p>
        <p className={styles.text}>
          <span>+15</span>
          <span>Imbarcazioni</span>
        </p>
        <p className={styles.text}>
          <span>+40</span>
          <span>Itinerari</span>
        </p>
      </div>
      <Image src={banner} alt="banner" className={styles.bg} />
      <div className={styles.overlay}></div>
    </div>
  );
};

export default Banner;
