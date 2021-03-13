import View from "./View";
import ExampleHeader from "./ExampleHeader";
import ExampleComponent from "../component/ExampleComponent";
import ExampleService from "../service/ExampleService";

export default class extends View {
    constructor(params) {
        super(params);
        this.exampleHeader = new ExampleHeader(params);
        this.exampleComponent = new ExampleComponent();
        this.exampleService = new ExampleService();
    }

    setTitle(title) {
        document.title = title;
    }

    async getAstros() {
        return new Promise(async (resolve) => {
            let element = "";
            let astros = await this.exampleService.getAstros()
            astros.forEach((astro, index, array) => {
                element += "<br> <div>" + astro + "</div>";
                if (index >= array.length - 1) {
                    resolve(element);
                }
            });
        });
    }

    async getHtml(cb) {
        cb(` 
        <div class="center">
        ${await this.exampleHeader.getHtml()}
        ${await this.exampleComponent.getHtml()}
        <div>
           Hello from home vanilla home.
           <br>
           Author : Ekin Gün Öncü : <a href="https://www.linkedin.com/in/ekingunoncu/">linkedin</a> : <a href="https://github.com/ekingunoncu">github</a> 
        </div>
        ${await this.getAstros()}
        </div>
        `)
    }
}
