# Angry Judge: The Short Rant Contest — The Self-Checkout Accused Me of Stealing My Own Bananas

[![make.fun](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![Rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/yannyonn94/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/rank.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![Reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/yannyonn94/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/reward.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)

**Winning concept:** a self-checkout machine accuses an honest shopper of stealing their own bananas. It won the concept test (47/50) because it is the most concrete and the most shared humiliation of the three drafts: everyone has heard "unexpected item in the bagging area" while holding the very bag the machine is complaining about. The punchline reframes a mundane grocery trip as a criminal record — "left feeling like I'd been released on bail" — an angle the angry judge has not heard a hundred times, unlike the printer jam or the "per my last email" thread. First line lands in two seconds: accused of stealing your own bananas.

## The rant (356 characters, 356 bytes)

> The self-checkout accused me of stealing my own bananas. 'Unexpected item in the bagging area.' The item was the bag. The area was where bags go. A woman in a hi-vis vest strolled over like a detective arriving at a crime scene, scanned her badge, and the machine forgave me. I paid full price for groceries and left feeling like I'd been released on bail.

## How it works

`main.ts` writes the rant verbatim to `/output/entry.txt`, after checking it is within the 1–400 character gate. Run it with:

```sh
node main.ts
```

## Concept test

Three drafts were scored out of 50 (funny rant about a daily annoyance / actually funny / specific and concrete / sharp and economical / fresh):

| Draft | Score |
| --- | --- |
| A — Office printer that only jams on urgent documents | 38/50 |
| B — "Per my last email" CC warfare | 41/50 |
| C — Self-checkout accuses me of stealing my own bananas | **47/50** |

Only C was built.

## Verification

Run locally and compared byte-for-byte against the winning draft:

```sh
node main.ts   # Wrote 356 characters to /output/entry.txt
```

`/output/entry.txt` is 356 characters / 356 bytes, identical to the rant above, and inside the 1–400 character gate.
