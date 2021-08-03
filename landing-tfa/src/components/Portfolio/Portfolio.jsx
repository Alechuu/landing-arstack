import Trabajo from "./Trabajo";
import LocalizedStrings from "react-localization";

let portfolio = new LocalizedStrings({
  en: {
    title: "Our Clients",
    desc: "These are some of our most recent works",
    sarmiento: {
      type: "Web Application",
      title: "Railway Administration",
      desc: "The <b>Sarmiento Railway Line</b> needed to implement their recently acquired transmission antenas into their train units, and one key component of that need, was a quality software that could handle their entire data flow. We designed and developed a web application that let them see all their readings in real time, and also made the connection between their antennas and the main backend handling it all. Made by us, too.",
    },
    sanMartin: {
      type: "Web Application",
      title: "Patient and Study Management",
      desc: "The <b>Echocardiography Department</b> of the San Martin Hospital of La Plata had a completely outdated system which they used everyday in and out to keep track of all their patients and studies. We designed and developed a whole new application from the ground up, entirely specialized for them. The application let them have a more efficient workflow, and boosted their productivity considerably.",
    },
    compraRapida: {
      type: "Web Application",
      title: "Compra Rápida",
      desc: "<b>Compra Rápida</b> is a web application that helps small and medium businesess to promote their entire catalogue, online. It was developed with the idea that any type of business could use the application, no matter what their type of catalogue was. The main feature of the application is that the business owner can make a sale in a quick, easy way. Getting notified of every sale directly on his phone, via Whatsapp. On top of that, they can also check the analytics section where they keep track of their sales and clients in a more useful way.",
    },
  },
  es: {
    title: "Nuestros Clientes",
    desc: "Estos son algunos de nuestros más recientes trabajos",
    sarmiento: {
      type: "Sistema Web",
      title: "Administración Ferroviaria",
      desc: "La <b>Línea Ferroviaria Sarmiento</b> se encontraba bajo la necesidad de poder implementar sus recientemente adquiridas antenas de transmisión, en las cabinas de sus unidades. Una sección clave de esa necesidad, era un sistema que les permitiese manejar todo su flujo de datos, desde el inicio hasta el fin. Se diseñó y desarrolló un sistema web que les permitió visualizar todas sus métricas en tiempo real y además se realizó la conexión entre sus antenas y nuestro sistema.",
    },
    sanMartin: {
      type: "Sistema Web",
      title: "Gestión de Pacientes y Estudios",
      desc: "El <b>Departamento de Ecocardiografía</b> del Hospital San Martín de La Plata tenía un sistema completamente desactualizado en el cuál trabajaban todos los días para llevar un registro de sus pacientes y estudios que se realizaban los mismos. Se hizo un sistema completamente nuevo, con tecnologías nuevas, y se logró que la eficiencia de trabajo del Departamento aumentase considerablemente.",
    },
    compraRapida: {
      type: "Sistema Web",
      title: "Compra Rápida",
      desc: "<b>Compra Rápida</b> es un sistema web que le permite a emprendedores pequeños y medianos poner su negocio en línea. Se desarrolló con la idea de que cualquier negocio y/o emprendimiento pudiese promocionarse en línea sin importar su rubro, concretando sus ventas de una forma rápida, fácil y a través de mensajería instantánea como Whatsapp. Se incluyeron también herramientas métricas para que los emprendimientos pudiesen analizar su alcance en cuanto a sus clientes.",
    },
  },
});

function Portfolio() {
  return (
    <div
      data-aos="fade-in"
      data-aos-duration="600"
      className="px-4 mt-20 mb-28 py-16 pt-8 ml-4 mr-4 lg:mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20 lg:pt-10 bg-white border border-gray-200 rounded shadow-xl"
      id="portfolio"
    >
      <div className="max-w-xl mb-10 mt-4 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-orange-600">
            PORTFOLIO
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
            <span className="relative">{portfolio.title}</span>
          </span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">{portfolio.desc}</p>
      </div>
      <Trabajo
        key="Sarmiento"
        imagen="https://i.imgur.com/2FwVgFgh.png"
        tipoSistema={portfolio.sarmiento.type}
        tituloSistema={portfolio.sarmiento.title}
        descripcionSistema={portfolio.sarmiento.desc}
        tecnologias={[
          { icon: "fab fa-react", tecnologia: "React" },
          { icon: "fab fa-python", tecnologia: "Python" },
          { icon: "fab fa-java", tecnologia: "Java" },
          { icon: "fas fa-database", tecnologia: "MariaDB" },
        ]}
      />
      <Trabajo
        key="San Martin"
        imagen="https://i.imgur.com/m62wI8Zh.png"
        tipoSistema={portfolio.sanMartin.type}
        tituloSistema={portfolio.sanMartin.title}
        descripcionSistema={portfolio.sanMartin.desc}
        tecnologias={[
          { icon: "fab fa-react", tecnologia: "React" },
          { icon: "fab fa-python", tecnologia: "Python" },
          { icon: "fas fa-database", tecnologia: "MariaDB" },
        ]}
      />
      <Trabajo
        key="Compra Rapida"
        imagen="https://i.imgur.com/74CycOmh.png"
        tipoSistema={portfolio.compraRapida.type}
        tituloSistema={portfolio.compraRapida.title}
        descripcionSistema={portfolio.compraRapida.desc}
        tecnologias={[
          { icon: "fab fa-react", tecnologia: "React" },
          { icon: "fab fa-symfony", tecnologia: "Symfony" },
          { icon: "fas fa-database", tecnologia: "MariaDB" },
        ]}
      />
    </div>
  );
}

export default Portfolio;
