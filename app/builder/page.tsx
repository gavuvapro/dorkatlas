"use client";

import React, { useState, useMemo } from 'react';
import { ArrowRight, Copy, RefreshCw, ShieldCheck, Users, Target, Book } from 'lucide-react';
import operatorsData from '../../data/operators.json';
import professionsData from '../../data/professions.json';
import categoriesData from '../../data/categories.json';
import intentsData from '../../data/intents.json';
import { Operator } from '../lib/types';
import { isAllowedQuery, SAFETY_DISCLAIMER } from '../lib/safety';
import { toast } from 'sonner';
import Link from 'next/link';

export default function SearchBuilder() {
  const [selectedProfession, setSelectedProfession] = useState('');
  const [selectedIntent, setSelectedIntent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedOperators, setSelectedOperators] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);

  const operators: Operator[] = operatorsData as Operator[];

  // Filtered operators based on selections
  const filteredOperators = useMemo(() => {
    return operators.filter(op => {
      let matches = true;

      if (selectedProfession) {
        matches = matches && op.professionTags.includes(selectedProfession);
      }
      if (selectedIntent) {
        matches = matches && op.intentTags.includes(selectedIntent);
      }
      if (selectedCategory) {
        matches = matches && op.category === selectedCategory;
      }

      return matches;
    });
  }, [selectedProfession, selectedIntent, selectedCategory, operators]);

  // Build the final search query
  const finalQuery = useMemo(() => {
    let queryParts: string[] = [];

    // Add selected operators
    selectedOperators.forEach(opId => {
      const op = operators.find(o => o.id === opId);
      if (op) {
        // For demonstration, we use the syntax as-is but user can combine
        queryParts.push(op.syntax);
      }
    });

    // Add main search term if present
    if (searchTerm.trim()) {
      queryParts.push(searchTerm.trim());
    }

    return queryParts.join(' ').trim();
  }, [selectedOperators, searchTerm, operators]);

  const isQuerySafe = useMemo(() => {
    if (!finalQuery) return { allowed: true };
    return isAllowedQuery(finalQuery);
  }, [finalQuery]);

  const toggleOperator = (opId: string) => {
    if (selectedOperators.includes(opId)) {
      setSelectedOperators(selectedOperators.filter(id => id !== opId));
    } else {
      setSelectedOperators([...selectedOperators, opId]);
    }
  };

  const copyQuery = () => {
    if (!finalQuery) {
      toast.error("Please build a query first");
      return;
    }
    
    if (!isQuerySafe.allowed) {
      toast.error("Query contains prohibited content. Please revise.");
      return;
    }

    navigator.clipboard.writeText(finalQuery);
    toast.success("Query copied to clipboard!", {
      description: "Ready to paste into Google"
    });
  };

  const openInGoogle = () => {
    if (!finalQuery || !isQuerySafe.allowed) {
      toast.error("Please build a valid query first");
      return;
    }
    
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(finalQuery)}`;
    window.open(googleUrl, '_blank');
  };

  const resetBuilder = () => {
    setSelectedProfession('');
    setSelectedIntent('');
    setSelectedCategory('');
    setSelectedOperators([]);
    setSearchTerm('');
    setShowResults(false);
    toast.info("Builder has been reset");
  };

  const getSelectedOperatorObjects = () => {
    return selectedOperators
      .map(id => operators.find(o => o.id === id))
      .filter(Boolean) as Operator[];
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pb-24">
      {/* Header */}
      <div className="border-b bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-700 flex items-center gap-1 mb-1">← Back to home</Link>
              <h1 className="text-4xl font-semibold tracking-tight">Search Builder</h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-1">Build powerful, ethical Google queries visually</p>
            </div>
            <button 
              onClick={resetBuilder}
              className="btn btn-secondary flex items-center gap-2 px-4 py-2 text-sm"
            >
              <RefreshCw className="h-4 w-4" /> Reset
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8">
        {/* Safety Notice */}
        <div className="bg-emerald-50 border border-emerald-200 dark:bg-emerald-950 dark:border-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-3xl p-5 mb-8 flex gap-3 text-sm">
          <ShieldCheck className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold">Safety Engine Active:</span> All queries are validated against prohibited patterns. 
            Only educational, public-information queries are permitted. {SAFETY_DISCLAIMER.split('.')[0]}.
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-zinc-900 border rounded-3xl p-7">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-4 w-4" /> 
                <div className="font-medium">1. Choose Profession</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {professionsData.map((prof: any) => (
                  <button
                    key={prof.id}
                    onClick={() => setSelectedProfession(selectedProfession === prof.name ? '' : prof.name)}
                    className={`px-4 py-3 text-sm text-left rounded-2xl border transition-all flex flex-col justify-center ${selectedProfession === prof.name 
                      ? 'border-zinc-950 bg-zinc-950 text-white dark:border-white dark:bg-white dark:text-zinc-950' 
                      : 'hover:bg-zinc-50 dark:hover:bg-zinc-800'}`}
                  >
                    {prof.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 border rounded-3xl p-7">
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-4 w-4" /> 
                <div className="font-medium">2. Choose Intent</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {intentsData.map((intent: any) => (
                  <button
                    key={intent.id}
                    onClick={() => setSelectedIntent(selectedIntent === intent.name ? '' : intent.name)}
                    className={`px-5 py-1.5 text-xs rounded-full border transition-all ${selectedIntent === intent.name 
                      ? 'bg-zinc-950 text-white border-zinc-950 dark:bg-white dark:text-zinc-950' 
                      : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'}`}
                  >
                    {intent.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 border rounded-3xl p-7">
              <div className="flex items-center gap-3 mb-6">
                <Book className="h-4 w-4" /> 
                <div className="font-medium">3. Choose Category</div>
              </div>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full border rounded-2xl px-4 py-3 text-sm bg-white dark:bg-zinc-950"
              >
                <option value="">Any category</option>
                {categoriesData.map((cat: any) => (
                  <option key={cat.id} value={cat.name}>{cat.name}</option>
                ))}
              </select>
            </div>

            {/* Search Term Input */}
            <div className="bg-white dark:bg-zinc-900 border rounded-3xl p-7">
              <div className="font-medium mb-3">4. Main Search Term (Optional)</div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="e.g. machine learning ethics"
                className="w-full px-5 py-3 border rounded-2xl text-sm focus:outline-none focus:border-zinc-400 bg-white dark:bg-zinc-950"
              />
              <p className="text-[10px] text-zinc-500 mt-2">Add keywords to combine with operators</p>
            </div>
          </div>

          {/* Operators Selection */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-zinc-900 border rounded-3xl p-7">
              <div className="flex justify-between items-center mb-5">
                <div>
                  <div className="font-medium">5. Select Operators</div>
                  <div className="text-xs text-zinc-500 mt-0.5">Click to add to your query</div>
                </div>
                <div className="text-xs text-zinc-500">{filteredOperators.length} available</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[380px] overflow-auto pr-1">
                {filteredOperators.length > 0 ? (
                  filteredOperators.map((op) => {
                    const isSelected = selectedOperators.includes(op.id);
                    return (
                      <div 
                        key={op.id}
                        onClick={() => toggleOperator(op.id)}
                        className={`p-4 border rounded-2xl cursor-pointer transition-all flex items-start gap-3 ${isSelected 
                          ? 'border-zinc-950 bg-zinc-950/5 dark:border-white dark:bg-white/5' 
                          : 'hover:border-zinc-300 dark:hover:border-zinc-700'}`}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="font-mono text-sm font-medium tracking-tight">{op.name}</div>
                          <div className="text-xs text-zinc-500 line-clamp-2 mt-1">{op.description}</div>
                        </div>
                        <div className={`mt-1 w-4 h-4 flex-shrink-0 rounded border flex items-center justify-center text-[9px] ${isSelected ? 'bg-zinc-950 text-white border-zinc-950 dark:bg-white dark:text-zinc-950' : ''}`}>
                          {isSelected && '✓'}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="col-span-2 text-center py-8 text-sm text-zinc-400">
                    No operators match your filters. Try broadening your selections.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Query Preview Section */}
        <div className="mt-8 bg-white dark:bg-zinc-900 border rounded-3xl p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="font-medium text-xl tracking-tight">6. Preview Your Search Query</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Ready to use on Google</div>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={copyQuery} 
                disabled={!finalQuery || !isQuerySafe.allowed}
                className="btn btn-secondary px-5 py-2 flex items-center gap-2 text-sm disabled:opacity-40"
              >
                <Copy className="h-4 w-4" /> Copy Query
              </button>
              <button 
                onClick={openInGoogle} 
                disabled={!finalQuery || !isQuerySafe.allowed}
                className="btn btn-primary px-6 py-2 flex items-center gap-2 text-sm disabled:opacity-40"
              >
                Open in Google <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Query Preview */}
          <div className="query-preview border rounded-2xl p-7 text-sm font-mono bg-zinc-950 text-white dark:bg-zinc-900 min-h-[86px] flex items-center">
            {finalQuery ? (
              <div className="break-all leading-relaxed tracking-[-0.3px]">{finalQuery}</div>
            ) : (
              <div className="text-zinc-500">Select operators and filters above to build your query...</div>
            )}
          </div>

          {/* Validation Status */}
          {finalQuery && (
            <div className={`mt-4 flex items-center gap-3 text-xs px-4 py-3 rounded-2xl border ${isQuerySafe.allowed 
              ? "bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-950 dark:border-emerald-900 dark:text-emerald-400" 
              : "bg-red-50 border-red-200 text-red-700 dark:bg-red-950 dark:border-red-900 dark:text-red-400"}`}>
              <div>{isQuerySafe.allowed ? "✓ Valid & Safe" : "✕ " + isQuerySafe.reason}</div>
              {!isQuerySafe.allowed && (
                <div className="text-[10px] flex-1 text-right">Please adjust your query to comply with our educational guidelines.</div>
              )}
            </div>
          )}

          {/* Selected Operators Summary */}
          {selectedOperators.length > 0 && (
            <div className="mt-6 pt-6 border-t">
              <div className="text-xs text-zinc-500 mb-3">SELECTED OPERATORS</div>
              <div className="flex flex-wrap gap-2">
                {getSelectedOperatorObjects().map(op => (
                  <div key={op.id} className="inline-flex items-center gap-2 text-xs px-3 py-1.5 border rounded-full">
                    {op.name}
                    <button onClick={() => toggleOperator(op.id)} className="text-red-500 hover:text-red-600">×</button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quick Tips */}
        <div className="mt-6 text-xs px-1 text-zinc-500">
          <span className="font-medium">Pro tip:</span> Combine operators like <span className="font-mono">site:github.com filetype:pdf</span> for powerful results. 
          Always respect privacy and applicable laws.
        </div>
      </div>
    </div>
  );
}
