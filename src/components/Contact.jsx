import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import '../assets/css/footer.css';
import emailjs from 'emailjs-com'

const Contact = ({ ContactUsEmail, ContactUsPhoneNumber }) => {

      const [className, setClassName] = useState('btn_send');
      const [val, setVal] = useState("Send");
      const [btnDis, setBtnDis] = useState("");

      const handleSend = (e) => {
            e.preventDefault();
            setBtnDis("disabled");
            setClassName('btn_sending');
            setVal("Sending...");
            emailjs.init(process.env.REACT_APP_EMAIL_USER);
            emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE, process.env.REACT_APP_EMAIL_TEMPLATE, e.target)
                  .then(() => {
                        let a = setInterval(() => {
                              setClassName('btn_send');
                              setVal("Send");
                              setBtnDis("");
                              clearInterval(a);
                        }, 3000);
                        setClassName('btn_valid');
                        setVal("Sent ✔");
                  }, (error) => {
                        alert(error.text);
                  });
            e.target.reset();
      }

      return (
            <footer id='Contact'>
                  <div className="footContact">
                        <h2>Contact Me</h2><br />
                        <h4>I'd ❤️ to help!</h4>
                        <p>I like to create things with fun, open-minded person. Feel free to say hello!</p><br />
                        <div className="contact_frm">
                              <table>
                                    <tbody>
                                          <tr>
                                                <td><FaPhoneAlt /></td>
                                                <td>+212 {ContactUsPhoneNumber}</td>
                                          </tr>
                                          <tr>
                                                <td><FaEnvelope /></td>
                                                <td>{ContactUsEmail}</td>
                                          </tr>
                                    </tbody>
                              </table>
                              <form onSubmit={handleSend}>
                                    <input name="name" type="text" placeholder="Your name" required />
                                    <input name="email" type="email" placeholder="Email" required />
                                    <textarea name="message" rows="7" placeholder="Message" required></textarea>
                                    <input disabled={btnDis} type="submit" value={val} className={className} />
                              </form>
                        </div>
                  </div>
                  <div>
                        <div className="footline"></div>
                        <div className="footDev">
                              <span id='devCopy'>Copyright © {new Date().getFullYear()}</span>
                              <span id='devStyle'> | </span>
                              <p id='devAuth'>Developed by <a href="https://www.linkedin.com/in/zaydimr/" target="_blank" rel="noopener noreferrer" style={{ color: '#00aeef' }}>ZAYD EL IMRANI</a></p>
                        </div>
                  </div>
            </footer>
      )
}
export default Contact;