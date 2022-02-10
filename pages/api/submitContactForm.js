const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `
  Name: ${body.name}<br/>
  Email: ${body.email}<br/>
  Subject: ${body.subject}<br/>
  Message: ${body.message}<br/>`

  const data = {
    to: "jacobpuertasalvatore@gmail.com",
    from: "busniess@northsydneypainting.com",
    subject: "New business inquiry!",
    test: message,
    html: message
  };
console.log(data);
  mail.send(data)

  res.status(200).json({ status: "Ok" });
}
