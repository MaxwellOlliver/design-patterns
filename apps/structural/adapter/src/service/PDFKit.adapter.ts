import PDFDocument from "pdfkit";
import { PDFPort } from "./pdf.port";
import fs from "fs";

export class PDFKitAdapter implements PDFPort {
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
