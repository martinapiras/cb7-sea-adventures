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
  const [sortedList, setSortedList] = useState([...data]);
  const [depFavignana, setDepFavignana] = useState([]);
  const [depLampedusa, setDepLampedusa] = useState([]);
  const [depLipari, setDepLipari] = useState([]);
  const [depMarsala, setDepMarsala] = useState([]);
  const [depPalermo, setDepPalermo] = useState([]);
  const [depPantelleria, setDepPantelleria] = useState([]);
  const [depSalina, setDepSalina] = useState([]);
  const [depSanVito, setDepSanVito] = useState([]);
  const [depUstica, setDepUstica] = useState([]);
  const [showSorted, setShowSorted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Mostra tutti");

  const showMore = () => setList(data.slice(0, list.length + 8));

  useEffect(() => {
    setRandomList(shuffle(randomList).slice(0, 8));

    setSortedList(
      sortedList.sort((a, b) => {
        if (a.departure.Port < b.departure.Port) {
          return -1;
        } else if (a.departure.Port > b.departure.Port) {
          return 1;
        } else return 0;
      })
    );

    setDepFavignana(sortedList.slice(0, 2));
    setDepLampedusa(sortedList.slice(2, 7));
    setDepLipari(sortedList.slice(7, 9));
    setDepMarsala(sortedList.slice(9, 15));
    setDepPalermo(sortedList.slice(15, 22));
    setDepPantelleria(sortedList.slice(22, 24));
    setDepSalina(sortedList.slice(24, 25));
    setDepSanVito(sortedList.slice(25, 31));
    setDepUstica(sortedList.slice(31, 32));
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
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
                      setSelectedValue(e.target.innerText);
                    }}
                  >
                    Mostra tutti
                  </li>
                  <li
                    className={styles.option}
                    onClick={(e) => {
                      setShowSorted(true);
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
        </div>
        {showSorted ? (
          <div className={`${styles.container} col-12`}>
            <div className={styles.port}>
              <h2 className={styles.portTitle}>Favignana</h2>
              {depFavignana.map((trip) => (
                <Card data={trip} key={trip.id} />
              ))}
            </div>
            <div className={styles.port}>
              <h2 className={styles.portTitle}>Lampedusa</h2>
              {depLampedusa.map((trip) => (
                <Card data={trip} key={trip.id} />
              ))}
            </div>
            <div className={styles.port}>
              <h2 className={styles.portTitle}>Lipari</h2>
              {depLipari.map((trip) => (
                <Card data={trip} key={trip.id} />
              ))}
            </div>
            <div className={styles.port}>
              <h2 className={styles.portTitle}>Marsala</h2>
              {depMarsala.map((trip) => (
                <Card data={trip} key={trip.id} />
              ))}
            </div>
            <div className={styles.port}>
              <h2 className={styles.portTitle}>Palermo</h2>
              {depPalermo.map((trip) => (
                <Card data={trip} key={trip.id} />
              ))}
            </div>
            <div className={styles.port}>
              <h2 className={styles.portTitle}>Pantelleria</h2>
              {depPantelleria.map((trip) => (
                <Card data={trip} key={trip.id} />
              ))}
            </div>
            <div className={styles.port}>
              <h2 className={styles.portTitle}>Salina</h2>
              {depSalina.map((trip) => (
                <Card data={trip} key={trip.id} />
              ))}
            </div>
            <div className={styles.port}>
              <h2 className={styles.portTitle}>San Vito lo Capo</h2>
              {depSanVito.map((trip) => (
                <Card data={trip} key={trip.id} />
              ))}
            </div>
            <div className={styles.port}>
              <h2 className={styles.portTitle}>Ustica</h2>
              {depUstica.map((trip) => (
                <Card data={trip} key={trip.id} />
              ))}
            </div>
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
