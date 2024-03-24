// 最简代码，也就是这些字段必须有
export default {
  path: "/catalog",
  meta: {
    title: "专业目录综合分析查询"
  },
  children: [
    {
      path: "/catalog",
      name: "Catalog",
      component: () => import("@/views/catalog/index.vue"),
      meta: {
        title: "专业目录综合分析查询"
      }
    }
  ]
};
