import {
  ClipboardList,
  FileEdit,
  Cpu,
  BarChart3,
  Compass,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Choose Disease",
    description: "Select from Heart, Diabetes, Cancer or Eye modules.",
  },
  {
    number: "02",
    icon: FileEdit,
    title: "Enter Details",
    description: "Fill in your health parameters or upload an image.",
  },
  {
    number: "03",
    icon: Cpu,
    title: "AI Analysis",
    description: "Our ML model processes your data instantly.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "View Prediction",
    description: "See your risk level with a detailed report.",
  },
  {
    number: "05",
    icon: Compass,
    title: "Get Guidance",
    description: "Receive personalized health tips and next steps.",
  },
];

const Howitwork = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-xs sm:text-sm font-semibold text-emerald-500 uppercase tracking-wider mb-2">
            Simple Process
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            How It Works
          </h2>

          <p className="text-sm text-gray-500">
            Get your AI health prediction in 5 easy steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row items-center md:items-center justify-between gap-10 md:gap-0">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 border-t-2 border-dashed border-gray-200 -z-10"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center text-center flex-1 px-3"
              >
                {/* Icon */}
                <div className="relative mb-4">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border-2 border-blue-500 bg-white flex items-center justify-center">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>

                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 max-w-[220px] mx-auto leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Howitwork;