import Button from './Button.jsx';

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="h-screen w-[300px] bg-gray-800">
      <p className="my-10 flex items-center justify-center font-bold text-white">Muro de Tareas</p>
      <div>
        <Button onClick={onStartAddProject}>Crear nuevo reporte</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-white hover:bg-blue-900";

          if (project.id === selectedProjectId) {
            cssClasses += ' bg-blue-300 text-stone-200'
          } else {
            cssClasses += ' text-stone-100'
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}