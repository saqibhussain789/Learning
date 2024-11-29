import React from "react";

const Tutorials = () => {
  return (
    <section className="py-20 px-6 text-center">
      <h1 className="text-4xl font-extrabold mb-6">Our Tutorials</h1>
      <p className="text-xl mb-10 text-gray-500">
        Dive into our wide range of tutorials to enhance your web development
        skills. Here are some of the tutorials we offer:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Tutorial 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">HTML Basics</h3>
          <p className="text-lg text-gray-600">
            Learn the fundamental concepts of HTML, including elements, attributes,
            and structure of a webpage.
          </p>
          <a
            href="#"
            className="text-teal-500 hover:text-teal-400 mt-4 inline-block text-lg"
          >
            Read More
          </a>
        </div>

        {/* Tutorial 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">CSS Styling</h3>
          <p className="text-lg text-gray-600">
            Explore the world of CSS to style your webpages. Learn about selectors,
            properties, and advanced techniques like Flexbox and Grid.
          </p>
          <a
            href="#"
            className="text-teal-500 hover:text-teal-400 mt-4 inline-block text-lg"
          >
            Read More
          </a>
        </div>

        {/* Tutorial 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">JavaScript Basics</h3>
          <p className="text-lg text-gray-600">
            Master JavaScript basics such as variables, functions, objects, and
            arrays. Learn how to make your websites interactive.
          </p>
          <a
            href="#"
            className="text-teal-500 hover:text-teal-400 mt-4 inline-block text-lg"
          >
            Read More
          </a>
        </div>

        {/* Tutorial 4 (Dummy Data) */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">Responsive Web Design</h3>
          <p className="text-lg text-gray-600">
            Learn the principles of responsive web design, including media queries
            and mobile-first design.
          </p>
          <a
            href="#"
            className="text-teal-500 hover:text-teal-400 mt-4 inline-block text-lg"
          >
            Read More
          </a>
        </div>

        {/* Tutorial 5 (Dummy Data) */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">Version Control with Git</h3>
          <p className="text-lg text-gray-600">
            Understand the basics of Git, a powerful version control system that
            helps you track changes to your code and collaborate effectively.
          </p>
          <a
            href="#"
            className="text-teal-500 hover:text-teal-400 mt-4 inline-block text-lg"
          >
            Read More
          </a>
        </div>

        {/* Tutorial 6 (Dummy Data) */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-teal-500 mb-4">Intro to Web APIs</h3>
          <p className="text-lg text-gray-600">
            Discover how to work with web APIs to retrieve and interact with
            data from different services and platforms.
          </p>
          <a
            href="#"
            className="text-teal-500 hover:text-teal-400 mt-4 inline-block text-lg"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
