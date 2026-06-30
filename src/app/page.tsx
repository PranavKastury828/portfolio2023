import {
  EnvelopeSimple,
  ArrowUpRight,
  GithubLogo,
  LinkedinLogoIcon,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import { TopBar } from "@/components/TopBar";
import { Spotlight } from "@/components/Spotlight";
import { Reveal } from "@/components/Reveal";
import { Typed } from "@/components/Typed";
import { skills, experience, socials, RESUME_URL } from "@/lib/data";

const socialIcons = {
  github: GithubLogo,
  linkedin: LinkedinLogoIcon,
  twitter: XLogo,
  youtube: YoutubeLogo,
} as const;

function Command({ children }: { children: React.ReactNode }) {
  return (
    <p className="prompt mb-6 text-sm text-muted">
      <span className="text-text">{children}</span>
    </p>
  );
}

export default function Home() {
  return (
    <>
      <Spotlight />
      <TopBar />
      <main className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8">
        {/* Hero */}
        <section className="pt-20 pb-24 sm:pt-28">
          <p className="prompt mb-6 text-sm text-muted">
            <span className="text-text">whoami</span>
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-text sm:text-5xl">
            <Typed wrong="Pranav Kustary" right="Pranav Kastury" />
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            Fullstack engineer who likes building things from zero. Right now
            I&#39;m a founding engineer at{" "}
            <span className="text-accent">Maximor AI</span>, working across the
            product end to end.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded border border-accent px-4 py-2 text-xs text-accent transition-colors hover:bg-accent hover:text-bg"
            >
              ./resume.pdf
              <ArrowUpRight size={13} weight="bold" />
            </a>
            {socials.map((s) => {
              const Icon = socialIcons[s.icon as keyof typeof socialIcons];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="inline-flex items-center gap-1.5 rounded border border-border px-3 py-2 text-xs text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon size={15} />
                  {s.label.toLowerCase()}
                </a>
              );
            })}
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 border-t border-border py-16">
          <Command>cat about.txt</Command>
          <Reveal>
            <div className="space-y-4 text-sm leading-7 text-muted sm:text-base">
              <p>
                I&#39;m Pranav, a fullstack engineer who likes building products
                from zero. Right now I&#39;m a founding engineer at{" "}
                <span className="text-text">Maximor AI</span>, where I work on
                financial controls monitoring and period close automation,
                across the frontend and the systems behind it.
              </p>
              <p>
                Before this I shipped product at{" "}
                <span className="text-text">BitGo</span>,{" "}
                <span className="text-text">Bureau.id</span>, and{" "}
                <span className="text-text">Mutual Mobile</span>, mostly in
                React, Next.js, and TypeScript, with a good amount of Python on
                the backend. I care about the small details, the ones people
                feel but rarely notice.
              </p>
              <p>
                I studied Computer Science at Osmania University, and these days
                coffee is still the fuel.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Stack, rendered as stack.json */}
        <section id="stack" className="scroll-mt-24 border-t border-border py-16">
          <Command>cat stack.json</Command>
          <Reveal>
            <div className="rounded-lg border border-border bg-surface/50 p-5 text-sm leading-7 sm:text-base">
              <span className="text-muted">{"{"}</span>
              {skills.map((group) => {
                const key = group.title.toLowerCase().split(" ")[0];
                return (
                  <div key={group.title} className="pl-4">
                    <span className="text-accent">&quot;{key}&quot;</span>
                    <span className="text-muted">: [</span>
                    <span className="text-text">
                      {group.items.map((i) => `"${i}"`).join(", ")}
                    </span>
                    <span className="text-muted">],</span>
                  </div>
                );
              })}
              <span className="text-muted">{"}"}</span>
            </div>
          </Reveal>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="scroll-mt-24 border-t border-border py-16"
        >
          <Command>ls -la ~/experience</Command>
          <div className="space-y-1">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.04}>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid gap-1 rounded-lg border border-transparent px-4 py-5 transition-colors hover:border-border hover:bg-surface/60 sm:grid-cols-[150px_1fr] sm:gap-6"
                >
                  <div className="text-xs text-muted">{job.dates || "—"}</div>
                  <div>
                    <h3 className="flex flex-wrap items-center gap-x-1.5 text-sm text-text transition-colors group-hover:text-accent sm:text-base">
                      {job.role}
                      <span className="text-muted group-hover:text-accent">
                        @ {job.company}
                      </span>
                      <ArrowUpRight
                        size={15}
                        className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
                      {job.blurb}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 border-t border-border py-16">
          <Command>./contact.sh</Command>
          <Reveal>
            <p className="text-sm text-muted sm:text-base">
              Drop a line. I read everything, and I&#39;m always happy to talk
              shop or hear about something you&#39;re building.
            </p>
            <a
              href="mailto:pranavkastury828@gmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded border border-accent px-5 py-3 text-sm text-accent transition-colors hover:bg-accent hover:text-bg"
            >
              <EnvelopeSimple size={16} weight="bold" />
              pranavkastury828@gmail.com
            </a>
          </Reveal>
        </section>

        <footer className="border-t border-border py-10 text-xs text-muted">
          <p>
            <span className="text-accent/60"># </span>
            built with next.js and tailwind, fueled by coffee. 2026.
          </p>
        </footer>
      </main>
    </>
  );
}
