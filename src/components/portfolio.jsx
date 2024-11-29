import React from "react";
import { Link } from "react-router-dom";
import Project1Img from '../assests/Project1.jpg';
import Project2Img from '../assests/Project2.jpg';
import Project3Img from '../assests/Project3.jpg';

export default function Tutorials() {
  return (
    <div id='portfolio' className="bg-teal-50 py-20 max-w-full rounded-lg shadow-lg">
      <div className="text-center mb-12">
        <h1 className="text-4xl text-teal-700 font-semibold tracking-wide">Tutorials</h1>
        <p className="text-lg text-gray-700 mt-4">
          Explore in-depth tutorials to master HTML, CSS, and JavaScript. Start your learning journey today!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {/* HTML Tutorial */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="p-6">
            <img src={Project1Img} alt="HTML Tutorial" className="rounded-md w-full h-64 object-cover mb-4" />
            <div className="uppercase tracking-wide text-sm text-teal-500 font-semibold mb-2">
              HTML Tutorial
            </div>
            <Link to="/tutorials/html" className="block mt-2 text-xl leading-tight font-medium text-teal-600 hover:underline">
              Learn the building blocks of web development.
            </Link>
            <p className="mt-2 text-gray-600">
              A comprehensive tutorial covering HTML tags, structure, and how to create your first webpage.
            </p>
            <Link to="/tutorials/html" className="text-teal-500 hover:underline mt-4 block">
              Read More
            </Link>
          </div>
        </div>

        {/* CSS Tutorial */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="p-6">
            <img src={Project2Img} alt="CSS Tutorial" className="rounded-md w-full h-64 object-cover mb-4" />
            <div className="uppercase tracking-wide text-sm text-teal-500 font-semibold mb-2">
              CSS Tutorial
            </div>
            <Link to="/tutorials/css" className="block mt-2 text-xl leading-tight font-medium text-teal-600 hover:underline">
              Master styling and layout for your websites.
            </Link>
            <p className="mt-2 text-gray-600">
              Dive into CSS basics, from styling text to creating responsive layouts.
            </p>
            <Link to="/tutorials/css" className="text-teal-500 hover:underline mt-4 block">
              Read More
            </Link>
          </div>
        </div>

        {/* JavaScript Tutorial */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="p-6">
            <img src={Project3Img} alt="JavaScript Tutorial" className="rounded-md w-full h-64 object-cover mb-4" />
            <div className="uppercase tracking-wide text-sm text-teal-500 font-semibold mb-2">
              JavaScript Tutorial
            </div>
            <Link to="/tutorials/javascript" className="block mt-2 text-xl leading-tight font-medium text-teal-600 hover:underline">
              Add interactivity to your webpages.
            </Link>
            <p className="mt-2 text-gray-600">
              Learn the fundamentals of JavaScript and how to create dynamic, interactive web pages.
            </p>
            <Link to="/tutorials/javascript" className="text-teal-500 hover:underline mt-4 block">
            Read More
            </Link>
          </div>
          
        </div>
        
      

      </div>
      {/* Explore More Button */}
      <div className='flex text-center mt-12 justify-center'>
        <a
          href='/tutorials' 
          className='bg-teal-600 text-white py-2 px-8 rounded-full hover:bg-teal-500 transition-colors'
        >
          Explore More
        </a>
      </div>
    </div>
  );
}
