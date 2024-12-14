// Función para generar las partículas de nieve
function createSnowflakes() {
    const snowContainer = document.querySelector('.snow');
    const numSnowflakes = 50;

    for (let i = 0; i < numSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄';
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowContainer.appendChild(snowflake);
    }
}

// Función para mostrar el mensaje al hacer clic
function showMessage() {
    const message = document.getElementById('message');
    message.classList.remove('hidden');
}

// Llamada a la función para generar nieve cuando la página cargue
window.onload = createSnowflakes;
