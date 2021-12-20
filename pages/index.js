import Head from "next/head";
import Navbar from "./Navbar";

import Banner from "./Banner";
import Productfeed from "./Productfeed";

const Home = ({ products }) => {
  return (
    <div>
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
    </div>
  );
};
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
export default Home;
