import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

// Plugins
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";
import "prismjs/plugins/autolinker/prism-autolinker";
import "prismjs/plugins/autolinker/prism-autolinker.css";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "prismjs/plugins/show-language/prism-show-language";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

Prism.highlightAll();

Array.from(
  document.querySelectorAll('code[class*="language-"], pre[class*="language-"]')
).map((element) =>
  createObserver(element, () => Prism.highlightElement(element))
);

createObserver(document.body, (mutations) =>
  mutations.map((mutation) =>
    Array.from(mutation.addedNodes).map((node) =>
      Array.from((node as Element).classList || []).map((element_class) => {
        if (element_class.startsWith("language-")) {
          Prism.highlightElement(node as Element);

          createObserver(node as Element, () =>
            Prism.highlightElement(node as Element)
          );
        }
      })
    )
  )
);

function createObserver(
  element: Element,
  callback: MutationCallback,
  timeout: number = 500
) {
  new MutationObserver((mutations, observer) => {
    observer.disconnect();

    callback(mutations, observer);

    setTimeout(() => createObserver(element, callback, timeout), timeout);
  }).observe(element, { subtree: true, childList: true });
}
