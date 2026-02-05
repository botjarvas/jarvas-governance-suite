 import { Github, FileText, HelpCircle } from "lucide-react";
 
 export function Footer() {
   return (
     <footer className="border-t border-border bg-card/50 py-12">
       <div className="container">
         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="text-center md:text-left">
             <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
               <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                 <span className="font-mono font-bold text-primary-foreground text-sm">PX</span>
               </div>
               <span className="font-semibold">PixelX</span>
             </div>
             <p className="text-sm text-muted-foreground">
               Governance & DevSecOps Engineering. Proudly built in Portugal. 🇵🇹
             </p>
           </div>
           
           <div className="flex items-center gap-6">
             <a 
               href="#" 
               className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
             >
               <Github className="w-5 h-5" />
               <span className="text-sm">GitHub</span>
             </a>
             <a 
               href="#" 
               className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
             >
               <FileText className="w-5 h-5" />
               <span className="text-sm">Docs</span>
             </a>
             <a 
               href="#" 
               className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
             >
               <HelpCircle className="w-5 h-5" />
               <span className="text-sm">Support</span>
             </a>
           </div>
         </div>
         
         <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
           © {new Date().getFullYear()} PixelX. All rights reserved.
         </div>
       </div>
     </footer>
   );
 }