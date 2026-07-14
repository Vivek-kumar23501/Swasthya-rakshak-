import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    quote:
      "Swasthya Rakshak detected my diabetes risk early. I visited my doctor and got proper treatment in time!",
    name: "Priya Sharma",
    role: "Diabetes Patient",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    rating: 5,
    quote:
      "The heart disease module gave me a detailed risk analysis. The AI guidance was spot-on and easy to follow.",
    name: "Arjun Mehta",
    role: "Fitness Enthusiast",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    rating: 5,
    quote:
      "I recommend this platform to my patients for awareness. The predictions are medically sensible and well-presented.",
    name: "Dr. Sneha Rao",
    role: "General Physician",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-blue-600 tracking-wide mb-2">
            Testimonials
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            What Our Users Say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                "{item.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;