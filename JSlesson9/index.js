function celsiusToFahrenheit(c) {
  return (c * 9/5) + 32;
}

function convert() {
  let c = document.getElementById("celsius").value;
  let f = celsiusToFahrenheit(c);
  document.getElementById("result").innerText = f;
}
