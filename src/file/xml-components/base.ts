import { IViewWrapper } from "../document-wrapper.js";
import { File } from "../file.js";
import { IXmlableObject } from "./xmlable-object.js";

export interface IContext {
    readonly file: File;
    readonly viewWrapper: IViewWrapper;
    // eslint-disable-next-line functional/prefer-readonly-type
    readonly stack: IXmlableObject[];
}

export abstract class BaseXmlComponent {
    protected readonly rootKey: string;

    public constructor(rootKey: string) {
        this.rootKey = rootKey;
    }

    public abstract prepForXml(context: IContext): IXmlableObject | undefined;
}
