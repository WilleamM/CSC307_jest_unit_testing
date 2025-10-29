function sum(a, b) {
  return a + b;
}

function div(a, b) {
  return a / b;
}

function containsNumbers(text) {
  for (let i = 0; i < text.length; i++) {
    const ch = text.charAt(i);
    if (ch >= "0" && ch <= "9") {
      return true;
    }
    // if (!isNaN(text.charAt(i))) return true; This implementation returns 0 for empty spaces, not NaN
  }
  return false;
}

export default { sum, div, containsNumbers };
