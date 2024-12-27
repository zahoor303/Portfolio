"use client";
import Hero from "@/app/components/hero";
import Image from "next/image";
import Projects from "@/app/components/projects";
import Skills from "@/app/components/skills";
import Contact from "./components/Contact";
import About from "./components/About";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./components/footer";

export default function Home() {
  useEffect (() => {
    Aos.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    Aos.refresh();
  }, []);
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
     <Footer />
  </main>
);
}
