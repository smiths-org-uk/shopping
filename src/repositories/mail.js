import transporter from "../interfaces/mail";

const mail = {};

mail.sendMail = () => {
    const message = {
        from: "shopping@smiths.org.uk",
        to: process.env.MAIL_TARGET,
        subject: "Shopping Page Updated.",
        text: "Shopping page updated",
        html: "<p>Shopping page updated</p>"
    };

    transporter.sendMail(message, err => {
        if (err) console.log("Error sending mail: " + err);
    });
};

export default mail;
