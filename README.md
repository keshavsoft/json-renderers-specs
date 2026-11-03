# json-renderers-specs

> **Headless Component Specification Compiler for JSON-Driven UIs**  
> Pure, deterministic UI specification generator compiling structured data and schemas into declarative JSON-to-DOM ASTs.

[![npm version](https://img.shields.io/npm/v/json-renderers-specs?color=0284c7&style=flat-square)](https://www.npmjs.com/package/json-renderers-specs)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Bundle Size](https://img.shields.io/badge/bundle-36%20kB-indigo.svg?style=flat-square)](docs/dist/v2/min.js)
[![Live Docs](https://img.shields.io/badge/Live%20Demos-GitHub%20Pages-success?logo=github&style=flat-square)](https://keshavsoft.github.io/json-renderers-specs/)

🌐 **Live Documentation & Interactive Portal:** [https://keshavsoft.github.io/json-renderers-specs/](https://keshavsoft.github.io/json-renderers-specs/)

---

## ⚡ The Breakthrough Idea

Traditional UI builders force you to redefine data, structures, and event listeners for every single control.

`json-renderers-specs` introduces **Unified Common Dataset Architecture**:
- Define your **`columns`** (schema, types, widths, labels) and **`data`** (records) **once**.
- Compile **any UI component** simply by specifying its `type`!

```
                    ┌─────────────────────────┐
                    │  Common columns & data  │
                    └────────────┬────────────┘
                                 │
     ┌──────────────┬────────────┼────────────┬──────────────┐
     ▼              ▼            ▼            ▼              ▼
table.simple       form        select      dataList     searchInput
```

---

## 🚀 Installation

```bash
npm install json-renderers-specs
```

Or consume directly via modern ES modules in the browser:

```html
<script type="module">
  import render from "https://keshavsoft.github.io/json-renderers-specs/dist/min.js";
</script>
```

---

## 💻 Quick Code Usage

```javascript
import render from "json-renderers-specs";

// 1. Single source of data and columns
const columns = [
  { columnName: "itemName", label: "Item Name", type: "text", width: "240px" },
  { columnName: "category", label: "Category", type: "select", options: ["Fasteners", "Raw Materials"] },
  { columnName: "openingRate", label: "Rate", type: "text" },
  { columnName: "inStock", label: "In Stock", type: "checkbox" }
];

const data = [
  { itemName: "0.09/30mm Bolt", category: "Fasteners", openingRate: "1200.00", inStock: true }
];

// 2. Generate Table Spec
const tableSpec = render({
  type: "table.simple",
  data,
  columns,
  options: { showSerial: true }
});

// 3. Generate Form Spec (Prefilled from data[0], schema from columns)
const formSpec = render({
  type: "form",
  data,
  columns,
  options: { title: "Edit Product" }
});

// 4. Generate Select Dropdown Spec (Automatically targets category column)
const selectSpec = render({
  type: "select",
  data,
  columns
});

// 5. Generate DataList Autocomplete Spec (Automatically targets itemName)
const datalistSpec = render({
  type: "dataList",
  data,
  columns
});
```

---

## 📱 Live Interactive Screens

Each component has its own dedicated, un-bloated screen live on GitHub Pages:

| Component Screen | Type | Live Demo |
| :--- | :--- | :--- |
| **Simple Table** | `table.simple` | [Open Screen →](https://keshavsoft.github.io/json-renderers-specs/table/) |
| **Table with Search** | `table.simple` + `showSearch: true` | [Open Screen →](https://keshavsoft.github.io/json-renderers-specs/tableWithSearch/) |
| **Declarative Form** | `form` | [Open Screen →](https://keshavsoft.github.io/json-renderers-specs/form/) |
| **Select Dropdown** | `select` | [Open Screen →](https://keshavsoft.github.io/json-renderers-specs/select/) |
| **DataList Autocomplete** | `dataList` | [Open Screen →](https://keshavsoft.github.io/json-renderers-specs/dataList/) |
| **Search Input** | `searchInput` | [Open Screen →](https://keshavsoft.github.io/json-renderers-specs/searchInput/) |
| **Docs Portal & Catalog** | *Hub* | [Open Portal →](https://keshavsoft.github.io/json-renderers-specs/) |

---

## 🏗️ Architecture & Ecosystem

In the **KeshavSoft Declarative UI Ecosystem**, responsibilities are strictly separated:

1. **`json-renderers-specs` (THIS PACKAGE)**:
   - **100% Headless**: Zero DOM nodes created, zero `document` references.
   - Compiles pure, deterministic JSON AST trees (`specAsJsonToDom`).
   - Driven entirely by declarative instruction dictionaries (`definitions.json`).

2. **`@keshavsoft/json-to-dom`** / **`json-renderers`**:
   - The downstream browser renderer that consumes the headless JSON AST and instantiates real DOM nodes (`document.createElement`).

---

## 📦 Global Registration

In browser environments, the distribution bundle automatically registers under the standard KeshavSoft namespace:

```javascript
globalThis.ks.jsonRenderersSpecs = {
  meta: { version: "1.2.1", name: "json-renderers-specs" },
  render: [Function: render]
};
```

---

## 📄 License

[MIT](LICENSE) © [KeshavSoft](https://github.com/keshavsoft)
