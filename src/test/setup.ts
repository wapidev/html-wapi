// APIs del navegador que jsdom no trae y que usan los efectos del sitio.
class IntersectionObserverFalso {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
}

Object.assign(window, {
  IntersectionObserver: IntersectionObserverFalso,
  matchMedia: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
    dispatchEvent: () => false,
  }),
  scrollTo: () => {},
})
Element.prototype.scrollIntoView = () => {}
