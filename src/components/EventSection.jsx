/**
 * EVENT SECTION COMPONENT
 * =======================
 * Displays the main event information including:
 * - Organization name
 * - Event title
 * - Tagline
 * - Event details (date, venue, mode, etc.)
 * 
 * TO EDIT CONTENT:
 * - Go to src/config.js and modify the event object
 */

import React from 'react'
import { config } from '../config'
import './EventSection.css'

function EventSection() {
  const { event } = config

  return (
    <section className="event-section">
      <div className="container">
        <div className="event-content">
          {/* Organization Name */}
          <p className="event-organization">{event.organizationName}</p>
          
          {/* Main Title */}
          <h1 className="event-title">{event.title}</h1>
          
          {/* Tagline */}
          <p className="event-tagline">{event.tagline}</p>
          
          {/* Event Details Card */}
          <div className="event-details-card">
            <div className="event-detail-item">
              <span className="detail-label">Team Size:</span>
              <span className="detail-value">{event.maxMembers}</span>
            </div>
            
            <div className="event-detail-item">
              <span className="detail-label">Date:</span>
              <span className="detail-value">{event.date}</span>
            </div>
            
            <div className="event-detail-item">
              <span className="detail-label">Venue:</span>
              <span className="detail-value">{event.venue}</span>
            </div>
            
            <div className="event-detail-item">
              <span className="detail-label">Mode:</span>
              <span className="detail-value">{event.mode}</span>
            </div>
            
            <div className="event-detail-item full-width">
              <span className="detail-label">Participation:</span>
              <span className="detail-value">{event.participation}</span>
            </div>
            
            <div className="event-detail-item full-width">
              <span className="detail-label">Contact:</span>
              <span className="detail-value">
                <a href={`mailto:${event.contactEmail}`} className="contact-link">
                  {event.contactEmail}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventSection

