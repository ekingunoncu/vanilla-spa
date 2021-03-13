import Service from "./Service";
import * as axios from "axios";

export default class extends Service {
    constructor() {
        super();
    }

    async getAstros() {
        let astros = await axios.default.get("http://api.open-notify.org/astros.json");
        return astros.data.people.map((person) => {
            return person.name
        });
    }
}
