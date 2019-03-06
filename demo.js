var data = {
  g_1: { id: "1", name: "all", description: "all", num: "8" },
  d_12: {
    id: "12",
    name: "研发部",
    description: "研发部111",
    group: { g_26: { id: "26", name: "1221", description: "", num: "0" } }
  },
  d_13: {
    id: "13",
    name: "测试部",
    description: "测试部",
    group: { g_24: { id: "24", name: "测试主机组", description: "", num: "0" } }
  },
  d_14: {
    id: "14",
    name: "信息部",
    description: "信息部",
    group: { g_25: { id: "25", name: "信息主机组", description: "", num: "2" } }
  },
  g_0: { id: "0", name: "no", description: "no", num: "6" }
};

function format(data) {}

data = [
  { id: data.g_1.id, value: "全部主机" + "(" + data.g_1.num + ")" },
  { id: data.g_0.id, value: "未分组主机" + "(" + data.g_0.num + ")" },
  {
    id: data.d_12.id,
    value: data.d_12.name,
    open: true,
    data: [
      {
        id: data.d_12.group.g_26.id,
        open: true,
        value: data.d_12.description + "(" + data.d_12.group.g_26.num + ")"
      }
    ]
  },
  {
    id: data.d_13.id,
    value: data.d_13.name,
    open: true,
    data: [
      {
        id: data.d_13.group.g_24.id,
        open: true,
        value: data.d_13.description + "(" + data.d_13.group.g_24.num + ")"
      }
    ]
  },
  {
    id: data.d_14.id,
    value: data.d_14.name,
    open: true,
    data: [
      {
        id: data.d_14.group.g_25.id,
        open: true,
        value: data.d_14.description + "(" + data.d_14.group.g_25.num + ")"
      }
    ]
  }
];

console.log(data)
