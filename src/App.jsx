import './App.css'

function ArrowUpRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}

function App() {
  return (
    <main className="portfolio">

      {/* Fixed Sidebar */}
      <aside className="sidebar">

        <div className="sidebar-top">

          <div className="profile-row">
            <div className="profile-image">
              ME
            </div>

            <div className="profile-info">
              <strong>Mohamed El Meligy</strong>
              <span>Product & UX Designer</span>
            </div>
          </div>

          <div className="availability">
            <span className="availability-dot"></span>
            Available For Work
          </div>

        </div>

        <nav className="navigation">
          <a href="#overview" className="active">
            <span>01</span>
            Overview
          </a>

          <a href="#about">
            <span>02</span>
            About
          </a>

          <a href="#testimonials">
            <span>03</span>
            Testimonials
          </a>

          <a href="#contact">
            <span>04</span>
            Contact
          </a>
        </nav>

        <div className="sidebar-bottom">

          <a href="#contact" className="sidebar-cta">
            Start a Project
            <ArrowUpRight />
          </a>

          <div className="social-links">
            <a href="#" aria-label="LinkedIn">LI</a>
            <a href="#" aria-label="Behance">BE</a>
            <a href="#" aria-label="Dribbble">DR</a>
            <a href="#" aria-label="GitHub">GH</a>
          </div>

        </div>

      </aside>


      {/* Main Content */}
      <section className="content">

        {/* Hero */}
        <section id="overview" className="hero-section">

          <div className="hero-label">
            PRODUCT & UX DESIGNER
          </div>

          <h1>
            Designing digital
            <br />
            experiences that
            <span> make sense.</span>
          </h1>

          <p className="hero-description">
            I design clear, intuitive digital products that turn complex
            systems and user needs into simple, meaningful experiences.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="primary-button">
              Start a Project
              <ArrowUpRight />
            </a>

            <a href="#about" className="secondary-button">
              Explore my work
            </a>
          </div>

        </section>


        {/* About */}
        <section id="about" className="about-section">

          <div className="section-heading">
            <span>01</span>
            <h2>About me</h2>
          </div>

          <div className="about-content">

            <p className="about-intro">
              I’m Mohamed El Meligy, a Product & UX Designer based in Egypt,
              with +3 years of experience designing digital products and
              working through complex systems, workflows, and user needs.
            </p>

            <p>
              I focus on turning complexity into clear, intuitive experiences
              by understanding how products work as a whole, then simplifying
              the way people interact with them.
            </p>

            <p>
              My work spans UX, UI, and scalable Design Systems, with a strong
              focus on consistency, accessibility, usability, and thoughtful
              interaction.
            </p>

          </div>

        </section>


        {/* Trusted By */}
        <section className="trusted-section">

          <div className="section-heading">
            <span>02</span>
            <h2>Trusted by</h2>
          </div>

          <div className="trusted-list">
            <span>SGT</span>
            <span>NAMI</span>
            <span>AQUA</span>
            <span>+</span>
          </div>

        </section>


        {/* Testimonials */}
        <section id="testimonials" className="testimonial-section">

          <div className="section-heading">
            <span>03</span>
            <h2>Testimonials</h2>
          </div>

          <blockquote>
            “Mohamed brings structure to complex problems and turns them into
            clear, usable experiences.”
          </blockquote>

        </section>


        {/* Contact */}
        <section id="contact" className="contact-section">

          <div className="section-heading">
            <span>04</span>
            <h2>Let's work together</h2>
          </div>

          <h3>
            Have a project idea?
            <br />
            Let’s make it happen.
          </h3>

          <a href="mailto:hello@meligy.design" className="contact-button">
            Let's talk
            <ArrowUpRight />
          </a>

        </section>


        <footer>
          <span>© 2026 Mohamed El Meligy</span>
          <span>Designed & crafted with intention.</span>
        </footer>

      </section>

    </main>
  )
}

export default App