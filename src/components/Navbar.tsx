 import { motion } from "framer-motion";
 import { Button } from "@/components/ui/button";
 import { Menu, X } from "lucide-react";
 import { useState } from "react";
 
 export function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   
   return (
     <motion.nav
       initial={{ opacity: 0, y: -20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5 }}
       className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
     >
       <div className="container flex items-center justify-between h-16">
         <div className="flex items-center gap-2">
           <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
             <span className="font-mono font-bold text-primary-foreground">J</span>
           </div>
           <span className="text-xl font-bold">Jarvas</span>
           <span className="text-xs text-muted-foreground border border-border px-2 py-0.5 rounded ml-2">by PixelX</span>
         </div>
         
         {/* Desktop nav */}
         <div className="hidden md:flex items-center gap-8">
           <a href="#pillars" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
           <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
           <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</a>
           <Button size="sm">Get Started</Button>
         </div>
         
         {/* Mobile toggle */}
         <button 
           className="md:hidden p-2"
           onClick={() => setIsOpen(!isOpen)}
         >
           {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
         </button>
       </div>
       
       {/* Mobile menu */}
       {isOpen && (
         <motion.div
           initial={{ opacity: 0, height: 0 }}
           animate={{ opacity: 1, height: "auto" }}
           exit={{ opacity: 0, height: 0 }}
           className="md:hidden border-t border-border bg-background"
         >
           <div className="container py-4 flex flex-col gap-4">
             <a href="#pillars" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
             <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
             <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</a>
             <Button size="sm" className="w-full">Get Started</Button>
           </div>
         </motion.div>
       )}
     </motion.nav>
   );
 }