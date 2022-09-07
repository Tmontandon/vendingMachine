import { appState } from "../AppState.js";
import { vmServices } from "../Services/vmServices.js";

export class VmController {
  constructor() {
    this.drawItem()
  }

  buyItem(name) {
    console.log(name, 'has been bought');
    vmServices.buyItem(name)
  }

  drawItem() {
    let items = appState.items
    let template = ''
    items.forEach(i => {
      template += `
      <div class="col-2 text-center bg-light shadow rounded-2">
          <div>${i.name}</div>
          <div>${i.price}</div>
          <button class="btn btn-primary" onclick="app.vmController.buyItem('${i.name}')">hey</button>
        </div>
      `
    })
    // @ts-ignore
    document.getElementById('items').innerHTML = template
  }

}