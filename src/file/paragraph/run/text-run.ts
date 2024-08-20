import { IRunOptions, Run } from "./run.js";
import { Text } from "./run-components/text.js";

export class TextRun extends Run {
    public constructor(options: IRunOptions | string) {
        if (typeof options === "string") {
            super({});
            this.root.push(new Text(options));
            return this;
        }

        super(options);
    }
}
