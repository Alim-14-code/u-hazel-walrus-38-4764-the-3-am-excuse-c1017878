# The 3 AM Excuse

[![make.fun · u-hazel-walrus-38-4764-the-3-am-excuse-c1017878](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/Alim-14-code/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/Alim-14-code/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)

One line, in the voice of a hardware wallet that will not sign a transaction at 3 AM:

> It's 3 AM — I'm your designated driver, and your half-asleep thumb is too drunk to drive your life savings home tonight.

## How it works

`main.ts` (Node standard library only) reads the excuse from `entry.txt`,
validates it against the competition gate — a single line of 1–200 characters —
and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`).

```sh
node main.ts
```

## Files

- `main.ts` — entry program (Node stdlib only)
- `entry.txt` — the single-line excuse
- `LICENSE` — MIT

## License

MIT — see [LICENSE](LICENSE).
