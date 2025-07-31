import { Button } from "../../../components/button";

export class WindowsButtonComponent implements Button {
  onClick(): void {
    console.log("Windows button clicked");
  }

  render(): string {
    return "Windows button";
  }
}
