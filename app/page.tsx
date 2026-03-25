import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import ExamSchedule from "@/components/ExamSchedule";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import CTA from "@/components/Cta";
import AboutMe from "@/components/AboutMe";
import Benefit from "@/components/Benefit";
import Certificate from "@/components/Certificate";
import Animate from "@/components/framer-motion/Animate";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Animate type="fadeIn">
        <Hero />
      </Animate>
      <Animate type="fadeInLeft" delay={0.2}>
        <Features />
      </Animate>
      <Animate type="fadeInRight" delay={0.2}>
        <AboutMe />
      </Animate>
      <Animate type="scaleIn" delay={0.2}>
        <Courses />
      </Animate>
      <Animate type="slideUp" delay={0.2}>
        <ExamSchedule />
      </Animate>
      <Animate type="zoomIn" delay={0.2}>
        <Benefit />
      </Animate>
      <Animate type="fadeIn" delay={0.2}>
        <Certificate />
      </Animate>
      <Animate type="fadeInLeft" delay={0.2}>
        <Testimonials />
      </Animate>
      <Animate type="fadeInRight" delay={0.2}>
        <Blog />
      </Animate>
      <Animate type="fadeIn" delay={0.2}>
        <CTA />
      </Animate>
    </main>
  );
}
