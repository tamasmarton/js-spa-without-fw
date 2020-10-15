import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super()
    this.setTitle('Dashboard')
  }

  async getHtml() {
    return `
      <h1>Welcome back, John!</h1>
      <p>Loorem ipsum</p>
      <p>
        <a href="/posts" data-link>View recent posts</a>
      </p>
    `
  }
}
