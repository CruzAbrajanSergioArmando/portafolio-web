import { motion } from "framer-motion";

export default function SobreMi() {
  return (
    <section
      id="sobreMi"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-24"
    >
      {/* Texto con animación */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center md:text-left"
      >
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Hola, soy Sergio
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Desarrollador web enfocado en crear experiencias digitales modernas,
          accesibles y visualmente atractivas.
        </p>
      </motion.div>

      {/* Imagen o ilustración */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <img
          src="/perfil.svg"
          alt="Ilustración o foto de Sergio"
          className="w-64 h-auto rounded-2xl shadow-lg"
        />
      </motion.div>
    </section>
  );
}