function maskify(cc) {
  const ultNum = cc.slice(-4);
  let secretNumb = cc.length - 4;
  let code = '';

  if (secretNumb > 0) {
    for (let i = 1; i <= secretNumb; i++) {
      code = code + '#';
    }
  }

  return code + ultNum;
}
