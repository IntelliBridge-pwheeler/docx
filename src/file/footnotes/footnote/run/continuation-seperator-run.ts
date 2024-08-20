import { Run } from "@file/paragraph/index.js";
import { ContinuationSeperator } from "./continuation-seperator.js";

export class ContinuationSeperatorRun extends Run {
    public constructor() {
        super({});

        this.root.push(new ContinuationSeperator());
    }
}
