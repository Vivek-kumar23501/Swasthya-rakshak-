import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import LandingNavbar from "../section/LandingNavbar";
import LandingFooter from "../section/Landingfooter";

const faqs = [
  {
    question: "What is Swasthya Rakshak?",
    answer:
      "Swasthya Rakshak is an AI-powered healthcare platform that predicts diseases like Heart Disease, Diabetes, Breast Cancer, and Eye Disease using Machine Learning models.",
  },
  {
    question: "Are the prediction results accurate?",
    answer:
      "Our models are trained on trusted healthcare datasets. Predictions are for educational purposes and should not replace professional medical advice.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes. We use secure authentication and encrypted communication to keep your personal and medical information safe.",
  },
  {
    question: "Can I upload medical images?",
    answer:
      "Yes. Our Eye Disease module allows you to upload retinal images for AI-based prediction.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "Yes. Creating an account allows you to save prediction history, access reports, and receive personalized health insights.",
  },
  {
    question: "Is this platform free to use?",
    answer:
      "Yes. Swasthya Rakshak is free for educational and research purposes.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <>
    <LandingNavbar/>
        <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-5">
            <HelpCircle className="w-10 h-10 text-blue-600" />
          </div>

          <h1 className="text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Find answers to the most commonly asked questions about
            <span className="font-semibold text-blue-600">
              {" "}Swasthya Rakshak
            </span>
            .
          </p>

        </div>

        {/* FAQ Cards */}
        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition duration-300 hover:shadow-lg"
            >

              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >

                <h3 className="text-lg font-semibold text-slate-800">
                  {faq.question}
                </h3>

                {active === index ? (
                  <ChevronUp className="text-blue-600" />
                ) : (
                  <ChevronDown className="text-blue-600" />
                )}

              </button>

              {active === index && (

                <div className="px-6 pb-5 text-gray-600 leading-7 border-t border-gray-100">
                  <p className="pt-4">{faq.answer}</p>
                </div>

              )}

            </div>

          ))}

        </div>

        {/* Bottom Card */}

        <div className="mt-14 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl text-white p-10 text-center shadow-xl">

          <h2 className="text-2xl font-bold mb-3">
            Still have questions?
          </h2>

          <p className="text-blue-100 mb-6">
            Our support team is always here to help you with your healthcare journey.
          </p>

          <button className="px-8 py-3 rounded-full bg-white text-blue-600 font-semibold hover:bg-gray-100 transition">
            Contact Support
          </button>

        </div>

      </div>
    </section>
    <LandingFooter/>
   </>
  );
};

export default FAQ;