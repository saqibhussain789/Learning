import T1 from '../assests/T1.jpg'
import T2 from '../assests/T2.jpg'
import T3 from '../assests/T3.jpg'

export default function Services() {
  return (
    <div id='services' className='bg-gradient-to-r from-teal-100 to-teal-300 py-20'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl text-teal-700 font-semibold'>Our Services</h1>
        <p className='text-lg text-gray-600 mt-4'>
          We offer a range of services to help your business grow. Explore our specialties below.
        </p>
      </div>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6'>
        
        {/* Machine Learning Service */}
        <div className='bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow'>
          <div className='flex justify-center'>
            <img src={T1} alt="Machine Learning" className='w-24 h-24 rounded-full shadow-md' />
          </div>
          <h3 className='text-center text-teal-600 text-xl font-semibold mt-4'>Machine Learning</h3>
          <p className='text-center text-gray-700 mt-2'>
            Implement AI-driven solutions to solve real-world problems.
          </p>
        </div>

        {/* Graphic Designing Service */}
        <div className='bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow'>
          <div className='flex justify-center'>
            <img src={T2} alt="Graphic Designing" className='w-24 h-24 rounded-full shadow-md' />
          </div>
          <h3 className='text-center text-teal-600 text-xl font-semibold mt-4'>Graphic Designing</h3>
          <p className='text-center text-gray-700 mt-2'>
            Creative design solutions for branding, marketing, and more.
          </p>
        </div>

        {/* Web Designing Service */}
        <div className='bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow'>
          <div className='flex justify-center'>
            <img src={T3} alt="Web Designing" className='w-24 h-24 rounded-full shadow-md' />
          </div>
          <h3 className='text-center text-teal-600 text-xl font-semibold mt-4'>Web Designing</h3>
          <p className='text-center text-gray-700 mt-2'>
            Create visually appealing, user-friendly websites for your business.
          </p>
        </div>

      </div>

      {/* Explore More Button */}
      <div className='text-center mt-12'>
        <a
          href='/services' // Link to the services page
          className='bg-teal-600 text-white py-2 px-8 rounded-full hover:bg-teal-500 transition-colors'
        >
          Explore More
        </a>
      </div>
    </div>
  );
}
