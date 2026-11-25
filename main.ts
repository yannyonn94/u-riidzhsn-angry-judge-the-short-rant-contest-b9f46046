import { mkdirSync, writeFileSync } from "node:fs";

// Angry Judge: The Short Rant Contest
// The winning rant: a self-checkout machine accuses an honest shopper of
// stealing their own bananas, and the humiliation ends in a "release on bail".
const RANT =
  "The self-checkout accused me of stealing my own bananas. 'Unexpected item in the bagging area.' The item was the bag. The area was where bags go. A woman in a hi-vis vest strolled over like a detective arriving at a crime scene, scanned her badge, and the machine forgave me. I paid full price for groceries and left feeling like I'd been released on bail.";

mkdirSync("/output", { recursive: true });

// The gate caps entries at 400 characters: refuse to write an over-long rant
// rather than silently submitting an invalid entry.
if (RANT.length > 400 || RANT.trim().length === 0) {
  throw new Error(`Rant must be 1-400 characters, got ${RANT.length}`);
}
writeFileSync("/output/entry.txt", RANT, "utf8");
console.log(`Wrote ${RANT.length} characters to /output/entry.txt`);
