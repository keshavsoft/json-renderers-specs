import { fromCollection } from "json-transformer-funcs";
import definitions from "../definitions.json" with { type: "json" };

const render = ({ inData = [], inColumns = [], inOptions = {}, options = {} } = {}) => {
    const opts = Object.keys(inOptions || {}).length > 0 ? inOptions : options;
    const config = definitions.select;

    let targetColumns = inColumns;
    if (opts.columnName || opts.column) {
        const colName = opts.columnName || opts.column;
        targetColumns = inColumns.filter(c => (c.columnName || c) === colName);
    } else if (inColumns.length > 1 && !opts.allColumns) {
        const selectCol = inColumns.find(c => c.type === "select");
        targetColumns = [selectCol || inColumns[0]];
    }

    return targetColumns.map(columnConfig => {
        const columnName = columnConfig?.columnName || columnConfig?.name || columnConfig || "";
        const select = structuredClone(config.base);
        select.attributes.id = columnName;
        select.attributes["data-name"] = columnName;

        const optionTemplate = {
            tagName: "option",
            textContent: `\${${columnName}}`,
            attributes: { value: `\${${columnName}}` }
        };

        select.children = fromCollection(inData, optionTemplate);
        return select;
    });
};

export default render;
