export class ButtonListener {
    constructor(buttonId, events) {
        this.button = document.getElementById(buttonId);
        if (this.button) {
            this.addListeners(events);
        } else {
            console.error(`Button with ID ${buttonId} not found`);
        }
    }

    addListeners(events) {
        for (const [event, callback] of Object.entries(events)) {
            this.button.addEventListener(event, callback);
        }
    }
}
