const readline = require('readline');

const tareas = [];

function agregar() {
    const indicator = readline.question('Indicador: ');
    const description = readline.question('Descripción: ');
    tareas.push({ indicator, description, completed: false });
    console.log('Tarea añadida.');
  }