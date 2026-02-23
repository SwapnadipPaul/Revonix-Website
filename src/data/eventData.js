/**
 * EVENT DATA
 * ==========
 * Central data file for event details, objectives, rules,
 * certificates, and the schedule.
 *
 * This file is imported by:
 *   - HomePage.jsx        (eventDetails)
 *   - EventPage.jsx       (objectives, generalRules, certificates, schedule)
 */


/* =====================================================
   EVENT DETAILS
   =====================================================
   Displayed in the "Event Details" cards on the home page.
   Update venue, date, duration, etc. here.
   ===================================================== */
export const eventDetails = {
  venue:       'AIET Seminar Hall',
  date:        'March 2026',
  duration:    'One Day',
  eligibility: 'Students of AIET',
  teamSize:    '1–4 Members',
}


/* =====================================================
   EVENT OBJECTIVES
   =====================================================
   Listed on the Event Details page under "What You'll Gain".
   Add, remove, or edit bullet points here.
   ===================================================== */
export const objectives = [
  'Hands-on robotics experience',
  'Real-time problem solving',
  'Technical exposure across engineering branches',
  'Certificate of participation for all competitors',
  'Cash prizes for top-performing teams',
]


/* =====================================================
   GENERAL RULES
   =====================================================
   Displayed in the Rules & Regulations section.
   Add or remove rules as needed.
   ===================================================== */
export const generalRules = [
  'Only autonomous robots are allowed (no manual control unless specified by the challenge).',
  'Team size: Maximum 4 members per team.',
  'Only registered teams can participate.',
  'Decision of judges is final and binding.',
  'Robots must be built by the participants themselves.',
  'Use of harmful, flammable, or prohibited materials is strictly not allowed.',
]


/* =====================================================
   CERTIFICATES
   =====================================================
   Displayed in the "Certificates Provided" section.
   Each object needs: type, desc, icon (emoji).
   ===================================================== */
export const certificates = [
  {
    icon: '🏅',
    type: 'Participation Certificate',
    desc: 'Awarded to every registered participant who competes on the day of the event.',
  },
  {
    icon: '🏆',
    type: 'Winner Certificate',
    desc: 'Awarded to the top-performing teams in each challenge category.',
  },
]


/* =====================================================
   SCHEDULE
   =====================================================
   HOW TO ADD THE SCHEDULE:
   ─────────────────────────
   Once the schedule is finalized with the principal,
   uncomment the example items below and fill in the
   actual times, activities, and locations.

   Each item needs:
     time:     → e.g. '09:00 AM'
     activity: → e.g. 'Registration & Check-in'
     location: → e.g. 'Main Entrance'  (optional)

   Add as many items as needed. They render as a
   vertical timeline on the Event Details page.
   ===================================================== */
export const schedule = [
  // ── Uncomment and edit the lines below when ready ──

  // { time: '09:00 AM', activity: 'Registration & Check-in',          location: 'Main Entrance'    },
  // { time: '10:00 AM', activity: 'Inauguration Ceremony',            location: 'Seminar Hall'     },
  // { time: '10:30 AM', activity: 'Round 1 — Line Follower & Maze',   location: 'Arena A'          },
  // { time: '01:00 PM', activity: 'Lunch Break',                      location: 'Cafeteria'        },
  // { time: '02:00 PM', activity: 'Round 2 — Segregation & AI vs Human', location: 'Arena B'       },
  // { time: '04:30 PM', activity: 'Finals & Judging',                 location: 'Main Stage'       },
  // { time: '05:30 PM', activity: 'Prize Distribution & Closing',     location: 'Seminar Hall'     },
]
