 import { motion } from "framer-motion";
 import { Button } from "@/components/ui/button";
 import { Terminal } from "./Terminal";
 import { Shield, FileText } from "lucide-react";
 
 export function Hero() {
   return (
     <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
       {/* Background effects */}
       <div className="absolute inset-0 hero-gradient" />
       <div className="absolute inset-0 grid-pattern opacity-30" />
       
       <div className="container relative z-10">
         <div className="text-center mb-16">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
           >
             <Shield className="w-4 h-4" />
             DevSecOps & Business Continuity
           </motion.div>
           
           <motion.h1
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
           >
             <span className="text-foreground">Jarvas: The </span>
             <span className="gradient-text">5-Minute</span>
             <br />
             <span className="text-foreground">Governance Suite.</span>
           </motion.h1>
           
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
           >
             Automate 24 professional DevSecOps audits and generate immutable compliance 
             evidence for your Linux infrastructure. Security-first, zero-dependency, and audit-ready.
           </motion.p>
           
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="flex flex-col sm:flex-row gap-4 justify-center"
           >
             <Button size="lg" className="text-lg px-8 py-6 glow-emerald">
               <Shield className="w-5 h-5 mr-2" />
               Get Enterprise Access
             </Button>
             <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-border hover:bg-secondary">
               <FileText className="w-5 h-5 mr-2" />
               View Documentation
             </Button>
           </motion.div>
         </div>
         
         <Terminal />
       </div>
     </section>
   );
 }