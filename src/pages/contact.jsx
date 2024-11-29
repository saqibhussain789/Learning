export default function Contact() {
    return (
      <div id="contact" className="bg-teal-100 py-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl text-teal-700 font-semibold">Contact Us</h1>
          <p className="text-lg text-gray-600 mt-4">
            Have questions or want to get in touch? We’re here to help! Reach out to us using the form below.
          </p>
        </div>
        
        {/* Contact Form Section */}
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
  
        {/* Company Location Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl text-teal-700 font-semibold">Our Location</h2>
          <p className="text-lg text-gray-600 mt-4">
            We are located in the heart of Islamabad, Pakistan. You can reach out to us virtually or visit our office!
          </p>
          
          <div className="mt-8">
            <p className="text-lg text-gray-600">
              <strong>Office Address:</strong> Islamabad, Pakistan
            </p>
            
            {/* Google Map Embed */}
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2644.649404640501!2d73.05584241549356!3d33.684420596522775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df93b80a232473%3A0x27442f8e23d14cf5!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1693291034455!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
  
        {/* Contact Information Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl text-teal-700 font-semibold">Get In Touch</h2>
          <p className="text-lg text-gray-600 mt-4">
            Here’s how you can get in touch with us:
          </p>
  
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Phone Number */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-teal-600">Phone</h3>
              <p className="text-gray-600 mt-4">
                <strong>Call Us:</strong> +92-XXXX-XXXXXX
              </p>
            </div>
  
            {/* Email */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-teal-600">Email</h3>
              <p className="text-gray-600 mt-4">
                <strong>Email Us:</strong> info@techviewsolutions.com
              </p>
            </div>
  
           {/* Social Media */}
<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
  <h3 className="text-2xl font-semibold text-teal-600">Follow Us</h3>
  <div className="flex justify-center mt-4 space-x-6">
    <a
      href="https://www.facebook.com/TechViewSolutions"
      target="_blank"
      rel="noopener noreferrer"
      className="text-teal-600 hover:text-teal-800"
    >
      <i className="fab fa-facebook fa-2x"></i>
    </a>
    <a
      href="https://www.twitter.com/TechViewSolutions"
      target="_blank"
      rel="noopener noreferrer"
      className="text-teal-600 hover:text-teal-800"
    >
      <i className="fab fa-twitter fa-2x"></i>
    </a>
    <a
      href="https://www.linkedin.com/company/techviewsolutions"
      target="_blank"
      rel="noopener noreferrer"
      className="text-teal-600 hover:text-teal-800"
    >
      <i className="fab fa-linkedin fa-2x"></i>
    </a>
    <a
      href="https://www.instagram.com/TechViewSolutions"
      target="_blank"
      rel="noopener noreferrer"
      className="text-teal-600 hover:text-teal-800"
    >
      <i className="fab fa-instagram fa-2x"></i>
    </a>
  </div>
</div>

          </div>
        </div>
      </div>
    );
  }
  