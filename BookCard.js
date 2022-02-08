class BookCard extends HTMLElement {
  constructor() {
    super();
    this.render()
  }

  render() {
    const templateElem = document.getElementById('book-card-template')
    const clonedElem = templateElem.content.cloneNode(true)

    clonedElem.querySelector('.container > .image').src = this.getAttribute('image')
    clonedElem.querySelector('.container > .title').textContent = this.getAttribute('title')
    clonedElem.querySelector('.container > .desc').textContent = this.getAttribute('desc')
    clonedElem.querySelector('.container > .price').textContent = `￥${this.getAttribute('price')}`

    this.appendChild(clonedElem)
  }
}

customElements.define('book-card', BookCard)
