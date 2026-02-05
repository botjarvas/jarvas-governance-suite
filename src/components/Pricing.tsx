 import { motion } from "framer-motion";
 import { Button } from "@/components/ui/button";
 import { Check, Sparkles } from "lucide-react";
 
 const tiers = [
   {
     name: "Community",
     price: "Free",
     description: "Get started with core governance features",
     features: [
       "Core Wrapper Framework",
       "4 Basic Skills Included",
       "Single Server Support",
       "Community Support",
       "Basic Documentation",
     ],
     cta: "Get Started Free",
     featured: false,
   },
   {
     name: "Enterprise",
     price: "Custom",
     description: "Full suite for production infrastructure",
     features: [
       "Full 24-Skill Suite",
       "Multi-Server Fleet Support",
       "CIS-Ready Compliance Reports",
       "Priority Support & SLA",
       "Custom Skill Development",
       "SSO & RBAC Integration",
       "Dedicated Success Manager",
     ],
     cta: "Contact Sales",
     featured: true,
   },
 ];
 
 export function Pricing() {
   return (
     <section className="py-24 relative">
       <div className="container">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <h2 className="text-4xl md:text-5xl font-bold mb-4">
             Simple, <span className="gradient-text">Transparent</span> Pricing
           </h2>
           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
             Start free, scale when you're ready
           </p>
         </motion.div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
           {tiers.map((tier, index) => (
             <motion.div
               key={tier.name}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.15 }}
               className={`relative rounded-2xl p-8 ${
                 tier.featured 
                   ? "card-gradient border-2 border-primary glow-emerald" 
                   : "card-gradient border border-border"
               }`}
             >
               {tier.featured && (
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                   <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                     <Sparkles className="w-4 h-4" />
                     Recommended
                   </div>
                 </div>
               )}
               
               <div className="mb-6">
                 <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                 <p className="text-muted-foreground">{tier.description}</p>
               </div>
               
               <div className="mb-6">
                 <span className="text-4xl font-bold">{tier.price}</span>
                 {tier.price !== "Free" && tier.price !== "Custom" && (
                   <span className="text-muted-foreground">/month</span>
                 )}
               </div>
               
               <ul className="space-y-3 mb-8">
                 {tier.features.map((feature) => (
                   <li key={feature} className="flex items-center gap-3">
                     <Check className="w-5 h-5 text-primary flex-shrink-0" />
                     <span className="text-muted-foreground">{feature}</span>
                   </li>
                 ))}
               </ul>
               
               <Button 
                 className={`w-full ${tier.featured ? "glow-emerald" : ""}`}
                 variant={tier.featured ? "default" : "outline"}
                 size="lg"
               >
                 {tier.cta}
               </Button>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 }