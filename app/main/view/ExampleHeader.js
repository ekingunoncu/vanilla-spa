import View from "./View";

export default class extends View {
    constructor(params) {
        super(params);
    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return  ` 
        <div>
           <h1>Welcome to Vanilla</h1>
        </div>
        `;
    }
}
