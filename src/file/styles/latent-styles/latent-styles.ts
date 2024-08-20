import { XmlComponent } from "@file/xml-components/index.js";
import { LatentStyleException } from "./exceptions.js";

export class LatentStyles extends XmlComponent {
    public constructor(latentException?: LatentStyleException) {
        super("w:latentStyles");

        if (latentException) {
            this.root.push(latentException);
        }
    }
}
