class BookCard extends HTMLElement {
  constructor() {
    super();
    this.render()
  }

  render() {
    const template = document.getElementById('book-card-template').content
    this.appendChild(template.cloneNode(true))
  }
}

customElements.define('book-card', BookCard)
