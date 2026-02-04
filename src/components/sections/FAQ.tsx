import { useMemo, useState } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { Plus, Minus, HelpCircle } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const faqs = useMemo<FAQItem[]>(
    () => [
      {
        question: "What is Daash?",
        answer:
          "Daash is an online store, inventory management, and POS system that helps businesses sell online and track offline sales from one dashboard.",
      },
      {
        question: "What businesses can use Daash?",
        answer:
          "Daash works for grocery shops, retail stores, restaurants, pharmacies, salons, fashion brands, distributors, and small business owners who want to track sales and stock properly.",
      },
      {
        question: "Can I sell online with Daash?",
        answer:
          "Yes. Daash lets you create your own online store, add products, set prices, and receive customer orders through your store link.",
      },
      {
        question: "Does Daash support inventory management?",
        answer:
          "Yes. Daash helps you track inventory, monitor stock levels, identify fast-moving items, and know when to restock.",
      },
      {
        question: "Can I record offline sales too?",
        answer:
          "Yes. Daash includes a POS system so you can record walk-in sales and track offline transactions properly.",
      },
      {
        question: "Can Daash replace WhatsApp orders?",
        answer:
          "Yes. Instead of orders getting lost in chats, Daash helps you receive and manage orders in one clear place, so your team works faster and customers get better service.",
      },
      {
        question: "How does Daash help me track my daily sales?",
        answer:
          "Daash shows your daily sales performance, helps you see what sold, and gives you cleaner reporting without manual calculations.",
      },
      {
        question: "Why do I need POS and inventory together?",
        answer:
          "Because many businesses sell online and offline. When your POS and inventory are connected, you reduce errors, avoid missing stock, and always know what’s available.",
      },
      {
        question: "Will Daash help reduce staff mistakes?",
        answer:
          "Yes. With proper tracking and order flow, Daash reduces confusion, missed orders, incorrect stock counts, and “who sold what” issues.",
      },
      {
        question: "Is Daash good for growing businesses?",
        answer:
          "Yes. Daash is built to help businesses stay organized as they get more customers, more orders, more products, and more staff.",
      },
    ],
    [],
  );

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24">
      <Reveal>
        <Container className="text-center">
          <p className="text-xs font-mono tracking-widest text-sky-700">
            FAQs
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl text-5xl font-semibold tracking-tight text-black sm:text-7xl">
            Questions people ask before using Daash
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-black/60 sm:text-lg">
            Clear answers about online store setup, inventory management, POS for
            offline sales, and daily reporting.
          </p>
        </Container>
      </Reveal>

      <Reveal>
        <Container>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <article
                  key={item.question}
                  className="rounded-[28px] border border-black/10 bg-white/60 shadow-sm backdrop-blur transition hover:bg-white/70"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white/70">
                        <HelpCircle className="h-4 w-4 text-black/60" strokeWidth={1.5} />
                      </span>

                      <h3 className="text-base font-semibold tracking-tight text-black sm:text-lg">
                        {item.question}
                      </h3>
                    </div>

                    <span className="text-black/40">
                      {isOpen ? (
                        <Minus className="h-5 w-5" strokeWidth={1.5} />
                      ) : (
                        <Plus className="h-5 w-5" strokeWidth={1.5} />
                      )}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={[
                      "grid overflow-hidden px-5 transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr] pb-0",
                    ].join(" ")}
                  >
                    <div className="min-h-0">
                      <p className="pl-12 text-sm leading-relaxed text-black/60 sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
