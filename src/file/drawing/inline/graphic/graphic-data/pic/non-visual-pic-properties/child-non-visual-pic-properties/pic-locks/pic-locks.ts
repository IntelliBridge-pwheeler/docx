import { XmlComponent } from "@file/xml-components/index.js";
import { PicLocksAttributes } from "./pic-locks-attributes.js";

export class PicLocks extends XmlComponent {
    public constructor() {
        super("a:picLocks");
        this.root.push(
            new PicLocksAttributes({
                noChangeAspect: 1,
                noChangeArrowheads: 1,
            }),
        );
    }
}
