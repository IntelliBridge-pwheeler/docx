import { Run } from "@file/paragraph/index.js";
import { Seperator } from "./seperator.js";

export class SeperatorRun extends Run {
    public constructor() {
        super({});

        this.root.push(new Seperator());
    }
}
