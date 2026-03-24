# Javier Jorquera — Portafolio Personal

¡Hola! Soy **Javier R. Jorquera**, Ingeniero en Informática (Duoc UC) especializado en Ciencia de Datos y actualmente estudiante de Ingeniería Civil Informática (UNAB). 

Mi enfoque profesional se encuentra en la intersección entre la ingeniería de datos rigurosa y la creación de interfaces modernas y fluidas. Disfruto construyendo aplicaciones robustas desde el modelo de base de datos hasta la experiencia de usuario final. Además, soy el fundador de **Speedrun Delivery**, una startup de logística de última milla.

[Visita mi Portafolio en Vivo](http://names.nmsdev.tech)

---

## 🚀 Sobre este Proyecto

Este repositorio contiene el código fuente de mi portafolio personal, diseñado y construido desde cero para mostrar mi trabajo seleccionado, habilidades tecnológicas y proporcionar un medio de contacto directo.

### 🛠️ Stack Tecnológico Utilizado

El proyecto fue construido utilizando herramientas modernas enfocadas en el rendimiento, la escalabilidad y una estética premium:

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/) + [React 19](https://react.dev/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/) para efectos fluidos, scroll y el sistema dinámico de órbitas.
- **Iconos:** [Lucide React](https://lucide.dev/)
- **Gestión de Correos:** API de [Resend](https://resend.com/) para el formulario de contacto funcional.

### ⚙️ Infraestructura y Despliegue

La automatización y el despliegue de este portafolio están gestionados en un entorno de producción seguro:

- **Servidor:** Desplegado en un servidor local (Toshiba) accesible mediante VPN (Tailscale).
- **Gestor de Procesos:** **[PM2](https://pm2.keymetrics.io/)** mantiene la aplicación Node.js corriendo en segundo plano (`ecosystem.config.js`).
- **CI/CD Local:** Pipelines en **PowerShell** y **Bash** automatizan el empaquetado, la transferencia segura (SCP/SSH con claves ED25519) y el *clean build* en el servidor.
- **Seguridad:** Repositorio público sanitizado, sin rastros de scripts de infraestructura ni variables de entorno.

---

## 💻 Desarrollo Local

Si deseas correr este proyecto de forma local:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/elnames/Portafolio.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura tus variables de entorno (crea un archivo `.env.local` y agrega tu llave de Resend):
   ```env
   RESEND_API_KEY=tu_api_key_aqui
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

---

*Diseñado y construido por Javier Jorquera.*
