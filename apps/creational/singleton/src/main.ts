import { Logger } from "./logger";

const logger = Logger.getInstance();

function doSomething() {
  const logger = Logger.getInstance();
  logger.log("Logger from doSomething");
}

logger.log("Logger from main");

doSomething();
