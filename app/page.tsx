import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-8 px-6 text-center">
      <div className="max-w-2xl space-y-4">
        <p className="text-sm tracking-[0.2em]">SO, YOU WANT TO TRAVEL TO</p>
        <p className="text-6xl font-semibold">SPACE</p>
        <p className="text-base">
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </div>
      <Link
        href="/about_us"
        className="rounded-full border border-white/40 px-8 py-3 text-sm tracking-[0.15em]"
      >
        EXPLORE
      </Link>
    </main>
  );
}
