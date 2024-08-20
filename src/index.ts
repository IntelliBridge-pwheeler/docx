// Internally, the wrapper is a 'File', but export to the end user as a 'Document'
// Use of 'File' also works
export { File as Document } from "./file/index.js";
export * from "./file/index.js";
export * from "./export/index.js";
export * from "./util/index.js";
export * from "./patcher/index.js";
