import { useState } from "react";
import {
  Activity, Brain, ShieldCheck, Zap, Lock, FileText, Globe, Sparkles,
  Compass, Users, Heart, HeartPulse, Eye, Droplet, Stethoscope,
  Code2, Link2, Mail, ArrowRight, CheckCircle2, Quote,
} from "lucide-react";
import LandingNavbar from "../Components/section/LandingNavbar";

 const Aboutpage=()=> {
  const [navOpen, setNavOpen] = useState(false);

  const journey = [
    { year: "2023", title: "Idea Born", desc: "Identified the gap in accessible preliminary health screening.", color: "bg-amber-400" },
    { year: "2024", title: "Research Phase", desc: "Developed ML models for diabetes, heart disease, cancer prediction.", color: "bg-sky-400" },
    { year: "2024", title: "Development", desc: "Built the full-stack platform with React, Node.js, and Flask.", color: "bg-teal-400" },
    { year: "2026", title: "AI Integration", desc: "Integrated AI Health Assistant and Deep Learning modules.", color: "bg-emerald-400" },
    { year: "2027", title: "Launch Ready", desc: "Swasthya Rakshak ready for real-world healthcare impact.", color: "bg-rose-400" },
  ];

  const stats = [
    { value: "4+", label: "Disease Modules" },
    { value: "AI", label: "Health Assistant" },
    { value: "1K+", label: "Users Benefited" },
    { value: "98%", label: "AI Accuracy" },
  ];

  const mvg = [
    { icon: Compass, title: "Mission", color: "from-blue-500 to-blue-600", desc: "To leverage Artificial Intelligence for early disease awareness and empower individuals with accessible healthcare knowledge." },
    { icon: Eye, title: "Vision", color: "from-teal-500 to-emerald-500", desc: "To become a trusted digital platform that promotes preventive healthcare and improves health awareness worldwide." },
    { icon: Sparkles, title: "Goal", color: "from-cyan-500 to-blue-600", desc: "To provide an intelligent, secure, and easy-to-use healthcare platform capable of delivering fast preliminary health assessments and meaningful health guidance." },
  ];

  const benefits = [
    { icon: HeartPulse, title: "Multi-Disease Prediction", desc: "Analyze multiple diseases from one platform — heart disease, diabetes, cancer, and more.", bg: "bg-blue-50", ring: "text-blue-600" },
    { icon: Brain, title: "AI Health Assistant", desc: "Receive intelligent explanations and personalized health guidance powered by AI.", bg: "bg-emerald-50", ring: "text-emerald-600" },
    { icon: Zap, title: "Fast Prediction", desc: "Get accurate preliminary health assessment results within seconds.", bg: "bg-amber-50", ring: "text-amber-600" },
    { icon: Lock, title: "Secure & Private", desc: "Designed with user privacy in mind. Your data stays protected at all times.", bg: "bg-violet-50", ring: "text-violet-600" },
    { icon: FileText, title: "Easy-to-Understand Reports", desc: "Simple visual reports and summaries for better health understanding.", bg: "bg-sky-50", ring: "text-sky-600" },
    { icon: Globe, title: "Accessible Anywhere", desc: "Works seamlessly across desktop, tablet, and mobile devices from anywhere.", bg: "bg-orange-50", ring: "text-orange-600" },
  ];

  const values = [
    { icon: Sparkles, title: "Innovation", desc: "Using Artificial Intelligence to transform and advance modern healthcare.", bg: "bg-amber-50", color: "text-amber-500" },
    { icon: ShieldCheck, title: "Integrity", desc: "Building reliable and trustworthy healthcare solutions you can depend on.", bg: "bg-blue-50", color: "text-blue-500" },
    { icon: Globe, title: "Accessibility", desc: "Making healthcare technology available for everyone, everywhere.", bg: "bg-emerald-50", color: "text-emerald-500" },
    { icon: Users, title: "Empowerment", desc: "Helping users make informed health decisions with confidence and clarity.", bg: "bg-violet-50", color: "text-violet-500" },
  ];

  const highlights = [
    { value: "4+", label: "Disease Prediction Modules" },
    { value: "AI", label: "Health Assistant" },
    { value: "24/7", label: "Accessible Platform" },
    { value: "100%", label: "Responsive Design" },
    { value: "Secure", label: "Health Records" },
    { value: "Modern", label: "Healthcare Experience" },
  ];

  const techStack = {
    Frontend: ["React.js"],
    Backend: ["Node.js", "Express.js", "Flask"],
    Database: ["MongoDB Atlas"],
    "Machine Learning": ["Random Forest", "XGBoost"],
    "Deep Learning": ["CNN"],
    AI: ["AI Health Assistant"],
    "Cloud & DevOps": ["Git & GitHub"],
  };

  const team = [
    { name: "Vivek Kumar", role: "Full Stack Developer & ML Engineer", desc: "Architected the full-stack platform, ML models, and built the AI Health Assistant.", tags: ["React.js", "Node.js", "Python", "Flask", "Deep Learning"], gradient: "from-blue-600 to-indigo-500" },
    { name: "Palak Kumari", role: "Frontend Developer & Documentation", desc: "Designed and built the user interface, responsive design, and managed project documentation.", tags: ["React.js", "UI Design", "Tailwind CSS", "Documentation"], gradient: "from-teal-500 to-emerald-500" },
    { name: "Dr. Rafeeq Ahmad", role: "Project Guide", desc: "Providing technical guidance, project mentorship, and academic supervision throughout the development of Swasthya Rakshak.", tags: ["Research", "Mentorship", "Healthcare AI", "Academic Supervision"], gradient: "from-emerald-600 to-blue-500" },
  ];

  const commitments = [
    { title: "Innovation First", desc: "Continuously leveraging the latest AI technology to improve health predictions." },
    { title: "User-Centric Experience", desc: "Every feature is designed with user needs and ease of use in mind." },
    { title: "Privacy & Security", desc: "We never compromise on the security and confidentiality of patient data." },
    { title: "Continuous Improvement", desc: "Our platform evolves constantly through feedback and research." },
  ];

  const commitmentMeters = [
    { label: "AI Accuracy", value: 98, color: "bg-blue-500" },
    { label: "User Satisfaction", value: 95, color: "bg-emerald-500" },
    { label: "Platform Uptime", value: 100, color: "bg-teal-500" },
    { label: "Privacy Score", value: 100, color: "bg-violet-500" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* NAV */}
     
     <LandingNavbar/>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-14 items-center relative">
          <div>
            <span className="inline-block text-xs font-semibold tracking-wide text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-5">
              AI-Powered Healthcare Platform
            </span>
            <h1 className="text-5xl font-extrabold text-slate-900 leading-tight mb-5">
              About <span className="text-blue-600">Swasthya Rakshak</span>
            </h1>
            <p className="text-lg font-medium text-slate-600 mb-4">
              Empowering preventive healthcare through Artificial Intelligence, Machine Learning, and intelligent health awareness solutions.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Swasthya Rakshak is an AI-powered healthcare platform developed to make preliminary disease screening simple, accessible, and user-friendly. By integrating Machine Learning, Deep Learning, and an intelligent AI Health Assistant, the platform enables users to assess potential health risks for multiple diseases from a single interface. Our goal is to encourage early awareness, informed decision-making, and timely consultation with qualified healthcare professionals.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold px-6 py-3 rounded-full text-sm">
                Explore Features <ArrowRight size={16} />
              </button>
              <button className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 transition-colors text-slate-700 font-semibold px-6 py-3 rounded-full text-sm bg-white">
                View Services
              </button>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-500" /> Secure & Private</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-500" /> AI Powered</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-500" /> Fast Results</span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="absolute -top-8 -right-4 w-56 h-56 bg-blue-200/40 rounded-full blur-3xl" />
            <div className="relative bg-white rounded-2xl shadow-xl border border-slate-100 p-5 max-w-sm ml-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Activity size={16} className="text-blue-600" /> AI Analysis
                </div>
                <span className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                  <CheckCircle2 size={14} className="text-white" />
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-blue-50 rounded-xl p-3">
                  <p className="text-lg font-bold text-slate-900">72 BPM</p>
                  <p className="text-[11px] text-slate-500">Heart Rate</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-3">
                  <p className="text-lg font-bold text-slate-900">98 mg/dL</p>
                  <p className="text-[11px] text-slate-500">Blood Sugar</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 col-span-2 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-900">Normal</p>
                    <p className="text-[11px] text-slate-500">Eye Health</p>
                  </div>
                  <Eye size={18} className="text-slate-400" />
                </div>
              </div>
              <div className="bg-blue-600 rounded-xl p-3 text-white text-xs flex items-start gap-2 mb-4">
                <Brain size={16} className="mt-0.5 shrink-0" />
                <span>AI Health Assistant: Your health looks fine. No immediate concerns.</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center">
                {[
                  { label: "Diabetes", sub: "Low Risk", icon: Droplet, color: "text-blue-500" },
                  { label: "Heart", sub: "Low Risk", icon: Heart, color: "text-rose-500" },
                  { label: "Cancer", sub: "Scan", icon: Stethoscope, color: "text-violet-500" },
                  { label: "Eye", sub: "Healthy", icon: Eye, color: "text-teal-500" },
                ].map((m) => (
                  <div key={m.label} className="bg-slate-50 rounded-lg py-2 px-1">
                    <m.icon size={14} className={`mx-auto mb-1 ${m.color}`} />
                    <p className="text-[10px] font-semibold text-slate-700 leading-tight">{m.label}</p>
                    <p className="text-[9px] text-slate-400 leading-tight">{m.sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-2 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-xs">98%</span>
              <div>
                <p className="text-[11px] font-semibold text-slate-800">AI Analyzing...</p>
                <p className="text-[9px] text-slate-400">Real-time accuracy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR JOURNEY + STORY */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Our Journey</h2>
          <div className="space-y-8 relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-200" />
            {journey.map((j) => (
              <div key={j.title + j.year} className="flex gap-4 relative">
                <span className={`w-3.5 h-3.5 rounded-full ${j.color} ring-4 ring-white mt-1 shrink-0 z-10`} />
                <div>
                  <p className="text-xs font-semibold text-slate-400 mb-0.5">{j.year}</p>
                  <p className="font-bold text-slate-900 text-sm mb-1">{j.title}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{j.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold tracking-wide text-blue-600 uppercase">Our Story</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-2">Built to Bridge the Healthcare Gap</h2>
          <div className="w-14 h-1 bg-blue-600 rounded-full mb-6" />
          <p className="text-slate-500 leading-relaxed mb-4">
            Millions of people delay medical consultation because they lack access to quick, affordable, and easy preliminary health screening. As a result, diseases such as Heart Disease, Diabetes, Breast Cancer, and Eye Disorders are often detected at advanced stages.
          </p>
          <p className="text-slate-500 leading-relaxed mb-4">
            Swasthya Rakshak was created to bridge this gap by bringing Artificial Intelligence into preventive healthcare. The platform combines multiple disease prediction models into one intelligent system, allowing users to receive instant preliminary health assessments while increasing awareness about healthy living.
          </p>
          <p className="text-slate-500 leading-relaxed mb-8">
            Instead of replacing doctors, Swasthya Rakshak serves as an intelligent healthcare companion that encourages users to seek timely professional medical consultation.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-slate-50 rounded-xl p-5 text-center">
                <p className="text-2xl font-extrabold text-slate-900">{s.value}</p>
                <p className="text-xs text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION VISION GOAL */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-wide text-blue-600 uppercase">What We Stand For</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Mission, Vision &amp; Goal</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {mvg.map((m) => (
              <div key={m.title} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center mb-5`}>
                  <m.icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{m.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-wide text-blue-600 uppercase">Benefits</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-3">Why Choose Swasthya Rakshak?</h2>
          <p className="text-slate-500 max-w-xl mx-auto">An intelligent healthcare platform built with precision, care, and cutting-edge AI technology.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className={`${b.bg} rounded-2xl p-6 hover:-translate-y-0.5 transition-transform`}>
              <b.icon size={22} className={`${b.ring} mb-4`} />
              <h3 className="font-bold text-slate-900 mb-1.5">{b.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-wide text-blue-600 uppercase">What Drives Us</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-slate-100 text-center">
                <div className={`w-11 h-11 rounded-full ${v.bg} flex items-center justify-center mx-auto mb-4`}>
                  <v.icon size={20} className={v.color} />
                </div>
                <h3 className="font-bold text-slate-900 mb-1.5">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POWERING SMARTER HEALTHCARE */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-500 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <span className="text-xs font-semibold tracking-wide text-blue-100 uppercase">Platform Highlights</span>
          <h2 className="text-3xl font-bold mt-2 mb-12">Powering Smarter Healthcare</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {highlights.map((h) => (
              <div key={h.label} className="bg-white/10 backdrop-blur rounded-2xl py-6 px-3">
                <p className="text-2xl font-extrabold">{h.value}</p>
                <p className="text-[11px] text-blue-100 mt-1 leading-tight">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-wide text-blue-600 uppercase">Tech Stack</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-3">Technologies We Use</h2>
          <p className="text-slate-500">Built with industry-grade tools and frameworks for maximum performance and reliability.</p>
        </div>
        <div className="space-y-5">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide sm:w-40 sm:text-right shrink-0">{category}</span>
              <div className="flex flex-wrap gap-2">
                {items.map((it) => (
                  <span key={it} className="text-sm font-medium bg-slate-50 border border-slate-200 text-slate-700 px-4 py-1.5 rounded-full">{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-wide text-blue-600 uppercase">The People</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-3">Meet Our Team</h2>
            <p className="text-slate-500">A passionate team of developers and researchers working together to revolutionize preventive healthcare.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {team.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                <div className={`h-24 bg-gradient-to-br ${t.gradient} relative`}>
                  <div className="absolute -bottom-8 left-6 w-16 h-16 rounded-full bg-white p-1">
                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold`}>
                      {t.name.split(" ").map((n) => n[0]).join("").slice(0,2)}
                    </div>
                  </div>
                </div>
                <div className="pt-11 px-6 pb-6">
                  <h3 className="font-bold text-slate-900">{t.name}</h3>
                  <p className="text-xs font-semibold text-blue-600 mb-3">{t.role}</p>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{t.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {t.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-medium bg-slate-50 text-slate-600 px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-3 text-slate-400">
                    <Code2 size={15} className="hover:text-slate-700 cursor-pointer" />
                    <Link2 size={15} className="hover:text-slate-700 cursor-pointer" />
                    <Mail size={15} className="hover:text-slate-700 cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex gap-4">
          <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
            <ShieldCheck size={18} className="text-white" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-1">Medical Disclaimer</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Swasthya Rakshak is developed for educational purposes and preliminary health awareness only. The AI-generated predictions provided by the platform should not be considered a medical diagnosis or a substitute for professional healthcare advice. Users are strongly encouraged to consult qualified medical professionals for accurate diagnosis, treatment, and healthcare decisions.
            </p>
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <span className="text-xs font-semibold tracking-wide text-blue-600 uppercase">Our Commitment</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-5 leading-tight">
            Committed to Smarter Healthcare Through Artificial Intelligence
          </h2>
          <p className="text-slate-500 leading-relaxed mb-8">
            We are committed to making healthcare technology more accessible, reliable, and user-friendly. Our mission is to combine innovation with responsibility, helping individuals understand potential health risks while promoting preventive healthcare and informed decision-making. Swasthya Rakshak continuously evolves to deliver a secure, intelligent, and impactful digital healthcare experience.
          </p>
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold px-6 py-3 rounded-full text-sm mb-10">
            Learn More <ArrowRight size={16} />
          </button>
          <div className="grid sm:grid-cols-2 gap-6">
            {commitments.map((c) => (
              <div key={c.title}>
                <h4 className="font-bold text-slate-900 text-sm mb-1">{c.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-6 relative">
          <span className="absolute -top-3 right-6 bg-emerald-500 text-white text-[11px] font-semibold px-3 py-1 rounded-full">Trusted</span>
          <div className="flex items-center gap-2 mb-6">
            <Heart size={16} className="text-blue-600" />
            <h3 className="font-bold text-slate-900 text-sm">Health Commitment</h3>
            <span className="text-xs text-slate-400 ml-auto">Our Promise to You</span>
          </div>
          <div className="space-y-4">
            {commitmentMeters.map((m) => (
              <div key={m.label}>
                <div className="flex justify-between text-xs font-medium text-slate-600 mb-1.5">
                  <span>{m.label}</span>
                  <span>{m.value}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full ${m.color} rounded-full`} style={{ width: `${m.value}%` }} />
                </div>
              </div>
            ))}
          </div>
          <span className="inline-flex items-center gap-1.5 mt-6 bg-slate-50 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-full">
            <Lock size={12} /> Secure
          </span>
        </div>
      </section>

      {/* QUOTE */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-slate-50 rounded-2xl p-10 text-center border border-slate-100">
          <Quote size={26} className="text-blue-500 mx-auto mb-4" />
          <p className="text-lg font-semibold italic text-slate-800 mb-3">
            "Empowering healthier lives through intelligent technology and informed decisions."
          </p>
          <p className="text-xs font-medium text-slate-400">— Swasthya Rakshak Team</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-teal-400 flex items-center justify-center">
                <HeartPulse size={14} className="text-white" />
              </div>
              <span className="font-bold text-white text-sm">Swasthya Rakshak</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              AI-Powered Healthcare Platform for proactive health awareness and intelligent health guidance.
            </p>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Home</li><li>About Us</li><li>Features</li><li>Services</li><li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Disease Modules</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Heart Disease</li><li>Diabetes</li><li>Breast Cancer</li><li>Eye Disorders</li><li>AI Assistant</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>support@swasthyarakshak.in</li>
              <li>www.swasthyarakshak.in</li>
              <li>India</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-slate-800 text-[11px] text-slate-500 flex flex-col sm:flex-row justify-between gap-2">
          <span>© 2025 Swasthya Rakshak. All rights reserved.</span>
          <span>Built with ♥ for better healthcare.</span>
        </div>
      </footer>
    </div>
  );
}

export default Aboutpage
