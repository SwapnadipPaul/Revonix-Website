/**
 * CHALLENGE THEMES DATA
 * =====================
 * Edit this file to update the flip cards on the home page.
 *
 * Each theme object has:
 *   emoji      → the large icon shown on the card front
 *   title      → challenge name
 *   shortDesc  → one-liner shown on the front of the card
 *   description → full description shown on the card back
 *   criteria   → evaluation criteria (label + percentage)
 *
 * To add a new card: copy one object, paste it at the end of
 * the array, update the values, and it will automatically appear.
 *
 * To remove a card: delete its object from the array.
 */

export const themes = [
  {
    id: 1,
    emoji: '🤖',
    title: 'Advanced Line Follower',
    shortDesc: 'Navigate complex tracks with precision and speed.',

    // Full description shown on the back of the card
    description:
      'Participants must build an autonomous robot capable of following a complex track including sharp turns, broken lines, and obstacle sections.',

    // Evaluation criteria — must add up to 100%
    criteria: [
      { label: 'Speed',    percentage: 40 },
      { label: 'Accuracy', percentage: 40 },
      { label: 'Stability',percentage: 20 },
    ],
  },

  {
    id: 2,
    emoji: '🧩',
    title: 'Maze Solver',
    shortDesc: 'Navigate through a maze autonomously in minimum time.',

    description:
      'Robots must navigate through a maze autonomously and reach the destination in minimum time.',

    criteria: [
      { label: 'Completion Time',   percentage: 50 },
      { label: 'Path Efficiency',   percentage: 30 },
      { label: 'No External Control', percentage: 20 },
    ],
  },

  {
    id: 3,
    emoji: '♻️',
    title: 'Smart Segregation Bot',
    shortDesc: 'Identify and sort objects with intelligent vision.',

    description:
      'Robot must identify and segregate objects based on color/type into designated bins.',

    criteria: [
      { label: 'Sorting Accuracy', percentage: 50 },
      { label: 'Speed',            percentage: 30 },
      { label: 'Innovation',       percentage: 20 },
    ],
  },

  {
    id: 4,
    emoji: '🧠',
    title: 'AI vs Human Bots',
    shortDesc: 'Machines challenge human reflexes in precision tasks.',

    description:
      'Robots compete against humans in tasks like reaction timing, precision control, or decision-making challenges.',

    criteria: [
      { label: 'Accuracy',          percentage: 40 },
      { label: 'Speed',             percentage: 30 },
      { label: 'Intelligence Logic',percentage: 30 },
    ],
  },
]
