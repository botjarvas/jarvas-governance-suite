 import { motion } from "framer-motion";
 
 const terminalLines = [
   { type: "command", content: '❯ ./jarvas run --action "SECURITY_SCAN"' },
   { type: "info", content: "[PIXELX] Initializing Jarvas Wrapper v1.0.0..." },
   { type: "info", content: "[PIXELX] Target: Local Infrastructure Audit" },
   { type: "info", content: "[PIXELX] Pillar: 03_CYBER_SECURITY" },
   { type: "empty", content: "" },
   { type: "status", content: "⚡ Running: secret_scanner.sh..." },
   { type: "scan", content: "🔍 Scanning directory: ./src" },
   { type: "scan", content: "🔍 Scanning directory: ./config" },
   { type: "empty", content: "" },
   { type: "critical", content: "[!] CRITICAL FINDING: Potential AWS Secret Key found!" },
   { type: "path", content: "📍 File: ./config/production.env:14" },
   { type: "content", content: "📍 Content: AWS_SECRET_ACCESS_KEY=AKIA****************XXXX" },
   { type: "empty", content: "" },
   { type: "critical", content: "[!] CRITICAL FINDING: RSA Private Key detected!" },
   { type: "path", content: "📍 File: ./src/auth/id_rsa" },
   { type: "content", content: "📍 Content: -----BEGIN RSA PRIVATE KEY----- [REDACTED]" },
   { type: "empty", content: "" },
   { type: "failed", content: "❌ AUDIT FAILED: 2 high-risk vulnerabilities found." },
   { type: "save", content: "💾 Evidence saved to: runs/run-20260205T033427Z/artifacts/summary.json" },
   { type: "empty", content: "" },
   { type: "status-fail", content: "[STATUS] FAILED (Exit Code: 1)" },
   { type: "empty", content: "" },
   { type: "ai-header", content: "🤖 [AI ADVISOR] Analyzing findings with LLM..." },
   { type: "ai-insight", content: "┌─────────────────────────────────────────────────────────────────────────┐" },
   { type: "ai-insight", content: "│ 💡 ANALYSIS: The exposed AWS Key in production.env creates an          │" },
   { type: "ai-insight", content: "│    immediate risk of unauthorized infrastructure access. Attackers      │" },
   { type: "ai-insight", content: "│    can provision resources, exfiltrate data, or pivot laterally.       │" },
   { type: "ai-insight", content: "│                                                                         │" },
   { type: "ai-command", content: "│ 🔧 REMEDIATION: Rotate the key immediately:                             │" },
   { type: "ai-command", content: "│    $ aws iam create-access-key --user-name <SERVICE_ACCOUNT>            │" },
   { type: "ai-command", content: "│    $ aws iam delete-access-key --access-key-id AKIA***XXXX              │" },
   { type: "ai-insight", content: "│                                                                         │" },
   { type: "ai-priority", content: "│ ⚠️  PRIORITY: CRITICAL | TIME TO REMEDIATE: < 15 minutes               │" },
   { type: "ai-insight", content: "└─────────────────────────────────────────────────────────────────────────┘" },
 ];
 
 const getLineColor = (type: string) => {
   switch (type) {
     case "command":
       return "text-foreground font-semibold";
     case "info":
       return "terminal-cyan";
     case "status":
       return "terminal-green";
     case "scan":
       return "terminal-muted";
     case "critical":
       return "terminal-red font-semibold";
     case "path":
       return "terminal-blue";
     case "content":
       return "terminal-amber";
     case "failed":
       return "terminal-red font-bold";
     case "save":
       return "terminal-purple";
     case "status-fail":
       return "terminal-red bg-terminal-red/10 inline-block px-2 rounded";
     case "ai-header":
       return "terminal-cyan font-semibold";
     case "ai-insight":
       return "terminal-cyan opacity-90";
     case "ai-command":
       return "terminal-green";
     case "ai-priority":
       return "terminal-amber font-semibold";
     default:
       return "terminal-muted";
   }
 };
 
 export function Terminal() {
   return (
     <motion.div
       initial={{ opacity: 0, y: 30 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, delay: 0.3 }}
       className="relative mx-auto max-w-4xl"
     >
       {/* Glow effect */}
       <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 rounded-2xl blur-xl opacity-50" />
       
       {/* Terminal window */}
       <div className="relative terminal-window rounded-xl overflow-hidden shadow-2xl">
         {/* Title bar */}
         <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
           <div className="flex gap-2">
             <div className="w-3 h-3 rounded-full bg-destructive/80" />
             <div className="w-3 h-3 rounded-full bg-warning/80" />
             <div className="w-3 h-3 rounded-full bg-primary/80" />
           </div>
           <span className="ml-4 text-sm terminal-muted font-mono">jarvas@pixelx ~ security_scan</span>
         </div>
         
         {/* Terminal content */}
         <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
           {terminalLines.map((line, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, x: -10 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.3, delay: index * 0.08 }}
               className={`${getLineColor(line.type)} ${line.type === "empty" ? "h-4" : ""}`}
             >
               {line.content}
             </motion.div>
           ))}
           
           {/* Blinking cursor */}
           <motion.span
             animate={{ opacity: [1, 0, 1] }}
             transition={{ duration: 1, repeat: Infinity }}
             className="inline-block w-2 h-4 bg-primary mt-2"
           />
         </div>
       </div>
     </motion.div>
   );
 }