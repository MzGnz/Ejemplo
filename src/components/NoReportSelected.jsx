import Button from './Button.jsx';

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <h2 className="text-xl font-bold text-stone-500 my-4">
        Bienvenido al muro de Tareas
      </h2>
      <p className="text-stone-400 mb-4">
        Aquí podrás reportar incidencias o checar reportes de los vecinos
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Crear nuevo reporte</Button>
      </p>
    </div>
  );
}