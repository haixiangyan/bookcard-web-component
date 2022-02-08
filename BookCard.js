class BookCard extends HTMLElement {
  constructor() {
    super();
    this.render()
  }

  render() {
    const container = document.createElement('div')

    const image = document.createElement('img')
    image.className = 'image'
    image.src = this.getAttribute('image')

    const title = document.createElement('p')
    title.className = 'title'
    title.textContent = this.getAttribute('title')

    const desc = document.createElement('p')
    desc.className = 'desc'
    desc.textContent = this.getAttribute('desc')

    const price = document.createElement('p')
    price.className = 'price'
    price.textContent = this.getAttribute('price')

    container.append(image, title, desc, price)

    this.append(container)
  }
}

customElements.define('book-card', BookCard)
