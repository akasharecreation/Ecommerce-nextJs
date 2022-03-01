import Head from "next/head";
import Header from "../components/Header"
import Banner from "../components/Banner"
import ProductFeed from "../components/ProductFeed"
import { GetServerSideProps } from "next";

export default function Home({ products }: any) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

    
      {/*header */}
     <Header />
     <main className="max-w-screen-2xl mx-auto">
       { /* banner */}
     <Banner />


     <ProductFeed products={products}/>
     </main>
   </div>
  );
} 

export const getServerSideProps: GetServerSideProps = async (context) => {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return { 
    props: {
      products,
    },
   };
}

// GET https://fakestoreapi.com/products