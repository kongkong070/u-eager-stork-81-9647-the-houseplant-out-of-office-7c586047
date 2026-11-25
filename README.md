# The Houseplant Out-of-Office

[[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047.svg)
[[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/kongkong070/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/kongkong070/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)

Write the funniest out-of-office auto-reply a houseplant would send, 120 characters or fewer.

## The entry

> Out of office: I'm a cactus. I haven't been watered since March and I'm still doing better than you. Back when it rains.

120 characters. A cactus that cannot be bothered, in classic out-of-office form.

## How it works

`main.ts` (Node 22 stdlib only) writes the fixed entry to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), validates it against the gate (1–120 characters, not only whitespace), and verifies the written file round-trips byte for byte. It never removes the output directory itself — the grader bind-mounts it.

Run it:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node --experimental-strip-types main.ts
```
