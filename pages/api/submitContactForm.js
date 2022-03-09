const mail = require("@sendgrid/mail");
const key = process.env.SENDGRID_API_KEY;

mail.setApiKey(key);

export default (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
  Name: ${body.name}<br/>
  Email: ${body.email}<br/>
  PhoneNumber: ${body.phone}<br/>
  Message: ${body.message}<br/>`;

  const data = {
    to: "jacobpuertasalvatore@gmail.com",
    from: "NorthSydneyPainting@northsydneypainting.com",
    subject: "New business inquiry!",
    test: message,
    html: message,
  };
  console.log(data);
  mail.send(data);

  res.status(200).json({ status: "Ok" });
};
