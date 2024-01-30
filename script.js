const readline = require('readline');

const tareas = [];

function agregar() {
    const indicator = readline.question('Indicador: ');
    const description = readline.question('Descripción: ');
    tareas.push({ indicator, description, completed: false });
    console.log('Tarea añadida.');
  }

  function eliminar() {
    const index = readline.question('Índice de la tarea a eliminar: ');
    if (index >= 0 && index < tareas.length) {
      tareas.splice(index, 1);
      console.log('Tarea eliminada.');
    } else {
      console.log('Índice no válido.');
    }
  }

  function completar() {
    const index = readline.question('Índice de la tarea completada: ');
    if (index >= 0 && index < tareas.length) {
      tareas[index].completed = true;
      console.log('Tarea marcada como completada.');
    } else {
      console.log('Índice no válido.');
    }
  }

  
  