import { action } from '@storybook/addon-actions';

export const actions = {
  abort: action('abort'),
  canplay: action('canplay'),
  canplaythrough: action('canplaythrough'),
  durationchange: action('durationchange'),
  ended: action('ended'),
  error: action('error'),
  loadeddata: action('loadeddata'),
  loadedmetadata: action('loadedmetadata'),
  loadstart: action('loadstart'),
  pause: action('pause'),
  play: action('play'),
  playing: action('playing'),
  progress: action('progress'),
  ratechange: action('ratechange'),
  seeked: action('seeked'),
  seeking: action('seeking'),
  stalled: action('stalled'),
  suspend: action('suspend'),
  timeupdate: action('timeupdate'),
  volumechange: action('volumechange'),
  waiting: action('waiting'),
  'stream-adstart': action('stream-adstart'),
  'stream-adend': action('stream-adend'),
  'stream-adtimeout': action('stream-adtimeout'),
};