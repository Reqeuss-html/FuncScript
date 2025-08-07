// funcscript-v0.1.js
// created by ChatGPT(LOL) and Reqeuss

class FuncScriptEngine {
  constructor() {
    this.elements = {};
    this.injectCSS();
  }

  injectCSS() {
    if (!document.getElementById('funcscript-style')) {
      const style = document.createElement('style');
      style.id = 'funcscript-style';
      style.textContent = `
        fscript { display: none !important; }
      `;
      document.head.appendChild(style);
    }
  }

  createElement(type, id, text) {
    if (!id) return;
    if (this.elements[id]) {
      console.warn(`Element with id "${id}" already exists.`);
      return;
    }
    const el = document.createElement(type);
    el.id = id;
    if (text) el.textContent = text;
    document.body.appendChild(el);
    this.elements[id] = el;
  }

  setStyle(id, prop, val) {
    const el = this.elements[id];
    if (el) {
      el.style[prop] = val;
    } else {
      console.warn(`Element with id "${id}" not found.`);
    }
  }

  setText(id, text) {
    const el = this.elements[id];
    if (el) {
      el.textContent = text;
    } else {
      console.warn(`Element with id "${id}" not found.`);
    }
  }

  async run(code) {
    const lines = code.split('\n');
    for (let line of lines) {
      line = line.trim();
      if (!line) continue;

      if (line.startsWith("create ")) {
        const m = line.match(/^create (\w+) (\w+) "(.*)"$/);
        if (m) this.createElement(m[1], m[2], m[3]);
        else console.warn("Invalid create syntax:", line);

      } else if (line.startsWith("setStyle ")) {
        const m = line.match(/^setStyle (\w+) "(.*)" "(.*)"$/);
        if (m) this.setStyle(m[1], m[2], m[3]);
        else console.warn("Invalid setStyle syntax:", line);

      } else if (line.startsWith("setText ")) {
        const m = line.match(/^setText (\w+) "(.*)"$/);
        if (m) this.setText(m[1], m[2]);
        else console.warn("Invalid setText syntax:", line);

      } else {
        console.warn("Unknown command:", line);
      }
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const engine = new FuncScriptEngine();
  const scripts = document.querySelectorAll("fscript");
  scripts.forEach(s => engine.run(s.textContent));
});

window.FuncScriptEngine = FuncScriptEngine;
