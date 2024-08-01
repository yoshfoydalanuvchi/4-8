// 1. Eng uzun so'zni topish
function uzuni(massiv) {
  let max = "";
  for (let i of massiv) {
    if (i.length > max.length) {
      max = i;
    }
  }
  return max;
}

// 2. Stringlarni birlashtirish
function birlashtirish(massiv) {
  return massiv.join("");
}

// 3. Katta harflarga o'zgartirish
function kattaHarflar(massiv) {
  return massiv.map((i) => i.toUpperCase());
}

// 4. Ko'paytmani hisoblash
function kopaytma(massiv) {
  let natija = 1;
  for (let i = 0; i < massiv.length; i++) {
    natija *= massiv[i];
  }
  return natija;
}

// 5. Elementlarni saralash
function saralash(massiv) {
  return [...massiv].sort((a, b) => a - b);
}

// 6. Teskari aylantirish
function teskari(massiv) {
  let natija = [];
  for (let i = massiv.length - 1; i >= 0; i--) {
    natija.push(massiv[i]);
  }
  return natija;
}

// 7. Indekslarni qaytarish
function indekslar(massiv) {
  return massiv.map((_, i) => i);
}

// 8. Sonning indeksini topish
function indeksTop(massiv, son) {
  return massiv.indexOf(son);
}

// 9. Qiymat qo'shib massiv yaratish
function qiymatQoshib(massiv, qiymat) {
  return massiv.map((element) => element + qiymat);
}

// 10. Musbat va manfiylarni ajratish
function ajratish(massiv) {
  return [massiv.filter((x) => x > 0), massiv.filter((x) => x < 0)];
}

// 11. Takrorlash
function takrorlash(massiv, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < massiv.length; j++) {
      result.push(massiv[j]);
    }
  }
  return result;
}

// 12. Stringga aylantirish
function stringgaAylantirish(massiv) {
  return massiv.map((element) => element.toString());
}

// 13. Juft indeksdagi elementlarni qaytarish
function juftIndeks(massiv) {
  let result = [];
  for (let i = 0; i < massiv.length; i++) {
    if (i % 2 === 0) {
      result.push(massiv[i]);
    }
  }
  return result;
}

// 14. Toq sonlar sonini hisoblash
function toqSonlar(massiv) {
  return massiv.filter((x) => x % 2 !== 0).length;
}

// 15. Kichik va katta elementlarni ajratish
function kichikVaKatta(massiv) {
  let engKichik = massiv[0];
  let engKatta = massiv[0];

  for (let i = 1; i < massiv.length; i++) {
    if (massiv[i] < engKichik) {
      engKichik = massiv[i];
    }
    if (massiv[i] > engKatta) {
      engKatta = massiv[i];
    }
  }

  return [[engKichik], [engKatta]];
}

// 16. Qiymatni ikki marta takrorlash
function ikkiMarta(massiv) {
  let result = [];
  for (let i = 0; i < massiv.length; i++) {
    result.push(massiv[i]);
    result.push(massiv[i]);
  }
  return result;
}

// 17...

// 18. Qiymat qo'shib string qaytarish
function qiymatString(massiv, qiymat) {
  return massiv.map((element) => (element + qiymat).toString()).join("");
}

// 19. String bo'lmaganlarni olib tashlash
function stringlar(massiv) {
  return massiv.filter((element) => typeof element === "string");
}

// 20. Bosh stringlarni hisoblash
function boshStringlar(massiv) {
  return massiv.filter((x) => x === "").length;
}

// 21. Teskari yozish
function teskariYozish(massiv) {
  return massiv.map((element) => element.split("").reverse().join(""));
}

// 22. Kvadrat ildizni hisoblash
function ildiz(massiv) {
  return massiv.map((x) => Math.sqrt(x));
}

// 23. Musbat va manfiy bo'lmagan sonlarni qaytarish
function musbatVaManfiy(massiv) {
  return massiv.filter((x) => x >= 0);
}

// 24. Toq va juft indekslarni ajratish
function toqVaJuft(massiv) {
  return [
    massiv.filter((_, i) => i % 2 === 0),
    massiv.filter((_, i) => i % 2 !== 0),
  ];
}

// 25. Faktorialni hisoblash
function faktorial(massiv) {
  function fact(x) {
    if (x === 0 || x === 1) return 1;
    let result = 1;
    for (let i = 2; i <= x; i++) {
      result *= i;
    }
    return result;
  }
  return massiv.map((element) => fact(element));
}
