export class Panel {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    render(sidebar) {
        this.$el.innerHTML = ''
        sidebar.forEach(block => {
            this.$el.insertAdjacentHTML('beforeend', block.toHTML())
        })
    }
}