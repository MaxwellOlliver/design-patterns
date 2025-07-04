import PDFDocument from "pdfkit";
import { PDFAdapter } from "./pdf.adapter";
import fs from "fs";

export class PDFKitAdapter implements PDFAdapter {
  generate(): void {
    const doc = new PDFDocument({
      size: "A4",
      margin: 50,
    });

    doc.text("Sales Report", 0, 16, {
      align: "center",
      underline: true,
    });
    doc.end();
    doc.pipe(fs.createWriteStream("sales-report.pdf"));
  }
}
