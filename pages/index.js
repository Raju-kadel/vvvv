import Head from "next/head";
import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";
import Banner from "./Banner";
import Productfeed from "./Productfeed";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Amazon Store</title>
      </Head>
      <div>
        <Navbar />
      </div>
      <div>
        <Banner />
        <Productfeed products={products} />
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products: products,
    },
  };
}
