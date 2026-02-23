/**
 * TOPICS SECTION COMPONENT
 * ========================
 * Displays the competition topics/categories.
 * 
 * TO EDIT CONTENT:
 * - Go to src/config.js and modify the topics array
 * - Add or remove items from the array to change the displayed topics
 */

import React from 'react'
import { config } from '../config'
import './TopicsSection.css'

function TopicsSection() {
  const { topics } = config

  return (
    <section className="topics-section">
      <div className="container">
        <h2 className="section-title">Competition Topics</h2>
        <div className="topics-grid">
          {topics.map((topic, index) => (
            <div key={index} className="topic-card">
              <div className="topic-icon">
                <span className="topic-number">{index + 1}</span>
              </div>
              <h3 className="topic-title">{topic}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TopicsSection

