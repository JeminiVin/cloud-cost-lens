import { notFound } from "next/navigation";
import { Metadata } from "next";

// Highly detailed comparison data repository
const COMPARISON_DATA: Record<string, {
  title: string;
  headline: string;
  pros1: string[];
  pros2: string[];
  verdict: string;
}> = {
  "aws-vs-vercel": {
    title: "AWS vs Vercel | Cloud Architecture Comparison",
    headline: "AWS offers ultimate infrastructure control, while Vercel provides seamless frontend velocity.",
    pros1: ["Infinite scalability control", "Lower raw compute cost", "Extensive database options"],
    pros2: ["Zero-config deployment pipeline", "Global Edge CDN integration", "Perfect Next.js synergy"],
    verdict: "Choose AWS if you have dedicated DevOps engineers. Choose Vercel if you want to ship features rapidly without managing raw Linux servers."
  },
  "supabase-vs-firebase": {
    title: "Supabase vs Firebase | Modern Backend Comparison",
    headline: "Supabase delivers relational SQL robustness, whereas Firebase centers around NoSQL rapid scaling.",
    pros1: ["Open-source Postgres engine", "SQL and relation support", "Instant real-time subscriptions"],
    pros2: ["Extensive ecosystem tooling", "Document-store flexibility", "Offline local cache synchronization"],
    verdict: "Opt for Supabase if data structure relations are complex. Select Firebase for schemaless application mockups."
  }
};

type Props = {
  params: Promise<{ slug: string }>
}

// 🚀 Dynamic Metadata Generation API (Crucial for Google Rich Snippets)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const data = COMPARISON_DATA[slug];
  
  if (!data) return { title: "Comparison Not Found" };
  
  return {
    title: data.title,
    description: data.headline,
    alternates: { canonical: `/compare/${slug}` }
  };
}

export default async function ComparePage({ params }: Props) {
  const slug = (await params).slug;
  const data = COMPARISON_DATA[slug];

  // Agar user galat URL type kare toh 404 trigger hoga
  if (!data) notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <header className="mb-12 border-b border-slate-800 pb-8">
        <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase">Deep Dive Analysis</span>
        <h1 className="text-3xl md:text-5xl font-black text-slate-100 mt-2 leading-tight">
          {data.title.split("|")[0]}
        </h1>
        <p className="text-lg text-slate-400 mt-4 font-light">
          {data.headline}
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <section className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
          <h2 className="text-xl font-bold text-blue-400 mb-4">Provider A Benefits</h2>
          <ul className="space-y-3 text-slate-300 text-sm">
            {data.pros1.map((pro, index) => <li key={index}>⚡ {pro}</li>)}
          </ul>
        </section>

        <section className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
          <h2 className="text-xl font-bold text-emerald-400 mb-4">Provider B Benefits</h2>
          <ul className="space-y-3 text-slate-300 text-sm">
            {data.pros2.map((pro, index) => <li key={index}>✨ {pro}</li>)}
          </ul>
        </section>
      </div>

      <section className="bg-gradient-to-r from-blue-950/40 to-slate-900 border border-blue-900/30 p-8 rounded-2xl">
        <h3 className="text-lg font-bold text-slate-200 mb-2">Architectural Verdict</h3>
        <p className="text-sm text-slate-400 leading-relaxed">{data.verdict}</p>
      </section>
    </main>
  );
}