
const display = document.getElementById('password-display');
const lengthSlider = document.getElementById('length-slider');
const lengthValue = document.getElementById('length-value');
const generateBtn = document.getElementById('generate-btn');

const charSets = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
};

// Actualizar el número de la longitud visualmente
lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
});

function generatePassword() {
    let allowedChars = "";
    let password = "";
    
    // Verificar qué opciones están marcadas
    if (document.getElementById('uppercase').checked) allowedChars += charSets.uppercase;
    if (document.getElementById('lowercase').checked) allowedChars += charSets.lowercase;
    if (document.getElementById('numbers').checked) allowedChars += charSets.numbers;
    if (document.getElementById('symbols').checked) allowedChars += charSets.symbols;

    if (allowedChars === "") return alert("¡Selecciona al menos una opción!");

    for (let i = 0; i < lengthSlider.value; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    display.textContent = password;
    display.style.color = "#E6E5EA"; // Cambiar color al generar
}

generateBtn.addEventListener('click', generatePassword);

// Funcionalidad de copiar al portapapeles
document.getElementById('copy-btn').addEventListener('click', () => {
    navigator.clipboard.writeText(display.textContent);
    alert("¡Contraseña copiada!");
});