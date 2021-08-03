import LocalizedStrings from "react-localization";

let nosotros = new LocalizedStrings({
  en: {
    noso: "THE MAGIC BEHIND",
    conoce: "Meet the team",
    descripcion:
      "We are a small team, but a dedicated one. Each and every member of {0} is assigned to a specific task in the development process to pay attention to every detail in your application.",
    info: "Databases - Infrastructure",
  },
  es: {
    noso: "NOSOTROS",
    conoce: "Conocé al equipo",
    descripcion:
      "Somos un equipo pequeño pero dedicado, cada uno de los miembros de {0} está abocado a una especialización para prestar máxima atención a los detalles en cada sección de tu sistema.",
    info: "Bases de Datos - Infraestructura",
  },
});

function Team() {
  return (
    <div
      data-aos="slide-up"
      data-aos-duration="650"
      className="bg-white rounded shadow-xl mt-20 mb-28 border border-gray-200 px-4 py-16 ml-4 mr-4 lg:mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:pt-10"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 lg:py-1">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-orange-600">
            {nosotros.noso}
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            {/*             <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
                width="52"
                height="24"
              />
            </svg> */}
            <span className="relative">{nosotros.conoce}</span>
          </span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          {nosotros.formatString(nosotros.descripcion, <b>Arstack</b>)}
        </p>
      </div>
      <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex p-4 border border-gray-200 rounded shadow-md justify-center">
          <div className="flex flex-col items-center justify-center">
            <img
              className="object-cover w-28 h-28 rounded-full shadow-md "
              src="https://i.imgur.com/jtfMqgcm.png"
              alt="Persona"
            />
            <div className="flex flex-col justify-center mt-2">
              <p className="text-lg font-bold">Alejo Fernández Luisi</p>
              <p className="text-sm text-gray-800">Fullstack Developer</p>
            </div>
            <div className="flex flex-col justify-center text-center mt-2">
              <p className="text-md text-gray-800 font-medium">
                Frontend - UX/UI
              </p>
              <a
                href="https://linkedin.com/in/alejo-fernandez-luisi"
                target="__blank"
                rel="noreferrer"
              >
                <i
                  className="fab fa-linkedin text-2xl mt-1 cursor-pointer"
                  style={{ color: "#0e76a8" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
        <div className="flex p-4 border border-gray-200 rounded shadow-md justify-center">
          <div className="flex flex-col items-center justify-center">
            <img
              className="object-cover w-28 h-28 rounded-full shadow-md "
              src="https://i.imgur.com/BK8F58Vm.png"
              alt="Persona"
            />
            <div className="flex flex-col justify-center mt-2">
              <p className="text-lg font-bold">Tomás Delgadino</p>
              <p className="text-sm text-gray-800">Fullstack Developer</p>
            </div>
            <div className="flex flex-col justify-center text-center mt-2">
              <p className="text-md text-gray-800 font-medium">
                Backend - Data Analysis
              </p>
              <a
                href="https://www.linkedin.com/in/tomas-delgadino-930509199/"
                target="__blank"
                rel="noreferrer"
              >
                <i
                  className="fab fa-linkedin text-2xl mt-1 cursor-pointer"
                  style={{ color: "#0e76a8" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
        <div className="flex p-4 border border-gray-200 rounded shadow-md justify-center">
          <div className="flex flex-col items-center justify-center">
            <img
              className="object-cover w-28 h-28 rounded-full shadow-md "
              src="https://i.imgur.com/HdnLiETm.png"
              alt="Persona"
            />
            <div className="flex flex-col justify-center mt-2">
              <p className="text-lg font-bold">Juan Francisco Alé</p>
              <p className="text-sm text-gray-800">Fullstack Developer</p>
            </div>
            <div className="flex flex-col justify-center text-center mt-2">
              <p className="text-md text-gray-800 font-medium">
                {nosotros.info}
              </p>
              <a
                target="__blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/francisco-ale-579302177/"
              >
                <i
                  className="fab fa-linkedin text-2xl mt-1 cursor-pointer"
                  style={{ color: "#0e76a8" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
