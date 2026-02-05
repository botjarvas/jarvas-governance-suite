 import { motion } from "framer-motion";
 import { FileJson, EyeOff, Feather } from "lucide-react";
 
 const props = [
   {
     icon: FileJson,
     title: "Immutable Evidence",
     description: "Every run generates a timestamped JSON with cryptographic-like traceability. Perfect for compliance audits and incident forensics.",
   },
   {
     icon: EyeOff,
     title: "Sensitive Data Redaction",
     description: "Native masking of AWS keys, tokens, and secrets in all logs. Your credentials never appear in plain text.",
   },
   {
     icon: Feather,
     title: "Portable & Lightweight",
     description: "Pure Bash & Docker logic. No heavy agents required. Deploy anywhere Linux runs—from edge devices to cloud VMs.",
   },
 ];
 
 export function ValueProps() {
   return (
     <section className="py-24 bg-secondary/20">
       <div className="container">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <h2 className="text-4xl md:text-5xl font-bold mb-4">
             Why <span className="gradient-text">Jarvas</span>?
           </h2>
           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
             Enterprise-grade security without the enterprise complexity
           </p>
         </motion.div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {props.map((prop, index) => (
             <motion.div
               key={prop.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.15 }}
               className="text-center"
             >
               <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
                 <prop.icon className="w-8 h-8 text-primary" />
               </div>
               <h3 className="text-xl font-semibold mb-3">{prop.title}</h3>
               <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 }