import { Play, Bell, HeartPulse } from "lucide-react";

const notifications = [
  {
    title: "Prediction Completed",
    description: "Your Heart Disease report is ready.",
    time: "2 hours ago",
  },
  {
    title: "Health Reminder",
    description: "Drink at least 8 glasses of water today.",
    time: "5 hours ago",
  },
  {
    title: "Medical Check-up",
    description: "Schedule your monthly health check-up.",
    time: "Yesterday",
  },
];

const WelcomeSection = () => {
  return (
    <section className="grid lg:grid-cols-3 gap-6">

      {/* Welcome Banner */}
      <div className="lg:col-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 p-8 text-white shadow-xl">

        {/* Background Circles */}
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/10"></div>
        <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-white/10"></div>

        <div className="relative z-10">

          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
            <HeartPulse size={34} />
          </div>

          <h2 className="text-4xl font-bold mb-4">
            Welcome to Swasthya Rakshak
          </h2>

          <p className="text-blue-100 text-lg leading-8 max-w-2xl">
            AI-powered healthcare platform for predicting diseases,
            tracking reports, and getting personalized health insights
            anytime.
          </p>

          <button className="mt-8 flex items-center gap-3 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg">

            <Play size={18} />

            Start New Prediction

          </button>

        </div>

      </div>

      {/* Notifications */}
      <div className="rounded-3xl bg-white shadow-lg border border-slate-100 p-6">

        <div className="flex items-center gap-3 mb-6">

          <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">

            <Bell className="text-blue-600" size={22} />

          </div>

          <div>

            <h3 className="font-bold text-slate-800">
              Notifications
            </h3>

            <p className="text-sm text-slate-500">
              Recent Updates
            </p>

          </div>

        </div>

        <div className="space-y-5">

          {notifications.map((item, index) => (

            <div
              key={index}
              className="flex gap-3 border-b border-slate-100 pb-4 last:border-none last:pb-0"
            >

              <div className="mt-2 w-2.5 h-2.5 rounded-full bg-blue-600"></div>

              <div>

                <h4 className="font-semibold text-slate-700">
                  {item.title}
                </h4>

                <p className="text-sm text-slate-500 mt-1">
                  {item.description}
                </p>

                <span className="text-xs text-slate-400">
                  {item.time}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default WelcomeSection;