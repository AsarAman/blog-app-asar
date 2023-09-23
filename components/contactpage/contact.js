import styles from "./contact.module.css";
import Subscribe from "../homepage/subscribe";
import { useRef, useEffect, useState } from "react";
function Contact() {
  const [contactMsg, setContactMsg] = useState("");
  const nameRef = useRef();
  const emailRef = useRef();
  const msgRef = useRef();

  async function submitHandler() {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const msg = msgRef.current.value;
    if (!name || !email || !msg) {
      setContactMsg("Please provide the required values!");
      return;
    }
    const data = {
      name: name,
      email: email,
      msg: msg,
    };
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const reqData = await response.json();
      setContactMsg(reqData.message);
      console.log(reqData);
    } catch (error) {
      console.log(error);
      setContactMsg(error.message);
    }
  }
  useEffect(() => {
    if (contactMsg) {
      const timer = setTimeout(() => {
        setContactMsg("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  });
  return (
    <section className={`${styles.contact} section-center`}>
      <div>
        <h1>Get in touch</h1>
        <p>
          Any feedbacks or suggestion?, Reach out to me by submitting below form
        </p>
        {contactMsg && <p className={styles.contactMsg}>{contactMsg}</p>}
      </div>
      <div className={styles.contactForm}>
        <input ref={nameRef} type="text" required placeholder="Name"></input>
        <input ref={emailRef} type="email" required placeholder="Email"></input>
        <textarea
          ref={msgRef}
          required
          rows="6"
          placeholder="Your message"
        ></textarea>
        <button onClick={submitHandler} className={`${styles.btn} btn`}>
          Submit
        </button>
      </div>
      <Subscribe />
    </section>
  );
}
export default Contact;
