import { useEffect, useState } from 'react'
import './App.css'
import { hatchContent } from './data/hatchContent'
import affluentImage from './assets/verticals/affluent.png'
import barsImage from './assets/verticals/bars.jpg'
import commercialImage from './assets/verticals/commercial.jpg'
import contractorImage from './assets/verticals/contractor.png'
import towingImage from './assets/verticals/towing.jpg'

const verticalImages: Record<string, string> = {
  towing: towingImage,
  hospitality: barsImage,
  'affluent-personal': affluentImage,
  'commercial-pc': commercialImage,
  'artisan-contractors': contractorImage,
}

const verticalImagePositions: Record<string, string> = {
  towing: 'center center',
  hospitality: 'center center',
  'affluent-personal': 'center 38%',
  'commercial-pc': 'center center',
  'artisan-contractors': 'center 24%',
}

const navigationItems = [
  { label: 'Specialties', href: '#specialties' },
  { label: 'Why Hatch', href: '#advantages' },
  { label: 'Coverage', href: '#services' },
  { label: 'Team', href: '#team' },
]

function App() {
  const [selectedVerticalIndex, setSelectedVerticalIndex] = useState(0)
  const [featuredVerticalIndex, setFeaturedVerticalIndex] = useState(0)
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTestimonialIndex((current) => {
        return (current + 1) % hatchContent.testimonials.length
      })
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setFeaturedVerticalIndex((current) => {
        return (current + 1) % hatchContent.specialtyVerticals.length
      })
    }, 4500)

    return () => window.clearInterval(interval)
  }, [])

  const selectedVertical =
    hatchContent.specialtyVerticals[selectedVerticalIndex] ??
    hatchContent.specialtyVerticals[0]
  const featuredVertical =
    hatchContent.specialtyVerticals[featuredVerticalIndex] ??
    hatchContent.specialtyVerticals[0]
  const featuredVerticalImagePosition =
    verticalImagePositions[featuredVertical.slug] ?? 'center center'
  const selectedVerticalImagePosition =
    verticalImagePositions[selectedVertical.slug] ?? 'center center'
  const testimonial =
    hatchContent.testimonials[testimonialIndex] ?? hatchContent.testimonials[0]

  return (
    <div className="app-shell app-shell--kinetic">
      <div className="background-orb background-orb--one" />
      <div className="background-orb background-orb--two" />

      <main className="page-shell">
        <Header />

        <section className="hero" id="top">
          <div className="hero__copy">
            <p className="section-label">{hatchContent.hero.eyebrow}</p>
            <h1>
              Specialty insurance for operators, owners, and households that need
              decisive guidance.
            </h1>
            <p className="hero__summary">
              Hatch pairs boutique service with national capability, making complex
              commercial and personal coverage feel more confident from the first
              conversation.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href={hatchContent.company.phoneHref}>
                Talk to a specialist
              </a>
              <a className="button button--ghost" href="#specialties">
                Explore specialties
              </a>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__image-frame">
              <img
                src={verticalImages[featuredVertical.slug]}
                alt={featuredVertical.title}
                style={{ objectPosition: featuredVerticalImagePosition }}
              />
            </div>

            <div className="hero__spotlight">
              <p className="section-label section-label--inverse">Featured vertical</p>
              <h2>{featuredVertical.title}</h2>
              <p>{featuredVertical.headline}</p>

              <div className="hero__spotlight-grid">
                <article>
                  <span>Best fit</span>
                  <strong>{featuredVertical.audience}</strong>
                </article>
                <article>
                  <span>Best next step</span>
                  <strong>{featuredVertical.cta}</strong>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--specialties" id="specialties">
          <SectionHeading
            eyebrow="Specialty practice"
            title="A clearer, faster path into the coverage Hatch is best known for."
            body="This redesign turns the specialty story into the primary navigation experience so visitors immediately understand where Hatch is strongest."
          />

          <div className="specialty-layout">
            <div className="specialty-rail" role="tablist" aria-label="Specialty verticals">
              {hatchContent.specialtyVerticals.map((vertical, index) => (
                <button
                  key={vertical.slug}
                  aria-selected={selectedVerticalIndex === index}
                  className={`specialty-chip ${
                    selectedVerticalIndex === index ? 'specialty-chip--active' : ''
                  }`}
                  onClick={() => setSelectedVerticalIndex(index)}
                  type="button"
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{vertical.title}</strong>
                  <small>{vertical.cta}</small>
                </button>
              ))}
            </div>

            <article className="specialty-stage">
              <div className="specialty-stage__content">
                <p className="section-label">{selectedVertical.audience}</p>
                <h3>{selectedVertical.title}</h3>
                <p className="specialty-stage__summary">{selectedVertical.summary}</p>

                <ul className="feature-list">
                  {selectedVertical.differentiators.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>

                <div className="specialty-stage__actions">
                  <a className="button button--primary" href={hatchContent.company.phoneHref}>
                    Call now
                  </a>
                  <a className="button button--ghost" href={hatchContent.company.emailHref}>
                    {selectedVertical.cta}
                  </a>
                </div>
              </div>

              <div className="specialty-stage__visual-column">
                <div className="specialty-stage__media">
                  <img
                    src={verticalImages[selectedVertical.slug]}
                    alt={selectedVertical.title}
                    style={{ objectPosition: selectedVerticalImagePosition }}
                  />
                </div>

                <div className="specialty-stage__aside">
                  <article className="info-card info-card--accent">
                    <p className="section-label">Homepage angle</p>
                    <h4>{selectedVertical.heroAngle}</h4>
                    <p>{selectedVertical.headline}</p>
                  </article>

                  <article className="info-card">
                    <p className="section-label">Rapid response</p>
                    <h4>Reach a real advisor, not a generic quote flow.</h4>
                    <ul className="mini-list">
                      <li>{hatchContent.company.phoneDisplay}</li>
                      <li>{hatchContent.company.hours}</li>
                      <li>{hatchContent.company.coverage}</li>
                    </ul>
                  </article>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section section--advantages" id="advantages">
          <SectionHeading
            eyebrow="Why Hatch"
            title="Trust architecture built around independence, responsiveness, and real operational depth."
            body="The strongest modern insurance sites feel calm, credible, and specific. These are the proof points that should anchor that experience."
          />

          <div className="advantage-grid">
            {hatchContent.differentiators.map((item, index) => (
              <article key={item.title} className="advantage-card">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <div className="principles-panel">
            <div>
              <p className="section-label">How the experience should feel</p>
              <h3>More advisory. Less commodity quoting.</h3>
            </div>

            <ul className="principles-list">
              {hatchContent.operatingPrinciples.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--services" id="services">
          <SectionHeading
            eyebrow="Coverage snapshot"
            title="One homepage, multiple confident entry points."
            body="The homepage should surface the same specialty lanes consistently, so every major entry point feels intentional and easy to understand."
          />

          <div className="service-grid">
            {hatchContent.specialtyVerticals.map((vertical) => (
              <article key={vertical.slug} className="service-card">
                <div className="service-card__image">
                  <img
                    src={verticalImages[vertical.slug]}
                    alt={vertical.title}
                    style={{ objectPosition: verticalImagePositions[vertical.slug] ?? 'center center' }}
                  />
                </div>

                <div className="service-card__body">
                  <p className="section-label">{vertical.audience}</p>
                  <h3>{vertical.title}</h3>
                  <p>{vertical.summary}</p>

                  <ul className="mini-list">
                    {vertical.differentiators.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <article className="service-additions-card">
            <p className="section-label">Additional target classes</p>
            <h3>Broaden the coverage snapshot to reflect more of Hatch’s book.</h3>
            <ul className="mini-list mini-list--columns">
              {hatchContent.coverageSnapshotAdditions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="section section--people" id="team">
          <div className="people-heading">
            <SectionHeading
              eyebrow="People and proof"
              title="Keep the specialist story personal."
              body="The redesign should still feel like a firm where you can reach the people behind the advice."
            />

            <aside className="testimonial-card">
              <p className="section-label">Client voice</p>
              <blockquote>{testimonial.quote}</blockquote>
              <strong>{testimonial.author}</strong>
              <TestimonialDots current={testimonialIndex} onSelect={setTestimonialIndex} />
            </aside>
          </div>

          <div className="team-grid">
            {hatchContent.team.map((member) => (
              <article key={member.name} className="team-card team-card--featured">
                <div className="team-card__body">
                  <h3>{member.name}</h3>
                  <p className="team-card__role">{member.role}</p>
                  <p>{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--cta">
          <div className="cta-panel">
            <div className="cta-panel__copy">
              <p className="section-label">Start the conversation</p>
              <h2>Turn Hatch’s specialist depth into the main conversion story.</h2>
              <p>
                Present the agency as a sharp, modern advisor from the first screen,
                then make the next step feel personal and immediate.
              </p>
            </div>

            <div className="cta-panel__details">
              <div>
                <h3>Visit or call</h3>
                <p>
                  {hatchContent.company.addressLines[0]}
                  <br />
                  {hatchContent.company.addressLines[1]}
                </p>
              </div>

              <ul className="mini-list">
                <li>Toll free: {hatchContent.company.phoneDisplay}</li>
                <li>Local: {hatchContent.company.localPhoneDisplay}</li>
                <li>Email: {hatchContent.company.email}</li>
                <li>{hatchContent.company.hours}</li>
              </ul>

              <div className="hero__actions">
                <a className="button button--primary" href={hatchContent.company.phoneHref}>
                  Call Hatch
                </a>
                <a className="button button--ghost" href={hatchContent.company.emailHref}>
                  Email Hatch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand-lockup" href="#top">
        <span className="brand-lockup__mark">H</span>
        <span className="brand-lockup__text">
          <strong>{hatchContent.company.shortName}</strong>
          <small>Insurance Agency</small>
        </span>
      </a>

      <nav className="site-nav" aria-label="Primary navigation">
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="button button--ghost button--compact" href={hatchContent.company.phoneHref}>
        {hatchContent.company.localPhoneDisplay}
      </a>
    </header>
  )
}

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string
  title: string
  body: string
}) {
  return (
    <div className="section-heading">
      <p className="section-label">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}

function TestimonialDots({
  current,
  onSelect,
}: {
  current: number
  onSelect: (index: number) => void
}) {
  return (
    <div className="testimonial-dots" aria-label="Select testimonial">
      {hatchContent.testimonials.map((item, index) => (
        <button
          key={item.author}
          className={index === current ? 'testimonial-dots__dot active' : 'testimonial-dots__dot'}
          onClick={() => onSelect(index)}
          type="button"
        />
      ))}
    </div>
  )
}

export default App
