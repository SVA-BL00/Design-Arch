// Bridge es un patrón de diseño estructural que te permite dividir una clase grande, 
// o un grupo de clases estrechamente relacionadas, en dos jerarquías separadas (abstracción e implementación) 
// que pueden desarrollarse independientemente la una de la otra.

import { MessageSender } from "../senders/MessageSender";

export abstract class Task{
    protected sender: MessageSender;
    protected name: string;
    protected estimatedHours: number;

    constructor(name: string, sender: MessageSender, estimatedHours: number){
        this.name = name;
        this.sender = sender;
        this.estimatedHours = estimatedHours;
    }

    abstract complete(realHours: number): void;
}