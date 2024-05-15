
import React, { useState, useEffect } from 'react';


const PlayButton = ({ mp3Url, isPlaying, audioRef, handleTogglePlay}) => {
    const [volume, setVolume] = useState(0.1); // Initial volume level

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume; // Set the volume when it changes
        }
    }, [volume]);
    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
    };
    return (
        <div>
            <button onClick={handleTogglePlay}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <label htmlFor={"volumeControl"}>Volume: </label>
            <input
                id={"volumeControl"}
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
            />
            <audio ref={audioRef} src={mp3Url} loop/>

        </div>
    );
};

export default PlayButton;