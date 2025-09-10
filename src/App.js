// import { motion } from "framer-motion";
// import { Button } from "./components/ui/button";
// import { Card, CardContent } from "./components/ui/card";
// import { Mail, Github, Linkedin } from "lucide-react";

// export default function Portfolio() {
//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
//       {/* Hero Section */}
//       <section className="flex flex-col items-center justify-center h-screen text-center px-6">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-100"
//         >
//           Building AI Solutions that Scale
//         </motion.h1>
//         <p className="max-w-2xl text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-300">
//           Hi, I’m <span className="font-semibold text-blue-600 dark:text-cyan-400">Rishabh Gupta</span> — AI/ML Engineer & Freelance AI Solutions Developer.
//         </p>
//         <div className="flex gap-4">
//           <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
//             See My Work
//           </Button>
//           <Button className="border border-cyan-500 hover:bg-cyan-500 text-cyan-500 hover:text-white px-6 py-2 rounded-lg">
//             Hire Me
//           </Button>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="px-8 py-16 max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">About Me</h2>
//         <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
//           I am an IIT Bombay graduate with expertise in building end-to-end AI/ML solutions.
//           Skilled in Python, FastAPI, PyTorch, LLMs, RAG, multi-modal models, AI agents, and generative AI.
//           Experienced in deploying scalable AI apps using Docker, vLLM, Azure, and vector databases.
//           Passionate about solving real-world problems with cutting-edge AI.
//         </p>
//       </section>

//       {/* Projects Section */}
//       <section className="px-8 py-16 bg-gray-100 dark:bg-gray-800">
//         <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Projects & Case Studies</h2>
//         <div className="grid md:grid-cols-2 gap-6">
//           {[
//             {
//               title: "Contract Analyzer with LLMs",
//               desc: "Extract risks, clauses, and payment terms from legal/finance documents using custom-tuned LLMs.",
//             },
//             {
//               title: "AI Knowledge Base Assistant",
//               desc: "Built a semantic search + RAG system for enterprise document Q&A with citations.",
//             },
//             {
//               title: "Vision-Language Model for Drawings",
//               desc: "Extract structured data from technical drawings using multimodal models.",
//             },
//             {
//               title: "Scalable AI API Platform",
//               desc: "Deployed LLaMA/Mistral with FastAPI, vLLM, Docker for high-throughput inference.",
//             },
//             {
//               title: "Generative AI for Marketing Creatives",
//               desc: "End-to-end pipeline generating ad copy + images for brands.",
//             },
//           ].map((proj, i) => (
//             <Card key={i} className="rounded-2xl shadow-md bg-white dark:bg-gray-800">
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{proj.title}</h3>
//                 <p className="text-gray-700 dark:text-gray-300">{proj.desc}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section className="px-8 py-16 max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Skills & Tech Stack</h2>
//         <p className="text-gray-700 dark:text-gray-300">
//           Python · PyTorch · FastAPI · Docker · Azure · GitHub · MLflow · vLLM · LangChain · Stable Diffusion · LLaMA/Mistral
//         </p>
//       </section>

//       {/* Services Section */}
//       <section className="px-8 py-16 bg-gray-100 dark:bg-gray-800">
//         <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Services Offered</h2>
//         <ul className="list-disc list-inside text-lg space-y-2 text-gray-700 dark:text-gray-300">
//           <li>Custom AI Chatbots (LLM-powered)</li>
//           <li>Generative AI solutions (text, image, multimodal)</li>
//           <li>Document Intelligence (OCR + LLMs)</li>
//           <li>Custom Model Deployment</li>
//           <li>MLOps & Infrastructure Setup</li>
//         </ul>
//       </section>

//       {/* Contact Section */}
//       <section className="px-8 py-16 max-w-5xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Contact</h2>
//         <p className="mb-4 text-gray-700 dark:text-gray-300">Let’s collaborate! Reach me through:</p>
//         <div className="flex justify-center gap-6">
//           <a href="mailto:rishabh5086490@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400">
//             <Mail />
//           </a>
//           <a href="https://github.com/Rishabh2561" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400">
//             <Github />
//           </a>
//           <a href="https://www.linkedin.com/in/rishabh-gupta2001/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400">
//             <Linkedin />
//           </a>
//         </div>
//       </section>

