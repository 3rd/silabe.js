class Litera {
  constructor (litera, pozitie, cuvant, accent) {
    this._literaOrig = litera
    this._litera = litera.toLowerCase()
    this._pozitie = pozitie
    this._cuvant = cuvant
    this._vocale = ['a', 'ă', 'â', 'e', 'i', 'î', 'o', 'u']
    this._accent = accent
  }
  get esteSemivocala () {
    // Daca are accent nu este semivocala
    if (this._accent === true) {
      return false
    }
    // Daca litera nu este vocala -> false
    if (!this._vocale.includes(this._litera)) {
      return false
    }
    // Daca litera este "e" si se afla inainte/dupa "a" sau "o" -> true
    if (this.litera === 'e') {
      if (['a', 'o'].includes(this.literaUrmatoare) ||
        ['a', 'o'].includes(this.literaPrecedenta)) {
        return true
      }
    }
    // Daca litera este "i" si se afla inainte/dupa "a", "ă", "â", "e", "î", "o", "u" -> true
    if (this.litera === 'i') {
      if (['a', 'ă', 'â', 'e', 'î', 'o', 'u'].includes(this.literaUrmatoare) ||
        ['a', 'ă', 'â', 'e', 'î', 'o', 'u'].includes(this.literaPrecedenta)) {
        return true
      }
    }
    // Daca litera este "o" si se afla inainte de "a"
    if (this.litera === 'o' && this.literaUrmatoare === 'a') {
      return true
    }
    // Daca litera este "u" si se afla inainte/dupa "a", "ă", "â", "e", "î", "o" -> true
    if (this.litera === 'u') {
      if (['a', 'ă', 'â', 'e', 'î', 'o'].includes(this.literaUrmatoare) ||
        ['a', 'ă', 'â', 'e', 'î', 'o'].includes(this.literaPrecedenta)) {
        return true
      }
    }
    return false
  }
  get esteVocala () {
    // Daca are accent este vocala
    if (this._accent === true) {
      return true
    }
    return this._vocale.includes(this._litera) && !this.esteSemivocala
  }
  get esteConsoana () {
    return !this._vocale.includes(this._litera)
  }
  get litera () {
    return this._litera
  }
  get literaPrecedenta () {
    if (this._pozitie === 0) {
      return null
    }
    return this._cuvant[this._pozitie - 1]
  }
  get literaUrmatoare () {
    if (this._pozitie + 1 < this._cuvant.length) {
      return this._cuvant[this._pozitie + 1]
    }
    return null
  }
  get pozitie () {
    return this._pozitie
  }
  get cuvant () {
    return this._cuvant
  }
}

export default Litera
