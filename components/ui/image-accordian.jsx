"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const ImageAccordion = ({ images }) => {
  const [expandedIndex, setExpandedIndex] = useState(1);
  const [imageDimensions, setImageDimensions] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const loadImageDimensions = async () => {
      const dimensions = await Promise.all(
        images.map((image) => {
          return new Promise((resolve) => {
            const img = new window.Image();
            img.src = image.src;
            img.onload = () => {
              resolve({
                width: img.width,
                height: img.height,
                aspectRatio: img.width / img.height,
              });
            };
          });
        })
      );
      setImageDimensions(dimensions);
    };

    loadImageDimensions();
  }, [images]);

  const calculateExpandedHeight = () => {
    if (!containerRef.current || !imageDimensions.length) return 0;

    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;
    const imageAspectRatio = imageDimensions[expandedIndex]?.aspectRatio;

    if (!imageAspectRatio) return containerHeight * 0.7;

    const heightBasedOnWidth = containerWidth / imageAspectRatio;
    const maxExpandedHeight = containerHeight * 0.7;
    return Math.min(heightBasedOnWidth, maxExpandedHeight);
  };

  const getImageHeight = (index) => {
    if (!containerRef.current || !imageDimensions.length) return "0%";

    const containerHeight = containerRef.current.offsetHeight;
    const expandedHeightPx = calculateExpandedHeight();

    if (index === expandedIndex) {
      return `${(expandedHeightPx / containerHeight) * 100}%`;
    } else {
      const remainingHeightPx = containerHeight - expandedHeightPx;
      const collapsedHeight = remainingHeightPx / (images.length - 1);
      return `${(collapsedHeight / containerHeight) * 100}%`;
    }
  };

  return (
    <div ref={containerRef} className="h-full w-full flex flex-col">
      {images.map((image, index) => {
        const isExpanded = index === expandedIndex;
        return (
          <div
            key={index}
            className="relative overflow-hidden cursor-pointer"
            style={{
              height: getImageHeight(index),
              transition: "height 600ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onMouseEnter={() => setExpandedIndex(index)}
          >
            <div className="absolute inset-0">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`
                  transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] grayscale hover:grayscale-0 duration-500 object-cover`}
              />
            </div>
            <div
              className={`
                absolute bottom-0 left-0 right-0 font-bn  
                bg-black/50 backdrop-blur-lg text-white/90 p-4 px-5 
                transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${isExpanded ? "translate-y-0" : "translate-y-full"}
              `}
            >
              <h3 className="text-lg font-semibold">{image.title}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageAccordion;
