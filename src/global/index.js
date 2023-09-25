const moduleAlias = require('module-alias')
const path = require('path')

// 路径别名
function registerAlias() {
  moduleAlias.addAlias('~', `${path.resolve()}`)
  moduleAlias.addAlias('@', `${path.resolve()}/src`)
  moduleAlias()
}

function registerKtypeof(globalThis) {
  globalThis.Ktypeof = (value) => {
    return Object.prototype.toString.call(value).slice(8, -1)
  }
}

function CreateGlobal() {
  const globals = [registerAlias, registerKtypeof]
  return function mountGlobal(globalThis) {
    globals.forEach((register) => register(globalThis))
  }
}

module.exports = CreateGlobal
