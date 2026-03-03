import './index.css';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      <header>
        <h1>Ogulcan Narin - Kisisel Portfolyo</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <figure>
            <img
              src="https://via.placeholder.com/150"
              alt="Ogulcan Narin'in vesikalik fotografi"
            />
            <figcaption>Ogulcan Narin</figcaption>
          </figure>
          <p>Merhaba! Ben Ogulcan Narin, Firat Universitesi ogrencisiyim. Web teknolojilerine ve erisilebilirlige tutkuyla bagli bir web gelistiricisiyim.</p>
          <p>Ad Soyad: Ogulcan Narin</p>
          <p>Ogrenci No: 230542027</p>
          <p>Universite: Firat Universitesi</p>

          <h3>Kullandigim Teknolojiler</h3>
          <ul>
            <li>HTML5 (Semantik & Erisilebilir)</li>
            <li>CSS3 (Modern Tasarim)</li>
            <li>JavaScript & TypeScript</li>
            <li>React & Vite</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <article>
            <h3>E-Ticaret Sitesi</h3>
            <p>React ve TypeScript kullanarak gelistirdigim modern, hizli ve responsive bir e-ticaret uygulamasi.</p>
            <p><strong>Teknolojiler:</strong> React, TS, Vite, TailwindCSS</p>
          </article>

          <article>
            <h3>Blog Uygulamasi</h3>
            <p>Icerik yonetimi ve SEO odakli, semantik HTML kullanilarak gelistirilmis blog platformu.</p>
            <p><strong>Teknolojiler:</strong> HTML5, CSS3, JavaScript</p>
          </article>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend style={{ display: 'none' }}>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Ogulcan Narin. Tum haklari saklidir.</p>
      </footer>
    </>
  );
}

export default App;
