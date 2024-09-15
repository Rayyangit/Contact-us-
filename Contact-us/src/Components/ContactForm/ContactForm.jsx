import emailjs from "@emailjs/browser";
import React, { useRef } from 'react';

import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { MdMessage } from "react-icons/md";
import Button from "../Button/Button";
import styles from "./Contact.module.css";

const ContactForm = () => {
 

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7hmdhsz', 'template_qgff6za', form.current, {
        publicKey: 'AdxATJBB5sW0BQeVI',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />

        <form onSubmit={sendEmail} ref={form}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="to_name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="from_email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="message" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" type="submit"  value="Send"/>
          </div>

        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/Service 24_7-pana 1.svg" alt="contact" />
      </div>
    </section>
  );
};

export default ContactForm;