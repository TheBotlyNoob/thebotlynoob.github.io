import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";
import "prismjs/plugins/autolinker/prism-autolinker";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "prismjs/plugins/show-language/prism-show-language";
import components from "prismjs/components";

const languages = Object.keys(components);

Array.from(
  document.querySelectorAll('code[class*="language-"], pre[class*="language-"]')
).map((element) =>
  element.addEventListener(
    "DOMSubtreeModified",
    throttle(() => Prism.highlightElement(element), 1000)
  )
);

Prism.highlightAll();

function throttle(callback: Function, limit: number) {
  var waiting = false; // Initially, we're not waiting
  return () => {
    // We return a throttled function
    if (!waiting) {
      // If we're not waiting
      callback(); // Execute users function
      waiting = true; // Prevent future invocations
      setTimeout(() => {
        // After a period of time
        waiting = false; // And allow future invocations
      }, limit);
    }
  };
}
