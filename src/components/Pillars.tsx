 import { motion } from "framer-motion";
 import { 
   ShieldCheck, 
   Server, 
   Lock, 
   Activity, 
   DollarSign, 
   Network, 
   Database, 
   Users
 } from "lucide-react";
 
 const pillars = [
   {
     icon: ShieldCheck,
     title: "Business Continuity",
     description: "DRP, Backup Integrity, Failover",
     color: "from-emerald-500/20 to-emerald-600/5",
     iconColor: "text-primary",
   },
   {
     icon: Server,
     title: "DevSecOps",
     description: "SSH Hardening, Canary Gates, Drift Detection",
     color: "from-cyan-500/20 to-cyan-600/5",
     iconColor: "text-terminal-cyan",
   },
   {
     icon: Lock,
     title: "Cyber Security",
     description: "Secret Scanning, PII Audit, AI Policy",
     color: "from-rose-500/20 to-rose-600/5",
     iconColor: "text-destructive",
   },
   {
     icon: Activity,
     title: "SRE & Performance",
     description: "Resource Invariants, Zombie Cleanup, IO Wait",
     color: "from-amber-500/20 to-amber-600/5",
     iconColor: "text-warning",
   },
   {
     icon: DollarSign,
     title: "FinOps (Cost)",
     description: "Orphan Image Cleanup, Resource Right-sizing",
     color: "from-green-500/20 to-green-600/5",
     iconColor: "text-primary",
   },
   {
     icon: Network,
     title: "Network",
     description: "SSL Expiry (openssl), DNS Integrity, Latency Audit",
     color: "from-blue-500/20 to-blue-600/5",
     iconColor: "text-terminal-blue",
   },
   {
     icon: Database,
     title: "Database",
     description: "Connectivity, Slow Query Audit, Corruption Checks",
     color: "from-purple-500/20 to-purple-600/5",
     iconColor: "text-terminal-purple",
   },
   {
     icon: Users,
     title: "Identity & Access",
     description: "Sudoers Audit, SSH Key Rotation, Orphan Users",
     color: "from-pink-500/20 to-pink-600/5",
     iconColor: "text-pink-400",
   },
 ];
 
 export function Pillars() {
   return (
     <section className="py-24 relative">
       <div className="absolute inset-0 section-glow opacity-50" />
       
       <div className="container relative z-10">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <h2 className="text-4xl md:text-5xl font-bold mb-4">
             The <span className="gradient-text">8 Pillars</span> of Governance
           </h2>
           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
             Comprehensive coverage across all critical infrastructure domains
           </p>
         </motion.div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {pillars.map((pillar, index) => (
             <motion.div
               key={pillar.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               whileHover={{ y: -5, transition: { duration: 0.2 } }}
               className="group relative"
             >
               <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
               <div className="relative card-gradient rounded-xl border border-border p-6 h-full hover:border-primary/30 transition-colors duration-300">
                 <div className={`inline-flex p-3 rounded-lg bg-secondary/50 mb-4 ${pillar.iconColor}`}>
                   <pillar.icon className="w-6 h-6" />
                 </div>
                 <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
                 <p className="text-sm text-muted-foreground">{pillar.description}</p>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 }