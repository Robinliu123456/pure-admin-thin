// 最简代码，也就是这些字段必须有
export default {
  path: "/enrollmentGuide",
  meta: {
    title: "招生简章"
  },
  children: [
    {
      path: "/enrollmentGuide",
      name: "EnrollmentGuide",
      component: () => import("@/views/enrollmentGuide/index.vue"),
      meta: {
        title: "招生简章"
      }
    }
  ]
};
