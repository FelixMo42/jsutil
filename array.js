if (!Array.prototype.shuffle) {
  Array.prototype.shuffle = function() {
      for (let i = this.length, r; i > 0; i--, r = Math.floor(Math.random() * i)) {
          [this[r], this[i]] = [this[i], this[r]]
      }
  }
}

if (!Array.shuffle) {
  let shuffle = Array.prototype.shuffle
  if (typeof shuffle === 'function') {
      Array.shuffle = function () {
          return shuffle.call.apply(shuffle, arguments);
      };
  }
}
