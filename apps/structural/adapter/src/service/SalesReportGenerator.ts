import { PDFPort } from "./pdf.port";

export class SalesReportGenerator {
  constructor(private pdfAdapter: PDFPort) {}

  generate() {
    this.pdfAdapter.generate("sales-report.pdf", "Sales Report");
  }
}
