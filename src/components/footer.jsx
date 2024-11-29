import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-teal-500 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Footer Top Section: Description and Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-200">
              SyntixDesigner is a comprehensive learning platform that helps students master HTML, CSS, and JavaScript. 
              We provide high-quality tutorials, resources, and a collaborative community to help you grow your web development skills.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#hero" className="text-gray-200 hover:text-teal-200">Home</a></li>
              <li><a href="#about" className="text-gray-200 hover:text-teal-200">About</a></li>
              <li><a href="#services" className="text-gray-200 hover:text-teal-200">Services</a></li>
              <li><a href="#tutorials" className="text-gray-200 hover:text-teal-200">Tutorials</a></li>
              <li><a href="#contact" className="text-gray-200 hover:text-teal-200">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-200 hover:text-teal-200">
                <FaFacebookF /> Facebook
              </a>
              <a href="#" className="text-gray-200 hover:text-teal-200">
                <FaTwitter /> Twitter
              </a>
              <a href="#" className="text-gray-200 hover:text-teal-200">
                <FaLinkedinIn /> LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-200">Email: support@techview.com</p>
            <p className="text-gray-200">Phone: +1 234 567 890</p>
          </div>
        </div>

        {/* Footer Bottom Section: Copyright */}
        <div className="mt-8 text-center">
          <p className="text-gray-200 text-sm">
            Copyright &copy; 2024 TechView Solution. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
