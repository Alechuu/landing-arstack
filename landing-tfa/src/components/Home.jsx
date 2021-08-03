import { useEffect } from "react";
import Razones from "./Razones";
import Team from "./Team";
import AOS from "aos";
import "aos/dist/aos.css";
import { Player } from "@lottiefiles/react-lottie-player";
import homeAnim from "../assets/homeAnim.json";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import LocalizedStrings from "react-localization";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  let home = new LocalizedStrings({
    en: {
      titulo: "We are the solution",
      subtitulo: "for your ",
      descripcion:
        "is a development team dedicated to build and deploy robust, quality software. ",
      idea: "You tell us your idea ",
      realidad: "We make it happen!",
      contacto: "Contact us",
      arreglo: [
        "startup",
        "entrepreneurship",
        "business",
        "company",
        "organization",
        "commerce",
      ],
    },
    es: {
      titulo: "Somos la solución",
      subtitulo: "para tu",
      descripcion:
        "es un equipo de desarrollo dedicado a la construcción y entrega de software de calidad. ",
      idea: "Vos contanos tu idea ",
      realidad: "¡Nosotros la hacemos realidad!",
      contacto: "Contactarse",
      arreglo: [
        "emprendimiento",
        "negocio",
        "empresa",
        "organización",
        "compañía",
        "pyme",
        "comercio",
      ],
    },
  });

  return (
    <div>
      <div className="flex flex-col justify-between px-4 mx-auto -mt-0 md:-mt-16 2xl:-mt-0 2xl:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
        <div className="w-full lg:w-6/12 pt-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
          <div
            data-aos="fade-in"
            className="max-w-xl mb-6 text-left bg-white rounded p-6 border border-gray-200 shadow-xl"
          >
            <h2 className="max-w-lg mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              {home.titulo}
              <br className="hidden md:block" /> {home.subtitulo}
              <br></br>{" "}
              <span className="inline-block text-orange-700">
                <Typed
                  strings={home.arreglo}
                  loop
                  typeSpeed={90}
                  backSpeed={70}
                />{" "}
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              <span className="font-bold ">Arstack</span> {home.descripcion}
              <br></br> {home.idea}
              <br></br>
              <p className="font-bold">{home.realidad}</p>
            </p>
            <div className="flex items-center mt-4">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-700 hover:bg-orange-800 focus:shadow-outline focus:outline-none"
              >
                {home.contacto}
              </Link>
            </div>
          </div>
        </div>
        <div data-aos="fade-in" className="w-full lg:w-11/12">
          <Player autoplay loop src={homeAnim} />
        </div>
      </div>
      <div
        aria-label="Desplazarse hacia abajo"
        className="-mt-12 2xl:mt-0 hidden cursor-pointer bg-white animate-bounce lg:flex items-center justify-center w-12 h-12 mb-10 mx-auto text-gray-600 duration-300 transform border border-gray-400 rounded-full hover:text-orange-900 hover:border-orange-800 hover:shadow hover:scale-110"
        onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 12 12"
          fill="currentColor"
        >
          <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
        </svg>
      </div>
      <Razones />
      <Team />
    </div>
  );
}
export default Home;
