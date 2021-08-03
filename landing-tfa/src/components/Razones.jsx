import React from "react";
import LocalizedStrings from "react-localization";
let razones = new LocalizedStrings({
  en: {
    motivo: "Why work with us",
    porquep1: "Our",
    porquep2: "core values",
    tecnologias: "Cutting-Edge Technology",
    calidad: "Quality",
    eficiencia: "Efficiency",
    comunicacion: "Comunication",
    seguridad: "Security",
    academico: "Academic Standard",
    whytecno:
      "We develop our applications using only the most recent technologies to provide you with the most high end product possible.",
    whycalidad:
      "We deeply focus on each and every stage of the development process of your application to get the best result possible.",
    whyefi:
      "Here at {0} we believe that an application with a fast response time, it's a successful one. We always aim at the highest speed possible.",
    whycomu:
      "We provide you with a constant communication through all the development process to obtain a fully customized application based on your initial ideas.",
    whysegu:
      "All of our applications are built with security in mind. We care for the fact that your application gets deployed as protected as possible against the most used attacks to date.",
    whyacade:
      "Our professional career is backed by the {0} of our beloved University, the UNLP.",
  },
  es: {
    motivo: "Motivos",
    porquep1: "¿Por",
    porquep2: "qué elegirnos?",
    tecnologias: " Últimas Tecnologías",
    calidad: "Calidad",
    eficiencia: "Eficiencia",
    comunicacion: "Comunicación",
    seguridad: "Seguridad",
    academico: "Respaldo Académico",
    whytecno:
      "Nuestros desarrollos utilizan las tecnologías más recientes para brindarte un producto al más alto nivel.",
    whycalidad:
      "Nos concentramos fuertemente en cada etapa del desarrollo de tu sistema para obtener el mejor resultado posible.",
    whyefi:
      "En {0} creemos que un sistema con rápida respuesta es un sistema exitoso, siempre apuntamos a la máxima velocidad posible.", //xd <b>
    whycomu:
      "Te brindamos una comunicación constante para cumplir con todos tus ideales y entregarte un sistema completamente a tu medida.",
    whysegu:
      "Nos preocupamos porque tu sistema se entregue lo más protegido posible contra los ataques más utilizados al día de hoy.",
    whyacade:
      "La trayectoria profesional que llevamos se ve respaldada por la {0} de nuestra querida UNLP.",
  },
});

export const Razones = () => {
  return (
    <div
      data-aos="slide-up"
      data-aos-duration="650"
      className="px-4 py-16 pt-8 ml-4 mr-4 lg:mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20 lg:pt-10 bg-white border border-gray-200 rounded shadow-xl"
      id="reasons"
    >
      <div className="px-0 lg:px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-orange-600">
              {razones.motivo}
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">{razones.porquep1}</span>
            </span>{" "}
            {razones.porquep2}
          </h2>
        </div>
        <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-between p-5 border rounded shadow-md transition duration-500 ease-in-out bg-white group hover:bg-orange-accent-400 transform hover:-translate-y-1 hover:scale-100">
            <div>
              <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-indigo-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-orange-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5 group-hover:text-white">
                {razones.tecnologias}
              </h6>
              <p className="mb-3 text-sm text-gray-900 group-hover:text-white">
                {razones.whytecno}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-md transition duration-500 ease-in-out bg-white group hover:bg-orange-accent-400 transform hover:-translate-y-1 hover:scale-100">
            <div>
              <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-indigo-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-orange-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5 group-hover:text-white">
                {razones.calidad}
              </h6>
              <p className="mb-3 text-sm text-gray-900 group-hover:text-white">
                {razones.whycalidad}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-md transition duration-500 ease-in-out bg-white group hover:bg-orange-accent-400 transform hover:-translate-y-1 hover:scale-100">
            <div>
              <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-11 h-11 text-orange-800"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5 group-hover:text-white">
                {razones.eficiencia}
              </h6>
              <p className="mb-3 text-sm text-gray-900 group-hover:text-white">
                {razones.formatString(razones.whyefi, <b>Arstack</b>)}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-md transition duration-500 ease-in-out bg-white group hover:bg-orange-accent-400 transform hover:-translate-y-1 hover:scale-100">
            <div>
              <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-indigo-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-orange-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5 group-hover:text-white">
                {razones.comunicacion}
              </h6>
              <p className="mb-3 text-sm text-gray-900 group-hover:text-white">
                {razones.whycomu}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-md transition duration-500 ease-in-out bg-white group hover:bg-orange-accent-400 transform hover:-translate-y-1 hover:scale-100">
            <div>
              <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-indigo-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-orange-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5 group-hover:text-white">
                {razones.seguridad}
              </h6>
              <p className="mb-3 text-sm text-gray-900 group-hover:text-white">
                {razones.whysegu}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-md transition duration-500 ease-in-out bg-white group hover:bg-orange-accent-400 transform hover:-translate-y-1 hover:scale-100">
            <div>
              <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-indigo-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-orange-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5 group-hover:text-white">
                {razones.academico}
              </h6>
              <p className="mb-3 text-sm text-gray-900 group-hover:text-white">
                {razones.formatString(
                  razones.whyacade,
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.info.unlp.edu.ar/"
                    className="text-orange-700 hover:text-orange-900 group-hover:text-white group-hover:font-bold"
                  >
                    {" "}
                    Facultad de Informática
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Razones;
