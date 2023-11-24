import { useRef } from 'react';

import Input from './Input.jsx';
import Modal from './Modal.jsx';

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Cerrar">
        <h2 className="text-xl font-bold text-stone-700 my-4">Error al guardar</h2>
        <p className="text-stone-600 mb-4">
          Revisa los datos ingresados
        </p>
      </Modal>
      
      <div className="w-[35rem] mt-16">
      <div>
          <Input type="text" ref={title} label="Título/Persona destinatario" />
          <Input ref={description} label="Descripción del reporte" textarea />
          <Input type="date" ref={dueDate} label="Fecha de registro" />
      </div>
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancelar
            </button>
          </li>
          <li>
            <button
              className="bg-blue-900 rounded py-1 px-4 text-white"
              onClick={handleSave}
            >
              Guardar
            </button>
          </li>
        </menu>
        
      </div>
    </>
  );
}