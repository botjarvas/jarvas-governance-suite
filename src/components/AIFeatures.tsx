 import { motion } from "framer-motion";
 import { Brain, Sparkles, MessageSquareText, Wand2, Search, ShieldAlert } from "lucide-react";
 
 const features = [
   {
     icon: MessageSquareText,
     title: "Explain Failures",
     description: "Convert cryptic terminal errors into actionable business insights. No more deciphering exit codes—get clear explanations and impact assessments.",
     gradient: "from-cyan-500/20 to-blue-500/10",
   },
   {
     icon: Wand2,
     title: "Remediation Guidance",
     description: "Receive the exact commands needed to fix security drifts. Copy-paste ready solutions tailored to your specific infrastructure context.",
     gradient: "from-emerald-500/20 to-green-500/10",
   },
   {
     icon: Search,
     title: "Smart Auditing",
     description: "AI-powered pattern detection for PII and secrets that regular expressions miss. Semantic understanding beyond simple string matching.",
     gradient: "from-purple-500/20 to-pink-500/10",
   },
 ];
 
 export function AIFeatures() {
   return (
     <section className="py-24 relative overflow-hidden">
       {/* Background glow effect */}
       <div className="absolute inset-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl" />
       </div>
       
       <div className="container relative z-10">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           {/* Badge */}
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
             <Brain className="w-4 h-4" />
             The Secret Sauce
           </div>
           
           <h2 className="text-4xl md:text-5xl font-bold mb-4">
             <span className="gradient-text">AI-Powered</span> Intelligence Layer
           </h2>
           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
             Jarvas isn't just a bash wrapper—it integrates with LLMs like Gemini & OpenAI 
             to transform raw audit data into strategic security intelligence.
           </p>
         </motion.div>
         
         {/* Main feature highlight */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="relative max-w-4xl mx-auto mb-16"
         >
           <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-emerald-500/30 rounded-2xl blur-xl opacity-50" />
           <div className="relative card-gradient rounded-2xl border border-border p-8 md:p-12">
             <div className="flex items-start gap-6">
               <div className="hidden md:flex p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/20">
                 <Sparkles className="w-10 h-10 text-cyan-400" />
               </div>
               <div className="flex-1">
                 <h3 className="text-2xl md:text-3xl font-bold mb-4">
                   From Exit Codes to <span className="text-cyan-400">Executive Insights</span>
                 </h3>
                 <p className="text-lg text-muted-foreground mb-6">
                   Every audit finding is analyzed by AI to provide business context, risk scoring, 
                   and prioritized remediation steps. Your team gets actionable intelligence, 
                   not just error logs.
                 </p>
                 <div className="flex flex-wrap gap-3">
                   <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm">
                     Gemini 2.5 Pro
                   </span>
                   <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm">
                     GPT-5 Compatible
                   </span>
                   <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                     Real-time Analysis
                   </span>
                 </div>
               </div>
             </div>
           </div>
         </motion.div>
         
         {/* Feature cards */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {features.map((feature, index) => (
             <motion.div
               key={feature.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
               whileHover={{ y: -5, transition: { duration: 0.2 } }}
               className="group relative"
             >
               <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
               <div className="relative card-gradient rounded-xl border border-border p-6 h-full hover:border-cyan-500/30 transition-colors duration-300">
                 <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-4">
                   <feature.icon className="w-6 h-6 text-cyan-400" />
                 </div>
                 <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                 <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
               </div>
             </motion.div>
           ))}
         </div>
         
         {/* AI insight example */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.5 }}
           className="mt-16 max-w-3xl mx-auto"
         >
           <div className="terminal-window rounded-xl overflow-hidden">
             <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
               <ShieldAlert className="w-4 h-4 text-cyan-400" />
               <span className="text-sm terminal-muted font-mono">AI Advisor Output Sample</span>
             </div>
             <div className="p-6 font-mono text-sm">
               <div className="terminal-cyan font-semibold mb-2">🤖 [AI ADVISOR] Security Analysis Complete</div>
               <div className="terminal-muted mb-4">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
               <div className="space-y-2">
                 <div className="text-foreground">
                   <span className="terminal-amber">Risk Level:</span> CRITICAL (Score: 9.2/10)
                 </div>
                 <div className="text-foreground">
                   <span className="terminal-amber">Business Impact:</span> Unauthorized cloud resource provisioning, 
                   potential data exfiltration, lateral movement risk
                 </div>
                 <div className="text-foreground mt-4">
                   <span className="terminal-green">📋 Recommended Actions:</span>
                 </div>
                 <div className="terminal-muted pl-4">
                   1. Rotate compromised credentials within 15 minutes<br/>
                   2. Audit CloudTrail for unauthorized API calls<br/>
                   3. Enable AWS Secrets Manager for future deployments
                 </div>
               </div>
             </div>
           </div>
         </motion.div>
       </div>
     </section>
   );
 }