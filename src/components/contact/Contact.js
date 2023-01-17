import './Contact.scss';
const emailjs = require("@emailjs/browser");

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_uzsqemc", "template_awzx85r", e.target, "CFo_e49VginApoBO2")
        .then(res => {
            alert("Thank you for reaching out! I will reply as soon as possible.");
        })
        .catch(err => {
            alert("Error: " + err)
        })
        
    }

    return (
        <div className = "contact" id="contact">
            <h1>Contact</h1>

            <p>Send me a message below!</p>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" name="email" />
                <textarea placeholder="Message" name="message" />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Contact