import PDFDocument from "pdfkit";
import fs from "fs";

export class SalesReportGenerator {
  generate() {
    const doc = new PDFDocument({
      size: "A4",
    });

    doc.text("Sales Report", 16, 16, {
      align: "center",
      underline: true,
    });
    doc.end();
    doc.pipe(fs.createWriteStream("sales-report.pdf"));

    return doc;
  }
}
