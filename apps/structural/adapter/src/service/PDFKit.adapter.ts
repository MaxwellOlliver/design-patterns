import PDFDocument from "pdfkit";
import { PDFAdapter } from "./pdf.adapter";
import fs from "fs";

export class PDFKitAdapter implements PDFAdapter {
  generate(filename: string, data: any): void {
    const doc = new PDFDocument({
      size: "A4",
      margin: 50,
    });

    doc.text(data, 16, 16);
    doc.end();
    doc.pipe(fs.createWriteStream(filename));
  }
}
