import styles from "./subscribe.module.css";
import { useRef, useState, useEffect } from "react";
function Subscribe() {
  const [signedUpMsg, setSignedUpMsg] = useState("");
  const emailRef = useRef();
  async function submitHandler() {
    const email = emailRef.current.value;
    if (!email) return;
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
     
      setSignedUpMsg(data.message);
    } catch (error) {
      
      setSignedUpMsg(error.message);
    }
  }
  useEffect(() => {
    if (signedUpMsg) {
      const timer = setTimeout(() => {
        setSignedUpMsg("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  });
  return (
    <section className="section-center">
      <div className={styles.subscribe}>
        <h1>Get the latest updates</h1>
        <p>
          Stay in touch with us so you can get the latest blogs from us when its
          published
        </p>
        {signedUpMsg && <p className={styles.responseMsg}>{signedUpMsg}</p>}
        <div className={styles.controlInput}>
          <input
            ref={emailRef}
            type="email"
            required
            placeholder="enter your email"
          ></input>
          <button onClick={submitHandler} type="submit" className="btn">
            {" "}
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
