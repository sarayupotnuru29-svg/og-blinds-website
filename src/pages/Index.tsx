// import Header from "@/components/Header";
// import Hero from "@/components/Hero";
// import Services from "@/components/Services";
// import About from "@/components/About";
// import GetStartedForm from "@/components/GetStartedForm";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

// const Index = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main>
//         <Hero />
//         <Services />
//         <About />
//         <GetStartedForm />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Index;



import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import GetStartedForm from "@/components/GetStartedForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Section 1: Home */}
        <Hero />

        {/* Section 2: Services */}
        <Services />

        {/* Section 3: Contact (Moved Up) */}
        <Contact />

        {/* Section 4: Get Started Form */}
        <GetStartedForm />

        {/* Section 5: About (Moved Down) */}
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;