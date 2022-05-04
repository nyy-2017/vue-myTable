<template>
  <div>
    <h2>{{tableSettings.title}}</h2>
    <v-table @select="handleSelect" :data="tableData" :header="tableHeader" :settings="tableSettings" />
    <h3> 选中的值：{{ selecteds}} </h3>
  </div>
</template>

<script>
import vTable from "@/components/ui-table/table.vue";
import constant from "@/components/constant.js";
export default {
  name: "myTable",
  data() {
    return {
      tableData: [],
      tableHeade: [],
      tableSettings: {},
      selecteds: []
    };
  },
  components: { vTable },
  methods: {
    handleSelect(type, e) {
      console.log("e:", type, e);
      // this.selecteds = e
    },
  },
  created() {
    this.tableHeader = constant.tableHeader;
    this.tableSettings = constant.tableSettings;
    for (let i = 0; i < 30; i++) {
      this.tableData.push({
        name: "王小虎111",
        department: "财务部",
        workCode: "SPT0108",
        annualLeave: 10,
        privateAffairLeave: 1,
        sickLeave: 1,
        maternityLeave: 1,
        paternityLeave: 1,
        doubleOvertime: 100,
        threeOvertime: 1000,
        totalAllowance: 12222,
        attendanceCoefficient: 12,
        signature: "王小虎"
      });
    }
  }
};
</script>