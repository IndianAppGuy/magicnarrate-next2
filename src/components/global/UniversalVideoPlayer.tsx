'use client';

import React from 'react';

interface UniversalVideoPlayerProps {
    src: string;
    title?: string;
    className?: string;
}

const UniversalVideoPlayer: React.FC<UniversalVideoPlayerProps> = ({ src, title, className }) => {
    return (
        <div className={`relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-900 ${className || ''}`}>
            <iframe
                className="absolute inset-0 w-full h-full"
                src={src}
                title={title || 'Video Player'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default UniversalVideoPlayer;
