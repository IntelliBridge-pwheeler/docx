import { IViewWrapper } from "@file/document-wrapper.js";
import { Relationships } from "@file/relationships/index.js";
import { XmlComponent } from "@file/xml-components/index.js";
import { uniqueUuid } from "@util/convenience-functions.js";

import { FontOptions, createFontTable } from "./font-table.js";

export type FontOptionsWithKey = FontOptions & { readonly fontKey: string };

export class FontWrapper implements IViewWrapper {
    private readonly fontTable: XmlComponent;
    private readonly relationships: Relationships;
    public readonly fontOptionsWithKey: readonly FontOptionsWithKey[] = [];

    public constructor(public readonly options: readonly FontOptions[]) {
        this.fontOptionsWithKey = options.map((o) => ({ ...o, fontKey: uniqueUuid() }));
        this.fontTable = createFontTable(this.fontOptionsWithKey);
        this.relationships = new Relationships();

        for (let i = 0; i < options.length; i++) {
            this.relationships.createRelationship(
                i + 1,
                "http://schemas.openxmlformats.org/officeDocument/2006/relationships/font",
                `fonts/${options[i].name}.odttf`,
            );
        }
    }

    public get View(): XmlComponent {
        return this.fontTable;
    }

    public get Relationships(): Relationships {
        return this.relationships;
    }
}
