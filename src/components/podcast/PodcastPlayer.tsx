
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { PodcastEpisode } from "@/types/podcast";

interface PodcastPlayerProps {
  episode: PodcastEpisode;
}

const PodcastPlayer = ({ episode }: PodcastPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // For demo purposes, we'll set a random duration since we don't have real audio files
    setDuration(Math.floor(Math.random() * (3600 - 1200) + 1200)); // Random duration between 20 and 60 minutes
  }, [episode]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => {
        // Handle the error - in real implementation we'd have proper error handling
        console.error("Error playing audio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    setCurrentTime(audio.currentTime);
  };

  const handleSliderChange = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    audio.currentTime = value[0];
    setCurrentTime(value[0]);
  };

  const handleVolumeChange = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const volumeValue = value[0];
    setVolume(volumeValue);
    audio.volume = volumeValue / 100;
    
    if (volumeValue === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isMuted) {
      audio.volume = volume / 100;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    
    return [
      h > 0 ? h : null,
      h > 0 ? (m < 10 ? `0${m}` : m) : m,
      s < 10 ? `0${s}` : s
    ].filter(Boolean).join(":");
  };

  return (
    <div className="bg-gray-100 rounded-lg p-4 shadow-inner">
      {/* Hidden audio element - no audio URL in database yet */}
      <audio 
        ref={audioRef}
        src="" 
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        onDurationChange={() => setDuration(audioRef.current?.duration || 0)}
      />
      
      <div className="flex items-center gap-3">
        <Button 
          variant="outline" 
          size="icon" 
          className="bg-shazmeen-red text-white hover:bg-shazmeen-red/90 rounded-full h-10 w-10"
          onClick={togglePlayPause}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </Button>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Slider 
              value={[currentTime]} 
              max={duration || 100}
              step={1}
              onValueChange={handleSliderChange}
              className="w-full" 
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-2 ml-2 min-w-[100px]">
          <Button 
            variant="ghost" 
            size="icon"
            className="h-8 w-8"
            onClick={toggleMute}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </Button>
          <Slider 
            value={[isMuted ? 0 : volume]} 
            max={100}
            step={1}
            onValueChange={handleVolumeChange}
            className="w-20" 
          />
        </div>
      </div>
    </div>
  );
};

export default PodcastPlayer;
