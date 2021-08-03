import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LocalizedStrings from "react-localization";

let contacto = new LocalizedStrings({
  en: {
    bubble: "GET IN TOUCH",
    title: "Let's work together",
    desc: "We offer you the following ways to communicate with us",
    wsp: "Communicate with us directly through Whatsapp",
    ig: "Communicate with us directly through Instagram",
    title2: "Or, if you prefer",
    desc2: "Leave us a message and we will get back to you",
    name: "Name",
    lastname: "Lastname",
    email: "Your email",
    cellphone: "(Optional) Cellphone Number",
    idea: "Tell us your idea!",
    send: "Send",
    talk: "Let's talk",
  },
  es: {
    bubble: "CONTACTO",
    title: "Trabajemos Juntos",
    desc: "Te ofrecemos las siguientes vías de comunicación",
    wsp: "Contactate con nosotros a través de Whatsapp",
    ig: "Contactate con nosotros a través de Instagram",
    title2: "O bien",
    desc2: "Dejanos un mensaje y nosotros nos contactamos con vos",
    name: "Nombre",
    lastname: "Apellido",
    email: "Email de contacto",
    cellphone: "(Opcional) Teléfono Celular",
    idea: "¡Contanos tu idea!",
    send: "Enviar",
    talk: "Hablemos",
  },
});

