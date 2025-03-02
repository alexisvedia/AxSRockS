import React, { useRef, useState, useEffect } from "react";
import "./TiltedCard.css";

interface TiltedCardProps {
  imageSrc: string;
  altText?: string;
  captionText?: string;
  containerHeight?: string;
  containerWidth?: string;
  imageHeight?: string;
  imageWidth?: string;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  displayOverlayContent?: boolean;
}

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [tooltipStyle, setTooltipStyle] = useState({
    opacity: 0,
    x: 0,
    y: 0,
    rotate: 0,
  });

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    setTransform(
      `perspective(1000px) scale(${scaleOnHover}) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
    );

    if (showTooltip) {
      setTooltipStyle({
        opacity: 1,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        rotate: -rotationX * 0.6,
      });
    }
  }

  function handleMouseLeave() {
    setTransform("perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)");
    setTooltipStyle({
      opacity: 0,
      x: 0,
      y: 0,
      rotate: 0,
    });
  }

  return (
    <figure
      ref={ref}
      className="tilted-card-figure"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="tilted-card-mobile-alert">
          Este efecto no está optimizado para móviles. Revísalo en desktop.
        </div>
      )}

      <div
        className="tilted-card-inner"
        style={{
          width: imageWidth,
          height: imageHeight,
          transform: transform,
          transition: "transform 0.1s ease-out",
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="tilted-card-img"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        />

        {displayOverlayContent && overlayContent && (
          <div className="tilted-card-overlay">{overlayContent}</div>
        )}
      </div>

      {showTooltip && (
        <div
          className="tilted-card-caption"
          style={{
            transform: `translate(${tooltipStyle.x}px, ${tooltipStyle.y}px) rotate(${tooltipStyle.rotate}deg)`,
            opacity: tooltipStyle.opacity,
            transition: "opacity 0.2s ease-out",
          }}
        >
          {captionText}
        </div>
      )}
    </figure>
  );
}
