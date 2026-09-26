import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

const dataFile =
  process.env.TASKS_FILE ?? path.resolve(process.cwd(), "data", "tasks.json");
const rl = createInterface({ input: stdin, output: stdout });
const inputLines = rl[Symbol.asyncIterator]();

async function ask(prompt) {
  stdout.write(prompt);
  const { value, done } = await inputLines.next();
  return done ? null : value;
}

async function loadTasks() {
  try {
    const contents = await readFile(dataFile, "utf8");
    const tasks = JSON.parse(contents);

    if (
      !Array.isArray(tasks) ||
      tasks.some(
        (task) =>
          !task ||
          !Number.isInteger(task.id) ||
          typeof task.title !== "string" ||
          typeof task.completed !== "boolean",
      )
    ) {
      throw new Error("The tasks file has an invalid format.");
    }

    return tasks;
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

async function saveTasks(tasks) {
  await mkdir(path.dirname(dataFile), { recursive: true });
  await writeFile(dataFile, `${JSON.stringify(tasks, null, 2)}\n`, "utf8");
}

function showTasks(tasks) {
  if (tasks.length === 0) {
    console.log("\nYour task list is empty.");
    return;
  }

  console.log("\nYour tasks:");
  for (const task of tasks) {
    const status = task.completed ? "x" : " ";
    console.log(`  ${task.id}. [${status}] ${task.title}`);
  }
}

async function addTask(tasks) {
  const answer = await ask("\nWhat needs to be done? ");
  if (answer === null) {
    return;
  }

  const title = answer.trim();
  if (!title) {
    console.log("Task title cannot be empty.");
    return;
  }

  const nextId = tasks.reduce((largest, task) => Math.max(largest, task.id), 0) + 1;
  tasks.push({ id: nextId, title, completed: false });
  await saveTasks(tasks);
  console.log(`Added task ${nextId}.`);
}

async function completeTask(tasks) {
  const openTasks = tasks.filter((task) => !task.completed);
  if (openTasks.length === 0) {
    console.log("\nThere are no incomplete tasks.");
    return;
  }

  showTasks(tasks);
  const answer = await ask("\nEnter the task number to complete: ");
  if (answer === null) {
    return;
  }

  const id = Number(answer.trim());
  const task = openTasks.find((item) => item.id === id);

  if (!Number.isInteger(id) || !task) {
    console.log("That is not an incomplete task number.");
    return;
  }

  task.completed = true;
  await saveTasks(tasks);
  console.log(`Completed: ${task.title}`);
}

async function main() {
  const tasks = await loadTasks();
  console.log("Task List");

  while (true) {
    console.log("\n1. Add a task");
    console.log("2. View tasks");
    console.log("3. Complete a task");
    console.log("4. Quit");

    const answer = await ask("\nChoose an option: ");
    if (answer === null) {
      console.log("\nGoodbye!");
      return;
    }

    const choice = answer.trim();
    switch (choice) {
      case "1":
        await addTask(tasks);
        break;
      case "2":
        showTasks(tasks);
        break;
      case "3":
        await completeTask(tasks);
        break;
      case "4":
        console.log("Goodbye!");
        return;
      default:
        console.log("Please choose 1, 2, 3, or 4.");
    }
  }
}

try {
  await main();
} catch (error) {
  console.error(`Could not run the task list: ${error.message}`);
  process.exitCode = 1;
} finally {
  rl.close();
}