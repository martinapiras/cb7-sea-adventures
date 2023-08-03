import Head from "next/head";
import { data } from "@/mocks/data.js";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Hero />
      <div className={`${styles.container} col-12`}>
        {data.map((trip) => (
          <Card data={trip} />
        ))}
      </div>
      <Banner />
    </>
  );
}
