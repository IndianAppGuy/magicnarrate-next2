'use client';

import React, { useEffect, useRef } from 'react';

interface UniversalVideoPlayerProps {
    src: string;
    title?: string;
    className?: string;
    autoplayOnScroll?: boolean;
}

const UniversalVideoPlayer: React.FC<UniversalVideoPlayerProps> = ({
    src,
    title,
    className,
    autoplayOnScroll = false
}) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        if (!autoplayOnScroll || !iframeRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && iframeRef.current) {
                        // Send play message to iframe
                        iframeRef.current.contentWindow?.postMessage({ method: 'play' }, '*');
                    } else if (iframeRef.current) {
                        // Send pause message to iframe
                        iframeRef.current.contentWindow?.postMessage({ method: 'pause' }, '*');
                    }
                });
            },
            { threshold: 0.5 } // Play when 50% of video is visible
        );

        observer.observe(iframeRef.current);

        return () => {
            observer.disconnect();
        };
    }, [autoplayOnScroll]);

    // Add autoplay parameter to Mux URLs
    const videoSrc = autoplayOnScroll && src.includes('player.mux.com')
        ? `${src}${src.includes('?') ? '&' : '?'}autoplay=true&muted=true`
        : src;

    return (
        <div className={`relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-900 ${className || ''}`}>
            <iframe
                ref={iframeRef}
                className="absolute inset-0 w-full h-full"
                src={videoSrc}
                title={title || 'Video Player'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default UniversalVideoPlayer;
