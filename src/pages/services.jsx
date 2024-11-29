import React from "react";

const servicesData = [
  {
    title: "Machine Learning",
    description: "Leverage AI and data analytics to create intelligent systems.",
    icon: "🤖",
  },
  {
    title: "Graphic Designing",
    description:
      "Craft visually appealing graphics and designs for web and print media.",
    icon: "🎨",
  },
  {
    title: "Web Designing",
    description:
      "Design modern and responsive websites to improve user experience.",
    icon: "💻",
  },
  {
    title: "Mobile App Development",
    description:
      "Build scalable and user-friendly mobile applications for iOS and Android.",
    icon: "📱",
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your online presence with effective digital marketing strategies.",
    icon: "📈",
  },
  {
    title: "Content Writing",
    description:
      "Engage your audience with compelling and SEO-friendly content.",
    icon: "✍️",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 lg:px-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl text-teal-600 font-bold">Our Services</h1>
        <p className="text-lg text-gray-600 mt-4">
          Explore the wide range of services we offer to meet your business and
          personal needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="text-5xl mb-4 text-teal-500">{service.icon}</div>
            <h2 className="text-2xl font-semibold text-teal-700">
              {service.title}
            </h2>
            <p className="text-gray-600 mt-4">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
