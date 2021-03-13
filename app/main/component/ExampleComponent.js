import Component from "./Component";

export default class extends Component{
    constructor() {
        super()
    }

    async getHtml() {
        return  ` 
        <div>
           Vanilla Component.
        </div>
        `;
    }
}
