class Silabe {
  constructor (litere) {
    this._litere = litere
    this._map = this._litere.map(e => e.esteVocala ? 'v' : e.esteSemivocala ? 's' : 'c')
    this._splitmap = new Array(this._litere.length).fill(0)
    this.calculeazaSplitMap()
  }

  existaVocalaDupa (index) {
    if (index >= this._litere.length - 1) {
      return false
    }
    for (let i = index + 1; i < this._litere.length; i++) {
      if (this._litere[i].esteVocala) {
        return true
      }
    }
    return false
  }

  cautaPattern (needle) {
    let indices = []
    let haystack = this._map.join('')
    let regex = new RegExp(needle, 'g')
    let match = null
    let add = 0
    while ((match = regex.exec(haystack)) !== null) {
      indices.push(match.index + add)
      haystack = haystack.slice(match.index + 1)
      add += match.index + 1
      regex = new RegExp(needle, 'g')
    }
    return indices
  }

  calculeazaSplitMap () {
    // #1: O consoana intre doua vocale trece in silaba urmatoare: 'vcv' -> ['v', 'cv']
    this.cautaPattern('vcv').forEach(index => {
      this._splitmap[index] = 1
    })
    this.cautaPattern('vcs').forEach(index => {
      this._splitmap[index] = 1
    })
    this.cautaPattern('svc').forEach(index => {
      this._splitmap[index + 1] = 1
    })
    this.cautaPattern('vsc').forEach(index => {
      this._splitmap[index + 1] = 1
    })
    this.cautaPattern('svsc').forEach(index => {
      this._splitmap[index + 2] = 1
    })
    this.cautaPattern('ssvc').forEach(index => {
      this._splitmap[index + 2] = 1
    })
    // #3: Doua consoane intre doua vocale se impart: 'vccv' -> ['vc', 'cv']
    // Exceptie: Daca prima consoana este ['b', 'c', 'd', 'f', 'g', 'h', 'p', 't', 'v']
    //  si a doua consoana este 'l' sau 'r', ambele consoane trec in a doua silaba
    // Exceptie: ['cs', 'gz', 'ch', 'gh'] sunt tratate ca o singura unitate
    this.cautaPattern('vccv').forEach(index => {
      if (['l', 'r'].includes(this._litere[index + 1].litera) &&
        ['b', 'c', 'd', 'f', 'g', 'h', 'p', 't', 'v'].includes(this._litere[index + 1].litera)) {
        this._splitmap[index] = 1
      } else if (['cs', 'gz', 'ch', 'gh'].includes(this._litere[index + 1].litera + this._litere[index + 2].litera)) {
        this._splitmap[index] = 1
      } else {
        this._splitmap[index] = 0
        this._splitmap[index + 1] = 1
      }
    })
    // #4: Trei sau mai multe consoane intre doua vocale trec prima la prima silaba si urmatoarele la a doua: 'vcccv' -> ['vc', 'ccv']
    // Exceptie: ['ltp', 'mpt', 'nct', 'ncț', 'ncș', 'ndv', 'rct', 'rtf', 'stm', 'ndv', 'ldm', 'lpn', 'ltc', 'ndc', 'nsl', 'nsr', 'nsv', 'ntl', 'rbț', 'rgș', 'rtb', 'rtc', 'rth', 'rtj', 'rtm', 'rtp', 'rts', 'rtț', 'rtv', 'stb', 'stc', 'std', 'stf', 'stl', 'stn', 'stp', 'sts', 'stt', 'stv'] -> dupa a doua consoana
    this.cautaPattern('vccc*v').forEach(index => {
      if (['ltp', 'mpt', 'nct', 'ncț', 'ncș', 'ndv', 'rct', 'rtf', 'stm', 'ndv', 'ldm', 'lpn', 'ltc', 'ndc', 'nsl', 'nsr', 'nsv', 'ntl', 'rbț', 'rgș', 'rtb', 'rtc', 'rth', 'rtj', 'rtm', 'rtp', 'rts', 'rtț', 'rtv', 'stb', 'stc', 'std', 'stf', 'stl', 'stn', 'stp', 'sts', 'stt', 'stv'].includes(this._litere[index + 1].litera + this._litere[index + 2].litera + this._litere[index + 3].litera)) {
        this._splitmap[index + 2] = 1
      } else {
        this._splitmap[index + 1] = 1
      }
    })
    // #5: Doua vocale alaturate trec in silabe diferite
    this.cautaPattern('vv').forEach(index => {
      this._splitmap[index] = 1
    })
    // #6: Daca o vocala este urmata de un difton / triftong se desparte dupa vocala
    this.cautaPattern('vsv').forEach(index => {
      this._splitmap[index] = 1
    })
    this.cautaPattern('vvs').forEach(index => {
      this._splitmap[index] = 1
    })
    this.cautaPattern('vsvs').forEach(index => {
      this._splitmap[index] = 1
    })
    this.cautaPattern('vssv').forEach(index => {
      this._splitmap[index] = 1
    })
  }

  get lista () {
    let silabe = []
    let silaba = ''
    for (let i = 0; i < this._litere.length; i++) {
      silaba += this._litere[i].litera
      if (this._splitmap[i] === 1 && this.existaVocalaDupa(i)) {
        silabe.push(silaba)
        silaba = ''
      }
    }
    if (silaba.length > 0) {
      silabe.push(silaba)
    }
    return silabe
  }
}

export default Silabe
