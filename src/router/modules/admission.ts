// 最简代码，也就是这些字段必须有
export default {
  path: "/admission",
  meta: {
    title: "录取名单深度分析"
  },
  children: [
    {
      path: "/admission",
      name: "Admission",
      component: () => import("@/views/admission/index.vue"),
      meta: {
        title: "录取名单深度分析"
      }
    }
  ]
};
