import React from 'react';

import { footerLinks } from './constants';

const Footer = () => (
  <footer className="bg-black">
    <div className="max-w-container-xl mx-auto px-16 py-32 flex">
      <div className="flex w-full">
        {footerLinks.map(({ label, links }) => (
          <div key={label} className="w-1/4">
            <div className="mb-32">
              <p className="font-noto text-white">{label}</p>
            </div>
            <div className="flex flex-col items-start">
              {links.map(({ label }) => (
                <button
                  key={label}
                  type="button"
                  className="text-white font-noto mb-8"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>hi</div>
    </div>
  </footer>
);

export default Footer;
