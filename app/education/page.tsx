"use client";

import React from 'react';
import Link from 'next/link';
import { BookOpen, Shield, Users, Award, ArrowRight } from 'lucide-react';

export default function EducationHub() {
  const sections = [
    {
      icon: BookOpen,
      title: "What are Google Search Operators?",
      content: "Google search operators are special commands you add to your search query to refine results. They help you find more precise and targeted information from the vast web. Think of them as advanced filters that dramatically improve search quality.",
      example: "site:github.com typescript"
    },
    {
      icon: Shield,
      title: "Privacy Awareness & Best Practices",
      content: "Always remember: The information you find is public, but you must respect privacy rights. Never use operators to locate private data, personal contact details, or attempt to access restricted resources. Practice ethical research.",
      example: "Be mindful of what you search for and how you use the results."
    },
    {
      icon: Users,
      title: "Responsible OSINT Practices",
      content: "Open Source Intelligence (OSINT) is a legitimate and powerful research skill. When used responsibly, it empowers journalists, researchers, students, and professionals to gather accurate public information ethically.",
      example: "Focus on public records, official sources, and academic publications."
    },
    {
      icon: Award,
      title: "How Researchers Work",
      content: "Professional researchers use operators strategically. They combine multiple operators, refine queries iteratively, and always cross-verify findings from multiple sources. DorkAtlas teaches this process through its visual builder.",
      example: "Start broad, narrow with operators, validate results."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pb-20">
      <div className="border-b bg-white dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto px-6 py-9">
          <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-700 flex items-center gap-1 mb-1">← Back to home</Link>
          <h1 className="text-5xl font-semibold tracking-tighter">Education Hub</h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mt-2">Learn how to become a better, more ethical online researcher</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-12">
        <div className="max-w-2xl">
          <div className="prose prose-zinc dark:prose-invert">
            <p className="text-lg">DorkAtlas is more than a tool — it's an educational platform designed to teach responsible use of search technology.</p>
          </div>
        </div>

        {/* Core Learning Sections */}
        <div className="mt-14 space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="bg-white dark:bg-zinc-900 border rounded-3xl p-9">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-950">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-2xl tracking-tight">{section.title}</h3>
                    <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">{section.content}</p>
                    
                    <div className="mt-5 bg-zinc-950 text-white p-4 rounded-2xl font-mono text-sm tracking-tight">
                      {section.example}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Search Best Practices */}
        <div className="mt-12 bg-white dark:bg-zinc-900 border rounded-3xl p-9">
          <h3 className="font-semibold text-xl tracking-tight mb-6">Search Best Practices</h3>
          
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 text-sm">
            {[
              ["Start broad, then refine", "Begin with simple keywords and gradually add operators."],
              ["Use multiple operators", "Combine site:, filetype:, and date operators for precision."],
              ["Validate your results", "Always cross-check information from multiple sources."],
              ["Document your process", "Keep track of your queries for reproducibility."],
              ["Respect rate limits", "Be a good citizen of the web — don't abuse search engines."],
              ["Prioritize primary sources", "Official reports, academic papers, and government data are best."]
            ].map(([title, desc], idx) => (
              <div key={idx}>
                <div className="font-medium mb-1">{title}</div>
                <div className="text-zinc-600 dark:text-zinc-400 text-sm">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center border rounded-3xl p-10 bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
          <div className="font-semibold tracking-tight text-3xl">Ready to practice?</div>
          <p className="mt-2 text-zinc-400 dark:text-zinc-600">Use our interactive Search Builder to experiment with real operators.</p>
          <Link href="/builder" className="mt-6 inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-zinc-950 dark:bg-zinc-950 dark:text-white font-medium text-sm">
            Launch Search Builder <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
