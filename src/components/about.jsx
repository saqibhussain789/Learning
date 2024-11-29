import T1 from '../assests/T1.jpg'; 
import T2 from '../assests/T2.jpg'; 
import T3 from '../assests/T3.jpg'; 

export default function About() {
  return (
    <div id="about" className="bg-gray-50 py-20 px-6 lg:px-24">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-teal-600">About Our Learning Web App</h1>
        <p className="text-lg text-gray-700 mt-4">
          A user-friendly platform designed to help students learn HTML, CSS, and JavaScript with interactive tutorials, quizzes, and live coding examples.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-teal-600">Interactive Learning</h2>
          <p className="text-gray-600 mt-4">
            Our app offers step-by-step tutorials and real-time coding practice to make learning HTML, CSS, and JavaScript interactive and engaging.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-teal-600">Quizzes & Challenges</h2>
          <p className="text-gray-600 mt-4">
            Take quizzes and challenges to test your knowledge and reinforce what you've learned in each section.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-teal-600">Code Examples</h2>
          <p className="text-gray-600 mt-4">
            Access a variety of practical examples to understand how HTML, CSS, and JavaScript are applied in real-world projects.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold text-teal-600">Meet the Team</h2>
        <p className="text-lg text-gray-700 mt-4">
          Our dedicated team is committed to creating an enjoyable and educational experience for learners.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex justify-center">
            <img src={T1} alt="Team Member 1" className="w-24 h-24 rounded-full shadow" />
          </div>
          <h3 className="text-center text-xl font-semibold text-teal-600 mt-4">Dilawar Khan</h3>
          <p className="text-center text-gray-600 mt-2">Lead Developer</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex justify-center">
            <img src={T2} alt="Team Member 2" className="w-24 h-24 rounded-full shadow" />
          </div>
          <h3 className="text-center text-xl font-semibold text-teal-600 mt-4">Aqib Hussain</h3>
          <p className="text-center text-gray-600 mt-2">UI/UX Designer</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex justify-center">
            <img src={T3} alt="Team Member 3" className="w-24 h-24 rounded-full shadow" />
          </div>
          <h3 className="text-center text-xl font-semibold text-teal-600 mt-4">Saqib Hussain</h3>
          <p className="text-center text-gray-600 mt-2">Project Manager</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <a
          href="/about"
          className="inline-block bg-teal-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors"
        >
          More...
        </a>
      </div>
    </div>
  );
}
