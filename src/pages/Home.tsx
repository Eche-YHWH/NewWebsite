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

import splitImg1 from "../assets/device-web.avif";
import splitImg2 from "../assets/device-mobile.avif";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Global page gradient starts here (TrustedBy) and runs to Footer */}
        <div className="relative overflow-hidden bg-gradient-to-b from-white via-white to-sky-100">
          <TrustedBy />

          <DeviceShowcase />

          <FeatureSplit
            eyebrow="ONLINE STORE BUILDER"
            title="Set up your online store and start selling anywhere"
            text="Create a professional online store in minutes. Add products, accept orders, and sell to customers online with a storefront built to scale your business."
            chips={[
              { label: "Storefront setup" },
              { label: "Product listings" },
              { label: "Customer emails" },
              { label: "Order management" },
            ]}
            imageSrc={splitImg1}
            imageAlt="Daash online store builder dashboard showing products and orders"
          />

          <FeatureSplit
          eyebrow="INVENTORY & SALES DASHBOARD"
          title="Manage products, track sales, and see what’s working"
          text="Track inventory in real time, monitor daily sales, and understand performance from a single dashboard. Get clear insights to focus on what drives growth in your business."
          chips={[
            { label: "Inventory tracking" },
            { label: "Sales analytics" },
            { label: "Performance insights" },
            { label: "Real-time reports" },
          ]}
          imageSrc={splitImg2}
          imageAlt="Daash sales and inventory analytics dashboard"
          flip
        />

        <FeatureSplit
        eyebrow="POINT OF SALE (POS)"
        title="Sell in-store and track every sale automatically"
        text="Use Daash POS to sell in your physical store and keep sales, inventory, and revenue in sync. Every transaction updates your dashboard instantly, so nothing is tracked manually."
        chips={[
          { label: "In-store sales" },
          { label: "Automatic stock updates" },
          { label: "Daily sales tracking" },
          { label: "Unified reports" },
        ]}
        imageSrc={splitImg1}
        imageAlt="Daash point of sale system showing in-store transactions and synced inventory"
      />

          <FeaturesBlock />
          <Testimonials />
          <Pricing />
          <BlogTeaser />
          <Community />

          <FinalCTA />

          {/* Clouds appear between Final CTA and Footer */}
          <CloudDivider />

          <Footer />
        </div>
      </main>
    </>
  );
}
