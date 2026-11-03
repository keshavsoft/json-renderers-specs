const K = {
  version: "1.4.1",
  name: "json-renderers-specs"
}, D = (t) => {
  t && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersSpecs = {
    meta: K,
    render: t
  });
}, E = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.type;
  if (a === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof a != "string")
    throw new TypeError("type must be a string");
  return !0;
}, I = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.data;
  if (a === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(a))
    throw new TypeError("data must be an Array");
  return !0;
}, G = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.columns;
  if (a === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(a))
    throw new TypeError("columns must be an Array");
  return !0;
}, V = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.showLog;
  if (a !== void 0 && typeof a != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, H = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("Config must be an object");
  return E(e), I(e), G(e), V(e), !0;
}, W = "table", M = "", q = [], U = [], _ = "", z = "replace", J = !1, w = {
  type: W,
  targetHtmlId: M,
  data: q,
  columns: U,
  classToApply: _,
  appendPosition: z,
  showLog: J
}, Q = (t) => {
  const e = typeof t == "object" && t !== null ? t.inKey ?? t.key : t;
  return e && e in w ? w[e] : { ...w };
};
Object.assign(Q, w);
const X = {
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
}, Y = {
  base: {
    tagName: "select",
    attributes: {
      id: "${columnName}",
      "data-name": "${columnName}"
    },
    children: []
  }
}, Z = {
  simple: {
    base: {
      tagName: "div",
      attributes: {
        "data-role": "datalist-parent"
      },
      children: []
    },
    single: [
      {
        narration: "Build datalist control from columns",
        destinationPath: {
          fileName: "base",
          dataRole: "datalist-parent",
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
        templateKey: "buildDataList",
        func: "fromCollection"
      },
      {
        narration: "Build datalist options from data",
        destinationPath: {
          fileName: "base",
          dataRole: "datalist-control",
          filePath: [
            "children"
          ]
        },
        sourcePath: {
          fileName: "data",
          filePath: [
            "data"
          ]
        },
        templateKey: "buildOption",
        func: "fromCollection"
      }
    ],
    double: []
  },
  base: {
    tagName: "div",
    attributes: {
      "data-role": "datalist-parent"
    },
    children: []
  },
  single: [
    {
      narration: "Build datalist control from columns",
      destinationPath: {
        fileName: "base",
        dataRole: "datalist-parent",
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
      templateKey: "buildDataList",
      func: "fromCollection"
    },
    {
      narration: "Build datalist options from data",
      destinationPath: {
        fileName: "base",
        dataRole: "datalist-control",
        filePath: [
          "children"
        ]
      },
      sourcePath: {
        fileName: "data",
        filePath: [
          "data"
        ]
      },
      templateKey: "buildOption",
      func: "fromCollection"
    }
  ],
  double: []
}, tt = {
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
}, et = {
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
}, h = {
  table: X,
  select: Y,
  dataList: Z,
  searchInput: tt,
  form: et
}, N = (t) => Array.isArray(t) ? t : [t], R = (t, e, a) => {
  t[e] = a;
}, at = (t, e, a) => {
  t[e].push(...N(a));
}, ot = (t, e, a) => {
  t[e].unshift(...N(a));
}, rt = (t, e, a) => {
  t[e].forEach((o) => {
    o.children.push(...structuredClone(N(a)));
  });
}, lt = (t, e, a) => {
  t[e].forEach((o) => {
    o.children.unshift(...structuredClone(N(a)));
  });
}, nt = (t, e, a) => {
  t[e].forEach((o, r) => {
    const l = structuredClone(a);
    l.textContent = r + 1, o.children.unshift(l);
  });
}, st = {
  set: R,
  push: at,
  unshift: ot,
  pushToRows: rt,
  unshiftToRows: lt,
  unshiftSerialToRows: nt
}, it = (t) => typeof t == "object" && t !== null && !Array.isArray(t), ct = (t, e) => {
  if (!it(t)) return;
  let a = {};
  for (const [o, r] of Object.entries(t))
    a[o] = m(e, r);
  return a;
}, ut = (t, e) => {
  const a = structuredClone(t);
  return Array.isArray(a) ? a.map((r) => m(e, r)) : void 0;
}, T = (t, e, a) => {
  if (t === "${agg:count}" && "rowData" in e) {
    if (Array.isArray(e == null ? void 0 : e.rowData))
      return e == null ? void 0 : e.rowData.length;
  } else
    return t === "${rowValue}" && "rowData" in e ? e == null ? void 0 : e.rowData : t.replace(/\$\{(\w+)\}/g, (o, r) => e[r] !== void 0 ? e[r] : o);
}, dt = (t, e) => T(t, e), bt = (t, e, a) => {
  if (a && console.log("inElement : ", t), a && console.log("inTemplate : ", e), e == null)
    throw new TypeError("inTemplate is required");
  if (typeof e != "object" && typeof e != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("inElement must be an object");
  return !0;
}, ht = {
  name: "json-transformer-funcs-primitive",
  version: "1.9.1"
}, mt = (t) => {
  var e, a;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).applyTemplate ?? (e.applyTemplate = t), (a = globalThis.ks).transformerFuncs ?? (a.transformerFuncs = {}), globalThis.ks.transformerFuncs.primitive = {
    meta: ht,
    applyTemplate: t
  });
}, m = (t, e, a) => {
  const o = t, r = e;
  bt(o, r, a);
  const l = structuredClone(r);
  return typeof l == "string" ? T(l, o) : (l === null || typeof l != "object" || ("textContent" in l && (l.textContent = dt(l == null ? void 0 : l.textContent, o)), "attributes" in l && (l.attributes = ct(l == null ? void 0 : l.attributes, o)), "children" in l && (l.children = ut(l == null ? void 0 : l.children, o))), l);
};
mt(m);
const ft = (t, e) => {
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
}, P = (t, e) => {
  const a = t, o = e;
  return ft(a, o), a.map((r) => m(r, o));
}, pt = (t, e) => t.map((o) => ({
  ...o,
  rowData: e[o.columnName]
})), yt = (t, e) => {
  if (!Array.isArray(t))
    throw new TypeError("inColumns must be an Array");
  if (t.length === 0)
    throw new Error("inColumns cannot be empty");
  for (let a = 0; a < t.length; a++) {
    const o = t[a];
    if (!o || typeof o != "object")
      throw new TypeError(`inColumns[${a}] must be an object`);
    if (typeof o.columnName != "string" || !o.columnName.trim())
      throw new TypeError(`inColumns[${a}].columnName must be a non-empty string`);
  }
  if (!Array.isArray(e))
    throw new TypeError("inData must be an Array");
  for (let a = 0; a < e.length; a++) {
    const o = e[a];
    if (!o || typeof o != "object")
      throw new TypeError(`inData[${a}] must be an object`);
  }
  return !0;
}, gt = ({ inRowColumns: t, inSpec: e }) => t.map((o) => m(o, e)), wt = ({ columns: t, data: e, columnSpec: a, rowSpec: o }) => {
  yt(t, e);
  const r = t;
  return e.map((n) => {
    const c = m(n, o), i = pt(r, n), u = gt({
      inRowColumns: i,
      inSpec: a
    });
    return c.children = u, c;
  });
}, v = (t, e) => {
  var a;
  if (((a = t == null ? void 0 : t.attributes) == null ? void 0 : a["data-role"]) === e) return t;
  for (const o of (t == null ? void 0 : t.children) ?? []) {
    const r = v(o, e);
    if (r) return r;
  }
  return null;
}, Nt = (t, e, a) => {
  const o = e.fileName, r = v(t[o], e.dataRole), l = e.dataRole ? r : t[e.fileName], s = [...e.filePath ?? []], n = s.pop();
  return { parent: s.reduce((i, u) => i[u], l), key: n };
}, F = (t, e, a, o) => {
  const { parent: r, key: l } = Nt(t, e), s = e.action;
  (st[s] || R)(r, l, a);
}, B = (t, e) => {
  var a;
  if (((a = t == null ? void 0 : t.attributes) == null ? void 0 : a["data-role"]) === e) return t;
  for (const o of (t == null ? void 0 : t.children) ?? []) {
    const r = B(o, e);
    if (r) return r;
  }
  return null;
}, Pt = (t, e) => {
  const a = t[e.fileName], o = e.dataRole ? B(a, e.dataRole) : a;
  return (e.filePath ?? []).reduce((r, l) => r[l], o);
}, Ct = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, $t = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, xt = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, At = {
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
}, St = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, jt = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, Rt = {
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
}, Tt = {
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
}, vt = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, Ft = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, Bt = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, Lt = {
  tagName: "td",
  children: []
}, kt = {
  tagName: "th",
  textContent: "#",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Ot = {
  tagName: "col",
  attributes: {
    width: "50px"
  }
}, Kt = {
  tagName: "col",
  attributes: {
    width: "100px"
  }
}, Dt = {
  tagName: "th",
  textContent: "options",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Et = {
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
}, It = {
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
}, L = {
  buildBodyTr: Ct,
  buildColGroup: $t,
  buildHeader: xt,
  buildFooter: At,
  buildBodyCell: St,
  button: jt,
  buttonCell: Rt,
  optionsButtonCell: Tt,
  buildOption: vt,
  buildSelect: Ft,
  buildDataList: Bt,
  emptyCell: Lt,
  headerSerialCell: kt,
  colGroupForSerial: Ot,
  colGroupForOption: Kt,
  headerForOption: Dt,
  tdWithButtonSaveWarning: Et,
  tableSearch: It
}, Gt = { applyTemplate: m, fromCollection: P }, Vt = (t, e, a) => (t == null ? void 0 : t.sourcePath) === null ? null : Pt(e, t.sourcePath), Ht = (t, e, a) => {
  const o = (e == null ? void 0 : e.spec) ?? L, r = t.templateKey, l = t == null ? void 0 : t.func, s = o[r], n = Vt(t, e), c = l === null ? s : Gt[t.func](n, s);
  return n === null ? s : c;
}, Wt = (t, e, a) => {
  const o = a;
  o && console.log("runSingleInstruction 1 :", t, e);
  const r = Ht(t, e);
  o && console.log("runSingleInstruction 2 :", r), F(e, t.destinationPath, r);
}, p = (t, e, a, o) => {
  t.forEach((r) => {
    Wt(r, e, a);
  });
}, Mt = { applyTemplate: m, fromCollection: P, twoDimensional: wt }, qt = (t, e, a, o) => {
  console.log("localShowLog : ", a);
  const l = (e == null ? void 0 : e.spec) ?? L, s = Mt[t.func]({
    columns: e.data.columns,
    data: e.data.data,
    columnSpec: l.buildBodyCell,
    rowSpec: l.buildBodyTr
  });
  F(e, t.destinationPath, s);
}, k = (t, e, a, o) => {
  t.forEach((r) => {
    qt(r, e, a);
  });
}, Ut = (t, e, a) => {
  const o = !!(t && typeof t == "object" && !Array.isArray(t)), r = `guards/base: ${o ? "passed" : "failed"}`;
  return Array.isArray(a) && a.push(r), e && console.log(r), o;
}, _t = (t, e, a) => {
  const o = !!(t && typeof t == "object" && !Array.isArray(t)), r = `guards/options: ${o ? "passed" : "failed"}`;
  return Array.isArray(a) && a.push(r), e && console.log(r), o;
}, zt = (t, e, a) => {
  const o = typeof t == "boolean", r = `guards/showLog: ${o ? "passed" : "failed"}`;
  return Array.isArray(a) && a.push(r), e && console.log(r), o;
}, Jt = (t, e, a) => {
  const o = Array.isArray(t), r = `guards/returnLog: ${o ? "passed" : "failed"}`;
  return o ? t.push(r) : Array.isArray(a) && a.push(r), e && console.log(r), o;
}, Qt = ({ options: t, base: e, showLog: a, returnLog: o }) => ({
  base: Ut(e, a, o),
  options: _t(t, a, o),
  showLog: zt(a, a, o),
  returnLog: Jt(o, a, o)
}), Xt = [
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
], Yt = [
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
], Zt = [
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
], O = (t, e) => {
  var a;
  return !t || typeof t != "object" ? !1 : ((a = t.attributes) == null ? void 0 : a["data-role"]) === e ? !0 : Array.isArray(t.children) && t.children.some((o) => O(o, e));
}, $ = (t, e) => t.filter(
  ({ destinationPath: o }) => O(e, o == null ? void 0 : o.dataRole)
), te = ({ options: t = {}, base: e, showLog: a = !1, returnLog: o = [] } = {}) => {
  const r = Qt({ options: t, base: e, showLog: a, returnLog: o });
  if (!Object.values(r).every(Boolean))
    return e;
  const l = t, s = e, n = a;
  return (l.showSerial || l.serial) && p(
    $(Xt, s),
    { base: s },
    n
  ), (l.showOptions || l.options) && p(
    $(Yt, s),
    { base: s },
    n
  ), l.showSearch && p(
    $(Zt, s),
    { base: s },
    n
  ), s;
}, S = ({
  inData: t = [],
  inColumns: e = [],
  inType: a = "simple",
  footer: o = [],
  inOptions: r = {},
  options: l = {},
  inShowLog: s = !1
} = {}) => {
  const n = !a || a === "table" ? "simple" : a, c = Object.keys(r || {}).length > 0 ? r : l, i = s, u = h.table[n] || h.table.simple;
  if (!u)
    throw new Error(`Unknown table type: "${n}". Available types: ${Object.keys(h.table).join(", ")}`);
  const d = structuredClone(u.base), b = {
    data: { columns: e, data: t },
    base: d,
    ...c
  };
  return u.single && u.single.length > 0 && p(u.single, b, i), u.double && u.double.length > 0 && k(u.double, b), te({ options: c, base: d }), d;
}, ee = ({ inData: t = [], inColumns: e = [], inOptions: a = {}, options: o = {} } = {}) => {
  const r = Object.keys(a || {}).length > 0 ? a : o, l = h.select;
  let s = e;
  if (r.columnName || r.column) {
    const n = r.columnName || r.column;
    s = e.filter((c) => (c.columnName || c) === n);
  } else e.length > 1 && !r.allColumns && (s = [e.find((c) => c.type === "select") || e[0]]);
  return s.map((n) => {
    const c = (n == null ? void 0 : n.columnName) || (n == null ? void 0 : n.name) || n || "", i = structuredClone(l.base);
    i.attributes.id = c, i.attributes["data-name"] = c;
    const u = {
      tagName: "option",
      textContent: `\${${c}}`,
      attributes: { value: `\${${c}}` }
    };
    return i.children = P(t, u), i;
  });
}, ae = ({ inData: t = [], inColumns: e = [] } = {}) => e.map((a) => {
  const o = (a == null ? void 0 : a.columnName) || "", r = {
    tagName: "option",
    textContent: `\${${o}}`,
    attributes: { value: `\${${o}}` }
  };
  return P(t, r);
}), j = ({
  inData: t = [],
  inColumns: e = [],
  inType: a = "simple",
  inOptions: o = {},
  options: r = {},
  inShowLog: l = !1
} = {}) => {
  const s = !a || a === "dataList" || a === "datalist" ? "simple" : a, n = Object.keys(o || {}).length > 0 ? o : r, c = l, i = h.dataList[s] || h.dataList.simple || h.dataList;
  if (!i)
    throw new Error("dataList definition not found in definitions.json");
  let u = e;
  if (n.columnName || n.column) {
    const g = n.columnName || n.column;
    u = e.filter((C) => (C.columnName || C.name || C) === g);
  } else e.length > 1 && !n.allColumns && (u = [e[0]]);
  const d = u[0], b = (d == null ? void 0 : d.columnName) || (d == null ? void 0 : d.name) || d || "itemName", f = t.map((g) => ({
    rowValue: g[b] ?? "",
    [b]: g[b] ?? ""
  })), y = structuredClone(i.base), A = {
    data: {
      columns: u,
      data: f
    },
    base: y,
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
    ...n
  };
  return i.single && i.single.length > 0 && p(i.single, A, c), i.double && i.double.length > 0 && k(i.double, A), y;
}, x = ({ inOptions: t = {}, options: e = {} } = {}) => {
  const a = Object.keys(t || {}).length > 0 ? t : e, o = structuredClone(h.searchInput.base), r = a.label ?? "Search:", l = a.placeholder ?? "Search...", s = a.id ?? "searchInputId", n = a.class ?? "form-control";
  return o.children[0].textContent = r, o.children[0].attributes.for = s, o.children[1].attributes.placeholder = l, o.children[1].attributes.id = s, o.children[1].attributes.class = n, o;
}, oe = (t, e = {}) => {
  const a = t.columnName || t.name || "", o = t.label || a, r = t.type || "text", l = t.placeholder || "", s = e[a] ?? t.value ?? "", n = t.required ?? !1;
  if (r === "textarea") {
    const i = {
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
    return n && (i.attributes.required = "true"), {
      tagName: "div",
      attributes: { class: "mb-3" },
      children: [
        { tagName: "label", textContent: o, attributes: { class: "form-label fw-semibold small text-secondary", for: a } },
        i
      ]
    };
  }
  if (r === "select") {
    const i = (t.options || []).map((u) => {
      const d = typeof u == "object" ? u.value : u, b = typeof u == "object" ? u.label : u, f = {
        tagName: "option",
        textContent: String(b),
        attributes: { value: String(d) }
      };
      return String(d) === String(s) && (f.attributes.selected = "true"), f;
    });
    return {
      tagName: "div",
      attributes: { class: "mb-3" },
      children: [
        { tagName: "label", textContent: o, attributes: { class: "form-label fw-semibold small text-secondary", for: a } },
        {
          tagName: "select",
          attributes: { class: "form-select", id: a, name: a },
          children: i
        }
      ]
    };
  }
  if (r === "checkbox") {
    const i = {
      tagName: "input",
      attributes: {
        type: "checkbox",
        class: "form-check-input",
        id: a,
        name: a
      }
    };
    return s && (i.attributes.checked = "true"), {
      tagName: "div",
      attributes: { class: "mb-3 form-check" },
      children: [
        i,
        { tagName: "label", textContent: o, attributes: { class: "form-check-label small fw-semibold text-secondary", for: a } }
      ]
    };
  }
  const c = {
    tagName: "input",
    attributes: {
      type: r,
      class: "form-control",
      id: a,
      name: a,
      placeholder: l
    }
  };
  return s !== "" && (c.attributes.value = String(s)), n && (c.attributes.required = "true"), {
    tagName: "div",
    attributes: { class: "mb-3" },
    children: [
      { tagName: "label", textContent: o, attributes: { class: "form-label fw-semibold small text-secondary", for: a } },
      c
    ]
  };
}, re = ({
  inData: t = [],
  inColumns: e = [],
  inOptions: a = {},
  options: o = {}
} = {}) => {
  var f;
  const r = Object.keys(a || {}).length > 0 ? a : o, l = structuredClone((f = h.form) == null ? void 0 : f.base), s = r.title || r.ariaLabel || "Form", n = r.formId || "formElement", c = r.submitLabel || "Submit";
  l.children[0].children[0].textContent = s;
  const i = l.children[1].children[0];
  i.attributes.id = n;
  const u = Array.isArray(t) && t.length > 0 ? t[0] : t || {}, d = e.map((y) => oe(y, u)), b = {
    tagName: "div",
    attributes: { class: "d-flex justify-content-end gap-2 mt-4 pt-3 border-top" },
    children: [
      { tagName: "button", textContent: "Reset", attributes: { type: "reset", class: "btn btn-outline-secondary" } },
      { tagName: "button", textContent: c, attributes: { type: "submit", class: "btn btn-primary px-4 fw-medium" } }
    ]
  };
  return i.children = [...d, b], l;
}, le = {
  table: S,
  tableFromSpec: S,
  select: ee,
  selectOptionsOnly: ae,
  dataList: j,
  datalist: j,
  searchInput: x,
  search: x,
  inputRow: x,
  form: re
}, ne = (t = {}) => {
  H(t);
  const e = t == null ? void 0 : t.showLog, a = t.type, o = t == null ? void 0 : t.options;
  let r = a, l = a;
  if (a.includes(".")) {
    const c = a.split(".");
    r = c[0], l = c[1];
  }
  e && console.log("localMainType : ", r, l);
  const s = le[r];
  if (!s)
    throw new Error(`Renderer for type "${r}" not found.`);
  const n = s({
    inType: l,
    inColumns: t.columns,
    inData: t.data,
    inOptions: o,
    options: t.options,
    inShowLog: e
  });
  return e && console.log("json-renderers-build output:", n), n;
};
D(ne);
export {
  ne as default,
  ne as render
};
