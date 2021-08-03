import LocalizedStrings from "react-localization";

let trabajo = new LocalizedStrings({
  en: {
    tech: "Development Stack",
  },
  es: {
    tech: "Tecnologías utilizadas",
  },
});

function Trabajo(props) {
  return (
    <div className="px-0 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
      <div className="flex flex-col w-full overflow-hidden bg-white border rounded shadow-md lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          <img
            src={props.imagen}
            alt=""
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-6 lg:pl-10 lg:w-1/2">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              {props.tipoSistema}
            </p>
          </div>
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-3xl">
            {props.tituloSistema}
          </h5>
          <p
            dangerouslySetInnerHTML={{ __html: props.descripcionSistema }}
            className="mb-5 text-gray-800"
          ></p>
          <div>
            <h5 className="flex flex-row items-center justify-start mb-3 text-left text-xl font-bold leading-none sm:text-xl">
              {trabajo.tech}
            </h5>
            <ul className="text-left font-medium lg:ml-2">
              {props.tecnologias.map((t) => (
                <li>
                  <i className={t.icon + " text-orange-800 text-xl mr-1.5"}></i>
                  {t.tecnologia}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trabajo;
