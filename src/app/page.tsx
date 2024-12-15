import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import MenuItems from "@/components/MenuItems";
import ModefiedProduct from "@/components/ModefiedProduct";
import Progesser from "@/components/Progesser";
import ProductList from "@/components/ProductList";
import Footer from "@/components/Footer";
import Reservation from "@/components/Reservation";


export default function Home() {
  return (
    <>
      <Header />
      <Navbar/>
      <Offer />
      <Banner />
      <Card />
      <Carousel />
      <MenuItems />
      <ModefiedProduct />
      <Progesser />
      <ProductList />
      <Reservation />
      <Footer />
    </>
  )
}