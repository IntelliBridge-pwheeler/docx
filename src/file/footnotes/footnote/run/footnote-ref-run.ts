import { Run } from "@file/paragraph/index.js";

import { FootnoteRef } from "./footnote-ref.js";

export class FootnoteRefRun extends Run {
    public constructor() {
        super({
            style: "FootnoteReference",
        });

        this.root.push(new FootnoteRef());
    }
}
