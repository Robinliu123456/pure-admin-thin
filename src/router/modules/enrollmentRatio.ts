// 最简代码，也就是这些字段必须有
export default {
  path: "/enrollmentRatio",
  meta: {
    title: "报录比综合查询"
  },
  children: [
    {
      path: "/enrollmentRatio",
      name: "EnrollmentRatio",
      component: () => import("@/views/enrollmentRatio/index.vue"),
      meta: {
        title: "报录比综合查询"
      }
    }
  ]
};
