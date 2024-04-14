<script setup lang="ts">
defineOptions({
  // name 作为一种规范最好必须写上并且和路由的name保持一致
  name: "Catalog"
});
import { reactive } from "vue";
import "@pureadmin/table/dist/style.css";
import { PureTable } from "@pureadmin/table";
const formInline = reactive({
  user: "",
  region: "",
  date: "",
  area: "",
  provinceName: "",
  schoolRank: "",
  schoolName: "",
  departmentName: "",
  majorRank: "",
  subMajorName: "",
  detailMajorName: "",
  majorTrend: "",
  english: "",
  math: "",
  majorCourse: ""
});

const onSubmit = () => {
  console.log("submit!");
};
const data = [
  { field: "area", title: "地区" },
  { field: "provinceName", title: "省份" },
  { field: "schoolRank", title: "学校类型" },
  {
    field: "schoolName",
    title: "学校名称",
    templet: function (d) {
      return (
        '<a style="color:#1E9FFF" href="schoolCatalog.html?schoolName=' +
        d.schoolName +
        '">' +
        d.schoolName +
        "</a>"
      );
    }
  },
  { field: "departmentName", title: "院系名称" },
  { field: "majorRank", title: "专业排名" },
  { field: "subMajorCode", title: "二级专业编码" },
  {
    field: "subMajorName",
    title: "二级专业名称",
    templet: function (d) {
      return (
        '<a style="color:#1E9FFF" href="majorCatalog.html?subMajorCode=' +
        d.subMajorCode +
        "&subMajorName=" +
        d.subMajorName +
        '">' +
        d.subMajorName +
        "</a>"
      );
    }
  },
  { field: "detailMajorCode", title: "三级专业编码" },
  { field: "detailMajorName", title: "三级专业名称" },
  { field: "majorTrend", title: "专业方向" },
  { field: "english", title: "英语" },
  { field: "math", title: "专业课一/数学" },
  { field: "majorCourse", title: "专业课" },
  { field: "admissionMajorCount", title: "专业合计拟统招人数" },
  { field: "admissionTrendCount", title: "小方向拟统招人数" },
  { field: "comment", title: "备注" }
];
const tableData = [
  {
    area: "2016-05-03",
    provinceName: "Tom",
    schoolRank: "No. 189, Grove St, Los Angeles"
  }
];
</script>

<template>
  <div>
    <el-form
      :model="formInline"
      class="demo-form-inline"
      label-position="right"
      label-width="auto"
    >
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="地区">
            <el-input
              v-model="formInline.area"
              placeholder="（比如东北地区）"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="省份">
            <el-input
              v-model="formInline.provinceName"
              placeholder="（比如辽宁省)"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="学校类型">
            <el-input
              v-model="formInline.schoolRank"
              placeholder="(比如211、985或普通）"
              clearable
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="学校名称">
            <el-input
              v-model="formInline.schoolName"
              placeholder="（比如大连理工大学）"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="院系名称">
            <el-input
              v-model="formInline.departmentName"
              placeholder="（比如计算机学院）"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="专业排名">
            <el-input
              v-model="formInline.majorRank"
              placeholder="（比如A+）"
              clearable
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="二级专业名称">
            <el-input
              v-model="formInline.subMajorName"
              placeholder="（比如石油与天然气工程）"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="三级专业名称">
            <el-input
              v-model="formInline.detailMajorName"
              placeholder="（比如油气储运工程）"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="专业方向">
            <el-input
              v-model="formInline.majorTrend"
              placeholder="（具体研究方向）"
              clearable
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="英语">
            <el-input
              v-model="formInline.detailMajorName"
              placeholder="（比如英语一）"
              clearable
            /> </el-form-item
        ></el-col>
        <el-col :span="8">
          <el-form-item label="专业课一/数学">
            <el-input
              v-model="formInline.detailMajorName"
              placeholder="（比如数学一）"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="专业课二">
            <el-input
              v-model="formInline.detailMajorName"
              placeholder="（比如408）"
              clearable
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item style="float: right">
        <el-button type="warning" @click="onSubmit">清空</el-button>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-alert
        title="（温馨提示）整理数据和开发系统耗费了大量的人力和费用，为了可持续发展，同时避免爬虫盗取数据，免费账号仅提供以下学校的详细信息，统计类信息来自所有876所的数据，我们只对详细信息做了限制，希望同学们能够理解：
