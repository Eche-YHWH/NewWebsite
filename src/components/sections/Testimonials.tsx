import React from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import { Plus, Star, Zap, TrendingUp, Receipt } from "lucide-react";

type Person = {
  name: string;
  role: string;
  avatar: string;
};

const metric = {
  value: "250K+",
  suffix: "",
  title: "Workflows automated",
  body: (
    <>
      Daash helps small businesses in Nigeria sell online, track inventory, manage
      orders, and run daily operations from one dashboard. No spreadsheets. No
      stress.
    </>
  ),
  badge: "Workflows automated",
  footnote: "Used across different industries",
};

const people: Person[] = [
  {
    name: "Amaka Nwosu",
    role: "Retail Store Owner, Lagos",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=320&auto=format&fit=crop&q=60",
  },
  {
    name: "Seyi Adeyemi",
    role: "Restaurant Owner, Abuja",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320&auto=format&fit=crop&q=60",
  },
  {
    name: "Zainab Bello",
    role: "Distributor, Port Harcourt",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=320&auto=format&fit=crop&q=60",
  },
];

const quotes = [
  {
    quote:
      "I can see what sold today, what is low in stock, and what to restock. Everything is in one dashboard.",
    align: "right" as const,
    personIndex: 0,
  },
  {
    quote:
      "Once orders come in, my team knows what to do. Customers get updates, and we deliver faster.",
    align: "center" as const,
    personIndex: 1,
  },
  {
    quote:
      "Before, it was WhatsApp and guesswork. Now my sales, stock, and reports are properly tracked.",
    align: "right" as const,
    personIndex: 2,
  },
];

function RatingStars() {
  return (
    <div className="flex items-center gap-1 text-emerald-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-emerald-500" strokeWidth={1.5} />
      ))}
    </div>
  );
}

function CardShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-[28px] border border-black/10 bg-white/60 shadow-sm backdrop-blur",
        "transition hover:bg-white/70",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function PersonRow({ person }: { person: Person }) {
  return (
    <CardShell className="flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <div
          className="h-9 w-9 rounded-xl border border-black/10 bg-cover bg-center"
          style={{ backgroundImage: `url('${person.avatar}')` }}
        />
        <div>
          <p className="text-sm font-semibold tracking-tight leading-tight text-black">
            {person.name}
          </p>
          <p className="text-xs text-black/60">{person.role}</p>
        </div>
      </div>

      <span className="text-black/30">
        <Plus className="h-4 w-4" strokeWidth={1.5} />
      </span>
    </CardShell>
  );
}

function QuoteCard({
  quote,
  align,
}: {
  quote: string;
  align: "right" | "center";
}) {
  return (
    <CardShell className="flex min-h-[420px] flex-col justify-between p-6">
      <div className="flex items-center justify-between">
        <RatingStars />
        <span className="text-black/30">
          <Plus className="h-4 w-4" strokeWidth={1.5} />
        </span>
      </div>

      <p
        className={[
          "mt-6 text-2xl sm:text-3xl leading-snug font-medium tracking-tight text-black",
          align === "center" ? "text-center" : "text-right",
        ].join(" ")}
      >
        {quote}
      </p>
    </CardShell>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-24">
      <Reveal>
        <Container className="text-center">
          <p className="text-xs font-mono tracking-widest text-sky-700">
            CUSTOMER STORIES
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl text-5xl font-semibold tracking-tight text-black sm:text-7xl">
            Real results from real businesses
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-black/60 sm:text-lg">
            People use Daash to sell online, track stock, manage orders, and run
            daily operations in one place. Here is what changed for them.
          </p>
        </Container>
      </Reveal>

      <Reveal>
        <Container>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {/* Metrics card */}
            <CardShell className="flex min-h-[420px] flex-col justify-between p-6 text-left">
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-sm text-black/60">
                  <Star className="h-4 w-4" strokeWidth={1.5} />
                  <span className="font-normal">Customer Success</span>
                </div>

                <div className="flex items-end gap-2">
                  <span className="text-5xl font-semibold tracking-tight text-black sm:text-6xl">
                    {metric.value}
                  </span>
                  {metric.suffix ? (
                    <span className="text-base text-black/60">
                      {metric.suffix}
                    </span>
                  ) : null}
                </div>

                <p className="text-sm text-black/60">{metric.body}</p>

                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-white/70">
                      <Receipt
                        className="h-3 w-3 text-black/60"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-white/70">
                      <Zap className="h-3 w-3 text-black/60" strokeWidth={1.5} />
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-white/70">
                      <TrendingUp
                        className="h-3 w-3 text-black/60"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  <span className="inline-flex h-7 items-center justify-center rounded-full bg-black px-2 text-xs font-medium text-white">
                    {metric.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-black/10 bg-white/70">
                    <TrendingUp className="h-3 w-3 text-emerald-500" strokeWidth={2} />
                  </span>
                  <span className="text-xs text-black/60">{metric.footnote}</span>
                </div>
              </div>

              <div className="mt-6">
                <Button className="w-full">Start free</Button>
              </div>
            </CardShell>

            {/* Column 1 */}
            <div className="grid grid-rows-[auto_1fr] gap-4">
              <PersonRow person={people[quotes[0].personIndex]} />
              <QuoteCard quote={quotes[0].quote} align={quotes[0].align} />
            </div>

            {/* Column 2 */}
            <div className="grid grid-rows-[1fr_auto] gap-4">
              <QuoteCard quote={quotes[1].quote} align={quotes[1].align} />
              <PersonRow person={people[quotes[1].personIndex]} />
            </div>

            {/* Column 3 */}
            <div className="grid grid-rows-[auto_1fr] gap-4">
              <PersonRow person={people[quotes[2].personIndex]} />
              <QuoteCard quote={quotes[2].quote} align={quotes[2].align} />
            </div>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
