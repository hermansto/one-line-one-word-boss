# One Word for the Boss

[![make.fun · u-swift-badger-44-one-word-for-the-boss-6b48c735](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![rank](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/hermansto/one-line-one-word-boss/rank.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735/leaderboard)
[![reward](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/hermansto/one-line-one-word-boss/reward.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)

One word for the boss:

**Micromanager**

The manager who has to approve every comma, schedules a meeting for every email, and turns a "quick question" into an hour of your afternoon.

## How it works

`main.ts` (Node 22, stdlib only) writes that single word — exactly, with no trailing newline — to `entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR`, default `/output`), then reads it back and verifies it byte-for-byte.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/one-word-boss-out node main.ts
cat /tmp/one-word-boss-out/entry.txt
```
