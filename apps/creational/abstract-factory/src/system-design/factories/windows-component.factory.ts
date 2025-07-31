import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { ComponentFactory } from "../../factories/component.factory";
import { WindowsButtonComponent } from "../components/windows/windows-button.component";
import { WindowsInputComponent } from "../components/windows/windows-input.component";

export class WindowsComponentFactory implements ComponentFactory {
  createButton(): Button {
    return new WindowsButtonComponent();
  }

  createInput(): Input {
    return new WindowsInputComponent();
  }
}
