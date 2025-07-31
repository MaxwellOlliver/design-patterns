import { ComponentFactory } from "./factories/component.factory";
import { MacosComponentFactory } from "./system-design/factories/macos-component.facory";
import { WindowsComponentFactory } from "./system-design/factories/windows-component.factory";

class Application {
  constructor(private readonly factory: ComponentFactory) {}

  render(): void {
    const button = this.factory.createButton();
    const input = this.factory.createInput();

    button.onClick();
    input.onChange("test");
  }
}

class MacosApplication extends Application {
  constructor() {
    super(new MacosComponentFactory());
  }
}

class WindowsApplication extends Application {
  constructor() {
    super(new WindowsComponentFactory());
  }
}

const macosApplication = new MacosApplication();
macosApplication.render();

const windowsApplication = new WindowsApplication();
windowsApplication.render();
