export interface PDFAdapter {
  generate(filename: string, data: any): void;
}
