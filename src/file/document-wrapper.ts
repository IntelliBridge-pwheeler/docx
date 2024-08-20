import { XmlComponent } from "./xml-components/index.js";
import { Document, IDocumentOptions } from "./document/index.js";
import { Footer } from "./footer/footer.js";
import { FootNotes } from "./footnotes/index.js";
import { Header } from "./header/header.js";
import { Relationships } from "./relationships/index.js";

export interface IViewWrapper {
    readonly View: Document | Footer | Header | FootNotes | XmlComponent;
    readonly Relationships: Relationships;
}

export class DocumentWrapper implements IViewWrapper {
    private readonly document: Document;
    private readonly relationships: Relationships;

    public constructor(options: IDocumentOptions) {
        this.document = new Document(options);
        this.relationships = new Relationships();
    }

    public get View(): Document {
        return this.document;
    }

    public get Relationships(): Relationships {
        return this.relationships;
    }
}
