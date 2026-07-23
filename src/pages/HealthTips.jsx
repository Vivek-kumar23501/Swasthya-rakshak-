import {
  Heart,
  Apple,
  Droplets,
  Dumbbell,
  Moon,
  Smile,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import LandingFooter from "../Components/section/LandingFooter";
import LandingNavbar from "../Components/section/LandingNavbar";

const tips = [
  {
    icon: <Apple size={34} className="text-green-600" />,
    title: "Eat a Balanced Diet",
    description:
      "Include fresh fruits, vegetables, whole grains, and lean proteins in your daily meals.",
  },
  {
    icon: <Droplets size={34} className="text-blue-500" />,
    title: "Stay Hydrated",
    description:
      "Drink at least 8 glasses of water every day to keep your body hydrated and energized.",
  },
  {
    icon: <Dumbbell size={34} className="text-orange-500" />,
    title: "Exercise Daily",
    description:
      "Spend at least 30 minutes walking, running, cycling, or doing any physical activity.",
  },
  {
    icon: <Moon size={34} className="text-indigo-500" />,
    title: "Get Enough Sleep",
    description:
      "Aim for 7–9 hours of quality sleep every night for better mental and physical health.",
  },
  {
    icon: <Smile size={34} className="text-yellow-500" />,
    title: "Manage Stress",
    description:
      "Practice meditation, deep breathing, or yoga to reduce stress and improve mental wellness.",
  },
  {
    icon: <Heart size={34} className="text-red-500" />,
    title: "Regular Health Checkups",
    description:
      "Visit your doctor regularly to monitor your health and detect diseases early.",
  },
];

const HealthTips = () => {
  return (
    <>
    <LandingNavbar/>
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ShieldCheck size={70} className="mx-auto mb-5" />
          <h1 className="text-5xl font-bold mb-4">Health Tips</h1>
          <p className="text-lg max-w-3xl mx-auto text-blue-100">
            Healthy habits today lead to a healthier tomorrow. Follow these
            simple tips to improve your lifestyle and maintain overall wellness.
          </p>
        </div>
      </section>

      {/* Tips Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-5">
                {tip.icon}
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {tip.title}
              </h2>

              <p className="text-gray-600 leading-7">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Stethoscope
            size={60}
            className="mx-auto text-blue-600 mb-5"
          />

          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Prevention is Better Than Cure
          </h2>

          <p className="text-gray-600 leading-8 text-lg">
            A healthy lifestyle, regular medical checkups, balanced nutrition,
            and physical activity can significantly reduce the risk of chronic
            diseases. Take care of your body—it is the only place you have to
            live.
          </p>

          <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </section>
    </div>
    <LandingFooter/>
    </>
  );
};

export default HealthTips;