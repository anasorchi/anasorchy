const form = document.querySelector('form');
const fullname = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

function sendEmail() {
    const body = `Full Name: ${fullname.value} <br> Email: ${email.value} <br> Phone: ${phone.value} <br> Subject: ${subject.value} <br> Message: ${message.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "anasorchifacebook@gmail.com",
        Password: "C18E19F2F72AF908913454CE744EA5B543DF",
        To: 'anasorchifacebook@gmail.com',
        From: "anasorchifacebook@gmail.com",
        Subject: "Portfolio si anas",
        Body: body
    }).then(
        message => {
            if (message == 'OK') {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });

            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!"
                });
            }
        }
    );

}
form.addEventListener("sumbit", (e) => {
    e.preventDefault();
    sendEmail();
});