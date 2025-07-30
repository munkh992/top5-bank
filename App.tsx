import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { NavigationBar } from "./components/sections/NavigationBar";
import { InvestorHeroSection } from "./components/sections/InvestorHeroSection";
import { BankLinksSection } from "./components/sections/BankLinksSection";
import { InformationSection } from "./components/sections/InformationSection";
import { InvestorFooter } from "./components/sections/InvestorFooter";
import { LuxuryParticles } from "./components/LuxuryParticles";

export default function App() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Premium Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-black" />
      <motion.div 
        className="fixed inset-0 bg-gradient-to-tr from-blue-900/30 via-slate-900/20 to-navy-950/40"
        style={{ y: bgY }}
      />
      
      {/* Luxury Grid Pattern */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(59,130,246,0.03)_50%,transparent_51%)]"
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      {/* Luxury Floating Particles */}
      <LuxuryParticles />
      
      {/* Mouse Follower Effect */}
      <motion.div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-10 opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(30, 64, 175, 0.1) 50%, transparent 70%)',
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-20">
        <NavigationBar />
        
        <InvestorHeroSection parallaxY={parallaxY} />
        
        {/* Main Content Grid */}
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <BankLinksSection />
            <InformationSection />
          </div>
        </div>
        
        <InvestorFooter />
      </div>
      
      {/* Ambient Light Effects */}
      <motion.div 
        className="fixed top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="fixed bottom-0 right-1/4 w-80 h-80 bg-slate-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}