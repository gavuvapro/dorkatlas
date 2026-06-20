# DorkAtlas

> The world's most comprehensive, beginner-friendly, open-source repository of Google search operators and ethical OSINT research workflows.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)

DorkAtlas is an educational platform that helps developers, researchers, journalists, students, and professionals discover legitimate Google search operators and responsible research techniques.

**Important**: This platform is designed exclusively for education and public-information research. It promotes ethical OSINT, privacy awareness, and digital literacy.

---

## ✨ Features

- **Comprehensive Operator Library** — 15+ operators with detailed explanations, examples, and use cases
- **Visual Search Builder** — Build complex queries using profession, intent, and category filters
- **Profession Filters** — Tailored workflows for 12+ professions
- **Safety Engine** — Built-in validation prevents prohibited or harmful queries
- **Educational Hub** — Learn search best practices and responsible OSINT
- **Fully Accessible** — WCAG compliant, keyboard navigation, screen reader support

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
git clone https://github.com/dorkatlas/dorkatlas.git
cd dorkatlas
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
dorkatlas/
├── app/                    # Next.js App Router
│   ├── operators/          # Operator library
│   ├── builder/            # Visual search builder
│   ├── education/          # Educational resources
│   ├── about/              # About & legal pages
│   └── components/         # Shared UI components
├── data/                   # JSON data files
│   ├── operators.json
│   ├── professions.json
│   ├── categories.json
│   └── intents.json
├── lib/                    # TypeScript utilities
│   ├── safety.ts           # Safety & validation engine
│   └── types.ts
├── public/
└── docs/                   # Additional documentation
```

---

## 🛡️ Safety & Compliance

DorkAtlas includes a robust **Safety Engine** that validates every generated query:

- `isAllowedQuery()` — Main validation function
- Blocks credentials, PII, offensive patterns, and infrastructure enumeration
- Educational disclaimers are always visible

**Explicitly prohibited**:
- Password searches
- API keys / credentials
- Personal data discovery
- Vulnerability exploitation
- Any form of unauthorized access

---

## 📜 Legal

- **License**: MIT
- **Not affiliated with Google LLC**
- Full legal documents available at `/terms`, `/privacy`, `/security`, `/disclaimer`

---

## 🤝 Contributing

We welcome contributions! Please read [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before submitting a PR.

---

## 🌍 Deployment

Deploy easily to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dorkatlas/dorkatlas)

---

## 📄 License

MIT © DorkAtlas Contributors

---

**Built with ❤️ for ethical researchers everywhere.**