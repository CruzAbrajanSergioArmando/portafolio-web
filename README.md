# 🌟 **Portafolio Web — Sergio Armando Cruz Abraján**

> 🚀 Mi portafolio personal desarrollado con **Astro**, **React**, **Tailwind CSS** y **Framer Motion**.  
> Un espacio donde presento mis proyectos, habilidades y pasión por el desarrollo web moderno, combinando mis conocimientos en matemáticas aplicadas y programación.

[![banner](https://user-images.githubusercontent.com/YourUserID/your-repo/main/public/preview.png)](https://your-portfolio-url.com)
*(Vista previa del portafolio)*

---

## 📑 **Índice**

1. [✨ Características principales](#-características-principales)  
2. [🧰 Tecnologías utilizadas](#-tecnologías-utilizadas)  
3. [🗂️ Estructura del proyecto](#️-estructura-del-proyecto)  
4. [🧞 Comandos útiles](#-comandos-útiles)  
5. [💼 Secciones del portafolio](#-secciones-del-portafolio)  
6. [🚀 Despliegue](#-despliegue)  
7. [🧠 Aprendizajes y objetivos](#-aprendizajes-y-objetivos)  
8. [📬 Contacto](#-contacto)  
9. [⭐ Agradecimiento](#-agradecimiento)

---

## ✨ **Características principales**

✅ Sitio **ultrarrápido** gracias a Astro.  
🎨 Diseño **moderno y responsive** con Tailwind CSS.  
⚛️ Componentes **React** integrados perfectamente.  
🎞️ Animaciones fluidas con **Framer Motion**.  
🧠 Código limpio y fácil de mantener.  
🌙 (Opcional) Modo oscuro implementado.  

---

## 🧰 **Tecnologías utilizadas**

| Tecnología | Descripción |
|-------------|--------------|
| 🪐 **[Astro](https://astro.build/)** | Framework moderno para sitios estáticos |
| ⚛️ **[React](https://react.dev/)** | Librería para componentes interactivos |
| 🎨 **[Tailwind CSS](https://tailwindcss.com/)** | Framework CSS utilitario |
| 🎞️ **[Framer Motion](https://www.framer.com/motion/)** | Librería de animaciones para React |
| ☁️ **[Vercel](https://vercel.com/)** | Plataforma recomendada para el despliegue |

---

## 🗂️ **Estructura del proyecto**

```bash
/
├── public/               # Archivos estáticos (imágenes, íconos, etc.)
├── src/
│   ├── components/       # Componentes React y Astro
│   ├── layouts/          # Plantillas base del sitio
│   ├── pages/            # Rutas principales (index, proyectos, contacto)
│   ├── sections/         # Secciones personalizadas (sobre mí, habilidades, etc.)
│   └── styles/           # Configuración y estilos globales
└── package.json          # Dependencias y scripts
```

---

## 🧞 **Comandos útiles**

El proyecto incluye varios scripts útiles definidos en `package.json`. A continuación se describen y se muestran ejemplos de uso.

| Comando | Qué hace |
|---------|---------|
| `npm install` | Instala las dependencias del proyecto |
| `npm run dev` | Inicia el servidor de desarrollo (ejecuta `astro dev`) |
| `npm start` | Alias que también inicia el servidor de desarrollo (`astro dev`) |
| `npm run build` | Ejecuta `astro check` y luego `astro build` para generar la versión de producción |
| `npm run preview` | Inicia `astro preview` para servir la build localmente |
| `npm run astro` | Ejecuta el binario local de Astro — útil para comandos directos de Astro |

Ejemplos rápidos:

```zsh
# instalar dependencias
npm install

# iniciar servidor de desarrollo
npm run dev

# construir para producción
npm run build

# previsualizar la build
npm run preview
```