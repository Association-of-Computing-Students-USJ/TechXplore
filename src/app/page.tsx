import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-950 to-green-900 text-white">
      {/* Tech/Network Node Background Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-network-pattern opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-network-lines opacity-40" />

      {/* Decorative glowing nodes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[15%] h-2 w-2 animate-pulse rounded-full bg-yellow-400 opacity-70 shadow-[0_0_8px_2px_rgba(244,196,48,0.5)]" />
        <div className="node-delay-2 absolute left-[25%] top-[40%] h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-400 opacity-50 shadow-[0_0_6px_2px_rgba(244,196,48,0.4)]" />
        <div className="node-delay-3 absolute left-[70%] top-[10%] h-2 w-2 animate-pulse rounded-full bg-yellow-400 opacity-60 shadow-[0_0_8px_2px_rgba(244,196,48,0.5)]" />
        <div className="node-delay-4 absolute left-[85%] top-[50%] h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-400 opacity-50 shadow-[0_0_6px_2px_rgba(244,196,48,0.4)]" />
        <div className="node-delay-1 absolute left-[50%] top-[70%] h-2 w-2 animate-pulse rounded-full bg-yellow-400 opacity-40 shadow-[0_0_8px_2px_rgba(244,196,48,0.4)]" />
        <div className="absolute left-[40%] top-[25%] h-1 w-1 rounded-full bg-yellow-400 opacity-30" />
        <div className="absolute left-[60%] top-[60%] h-1 w-1 rounded-full bg-yellow-400 opacity-30" />
        {/* Connecting lines (decorative SVG) */}
        <svg className="absolute inset-0 h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="15%" x2="25%" y2="40%" stroke="#F4C430" strokeWidth="0.5" />
          <line x1="25%" y1="40%" x2="50%" y2="70%" stroke="#F4C430" strokeWidth="0.5" />
          <line x1="70%" y1="10%" x2="85%" y2="50%" stroke="#F4C430" strokeWidth="0.5" />
          <line x1="40%" y1="25%" x2="70%" y2="10%" stroke="#F4C430" strokeWidth="0.5" />
          <line x1="60%" y1="60%" x2="85%" y2="50%" stroke="#F4C430" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col">
        {/* ── Header / Nav ── */}
        <header className="flex items-center justify-between px-6 py-5 md:px-12">
          <div className="flex items-center gap-3">
            {/* ACS Logo Placeholder */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-400/50 bg-green-900/80 text-xs font-bold text-yellow-400">
              ACS
            </div>
            <span className="font-body text-sm font-medium tracking-wider text-green-200 uppercase">
              Association of Computing Students · USJ
            </span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <span className="font-tech text-xs tracking-widest text-green-400 uppercase">
              Edition 2.0
            </span>
          </div>
        </header>

        {/* ── Hero Section ── */}
        <section className="flex flex-col items-center px-6 pt-8 pb-12 text-center md:px-12 md:pt-12">
          {/* TechXplore Logo Text */}
          <div className="mb-2 flex items-baseline gap-1">
            <h1 className="font-tech text-5xl font-bold tracking-tight text-yellow-400 drop-shadow-[0_0_20px_rgba(244,196,48,0.4)] md:text-7xl lg:text-8xl">
              Tech
            </h1>
            <h1 className="font-tech text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] md:text-7xl lg:text-8xl">
              Xplore
            </h1>
          </div>

          {/* Edition label */}
          <p className="font-tech mb-4 text-sm tracking-[0.3em] text-green-300 uppercase md:text-base">
            &gt;&gt; Edition 2.0 &lt;&lt;
          </p>

          {/* Event Title */}
          <div className="mb-3">
            <h2 className="font-tech text-xl leading-snug text-green-100 md:text-2xl lg:text-3xl">
              Session 06:{" "}
              <span className="text-yellow-400">On Chain Analysis</span>
            </h2>
            <p className="font-body mt-1 text-base text-green-300 md:text-lg">
              On Chain Analysis for Beginners
            </p>
          </div>

          {/* Event badge */}
          <div className="mb-10 inline-block rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-1.5 font-tech text-xs tracking-widest text-yellow-300 uppercase">
            Free · Online · Open to All
          </div>
        </section>

        {/* ── Speaker Section (split layout) ── */}
        <section className="relative mx-auto mb-16 w-full max-w-5xl px-6 md:px-12">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">

            {/* Left – Speaker image with 'Speaker' overlay */}
            <div className="relative mx-auto w-full max-w-sm">
              {/* 'Speaker' label in cursive, overlapping the image */}
              <span className="absolute -left-4 -top-5 z-20 rotate-[-6deg] font-cursive text-5xl font-bold text-yellow-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] md:text-6xl">
                Speaker
              </span>

              {/* Image placeholder (gold-bordered frame) */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-yellow-400/60 bg-green-900/60 shadow-[0_0_30px_rgba(244,196,48,0.15)]">
                <Image
                  src="/speaker-placeholder.svg"
                  alt="Speaker – Mr. Dilip Ishara"
                  width={400}
                  height={450}
                  className="w-full object-cover"
                  priority
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-950/80 to-transparent" />
              </div>

              {/* Gold accent corner decoration */}
              <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-br-xl border-b-2 border-r-2 border-yellow-400/50" />
              <div className="absolute -left-3 -top-3 h-16 w-16 rounded-tl-xl border-l-2 border-t-2 border-yellow-400/50" />
            </div>

            {/* Right – Speaker details */}
            <div className="flex flex-col gap-6">
              {/* Speaker details card bordered in gold */}
              <div className="relative rounded-xl border border-yellow-400 bg-green-900/50 p-6 shadow-[0_0_20px_rgba(244,196,48,0.1)] backdrop-blur-sm">
                {/* Top gold accent line */}
                <div className="absolute left-6 top-0 h-0.5 w-16 -translate-y-px bg-gradient-to-r from-yellow-400 to-transparent" />

                <p className="font-tech mb-2 text-xs tracking-widest text-yellow-400/80 uppercase">
                  Featured Speaker
                </p>
                <h3 className="font-tech mb-1 text-2xl font-bold text-white md:text-3xl">
                  Mr. Dilip Ishara
                </h3>
                <p className="font-body mb-4 text-sm leading-relaxed text-green-200">
                  South Asia Marketing
                  <br />
                  <span className="font-semibold text-yellow-400">Binance</span>
                </p>

                <div className="h-px bg-gradient-to-r from-yellow-400/40 to-transparent" />

                <p className="font-body mt-4 text-sm leading-relaxed text-green-300">
                  Gain insights from an industry expert on blockchain data
                  analysis, on-chain metrics, and navigating the crypto
                  ecosystem.
                </p>

                {/* Bottom gold accent line */}
                <div className="absolute bottom-0 right-6 h-0.5 w-16 translate-y-px bg-gradient-to-l from-yellow-400 to-transparent" />
              </div>

              {/* Session details */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-green-700 bg-green-900/40 p-3 text-center">
                  <p className="font-tech text-xs text-green-400 uppercase">Topic</p>
                  <p className="font-body mt-1 text-sm font-medium text-white">
                    On Chain Analysis
                  </p>
                </div>
                <div className="rounded-lg border border-green-700 bg-green-900/40 p-3 text-center">
                  <p className="font-tech text-xs text-green-400 uppercase">Session</p>
                  <p className="font-body mt-1 text-sm font-medium text-yellow-400">
                    06 / Series
                  </p>
                </div>
                <div className="col-span-2 rounded-lg border border-green-700 bg-green-900/40 p-3 text-center">
                  <p className="font-tech text-xs text-green-400 uppercase">Level</p>
                  <p className="font-body mt-1 text-sm font-medium text-white">
                    Beginner Friendly · No Prior Crypto Knowledge Required
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="relative border-t border-green-800/60 bg-green-950/80 px-6 py-10 md:px-12">
          <div className="mx-auto max-w-5xl">
            {/* Footer heading */}
            <p className="font-tech mb-8 text-center text-xs tracking-widest text-green-500 uppercase">
              Organized By &amp; Our Partners
            </p>

            {/* University and Partner Logo Row */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {/* University Logo Placeholder */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-green-700 bg-green-900/60">
                  <span className="font-tech text-xs text-green-400">USJ</span>
                </div>
                <p className="font-body text-xs text-green-500">
                  University of Sri Jayewardenepura
                </p>
              </div>

              {/* ACS Logo Placeholder */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow-400/50 bg-green-900/60">
                  <span className="font-tech text-xs font-bold text-yellow-400">ACS</span>
                </div>
                <p className="font-body text-xs text-green-500">
                  Computing Students Society
                </p>
              </div>

              {/* Partner divider */}
              <div className="hidden h-12 w-px bg-green-800 md:block" />

              {/* Partner Logo Placeholder 1 */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-14 w-28 items-center justify-center rounded-lg border border-green-700/60 bg-green-900/40 px-3">
                  <span className="font-tech text-xs text-yellow-400">Binance</span>
                </div>
                <p className="font-body text-xs text-green-500">
                  Presenting Sponsor
                </p>
              </div>

              {/* Partner Logo Placeholder 2 */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-14 w-28 items-center justify-center rounded-lg border border-green-700/60 bg-green-900/40 px-3">
                  <span className="font-tech text-xs text-green-400">Partner</span>
                </div>
                <p className="font-body text-xs text-green-500">
                  [ Partner Logo ]
                </p>
              </div>

              {/* Partner Logo Placeholder 3 */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-14 w-28 items-center justify-center rounded-lg border border-green-700/60 bg-green-900/40 px-3">
                  <span className="font-tech text-xs text-green-400">Sponsor</span>
                </div>
                <p className="font-body text-xs text-green-500">
                  [ Sponsor Logo ]
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-10 border-t border-green-800/40 pt-6 text-center">
              <p className="font-body text-xs text-green-600">
                &copy; {new Date().getFullYear()} Association of Computing Students · University of Sri Jayewardenepura. All rights reserved.
              </p>
              <p className="font-tech mt-1 text-xs text-green-700">
                TechXplore Edition 2.0
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
