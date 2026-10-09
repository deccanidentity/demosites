import React, { useState, useEffect, useRef } from 'react';
import siteConfig from '../data/site.config.js';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  const [pos, setPos] = useState(() => {
    try {
      const saved = localStorage.getItem('di_whatsapp_fab_pos');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed.x === 'number' && typeof parsed.y === 'number') {
          return parsed;
        }
      }
    } catch {}

    // Default position: bottom right corner
    const initX = typeof window !== 'undefined' ? Math.max(16, window.innerWidth - 84) : 320;
    const initY = typeof window !== 'undefined' ? Math.max(16, window.innerHeight - 96) : 600;
    return { x: initX, y: initY };
  });

  const [isDragging, setIsDragging] = useState(false);
  const posRef = useRef(pos);
  useEffect(() => {
    posRef.current = pos;
  }, [pos]);

  const dragMeta = useRef({
    startX: 0,
    startY: 0,
    initialX: 0,
    initialY: 0,
    hasMoved: false,
  });

  // Ensure position stays inside visible viewport on resize
  useEffect(() => {
    const handleResize = () => {
      setPos(prev => {
        const maxX = Math.max(16, window.innerWidth - 76);
        const maxY = Math.max(16, window.innerHeight - 76);
        const clampedX = Math.max(16, Math.min(prev.x, maxX));
        const clampedY = Math.max(16, Math.min(prev.y, maxY));
        return { x: clampedX, y: clampedY };
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePointerDown = (e) => {
    // Only respond to main click or single touch
    if (e.button !== undefined && e.button !== 0) return;

    const clientX = e.clientX ?? e.touches?.[0]?.clientX;
    const clientY = e.clientY ?? e.touches?.[0]?.clientY;
    if (clientX === undefined) return;

    dragMeta.current = {
      startX: clientX,
      startY: clientY,
      initialX: posRef.current.x,
      initialY: posRef.current.y,
      hasMoved: false,
    };

    setIsDragging(true);

    const onPointerMove = (moveEvent) => {
      const curX = moveEvent.clientX ?? moveEvent.touches?.[0]?.clientX;
      const curY = moveEvent.clientY ?? moveEvent.touches?.[0]?.clientY;
      if (curX === undefined) return;

      const dx = curX - dragMeta.current.startX;
      const dy = curY - dragMeta.current.startY;

      // Threshold to distinguish between deliberate drag vs simple tap/click
      if (!dragMeta.current.hasMoved && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
        dragMeta.current.hasMoved = true;
      }

      const maxX = Math.max(16, window.innerWidth - 76);
      const maxY = Math.max(16, window.innerHeight - 76);
      const nextX = Math.max(16, Math.min(maxX, dragMeta.current.initialX + dx));
      const nextY = Math.max(16, Math.min(maxY, dragMeta.current.initialY + dy));

      posRef.current = { x: nextX, y: nextY };
      setPos({ x: nextX, y: nextY });
    };

    const onPointerUp = () => {
      setIsDragging(false);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);

      if (!dragMeta.current.hasMoved) {
        // Simple click/tap: open WhatsApp chat
        window.open(siteConfig.whatsappLink, '_blank', 'noopener,noreferrer');
      } else {
        // Save custom dragged position
        try {
          localStorage.setItem('di_whatsapp_fab_pos', JSON.stringify(posRef.current));
        } catch {}
      }
    };

    window.addEventListener('mousemove', onPointerMove, { passive: false });
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchmove', onPointerMove, { passive: false });
    window.addEventListener('touchend', onPointerUp);
  };

  const isNearRight = typeof window !== 'undefined' ? pos.x > window.innerWidth / 2 : true;

  return (
    <div
      className={`floating-wa ${isDragging ? 'is-dragging' : ''} ${isNearRight ? 'dock-right' : 'dock-left'}`}
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
      onMouseDown={handlePointerDown}
      onTouchStart={handlePointerDown}
      role="button"
      tabIndex={0}
      aria-label="Chat with DeccanIDentity on WhatsApp (Draggable)"
      title="Chat on WhatsApp (Drag to move anywhere)"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          window.open(siteConfig.whatsappLink, '_blank', 'noopener,noreferrer');
        }
      }}
    >
      {/* Dynamic pulse wave ring */}
      <span className="floating-wa__pulse" aria-hidden="true" />

      {/* Official WhatsApp Vector Logo */}
      <svg
        className="floating-wa__icon"
        viewBox="0 0 24 24"
        width="34"
        height="34"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>

      {/* Floating Tooltip Pill */}
      <span className="floating-wa__tooltip">
        <span className="floating-wa__tooltip-dot" />
        WhatsApp
      </span>
    </div>
  );
}
