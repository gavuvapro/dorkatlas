"use client";

import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowRight, BookOpen, Users } from 'lucide-react';
import operatorsData from '../../data/operators.json';
import professionsData from '../../data/professions.json';
import categoriesData from '../../data/categories.json';
import intentsData from '../../data/intents.json';
import { Operator } from '../lib/types';
import Link from 'next/link';

export default function OperatorsLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');
  const [selectedProfession, setSelectedProfession] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedIntent, setSelectedIntent] = useState<string>('');
  const [selectedOperator, setSelectedOperator] = useState<Operator | null>(null);

  const operators: Operator[] = operatorsData as Operator[];

  const filteredOperators = useMemo(() => {
    return operators.filter(op => {
      const matchesSearch = 
        op.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        op.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        op.examples.some(ex => ex.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesDifficulty = !selectedDifficulty || op.difficulty === selectedDifficulty;
      const matchesCategory = !selectedCategory || op.category === selectedCategory;
      const matchesIntent = !selectedIntent || op.intentTags.includes(selectedIntent);
      const matchesProfession = !selectedProfession || op.professionTags.includes(selectedProfession);

      return matchesSearch && matchesDifficulty && matchesCategory && matchesIntent && matchesProfession;
    });
  }, [searchTerm, selectedDifficulty, selectedCategory, selectedIntent, selectedProfession, operators]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedDifficulty('');
    setSelectedProfession('');
    setSelectedCategory('');
    setSelectedIntent('');
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Simple toast would be better but using alert for now
    alert('Copied to clipboard!');
  };

  return (
    <div className="min-h-screen pb-20 bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <div className="border-b bg-white dark:bg-zinc-900 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-700 flex items-center gap-1 mb-1">← Back to home</Link>
              <h1 className="text-4xl font-semibold tracking-tight">Search Operator Library</h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-1">Comprehensive reference for ethical Google search operators</p>
            </div>
            <Link href="/builder" className="btn btn-primary px-6 py-2 flex items-center gap-2 text-sm">
              Open Search Builder <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8">
        {/* Filters */}
        <div className="bg-white dark:bg-zinc-900 border rounded-3xl p-6 mb-8">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <Filter className="h-4 w-4" />
              <span className="font-medium">Filters</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                {filteredOperators.length} operators
              </span>
            </div>
            <button 
              onClick={clearFilters} 
              className="text-xs hover:underline text-zinc-500"
            >
              Clear all filters
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Search */}
            <div className="relative md:col-span-2">
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search operators, examples..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border rounded-2xl bg-white dark:bg-zinc-950 text-sm focus:outline-none focus:border-zinc-400"
              />
            </div>

            {/* Difficulty */}
            <select 
              value={selectedDifficulty} 
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="border rounded-2xl px-4 py-2.5 text-sm bg-white dark:bg-zinc-950"
            >
              <option value="">All Difficulties</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            {/* Profession */}
            <select 
              value={selectedProfession} 
              onChange={(e) => setSelectedProfession(e.target.value)}
              className="border rounded-2xl px-4 py-2.5 text-sm bg-white dark:bg-zinc-950"
            >
              <option value="">All Professions</option>
              {professionsData.map((p: any) => (
                <option key={p.id} value={p.name}>{p.name}</option>
              ))}
            </select>

            {/* Category */}
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border rounded-2xl px-4 py-2.5 text-sm bg-white dark:bg-zinc-950"
            >
              <option value="">All Categories</option>
              {categoriesData.map((c: any) => (
                <option key={c.id} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>

          {/* Intent chips */}
          <div className="mt-4 flex flex-wrap gap-2">
            {intentsData.map((intent: any) => (
              <button
                key={intent.id}
                onClick={() => setSelectedIntent(selectedIntent === intent.name ? '' : intent.name)}
                className={`filter-chip px-4 py-1 text-xs rounded-full border transition-all ${selectedIntent === intent.name 
                  ? 'active bg-zinc-950 text-white border-zinc-950' 
                  : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'}`}
              >
                {intent.name}
              </button>
            ))}
          </div>
        </div>

        {/* Operators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredOperators.length > 0 ? (
            filteredOperators.map((operator) => (
              <div 
                key={operator.id}
                onClick={() => setSelectedOperator(operator)}
                className="operator-card bg-white dark:bg-zinc-900 border rounded-3xl p-6 cursor-pointer hover:border-zinc-300 dark:hover:border-zinc-700 group"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-mono text-xl font-medium tracking-tight mb-1 group-hover:text-blue-600 transition-colors">
                      {operator.name}
                    </div>
                    <div className="text-xs px-2.5 py-px inline-block rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 mb-3">
                      {operator.difficulty}
                    </div>
                  </div>
                  <div className="text-xs text-right text-zinc-500">{operator.category}</div>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-4">{operator.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {operator.professionTags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-px rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600">
                      {tag}
                    </span>
                  ))}
                  {operator.professionTags.length > 3 && (
                    <span className="text-[10px] px-2 py-px text-zinc-400">+{operator.professionTags.length - 3}</span>
                  )}
                </div>

                <div className="pt-4 border-t text-xs flex items-center justify-between text-zinc-500">
                  <span>{operator.examples.length} examples</span>
                  <span className="flex items-center gap-1 text-zinc-400 group-hover:text-zinc-600">
                    View details <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 py-20 text-center">
              <p className="text-zinc-400">No operators match your filters.</p>
              <button onClick={clearFilters} className="mt-3 text-sm underline">Clear filters</button>
            </div>
          )}
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-zinc-500 max-w-md mx-auto">
            All operators are for educational purposes and legitimate public research only. 
            Always respect privacy and applicable laws.
          </p>
        </div>
      </div>

      {/* Operator Detail Modal */}
      {selectedOperator && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setSelectedOperator(null)}>
          <div 
            className="bg-white dark:bg-zinc-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-auto border" 
            onClick={e => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between mb-6">
                <div>
                  <div className="font-mono text-3xl font-medium tracking-[-1.5px]">{selectedOperator.name}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="px-3 py-px text-xs rounded-full border">{selectedOperator.difficulty}</div>
                    <div className="px-3 py-px text-xs rounded-full border">{selectedOperator.category}</div>
                  </div>
                </div>
                <button onClick={() => setSelectedOperator(null)} className="text-zinc-400 hover:text-zinc-600">✕</button>
              </div>

              <div className="prose prose-sm dark:prose-invert">
                <p className="text-lg">{selectedOperator.description}</p>

                <div className="mt-8">
                  <div className="font-medium mb-2 text-sm tracking-wider text-zinc-500">SYNTAX</div>
                  <div className="font-mono bg-zinc-100 dark:bg-zinc-950 p-4 rounded-2xl text-sm border">
                    {selectedOperator.syntax}
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="font-medium mb-3 text-sm tracking-wider text-zinc-500">USE CASES</div>
                    <ul className="space-y-1.5 text-sm">
                      {selectedOperator.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex gap-2">• {useCase}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="font-medium mb-3 text-sm tracking-wider text-zinc-500">EXAMPLES</div>
                    <div className="space-y-2">
                      {selectedOperator.examples.map((example, idx) => (
                        <div 
                          key={idx} 
                          onClick={() => copyToClipboard(example)}
                          className="font-mono text-xs p-3 bg-zinc-950 text-white rounded-2xl cursor-pointer hover:bg-zinc-800 transition-colors flex justify-between items-center"
                        >
                          <span>{example}</span>
                          <span className="text-[10px] text-zinc-500">COPY</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <div className="flex flex-wrap gap-2 text-xs">
                    <div className="font-medium text-sm tracking-wider text-zinc-500 mb-1.5 w-full">TAGS</div>
                    {selectedOperator.professionTags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full border text-zinc-600 dark:text-zinc-400">{tag}</span>
                    ))}
                    {selectedOperator.intentTags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t p-6 flex items-center justify-between bg-zinc-50 dark:bg-zinc-950 rounded-b-3xl">
              <div className="text-xs text-zinc-500">Educational use only • Respect privacy</div>
              <button 
                onClick={() => {
                  const query = selectedOperator.examples[0] || selectedOperator.syntax;
                  window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
                }}
                className="btn btn-secondary px-5 text-sm py-2 flex items-center gap-2"
              >
                Try on Google <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
