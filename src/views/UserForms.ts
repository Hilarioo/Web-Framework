import { User } from '../models/User';

export class UserForms {
  constructor(public parent: HTMLElement, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  eventMaps(): { [key: string]: () => void } {
    return {
      'click:.set-age-btn': this.onSetAgeClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input />
        <button>Click Me</button>
        <button class='set-age-btn'>Set Random Age</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const events = this.eventMaps();
    for (const eventName in events) {
      fragment
        .querySelectorAll(eventName.split(':')[1])
        .forEach((element) =>
          element.addEventListener(eventName.split(':')[0], events[eventName]),
        );
    }
  }

  render(): void {
    // empty the parent element
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
