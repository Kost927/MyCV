import {Site} from './site'
import {Panel} from './panel'

export class App {
  constructor(model, sidebar) {
    this.model = model
    this.sidebar = sidebar
  }

  init() {
    const site = new Site('#site')
    site.render(this.model)

    const panel = new Panel('#panel')
    panel.render(this.sidebar)
  }
}