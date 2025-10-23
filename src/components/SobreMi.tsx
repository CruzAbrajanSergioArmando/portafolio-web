import { motion } from "framer-motion";
import TesseractCanvas from "../components/SobreMiTesseract";

export default function SobreMi() {
  return (
    <section id="sobreMi" className="section-fullscreen">
      {/* Texto con animación */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center md:text-left"
      >
        <h1 className="section-heading">
          Hola, soy Sergio
        </h1>
        <p className="section-lead">
          Soy un desarrollador Fullstack con una sólida base en matemáticas aplicadas, lo que me permite abordar los proyectos desde una perspectiva analítica y orientada a la eficiencia. Me apasiona crear soluciones web completas, desde la lógica del backend hasta experiencias de usuario fluidas en el frontend. Busco combinar el razonamiento lógico con el diseño funcional para construir software claro, útil y escalable.
        </p>
      </motion.div>

      {/* Imagen o ilustración */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="tesseract-wrap"
      >
        <TesseractCanvas size={400} color="#60a5fa" speed={1.2} />
      </motion.div>
    </section>
  );
}