清华大学、北京大学、浙江大学、安徽农业大学、上海交通大学
付费账号很快就会推出，售价不超过20元，同学们敬请期待"
        type="success"
        :closable="false"
      />
    </el-form>
    <el-tabs type="border-card" class="demo-tabs">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><calendar /></el-icon>
            <span>总览表</span>
          </span>
        </template>
        <el-table
          locale="zhCn"
          :data="tableData"
          :columns="columns"
          :pagination="pagination"
        >
          <el-table-column prop="area" label="地区" />
          <el-table-column prop="provinceName" label="省份" />
          <el-table-column prop="schoolRank" label="学校类型" />
          <el-table-column prop="schoolName" label="学校名称" />
          <el-table-column prop="departmentName" label="院系名称" />
          <el-table-column prop="majorRank" label="专业排名" />
          <el-table-column prop="subMajorCode" label="二级专业编码" />
          <el-table-column prop="subMajorName" label="二级专业名称" />
          <el-table-column prop="detailMajorCode" label="三级专业编码" />
          <el-table-column prop="majorTrend" label="专业方向" />
          <el-table-column prop="english" label="英语" />
          <el-table-column prop="math" label="专业课一/数学" />
          <el-table-column prop="majorCourse" label="专业课" />
          <el-table-column
            prop="admissionMajorCount"
            label="专业合计拟统招人数"
          />
          <el-table-column
            prop="admissionTrendCount"
            label="小方向拟统招人数"
          />
          <el-table-column prop="comment" label="备注" />
        </el-table>
        <el-pagination
          v-model:current-page="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </el-tab-pane>
      <el-tab-pane label="招生人数分布统计">招生人数分布统计 </el-tab-pane>
      <el-tab-pane label="王牌专业汇总">王牌专业汇总 </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style>
