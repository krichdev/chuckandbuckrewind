"use client"
import { SpotifyEpisode } from '@/utils/getEpisodes';
import { useEffect, useRef } from 'react'

interface SpotifyEmbedProps {
  episodes: SpotifyEpisode[]
}

const SpotifyEmbed: React.FC<SpotifyEmbedProps> = ({episodes}) => {
  const embedControllerRef = useRef<null | Record<string, any>>(null);
  console.log(episodes.length)

  useEffect(() => {
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      const element = document.getElementById('embed-iframe');
      const options = {
          uri: episodes[episodes?.length - 1].uri,
          width: '100%',
        };
      const callback = (EmbedController: Record<string, any>) => {
        embedControllerRef.current = EmbedController;
      };
      IFrameAPI.createController(element, options, callback);
    };
  }, [episodes])
  return (
    <div className="flex md:flex-row flex-col items-center justify-center md:gap-3 w-4/5 md:w-2/5">
      <div className='flex md:flex-col gap-3 mb-4'>
        {episodes.slice().reverse().map((episode, idx) => (
          <button
            key={episode.id}
            className="rounded bg-[#e03030] text-white w-24"
            onClick={() => {
              if (embedControllerRef.current) {
                embedControllerRef.current.loadUri(episode.uri);
                embedControllerRef.current.play();
              }
            }}
          >
            Hour {idx + 1}
          </button>
        ))}
      </div>
      <div id="embed-iframe" />
    </div>
  );
}

export default SpotifyEmbed