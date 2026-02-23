/**
 * RULES SECTION COMPONENT
 * ========================
 * Displays the competition rules.
 * 
 * TO EDIT CONTENT:
 * - Go to src/config.js and modify the rules array
 * - Add or remove items from the array to change the displayed rules
 */

import React from 'react'
import { config } from '../config'
import './RulesSection.css'

function RulesSection() {
  const { rules } = config

  return (
    <section className="rules-section">
      <div className="container">
        <h2 className="section-title">Competition Rules</h2>
        <div className="rules-list">
          {rules.map((rule, index) => (
            <div key={index} className="rule-item">
              <div className="rule-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 2L3 7V17H8V12H12V17H17V7L10 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="rule-text">{rule}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RulesSection

