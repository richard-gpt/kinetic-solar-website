export const routeToFile: Record<string, string> = {
  "/": "home-page.md",
  "/about": "about01.md",
  "/about/factory-direct": "about02.md",
  "/about/markets": "about03.md",
  "/about/team": "about04.md",
  "/products": "prod01.md",
  "/products/wholesale": "prod02.md",
  "/products/panels": "prod03.md",
  "/products/inverters": "prod04.md",
  "/products/batteries": "prod05.md",
  "/products/mounting": "prod06.md",
  "/products/bulk-branding": "prod07.md",
  "/startup": "start01.md",
  "/startup/kits": "start02.md",
  "/startup/branding": "start03.md",
  "/startup/flexible-orders": "start04.md",
  "/startup/support": "start05.md",
  "/consumer": "consum01.md",
  "/consumer/residential": "consum02.md",
  "/consumer/commercial": "consum03.md",
  "/consumer/diy": "consum04.md",
  "/buy": "buy01.md",
  "/buy/wholesalers": "buy02.md",
  "/buy/startups": "buy03.md",
  "/buy/consumers": "buy04.md",
  "/buy/shipping": "buy05.md",
  "/buy/financing": "buy06.md",
  "/markets": "market01.md",
  "/markets/asia": "market02.md",
  "/markets/africa": "market03.md",
  "/markets/latin-america": "market04.md",
  "/markets/case-studies": "market05.md",
  "/resources": "res01.md",
  "/resources/startup-guides": "res02.md",
  "/resources/basics": "res03.md",
  "/resources/installation": "res04.md",
  "/resources/trends": "res05.md",
  "/partner": "partner01.md",
  "/partner/distributors": "partner02.md",
  "/partner/projects": "partner03.md",
  "/partner/investment": "partner04.md",
  "/support": "support01.md",
  "/support/faq": "support02.md",
  "/support/warranty": "support03.md",
  "/support/installation": "support04.md",
  "/contact": "contact01.md",
};

export const navigationItems = [
  {
    title: "About",
    href: "/about",
    items: [
      { title: "Company Overview", href: "/about" },
      { title: "Factory-Direct Advantage", href: "/about/factory-direct" },
      { title: "Our Markets", href: "/about/markets" },
      { title: "Our Team", href: "/about/team" },
    ],
  },
  {
    title: "Products",
    href: "/products",
    items: [
      { title: "Product Overview", href: "/products" },
      { title: "Wholesale Products", href: "/products/wholesale" },
      { title: "Solar Panels", href: "/products/panels" },
      { title: "Inverters", href: "/products/inverters" },
      { title: "Batteries", href: "/products/batteries" },
      { title: "Mounting Systems", href: "/products/mounting" },
      { title: "Bulk & Branding", href: "/products/bulk-branding" },
    ],
  },
  {
    title: "Startup",
    href: "/startup",
    items: [
      { title: "Startup Overview", href: "/startup" },
      { title: "Starter Kits", href: "/startup/kits" },
      { title: "Branding Options", href: "/startup/branding" },
      { title: "Flexible Orders", href: "/startup/flexible-orders" },
      { title: "Startup Support", href: "/startup/support" },
    ],
  },
  {
    title: "Consumer",
    href: "/consumer",
    items: [
      { title: "Consumer Solutions", href: "/consumer" },
      { title: "Residential", href: "/consumer/residential" },
      { title: "Commercial", href: "/consumer/commercial" },
      { title: "DIY Kits", href: "/consumer/diy" },
    ],
  },
  {
    title: "Buy",
    href: "/buy",
    items: [
      { title: "How to Buy", href: "/buy" },
      { title: "For Wholesalers", href: "/buy/wholesalers" },
      { title: "For Startups", href: "/buy/startups" },
      { title: "For Consumers", href: "/buy/consumers" },
      { title: "Shipping", href: "/buy/shipping" },
      { title: "Financing", href: "/buy/financing" },
    ],
  },
  {
    title: "Markets",
    href: "/markets",
    items: [
      { title: "Global Markets", href: "/markets" },
      { title: "Asia", href: "/markets/asia" },
      { title: "Africa", href: "/markets/africa" },
      { title: "Latin America", href: "/markets/latin-america" },
      { title: "Case Studies", href: "/markets/case-studies" },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    items: [
      { title: "Resource Center", href: "/resources" },
      { title: "Startup Guides", href: "/resources/startup-guides" },
      { title: "Solar Basics", href: "/resources/basics" },
      { title: "Installation", href: "/resources/installation" },
      { title: "Industry Trends", href: "/resources/trends" },
    ],
  },
  {
    title: "Partner",
    href: "/partner",
    items: [
      { title: "Partnership Overview", href: "/partner" },
      { title: "Distributors", href: "/partner/distributors" },
      { title: "Projects", href: "/partner/projects" },
      { title: "Investment", href: "/partner/investment" },
    ],
  },
  {
    title: "Support",
    href: "/support",
    items: [
      { title: "Support Center", href: "/support" },
      { title: "FAQ", href: "/support/faq" },
      { title: "Warranty", href: "/support/warranty" },
      { title: "Installation Help", href: "/support/installation" },
    ],
  },
];

export function getAllRoutes(): string[] {
  return Object.keys(routeToFile);
}

export function getBreadcrumbs(path: string): { label: string; href: string }[] {
  const segments = path.split("/").filter(Boolean);
  const breadcrumbs: { label: string; href: string }[] = [
    { label: "Home", href: "/" },
  ];

  let currentPath = "";
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const label = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    breadcrumbs.push({ label, href: currentPath });
  }

  return breadcrumbs;
}
