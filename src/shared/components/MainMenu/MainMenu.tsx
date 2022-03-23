import React, { FC, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { MainMenuProps } from './types';

const MainMenu: FC<MainMenuProps> = ({ notTransparent }) => {
  const [isSticky, setPosition] = useState(false);
  const ref = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    if (!notTransparent) {
      const observer = new IntersectionObserver(
        ([e]) => {
          if (e.intersectionRatio < 1) {
            setPosition(true);
          } else {
            setPosition(false);
          }
        },
        { threshold: [1] },
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
    setPosition(true);
    return () => {};
  }, []);

  return (
    <header
      ref={ref}
      className={clsx('sticky right-0 left-0 z-20 h-0')}
      style={{ top: -1 }}
    >
      <div
        className={clsx(
          isSticky ? 'bg-white shadow-lg' : 'bg-transparent',
          'transition-all ease-in',
        )}
      >
        <div className="container py-16 flex justify-between items-center">
          <Link href="/">
            <a href="/">
              <h1
                className={clsx(
                  'text-3xl font-smooch',
                  isSticky ? 'text-black' : 'text-white',
                )}
              >
                JianPing
              </h1>
            </a>
          </Link>
          <div className="flex items-center">
            <Link href="/gallery">
              <a
                href="/gallery"
                className={clsx(
                  'font-noto mx-16 hover:font-bold',
                  isSticky ? 'text-black' : 'text-white',
                )}
              >
                Gallery
              </a>
            </Link>
            <Link href="/about">
              <a
                href="/about"
                className={clsx(
                  'font-noto mx-16 hover:font-bold',
                  isSticky ? 'text-black' : 'text-white',
                )}
              >
                About
              </a>
            </Link>
            <Link href="/contact">
              <a
                href="/contact"
                className={clsx(
                  'font-noto mx-16 hover:font-bold',
                  isSticky ? 'text-black' : 'text-white',
                )}
              >
                Contact
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainMenu;
