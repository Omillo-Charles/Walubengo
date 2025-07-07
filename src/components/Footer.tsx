import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Bennyhinn <span className="text-gold-600">Walubengo</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Empowering voices, inspiring leaders, and transforming the next generation through purpose-driven leadership and mentorship.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gold-600 rounded-full flex items-center justify-center hover:bg-gold-dark transition-colors duration-300"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gold-600 rounded-full flex items-center justify-center hover:bg-gold-dark transition-colors duration-300"
              >
                <Youtube size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gold-600 rounded-full flex items-center justify-center hover:bg-gold-dark transition-colors duration-300"
              >
                <MessageCircle size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-600">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-gold-600 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-gold-600 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-gold-600 transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/books"
                  className="text-gray-300 hover:text-gold-600 transition-colors duration-200"
                >
                  Books & Media
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-gold-600 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-600">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gold-600" />
                <span className="text-gray-300 text-sm">hello@bennyhinn.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gold-600" />
                <span className="text-gray-300 text-sm">+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-gold-600" />
                <span className="text-gray-300 text-sm">Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Bennyhinn Walubengo. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-gold-600 transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-gold-600 transition-colors duration-200 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;