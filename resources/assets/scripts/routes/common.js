import TypeIt from 'typeit/dist/typeit.es.min'
import AOS from 'aos'
export default {
  init() {
    new TypeIt('#typing', {
      strings: 'wijzigingen energielabelmethodiek',
      speed: 150,
      waitUntilVisible: true,
      loop: true,
    }).go();
    AOS.init({
      duration: 1200,
    })
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
