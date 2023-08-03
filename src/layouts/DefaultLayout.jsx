import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./DefaultLayout.module.scss";

const DefaultLayout = ({ children }) => {
  return (
    <div className={`${styles.DefaultLayout} col-12`}>
      <Header />
      <div className={`${styles.content} col-12`}>{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
