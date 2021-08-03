import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_redondo_2.svg";
import LocalizedStrings from "react-localization";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let contacto = new LocalizedStrings({
    en: {
      contacto: "Get in touch",
    },
    es: {
      contacto: "Contacto",
    },
  });

  return (
    <div className="z-10 relative px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:w-full md:px-24 lg:px-8 bg-white shadow-md">
      <div className="relative flex items-center justify-between">
        <Link to="/" className="inline-flex items-center">
          <img className="h-14 w-14" src={Logo} alt="Logo Arstack" />
          <span className="ml-2 mb-0.5 text-xl font-bold tracking-wide text-gray-800 uppercase">
            Arstack
          </span>
        </Link>
        <ul className="flex items-center hidden space-x-4 lg:flex">
          <li>
            <Link
              title="Contacto"
              aria-label="Contacto"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-700 hover:bg-orange-800 focus:outline-none"
              to="/contacto"
            >
              <i className="fas fa-comment-alt mr-2 text-sm mt-0.5"></i>
              {contacto.contacto}
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-700 hover:bg-orange-800 focus:outline-none"
              aria-label="Portfolio"
              title="Portfolio"
            >
              <i className="fas fa-briefcase mr-2 text-md"></i>
              Portfolio
            </Link>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Abrir Menú"
            title="Abrir Menú"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:ring focus:ring-orange-700 hover:bg-deep-orange-50 focus:bg-deep-orange-50 mb-1"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm z-10 relative">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="Equipo de desarrollo Arstack"
                      title="ARSTACK"
                      className="inline-flex items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <img
                        className="h-12 w-12"
                        src={Logo}
                        alt="Logo Arstack"
                      />
                      <span className="ml-2 mb-1 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        ARSTACK
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Cerrar Menú"
                      title="Cerrar Menú"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/contacto"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-700 hover:bg-orange-800 focus:shadow-outline focus:outline-none"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Contacto"
                        title="Contacto"
                      >
                        <i className="fas fa-comment-alt mr-2 text-sm mt-0.5"></i>
                        {contacto.contacto}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/portfolio"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-700 hover:bg-orange-800 focus:shadow-outline focus:outline-none"
                        aria-label="Portfolio"
                        title="Portfolio"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <i className="fas fa-briefcase mr-2 text-md"></i>
                        Portfolio
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
