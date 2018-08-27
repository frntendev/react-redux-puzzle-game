export const buildLevels = (cell, level) => {
  let levelCells = [];

  levelCells.push({
    number: cell,
    possibles: aroundCellGenerator(cell)
  });

  return updateLevels(cell, level, levelCells);
};

export const updateLevels = (e, n, s) => {
  const t = s.map(e => e.number),
    r = e;
  if (n > 0) {
    const e = s
        .find(e => e.number === r)
        .possibles.filter(e => !1 === e.visited),
      u = e[Math.floor(Math.random() * e.length)];
    if (u) {
      const e = u.number;
      s
        .find(e => e.number === r)
        .possibles.find(n => n.number === e).visited = !0;
      const i = aroundCellGenerator(e).map(e => {
        if (t.includes(e.number)) e.visited = !0;
        return e;
      });
      return (
        s.push({ number: e, possibles: i }), (n -= 1), updateLevels(e, n, s)
      );
    }
    {
      s.pop();
      const e = s[s.length - 1].number;
      return updateLevels(e, n, s);
    }
  }
  return s;
};
export const aroundCellGenerator = e => {
  let u = [],
    s = e % 10,
    i = (e + 20) % 10,
    r = (e - 20) % 10;
  return (
    0 === s && (s = 10),
    0 === i && (i = 10),
    0 === r && (r = 10),
    e - 30 > 0 && u.push({ number: e - 30, visited: !1 }),
    s + 3 < 11 && u.push({ number: e + 3, visited: !1 }),
    e + 30 < 101 && u.push({ number: e + 30, visited: !1 }),
    (0 === s || s - 3 > 0) && u.push({ number: e - 3, visited: !1 }),
    e - 20 > 0 && r + 2 < 11 && u.push({ number: e - 18, visited: !1 }),
    e + 20 < 101 && i + 2 < 11 && u.push({ number: e + 22, visited: !1 }),
    e + 20 < 101 && i - 2 > 0 && u.push({ number: e + 18, visited: !1 }),
    e - 20 > 0 && r - 2 > 0 && u.push({ number: e - 22, visited: !1 }),
    u
  );
};
