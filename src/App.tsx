import './index.css';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      <header>
        <div className="site-title">Oğulcan Narin</div>
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

          <div className="about-content">
            <figure>
              <img
                src="https://via.placeholder.com/200"
                alt="Oğulcan Narin'in vesikalik fotografi"
              />
            </figure>

            <div className="about-text">
              <p>Merhaba! Ben Oğulcan Narin, Fırat Üniversitesi bilgisayar programcılığı bölümü vb alanında web teknolojilerine ve erişilebilirliğe tutkuyla bağlı bir web geliştiriciyim.</p>
              <p>Ad Soyad: Oğulcan Narin</p>
              <p>Öğrenci No: 230542027</p>

              <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem', fontSize: 'var(--text-lg)' }}>Kullandıgım Teknolojiler</h3>
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <img
                src="https://via.placeholder.com/400x200"
                alt="E-Ticaret sitesi anasayfa ekran goruntusu"
              />
              <h3>E-Ticaret Sitesi</h3>
              <p>React ve TypeScript ile gelistirilmis tam kapsamli bir e-ticaret uygulamasi.</p>
              <ul className="skill-tags">
                <li>React</li>
                <li>TypeScript</li>
                <li>Vite</li>
              </ul>
            </article>

            <article className="project-card">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Blog uygulamasi yazi listesi gorunumu"
              />
              <h3>Blog Uygulamasi</h3>
              <p>Kisisel blog platformu. Markdown destekli yazi editoru.</p>
              <ul className="skill-tags">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
              </ul>
            </article>

            <article className="project-card">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Hava durumu uygulamasi arayuzu"
              />
              <h3>Hava Durumu</h3>
              <p>OpenWeather API ile anlik hava durumu bilgisi sunan PWA uygulamasi.</p>
              <ul className="skill-tags">
                <li>JavaScript</li>
                <li>API</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset style={{ border: 'none', padding: 0 }}>
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
        <p>&copy; 2026 Oğulcan Narin. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}

export default App;
