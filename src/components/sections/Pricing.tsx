import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, Crown, ArrowRight } from "lucide-react";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";

type Billing = "monthly" | "quarterly" | "annual";

type Plan = {
  key: string;
  name: string;
  bestFor: string;
  featured?: boolean; // true = recommended (blue outline)
  cta: { label: string; href: string };
  pricing: Record<
    Billing,
    { display: string; subLabel: string; effectiveMonthly?: string | null }
  >;
  savings: Record<Billing, { badgeAmount?: string } | null>;
  features: string[];
};

const formatNaira = (n: number) =>
  `₦${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");

  const plans: Plan[] = useMemo(() => {
    // Starter (Free)
    const starter: Plan = {
      key: "starter",
      name: "Starter",
      bestFor: "Solo sellers, new businesses",
      featured: false,
      cta: { label: "Start free", href: "/signup" },
      pricing: {
        monthly: { display: formatNaira(0), subLabel: "Free plan" },
        quarterly: { display: formatNaira(0), subLabel: "Free plan" },
        annual: { display: formatNaira(0), subLabel: "Free plan" },
      },
      savings: { monthly: null, quarterly: null, annual: null },
      features: [
        "1 location",
        "1 admin account",
        "Online store + POS access",
        "Sell up to 10 products",
        "Connect to 1 external app",
        "Basic inventory tools",
        "Orders and customers list",
        "Basic 7-day activity report",
        "Email support",
      ],
    };

    // Growth
    const growthMonthly = 12_500;
    const growthQuarterTotal = 31_500;
    const growthAnnualTotal = 114_000;

    const growthQuarterSave = growthMonthly * 3 - growthQuarterTotal;
    const growthAnnualSave = growthMonthly * 12 - growthAnnualTotal;

    const growth: Plan = {
      key: "growth",
      name: "Growth",
      bestFor: "Small shops, small teams (1 to 2 locations)",
      featured: false,
      cta: { label: "Get started", href: "/signup" },
      pricing: {
        monthly: {
          display: `${formatNaira(growthMonthly)}/mo`,
          subLabel: "Billed monthly",
        },
        quarterly: {
          display: formatNaira(growthQuarterTotal),
          subLabel: "Paid upfront, billed quarterly",
          effectiveMonthly: `${formatNaira(10_500)} / month`,
        },
        annual: {
          display: formatNaira(growthAnnualTotal),
          subLabel: "Paid upfront, billed yearly",
          effectiveMonthly: `${formatNaira(9_500)} / month`,
        },
      },
      savings: {
        monthly: null,
        quarterly: { badgeAmount: formatNaira(growthQuarterSave) },
        annual: { badgeAmount: formatNaira(growthAnnualSave) },
      },
      features: [
        "Manage up to 2 locations",
        "Up to 5 team members",
        "Unlimited products",
        "Custom domain included",
        "30-day sales and performance reports",
        "More external app integrations",
      ],
    };

    // Pro (Featured)
    const proMonthly = 30_000;
    const proQuarterTotal = 81_000;
    const proAnnualTotal = 300_000;

    const proQuarterSave = proMonthly * 3 - proQuarterTotal;
    const proAnnualSave = proMonthly * 12 - proAnnualTotal;

    const pro: Plan = {
      key: "pro",
      name: "Pro",
      bestFor: "Growing brands needing deeper insights",
      featured: true,
      cta: { label: "Get started", href: "/signup" },
      pricing: {
        monthly: {
          display: `${formatNaira(proMonthly)}/mo`,
          subLabel: "Billed monthly",
        },
        quarterly: {
          display: formatNaira(proQuarterTotal),
          subLabel: "Paid upfront, billed quarterly",
          effectiveMonthly: `${formatNaira(27_000)} / month`,
        },
        annual: {
          display: formatNaira(proAnnualTotal),
          subLabel: "Paid upfront, billed yearly",
          effectiveMonthly: `${formatNaira(25_000)} / month`,
        },
      },
      savings: {
        monthly: null,
        quarterly: { badgeAmount: formatNaira(proQuarterSave) },
        annual: { badgeAmount: formatNaira(proAnnualSave) },
      },
      features: [
        "Manage up to 5 locations",
        "Up to 5 staff per location",
        "Advanced inventory tools",
        "Low stock alerts",
        "Full sales and performance reports",
        "Custom branding for online store",
        "Multiple delivery integrations",
        "Priority support",
      ],
    };

    // Enterprise
    const enterpriseMonthlyStart = 200_000;
    const entQuarterEff = 180_000;
    const entAnnualEff = 150_000;

    const entQuarterTotal = entQuarterEff * 3;
    const entAnnualTotal = entAnnualEff * 12;

    const entQuarterSave = enterpriseMonthlyStart * 3 - entQuarterTotal;
    const entAnnualSave = enterpriseMonthlyStart * 12 - entAnnualTotal;

    const enterprise: Plan = {
      key: "enterprise",
      name: "Enterprise",
      bestFor: "Large chains needing custom setups",
      featured: false,
      cta: { label: "Contact sales", href: "/contact" },
      pricing: {
        monthly: {
          display: `From ${formatNaira(enterpriseMonthlyStart)}/mo`,
          subLabel: "Starting from, billed monthly",
        },
        quarterly: {
          display: `From ${formatNaira(entQuarterTotal)}`,
          subLabel: "Paid upfront, billed quarterly",
          effectiveMonthly: `From ${formatNaira(entQuarterEff)} / month`,
        },
        annual: {
          display: `From ${formatNaira(entAnnualTotal)}`,
          subLabel: "Paid upfront, billed yearly",
          effectiveMonthly: `From ${formatNaira(entAnnualEff)} / month`,
        },
      },
      savings: {
        monthly: null,
        quarterly: { badgeAmount: `from ${formatNaira(entQuarterSave)}` },
        annual: { badgeAmount: `from ${formatNaira(entAnnualSave)}` },
      },
      features: [
        "Unlimited locations",
        "Unlimited staff accounts",
        "24/7 priority support",
        "Full API access and webhooks",
        "Custom integrations",
        "Advanced analytics and exports",
        "Dedicated account manager",
        "Custom onboarding and training",
      ],
    };

    return [starter, growth, pro, enterprise];
  }, []);

  const billingLabel: Record<Billing, string> = {
    monthly: "Monthly",
    quarterly: "Quarterly",
    annual: "Annual",
  };

  return (
    <section id="pricing" className="relative py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-sky-50" />

      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold tracking-[0.22em] text-black/45">
              PRICING
            </div>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
              Pricing that fits how you run your business
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm text-black/60 sm:text-base">
              Pick a plan, choose your billing, and get moving.
            </p>

            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              {/* Billing toggle */}
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 p-1 shadow-sm backdrop-blur">
                {(["monthly", "quarterly", "annual"] as Billing[]).map((k) => {
                  const active = billing === k;
                  return (
                    <button
                      key={k}
                      type="button"
                      onClick={() => setBilling(k)}
                      className={[
                        "rounded-full px-4 py-2 text-sm font-medium transition",
                        active
                          ? "bg-white text-black shadow-sm"
                          : "text-black/60 hover:text-black",
                      ].join(" ")}
                    >
                      {billingLabel[k]}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {plans.map((p) => {
              const price = p.pricing[billing];
              const saving = p.savings[billing]?.badgeAmount;

              return (
                <motion.div
                  key={p.key}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 420, damping: 28 }}
                  className={[
                    "relative overflow-hidden rounded-[26px] bg-white/70 backdrop-blur shadow-sm",
                    "ring-1",
                    p.featured ? "ring-sky-400/70" : "ring-black/10",
                  ].join(" ")}
                >
                  {/* subtle sheen */}
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/70 blur-3xl" />
                    <div className="absolute -right-24 -top-16 h-72 w-72 rounded-full bg-white/60 blur-3xl" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/20" />
                  </div>

                  <div className="relative flex h-full flex-col p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="text-lg font-semibold text-black">
                            {p.name}
                          </div>

                          {p.featured ? (
                            <div className="inline-flex items-center gap-1 rounded-full bg-sky-600 px-2.5 py-1 text-xs font-semibold text-white">
                              <Crown className="h-3.5 w-3.5" />
                              Recommended
                            </div>
                          ) : null}
                        </div>

                        <div className="mt-1 text-sm text-black/60">
                          {p.bestFor}
                        </div>
                      </div>

                      {saving ? (
                        <div className="shrink-0 rounded-full border border-black/10 bg-white/75 px-3 py-1 text-xs font-semibold text-black/70">
                          Save {saving}
                        </div>
                      ) : null}
                    </div>

                    <div className="mt-6">
                      <div className="text-3xl font-semibold tracking-tight text-black">
                        {price.display}
                      </div>

                      <div className="mt-1 text-sm text-black/50">
                        {price.subLabel}
                        {price.effectiveMonthly ? (
                          <span className="block text-black/45">
                            {price.effectiveMonthly}
                          </span>
                        ) : null}
                      </div>
                    </div>

                    {/* One button only */}
                    <div className="mt-6">
                      <Button
                        className="w-full py-3"
                        onClick={() => (window.location.href = p.cta.href)}
                      >
                        {p.cta.label}
                      </Button>
                    </div>

                    {/* Features */}
                    <div className="mt-7 space-y-3">
                      {p.features.slice(0, 7).map((f) => (
                        <div key={f} className="flex items-start gap-3">
                          <div className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5">
                            <Check className="h-3.5 w-3.5 text-black/80" />
                          </div>
                          <div className="text-sm text-black/65">{f}</div>
                        </div>
                      ))}
                    </div>

                    {/* keep cards same height rhythm */}
                    <div className="mt-auto pt-6" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Learn more at the end (best UX, no clutter in cards) */}
          <div className="mt-10 text-center">
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-black/70 shadow-sm transition hover:bg-white"
            >
              Learn more about pricing <ArrowRight className="h-4 w-4" />
            </a>

            <p className="mt-3 text-sm text-black/50">
              See the full breakdown, add-ons, and plan comparisons.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
