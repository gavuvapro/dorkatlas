import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/about" className="text-xs text-zinc-500">← Back to About</Link>
      <h1 className="text-5xl font-semibold tracking-tighter mt-4">Terms of Use</h1>

      <div className="prose prose-sm dark:prose-invert mt-8 max-w-none">
        <p><strong>Last updated:</strong> June 2026</p>

        <h3>1. Educational Purpose Only</h3>
        <p>DorkAtlas is an educational platform designed to teach legitimate Google search operators and ethical research techniques. It is intended solely for educational, research, and informational purposes.</p>

        <h3>2. User Responsibilities</h3>
        <p>Users are solely responsible for their actions when using the platform. You agree to:</p>
        <ul>
          <li>Only use the generated queries for legitimate public information research</li>
          <li>Comply with all applicable laws and regulations</li>
          <li>Respect the privacy and rights of individuals and organizations</li>
          <li>Not attempt to access or misuse private information</li>
        </ul>

        <h3>3. Prohibited Uses</h3>
        <p>You may not use DorkAtlas to:</p>
        <ul>
          <li>Search for credentials, passwords, or private access tokens</li>
          <li>Attempt to access private databases or systems</li>
          <li>Conduct unauthorized surveillance or doxxing</li>
          <li>Violate any third-party terms of service</li>
          <li>Engage in any illegal or unethical activities</li>
        </ul>

        <h3>4. No Warranty &amp; Limitation of Liability</h3>
        <p>The platform is provided "as is" without any warranties. DorkAtlas and its contributors shall not be liable for any misuse or damages arising from use of this platform.</p>

        <h3>5. Acceptance</h3>
        <p>By using DorkAtlas, you acknowledge that you have read, understood, and agree to these Terms of Use.</p>
      </div>
    </div>
  );
}
