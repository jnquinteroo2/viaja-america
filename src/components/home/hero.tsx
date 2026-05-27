"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/90 z-10" />
        <Image 
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80" 
          alt="Viaja América Luxury Travel"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
      </motion.div>

      <div className="container relative z-20 mx-auto px-6 md:px-12 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 backdrop-blur-md border border-primary/20 text-white font-medium text-sm mb-6 shadow-xl">
            Redefiniendo el turismo premium
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold text-white tracking-tight mb-8 drop-shadow-lg max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          Descubre el Mundo <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">con Elegancia</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-medium drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        >
          Experiencias de viaje exclusivas, destinos internacionales y soluciones corporativas de primer nivel diseñadas a tu medida.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="rounded-full h-14 px-8 text-base shadow-xl gap-2 w-full sm:w-auto">
            Explorar Destinos <ArrowRight className="w-5 h-5" />
          </Button>
          <Button size="lg" variant="secondary" className="rounded-full h-14 px-8 text-base shadow-xl w-full sm:w-auto bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20">
            Viajes Corporativos
          </Button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1"
        >
          <div className="w-1.5 h-3 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
