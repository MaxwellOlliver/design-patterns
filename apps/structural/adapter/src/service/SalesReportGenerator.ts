import { PDFAdapter } from "./pdf.adapter";

export class SalesReportGenerator {
  constructor(private pdfAdapter: PDFAdapter) {}

  generate() {
    this.pdfAdapter.generate("sales-report.pdf", "Sales Report");
  }
}
