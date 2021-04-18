// Define class here
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    return `<${this.tag}>${this.content}</${this.tag}>`;
  }
}

const lovelaveQuote = new HTMLElement('p', 'I am never so happy as when I am really engaged in good earnest...');

console.log(lovelaveQuote.render());

// Export class here
export default HTMLElement;
///worked
