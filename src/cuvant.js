import Silabe from './silabe.js'
import Litera from './litera.js'

class Cuvant {
  constructor (cuvant) {
    this._cuvant = cuvant
    this._litere = []
    cuvant.split('').forEach((e, i) => {
      if (/[a-zA-Z\u00C0-\u024F]/.test(e)) {
        if (i > 0 && i + 1 < cuvant.length && cuvant[i - 1] === '(' && cuvant[i + 1] === ')') {
          this._litere.push(new Litera(e, i, cuvant, true))
        } else {
          this._litere.push(new Litera(e, i, cuvant))
        }
      }
    })
    this._silabe = new Silabe(this._litere)
  }

  get silabe () {
    return this._silabe.lista
  }
}

export default Cuvant
