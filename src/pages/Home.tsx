import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import TrustedBy from "../components/sections/TrustedBy";
import DeviceShowcase from "../components/sections/DeviceShowcase";
import FeatureSplit from "../components/sections/FeatureSplit";
import FeaturesBlock from "../components/sections/FeaturesBlock";
import Testimonials from "../components/sections/Testimonials";
import Pricing from "../components/sections/Pricing";
import BlogTeaser from "../components/sections/BlogTeaser";
import Community from "../components/sections/Community";
import FinalCTA from "../components/sections/FinalCTA";
import CloudDivider from "../components/sections/CloudDivider";
import Footer from "../components/sections/Footer";

import { Globe, Boxes, Monitor } from "lucide-react";

import splitImg1 from "../assets/device-web.avif";
import splitImg2 from "../assets/device-mobile.avif";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <div className="relative overflow-hidden bg-gradient-to-b from-white via-white to-sky-100">
          <TrustedBy />
          <DeviceShowcase />

          {/* ONLINE STORE BUILDER */}
          <FeatureSplit
            eyebrow="ONLINE STORE"
            eyebrowIcon={<Globe className="h-4 w-4 text-black/70" />}
            title="Build your online store and sell anywhere"
            text="Create a clean, professional online store in minutes. Add products, share your store link, and start selling to customers online, anytime, from anywhere."
            chips={[
              { label: "Instant storefront" },
              { label: "Product catalog" },
              { label: "Online orders" },
              { label: "Secure checkout" },
            ]}
            imageSrc={splitImg1}
            imageAlt="Daash online store builder showing products and customer orders"
          />

          {/* INVENTORY, SALES & CUSTOMERS */}
          <FeatureSplit
            eyebrow="INVENTORY & SALES"
            eyebrowIcon={<Boxes className="h-4 w-4 text-black/70" />}
            title="Manage products, track sales, and understand your customers"
            text="Stay in control of your business with real-time inventory, daily sales tracking, and a clear view of what is selling. See your best products, top customers, and business performance from one dashboard."
            chips={[
              { label: "Inventory management" },
              { label: "Sales tracking" },
              { label: "Customer insights" },
              { label: "Business analytics" },
            ]}
            imageSrc={splitImg2}
            imageAlt="Daash inventory, sales, and customer analytics dashboard"
            flip
          />

          {/* POINT OF SALE */}
          <FeatureSplit
            eyebrow="POINT OF SALE (POS)"
            eyebrowIcon={<Monitor className="h-4 w-4 text-black/70" />}
            title="Sell in-store and track every sale automatically"
            text="Use Daash POS to sell in your physical store and keep everything in sync. Products, inventory, and sales update instantly, so you always know what was sold today without manual counting."
            chips={[
              { label: "Quick checkout" },
              { label: "Receipts" },
              { label: "Cashier mode" },
              { label: "Stock sync" },
            ]}
            imageSrc={splitImg1}
            imageAlt="Daash point of sale system tracking in-store sales and inventory"
          />

          <FeaturesBlock />
          <Testimonials />
          <Pricing />
          <BlogTeaser />
          <Community />
          <FinalCTA />
          <CloudDivider />
          <Footer />
        </div>
      </main>
    </>
  );
}


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Daash",
  applicationCategory: "BusinessApplication",
  operatingSystem: ["Web", "desktop", "iOS", "Android"],
  description:
    "Daash helps small businesses build an online store, manage inventory, and sell in-store with POS.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "NGN",
    category: "Free",
  },
  url: "https://daashapp.co",
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
