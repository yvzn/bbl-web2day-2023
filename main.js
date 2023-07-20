import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/night.css';

import './style.css';

import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes';

/**
 * @type {Reveal.Options}
 */
const options = {
  hash: true,
  plugins: [RevealNotes],
  totalTime: 40 * 60,
  slideNumber: true, // FIXME remove in final version
};

Reveal.initialize(options);
