const width = 120;
const tableSettings = {
  height: "71vh",
  title: "自愿加班/请假申请表",
  isPagination: true,
  total: 100,
  // currentPage: 2
  isIndex: true,
  isSelection: true
};
const tableHeader = [
  // { type: "selection", width: 120, fixed: true },
  { prop: "name", label: "姓名", width, fixed: true },
  { prop: "department", label: "部门", fixed: true },
  { prop: "workCode", label: "工号", width, fixed: true },
  { prop: "annualLeave", label: "年假(天)", width: 80 },
  { prop: "privateAffairLeave", label: "事假(小时)", width: 90 },
  { prop: "sickLeave", label: "病假(小时)", width: 90 },
  { prop: "maternityLeave", label: "产假(天)", width: 80 },
  { prop: "paternityLeave", label: "陪产假(小时)", width: 110 },
  { prop: "doubleOvertime", label: "二倍加班", width },
  { prop: "threeOvertime", label: "三倍加班", width },
  { prop: "totalAllowance", label: "津贴合计", width },
  { prop: "attendanceCoefficient", label: "出勤系数", width },
  { prop: "signature", label: "签字", width },
  {
    prop: "action",
    label: "操作",
    width: "500",
    arr: [{ type: "danger ", name: "查看" },
    { type: "delete", name: "删除" },
    { type: "edit", name: "修改" }
    ]
  }
];
export default { tableHeader, tableSettings };
