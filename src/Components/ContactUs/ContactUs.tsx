import React from "react";
import styles from "./ContactUs.module.css";

const ContactUs: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const mailtoLink = `mailto:mddodgson@mun.ca?subject=${encodeURIComponent(
      "Contact Form Submission from " + name
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className={styles.contactForm}>
      <span className={styles.heading}>Get in Touch</span>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={styles.input}
        />

        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={styles.input}
        />

        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          className={styles.textarea}
        ></textarea>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
