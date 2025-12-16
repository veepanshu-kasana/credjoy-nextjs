import Link from "next/link"
import { CreditCard, Mail, Phone, MapPin } from "lucide-react"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-6 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Logo Section */}
        <div className="mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white">
              <CreditCard className="h-5 w-5" />
            </div>
            <span className="text-2xl font-bold">CredJoy</span>
          </div>
          <p className="text-gray-400 mt-3 max-w-sm leading-relaxed text-sm">
            Making credit accessible and transparent for everyone. Your trusted financial partner.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-3">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-primary">Home</Link></li>
              <li><Link href="/loans/personal" className="text-gray-400 hover:text-primary">Personal Loan</Link></li>
              <li><Link href="/loans/home" className="text-gray-400 hover:text-primary">Home Loan</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-primary">About Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-3">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy" className="text-gray-400 hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-primary">FAQ</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-primary">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-3">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/contact" className="text-gray-400 hover:text-primary">Contact Us</Link></li>
              <li><Link href="/help" className="text-gray-400 hover:text-primary">Help Center</Link></li>
              <li><Link href="/status" className="text-gray-400 hover:text-primary">Status Page</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-primary">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-3">Get in Touch</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:support@credjoy.com" className="hover:text-primary">
                  support@credjoy.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:1-800-233-3569" className="hover:text-primary">
                  1-800-CREDJOY
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>123 Financial Street, Gurugram, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-3 mb-3">
          <div className="flex justify-center gap-6 text-gray-400">
            <Link href="#" className="hover:text-primary text-xl">f</Link>
            <Link href="#" className="hover:text-primary text-xl">𝕏</Link>
            <Link href="#" className="hover:text-primary text-xl">in</Link>
            <Link href="#" className="hover:text-primary text-xl">📷</Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-4">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} CredJoy Financial Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;