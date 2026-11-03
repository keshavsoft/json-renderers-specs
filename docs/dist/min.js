const B = {
  version: "1.2.1",
  name: "json-renderers-specs"
}, k = (t) => {
  t && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersSpecs = {
    meta: B,
    render: t
  });
}, O = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.type;
  if (a === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof a != "string")
    throw new TypeError("type must be a string");
  return !0;
}, L = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.data;
  if (a === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(a))
    throw new TypeError("data must be an Array");
  return !0;
}, K = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.columns;
  if (a === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(a))
    throw new TypeError("columns must be an Array");
  return !0;
}, E = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.showLog;
  if (a !== void 0 && typeof a != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, G = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("Config must be an object");
  return O(e), L(e), K(e), E(e), !0;
}, D = "table", I = "", W = [], H = [], V = "", M = "replace", q = !1, y = {
  type: D,
  targetHtmlId: I,
  data: W,
  columns: H,
  classToApply: V,
  appendPosition: M,
  showLog: q
}, U = (t) => {
  const e = typeof t == "object" && t !== null ? t.inKey ?? t.key : t;
  return e && e in y ? y[e] : { ...y };
};
Object.assign(U, y);
const _ = {
  simple: {
    base: {
      tagName: "div",
      attributes: {
        "data-role": "table-parent"
      },
      children: [
        {
          tagName: "table",
          attributes: {
            class: "table table-hover table-striped align-middle border mb-0"
          },
          children: [
            {
              tagName: "colgroup",
              attributes: {
                "data-role": "table-colgroup"
              },
              children: []
            },
            {
              tagName: "thead",
              attributes: {
                class: "table-dark",
                "data-role": "table-header"
              },
              children: [
                {
                  tagName: "tr",
                  attributes: {
                    "data-role": "table-header-row"
                  },
                  children: []
                }
              ]
            },
            {
              tagName: "tbody",
              attributes: {
                "data-role": "table-body"
              },
              children: []
            },
            {
              tagName: "tfoot",
              attributes: {
                "data-role": "table-footer"
              },
              children: [
                {
                  tagName: "tr",
                  attributes: {
                    "data-role": "table-footer-row"
                  },
                  children: []
                }
              ]
            }
          ]
        }
      ]
    },
    single: [
      {
        narration: "Build column widths",
        destinationPath: {
          fileName: "base",
          dataRole: "table-colgroup",
          filePath: [
            "children"
          ]
        },
        sourcePath: {
          fileName: "data",
          filePath: [
            "columns"
          ]
        },
        templateKey: "buildColGroup",
        func: "fromCollection"
      },
      {
        narration: "Build table header",
        destinationPath: {
          fileName: "base",
          dataRole: "table-header-row",
          filePath: [
            "children"
          ]
        },
        sourcePath: {
          fileName: "data",
          filePath: [
            "columns"
          ]
        },
        templateKey: "buildHeader",
        func: "fromCollection"
      }
    ],
    double: [
      {
        narration: "Build table body",
        destinationPath: {
          fileName: "base",
          dataRole: "table-body",
          filePath: [
            "children"
          ]
        },
        sourcePath: {
          fileName: "data",
          filePath: [
            "columns"
          ]
        },
        func: "twoDimensional"
      }
    ]
  },
  withFooter: {
    base: {
      tagName: "table",
      attributes: {
        class: "table table-hover table-striped align-middle border mb-0"
      },
      children: [
        {
          tagName: "colgroup",
          attributes: {
            "data-role": "table-colgroup"
          },
          children: []
        },
        {
          tagName: "thead",
          attributes: {
            class: "table-dark",
            "data-role": "table-header"
          },
          children: [
            {
              tagName: "tr",
              attributes: {
                "data-role": "table-header-row"
              },
              children: []
            }
          ]
        },
        {
          tagName: "tbody",
          attributes: {
            "data-role": "table-body"
          },
          children: []
        },
        {
          tagName: "tfoot",
          attributes: {
            "data-role": "table-footer"
          },
          children: [
            {
              tagName: "tr",
              attributes: {
                "data-role": "table-footer-row"
              },
              children: []
            }
          ]
        }
      ]
    },
    single: [
      {
        narration: "Build column widths",
        destinationPath: {
          fileName: "base",
          dataRole: "table-colgroup",
          filePath: [
            "children"
          ]
        },
        sourcePath: {
          fileName: "data",
          filePath: [
            "columns"
          ]
        },
        templateKey: "buildColGroup",
        func: "fromCollection"
      },
      {
        narration: "Build table header",
        destinationPath: {
          fileName: "base",
          dataRole: "table-header-row",
          filePath: [
            "children"
          ]
        },
        sourcePath: {
          fileName: "data",
          filePath: [
            "columns"
          ]
        },
        templateKey: "buildHeader",
        func: "fromCollection"
      },
      {
        narration: "Build footer input cells",
        destinationPath: {
          fileName: "base",
          dataRole: "table-footer-row",
          filePath: [
            "children"
          ]
        },
        sourcePath: {
          fileName: "data",
          filePath: [
            "columns"
          ]
        },
        templateKey: "buildFooter",
        func: "fromCollection"
      }
    ],
    double: [
      {
        narration: "Build table body",
        destinationPath: {
          fileName: "base",
          dataRole: "table-body",
          filePath: [
            "children"
          ]
        },
        sourcePath: {
          fileName: "data",
          filePath: [
            "columns"
          ]
        },
        func: "twoDimensional"
      }
    ]
  },
  bodyOnly: {
    base: {
      tagName: "tbody",
      attributes: {
        "data-role": "table-body"
      },
      children: []
    },
    single: [],
    double: [
      {
        narration: "Build table body",
        destinationPath: {
          fileName: "base",
          dataRole: "table-body",
          filePath: [
            "children"
          ]
        },
        sourcePath: {
          fileName: "data",
          filePath: [
            "columns"
          ]
        },
        func: "twoDimensional"
      }
    ]
  },
  footerOnly: {
    base: {
      tagName: "tfoot",
      attributes: {
        "data-role": "table-footer"
      },
      children: [
        {
          tagName: "tr",
          attributes: {
            "data-role": "table-footer-row"
          },
          children: []
        }
      ]
    },
    single: [
      {
        narration: "Build footer input cells",
        destinationPath: {
          fileName: "base",
          dataRole: "table-footer-row",
          filePath: [
            "children"
          ]
        },
        sourcePath: {
          fileName: "data",
          filePath: [
            "columns"
          ]
        },
        templateKey: "buildFooter",
        func: "fromCollection"
      }
    ],
    double: []
  },
  headerOnly: {
    base: {
      tagName: "table",
      attributes: {
        class: "table table-hover table-striped align-middle border mb-0"
      },
      children: [
        {
          tagName: "colgroup",
          attributes: {
            "data-role": "table-colgroup"
          },
          children: []
        },
        {
          tagName: "thead",
          attributes: {
            class: "table-dark",
            "data-role": "table-header"
          },
          children: [
            {
              tagName: "tr",
              attributes: {
                "data-role": "table-header-row"
              },
              children: []
            }
          ]
        },
        {
          tagName: "tbody",
          attributes: {
            "data-role": "table-body"
          },
          children: []
        }
      ]
    },
    single: [
      {
        narration: "Build column widths",
        destinationPath: {
          fileName: "base",
          dataRole: "table-colgroup",
          filePath: [
            "children"
          ]
        },
        sourcePath: {
          fileName: "data",
          filePath: [
            "columns"
          ]
        },
        templateKey: "buildColGroup",
        func: "fromCollection"
      },
      {
        narration: "Build table header",
        destinationPath: {
          fileName: "base",
          dataRole: "table-header-row",
          filePath: [
            "children"
          ]
        },
        sourcePath: {
          fileName: "data",
          filePath: [
            "columns"
          ]
        },
        templateKey: "buildHeader",
        func: "fromCollection"
      }
    ],
    double: []
  }
}, z = {
  base: {
    tagName: "select",
    attributes: {
      id: "${columnName}",
      "data-name": "${columnName}"
    },
    children: []
  }
}, J = {
  base: {
    tagName: "datalist",
    attributes: {
      id: "${columnName}",
      "data-name": "${columnName}"
    },
    children: []
  }
}, Q = {
  base: {
    tagName: "div",
    attributes: {
      class: "d-flex align-items-center gap-2"
    },
    children: [
      {
        tagName: "label",
        textContent: "${label}",
        attributes: {
          class: "form-label mb-0 text-nowrap fw-semibold",
          for: "${id}"
        }
      },
      {
        tagName: "input",
        attributes: {
          type: "search",
          placeholder: "${placeholder}",
          class: "form-control",
          id: "${id}"
        }
      }
    ]
  }
}, X = {
  base: {
    tagName: "div",
    attributes: {
      class: "card shadow-sm border-0"
    },
    children: [
      {
        tagName: "div",
        attributes: {
          class: "card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center"
        },
        children: [
          {
            tagName: "h2",
            textContent: "${title}",
            attributes: {
              class: "h5 fw-bold mb-0 text-dark"
            }
          }
        ]
      },
      {
        tagName: "div",
        attributes: {
          class: "card-body p-4"
        },
        children: [
          {
            tagName: "form",
            attributes: {
              id: "${formId}",
              "data-role": "form-body"
            },
            children: []
          }
        ]
      }
    ]
  }
}, p = {
  table: _,
  select: z,
  dataList: J,
  searchInput: Q,
  form: X
}, Y = (t) => typeof t == "object" && t !== null && !Array.isArray(t), Z = (t, e) => {
  if (!Y(t)) return;
  let a = {};
  for (const [r, o] of Object.entries(t))
    a[r] = h(e, o);
  return a;
}, tt = (t, e) => {
  const a = structuredClone(t);
  return Array.isArray(a) ? a.map((o) => h(e, o)) : void 0;
}, A = (t, e, a) => {
  if (t === "${agg:count}" && "rowData" in e) {
    if (Array.isArray(e == null ? void 0 : e.rowData))
      return e == null ? void 0 : e.rowData.length;
  } else
    return t === "${rowValue}" && "rowData" in e ? e == null ? void 0 : e.rowData : t.replace(/\$\{(\w+)\}/g, (r, o) => e[o] !== void 0 ? e[o] : r);
}, et = (t, e) => A(t, e), at = (t, e, a) => {
  if (a && console.log("inElement : ", t), a && console.log("inTemplate : ", e), e == null)
    throw new TypeError("inTemplate is required");
  if (typeof e != "object" && typeof e != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("inElement must be an object");
  return !0;
}, rt = {
  name: "json-transformer-funcs-primitive",
  version: "1.9.0"
}, ot = (t) => {
  var e, a;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).applyTemplate ?? (e.applyTemplate = t), (a = globalThis.ks).transformerFuncs ?? (a.transformerFuncs = {}), globalThis.ks.transformerFuncs.primitive = {
    meta: rt,
    applyTemplate: t
  });
}, h = (t, e, a) => {
  const r = t, o = e;
  at(r, o, a);
  const l = structuredClone(o);
  return typeof l == "string" ? A(l, r) : (l === null || typeof l != "object" || ("textContent" in l && (l.textContent = et(l == null ? void 0 : l.textContent, r)), "attributes" in l && (l.attributes = Z(l == null ? void 0 : l.attributes, r)), "children" in l && (l.children = tt(l == null ? void 0 : l.children, r))), l);
};
ot(h);
const lt = (t, e) => {
  if (!Array.isArray(t))
    throw new TypeError("inSource must be an Array");
  if (t.length === 0)
    throw new Error("inSource cannot be empty");
  for (let a = 0; a < t.length; a++)
    if (!t[a] || typeof t[a] != "object")
      throw new TypeError(`inSource[${a}] must be an object`);
  if (!e || typeof e != "object" && typeof e != "string")
    throw new TypeError("inTemplate must be an object or string");
  return !0;
}, f = (t, e) => {
  const a = t, r = e;
  return lt(a, r), a.map((o) => h(o, r));
}, w = (t) => Array.isArray(t) ? t : [t], j = (t, e, a) => {
  t[e] = a;
}, nt = (t, e, a) => {
  t[e].push(...w(a));
}, st = (t, e, a) => {
  t[e].unshift(...w(a));
}, ct = (t, e, a) => {
  t[e].forEach((r) => {
    r.children.push(...structuredClone(w(a)));
  });
}, it = (t, e, a) => {
  t[e].forEach((r) => {
    r.children.unshift(...structuredClone(w(a)));
  });
}, ut = (t, e, a) => {
  t[e].forEach((r, o) => {
    const l = structuredClone(a);
    l.textContent = o + 1, r.children.unshift(l);
  });
}, dt = {
  set: j,
  push: nt,
  unshift: st,
  pushToRows: ct,
  unshiftToRows: it,
  unshiftSerialToRows: ut
}, bt = (t, e) => t.map((r) => ({
  ...r,
  rowData: e[r.columnName]
})), mt = (t, e, a) => {
  var o, l, s, n, i, c;
  if (!Array.isArray(t))
    throw new TypeError("inColumns must be an Array");
  if (t.length === 0)
    throw new Error("inColumns cannot be empty");
  for (let u = 0; u < t.length; u++) {
    const d = t[u];
    if (!d || typeof d != "object")
      throw new TypeError(`inColumns[${u}] must be an object`);
    if (typeof d.columnName != "string" || !d.columnName.trim())
      throw new TypeError(`inColumns[${u}].columnName must be a non-empty string`);
  }
  if (!Array.isArray(e))
    throw new TypeError("inData must be an Array");
  for (let u = 0; u < e.length; u++) {
    const d = e[u];
    if (!d || typeof d != "object")
      throw new TypeError(`inData[${u}] must be an object`);
  }
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new TypeError("inSpec must be an object");
  const r = ((s = (l = (o = t[0]) == null ? void 0 : o.template) == null ? void 0 : l.body) == null ? void 0 : s.tr) || "buildBodyTr";
  if (!(r in a))
    throw new Error(`Row template "${r}" not found in inSpec`);
  for (let u = 0; u < t.length; u++) {
    const d = t[u], b = ((i = (n = d.template) == null ? void 0 : n.body) == null ? void 0 : i.cell) || ((c = d.template) == null ? void 0 : c.bodyCell) || "buildBodyCell";
    if (!(b in a))
      throw new Error(`Cell template "${b}" for column "${d.columnName}" not found in inSpec`);
  }
  return !0;
}, ht = (t, e) => t.map((r) => {
  var n, i, c;
  const o = ((i = (n = r.template) == null ? void 0 : n.body) == null ? void 0 : i.cell) || ((c = r.template) == null ? void 0 : c.bodyCell) || "buildBodyCell", l = e[o];
  return h(r, l);
}), pt = (t, e, a) => {
  var c, u, d;
  mt(t, e, a);
  const r = t, o = e, l = a, s = ((d = (u = (c = r[0]) == null ? void 0 : c.template) == null ? void 0 : u.body) == null ? void 0 : d.tr) || "buildBodyTr", n = l[s];
  return o.map((b) => {
    const m = h(b, n), N = bt(r, b), R = ht(N, l);
    return m.children = R, m;
  });
}, T = (t, e) => {
  var a;
  if (((a = t == null ? void 0 : t.attributes) == null ? void 0 : a["data-role"]) === e) return t;
  for (const r of (t == null ? void 0 : t.children) ?? []) {
    const o = T(r, e);
    if (o) return o;
  }
  return null;
}, ft = (t, e) => {
  const a = e.dataRole ? T(t[e.fileName], e.dataRole) : t[e.fileName], r = [...e.filePath ?? []], o = r.pop();
  return { parent: r.reduce((s, n) => s[n], a), key: o };
}, S = (t, e, a, r) => {
  const { parent: o, key: l } = ft(t, e), s = e.action;
  (dt[s] || j)(o, l, a);
}, F = (t, e) => {
  var a;
  if (((a = t == null ? void 0 : t.attributes) == null ? void 0 : a["data-role"]) === e) return t;
  for (const r of (t == null ? void 0 : t.children) ?? []) {
    const o = F(r, e);
    if (o) return o;
  }
  return null;
}, yt = (t, e) => {
  const a = t[e.fileName], r = e.dataRole ? F(a, e.dataRole) : a;
  return (e.filePath ?? []).reduce((o, l) => o[l], r);
}, gt = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, wt = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, Nt = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, $t = {
  tagName: "td",
  children: [
    {
      tagName: "input",
      attributes: {
        type: "text",
        placeholder: "enter ${columnName}",
        name: "${columnName}",
        id: "${columnName}",
        list: "${columnName}",
        class: "form-control"
      }
    }
  ]
}, xt = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, Ct = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, Pt = {
  tagName: "td",
  attributes: {
    class: "py-2 px-3 text-center"
  },
  children: [
    {
      tagName: "button",
      textContent: "${agg:count}",
      attributes: {
        class: "btn btn-primary btn-sm"
      }
    }
  ]
}, At = {
  tagName: "td",
  attributes: {
    class: "py-2 px-3 text-center"
  },
  children: [
    {
      tagName: "button",
      textContent: "show",
      attributes: {
        class: "btn btn-primary btn-sm ks-btn-show"
      }
    }
  ]
}, jt = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, Tt = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, St = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, Ft = {
  tagName: "td",
  children: []
}, vt = {
  tagName: "th",
  textContent: "#",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Rt = {
  tagName: "col",
  attributes: {
    width: "50px"
  }
}, Bt = {
  tagName: "col",
  attributes: {
    width: "100px"
  }
}, kt = {
  tagName: "th",
  textContent: "options",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Ot = {
  tagName: "td",
  attributes: {
    class: "py-2 px-3 text-center"
  },
  children: [
    {
      tagName: "button",
      textContent: "save",
      attributes: {
        class: "btn btn-warning btn-sm ks-btn-save"
      }
    }
  ]
}, Lt = {
  tagName: "div",
  attributes: {
    class: "row mb-3 justify-content-end"
  },
  children: [
    {
      tagName: "div",
      attributes: {
        class: "col-md-4"
      },
      children: [
        {
          tagName: "div",
          attributes: {
            class: "input-group"
          },
          children: [
            {
              tagName: "span",
              attributes: {
                class: "input-group-text bg-white"
              },
              children: [
                {
                  tagName: "i",
                  attributes: {
                    class: "bi bi-search"
                  },
                  textContent: "🔍"
                }
              ]
            },
            {
              tagName: "input",
              attributes: {
                type: "text",
                id: "tableSearch",
                class: "form-control",
                placeholder: "Search table..."
              }
            }
          ]
        }
      ]
    }
  ]
}, Kt = {
  buildBodyTr: gt,
  buildColGroup: wt,
  buildHeader: Nt,
  buildFooter: $t,
  buildBodyCell: xt,
  button: Ct,
  buttonCell: Pt,
  optionsButtonCell: At,
  buildOption: jt,
  buildSelect: Tt,
  buildDataList: St,
  emptyCell: Ft,
  headerSerialCell: vt,
  colGroupForSerial: Rt,
  colGroupForOption: Bt,
  headerForOption: kt,
  tdWithButtonSaveWarning: Ot,
  tableSearch: Lt
}, Et = { applyTemplate: h, fromCollection: f }, Gt = (t, e, a) => (t == null ? void 0 : t.sourcePath) === null ? null : yt(e, t.sourcePath), Dt = (t, e, a) => {
  const r = (e == null ? void 0 : e.spec) ?? Kt, o = t.templateKey, l = t == null ? void 0 : t.func, s = r[o], n = Gt(t, e), i = l === null ? s : Et[t.func](n, s), c = n === null ? s : i;
  S(e, t.destinationPath, c);
}, g = (t, e, a, r) => {
  t.forEach((o) => {
    Dt(o, e);
  });
}, It = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, Wt = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, Ht = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Vt = {
  tagName: "td",
  children: [
    {
      tagName: "input",
      attributes: {
        type: "text",
        placeholder: "enter ${columnName}",
        name: "${columnName}",
        id: "${columnName}",
        list: "${columnName}",
        class: "form-control"
      }
    }
  ]
}, Mt = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, qt = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, Ut = {
  tagName: "td",
  attributes: {
    class: "py-2 px-3 text-center"
  },
  children: [
    {
      tagName: "button",
      textContent: "${agg:count}",
      attributes: {
        class: "btn btn-primary btn-sm"
      }
    }
  ]
}, _t = {
  tagName: "td",
  attributes: {
    class: "py-2 px-3 text-center"
  },
  children: [
    {
      tagName: "button",
      textContent: "show",
      attributes: {
        class: "btn btn-primary btn-sm ks-btn-show"
      }
    }
  ]
}, zt = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, Jt = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, Qt = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, Xt = {
  tagName: "td",
  children: []
}, Yt = {
  tagName: "th",
  textContent: "#",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Zt = {
  tagName: "col",
  attributes: {
    width: "50px"
  }
}, te = {
  tagName: "col",
  attributes: {
    width: "100px"
  }
}, ee = {
  tagName: "th",
  textContent: "options",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, ae = {
  tagName: "td",
  attributes: {
    class: "py-2 px-3 text-center"
  },
  children: [
    {
      tagName: "button",
      textContent: "save",
      attributes: {
        class: "btn btn-warning btn-sm ks-btn-save"
      }
    }
  ]
}, re = {
  buildBodyTr: It,
  buildColGroup: Wt,
  buildHeader: Ht,
  buildFooter: Vt,
  buildBodyCell: Mt,
  button: qt,
  buttonCell: Ut,
  optionsButtonCell: _t,
  buildOption: zt,
  buildSelect: Jt,
  buildDataList: Qt,
  emptyCell: Xt,
  headerSerialCell: Yt,
  colGroupForSerial: Zt,
  colGroupForOption: te,
  headerForOption: ee,
  tdWithButtonSaveWarning: ae
}, oe = { applyTemplate: h, fromCollection: f, twoDimensional: pt }, le = (t, e, a, r) => {
  const o = oe[t.func](
    e.data.columns,
    e.data.data,
    re
  );
  S(e, t.destinationPath, o);
}, ne = (t, e, a, r) => {
  t.forEach((o) => {
    le(o, e);
  });
}, se = (t, e, a) => {
  const r = !!(t && typeof t == "object" && !Array.isArray(t)), o = `guards/base: ${r ? "passed" : "failed"}`;
  return Array.isArray(a) && a.push(o), e && console.log(o), r;
}, ce = (t, e, a) => {
  const r = !!(t && typeof t == "object" && !Array.isArray(t)), o = `guards/options: ${r ? "passed" : "failed"}`;
  return Array.isArray(a) && a.push(o), e && console.log(o), r;
}, ie = (t, e, a) => {
  const r = typeof t == "boolean", o = `guards/showLog: ${r ? "passed" : "failed"}`;
  return Array.isArray(a) && a.push(o), e && console.log(o), r;
}, ue = (t, e, a) => {
  const r = Array.isArray(t), o = `guards/returnLog: ${r ? "passed" : "failed"}`;
  return r ? t.push(o) : Array.isArray(a) && a.push(o), e && console.log(o), r;
}, de = ({ options: t, base: e, showLog: a, returnLog: r }) => ({
  base: se(e, a, r),
  options: ce(t, a, r),
  showLog: ie(a, a, r),
  returnLog: ue(r, a, r)
}), be = [
  {
    narration: "Prepend the serial column width to the table colgroup.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-colgroup",
      filePath: [
        "children"
      ],
      action: "unshift"
    },
    sourcePath: null,
    templateKey: "colGroupForSerial",
    func: null
  },
  {
    narration: "Prepend the serial header cell to the table header row.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-header-row",
      filePath: [
        "children"
      ],
      action: "unshift"
    },
    sourcePath: null,
    templateKey: "headerSerialCell",
    func: null
  },
  {
    narration: "Prepend the serial number cell into each table body row.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-body",
      filePath: [
        "children"
      ],
      action: "unshiftSerialToRows"
    },
    sourcePath: null,
    templateKey: "buildBodyCell",
    func: null
  },
  {
    narration: "Prepend the serial footer cell to the table footer row.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-footer-row",
      filePath: [
        "children"
      ],
      action: "unshift"
    },
    sourcePath: null,
    templateKey: "headerSerialCell",
    func: null
  }
], me = [
  {
    narration: "Append the options column width to the table colgroup.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-colgroup",
      filePath: [
        "children"
      ],
      action: "push"
    },
    sourcePath: null,
    templateKey: "colGroupForOption",
    func: null
  },
  {
    narration: "Append the options header cell to the table header row.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-header-row",
      filePath: [
        "children"
      ],
      action: "push"
    },
    sourcePath: null,
    templateKey: "headerForOption",
    func: null
  },
  {
    narration: "Append the options button cell into each table body row.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-body",
      filePath: [
        "children"
      ],
      action: "pushToRows"
    },
    sourcePath: null,
    templateKey: "optionsButtonCell",
    func: null
  },
  {
    narration: "Append the options footer cell to the table footer row.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-footer-row",
      filePath: [
        "children"
      ],
      action: "push"
    },
    sourcePath: null,
    templateKey: "tdWithButtonSaveWarning",
    func: null
  }
], he = [
  {
    narration: "Prepend the search row to top of the table.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-parent",
      filePath: [
        "children"
      ],
      action: "unshift"
    },
    sourcePath: null,
    templateKey: "tableSearch",
    func: null
  }
], v = (t, e) => {
  var a;
  return !t || typeof t != "object" ? !1 : ((a = t.attributes) == null ? void 0 : a["data-role"]) === e ? !0 : Array.isArray(t.children) && t.children.some((r) => v(r, e));
}, $ = (t, e) => t.filter(
  ({ destinationPath: r }) => v(e, r == null ? void 0 : r.dataRole)
), pe = ({ options: t = {}, base: e, showLog: a = !1, returnLog: r = [] } = {}) => {
  const o = de({ options: t, base: e, showLog: a, returnLog: r });
  if (!Object.values(o).every(Boolean))
    return e;
  const l = t, s = e;
  return (l.showSerial || l.serial) && g(
    $(be, s),
    { base: s }
  ), (l.showOptions || l.options) && g(
    $(me, s),
    { base: s }
  ), l.showSearch && g(
    $(he, s),
    { base: s }
  ), s;
}, C = ({
  inData: t = [],
  inColumns: e = [],
  inType: a = "simple",
  footer: r = [],
  inOptions: o = {},
  options: l = {},
  inShowLog: s = !1
} = {}) => {
  const n = !a || a === "table" ? "simple" : a, i = Object.keys(o || {}).length > 0 ? o : l, c = p.table[n] || p.table.simple;
  if (!c)
    throw new Error(`Unknown table type: "${n}". Available types: ${Object.keys(p.table).join(", ")}`);
  const u = structuredClone(c.base), d = {
    data: { columns: e, data: t },
    base: u,
    ...i
  };
  return c.single && c.single.length > 0 && g(c.single, d), c.double && c.double.length > 0 && ne(c.double, d), pe({ options: i, base: u }), u;
}, fe = ({ inData: t = [], inColumns: e = [], inOptions: a = {}, options: r = {} } = {}) => {
  const o = Object.keys(a || {}).length > 0 ? a : r, l = p.select;
  let s = e;
  if (o.columnName || o.column) {
    const n = o.columnName || o.column;
    s = e.filter((i) => (i.columnName || i) === n);
  } else e.length > 1 && !o.allColumns && (s = [e.find((i) => i.type === "select") || e[0]]);
  return s.map((n) => {
    const i = (n == null ? void 0 : n.columnName) || (n == null ? void 0 : n.name) || n || "", c = structuredClone(l.base);
    c.attributes.id = i, c.attributes["data-name"] = i;
    const u = {
      tagName: "option",
      textContent: `\${${i}}`,
      attributes: { value: `\${${i}}` }
    };
    return c.children = f(t, u), c;
  });
}, ye = ({ inData: t = [], inColumns: e = [] } = {}) => e.map((a) => {
  const r = (a == null ? void 0 : a.columnName) || "", o = {
    tagName: "option",
    textContent: `\${${r}}`,
    attributes: { value: `\${${r}}` }
  };
  return f(t, o);
}), P = ({ inData: t = [], inColumns: e = [], inOptions: a = {}, options: r = {} } = {}) => {
  const o = Object.keys(a || {}).length > 0 ? a : r, l = p.dataList;
  let s = e;
  if (o.columnName || o.column) {
    const n = o.columnName || o.column;
    s = e.filter((i) => (i.columnName || i) === n);
  } else e.length > 1 && !o.allColumns && (s = [e[0]]);
  return s.map((n) => {
    const i = (n == null ? void 0 : n.columnName) || (n == null ? void 0 : n.name) || n || "", c = structuredClone(l.base);
    c.attributes.id = i, c.attributes["data-name"] = i;
    const u = {
      tagName: "option",
      textContent: `\${${i}}`,
      attributes: { value: `\${${i}}` }
    };
    return c.children = f(t, u), c;
  });
}, x = ({ inOptions: t = {}, options: e = {} } = {}) => {
  const a = Object.keys(t || {}).length > 0 ? t : e, r = structuredClone(p.searchInput.base), o = a.label ?? "Search:", l = a.placeholder ?? "Search...", s = a.id ?? "searchInputId", n = a.class ?? "form-control";
  return r.children[0].textContent = o, r.children[0].attributes.for = s, r.children[1].attributes.placeholder = l, r.children[1].attributes.id = s, r.children[1].attributes.class = n, r;
}, ge = (t, e = {}) => {
  const a = t.columnName || t.name || "", r = t.label || a, o = t.type || "text", l = t.placeholder || "", s = e[a] ?? t.value ?? "", n = t.required ?? !1;
  if (o === "textarea") {
    const c = {
      tagName: "textarea",
      textContent: String(s),
      attributes: {
        class: "form-control",
        id: a,
        name: a,
        placeholder: l,
        rows: "3"
      }
    };
    return n && (c.attributes.required = "true"), {
      tagName: "div",
      attributes: { class: "mb-3" },
      children: [
        { tagName: "label", textContent: r, attributes: { class: "form-label fw-semibold small text-secondary", for: a } },
        c
      ]
    };
  }
  if (o === "select") {
    const c = (t.options || []).map((u) => {
      const d = typeof u == "object" ? u.value : u, b = typeof u == "object" ? u.label : u, m = {
        tagName: "option",
        textContent: String(b),
        attributes: { value: String(d) }
      };
      return String(d) === String(s) && (m.attributes.selected = "true"), m;
    });
    return {
      tagName: "div",
      attributes: { class: "mb-3" },
      children: [
        { tagName: "label", textContent: r, attributes: { class: "form-label fw-semibold small text-secondary", for: a } },
        {
          tagName: "select",
          attributes: { class: "form-select", id: a, name: a },
          children: c
        }
      ]
    };
  }
  if (o === "checkbox") {
    const c = {
      tagName: "input",
      attributes: {
        type: "checkbox",
        class: "form-check-input",
        id: a,
        name: a
      }
    };
    return s && (c.attributes.checked = "true"), {
      tagName: "div",
      attributes: { class: "mb-3 form-check" },
      children: [
        c,
        { tagName: "label", textContent: r, attributes: { class: "form-check-label small fw-semibold text-secondary", for: a } }
      ]
    };
  }
  const i = {
    tagName: "input",
    attributes: {
      type: o,
      class: "form-control",
      id: a,
      name: a,
      placeholder: l
    }
  };
  return s !== "" && (i.attributes.value = String(s)), n && (i.attributes.required = "true"), {
    tagName: "div",
    attributes: { class: "mb-3" },
    children: [
      { tagName: "label", textContent: r, attributes: { class: "form-label fw-semibold small text-secondary", for: a } },
      i
    ]
  };
}, we = ({
  inData: t = [],
  inColumns: e = [],
  inOptions: a = {},
  options: r = {}
} = {}) => {
  var m;
  const o = Object.keys(a || {}).length > 0 ? a : r, l = structuredClone((m = p.form) == null ? void 0 : m.base), s = o.title || o.ariaLabel || "Form", n = o.formId || "formElement", i = o.submitLabel || "Submit";
  l.children[0].children[0].textContent = s;
  const c = l.children[1].children[0];
  c.attributes.id = n;
  const u = Array.isArray(t) && t.length > 0 ? t[0] : t || {}, d = e.map((N) => ge(N, u)), b = {
    tagName: "div",
    attributes: { class: "d-flex justify-content-end gap-2 mt-4 pt-3 border-top" },
    children: [
      { tagName: "button", textContent: "Reset", attributes: { type: "reset", class: "btn btn-outline-secondary" } },
      { tagName: "button", textContent: i, attributes: { type: "submit", class: "btn btn-primary px-4 fw-medium" } }
    ]
  };
  return c.children = [...d, b], l;
}, Ne = {
  table: C,
  tableFromSpec: C,
  select: fe,
  selectOptionsOnly: ye,
  dataList: P,
  datalist: P,
  searchInput: x,
  search: x,
  inputRow: x,
  form: we
}, $e = (t = {}) => {
  G(t);
  const e = t == null ? void 0 : t.showLog, a = t.type, r = t == null ? void 0 : t.options;
  let o = a, l = a;
  if (a.includes(".")) {
    const i = a.split(".");
    o = i[0], l = i[1];
  }
  e && console.log("localMainType : ", o, l);
  const s = Ne[o];
  if (!s)
    throw new Error(`Renderer for type "${o}" not found.`);
  const n = s({
    inType: l,
    inColumns: t.columns,
    inData: t.data,
    inOptions: r,
    options: t.options,
    inShowLog: e
  });
  return e && console.log("json-renderers-build output:", n), n;
};
k($e);
export {
  $e as default,
  $e as render
};
