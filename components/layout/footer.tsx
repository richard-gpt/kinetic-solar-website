import Link from "next/link";
import { Sun, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  products: [
    { title: "Solar Panels", href: "/products/panels" },
    { title: "Inverters", href: "/products/inverters" },
    { title: "Batteries", href: "/products/batteries" },
    { title: "Mounting Systems", href: "/products/mounting" },
    { title: "Wholesale", href: "/products/wholesale" },
  ],
  solutions: [
    { title: "For Startups", href: "/startup" },
    { title: "For Consumers", href: "/consumer" },
    { title: "For Wholesalers", href: "/buy/wholesalers" },
    { title: "Partner With Us", href: "/partner" },
  ],
  support: [
    { title: "FAQ", href: "/support/faq" },
    { title: "Warranty", href: "/support/warranty" },
    { title: "Installation Help", href: "/support/installation" },
    { title: "Contact Us", href: "/contact" },
  ],
  company: [
    { title: "About Us", href: "/about" },
    { title: "Our Team", href: "/about/team" },
    { title: "Markets", href: "/markets" },
    { title: "Resources", href: "/resources" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Sun className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Kinetic Solar</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Factory-direct solar solutions for global markets. Premium
              wholesale equipment at competitive prices.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Singapore</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+65 6756 8900</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@kineticsolar.com</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Kinetic Solar Solutions Pte. Ltd.
            All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
