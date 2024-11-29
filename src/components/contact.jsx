export default function Contact() {
  return (
    <div id="contact" className="bg-teal-100 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl text-teal-700 font-semibold">Contact Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          Have questions or want to get in touch? We’re here to help! Reach out to us using the form below.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto px-6">
        <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <label htmlFor="name" className="text-lg text-gray-600">Full Name</label>
            <input
              id="name"
              type="text"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Your Name"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="text-lg text-gray-600">Email Address</label>
            <input
              id="email"
              type="email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Your Email"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="text-lg text-gray-600">Message</label>
            <textarea
              id="message"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-teal-700 text-white font-semibold rounded-md hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl text-teal-700 font-semibold">Our Location</h2>
        <p className="text-lg text-gray-600 mt-4">
          We are located in the heart of Islamabad, Pakistan. You can reach out to us virtually or visit our office!
        </p>
        
        <div className="mt-8">
          <p className="text-lg text-gray-600">
            <strong>Office Address:</strong> Islamabad, Pakistan
          </p>
        </div>
        {/* Explore More Button */}
      <div className='flex text-center mt-12 justify-center'>
        <a
          href='/contact' 
          className='bg-teal-600 text-white py-2 px-8 rounded-full hover:bg-teal-500 transition-colors'
        >
          For More
        </a>
      </div>

      </div>
    </div>
  );
}
