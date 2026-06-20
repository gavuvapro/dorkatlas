import Link from 'next/link';

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/about" className="text-xs text-zinc-500">← Back to About</Link>
      <h1 className="text-5xl font-semibold tracking-tighter mt-4">Disclaimer</h1>

      <div className="prose prose-sm dark:prose-invert mt-8 max-w-none">
        <p>DorkAtlas is provided strictly for educational and research purposes. The operators, examples, and search builder are intended to demonstrate legitimate techniques for finding publicly available information.</p>

        <p><strong>No guarantee is made regarding the accuracy, completeness, or currency of any search results.</strong></p>

        <p>Users are solely responsible for:</p>
        <ul>
          <li>Complying with the laws of their jurisdiction</li>
          <li>Respecting the terms of service of Google and other websites</li>
          <li>Protecting the privacy rights of individuals</li>
        </ul>

        <p>The developers and contributors of DorkAtlas accept no liability for any misuse of this platform.</p>

        <p className="mt-8 text-xs">This project is not affiliated with Google LLC.</p>
      </div>
    </div>
  );
}
