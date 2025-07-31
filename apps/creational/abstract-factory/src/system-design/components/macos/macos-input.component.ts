import { Input } from "../../../components/input";

export class MacosInputComponent implements Input {
  onChange(value: string): void {
    console.log("Macos input changed", value);
  }

  render(): string {
    return "Macos input";
  }
}
