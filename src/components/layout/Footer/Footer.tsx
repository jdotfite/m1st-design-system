import React from 'react';
import logo from '../../../assets/m1st-logo.svg';

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks: Record<string, FooterLink[]> = {
    'Get Started': [
      { label: 'For designers', href: '/get-started/design' },
      { label: 'For developers', href: '/get-started/dev' },
      { label: 'Design resources', href: '/resources/design' },
      { label: 'Development guides', href: '/guides/dev' }
    ],
    'Foundation': [
      { label: 'Colors', href: '/foundation/colors' },
      { label: 'Typography', href: '/foundation/typography' },
      { label: 'Spacing', href: '/foundation/spacing' },
      { label: 'Iconography', href: '/foundation/iconography' }
    ],
    'Components': [
      { label: 'All components', href: '/components' },
      { label: 'Layout', href: '/components/layout' },
      { label: 'Navigation', href: '/components/navigation' },
      { label: 'Forms', href: '/components/forms' }
    ]
  };

  return (
    <footer className="border-t border-neutral-200 pt-12 pb-8 mt-auto">
      <div className="max-w-content mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-10">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="mb-4">
                <img src={logo} alt="M1ST Design System" className="h-10 w-auto block" />
              </div>
              <p className="text-neutral-600 leading-relaxed m-0 max-w-sm">
                M1st design system that provides everything our teams need to build consistent, 
                accessible, and scalable user interfaces.
              </p>
            </div>
          </div>

          <div className="footer-links lg:col-span-2">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h3 className="text-lg text-neutral-900 mb-4 font-semibold">{section}</h3>
                <ul className="list-none m-0 p-0">
                  {links.map((link) => (
                    <li key={link.label} className="mb-2">
                      <a
                        href={link.href}
                        className="inline-flex items-center gap-1 text-neutral-600 no-underline text-sm py-1 transition-colors duration-200 hover:text-red-600"
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                      >
                        {link.label}
                        {link.external && (
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="opacity-60 flex-shrink-0">
                            <path d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4H7.29289L3.14645 8.14645C2.95118 8.34171 2.95118 8.65829 3.14645 8.85355C3.34171 9.04882 3.65829 9.04882 3.85355 8.85355L8 4.70711V8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5V3.5C9 3.22386 8.77614 3 8.5 3H3.5Z" />
                          </svg>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-center flex-wrap gap-4 text-center md:text-left">
            <p className="text-neutral-600 text-sm m-0 opacity-80">
              © {currentYear} M1ST Design System. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-neutral-600 no-underline text-sm transition-colors duration-200 hover:text-red-600">
                Privacy Policy
              </a>
              <a href="/terms" className="text-neutral-600 no-underline text-sm transition-colors duration-200 hover:text-red-600">
                Terms of Service
              </a>
              <a href="/accessibility" className="text-neutral-600 no-underline text-sm transition-colors duration-200 hover:text-red-600">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
