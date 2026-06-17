/* ============================================================================
   gradebook.js  —  Algebra 2 score submission config
   ----------------------------------------------------------------------------
   Fill these four entry IDs in AFTER you create the Google Form (see the setup
   guide), then set enabled to true and re-upload THIS ONE FILE to your repo
   root. Every check page across every unit will start showing the
   "Send my score to the gradebook" button. No other files need to change.
   ============================================================================ */
window.GRADEBOOK = {
  enabled: false,   // ← flip to true once the four entry IDs below are filled in

  // The Form's link — the .../viewform URL (NOT the edit URL):
  formBase: "https://docs.google.com/forms/d/e/FORM_ID/viewform",

  // Each question's field id, copied from the Form's pre-filled-link tool:
  entry: {
    id:     "entry.0000000000",   // "Student ID" question
    lesson: "entry.0000000000",   // "Lesson" question
    score:  "entry.0000000000",   // "Score (%)" question
    date:   "entry.0000000000"    // "Date" question
  }
};
