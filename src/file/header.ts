import { Paragraph } from "./paragraph/index.js";
import { Table } from "./table/index.js";

export interface IHeaderOptions {
    readonly children: readonly (Paragraph | Table)[];
}

export class Header {
    public readonly options: IHeaderOptions;

    public constructor(options: IHeaderOptions = { children: [] }) {
        this.options = options;
    }
}

export class Footer {
    public readonly options: IHeaderOptions;

    public constructor(options: IHeaderOptions = { children: [] }) {
        this.options = options;
    }
}
