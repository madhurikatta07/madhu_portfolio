import { useMemo, useState } from 'react'
import {
  FiAward,
  FiExternalLink,
  FiFileText,
  FiImage,
  FiChevronDown,
  FiChevronUp,
} from 'react-icons/fi'
import { motion } from 'framer-motion'

import SectionTitle from '../SectionTitle/SectionTitle'
import certificates, { CERT_CATEGORIES } from '../../data/certificates'

import './Certificates.css'

function Certificates() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [showAll, setShowAll] = useState(false)

  // Featured certificates shown on initial load.
  // These IDs match your certificates.js
  const featuredCertificateIds = [13, 1, 10]

  const filteredCertificates = useMemo(() => {
    if (activeCategory === 'All') {
      return certificates
    }

    return certificates.filter(
      (certificate) => certificate.category === activeCategory
    )
  }, [activeCategory])

  const displayedCertificates = useMemo(() => {
    if (showAll || activeCategory !== 'All') {
      return filteredCertificates
    }

    return featuredCertificateIds
      .map((id) =>
        certificates.find((certificate) => certificate.id === id)
      )
      .filter(Boolean)
  }, [showAll, activeCategory, filteredCertificates])

  const handleCategoryChange = (category) => {
    setActiveCategory(category)

    // When selecting a specific category, show all
    // certificates belonging to that category.
    if (category !== 'All') {
      setShowAll(true)
    } else {
      setShowAll(false)
    }
  }

  const handleViewAll = () => {
    setShowAll((previous) => !previous)
  }

  return (
    <section
      id="certifications"
      className="certifications-section"
    >
      <div className="certifications-container">

        {/* Section Heading */}
        <SectionTitle
          title="Certifications"
          subtitle="Certifications, technical learning, and competitive experiences that support my development journey."
        />

        {/* Category Filters */}
        <div className="certification-filters">
          {CERT_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryChange(category)}
              className={`certification-filter ${activeCategory === category
                ? 'certification-filter-active'
                : ''
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certificate Count */}
        <div className="certification-meta">
          {activeCategory === 'All' && !showAll ? (
            <span>
              Showing{' '}
              <strong>
                {displayedCertificates.length}
              </strong>{' '}
              featured certifications
            </span>
          ) : (
            <span>
              Showing{' '}
              <strong>
                {displayedCertificates.length}
              </strong>{' '}
              {displayedCertificates.length === 1
                ? 'certificate'
                : 'certificates'}
            </span>
          )}
        </div>

        {/* Certificate Grid */}
        <motion.div
          layout
          className="certification-grid"
        >
          {displayedCertificates.map(
            (certificate, index) => (
              <motion.article
                key={certificate.id}
                layout
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(
                    index * 0.06,
                    0.3
                  ),
                }}
                whileHover={{
                  y: -6,
                }}
                className="certificate-card"
              >
                {/* Card Top */}
                <div className="certificate-card-top">

                  <div className="certificate-icon">
                    <FiAward />
                  </div>

                  <span className="certificate-category">
                    {certificate.category}
                  </span>

                </div>

                {/* Card Content */}
                <div className="certificate-content">

                  {/* Year */}
                  <div className="certificate-year">
                    {certificate.year}
                  </div>

                  {/* Title */}
                  <h3 className="certificate-title">
                    {certificate.title}
                  </h3>

                  {/* Issuer */}
                  <p className="certificate-issuer">
                    {certificate.issuer}
                  </p>

                  {/* Duration */}
                  {certificate.duration && (
                    <p className="certificate-duration">
                      {certificate.duration}
                    </p>
                  )}

                  {/* Tags */}
                  {certificate.tags?.length > 0 && (
                    <div className="certificate-tags">
                      {certificate.tags
                        .slice(0, 3)
                        .map((tag) => (
                          <span
                            key={tag}
                            className="certificate-tag"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                  )}

                  {/* Description */}
                  {certificate.description && (
                    <p className="certificate-description">
                      {certificate.description}
                    </p>
                  )}

                  {/* View Certificate */}
                  {certificate.file && (
                    <a
                      href={certificate.file}
                      target="_blank"
                      rel="noreferrer"
                      className="certificate-button"
                    >
                      <span className="certificate-button-icon">
                        {certificate.type === 'pdf' ? (
                          <FiFileText />
                        ) : (
                          <FiImage />
                        )}
                      </span>

                      <span>
                        View Certificate
                      </span>

                      <FiExternalLink className="certificate-button-arrow" />
                    </a>
                  )}

                </div>
              </motion.article>
            )
          )}
        </motion.div>

        {/* Empty State */}
        {displayedCertificates.length === 0 && (
          <div className="certification-empty">
            <FiAward />
            <p>
              No certificates found in this category.
            </p>
          </div>
        )}

        {/* View All / Show Featured Button */}
        {activeCategory === 'All' &&
          certificates.length > 3 && (
            <div className="certification-view-all-wrapper">
              <button
                type="button"
                onClick={handleViewAll}
                className="certification-view-all"
              >
                <span>
                  {showAll
                    ? 'Show Featured Only'
                    : 'View All Certifications'}
                </span>

                {showAll ? (
                  <FiChevronUp />
                ) : (
                  <FiChevronDown />
                )}
              </button>
            </div>
          )}

      </div>
    </section>
  )
}

export default Certificates