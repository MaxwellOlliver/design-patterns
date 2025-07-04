import { SalesReportGenerator } from "./service/SalesReportGenerator";

const salesReportGenerator = new SalesReportGenerator();

const salesReport = salesReportGenerator.generate();

console.log(salesReport);
