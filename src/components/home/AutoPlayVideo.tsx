'use client';

import { useEffect, useRef } from 'react';

interface HlsConstructor {
    new (): HlsInstance;
    isSupported(): boolean;
}

interface HlsInstance {
    loadSource(src: string): void;
    attachMedia(element: HTMLVideoElement): void;
    destroy(): void;
}

interface WindowWithHls extends Window {
    Hls?: HlsConstructor;
}

interface AutoPlayVideoProps {
    src: string;
}

export default function AutoPlayVideo({ src }: AutoPlayVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let hlsInstance: HlsInstance | null = null;

        // Load HLS.js for browsers that don't support HLS natively
        if (src.includes('.m3u8')) {
            if (video.canPlayType('application/vnd.apple.mpegurl')) {
                // Native HLS support (Safari)
                video.src = src;
            } else {
                const windowWithHls = window as WindowWithHls;
                if (windowWithHls.Hls && windowWithHls.Hls.isSupported()) {
                    // Use HLS.js for other browsers
                    hlsInstance = new windowWithHls.Hls();
                    hlsInstance.loadSource(src);
                    hlsInstance.attachMedia(video);
                }
            }
        } else {
            video.src = src;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        video.play().catch((err: Error) => console.log('Auto-play prevented:', err));
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.5 } // Play when 50% of video is visible
        );

        observer.observe(video);

        return () => {
            observer.disconnect();
            if (hlsInstance) {
                hlsInstance.destroy();
            }
        };
    }, [src]);

    return (
        <div className="w-full max-w-4xl mx-auto rounded-md overflow-hidden border border-gray-200 bg-black aspect-video">
            <video
                ref={videoRef}
                className="w-full h-full object-contain"
                muted
                loop
                playsInline
                crossOrigin="anonymous"
                controls
            />
        </div>
    );
}