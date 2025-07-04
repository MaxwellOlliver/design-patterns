import { SalesReportGenerator } from "./service/SalesReportGenerator";
import { PDFKitAdapter } from "./service/PDFKit.adapter";

const salesReportGenerator = new SalesReportGenerator(new PDFKitAdapter());

const salesReport = salesReportGenerator.generate();

console.log(salesReport);
