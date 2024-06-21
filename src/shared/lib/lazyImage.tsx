import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  width: number | string;
  height: number | string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, width, height }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(entry)
          setTimeout(() => {
            setIsVisible(true);
          }, 2000)
          if (imgRef.current) {
            observer.unobserve(imgRef.current);
          }
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : undefined}
      alt={alt}
      width={width}
      height={height}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s',
      }}
    />
  );
};

export default LazyImage;
