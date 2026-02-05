 import { Navbar } from "@/components/Navbar";
 import { Hero } from "@/components/Hero";
 import { Pillars } from "@/components/Pillars";
 import { ValueProps } from "@/components/ValueProps";
 import { Pricing } from "@/components/Pricing";
 import { Footer } from "@/components/Footer";
 import { AIFeatures } from "@/components/AIFeatures";
 
 const Index = () => {
   return (
     <div className="min-h-screen bg-background">
       <Navbar />
       <main>
         <Hero />
        <section id="ai-features">
          <AIFeatures />
        </section>
        <section id="features">
           <Pillars />
         </section>
         <ValueProps />
         <section id="pricing">
           <Pricing />
         </section>
       </main>
       <Footer />
     </div>
   );
 };
 
 export default Index;
