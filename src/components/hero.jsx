import HeroPic from '../assests/hero copy.jpg';

const Hero = () => {
  return (
    <section id='hero'
      className="flex justify-center items-center py-24 px-6 text-gray-100 relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${HeroPic})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'scroll',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-800 to-transparent opacity-60"></div>

      {/* Hero Content Section */}
      <div className="z-10 text-center p-5 max-w-4xl">
        <p className="text-3xl mb-4 text-teal-400 font-semibold">
          Welcome to Learn Web Development
        </p>
        <h1 className="text-5xl font-extrabold text-white leading-tight">
          Master HTML, CSS, and JavaScript
        </h1>
        <p className="mt-6 text-gray-200 leading-relaxed text-lg">
          Dive into the world of web development with our comprehensive tutorials. 
          From the basics of HTML and CSS to advanced JavaScript techniques, we guide 
          you through each step with hands-on examples.
        </p>

        {/* Buttons Section */}
        <div className="flex justify-center mt-8 space-x-6">
          <button className="bg-teal-500 text-white px-10 py-3 w-56 rounded-full transition-all hover:bg-teal-400 hover:scale-105 focus:outline-none">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-teal-500 text-teal-500 px-10 py-3 w-56 rounded-full transition-all hover:bg-teal-500 hover:text-white hover:scale-105 focus:outline-none">
            Explore Tutorials
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
