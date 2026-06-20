"use client";

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pb-20">
      <div className="border-b bg-white dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6 py-9">
          <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-700">← Back to home</Link>
          <h1 className="mt-3 text-6xl font-semibold tracking-tighter">About DorkAtlas</h1>
          <p className="text-2xl text-zinc-600 dark:text-zinc-400 mt-2 tracking-tight">The definitive open source resource for ethical Google search research.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-12 space-y-14">
        <div>
          <h2 className="font-semibold text-xl tracking-tight mb-4">Our Mission</h2>
          <div className="prose prose-zinc dark:prose-invert max-w-none text-[15px]">
            DorkAtlas exists to democratize access to powerful search techniques while promoting ethical research practices. 
            We believe everyone — from students to journalists — should have the tools to discover public information responsibly.
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Educational", desc: "Every feature is designed to teach. No black boxes — just transparent, explainable search techniques." },
            { title: "Ethical", desc: "Built-in safety engine prevents harmful queries. We promote privacy awareness at every step." },
            { title: "Open Source", desc: "Fully transparent MIT licensed codebase. Community contributions are welcome and encouraged." }
          ].map((item, i) => (
            <div key={i} className="border bg-white dark:bg-zinc-900 rounded-3xl p-8">
              <div className="font-semibold text-xl tracking-tight mb-3">{item.title}</div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="font-semibold text-xl tracking-tight mb-4">Legal &amp; Compliance</h2>
          
          <div className="space-y-4 text-sm">
            <div className="p-6 border rounded-3xl bg-white dark:bg-zinc-900">
              <div className="font-medium mb-1">This project is not affiliated with Google LLC.</div>
              <div className="text-zinc-600 dark:text-zinc-400">DorkAtlas is an independent educational resource. Google, the Google logo, and related marks are trademarks of Google LLC.</div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/terms" className="block border p-6 rounded-3xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">Terms of Use →</Link>
              <Link href="/privacy" className="block border p-6 rounded-3xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">Privacy Policy →</Link>
              <Link href="/security" className="block border p-6 rounded-3xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">Security Policy →</Link>
              <Link href="/disclaimer" className="block border p-6 rounded-3xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">Disclaimer →</Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t">
          <div className="text-xs text-center text-zinc-500 max-w-xs mx-auto">
            DorkAtlas is committed to the principles of privacy by design, 
            least privilege, and responsible disclosure. 
            We welcome feedback and responsible security reports.
          </div>
        </div>
      </div>
    </div>
  );
}
