import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Building AI Solutions that Scale
        </motion.h1>
        <p className="max-w-2xl text-lg md:text-xl mb-6">
          Hi, I’m <span className="font-semibold">Rishabh Gupta</span> — AI/ML Engineer & Freelance AI Solutions Developer.
        </p>
        <div className="flex gap-4">
          <Button>See My Work</Button>
          <Button variant="outline">Hire Me</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="px-8 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          I am an IIT Bombay graduate with expertise in building end-to-end AI/ML solutions. 
          Skilled in Python, FastAPI, PyTorch, LLMs, RAG, multi-modal models, AI agents, and generative AI. 
          Experienced in deploying scalable AI apps using Docker, vLLM, Azure, and vector databases. 
          Passionate about solving real-world problems with cutting-edge AI.
        </p>
      </section>

      {/* Projects Section */}
      <section className="px-8 py-16 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects & Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Contract Analyzer with LLMs",
              desc: "Extract risks, clauses, and payment terms from legal/finance documents using custom-tuned LLMs.",
            },
            {
              title: "AI Knowledge Base Assistant",
              desc: "Built a semantic search + RAG system for enterprise document Q&A with citations.",
            },
            {
              title: "Vision-Language Model for Drawings",
              desc: "Extract structured data from technical drawings using multimodal models.",
            },
            {
              title: "Scalable AI API Platform",
              desc: "Deployed LLaMA/Mistral with FastAPI, vLLM, Docker for high-throughput inference.",
            },
            {
              title: "Generative AI for Marketing Creatives",
              desc: "End-to-end pipeline generating ad copy + images for brands.",
            },
          ].map((proj, i) => (
            <Card key={i} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                <p>{proj.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-8 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Skills & Tech Stack</h2>
        <p>Python · PyTorch · FastAPI · Docker · Azure · GitHub · MLflow · vLLM · LangChain · Stable Diffusion · LLaMA/Mistral</p>
      </section>

      {/* Services Section */}
      <section className="px-8 py-16 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-center">Services Offered</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Custom AI Chatbots (LLM-powered)</li>
          <li>Generative AI solutions (text, image, multimodal)</li>
          <li>Document Intelligence (OCR + LLMs)</li>
          <li>Custom Model Deployment</li>
          <li>MLOps & Infrastructure Setup</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="px-8 py-16 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="mb-4">Let’s collaborate! Reach me through:</p>
        <div className="flex justify-center gap-6">
          <a href="mailto:rishabh5086490@gmail.com" className="hover:text-blue-500"><Mail /></a>
          <a href="https://github.com/yourgithub" className="hover:text-blue-500"><Github /></a>
          <a href="https://linkedin.com/in/yourlinkedin" className="hover:text-blue-500"><Linkedin /></a>
        </div>
      </section>

      <footer className="py-6 text-center text-sm bg-gray-200 dark:bg-gray-700">
        © {new Date().getFullYear()} Rishabh Gupta — All Rights Reserved.
      </footer>
    </div>
  );
}
