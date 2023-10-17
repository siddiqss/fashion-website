import Header from "@/components/Header";
import LenisProvider from "./lenis-provider";
import About from "@/components/About/About";
import AnimatePresenceProvider from "./animate-presence-provider";
import Shop from "@/components/Shop/Shop";
import Banner from "@/components/Banner/Banner";
import NewArrival from "@/components/NewArrival/NewArrival";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  return (
    <>
      {/* <LocomotiveProvider> */}
      <LenisProvider>
        <AnimatePresenceProvider>
          <main className="App">
            <Header />
            <About />
            <Shop />
            <Banner />
            <NewArrival />
            <Footer />
          </main>
        </AnimatePresenceProvider>
      </LenisProvider>

      {/* </LocomotiveProvider> */}
    </>
  );
}
