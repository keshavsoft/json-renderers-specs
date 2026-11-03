import definitions from "../definitions.json" with { type: "json" };
import runSingleInstructions from "json-instruction-single";
import runDoubleInstructions from "json-instruction-double";

const render = ({
    inData = [],
    inColumns = [],
    inType = "simple",
    inOptions = {},
    options = {},
    inShowLog = false
} = {}) => {
    const localType = (!inType || inType === "dataList" || inType === "datalist") ? "simple" : inType;
    const localOptions = Object.keys(inOptions || {}).length > 0 ? inOptions : options;
    const localShowLog = inShowLog;

    const config = definitions.dataList[localType] || definitions.dataList.simple || definitions.dataList;
    if (!config) {
        throw new Error("dataList definition not found in definitions.json");
    }

    // Determine target column(s) from columns and options
    let targetColumns = inColumns;
    if (localOptions.columnName || localOptions.column) {
        const colName = localOptions.columnName || localOptions.column;
        targetColumns = inColumns.filter(c => (c.columnName || c.name || c) === colName);
    } else if (inColumns.length > 1 && !localOptions.allColumns) {
        targetColumns = [inColumns[0]];
    }

    // Pull values from data for the target column
    const firstCol = targetColumns[0];
    const columnName = firstCol?.columnName || firstCol?.name || firstCol || "itemName";
    const columnData = inData.map(row => ({
        rowValue: row[columnName] ?? "",
        [columnName]: row[columnName] ?? ""
    }));

    const base = structuredClone(config.base);
    const registry = {
        data: {
            columns: targetColumns,
            data: columnData
        },
        base,
        spec: {
            buildDataList: {
                tagName: "datalist",
                attributes: {
                    id: "${columnName}",
                    "data-name": "${columnName}",
                    "data-role": "datalist-control"
                },
                children: []
            },
            buildOption: {
                tagName: "option",
                textContent: "${rowValue}",
                attributes: {
                    value: "${rowValue}"
                }
            }
        },
        ...localOptions
    };

    if (config.single && config.single.length > 0) {
        runSingleInstructions(config.single, registry, localShowLog);
    }

    if (config.double && config.double.length > 0) {
        runDoubleInstructions(config.double, registry);
    }

    return base;
};

export default render;
