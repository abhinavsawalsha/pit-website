// polyfills.js
if (typeof globalThis === "undefined") {
  if (typeof window !== "undefined") {
    window.globalThis = window;
  } else if (typeof global !== "undefined") {
    global.globalThis = global;
  } else if (typeof self !== "undefined") {
    self.globalThis = self;
  }
}
