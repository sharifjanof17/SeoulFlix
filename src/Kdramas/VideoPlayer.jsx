import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer = ({ src }) => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);

    // ✅ INIT faqat 1 marta
    useEffect(() => {
        if (!videoRef.current) return;

        playerRef.current = videojs(videoRef.current, {
            controls: true,
            autoplay: false,
            // "none" = foydalanuvchi "Play" bosmaguncha hech narsa yuklanmaydi.
            // Bu Bunny trafik (bandwidth) xarajatini sezilarli kamaytiradi, chunki
            // epizodni ochib ko'rmasdan chiqib ketganlar uchun GB sarflanmaydi.
            preload: "none",
            fluid: true,
            playbackRates: [0.5, 1, 1.25, 1.5, 2],
        });

        return () => {
            if (playerRef.current) {
                playerRef.current.dispose();
            }
        };
    }, []);

    // ✅ SOURCE alohida update qilinadi - HLS (.m3u8) va oddiy MP4 ikkalasini ham qo'llab-quvvatlaydi
    useEffect(() => {
        if (playerRef.current && src) {
            const isHls = src.includes(".m3u8");
            playerRef.current.src({
                src: src,
                type: isHls ? "application/x-mpegURL" : "video/mp4",
            });
        }
    }, [src]);

    return (
        <div data-vjs-player>
            <video ref={videoRef} className="video-js vjs-big-play-centered" />
        </div>
    );
};

export default VideoPlayer;