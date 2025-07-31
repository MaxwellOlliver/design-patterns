import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { ComponentFactory } from "../../factories/component.factory";
import { MacosButtonComponent } from "../components/macos/macos-button.component";
import { MacosInputComponent } from "../components/macos/macos-input.component";

export class MacosComponentFactory implements ComponentFactory {
  createButton(): Button {
    return new MacosButtonComponent();
  }

  createInput(): Input {
    return new MacosInputComponent();
  }
}