//       <footer className="py-6 text-center text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
//         © {new Date().getFullYear()} Rishabh Gupta — All Rights Reserved.
//       </footer>
//     </div>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const projects = [
    {
      title: "Contract Analyzer with LLMs",
      desc: "Developed a legal/finance contract analyzer that extracts risks, clauses, and payment terms using custom-tuned LLaMA 3 and Mistral models. Deployed with FastAPI and Docker for enterprise-ready usage.",
      tools: "LLaMA 3, Mistral, FastAPI, Docker",
      result: "Reduced manual contract review time by 70%."
    },
    {
      title: "AI Knowledge Base Assistant",
      desc: "Built a Retrieval-Augmented Generation system for enterprise document Q&A. Users can query PDFs, manuals, and SOPs with precise citations.",
      tools: "LangChain, Vector DB, Open-Source LLMs",
      result: "Increased knowledge access efficiency by 60%."
    },
    {
      title: "Vision-Language Model for Technical Drawings",
      desc: "Extracted structured component data from engineering drawings using multimodal AI models, producing Component Quality Standard (CQS) sheets automatically.",
      tools: "YOLO, OpenCV, PyTorch, LLaMA",
      result: "Eliminated 80% of manual data entry tasks."
    },
    {
      title: "Scalable AI API Platform",
      desc: "Deployed LLaMA/Mistral models using vLLM and FastAPI with Docker to provide high-throughput inference APIs for multiple clients.",
      tools: "vLLM, FastAPI, Docker, Azure",
      result: "Handled 500+ parallel requests with sub-second latency."
    },
    {
      title: "Generative AI for Marketing Creatives",
      desc: "Created an end-to-end pipeline generating ad copy and visuals for digital marketing campaigns using multimodal generative AI models.",
      tools: "Stable Diffusion, GPT, Python",
      result: "Boosted campaign engagement by 35%."
    },
  ];

  const skills = [
    "Python", "PyTorch", "FastAPI", "Docker", "Azure", "GitHub",
    "MLflow", "vLLM", "LangChain", "Stable Diffusion", "LLaMA/Mistral"
  ];

  const services = [
    "Custom AI Chatbots (LLM-powered)",
    "Generative AI solutions (text, image, multimodal)",
    "Document Intelligence (OCR + LLMs)",
    "Custom Model Deployment & API development",
    "MLOps, Model Monitoring & Infrastructure Setup"
  ];

  const testimonials = [
    {
      name: "Gagan Sharma",
      role: "Product Manager",
      feedback: "Rishabh delivered a scalable AI solution that exceeded expectations, completing the project ahead of schedule."
    },
    {
      name: "Neha Singh",
      role: "CTO, FinTech Startup",
      feedback: "Highly skilled in AI/ML deployment. His generative AI pipeline significantly improved our campaign performance."
    },
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <h1 className="font-bold text-xl">Rishabh Gupta</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center h-screen text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-100"
          >
            Building AI Solutions that Scale
          </motion.h1>
          <p className="max-w-2xl text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-300">
            Hi, I’m <span className="font-semibold text-blue-600 dark:text-cyan-400">Rishabh Gupta</span> — AI/ML Engineer & Freelance AI Solutions Developer.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">See My Work</a>
            <a href="#contact" className="px-6 py-2 border border-cyan-500 hover:bg-cyan-500 text-cyan-500 hover:text-white rounded-lg transition">Hire Me</a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-8 py-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            IIT Bombay graduate with expertise in building end-to-end AI/ML solutions. I specialize in Python, FastAPI, PyTorch, LLMs, RAG, multi-modal models, AI agents, and generative AI. Experienced in deploying scalable AI apps using Docker, vLLM, Azure, and vector databases. Passionate about solving real-world problems with cutting-edge AI while offering freelance solutions globally.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="px-8 py-16 bg-gray-100 dark:bg-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Projects & Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                className="rounded-2xl shadow-md bg-white dark:bg-gray-700 p-6"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100">{proj.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-1">{proj.desc}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400"><strong>Tools:</strong> {proj.tools}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400"><strong>Result:</strong> {proj.result}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="px-8 py-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Skills & Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-gray-700 text-blue-700 dark:text-cyan-400 rounded-full">{skill}</span>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="px-8 py-16 bg-gray-100 dark:bg-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Services Offered</h2>
          <ul className="list-disc list-inside text-lg space-y-2 text-gray-700 dark:text-gray-300">
            {services.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </section>

        {/* Testimonials Section */}
        <section className="px-8 py-16 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Testimonials / Impact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md">
                <p className="italic text-gray-700 dark:text-gray-300">"{t.feedback}"</p>
                <p className="mt-3 font-semibold text-gray-900 dark:text-gray-100">{t.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-8 py-16 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Contact</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">Let’s collaborate! Reach me through:</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:rishabh5086490@gmail.com" className="hover:text-blue-600 dark:hover:text-cyan-400"><Mail /></a>
            <a href="https://github.com/Rishabh2561" className="hover:text-blue-600 dark:hover:text-cyan-400"><Github /></a>
            <a href="https://www.linkedin.com/in/rishabh-gupta2001/" className="hover:text-blue-600 dark:hover:text-cyan-400"><Linkedin /></a>
          </div>
        </section>

        <footer className="py-6 text-center text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
          © {new Date().getFullYear()} Rishabh Gupta — All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
