import { IRunStylePropertiesOptions, RunProperties } from "@file/paragraph/run/properties.js";
import { XmlComponent } from "@file/xml-components/index.js";

export class RunPropertiesDefaults extends XmlComponent {
    public constructor(options?: IRunStylePropertiesOptions) {
        super("w:rPrDefault");

        this.root.push(new RunProperties(options));
    }
}
