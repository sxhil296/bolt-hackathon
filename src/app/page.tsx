import FAQ from "@/components/faq";
import FeaturesSection from "@/components/features-8";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import { Prize } from "@/components/prize";
import TeamSection from "@/components/team";
import WallOfLoveSection from "@/components/testimonials";
// import dynamic from "next/dynamic"
// const Globe = dynamic(() => import("@/components/globe"), { ssr: false })
export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TeamSection />
      <WallOfLoveSection />
      <Prize />
      <FAQ />
      <FooterSection />
    </>
  );
}
