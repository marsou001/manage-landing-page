import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Head from "next/head";
import Testimonials from "../components/Testimonials/Testimonials";

export default function Home() {
  return (    
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
      </main>
    </>
  );
}
