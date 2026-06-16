import React, { useState } from "react";
import { Sparkles, Calendar, Clock, Check, Zap, AlertCircle } from "lucide-react";
import { PRICING_PLANS } from "../data";

interface PricingSectionProps {
  onPlanSelect: (planId: string, budgetIdStr: string) => void;
}

export default function PricingSection({ onPlanSelect }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="relative py-28 bg-transparent overflow-hidden border-t border-white/5">
      {/* Background spotlights */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-purple-500/5 blur-[140px] rounded-full pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 font-mono text-[10px] uppercase text-blue-300 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            INVESTMENT TIERS
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Transparent Pricing. Absolute Value<span className="text-blue-500">.</span>
          </h2>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Choose a development pipeline that fits your operational roadmap. All client tiers receive custom hand-coded codebases, direct developer links, sandboxed testing environments, and search optimization.
          </p>

          {/* Interactive Toggle Switch */}
          <div className="inline-flex items-center gap-3 mt-10 p-1 rounded-xl bg-white/5 border border-white/10">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-lg text-xs font-medium uppercase tracking-widest transition-all cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-blue-600 text-white font-bold shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-5 py-2 rounded-lg text-xs font-medium uppercase tracking-widest transition-all relative cursor-pointer ${
                billingCycle === "yearly"
                  ? "bg-blue-600 text-white font-bold shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Annually (Save 20%)
              {/* Floating savings tag */}
              <span className="absolute -top-7 -right-3 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[#10b981] text-[8px] font-mono tracking-widest uppercase font-bold animate-pulse">
                -20% OFF
              </span>
            </button>
          </div>

        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isGrowth = plan.id === "growth";
            
            // Recalculate price
            const calculatedPrice = billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly;
            
            // Map budget tags string to trigger inside Contact section
            const budgetStr = plan.id === "starter" ? "budget-starter" : plan.id === "growth" ? "budget-growth" : "budget-enterprise";

            return (
              <div
                key={plan.id}
                className={`group relative rounded-2xl flex flex-col justify-between transition-all duration-300 p-8 ${
                  isGrowth
                    ? "bg-[#0b0b0bed] border-2 border-blue-500/40 shadow-[0_20px_50px_rgba(59,130,246,0.15)] ring-1 ring-blue-500/10 -translate-y-2 lg:-translate-y-4"
                    : "bg-agency-card border border-white/5 hover:border-white/15 shadow-xl"
                }`}
              >
                {/* Floating Best Choice badge if Growth */}
                {isGrowth && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-blue-600 text-white font-mono text-[9px] tracking-widest uppercase font-black shadow-lg">
                    {plan.badge}
                  </span>
                )}

                <div>
                  
                  {/* Package Meta Header */}
                  <div className="pb-6 mb-6 border-b border-white/5">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#3b82f6] font-bold block mb-1">
                      {plan.name}
                    </span>
                    
                    {/* Dynamic Pricing Rate Display */}
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-4xl font-display font-black text-white tracking-tight">
                        ${calculatedPrice.toLocaleString()}
                      </span>
                      <span className="text-xs text-gray-500 font-mono">
                        / {plan.period}
                      </span>
                    </div>

                    <p className="text-gray-400 text-xs mt-3 leading-relaxed font-light">
                      {plan.description}
                    </p>
                  </div>

                  {/* Delivery Timeline segment */}
                  <div className="flex items-center gap-2 mb-6 p-2 rounded-lg bg-white/[0.02] border border-white/5 text-[10px] font-mono">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-gray-400 lowercase">{plan.timeline}</span>
                  </div>

                  {/* Features Bullet List Section */}
                  <div className="space-y-4 mb-8">
                    <span className="block font-mono text-[9px] text-gray-500 uppercase tracking-wider font-semibold">DELIVERABLES INCLUDED:</span>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, index) => (
                        <li key={index} className="flex items-start gap-2 text-[11px] text-gray-300 font-light leading-snug">
                          <Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Direct Plan CTA selection */}
                <button
                  onClick={() => onPlanSelect(plan.id, budgetStr)}
                  className={`w-full py-4 text-center rounded-xl font-display font-semibold text-xs tracking-wider uppercase transition-all cursor-pointer ${
                    isGrowth
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-[0_4px_20px_rgba(59,130,246,0.5)] text-white hover:scale-[1.01]"
                      : "bg-[#0f0f0f] border border-white/10 hover:bg-white hover:text-black text-gray-300"
                  }`}
                >
                  {plan.actionText}
                </button>

              </div>
            );
          })}
        </div>

        {/* Guarantees Tag notice */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 max-w-xl mx-auto p-4 rounded-xl border border-white/5 bg-white/[0.01]">
          <AlertCircle className="w-4 h-4 text-blue-400" />
          <p className="text-[10px] sm:text-xs text-gray-400 font-mono">
            Every transaction is protected by signed SLAs, private staging links, and direct consulting lines.
          </p>
        </div>

      </div>
    </section>
  );
}
