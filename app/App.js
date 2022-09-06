import { ValuesController } from "./Controllers/ValuesController.js";
import { VmController } from "./Controllers/vmControllers.js";

class App {
  // valuesController = new ValuesController();
  vmController = new VmController

}

window["app"] = new App();
