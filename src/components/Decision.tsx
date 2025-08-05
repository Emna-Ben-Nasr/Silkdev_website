import React, { useState } from "react";

const Decision = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const options = [
    {
      id: "finance",
      label: "Finance",
      title: "Financial Solutions",
      description: "We help businesses optimize their financial operations with custom software solutions.",
      features: ["Accounting Systems", "Payment Processing", "Financial Analytics", "Budget Management"],
      cta: "Explore Finance Solutions",
      link: "/finance-solutions"
    },
    {
      id: "education",
      label: "Education",
      title: "Educational Technology",
      description: "Transform learning experiences with innovative educational software and platforms.",
      features: ["Learning Management Systems", "Student Portals", "Assessment Tools", "Virtual Classrooms"],
      cta: "Discover Education Tech",
      link: "/education-solutions"
    },
    {
      id: "collaboration",
      label: "Collaboration Tool",
      title: "Team Collaboration",
      description: "Enhance team productivity with custom collaboration and project management tools.",
      features: ["Project Management", "Team Communication", "File Sharing", "Task Tracking"],
      cta: "Build Better Teams",
      link: "/collaboration-solutions"
    },
    {
      id: "web-development",
      label: "Web Development",
      title: "Web Solutions",
      description: "Create stunning, responsive websites and web applications that drive results.",
      features: ["Custom Websites", "E-commerce Platforms", "Web Applications", "API Development"],
      cta: "Start Your Web Project",
      link: "/web-development"
    },
    {
      id: "other",
      label: "Other",
      title: "Contact Us",
      description: "Have a unique project or need something different? Let's discuss your requirements.",
      features: ["Custom Solutions", "Consultation", "Project Planning", "Technical Support"],
      cta: "Get in Touch",
      link: "#contact"
    }
  ];

  const handleOptionChange = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleContactFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission (API call, etc.)
    setFormSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  const selectedOptionData = options.find(option => option.id === selectedOption);

  return (
    <section className="py-16 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How can we help?
            </h2>
            <p className="text-gray-300 text-lg">
              Choose the area where you need assistance and we'll guide you to the right solution.
            </p>
          </div>

          {/* Radio Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {options.map((option) => (
              <label
                key={option.id}
                className={`relative flex items-center p-4 cursor-pointer rounded-lg border-2 transition-all duration-200 ${
                  selectedOption === option.id
                    ? "border-[#01737d] bg-[#01737d]/10"
                    : "border-gray-600 bg-gray-800/50 hover:border-gray-500"
                }`}
              >
                <input
                  type="radio"
                  name="service-option"
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={() => handleOptionChange(option.id)}
                  className="sr-only"
                />
                <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                  selectedOption === option.id
                    ? "border-[#01737d] bg-[#01737d]"
                    : "border-gray-400"
                }`}>
                  {selectedOption === option.id && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="text-white font-medium">{option.label}</span>
              </label>
            ))}
          </div>

          {/* Guidance Card or Contact Form */}
          {selectedOptionData && selectedOptionData.id !== "other" && (
            <div className="bg-white rounded-lg shadow-xl p-8 transform transition-all duration-300 animate-in slide-in-from-bottom-4">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedOptionData.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {selectedOptionData.description}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {selectedOptionData.features.map((feature, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-[#01737d] rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a
                  href={selectedOptionData.link}
                  className="inline-flex items-center px-6 py-3 bg-[#01737d] hover:bg-[#015a63] text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  {selectedOptionData.cta}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          )}

          {/* Custom Contact Form for "Other" option */}
          {selectedOptionData && selectedOptionData.id === "other" && (
            <div className="bg-white rounded-lg shadow-xl p-8 transform transition-all duration-300 animate-in slide-in-from-bottom-4">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedOptionData.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {selectedOptionData.description}
                </p>
              </div>
              
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Thank you!</h4>
                  <p className="text-gray-600">We've received your message and will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleContactFormSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#01737d] focus:border-[#01737d] transition-colors duration-200 placeholder-gray-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#01737d] focus:border-[#01737d] transition-colors duration-200 placeholder-gray-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactFormChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#01737d] focus:border-[#01737d] transition-colors duration-200 resize-none placeholder-gray-300"
                      placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    />
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-flex items-center px-8 py-3 bg-[#01737d] hover:bg-[#015a63] text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                      Send Message
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* Placeholder when no option is selected */}
          {!selectedOption && (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-gray-400 text-lg">
                Select an option above to see how we can help you
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Decision;
