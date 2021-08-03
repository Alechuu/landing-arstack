module.exports = (req, res) => {
  var nodemailer = require("nodemailer");

  // response data

  jason = JSON.parse(req.body);
  var text =
    "Nombre: " +
    jason.nombre +
    " Apellido: " +
    jason.apellido +
    " Mail: " +
    jason.mail +
    " Telefono: " +
    jason.telefono +
    " Idea: " +
    jason.idea;

  async function sendMail() {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "user",
        pass: "pass",
      },
    });

    var mailOptions = {
      from: "sender@sender.com",
      to: "receiver@receiver.com",
      subject: "Mensaje enviado desde la web",
      text: text,
    };

    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.send({
          code: 500,
          message: "Ocurrio un error al enviar el mensaje, intente nuevamente",
        });
      } else {
        res.send({
          code: 200,
          message: "El mensaje fue enviado correctamente",
        });
      }
    });
  }

  sendMail();
};
