# pranav@kastury:~/portfolio

```
❯ whoami
Pranav Kastury, founding engineer.
A single page that reads like a terminal session.
```

My personal site, rebuilt from the ground up as a single-page app with a phosphor-CRT terminal aesthetic. Monospace throughout, dark first, one green accent, and a headline that types itself.

## Stack

- **Next.js** (App Router) and **TypeScript**
- **Tailwind CSS** with CSS-variable design tokens
- **next-themes** for the light and dark toggle
- **Framer Motion** for scroll reveals, **Lenis** for smooth scroll
- **Phosphor Icons** for the few glyphs that earn their place
- **Space Mono** (display) and **JetBrains Mono** (everything else), self-hosted via `next/font`

## Run it

```bash
npm install
npm run dev -- -p 3001
```

Then open `http://localhost:3001`. Swap the port for any you like.

```bash
npm run build   # production build
npm start       # serve the build
```

## How it is built

The whole page is one centered terminal session. Each section is headed by a shell command that names what it does, so the structure carries meaning rather than decorating.

```
❯ whoami              the typed hero, with a thick blinking block cursor
❯ cat about.txt       who I am, in plain words
❯ cat stack.json      the stack, rendered as real JSON
❯ ls -la ~/experience where I have worked
❯ ./contact.sh        say hello
```

Design notes and the full system live in [PORTFOLIO_DESIGN_SYSTEM.md](../PORTFOLIO_DESIGN_SYSTEM.md).

## Writing style

The copy follows a few rules, on purpose:

- Concise and free flowing. Short, confident lines over buzzword stacks.
- First person and human. The voice is "what I am so far," never a sales pitch.
- No em-dashes anywhere. Commas, periods, and parentheses do the work.
- Near-zero emoji. One personal touch lands harder than a wall of icons.
- Pre-2023 portfolio cadence. Warm, plainspoken, a little understated.