function Contacto() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const [errorNombre, setErrorNombre] = useState(false);
  const [errorApellido, setErrorApellido] = useState(false);
  const [errorMail, setErrorMail] = useState(false);
  const [errorIdea, setErrorIdea] = useState(false);
  const [loading, setLoading] = useState(0);
  const [body, setBody] = useState("");

  function validate(object) {
    var a = 0;
    if (object["nombre"] === "") {
      setErrorNombre(true);
      ++a;
    }
    if (object["apellido"] === "") {
      setErrorApellido(true);
      ++a;
    }
    if (
      object["mail"] === "" ||
      /\S+@\S+\.\S+/.test(object["mail"]) === false
    ) {
      setErrorMail(true);
      ++a;
    }
    if (object["idea"] === "") {
      setErrorIdea(true);
      ++a;
    }
    if (a > 0) {
      return false;
    }
    return true;
  }

  const onRegisterEvent = (e) => {
    e.preventDefault();
    const datos = new FormData(document.getElementById("form_register"));
    var object = {};
    datos.forEach(function (value, key) {
      object[key] = value;
    });
    if (validate(object)) {
      setLoading(1);
      var json = JSON.stringify(object);
      fetch("https://arstack-api.vercel.app/api/response/", {
        method: "post",
        body: json,
      })
        .then((res) => res.json())
        .then((data) => {
          data.code === 200 ? setLoading(2) : setLoading(3);
          if (contacto.getLanguage() === "es") {
            if (data.code === 200) {
              setBody("El mensaje se ha enviado correctamente");
            } else {
              setBody("Hubo un error al enviar el mensaje, intentá más tarde");
            }
          } else {
            if (data.code === 200) {
              setBody("Message successfully sent");
            } else {
              setBody(
                "There was an error sending the message, please try again later"
              );
            }
          }
        });
    }
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div
      data-aos="fade-in"
      data-aos-duration="600"
      className="px-4 mt-20 mb-28 py-16 pt-8 ml-4 mr-4 lg:mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20 lg:pt-10 bg-white border border-gray-200 rounded shadow-xl"
      id="reasons"
    >
      <div className="px-0 lg:px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-orange-600">
              {contacto.bubble}
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
              <span className="relative">{contacto.title}</span>
            </span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">{contacto.desc}</p>
        </div>
        <div className="grid gap-8 row-gap-5 md:grid-cols-2">
          <div className="shadow-md relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-orange-700 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-orange-700 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-orange-700 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-orange-700 group-hover:scale-y-100" />
            <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
              <div className="mb-6 mr-6 lg:mb-0">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
                  <i className="fab fa-whatsapp text-orange-700 text-6xl"></i>
                </div>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h6 className="mb-2 font-semibold leading-5 text-left">
                    Whatsapp
                  </h6>
                  <p className="mb-2 text-sm text-gray-900 text-left">
                    {contacto.wsp}
                  </p>
                </div>
                <button
                  className="bg-orange-700 text-white w-1/2 lg:w-1/4 rounded py-1 hover:bg-orange-800 font-medium"
                  onClick={() =>
                    openInNewTab(
                      "https://api.whatsapp.com/message/AP3QQUGFSDBGM1"
                    )
                  }
                >
                  {contacto.talk}
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-md relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-orange-700 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-orange-700 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-orange-700 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-orange-700 group-hover:scale-y-100" />
            <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
              <div className="mb-6 mr-6 lg:mb-0">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
                  <i className="fab fa-instagram text-orange-700 text-6xl"></i>
                </div>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h6 className="mb-2 font-semibold leading-5 text-left">
                    Instagram
                  </h6>
                  <p className="mb-2 text-sm text-gray-900 text-left">
                    {contacto.ig}
                  </p>
                </div>
                <button
                  className="bg-orange-700 text-white w-1/2 lg:w-1/4 rounded py-1 hover:bg-orange-800 font-medium"
                  onClick={() =>
                    openInNewTab("https://www.instagram.com/arstack.dev/")
                  }
                >
                  {contacto.talk}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-px" href="#contacto_mail">
          <h2 className="max-w-lg mb-6 mt-10 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">{contacto.title2}</span>
            </span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">{contacto.desc2}</p>
        </div>
        {loading === 2 ? (
          <div className="bg-green-accent-700 border-l-8 border-green-600 py-2 rounded shadow-sm font-medium px-2 w-full mt-6 text-white text-left px-4 inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 -ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            {body}
          </div>
        ) : loading === 3 ? (
          <div className="bg-red-400 border-l-8 border-red-800 py-2 rounded shadow-sm font-medium px-2 w-full mt-6 text-white text-left px-4 inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 -ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {body}
          </div>
        ) : (
          <div className="bg-teal-accent-700 py-1 rounded shadow-sm font-medium px-2 w-full mt-6 text-white text-left px-4 invisible">
            a
          </div>
        )}
        <form id="form_register">
          <div className="flex flex-wrap lg:grid lg:grid-cols-2  mt-2 lg:mt-4 lg:gap-6 w-full">
            <input
              name="nombre"
              onChange={() => setErrorNombre(false)}
              className={
                errorNombre
                  ? "w-full bg-gray-200 mt-4 lg:mt-2 px-4 py-1 rounded placeholder-gray-700 ring-2 ring-red-500 focus:ring-orange-700 focus:outline-none"
                  : "w-full bg-gray-200 mt-4 lg:mt-2 px-4 py-1 rounded placeholder-gray-700 focus:ring-2 focus:ring-orange-700 focus:outline-none"
              }
              placeholder={contacto.name}
            ></input>
            <input
              name="apellido"
              onChange={() => setErrorApellido(false)}
              className={
                errorApellido
                  ? "w-full bg-gray-200 mt-4 lg:mt-2 px-4 py-1 rounded placeholder-gray-700 ring-2 ring-red-500 focus:ring-orange-700 focus:outline-none"
                  : "w-full bg-gray-200 mt-4 lg:mt-2 px-4 py-1 rounded placeholder-gray-700 focus:ring-2 focus:ring-orange-700 focus:outline-none"
              }
              placeholder={contacto.lastname}
            ></input>
            <input
              name="mail"
              onChange={() => setErrorMail(false)}
              className={
                errorMail
                  ? "w-full bg-gray-200 mt-4 lg:mt-2 px-4 py-1 rounded placeholder-gray-700 ring-2 ring-red-500 focus:ring-orange-700 focus:outline-none"
                  : "w-full bg-gray-200 mt-4 lg:mt-2 px-4 py-1 rounded placeholder-gray-700 focus:ring-2 focus:ring-orange-700 focus:outline-none"
              }
              placeholder={contacto.email}
            ></input>
            <input
              name="telefono"
              className="w-full bg-gray-200 mt-4 lg:mt-2 px-4 py-1 rounded placeholder-gray-700 focus:ring-2 focus:ring-orange-700 focus:outline-none"
              placeholder={contacto.cellphone}
            ></input>
            <textarea
              onChange={() => setErrorIdea(false)}
              name="idea"
              placeholder={contacto.idea}
              className={
                errorIdea
                  ? "w-full bg-gray-200 mt-4 lg:mt-2 px-4 py-1 col-span-2  rounded placeholder-gray-700 resize-none ring-2 ring-red-500 focus:ring-orange-700 focus:outline-none"
                  : "w-full bg-gray-200 mt-4 lg:mt-2 px-4 py-1 col-span-2 rounded placeholder-gray-700 resize-none focus:ring-2 focus:ring-orange-700 focus:outline-none"
              }
              rows={8}
            ></textarea>
            <div className="flex flex-row justify-center lg:justify-start items-center flex-wrap w-full">
              <button
                type="button"
                className="bg-orange-700 w-full mt-4 lg:mt-2 text-white lg:w-1/3 rounded py-2 hover:bg-orange-800 flex flex-row justify-center  items-center text-left"
                onClick={(e) => onRegisterEvent(e)}
              >
                <span className="font-medium text-xl">{contacto.send}</span>
              </button>
              {loading === 0 ? (
                <svg
                  className="animate-spin ml-3 h-5 w-5 text-white invisible"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : loading === 1 ? (
                <svg
                  className="animate-spin lg:ml-3 mt-4 lg:mt-2 h-6 w-6 text-orange-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : loading === 2 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:ml-3 mt-4 lg:mt-2.5 h-8 w-8 text-green-accent-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:ml-3 mt-4 lg:mt-2.5 h-8 w-8 text-red-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
