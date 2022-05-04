<template>
  <div>
    <h2>{{tableSettings.title}}</h2>
    <v-table @select="handleSelect" :data="tableData" :header="tableHeader" :settings="tableSettings" />
    <h3> 选中的值：{{ selecteds}} </h3>
    <!-- 子组件 -->
    <myTable-modal ref="myTableModal1" />
  </div>
</template>

<script>
import vTable from "@/components/ui-table/table.vue";
import myTableModal from './mytableModal.vue'
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
    components: { vTable, myTableModal },
    methods: {
        handleSelect(type, e) {
            console.log("e:", type, e);
            if (type == 'select'){
                this.selecteds = e
            } else if (type == 'warning') {
                this.$refs.myTableModal1.modal1 = true;
                this.$refs.myTableModal1.titles = '查看详情';
            } else if (type == 'edit') {
                this.$refs.myTableModal1.modal1 = true;
                this.$refs.myTableModal1.titles = '修改';
                this.$refs.myTableModal1.fromData = e
            }
        },
    },
    created() {
        this.tableHeader = constant.tableHeader;
        this.tableSettings = constant.tableSettings;

        this.tableData = [
            {
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
                signature: "王小虎1"
            },
            {
                name: "王小虎222",
                department: "财务部",
                workCode: "SPT0109",
                annualLeave: 10,
                privateAffairLeave: 1,
                sickLeave: 1,
                maternityLeave: 1,
                paternityLeave: 1,
                doubleOvertime: 100,
                threeOvertime: 1000,
                totalAllowance: 12222,
                attendanceCoefficient: 12,
                signature: "王小虎2"
            },
            {
                name: "王小虎333",
                department: "财务部",
                workCode: "SPT0110",
                annualLeave: 10,
                privateAffairLeave: 1,
                sickLeave: 1,
                maternityLeave: 1,
                paternityLeave: 1,
                doubleOvertime: 100,
                threeOvertime: 1000,
                totalAllowance: 12222,
                attendanceCoefficient: 12,
                signature: "王小虎3"
            },
            {
                name: "王小虎444",
                department: "财务部",
                workCode: "SPT0111",
                annualLeave: 10,
                privateAffairLeave: 1,
                sickLeave: 1,
                maternityLeave: 1,
                paternityLeave: 1,
                doubleOvertime: 100,
                threeOvertime: 1000,
                totalAllowance: 12222,
                attendanceCoefficient: 12,
                signature: "王小虎4"
            },
            {
                name: "王小虎555",
                department: "财务部",
                workCode: "SPT0112",
                annualLeave: 10,
                privateAffairLeave: 1,
                sickLeave: 1,
                maternityLeave: 1,
                paternityLeave: 1,
                doubleOvertime: 100,
                threeOvertime: 1000,
                totalAllowance: 12222,
                attendanceCoefficient: 12,
                signature: "王小虎5"
            }

        ]
      
    }
}
</script>