import {
  HeartPulse,
  Droplet,
  Ribbon,
  Eye,
  ArrowRight,
} from "lucide-react";

const assessments = [
  {
    title: "Heart Disease Prediction",
    description:
      "Predict cardiovascular disease using patient medical information.",
    icon: HeartPulse,
    gradient: "from-rose-500 to-red-500",
    button: "Start Prediction",
  },
  {
    title: "Diabetes Prediction",
    description:
      "Check the possibility of diabetes with AI-powered analysis.",
    icon: Droplet,
    gradient: "from-amber-400 to-orange-500",
    button: "Start Prediction",
  },
  {
    title: "Breast Cancer Prediction",
    description:
      "Early breast cancer detection using machine learning models.",
    icon: Ribbon,
    gradient: "from-purple-500 to-violet-600",
    button: "Start Prediction",
  },
  {
    title: "Eye Disease Detection",
    description:
      "Detect retinal diseases using deep learning image analysis.",
    icon: Eye,
    gradient: "from-cyan-500 to-blue-600",
    button: "Start Prediction",
  },
];

const AssessmentSection = () => {
  return (
    <section>

      {/* Heading */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Health Assessments
          </h2>

          <p className="text-slate-500 mt-1">
            Choose a prediction model to begin your health assessment.
          </p>

        </div>

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {assessments.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >

              {/* Top Gradient */}

              <div
                className={`bg-gradient-to-r ${item.gradient} p-6 text-white`}
              >

                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5">

                  <Icon size={30} />

                </div>

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

              </div>

              {/* Body */}

              <div className="p-6">

                <p className="text-slate-500 text-sm leading-7 mb-8">

                  {item.description}

                </p>

                <button
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white py-3 font-semibold hover:bg-blue-600 transition"
                >

                  {item.button}

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />

                </button>

              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
};

export default AssessmentSection;