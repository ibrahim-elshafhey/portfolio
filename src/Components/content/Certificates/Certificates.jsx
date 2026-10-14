import './Certificates.css'

const certificates = [
  { id: 1, number: '01' },
  { id: 2, number: '02' },
]

const Certificates = () => {
  return (
    <section className="certificates-section" id="certificates" aria-labelledby="certificates-title">
      <div className="certificates-heading">
        <span className="certificates-eyebrow">LEARNING JOURNEY</span>
        <h2 id="certificates-title">
          My <span>Certificates</span>
        </h2>
        <p>JavaScript certificates earned through Tofas.</p>
      </div>

      <div className="certificates-grid">
        {certificates.map((certificate) => (
          <article className="certificate-card" key={certificate.id}>
            <div className="certificate-card-top">
              <span className="certificate-provider">TOFAS</span>
              <span className="certificate-number">{certificate.number}</span>
            </div>
            <div className="certificate-emblem" aria-hidden="true">
              <span>JS</span>
            </div>
            <h3>JavaScript</h3>
            <p className="certificate-description">Certificate of learning</p>
            <div className="certificate-card-footer">
              <span>JavaScript</span>
              <span className="certificate-seal" aria-hidden="true">✦</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Certificates
