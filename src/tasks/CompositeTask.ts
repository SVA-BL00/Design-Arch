// Composite es un patrón de diseño estructural que te permite componer objetos en estructuras de árbol y 
// trabajar con esas estructuras como si fueran objetos individuales.

import { Task } from "./Task";

export class CompositeTask extends Task{
    private subtasks: Task[] = [];

    addSubtask(task: Task): void{
        this.subtasks.push(task);
    }

    complete(realHours: number): void {
        console.log(`La tarea compuesta ${this.name} ha sido completada en ${realHours} horas.`);
        this.subtasks.forEach((task) => task.complete(realHours / this.subtasks.length));
    }
}