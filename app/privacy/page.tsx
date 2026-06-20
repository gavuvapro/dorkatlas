import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/about" className="text-xs text-zinc-500">← Back to About</Link>
      <h1 className="text-5xl font-semibold tracking-tighter mt-4">Privacy Policy</h1>

      <div className="prose prose-sm dark:prose-invert mt-8 max-w-none">
        <p><strong>Effective Date:</strong> June 19, 2026</p>

        <h3>Information Collection</h3>
        <p>DorkAtlas does not collect or store search queries by default. No personal information is collected, stored, or sold.</p>

        <h3>Local Data</h3>
        <p>Any favorites or collections you create are stored locally in your browser. You can delete this data at any time.</p>

        <h3>Analytics</h3>
        <p>Anonymous, privacy-preserving analytics may be used to improve the platform. We never track individual users.</p>

        <h3>Cookies</h3>
        <p>Minimal necessary cookies are used for session functionality and preferences. No third-party tracking cookies.</p>

        <h3>Your Rights</h3>
        <p>You have full control over your local data. You may request deletion of any locally stored data by clearing your browser storage.</p>

        <p className="text-xs mt-8 text-zinc-500">This platform follows GDPR-inspired privacy principles and privacy by design.</p>
      </div>
    </div>
  );
}
