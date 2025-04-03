// Singleton es un patrón de diseño creacional que nos permite asegurarnos 
// de que una clase tenga una única instancia,
// a la vez que proporciona un punto de acceso global a dicha instancia.

export class Database{
    private static instance: Database;
    private tasks: any[] = [];

    private constructor(){}

    static getInstance(): Database{
        if(!Database.instance){
            Database.instance = new Database();
        }
        return Database.instance;
    }

    addTasks(task: any): void{
        this.tasks.push(task);
    }

    getTask(): any[]{
        return this.tasks;
    }

}