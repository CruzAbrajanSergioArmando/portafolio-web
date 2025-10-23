import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Aplicación de Ecuaciones Diferenciales",
      description: "Una aplicación web que utiliza métodos numéricos para resolver ecuaciones diferenciales complejas, proporcionando visualizaciones interactivas.",
      link: "https://github.com/tu-usuario/proyecto-ecuaciones",
    },
    {
      title: "Sistema de Gestión de Inventario",
      description: "Un sistema eficiente de gestión de inventario basado en algoritmos de optimización para mejorar la precisión y reducir costos.",
      link: "https://github.com/tu-usuario/proyecto-inventario",
    },
    {
      title: "Herramienta de Visualización de Datos",
      description: "Una herramienta poderosa para la visualización de datos que facilita el análisis estadístico avanzado mediante gráficos interactivos.",
      link: "https://github.com/tu-usuario/proyecto-visualizacion",
    },
  ];

  return (
    <motion.section
      id="proyectos"
      className="mb-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-semibold text-center mb-12 text-gray-900 dark:text-gray-100">
        Proyectos Destacados
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </motion.section>
  );
}