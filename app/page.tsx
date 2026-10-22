"use client";

import { useState } from "react";
// 1. Next.js Link component ko import kiya
import Link from "next/link"; 

const CLOUD_PRICING = {
  aws: { name: "AWS (EC2 + RDS)", base: 29, variableRate: 0.005 },
  vercel: { name: "Vercel Enterprise", base: 20, variableRate: 0.002 },
  supabase: { name: "Supabase Pro", base: 25, variableRate: 0.001 }
};

export default function Home() {
  const [traffic, setTraffic] = useState<number>(5000);
  const [databaseUsage, setDatabaseUsage] = useState<number>(10);

  const calculateCost = (provider: keyof typeof CLOUD_PRICING) => {
    const config = CLOUD_PRICING[provider];
    const total = config.base + (traffic * config.variableRate) + (databaseUsage * 0.5);
    return total.toFixed(2);
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
          CloudCost-Lens
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Calculate and optimize architectural expenses across major providers instantly.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        <section className="md:col-span-1 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h2 className="text-xl font-bold mb-6 text-slate-200">Scale Architecture</h2>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-400 mb-2">
              Monthly Active Users: <span className="text-emerald-400 font-bold">{traffic.toLocaleString()}</span>
            </label>
            <input 
              type="range" min="1000" max="100000" step="5000" value={traffic}
              onChange={(e) => setTraffic(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-400 mb-2">
              Database Storage: <span className="text-blue-400 font-bold">{databaseUsage} GB</span>
            </label>
            <input 
              type="range" min="1" max="500" step="10" value={databaseUsage}
              onChange={(e) => setDatabaseUsage(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>
        </section>

        <section className="md:col-span-2 grid gap-4">
          {(Object.keys(CLOUD_PRICING) as Array<keyof typeof CLOUD_PRICING>).map((key) => (
            <div key={key} className="bg-slate-900/50 border border-slate-800/80 p-6 rounded-2xl flex justify-between items-center hover:border-slate-700 transition-all">
              <div>
                <h3 className="text-lg font-bold text-slate-100">{CLOUD_PRICING[key].name}</h3>
                <p className="text-xs text-slate-500 mt-1">Includes base capacity configuration + bandwidth scale factors</p>
              </div>
              <div className="text-right">
                <span className="text-2xl md:text-3xl font-black text-emerald-400">${calculateCost(key)}</span>
                <span className="text-xs text-slate-500 block">/ month estimated</span>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* 2. Naya Section: Google Spiders aur Users ke liye Internal Links Navigation */}
       <section className="mt-16 border-t border-slate-900 pt-10">
        <h3 className="text-xl font-bold text-slate-300 mb-4">Deep Dive Cloud Comparisons</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link 
            href="/compare/aws-vs-vercel" 
            className="block p-5 bg-slate-900/30 border border-slate-850 rounded-xl hover:border-blue-500/50 transition-all group"
          >
            <h4 className="font-bold text-slate-200 group-hover:text-blue-400 transition-colors">
              AWS vs Vercel Analysis 
            </h4>
            <p className="text-xs text-slate-500 mt-1">Infrastructure raw control vs frontend velocity optimization model.</p>
          </Link>

          <Link 
            href="/compare/supabase-vs-firebase" 
            className="block p-5 bg-slate-900/30 border border-slate-850 rounded-xl hover:border-emerald-500/50 transition-all group"
          >
            <h4 className="font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">
              Supabase vs firebase Analysis
            </h4>
            <p className="text-xs text-slate-500 mt-1">Relational SQL engine architecture vs document schemaless scaling tools.</p>
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "CloudCost-Lens",
            "operatingSystem": "All",
            "applicationCategory": "BusinessApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />
    </main>
  );
}