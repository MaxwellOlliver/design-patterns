import { Button } from "../../../components/button";

export class MacosButtonComponent implements Button {
  onClick(): void {
    console.log("Macos button clicked");
  }

  render(): string {
    return "Macos button";
  }
}
