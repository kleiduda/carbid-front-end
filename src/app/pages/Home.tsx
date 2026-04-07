import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { Services } from "../components/Services";
import { FAQ } from "../components/FAQ";
import { CallToAction } from "../components/CallToAction";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}