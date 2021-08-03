import Logo from "../assets/logo_redondo_2.svg";
import { Link } from "react-router-dom";
import LocalizedStrings from "react-localization";

let foot = new LocalizedStrings({
  en: {
    texto: "Software Development Team - 2021",
    react: "Built entirely with React",
  },
  es: {
    texto: "Equipo de Desarrollo de Software - 2021",
    react: "Desarrollado en React",
  },
});
function Footer() {
  return (
    <div className="relative mt-16 bg-white">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-white"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex flex-col justify-center pt-5 pb-10 border-t border-white sm:flex-row">
          <div className="flex flex-col">
            <a className="cursor-pointer" href="/">
              <div className="flex items-center justify-center">
                <img
                  className="h-14 w-14 mt-1 mb-1"
                  src={Logo}
                  alt="Logo Arstack"
                />
              </div>
              <p className="text-2xl mb-2 text-orange-700">
                <b>Arstack</b>
              </p>
            </a>
            <p className="font-medium mb-2">{foot.texto}</p>
            <div className="grid grid-cols-3 gap-2 mt-2 items-center justify-center">
              <a
                href="https://api.whatsapp.com/message/AP3QQUGFSDBGM1"
                rel="noreferrer"
                target="__blank"
              >
                {" "}
                <i
                  className="fab fa-whatsapp text-orange-700 hover:text-orange-900 cursor-pointer"
                  style={{ fontSize: 30 }}
                ></i>
              </a>

              <a
                href="https://www.instagram.com/arstack.dev/"
                target="__blank"
                rel="noreferrer"
              >
                <i
                  className="fab fa-instagram text-orange-700 hover:text-orange-900 cursor-pointer"
                  style={{ fontSize: 30 }}
                ></i>
              </a>
              <a href="mailto:info@arstack.dev">
                <i
                  className="fas fa-at text-orange-700 hover:text-orange-900 cursor-pointer"
                  style={{ fontSize: 28 }}
                ></i>
              </a>
            </div>
            <div className="flex justify-center items-center">
              <Link
                to="/portfolio"
                aria-label="Portfolio"
                title="Portfolio"
                className="hover:bg-orange-800 transition duration-200 mt-4 lg:mt-2 text-white px-2 w-1/2 font-medium py-1 bg-orange-700 rounded"
                onClick={() => window.scrollTo(0, 0)}
              >
                Portfolio
              </Link>
            </div>
            <p className="mt-8">
              <i className="fab fa-react" style={{ fontSize: 18 }}></i>{" "}
              {foot.react}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
