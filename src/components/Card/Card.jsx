import { RightArrow } from "../svg";
import styles from "./Card.module.scss";

const Card = ({ data }) => {
  const departureDate = new Date(data.departureDate);
  const arrivalDate = new Date(data.arrivalDate);

  return (
    <div className={`${styles.Card} col-xs-12`}>
      <p className={styles.price}>
        <span className={styles.bold}>
          {data.budget.value}
          {data.budget.currencyCode}
        </span>
        <span className={styles.small}>{data.budget.costType}</span>
      </p>
      <h2 className={styles.title}>{data.title}</h2>
      <div className={styles.mainInfo}>
        <div className={styles.departure}>
          <p>{"Partenza da".toUpperCase()}</p>
          <h3>{data.departure.Port}</h3>
        </div>
        <div className={styles.boat}>
          <p>{data.boatType}</p>
          <p>
            {data.numberOfDays} {data.numberOfDays > 1 ? "giorni" : "giorno"}
          </p>
        </div>
        <div className={styles.time}>
          <p className={styles.text}>
            <span>
              {departureDate.toLocaleString("it-IT", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </span>
            <span className={styles.time}>
              {departureDate.toLocaleString("it-IT", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </p>
          <p className={styles.icon}>
            <RightArrow />
          </p>
          <p className={styles.text}>
            <span>
              {arrivalDate.toLocaleString("it-IT", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </span>
            <span className={styles.time}>
              {arrivalDate.toLocaleString("it-IT", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </p>
        </div>
        <div className={styles.reservations}>
          <p className={styles.total}>
            {data.reservations} {data.reservationsType}
          </p>
          <p className={styles.availability}>
            <span className={styles.title}>Disponibilità</span>{" "}
            <span className={styles.number}>{data.reservationsAvailable}</span>
          </p>
        </div>
      </div>
      <button className={styles.button}>{"Prenota".toUpperCase()}</button>
    </div>
  );
};

export default Card;
