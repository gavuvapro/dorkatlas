import Link from 'next/link';

export default function SecurityPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/about" className="text-xs text-zinc-500">← Back to About</Link>
      <h1 className="text-5xl font-semibold tracking-tighter mt-4">Security Policy</h1>

      <div className="prose prose-sm dark:prose-invert mt-8 max-w-none">
        <h3>Responsible Disclosure</h3>
        <p>We welcome reports of security vulnerabilities. Please email security@dorkatlas.dev with details.</p>

        <h3>Response Timeline</h3>
        <ul>
          <li>Acknowledgement within 48 hours</li>
          <li>Initial assessment within 7 days</li>
          <li>Public disclosure coordinated with reporter</li>
        </ul>

        <h3>Supported Versions</h3>
        <p>We support the latest stable version of DorkAtlas. Security fixes will be backported when appropriate.</p>

        <h3>Scope</h3>
        <p>This policy covers the DorkAtlas web application and repository. It does not cover third-party services or user-generated content misuse.</p>

        <p className="mt-10 text-xs">Contact: <a href="mailto:security@dorkatlas.dev">security@dorkatlas.dev</a></p>
      </div>
    </div>
  );
}
