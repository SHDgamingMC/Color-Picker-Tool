const colorInput = document.getElementById('colorInput');
const colorBox = document.getElementById('colorBox');
const hexValue = document.getElementById('hexValue');
const rgbValue = document.getElementById('rgbValue');

function hexToRGB(hex) {
  const r = parseInt(hex.substr(1, 2), 16);
  const g = parseInt(hex.substr(3, 2), 16);
  const b = parseInt(hex.substr(5, 2), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

colorInput.addEventListener('input', () => {
  const hex = colorInput.value;
  const rgb = hexToRGB(hex);

  colorBox.style.backgroundColor = hex;
  hexValue.textContent = hex;
  rgbValue.textContent = rgb;
});

function copyColorCode() {
  const temp = document.createElement('input');
  temp.value = hexValue.textContent;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand('copy');
  document.body.removeChild(temp);
  alert("HEX Code Copied: " + temp.value);
}
