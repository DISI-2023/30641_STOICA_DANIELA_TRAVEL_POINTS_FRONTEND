import React, {useEffect, useRef} from 'react';

const Base64AudioPlayer = (props) => {
  const audioRef = useRef(null);

  const handleTogglePlay = () => {
    if (audioRef.current) {
      if (props.isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      const binaryString = atob(props.audio);
      const arrayBuffer = new ArrayBuffer(binaryString.length);
      const uint8Array = new Uint8Array(arrayBuffer);
      for (let i = 0; i < binaryString.length; i++) {
        uint8Array[i] = binaryString.charCodeAt(i);
      }
      const blob = new Blob([uint8Array], { type: 'audio/mp3' });
      const audioUrl = URL.createObjectURL(blob);
      audioRef.current.src = audioUrl;
      audioRef.current.pause();
    }
  }, [props.audio]);


  useEffect(() => {
      props.canPlay && handleTogglePlay()
  }, [props.isPlaying, props.canPlay])

  return (
      <audio ref={audioRef}></audio>
  );
};

export default Base64AudioPlayer;
