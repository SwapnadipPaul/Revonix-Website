/**
 * CONTACT & REGISTRATION DATA
 * ===========================
 * Edit this file to update:
 *   - Registration fee and deadline
 *   - Payment modes and UPI ID
 *   - QR code image path
 *   - Registration form link
 *   - Email and coordinator details
 *
 * This file is imported by RegistrationPage.jsx.
 */


/* =====================================================
   REGISTRATION INFO
   ===================================================== */
export const registrationInfo = {

  // ── Fee ────────────────────────────────────────────
  // Update this string with the actual registration fee
  fee: '₹400 per team',                  // ← CHANGE THIS

  // ── Deadline ───────────────────────────────────────
  // Update with the final registration deadline date
  deadline: 'March 10, 2026',            // ← CHANGE THIS

  // ── Payment Modes ──────────────────────────────────
  // List the accepted payment methods.
  // You can add/remove items from this array.
  paymentModes: ['UPI', 'Cash Before Event'],  // ← EDIT THIS

  // ── UPI ID ─────────────────────────────────────────
  // Replace with your club's / organizer's UPI ID
  upiId: '9035612372-3@ibl',             // ← CHANGE THIS

  // ── QR Code ────────────────────────────────────────
  // HOW TO ADD YOUR QR CODE:
  //   1. Save your QR code image as:  public/qr-code.png
  //   2. Change the value below to:   '/qr-code.png'
  //   3. The image will appear automatically on the page.
  //
  // Leave as null to show the placeholder box.
  qrCodePath: '/Mahesh-QR-Code.jpeg',                      // ← e.g. '/qr-code.png'

  // ── Online Registration Link ────────────────────────
  // Paste your Google Form / registration portal URL here.
  // This is used by the "Register Here" button.
  registrationLink: 'https://forms.gle/apM3tJtYK9GB8Dv96',                 // ← CHANGE THIS to your form URL
}


/* =====================================================
   CONTACT INFORMATION
   ===================================================== */
export const contactInfo = {

  // ── Official Event Email ────────────────────────────
  // Update with the actual event / club email address
  email: 'robogenesis2026@aiet.edu',    // ← CHANGE THIS


  // ── Student Coordinators ───────────────────────────
  // Add or remove coordinator objects as needed.
  // Each object can have: name, role, phone, email
  studentCoordinators: [
    {
      name:  'Student Coordinator Name',   // ← CHANGE THIS
      role:  'Student Coordinator',
      phone: '+91 XXXXX XXXXX',            // ← CHANGE THIS
      email: 'coordinator1@aiet.edu',      // ← CHANGE THIS
    },
    {
      name:  'Student Coordinator Name',   // ← CHANGE THIS
      role:  'Student Coordinator',
      phone: '+91 XXXXX XXXXX',            // ← CHANGE THIS
      email: 'coordinator2@aiet.edu',      // ← CHANGE THIS
    },
  ],


  // ── Faculty Coordinators ───────────────────────────
  // Add or remove faculty coordinator objects as needed.
  // Each object can have: name, role, department, phone, email
  facultyCoordinators: [
    {
      name:       'Prof. Faculty Name',    // ← CHANGE THIS
      role:       'Faculty Coordinator',
      department: 'Electronics & Comm.',   // ← CHANGE THIS (e.g. ECE, CSE, ME)
      phone:      '+91 XXXXX XXXXX',       // ← CHANGE THIS
      email:      'faculty@aiet.edu',      // ← CHANGE THIS
    },
  ],
}
