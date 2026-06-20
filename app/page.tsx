import Link from "next/link";
import { ArrowRight, BookOpen, Users, Shield, Award, Search } from "lucide-react";

export default function DorkAtlasHome() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b bg-white/95 dark:bg-zinc-950/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
              <Search className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold tracking-tight text-xl">DorkAtlas</div>
              <div className="text-[10px] text-zinc-500 -mt-1">ETHICAL RESEARCH • OPEN SOURCE</div>
            </div>
          </div>
          
          <div className="flex items-center gap-8 text-sm">
            <Link href="/operators" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">Operators</Link>
            <Link href="/builder" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">Search Builder</Link>
            <Link href="/education" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">Learn</Link>
            <Link href="/about" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">About</Link>
            <Link 
              href="https://github.com/dorkatlas/dorkatlas" 
              target="_blank"
              className="px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-xs font-medium transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border text-sm mb-6 bg-white dark:bg-zinc-900">
          <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" /> 
          Open Source • Educational • Privacy-First
        </div>
        
        <h1 className="text-7xl font-semibold tracking-tighter leading-none mb-4">
          The definitive<br />Google search<br />operator library.
        </h1>
        
        <p className="max-w-lg mx-auto text-xl text-zinc-600 dark:text-zinc-400 mt-6">
          Discover legitimate search operators and ethical OSINT techniques. 
          Built for researchers, developers, journalists, and students.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link 
            href="/builder" 
            className="btn btn-primary px-8 h-12 text-base flex items-center gap-2 group"
          >
            Open Search Builder
            <ArrowRight className="group-hover:translate-x-0.5 transition" />
          </Link>
          <Link 
            href="/operators" 
            className="btn btn-secondary px-8 h-12 text-base"
          >
            Browse Operators
          </Link>
        </div>

        <div className="mt-8 text-xs text-zinc-500 flex items-center justify-center gap-6">
          <div>MIT Licensed</div>
          <div>WCAG Accessible</div>
          <div>Privacy by Design</div>
        </div>
      </div>

      {/* Trust & Mission Bar */}
      <div className="border-y bg-white dark:bg-zinc-900 py-4">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-3 text-sm text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-2"><Shield className="h-4 w-4" /> OWASP Top 10 Compliant</div>
          <div className="flex items-center gap-2"><BookOpen className="h-4 w-4" /> Educational Focus</div>
          <div className="flex items-center gap-2"><Users className="h-4 w-4" /> 15 Professions Supported</div>
          <div className="flex items-center gap-2"><Award className="h-4 w-4" /> Ethical OSINT Only</div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-sm uppercase tracking-[3px] text-zinc-500 mb-3">Everything you need</div>
          <h2 className="text-4xl font-semibold tracking-tight">Powerful tools for ethical research</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Operator Library",
              desc: "Comprehensive explanations, examples, and use cases for 15+ Google search operators.",
              href: "/operators"
            },
            {
              title: "Visual Search Builder",
              desc: "Build complex queries step-by-step with profession and intent filters.",
              href: "/builder"
            },
            {
              title: "Profession Filters",
              desc: "Tailored workflows for developers, journalists, researchers, marketers & more.",
              href: "/operators"
            },
            {
              title: "Educational Resources",
              desc: "Learn search best practices, privacy awareness, and responsible OSINT.",
              href: "/education"
            }
          ].map((feature, i) => (
            <Link 
              href={feature.href} 
              key={i}
              className="group p-6 rounded-3xl border bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col"
            >
              <div className="font-medium text-xl mb-3 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{feature.title}</div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 flex-1">{feature.desc}</p>
              <div className="mt-4 text-xs flex items-center text-zinc-500 group-hover:text-zinc-700 transition-colors">
                Explore <ArrowRight className="ml-1.5 h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Professions Supported */}
      <div className="bg-white dark:bg-zinc-900 border-y">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <div className="text-sm font-medium tracking-widest text-zinc-500">FOR EVERY RESEARCHER</div>
            <h3 className="text-3xl font-semibold tracking-tight mt-3">Supported Professions</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
            {[
              "Developers", "Designers", "Journalists", "Marketers", "SEO Specialists", "Recruiters",
              "Students", "Startup Founders", "Writers", "Researchers", "Historians", "Data Analysts"
            ].map((prof, idx) => (
              <div key={idx} className="px-5 py-3.5 border rounded-2xl flex items-center justify-center hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-center">
                {prof}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values & Principles */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h3 className="font-semibold tracking-tight text-3xl mb-4">Our principles</h3>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
          DorkAtlas is built with a strong commitment to ethical research, privacy, and digital literacy.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 text-left">
          {[
            { title: "Privacy First", desc: "No searches are stored. No personal data collected. Minimal cookies." },
            { title: "Ethical OSINT", desc: "Designed exclusively for legitimate public information research." },
            { title: "Open Source", desc: "MIT licensed. Fully transparent. Community-driven development." }
          ].map((value, index) => (
            <div key={index} className="border-l-2 border-zinc-200 pl-6 dark:border-zinc-800">
              <div className="font-medium">{value.title}</div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-zinc-950 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-12 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-6 w-6 bg-zinc-950 dark:bg-white rounded flex items-center justify-center">
                <Search className="h-3.5 w-3.5 text-white dark:text-zinc-950" />
              </div>
              <span className="font-semibold">DorkAtlas</span>
            </div>
            <div className="text-xs text-zinc-500">The open source Google search operators library.</div>
          </div>
          
          <div>
            <div className="font-medium mb-3">Platform</div>
            <div className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <div><Link href="/operators">Operators Library</Link></div>
              <div><Link href="/builder">Search Builder</Link></div>
              <div><Link href="/education">Education Hub</Link></div>
            </div>
          </div>
          
          <div>
            <div className="font-medium mb-3">Resources</div>
            <div className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <div><Link href="/about">About &amp; Mission</Link></div>
              <div><a href="https://github.com" target="_blank">GitHub Repository</a></div>
              <div><Link href="/about#contribute">Contribute</Link></div>
            </div>
          </div>
          
          <div className="text-xs text-zinc-500">
            Not affiliated with Google LLC.<br />
            Educational use only.<br /><br />
            © {new Date().getFullYear()} DorkAtlas
          </div>
        </div>
      </footer>
    </div>
  );
}
