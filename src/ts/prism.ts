import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

// Plugins
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";
import "prismjs/plugins/autolinker/prism-autolinker";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "prismjs/plugins/show-language/prism-show-language";

// Languages
import "prismjs/components/prism-toml";

Prism.highlightAll();

Array.from(
  document.querySelectorAll('code[class*="language-"], pre[class*="language-"]')
).map((element) => {
  let handler = throttled(1000, () => Prism.highlightElement(element));
  
  document.addEventListener("DOMSubtreeModified", handler);
});

// function createListener(
//   type: string,
//   element: Element,
//   callback: (ev: Event) => any,
//   timeout: number
// ) {
//   element.addEventListener(type, (ev) => {
//     element.removeEventListener(type, callback);
//     console.log('removed callback!');

//     console.log('started callback')
//     callback(ev);

//     console.log(
//       'setting the timeout');
//     setTimeout(() => {console.log('starting the listener again');createListener(type, element, callback, timeout)}, timeout);
//   });
// }

function throttled(delay: number, fn: Function) {
  let lastCall = 0;
  return function (...args: any[]) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
}
