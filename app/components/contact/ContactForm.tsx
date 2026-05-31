"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./ContactForm.module.css";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    if (!ACCESS_KEY) {
      setStatus("error");
      setErrorMsg(
        "Le formulaire n'est pas configuré. Merci d'écrire directement à annick.devos@workonwork.fr.",
      );
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);
    data.append("subject", "Nouvelle demande – workonwork.fr");
    data.append("from_name", "Formulaire workonwork.fr");

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = (await res.json()) as { success?: boolean; message?: string };
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.message || "Une erreur est survenue. Réessayez.");
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        "Impossible d'envoyer le message. Vérifiez votre connexion et réessayez.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className={styles.form}>
        <div className={styles.successPanel}>
          <div className={styles.successIcon} aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className={styles.successTitle}>Demande envoyée</h3>
          <p className={styles.successText}>
            Merci, votre message a bien été transmis. Annick vous répondra
            dans les meilleurs délais.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className={styles.successButton}
          >
            Envoyer une autre demande
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.fieldGroup}>
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          className={styles.honeypot}
          aria-hidden
        />

        <div>
          <label htmlFor="name" className={styles.label}>
            Nom / Prénom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className={styles.input}
          />
        </div>

        <div>
          <label htmlFor="email" className={styles.label}>
            Adresse e-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className={styles.input}
            placeholder="prenom.nom@exemple.fr"
          />
        </div>

        <div>
          <label htmlFor="phone" className={styles.label}>
            Téléphone <span className={styles.optional}>(facultatif)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            className={styles.input}
            placeholder="06 12 34 56 78"
            inputMode="tel"
            pattern="[0-9+\s().-]{6,}"
          />
        </div>

        <div>
          <label htmlFor="type" className={styles.label}>
            Type de demande
          </label>
          <select
            id="type"
            name="type"
            required
            className={styles.select}
            defaultValue=""
          >
            <option value="" disabled>
              Sélectionnez…
            </option>
            <option value="individuelle">Demande individuelle</option>
            <option value="entreprise">Demande entreprise</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className={styles.label}>
            Votre demande
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className={styles.textarea}
            placeholder="Décrivez en quelques mots l'objet de votre demande…"
          />
        </div>

        <div>
          <label htmlFor="availability" className={styles.label}>
            Disponibilités pour en parler
          </label>
          <textarea
            id="availability"
            name="availability"
            rows={2}
            className={styles.textareaSm}
            placeholder="Ex. lundi et mardi entre 10h et 12h, ou jeudi en fin de journée"
          />
        </div>

        <div className={styles.consentRow}>
          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            className={styles.checkbox}
          />
          <label htmlFor="consent" className={styles.consentLabel}>
            J&apos;accepte que mes données soient utilisées pour traiter ma
            demande. Aucune autre exploitation, aucun partage. Plus
            d&apos;informations dans les{" "}
            <Link href="/mentions-legales" className={styles.consentLink}>
              mentions légales
            </Link>
            .
          </label>
        </div>

        {status === "error" && (
          <p className={styles.errorMsg} role="alert">
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className={styles.submitButton}
        >
          {status === "submitting" ? "Envoi en cours…" : "Envoyer ma demande"}
        </button>
      </div>
    </form>
  );
}
