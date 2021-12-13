import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

const MainMenu = () => {
  const [isSticky, setPosition] = useState(false);
  const ref = useRef<HTMLHeadElement>(null);

  useEffect(() => {
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
        <div className="p-16 max-w-container-xl mx-auto flex justify-between items-center">
          <h1
            className={clsx(
              'text-3xl font-smooch',
              isSticky ? 'text-black' : 'text-white',
            )}
          >
            Jiangpin
          </h1>
          <div className="flex items-center">
            <button
              type="button"
              className={clsx(
                'font-noto mx-16',
                isSticky ? 'text-black' : 'text-white',
              )}
            >
              Gallery
            </button>
            <button
              type="button"
              className={clsx(
                'font-noto mx-16',
                isSticky ? 'text-black' : 'text-white',
              )}
            >
              Trabajos
            </button>
            <button
              type="button"
              className={clsx(
                'font-noto mx-16',
                isSticky ? 'text-black' : 'text-white',
              )}
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainMenu;
