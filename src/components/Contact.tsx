import React, { FormEvent, useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import '../assets/css/footer.css';
import emailjs from 'emailjs-com'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';

const Contact = (props: { ContactUsEmail?: string, ContactUsPhoneNumber?: string }) => {

      const [btnClassName, setBtnClassName] = useState<string>('btn_send');
      const [btnValue, setBtnValue] = useState<string>("Send");
      const [btnDisabled, setBtnDisabled] = useState<boolean>(false);

      const handleSend = (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            setBtnDisabled(true);
            setBtnClassName('btn_sending');
            setBtnValue("Sending...");

            let formElement = event.target as HTMLFormElement;

            emailjs.init(process.env.REACT_APP_EMAIL_USER || "");
            emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE || "", process.env.REACT_APP_EMAIL_TEMPLATE || "", event.target as HTMLFormElement)
                  .then(() => {
                        setBtnClassName('btn_valid');
                        setBtnValue("Sent ✔");
                        let a = setInterval(() => {
                              setBtnClassName('btn_send');
                              setBtnValue("Send");
                              setBtnDisabled(false);
                              clearInterval(a);
                        }, 3000);
                  }, (error) => {
                        setBtnClassName('btn_send');
                        setBtnValue("Send");
                        setBtnDisabled(false);
                        alert("There is a problem in the server please send mail to elimrani.z@gmail.com");
                        try {
                              addDoc(collection(db, 'logs'), { status: error.status, text: error.text, timestamp: new Date() });
                        } catch (error) {}
                  });
            formElement.reset();
      }

      return (
            <footer id='Contact'>
                  <div className="footContact">
                        <h2>Contact Me</h2><br />
                        <h3 style={{ fontSize: 16 }}>I'd ❤️ to help!</h3>
                        <p>I like to create things with fun, open-minded person. Feel free to say hello!</p><br />
                        <div className="contact_frm">
                              <table>
                                    <tbody>
                                          <tr>
                                                <td><FaPhoneAlt /></td>
                                                <td>+212 {props.ContactUsPhoneNumber}</td>
                                          </tr>
                                          <tr>
                                                <td><FaEnvelope /></td>
                                                <td>{props.ContactUsEmail}</td>
                                          </tr>
                                    </tbody>
                              </table>
                              <form onSubmit={handleSend}>
                                    <input name="name" type="text" placeholder="Your name" required />
                                    <input name="email" type="email" placeholder="Email" required />
                                    <textarea name="message" rows={7} placeholder="Message" required></textarea>
                                    <input disabled={btnDisabled} type="submit" value={btnValue} className={btnClassName} />
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