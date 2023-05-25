import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitThree, benefitTwo } from "../components/data";
import Map from "../components/map";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Stats from "../components/stats";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>IMECO - Website Ejemplo</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />
      <Hero />
      <Stats />
      <SectionTitle
        pretitle="Prótesis Quirúrgicas"
        title=" Prótesis Humanos y Animales">
        Somos el referente local más confiable para los profesionales y pacientes, por la calidad de sus productos, constante innovación y crecimiento. Garantizando la provisión de productos de calidad internacional, fabricados bajo la certificación de normas ISO 9001, lo que nos coloca a la altura de las principales empresas del mundo, ganando mercados internacionales impensados para la industria local, lo que se ve reflejado en la más alta calidad de servicio al profesional y una mejor calidad de vida para el paciente.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitThree} />
      <Cta title="Descubrí nuestros productos" desc="Consulta nuestros productos" button="Ver Productos" />
      <SectionTitle title="Nuestras Marcas">
      </SectionTitle>
      <Faq />
      <SectionTitle
        pretitle="Estamos para Ayudarte"
        title="Contactanos">
      </SectionTitle>
      <Testimonials />
      <Map />
      <Footer />
    </>
  );
}

export default Home;