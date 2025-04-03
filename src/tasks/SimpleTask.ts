import { Task } from "./Task";

export class SimpleTask extends Task{
    complete(realHours: number): void {
        console.log(`La tarea ${this.name} ha sido completada en ${realHours} horas.`);
        this.sender.sendMessage(`La tarea ${this.name} ha sido completada en ${realHours} horas.`);
    }

}