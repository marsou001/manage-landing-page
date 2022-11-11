import Navbar from "../components/Navbar/Navbar";
import BackgroundShape from '../shared/ui/BackgroundShape';
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Head from "next/head";
import Testimonials from "../components/Testimonials/Testimonials";
import SignUp from "../components/SignUp/SignUp";
import Footer from "../components/Footer/Footer";

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
        {/* <BackgroundShape top={-380} left={-20} mdTop={-230} mdLeft={780} scale={1.1} beneath /> */}
        {/* <BackgroundShape top={-330} left={-80} mdTop={-230} mdLeft={780} beneath /> */}
        <BackgroundShape top={0} beneath />
        {/* <div style={{ 
          width: 300, 
          height: 300, 
          backgroundColor: 'green', 
          position: 'absolute',
          top: 40,
          right: 0
        }}></div> */}
        <Hero />
        <Features />
        <Testimonials />
        <SignUp />
        <Footer />
      </main>
    </>
  );
}
