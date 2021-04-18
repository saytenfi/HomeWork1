// Import HTMLElement here
import HTMLElement from './HTMLElement';
// Define class here

class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
    // this.tag = 'Div'
    // this.content = content
  }
}
// npm run lint -- --fix
const andIThinkToMyself = new DivElement('What a wonderful world');

console.log(andIThinkToMyself.render());
// Export class here
export default DivElement;
//wokid