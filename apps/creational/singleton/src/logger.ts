import fs from "fs";
import path from "path";

export class Logger {
  private static instance: Logger;
  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      console.log("Creating new instance of Logger");
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    const timestamp = new Date().toISOString();
    const logFile = `app-logs.log`;
    const logMessage = `[${timestamp}] ${message}\n`;

    const logsDir = "logs";
    fs.mkdirSync(logsDir, { recursive: true });

    fs.appendFileSync(path.join(logsDir, logFile), logMessage, {
      flag: "a",
    });
  }
}
