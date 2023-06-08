import React from "react";
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './tarefas.css'


export default function Tarefas({handleDelete,handleEdit,tarefa}) {
  return (
    <ul className="tarefas">
    {tarefa.map((tarefa, index) => <li key={tarefa}>
      {tarefa}
      <div>
        <FaEdit onClick={(e) => handleEdit(e, index)} className='edit' />
        <FaWindowClose onClick={(e) => handleDelete(e,index)} className='delete' />
      </div>
      </li>)}
  </ul>
  )
}