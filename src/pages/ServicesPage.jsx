import {
  HeartPulse, Droplet, Microscope, Eye, Brain, ShieldCheck,
  FileText, ArrowRight, CheckCircle2,
  Upload, Sparkles, Clock, MonitorSmartphone, Mail,
} from "lucide-react";
import LandingNavbar from "../section/LandingNavbar";

const  ServicesPage=()=> {
  const previewModules = [
    { label: "Heart", bg: "bg-rose-50", text: "text-rose-500" },
    { label: "Diabetes", bg: "bg-blue-50", text: "text-blue-500" },
    { label: "Cancer", bg: "bg-violet-50", text: "text-violet-500" },
    { label: "Eyes", bg: "bg-emerald-50", text: "text-emerald-500" },
  ];

  const services = [
    {
      title: "Heart Disease Prediction",
      desc: "Advanced AI model for preliminary heart disease risk assessment using clinical health metrics.",
      points: ["Fast Prediction", "Clinical Data Analysis", "Risk Assessment"],
      gradient: "from-red-500 to-orange-400",
      btn: "bg-red-500 hover:bg-red-600",
      cta: "Start Prediction",
      icon: HeartPulse,
    },
    {
      title: "Diabetes Prediction",
      desc: "Intelligent machine learning model for early diabetes risk detection and health insights.",
      points: ["Blood Sugar Analysis", "Risk Prediction", "Health Insights"],
      gradient: "from-sky-500 to-blue-500",
      btn: "bg-blue-500 hover:bg-blue-600",
      cta: "Start Prediction",
      icon: Droplet,
    },
    {
      title: "Breast Cancer Prediction",
      desc: "AI-powered early detection support using tumor risk analysis and predictive modeling.",
      points: ["Tumor Risk Prediction", "AI Analysis", "Early Awareness"],
      gradient: "from-fuchsia-500 to-purple-500",
      btn: "bg-fuchsia-500 hover:bg-fuchsia-600",
      cta: "Start Prediction",
      icon: Microscope,
    },
    {
      title: "Eye Disease Detection",
      desc: "CNN-based deep learning model for analyzing eye images and detecting potential abnormalities.",
      points: ["Upload Eye Image", "CNN-Based Detection", "Instant Analysis"],
      gradient: "from-emerald-500 to-teal-500",
      btn: "bg-emerald-500 hover:bg-emerald-600",
      cta: "Upload Image",
      icon: Eye,
    },
  ];

  const whyServices = [
    { title: "AI-Powered Analysis", desc: "Advanced algorithms provide accurate preliminary health assessments.", bg: "bg-blue-50" },
    { title: "Fast & Accurate Results", desc: "Get comprehensive health insights within seconds.", bg: "bg-cyan-50" },
    { title: "Secure Health Data", desc: "Your personal health information is encrypted and protected.", bg: "bg-violet-50" },
    { title: "Easy-to-Use Interface", desc: "Intuitive design accessible to users of all tech levels.", bg: "bg-pink-50" },
    { title: "Multi-Disease Platform", desc: "Analyze multiple health conditions from one platform.", bg: "bg-emerald-50" },
    { title: "Accessible Anytime", desc: "Works seamlessly on desktop, tablet, and mobile devices.", bg: "bg-amber-50" },
  ];

  const workflow = [
    { title: "Select a Disease", desc: "Choose from multiple disease screening options." },
    { title: "Enter Details or Upload", desc: "Provide health data or upload medical image." },
    { title: "AI Model Analysis", desc: "Advanced ML algorithms process your data." },
    { title: "View Prediction", desc: "Get instant preliminary assessment results." },
    { title: "Get AI Guidance", desc: "Receive personalized health recommendations." },
  ];

  const keyBenefits = [
    { icon: Sparkles, title: "Early Health Awareness", desc: "Detect potential health risks before they become serious." },
    { icon: Clock, title: "Time Saving", desc: "Get preliminary assessments instantly without waiting." },
    { icon: ShieldCheck, title: "Secure Platform", desc: "Your health data is encrypted and protected always." },
    { icon: FileText, title: "Easy-to-Understand Reports", desc: "Clear visual reports anyone can comprehend easily." },
    { icon: Brain, title: "AI Health Assistant", desc: "Get intelligent personalized health guidance anytime." },
    { icon: MonitorSmartphone, title: "All Devices", desc: "Works perfectly on desktop, tablet, and mobile." },
  ];

  const techStack = {
    Frontend: [{ n: "React.js", c: "text-cyan-600 bg-cyan-50" }],
    Backend: [{ n: "Node.js", c: "text-emerald-600 bg-emerald-50" }, { n: "Flask", c: "text-amber-600 bg-amber-50" }],
    Database: [{ n: "MongoDB", c: "text-emerald-600 bg-emerald-50" }],
    "ML/AI": [
      { n: "Random Forest", c: "text-emerald-600 bg-emerald-50" },
      { n: "XGBoost", c: "text-orange-600 bg-orange-50" },
      { n: "CNN", c: "text-fuchsia-600 bg-fuchsia-50" },
      { n: "AI", c: "text-blue-600 bg-blue-50" },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* NAV */}
     <LandingNavbar/>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-14 items-center relative">
          <div>
            <span className="inline-block text-xs font-semibold tracking-wide text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-5">
              AI Healthcare Services
            </span>
            <p className="text-xs font-bold tracking-widest text-blue-600 mb-2">OUR SERVICES</p>
            <h1 className="text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Smart Healthcare Solutions Powered by Artificial Intelligence
            </h1>
            <p className="text-slate-500 leading-relaxed mb-4">
              Explore our AI-powered healthcare services designed to provide quick preliminary health assessments, improve disease awareness, and encourage timely medical consultation.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Swasthya Rakshak combines advanced Machine Learning and Deep Learning technologies into one intelligent healthcare platform. Access multiple disease prediction modules, get instant AI-powered health insights, and take charge of your preventive healthcare journey.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold px-6 py-3 rounded-full text-sm">
                Explore All Services <ArrowRight size={16} />
              </button>
              <button className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 transition-colors text-slate-700 font-semibold px-6 py-3 rounded-full text-sm bg-white">
                Book a Demo
              </button>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-500" /> Fast Results</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-500" /> 100% Private</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-500" /> AI Verified</span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="absolute -top-8 -right-4 w-56 h-56 bg-blue-200/40 rounded-full blur-3xl" />
            <div className="absolute -top-6 left-2 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-2 z-10">
              <p className="text-[11px] font-bold text-slate-800">Fast AI</p>
              <p className="text-[10px] text-slate-400">Seconds</p>
            </div>
            <div className="relative bg-white rounded-2xl shadow-xl border border-slate-100 p-6 max-w-sm ml-auto">
              <div className="text-center mb-5">
                <h3 className="font-bold text-slate-900 text-sm">Our Healthcare Services</h3>
                <p className="text-[11px] text-slate-400">AI-Powered Preliminary Screening</p>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {previewModules.map((m) => (
                  <div key={m.label} className={`${m.bg} rounded-xl py-6 text-center`}>
                    <p className={`text-sm font-semibold ${m.text}`}>{m.label}</p>
                  </div>
                ))}
              </div>
              <div className="bg-blue-600 rounded-xl p-3 text-white flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Brain size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold">AI Health Assistant</p>
                  <p className="text-[10px] text-blue-100">Get instant health guidance</p>
                </div>
              </div>
              <div className="h-9 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-400" />
            </div>
            <div className="absolute -bottom-4 -right-2 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-2">
              <p className="text-[11px] font-bold text-slate-800">Premium UI</p>
              <p className="text-[10px] text-emerald-500">Easy Use</p>
            </div>
          </div>
        </div>
      </section>

      {/* AVAILABLE SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-wide text-blue-600 uppercase">Available Services</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-3">Our Healthcare Services</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Each service is powered by advanced AI and machine learning algorithms trained on diverse datasets for accurate preliminary health assessments.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
              <div className={`h-28 bg-gradient-to-br ${s.gradient} flex items-center justify-center`}>
                <s.icon size={34} className="text-white/90" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1.5 mb-6 flex-1">
                  {s.points.map((p) => (
                    <li key={p} className="text-xs text-slate-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
                <button className={`${s.btn} transition-colors text-white text-sm font-semibold py-2.5 rounded-full flex items-center justify-center gap-2`}>
                  {s.cta === "Upload Image" && <Upload size={14} />} {s.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE OUR SERVICES */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-wide text-blue-600 uppercase">Why Choose Us</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Why Choose Our Services?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyServices.map((w) => (
              <div key={w.title} className={`${w.bg} rounded-2xl p-6`}>
                <h3 className="font-bold text-slate-900 mb-1.5">{w.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE WORKFLOW */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-wide text-blue-600 uppercase">How It Works</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-3">Service Workflow</h2>
          <p className="text-slate-500">Simple, secure, and intelligent health screening in just five steps.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 sm:gap-4 mb-10">
          {workflow.map((w, i) => (
            <div key={w.title} className="text-center relative">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center mx-auto mb-4">
                {i + 1}
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1.5">{w.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{w.desc}</p>
              {i < workflow.length - 1 && (
                <span className="hidden sm:block absolute top-5 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] text-blue-300 text-lg">→</span>
              )}
            </div>
          ))}
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center max-w-3xl mx-auto">
          <p className="text-sm text-slate-700">
            <span className="font-bold">Each step is designed for clarity and ease.</span> No medical expertise required. Our AI handles the complexity. You get the insights.
          </p>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-wide text-blue-600 uppercase">Key Benefits</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Why Use Swasthya Rakshak?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyBenefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-6 border border-slate-100">
                <b.icon size={20} className="text-blue-600 mb-4" />
                <h3 className="font-bold text-slate-900 mb-1.5">{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-wide text-blue-600 uppercase">Tech Stack</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-3">Technology Highlights</h2>
          <p className="text-slate-500">Built with industry-leading tools and frameworks for performance and reliability.</p>
        </div>
        <div className="space-y-5">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide sm:w-28 sm:text-right shrink-0">{category}</span>
              <div className="flex flex-wrap gap-2">
                {items.map((it) => (
                  <span key={it.n} className={`text-sm font-semibold ${it.c} px-4 py-1.5 rounded-full`}>{it.n}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex gap-4">
          <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
            <ShieldCheck size={18} className="text-white" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-1">Medical Disclaimer</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              This platform provides preliminary AI-assisted health assessments and should not be considered a substitute for professional medical diagnosis. Always consult a qualified healthcare professional for accurate diagnosis, treatment, and healthcare decisions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-24 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Take Control of Your Health?</h2>
        <p className="text-slate-500 mb-8">Start your preliminary health screening today. Get instant AI-powered insights and take the first step toward better preventive healthcare.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold px-7 py-3 rounded-full text-sm">
            Start Screening <ArrowRight size={16} />
          </button>
          <button className="inline-flex items-center gap-2 border border-blue-200 hover:border-blue-300 transition-colors text-blue-600 font-semibold px-7 py-3 rounded-full text-sm bg-white">
            Learn More
          </button>
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
              AI-Powered Healthcare Platform for preliminary health screening and disease awareness.
            </p>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Heart Disease</li><li>Diabetes</li><li>Cancer</li><li>Eye Disease</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>About Us</li><li>Services</li><li>Features</li><li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5"><Mail size={12} /> support@swasthyarakshak.in</li>
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

export default ServicesPage