import React from 'react';

export default function Contact() {
  return (
    <main className="contactSplit">
      <section className="contactContainer">
        <div className="head">
          <header className="title">Contact Info</header>
        </div>
        <div className="contactInfo">
            <li className="nav-item"><a href="mailto:holly-parsons@outlook.com" id="email" className="nav-link" target="_blank" rel="noreferrer">Email me</a></li>
            <li className="nav-item"><a href="https://www.linkedin.com/in/hmparsons/" id="linkedin" className="nav-link" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li className="nav-item"><a href="https://github.com/hmparsons-sde" id="github" className="nav-link" target="_blank" rel="noreferrer">Github</a></li>
        </div>
      </section>
    </main>
  );
}
