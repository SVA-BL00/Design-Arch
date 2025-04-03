import { Database } from "./database/Database";
import { TaskFactory } from "./factories/TaskFactory";
import { SlackSender } from "./senders/SlackSender";
import { TeamsSender } from "./senders/TeamsSender";
import { TelegramSender } from "./senders/TelegramSender";
import { WhatsappSender } from "./senders/WhatsappSender";

const telegramSender = new TelegramSender();
const whatSender = new WhatsappSender();
const slackSender = new SlackSender();
const teamsSender = new TeamsSender();
const db = Database.getInstance();

const task1 = TaskFactory.createTask("Implementar navbar", 4, telegramSender);
const task2 = TaskFactory.createTask("Implementar login con jwt", 10, whatSender);
const task3 = TaskFactory.createTask("Terminar base de datos", 15, slackSender);
const task4 = TaskFactory.createTask("Hacer UI con figma", 5, teamsSender);

db.addTasks(task1);
db.addTasks(task2);
db.addTasks(task3);
db.addTasks(task4);

task1?.complete(5);
task2?.complete(20);
task3?.complete(15);
task4?.complete(4);

console.log("\n");
console.log("Tareas en la base de datos: ", db.getTask());