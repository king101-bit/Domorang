import { FaXTwitter } from 'react-icons/fa6'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

export function Footer() {
  return (
         <footer className="bg-primary-650 text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Domorang</h2>
              <p className="max-w-xs text-sm leading-relaxed text-white/90">
                Domorang is a proptech platform for people living in Abuja or
                planning to move to Abuja. We help you find real houses for rent
                and connect you with trusted agents and landlords.
              </p>
              <div className="pt-2">
                <p className="text-sm text-white/90">
                  Email:{' '}
                  <a
                    href="mailto:domorahomes@gmail.com"
                    className="text-white transition-colors hover:text-white/80"
                  >
                    domorahomes@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#how-it-works"
                    className="text-sm text-white/90 transition-colors hover:text-white"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#why-us"
                    className="text-sm text-white/90 transition-colors hover:text-white"
                  >
                    Why Us
                  </a>
                </li>
                <li>
                  <a
                    href="#faqs"
                    className="text-sm text-white/90 transition-colors hover:text-white"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://twitter.com/domorang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-white"
                >
                  <FaXTwitter className="h-5 w-5" />
                  <span>X(twitter)</span>
                </a>
                <a
                  href="https://instagram.com/domorang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-white"
                >
                  <FaInstagram className="h-5 w-5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://facebook.com/domorang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-white"
                >
                  <FaFacebook className="h-5 w-5" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 border-t border-white/20 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-center text-sm text-white/90">
                Launching first in Abuja.
              </p>
              <p className="text-center text-sm text-white/90">
                © {new Date().getFullYear()} Domorang. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
  );
}
