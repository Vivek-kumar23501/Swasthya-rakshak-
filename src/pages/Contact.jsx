import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  HeartPulse,
} from "lucide-react";
import LandingFooter from "../Components/section/Landingfooter";
import LandingNavbar from "../Components/section/LandingNavbar";

const Contact = () => {
  return (
    <>
    <LandingNavbar/>
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">

          <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-5">
            <HeartPulse className="w-10 h-10 text-blue-600" />
          </div>

          <h1 className="text-4xl font-bold text-slate-900">
            Contact Us
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We'd love to hear from you. Have questions, suggestions,
            or need help? Reach out to our team and we'll get back
            to you as soon as possible.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}

          <div className="space-y-6">

            <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-4 items-start">

              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                <Mail className="text-blue-600" />
              </div>

              <div>
                <h3 className="font-bold text-lg text-slate-800">
                  Email Us
                </h3>

                <p className="text-gray-600 mt-1">
                  support@swasthyarakshak.com
                </p>

                <p className="text-gray-600">
                  contact@swasthyarakshak.com
                </p>

              </div>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-4 items-start">

              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">
                <Phone className="text-green-600" />
              </div>

              <div>
                <h3 className="font-bold text-lg text-slate-800">
                  Call Us
                </h3>

                <p className="text-gray-600 mt-1">
                  +91 98765 43210
                </p>

                <p className="text-gray-600">
                  +91 91234 56789
                </p>

              </div>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-4 items-start">

              <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center">
                <MapPin className="text-red-500" />
              </div>

              <div>
                <h3 className="font-bold text-lg text-slate-800">
                  Address
                </h3>

                <p className="text-gray-600 mt-1">
                  Government Engineering College,
                </p>

                <p className="text-gray-600">
                  Bettiah, Bihar, India
                </p>

              </div>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-4 items-start">

              <div className="w-14 h-14 rounded-xl bg-yellow-100 flex items-center justify-center">
                <Clock className="text-yellow-600" />
              </div>

              <div>
                <h3 className="font-bold text-lg text-slate-800">
                  Working Hours
                </h3>

                <p className="text-gray-600 mt-1">
                  Monday - Friday
                </p>

                <p className="text-gray-600">
                  9:00 AM - 6:00 PM
                </p>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Send us a Message
            </h2>

            <form className="space-y-5">

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:shadow-xl transition"
              >
                <Send size={18} />
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/* Bottom Banner */}

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-center text-white">

          <h2 className="text-3xl font-bold mb-3">
            Your Health, Our Priority ❤️
          </h2>

          <p className="text-blue-100 max-w-2xl mx-auto">
            Swasthya Rakshak is committed to providing secure, AI-powered
            healthcare solutions to help you make informed health decisions.
          </p>

        </div>

      </div>
    </section>
    <LandingFooter/>
    </>
  );
};

export default Contact;