.demo-form-inline .el-input {
  --el-input-width: 20vw;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>

<!-- <script lang="ts" setup>
defineOptions({
  // name 作为一种规范最好必须写上并且和路由的name保持一致
  name: "Catalog"
});
import { reactive } from "vue";
import "@pureadmin/table/dist/style.css";
import { PureTable } from "@pureadmin/table";
const formInline = reactive({
  user: "",
  region: "",
  date: "",
  area: "",
  provinceName: "",
  schoolRank: "",
  schoolName: "",
  departmentName: "",
  majorRank: "",
  subMajorName: "",
  detailMajorName: "",
  majorTrend: "",
  english: "",
  math: "",
  majorCourse: ""
});

const onSubmit = () => {
  console.log("submit!");
};
const data = [
  { field: "area", title: "地区" },
  { field: "provinceName", title: "省份" },
  { field: "schoolRank", title: "学校类型" },
  {
    field: "schoolName",
    title: "学校名称",
    templet: function (d) {
      return (
        '<a style="color:#1E9FFF" href="schoolCatalog.html?schoolName=' +
        d.schoolName +
        '">' +
        d.schoolName +
        "</a>"
      );
    }
  },
  { field: "departmentName", title: "院系名称" },
  { field: "majorRank", title: "专业排名" },
  { field: "subMajorCode", title: "二级专业编码" },
  {
    field: "subMajorName",
    title: "二级专业名称",
    templet: function (d) {
      return (
        '<a style="color:#1E9FFF" href="majorCatalog.html?subMajorCode=' +
        d.subMajorCode +
        "&subMajorName=" +
        d.subMajorName +
        '">' +
        d.subMajorName +
        "</a>"
      );
    }
  },
  { field: "detailMajorCode", title: "三级专业编码" },
  { field: "detailMajorName", title: "三级专业名称" },
  { field: "majorTrend", title: "专业方向" },
  { field: "english", title: "英语" },
  { field: "math", title: "专业课一/数学" },
  { field: "majorCourse", title: "专业课" },
  { field: "admissionMajorCount", title: "专业合计拟统招人数" },
  { field: "admissionTrendCount", title: "小方向拟统招人数" },
  { field: "comment", title: "备注" }
];
const tableData = [
  {
    area: "2016-05-03",
    provinceName: "Tom",
    schoolRank: "No. 189, Grove St, Los Angeles"
  }
];
</script>
<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-row :gutter="24">
      <el-col :span="8">
        <el-form-item label="地区（比如东北地区）">
          <el-input
            v-model="formInline.area"
            placeholder="Approved by"
            clearable
          />
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="省份（比如辽宁省）">
          <el-input
            v-model="formInline.provinceName"
            placeholder="Approved by"
            clearable
          />
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="学校类型（比如211、985或普通）">
          <el-input
            v-model="formInline.schoolRank"
            placeholder="Approved by"
            clearable
          />
        </el-form-item>
      </el-col>
    </el-row>

    <el-form-item label="学校名称（比如大连理工大学）">
      <el-input
        v-model="formInline.schoolName"
        placeholder="Approved by"
        clearable
      />
    </el-form-item>
    <el-form-item label="院系名称（比如计算机学院）">
      <el-input
        v-model="formInline.departmentName"
        placeholder="Approved by"
        clearable
      />
    </el-form-item>
    <el-form-item label="专业排名（比如A+）">
      <el-input
        v-model="formInline.majorRank"
        placeholder="Approved by"
        clearable
      />
    </el-form-item>
    <el-form-item label="二级专业名称（比如石油与天然气工程）">
      <el-input
        v-model="formInline.subMajorName"
        placeholder="Approved by"
        clearable
      />
    </el-form-item>
    <el-form-item label="三级专业名称（比如油气储运工程）">
      <el-input
        v-model="formInline.detailMajorName"
        placeholder="Approved by"
        clearable
      />
    </el-form-item>
    <el-form-item label="专业方向（具体研究方向）">
      <el-input
        v-model="formInline.majorTrend"
        placeholder="Approved by"
        clearable
      />
    </el-form-item>
    <el-form-item label="英语（比如英语一）">
      <el-input
        v-model="formInline.detailMajorName"
        placeholder="Approved by"
        clearable
      />
    </el-form-item>
    <el-form-item label="专业课一/数学（比如数学一）">
      <el-input
        v-model="formInline.detailMajorName"
        placeholder="Approved by"
        clearable
      />
    </el-form-item>
    <el-form-item label="专业课二（比如408）">
      <el-input
        v-model="formInline.detailMajorName"
        placeholder="Approved by"
        clearable
      />
    </el-form-item>
    <el-alert
      title="（温馨提示）整理数据和开发系统耗费了大量的人力和费用，为了可持续发展，同时避免爬虫盗取数据，免费账号仅提供以下学校的详细信息，统计类信息来自所有876所的数据，我们只对详细信息做了限制，希望同学们能够理解：
清华大学、北京大学、浙江大学、安徽农业大学、上海交通大学
付费账号很快就会推出，售价不超过20元，同学们敬请期待"
      type="success"
      :closable="false"
    />

    <el-form-item>
      <el-button type="primary" @click="onSubmit">清空</el-button>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
  <el-tabs type="border-card" class="demo-tabs">
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon><calendar /></el-icon>
          <span>总览表</span>
        </span>
      </template>
      <el-table
        locale="zhCn"
        :data="tableData"
        :columns="columns"
        :pagination="pagination"
      >
        <el-table-column prop="area" label="地区" />
        <el-table-column prop="provinceName" label="省份" />
        <el-table-column prop="schoolRank" label="学校类型" />
        <el-table-column prop="schoolName" label="学校名称" />
        <el-table-column prop="departmentName" label="院系名称" />
        <el-table-column prop="majorRank" label="专业排名" />
        <el-table-column prop="subMajorCode" label="二级专业编码" />
        <el-table-column prop="subMajorName" label="二级专业名称" />
        <el-table-column prop="detailMajorCode" label="三级专业编码" />
        <el-table-column prop="majorTrend" label="专业方向" />
        <el-table-column prop="english" label="英语" />
        <el-table-column prop="math" label="专业课一/数学" />
        <el-table-column prop="majorCourse" label="专业课" />
        <el-table-column
          prop="admissionMajorCount"
          label="专业合计拟统招人数"
        />
        <el-table-column prop="admissionTrendCount" label="小方向拟统招人数" />
        <el-table-column prop="comment" label="备注" />
      </el-table>
      <el-pagination
        v-model:current-page="currentPage4"
        v-model:page-size="pageSize4"
        :page-sizes="[100, 200, 300, 400]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-tab-pane>
    <el-tab-pane label="招生人数分布统计">招生人数分布统计 </el-tab-pane>
    <el-tab-pane label="王牌专业汇总">王牌专业汇总 </el-tab-pane>
  </el-tabs>
</template>

<style>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style> -->
