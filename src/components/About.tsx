import './About.css';

export default function About() {
  return (
    <section id="about">
      <div className="container about">
        <div className="section-head">
          <span className="eyebrow">About</span>
        </div>

        <div className="about__grid">
          <p className="about__lead">
            I care about the seam where a language model stops being a demo
            and starts being a product — the loading state, the retry logic,
            the moment a RAG answer needs a citation a user can trust.
          </p>

          <div className="about__body">
            <p>
              I'm a software developer with 2.5+ years across startup and
              enterprise environments. At <strong>Synthetic People AI</strong>,
              I was the sole frontend engineer for an AI-powered market
              research platform — architecting it from an empty repo to 30+
              production pages, while working closely with the backend team on
              prompt engineering, retrieval-augmented generation, and the
              FastAPI services that fed our React front end.
            </p>
            <p>
              Before that, I built customer-facing banking software at{' '}
              <strong>Accenture</strong>, where the constraints were different
              — 100k+ monthly users, strict reliability bars, and the kind of
              production incidents that teach you to read a stack trace fast.
              Outside of work, I built a lightweight transformer for real-time
              industrial anomaly detection, which is where the signal trace
              running through this page comes from.
            </p>

            <div className="about__meta">
              <div>
                <span className="mono about__meta-label">Based in</span>
                <span>Bengaluru, India</span>
              </div>
              <div>
                <span className="mono about__meta-label">Education</span>
                <span>MSc Advanced Computer Science, University of Birmingham</span>
              </div>
              <div>
                <span className="mono about__meta-label">Currently</span>
                <span>Software Developer, Synthetic People AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
