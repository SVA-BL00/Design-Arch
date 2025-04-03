// Factory Method es un patrón de diseño creacional que proporciona una interfaz para crear objetos en una superclase, 
// mientras permite a las subclases alterar el tipo de objetos que se crearán.

import { MessageSender } from "../senders/MessageSender";
import { CompositeTask } from "../tasks/CompositeTask";
import { SimpleTask } from "../tasks/SimpleTask";

export class TaskFactory{
    static createTask(name: string, estimatedHours: number, sender: MessageSender){
        if(estimatedHours > 4){
            console.log("La tarea es demasiado grande, se creará una tarea compuesta");
            const compositeTask = new CompositeTask(name, sender, estimatedHours);
            for(let i = 0; i < estimatedHours/ 4; i++){
                compositeTask.addSubtask(new SimpleTask(`${name} - Subtarea ${i+1}`, sender, 4));
            }
            return compositeTask;
        }else{
            return new SimpleTask(name, sender, estimatedHours);
        }
    }
}