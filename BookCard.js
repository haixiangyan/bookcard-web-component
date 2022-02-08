class BookCard extends HTMLElement {
  constructor() {
    super();
    this.render()
  }

  render() {
    this.attachShadow({ mode: 'open' })

    const templateElem = document.getElementById('book-card-template')
    const clonedElem = templateElem.content.cloneNode(true)

    clonedElem.querySelector('.container > .image').src = this.getAttribute('image')
    clonedElem.querySelector('.container > .title').textContent = this.getAttribute('title')
    clonedElem.querySelector('.container > .desc').textContent = this.getAttribute('desc')
    clonedElem.querySelector('.container > .price').textContent = `￥${this.getAttribute('price')}`
    clonedElem.querySelector('.container > .action').addEventListener('click', this.buy)

    this.shadowRoot.appendChild(clonedElem)
  }

  // 要用箭头函数将 this 直接绑定到 BookCard 上
  buy = () => {
    alert('购买成功')
  }
}

customElements.define('book-card', BookCard)
