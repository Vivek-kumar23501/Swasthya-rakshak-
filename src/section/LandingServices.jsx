import { NavLink } from "react-router-dom";
import { Heart, Droplet, Ribbon, Eye, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Heart,
    iconColor: "text-red-500",
    iconBg: "bg-red-50",
    title: "Heart Disease",
    description:
      "Predict cardiovascular risk using clinical parameters.",
    link: "/predict/heart-disease",
  },
  {
    icon: Droplet,
    iconColor: "text-cyan-500",
    iconBg: "bg-cyan-50",
    title: "Diabetes",
    description: "Assess your diabetes risk with glucose & BMI data.",
    link: "/predict/diabetes",
  },
  {
    icon: Ribbon,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
    title: "Breast Cancer",
    description:
      "Early screening using tissue measurement data.",
    link: "/predict/breast-cancer",
  },
  {
    icon: Eye,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
    title: "Eye Disease",
    description: "Detect diabetic retinopathy via retinal image upload.",
    link: "/predict/eye-disease",
  },
];

const LandingServices = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-blue-600 tracking-wide mb-2">
            Our Services
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            AI-Powered Disease Prediction
          </h2>

          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Select any module below to check your health risk in under 2 minutes.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition duration-300"
              >
                <div
                  className={`w-10 h-10 rounded-full ${service.iconBg} flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-5 h-5 ${service.iconColor}`} />
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-xs text-gray-500 mb-5 leading-relaxed">
                  {service.description}
                </p>

                <NavLink to={service.link}>
                  <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-blue-600 text-blue-600 text-xs font-medium hover:bg-blue-600 hover:text-white transition duration-300">
                    Start Prediction
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LandingServices