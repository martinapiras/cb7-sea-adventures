import { useEffect, useState } from "react";
import Head from "next/head";
import { data } from "@/mocks/data.js";
import { shuffle } from "@/utils/fn";
import { ChevronDown } from "@/components/svg";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  const [list, setList] = useState(data.slice(0, 8));
  const [randomList, setRandomList] = useState([...data]);
  const [showSorted, setShowSorted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPort, setIsOpenPort] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Mostra tutti");
  const [selectedPort, setSelectedPort] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const ports = [
    "Favignana",
    "Lampedusa",
    "Lipari",
    "Marsala",
    "Palermo",
    "Pantelleria",
    "Salina",
    "San Vito lo Capo",
    "Ustica",
  ];

  const handleChosenList = (port) => {
    setIsOpen(false);
    setSelectedPort(port);
    setList(data.filter((trip) => trip.departure.Port === port));
  };

  const showMore = () => setList(data.slice(0, list.length + 8));

  useEffect(() => {
    setRandomList(shuffle(randomList).slice(0, 8));
  }, []);

  return (
    <>
      <Head>
        <title>SeaAdventures</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Hero />
      <section className={`${styles.section} col-12`}>
        <div className={styles.row}>
          <div
            className={styles.dropdownContainer}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`${styles.menu} ${isOpen && styles.openMenu}`}>
              <span className={styles.text}>{selectedValue}</span>
              <span className={`${styles.icon} ${isOpen && styles.openIcon}`}>
                <ChevronDown />
              </span>
            </div>
            <div className={styles.dropdown}>
              {isOpen && (
                <ul className={styles.list}>
                  <li
                    className={styles.option}
                    onClick={(e) => {
                      setShowSorted(false);
                      setIsOpen(false);
                      setIsDisabled(true);
                      setSelectedValue(e.target.innerText);
                      setList(data.slice(0, 8));
                    }}
                  >
                    Mostra tutti
                  </li>
                  <li
                    className={styles.option}
                    onClick={(e) => {
                      setShowSorted(true);
                      setIsDisabled(false);
                      setIsOpen(false);
                      setSelectedValue(e.target.innerText);
                    }}
                  >
                    Mostra per porto di partenza
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div
            className={`${styles.dropdownContainer} ${
              isDisabled && styles.disabled
            }`}
            onClick={!isDisabled ? () => setIsOpenPort(!isOpenPort) : undefined}
          >
            <div className={`${styles.menu} ${isOpenPort && styles.openMenu}`}>
              <span className={styles.text}>{selectedPort}</span>
              <span
                className={`${styles.icon} ${isOpenPort && styles.openIcon}`}
              >
                <ChevronDown />
              </span>
            </div>
            <div className={styles.dropdown}>
              {isOpenPort && (
                <ul className={styles.list}>
                  {ports.map((port, i) => (
                    <li
                      className={styles.option}
                      key={i}
                      onClick={(e) => handleChosenList(e.target.innerText)}
                    >
                      {port}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        {showSorted ? (
          <div className={`${styles.container} col-12`}>
            {list.map((trip) => (
              <Card data={trip} key={trip.id} />
            ))}
          </div>
        ) : (
          <>
            <div className={`${styles.container} col-12`}>
              {list.map((trip) => (
                <Card data={trip} key={trip.id} />
              ))}
            </div>
            {list.length !== data.length && (
              <button className={styles.button} onClick={showMore}>
                {"Mostra altri".toUpperCase()}
              </button>
            )}
          </>
        )}
      </section>
      <Banner />
      <section className={`${styles.section} col-12`}>
        <h2 className={styles.title}>Avventure da scoprire</h2>
        <div className={`${styles.container} col-12`}>
          {randomList.length === 8 &&
            randomList.map((trip) => <Card data={trip} key={trip.id} />)}
        </div>
      </section>
    </>
  );
}
