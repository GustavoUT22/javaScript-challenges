const DOMInject = (function () {
    let element;
  
    return {
      createElement(tag, { className, id, content }) {
        element = document.createElement(tag);
        element.className = className;
        element.dataset.id = id;
        element.textContent = content;
      },
      showElement() {
        console.log(element);
      },
      appendTo(selector) {
        // querySelector => .name || #ids || h1
        const parent = document.querySelector(selector);
        if (!parent) throw new Error("Parent element not found");
        parent.append(element);
      },
      insertBefore(selector) {
        const parent = document.querySelector(selector);
        if (!parent) throw new Error("Next element not found");
        parent.before(element);
      },
      insertAfter(selector) {
        const parent = document.querySelector(selector);
        if (!parent) throw new Error("Previous element not found");
        parent.after(element);
      },
    };
  })();
  
  DOMInject.createElement("div", {
    className: "section",
    id: 1,
    content: "My text",
  });
  
  // DOMInject.appendTo(".hola");
  DOMInject.insertBefore(".content");
  // DOMInject.insertAfter(".content");
  