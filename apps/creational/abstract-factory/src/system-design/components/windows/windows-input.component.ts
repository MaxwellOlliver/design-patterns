import { Input } from "../../../components/input";

export class WindowsInputComponent implements Input {
  onChange(value: string): void {
    console.log("Windows input changed", value);
  }

  render(): string {
    return "Windows input";
  }
}
