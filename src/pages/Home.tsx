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
import Footer from "../components/sections/Footer";

import splitImg1 from "../assets/device-web.avif";
import splitImg2 from "../assets/device-mobile.avif";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />

        <DeviceShowcase />

        <FeatureSplit
          eyebrow="PROJECT MANAGEMENT"
          title="Keep every project moving forward"
          text="Plan, assign, and deliver work in one place. Stay organized and keep clients confident."
          chips={[{ label: "Tasks" }, { label: "Time tracking" }, { label: "Timesheets" }, { label: "Reports" }]}
          imageSrc={splitImg1}
          imageAlt="Projects preview"
        />

        <FeatureSplit
          eyebrow="FINANCIAL MANAGEMENT"
          title="Track income, get paid, stress less"
          text="Create invoices, track expenses, and keep tabs on earnings. Everything in one place."
          chips={[{ label: "Invoicing" }, { label: "Budgets" }, { label: "Forecasting" }, { label: "Integrations" }]}
          imageSrc={splitImg2}
          imageAlt="Reports preview"
          flip
        />

        <FeaturesBlock />
        <Testimonials />
        <Pricing />
        <BlogTeaser />

        {/* NEW SECTION */}
        <Community />

        {/* FINAL CTA */}
        <FinalCTA />

        <Footer />
      </main>
    </>
  );
}

