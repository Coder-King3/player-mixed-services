function registerKtypeof(globalThis) {
  globalThis.Ktypeof = (value) => {
    return Object.prototype.toString.call(value).slice(8, -1)
  }
}

function CreateGlobal() {
  const globals = [registerKtypeof]
  return function mountGlobal(globalThis) {
    globals.forEach((register) => register(globalThis))
  }
}

module.exports = CreateGlobal
