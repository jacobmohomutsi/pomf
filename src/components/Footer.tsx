import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                <img 
                  src="/pomf-logo.jpg" 
                  alt="POMF Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-accent">POMF</h3>
                <p className="text-xs text-primary-foreground/70">Prince Otlotleng Mamogale</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Building the Future through Education and Leadership
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="hover:text-accent transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-accent transition-colors">About</a>
                </Link>
              </li>
              <li>
                <Link href="/programs">
                  <a className="hover:text-accent transition-colors">Programs</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-accent transition-colors">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold mb-4">Our Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>Education Support</li>
              <li>Youth Leadership</li>
              <li>Digital Literacy</li>
              <li>Community Welfare</li>
              <li>Arts & Culture</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm mb-2">
              <strong>Email:</strong>
              <br />
              <a href="mailto:info@pomf.org.za" className="hover:text-accent transition-colors">
                info@pomf.org.za
              </a>
            </p>
            <p className="text-sm">
              <strong>Website:</strong>
              <br />
              www.pomf.org.za
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          {/* Access Group Info */}
          <div className="mb-6 text-sm text-primary-foreground/80">
            <p className="mb-2">
              <strong>Managed by:</strong> The Access Group (Pty) Ltd
            </p>
            <p>
              <a href="mailto:info@theaccessgroup.co.za" className="hover:text-accent transition-colors">
                info@theaccessgroup.co.za
              </a>
              {" | "}
              <a href="https://www.theaccessgroup.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                www.theaccessgroup.co.za
              </a>
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-primary-foreground/60">
            <p>
              © {currentYear} Prince Otlotleng Mamogale Foundation. All rights reserved.
            </p>
            <p className="mt-2 text-xs">
              Go Aga Bokamoso ka Thuto le Boetapele - Building the Future through Education and Leadership
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
