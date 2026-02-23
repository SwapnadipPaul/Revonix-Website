/**
 * REGISTRATION SECTION COMPONENT
 * ==============================
 * Displays registration button and QR code for payment.
 * 
 * TO EDIT CONTENT:
 * - Go to src/config.js and modify the registration object
 * - Change googleFormUrl to your actual Google Form link
 * - Replace QR code image:
 *   1. Put your QR code image in the public folder (e.g., public/qr-code.png)
 *   2. Update qrCodeImage in config.js to "/qr-code.png"
 */

import React from 'react'
import { config } from '../config'
import './RegistrationSection.css'

function RegistrationSection() {
  const { registration } = config

  const handleRegisterClick = () => {
    // Opens Google Form in a new tab
    window.open(registration.googleFormUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="registration-section">
      <div className="container">
        <h2 className="section-title">Register Now</h2>
        <div className="registration-content">
          {/* Registration Button */}
          <div className="registration-button-container">
            <button 
              className="register-button" 
              onClick={handleRegisterClick}
              aria-label="Register for the competition"
            >
              Register Now
              <svg 
                className="button-arrow" 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* QR Code Area */}
          <div className="qr-code-container">
            <div className="qr-code-box">
              <img 
                src={registration.qrCodeImage} 
                alt={registration.qrCodeAltText}
                className="qr-code-image"
                onError={(e) => {
                  // If image fails to load, show placeholder text
                  e.target.style.display = 'none'
                  e.target.nextElementSibling.style.display = 'flex'
                }}
              />
              <div className="qr-placeholder" style={{ display: 'none' }}>
                <p className="qr-placeholder-text">Place Payment QR Code Here</p>
                <p className="qr-placeholder-instructions">
                  Add your QR code image to the public folder and update the path in config.js
                </p>
              </div>
            </div>
            <p className="qr-instructions">{registration.qrCodeInstructions}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegistrationSection

