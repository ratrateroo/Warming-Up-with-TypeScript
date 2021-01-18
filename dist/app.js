"use strict";
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('project-input');
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.attach();
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
//# sourceMappingURL=app.js.map