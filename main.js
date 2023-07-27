import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/night.css';

import './style.css';

import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes';

/** @type {Reveal.Options} */
const options = {
  hash: true,
  plugins: [RevealNotes],
  totalTime: 45 * 60,
  progress: false,
  slideNumber: import.meta.env.DEV,
};

Reveal.initialize(options);

const registerServiceWorker = async () => {
  try {
    if (import.meta.env.PROD) {
      await navigator.serviceWorker.register("/sw.js");
    }
  } catch (error) {
    console.error(`Registration failed with ${error}`);
  }
};

window.addEventListener('load', registerServiceWorker);
