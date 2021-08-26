const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: 'hamzacontactmail@gmail.com',
        pass: '19991128',
    },
    secure: true,
});
const mailData = {
    from: 'hamzacontactmail@gmail.com',
    to: 'hnael65@gmail.com',
    subject: 'New Customer wants to contact us',
    text: '',
    html: '',
};

function email(customer) {
    mailData.text = customer.subject;
    mailData.html = "Customer Name :" + customer.name + "<br>" + "Customer email: " + customer.email + " <br>" + "Message: " + customer.message;
    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}

module.exports = email;