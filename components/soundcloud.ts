export type SoundCloudWidget = {
    play: () => void;
    pause: () => void;
    seekTo: (ms: number) => void;
    bind: (event: string, callback: () => void) => void;
  };
  
  declare global {
    interface Window {
      SC?: {
        Widget: ((iframe: HTMLIFrameElement) => SoundCloudWidget) & {
          Events: { PLAY: string; PAUSE: string; FINISH: string };
        };
      };
    }
  }