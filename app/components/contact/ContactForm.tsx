"use client";

import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const data = new FormData(form);
        const subject = encodeURIComponent(
          "Demande de contact - Work on Work",
        );
        const body = encodeURIComponent(
          `Nom: ${data.get("name")}\nType: ${data.get("type")}\nDemande: ${data.get("message")}\nDisponibilités: ${data.get("availability")}`,
        );
        window.location.href = `mailto:annick.devos@workonwork.fr?subject=${subject}&body=${body}`;
      }}
    >
      <div className={styles.fieldGroup}>
        <div>
          <label
            htmlFor="name"
            className={styles.label}
          >
            Nom / Prénom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={styles.input}
          />
        </div>
        <div>
          <label
            htmlFor="type"
            className={styles.label}
          >
            Type de demande
          </label>
          <select
            id="type"
            name="type"
            required
            className={styles.input}
          >
            <option value="">Sélectionnez...</option>
            <option value="individuelle">Demande individuelle</option>
            <option value="entreprise">Demande entreprise</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="message"
            className={styles.label}
          >
            Votre demande
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className={styles.textarea}
          />
        </div>
        <div>
          <label
            htmlFor="availability"
            className={styles.label}
          >
            Disponibilités pour en parler
          </label>
          <input
            type="text"
            id="availability"
            name="availability"
            className={styles.input}
          />
        </div>
        <button
          type="submit"
          className={styles.submitButton}
        >
          Envoyer ma demande
        </button>
      </div>
    </form>
  );
}
