document.addEventListener('DOMContentLoaded', () => {
    const systemAlert = document.getElementById('systemAlert');
    const terminalContent = document.getElementById('terminalContent');
    const countdownElement = document.getElementById('countdown');
    let countdown = 10;

    // Ocultar la página principal inicialmente
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.matrix-bg').style.display = 'none';

    // Función para ocultar la alerta y mostrar la página principal
    function hideAlert() {
        systemAlert.style.animation = 'fadeOut 0.5s ease-in-out';
        setTimeout(() => {
            systemAlert.style.display = 'none';
            document.querySelector('.container').style.display = 'block';
            document.querySelector('.matrix-bg').style.display = 'block';
            startHackingSimulation();
        }, 500);
    }

    // Función para iniciar la simulación de hackeo
    function startHackingSimulation() {
        // Lista de mensajes de "hackeo" para mostrar
        const hackMessages = [
            "Iniciando escaneo de red...",
            "Buscando vulnerabilidades...",
            "Acceso no autorizado detectado...",
            "Bypass de firewall exitoso...",
            "Extrayendo datos sensibles...",
            "Acceso a base de datos...",
            "Descifrando contraseñas...",
            "Inyectando código malicioso...",
            "Comprometiendo sistema de seguridad...",
            "Acceso root obtenido...",
            "Descargando archivos confidenciales...",
            "Infectando sistema...",
            "Estableciendo backdoor...",
            "Ocultando huellas...",
            "Sistema comprometido exitosamente..."
        ];

        // Función para agregar mensajes al terminal
        function addTerminalMessage(message) {
            const line = document.createElement('div');
            line.className = 'line';
            line.textContent = message;
            terminalContent.appendChild(line);
            terminalContent.scrollTop = terminalContent.scrollHeight;
        }

        // Función para generar IP aleatoria
        function generateRandomIP() {
            return `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
        }

        // Actualizar IP cada 2 segundos
        setInterval(() => {
            document.querySelector('.ip').textContent = `IP: ${generateRandomIP()}`;
        }, 2000);

        // Agregar mensajes aleatorios cada segundo
        setInterval(() => {
            const randomMessage = hackMessages[Math.floor(Math.random() * hackMessages.length)];
            addTerminalMessage(randomMessage);
        }, 1000);

        // Cuenta regresiva
        const countdownInterval = setInterval(() => {
            countdown--;
            countdownElement.textContent = countdown;
            
            if (countdown <= 0) {
                clearInterval(countdownInterval);
                window.location.href = 'index.html';
            }
        }, 1000);

        // Efecto de glitch aleatorio en el título
        setInterval(() => {
            const glitchTitle = document.querySelector('.glitch');
            glitchTitle.style.animation = 'none';
            glitchTitle.offsetHeight;
            glitchTitle.style.animation = null;
        }, 3000);
    }

    // Ocultar la alerta después de 3 segundos
    setTimeout(hideAlert, 3000);
}); 