import './Contact.css';

export default function Contact() {
  const year = new Date().getFullYear();
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Contact</span>
        </div>

        <h2 className="contact__title">
          Building an AI product and need someone to own the frontend?
        </h2>
        <p className="contact__sub">
          I'm open to frontend and applied-AI roles. The fastest way to reach
          me is email — I read every message.
        </p>

        <div className="contact__links">
          <a href="mailto:shreyasmurthy74@gmail.com" className="contact__primary">
            shreyasmurthy74@gmail.com
          </a>
        </div>

        <div className="contact__row mono">
          <a href="https://www.linkedin.com/in/shreyas-annavati-60b45b1a9/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/a-n-shreyas" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>

      <footer className="footer">
        <div className="container footer__inner mono">
          <span>© {year} Shreyas Annavati</span>
          <span>Built with React &amp; TypeScript</span>
        </div>
      </footer>
    </section>
  );
}
