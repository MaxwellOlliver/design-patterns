import { Button } from "../components/button";
import { Input } from "../components/input";

export interface ComponentFactory {
  createButton: () => Button;
  createInput: () => Input;
}
