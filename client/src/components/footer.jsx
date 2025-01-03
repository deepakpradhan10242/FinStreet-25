import React from 'react';

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-black text-white py-5 px-10 md:px-16 lg:px-32 mt-10 w-full"
    >
      {/* Footer Links */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h5 className="text-lg font-bold mb-2">About Us</h5>
          <ul>
            <li>
              <p>
                Finstreet'25 is back at BIT Mesra, offering a dynamic blend of thrilling events and insightful speaker sessions. Embrace the opportunity to test your skills and engage with industry experts in this enriching financial extravaganza. Don't miss out on the excitement!
              </p>
            </li>
            <li>
              <a href="https://financeclubbitm.in/" className="text-cyan-200 hover:text-lime-200">
                financeclub@bitmesra.ac.in
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-bold mb-2">Useful Links</h5>
          <ul>
            <li>
              <a href="#home" className="text-cyan-200 hover:text-lime-200">Home</a>
            </li>
            <li>
              <a href="#about" className="text-cyan-200 hover:text-lime-200">About</a>
            </li>
            <li>
              <a href="#schedule" className="text-cyan-200 hover:text-lime-200">Schedule</a>
            </li>
            <li>
              <a href="events.html" className="text-cyan-200 hover:text-lime-200">Events</a>
            </li>
            <li>
              <a href="#carousel" className="text-cyan-200 hover:text-lime-200">Highlights</a>
            </li>
            <li>
              <a href="#sponsor" className="text-cyan-200 hover:text-lime-200">Sponsors</a>
            </li>
            <li>
              <a href="#footer" className="text-cyan-200 hover:text-lime-200">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-bold mb-2">Contact Us</h5>
          <ul className="list-disc pl-6 text-left sm:text-left">
            <li>Birla Institute of Technology, Mesra Ranchi 835215, Jharkhand, INDIA</li>
            <li>Ronit Jain - 9340683467</li>
            <li>Deevesh Mishra - 9508284013</li>
            <li>financeclub@bitmesra.ac.in</li>
          </ul>
        </div>
      </section>

      {/* Social Media Buttons */}
      <section className="flex justify-center gap-4 mb-0">
        {/* Facebook Button */}
        <a
          href="https://www.facebook.com/p/Finance-Club-BIT-Mesra-100065447111184/"
          className="flex items-center justify-center w-10 h-10 border-3 border-white rounded-full hover:bg-blue-800 hover:border-yellow-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.793.143v3.24h-1.916c-1.504 0-1.796.715-1.796 1.764v2.313h3.588l-.467 3.622h-3.121V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z"
            />
          </svg>
        </a>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/company/financeclubbit"
          className="flex items-center justify-center w-10 h-10 border-3 border-white rounded-full hover:bg-blue-500 hover:border-yellow-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8.337 20.452H5.837v-9.35h2.5v9.35zM7.087 9.648c-.776 0-1.41-.635-1.41-1.41 0-.776.634-1.41 1.41-1.41s1.41.634 1.41 1.41c0 .775-.634 1.41-1.41 1.41zm13.365 10.804h-2.5v-4.515c0-1.081-.02-2.47-1.505-2.47-1.506 0-1.736 1.176-1.736 2.39v4.595h-2.5v-9.35h2.4v1.276h.033c.334-.633 1.153-1.299 2.374-1.299 2.541 0 3.01 1.672 3.01 3.843v5.53z"
            />
          </svg>
        </a>

        {/* Instagram Button */}
        <a
          href="https://www.instagram.com/financeclub_bitm/"
          className="flex items-center justify-center w-10 h-10 border-3 border-white rounded-full hover:bg-pink-600 hover:border-yellow-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.243 1.308 3.608.058 1.267.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.243 1.246-3.608 1.308-1.267.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.243-1.308-3.608-.058-1.267-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.243-1.246 3.608-1.308 1.267-.058 1.646-.069 4.85-.069m0-2.163C8.755 0 8.343.015 7.052.072c-1.614.07-3.063.334-4.332 1.603C1.466 3.341 1.201 4.79 1.132 6.404.075 9.657.075 14.343 1.132 17.596c.07 1.614.334 3.063 1.603 4.332 1.269 1.269 2.718 1.533 4.332 1.603 1.206.048 1.629.068 4.901.068s3.695-.02 4.901-.068c1.614-.07 3.063-.334 4.332-1.603 1.269-1.269 1.533-2.718 1.603-4.332.048-1.206.068-1.629.068-4.901s-.02-3.695-.068-4.901c-.07-1.614-.334-3.063-1.603-4.332C18.688.334 17.239.07 15.625.072c-1.291-.058-1.703-.072-4.926-.072zm0 5.838a6.162 6.162 0 106.162 6.162 6.165 6.165 0 00-6.162-6.162zm0 10.162a3.998 3.998 0 114-4 4 4 0 01-4 4zm6.406-11.845a1.44 1.44 0 11-1.44-1.44 1.441 1.441 0 011.44 1.44z"
            />
          </svg>
        </a>
      </section>

      {/* Footer Bottom */}
      <div className="bg-black mt-0.1 border-t border-gray-700 pt-4 text-center">
        <p>
          © Copyright:
          <a href="https://financeclubbitm.in/" className="hover:text-cyan-400">
            2025 Finstreet Annual Fest. All rights reserved.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
