    /**
 * CONFIGURATION FILE
 * ==================
 * This file contains all the editable content for the website.
 * You can change text, links, and other content here without touching component files.
 */

export const config = {
  // ============================================
  // EVENT INFORMATION
  // ============================================
  event: {
    organizationName: "Revonix Robotics Competition",
    title: "ROBO GENESIS 2026",
    tagline: "INNOVATE – BUILD – COMPETE",
    maxMembers: "Max 4 Members per team",
    date: "March 2026",
    venue: "AIET Campus",
    mode: "Offline",
    participation: "Participation Open For All Engineering Branches",
    contactEmail: "revonixofficial@gmail.com"
  },

  // ============================================
  // TOPICS SECTION
  // ============================================
  // Edit this array to change the topics displayed
  topics: [
    "Autonomous Bots",
    "Line Followers",
    "AI Challenges",
    "Open Innovation"
  ],

  // ============================================
  // RULES SECTION
  // ============================================
  // Edit this array to change the rules displayed
  rules: [
    "Max 4 members per team",
    "Fair play",
    "Bring your own equipment"
  ],

  // ============================================
  // REGISTRATION SECTION
  // ============================================
  registration: {
    // REPLACE THIS URL with your actual Google Form link
    googleFormUrl: "https://forms.gle/apM3tJtYK9GB8Dv96",
    
    // QR Code image path
    // To replace: Put your QR code image in the public folder (e.g., public/qr-code.png)
    // Then change this path to "/qr-code.png"
    qrCodeImage: "public/Mahesh-QR-Code.jpeg",
    
    qrCodeAltText: "Payment QR Code",
    qrCodeInstructions: "After payment, upload the screenshot in the Google Form."
  }
};

