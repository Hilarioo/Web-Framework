export class UserForms {
  constructor(public parent: HTMLElement) {}

  eventMaps(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHeaderHover,
      // 'drag:div': this.onDragDiv,
    };
  }

  onButtonClick(): void {
    console.log('button clicked');
  }

  onHeaderHover(): void {
    console.log('header hovered');
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input />
        <button>Click Me</button>
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
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
