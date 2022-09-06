import { appState } from "../AppState.js";

class VmServices {

  // Trying to draw name of item to parameter in controller -> do I do that here?
  buyItem(name) {
    console.log('yo');
    let item = appState.items.find(i => i.name == name)
    // @ts-ignore
    item.price += 10
    console.log(item)
  }
}

export const vmServices = new VmServices()