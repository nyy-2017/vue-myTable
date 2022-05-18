<template>
    <el-dialog :title="titles" :visible.sync="modal1" width="60%" :before-close="handleClose">
        <el-form :model="fromData" :rules="rules" ref="fromData" label-width="100px">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="fromData.name"></el-input>
                    </el-form-item>
                    <el-form-item label="部门" prop="department">
                        <el-input v-model="fromData.department"></el-input>
                    </el-form-item>
                    <el-form-item label="工号" prop="workCode">
                        <el-input v-model="fromData.workCode"></el-input>
                    </el-form-item>
                    <el-form-item label="年假(天)" prop="annualLeave">
                        <el-input v-model="fromData.annualLeave"></el-input>
                    </el-form-item>
                    <el-form-item label="事假(小时)" prop="privateAffairLeave">
                        <el-input v-model="fromData.privateAffairLeave"></el-input>
                    </el-form-item>
                    <el-form-item label="病假(小时)" prop="sickLeave">
                        <el-input v-model="fromData.sickLeave"></el-input>
                    </el-form-item>
                    <el-form-item label="产假(天)" prop="maternityLeave">
                        <el-input v-model="fromData.maternityLeave"></el-input>
                    </el-form-item>

                </el-col>

                <el-col :span="12">
                    <el-form-item label="陪产假(小时)" prop="paternityLeave">
                        <el-input v-model="fromData.paternityLeave"></el-input>
                    </el-form-item>
                    <el-form-item label="二倍加班" prop="doubleOvertime">
                        <el-input v-model="fromData.doubleOvertime"></el-input>
                    </el-form-item>
                    <el-form-item label="三倍加班" prop="threeOvertime">
                        <el-input v-model="fromData.threeOvertime"></el-input>
                    </el-form-item>
                    <el-form-item label="津贴合计" prop="totalAllowance">
                        <el-input v-model="fromData.totalAllowance"></el-input>
                    </el-form-item>
                    <el-form-item label="出勤系数" prop="attendanceCoefficient">
                        <el-input v-model="fromData.attendanceCoefficient"></el-input>
                    </el-form-item>
                    <el-form-item label="签名" prop="signature">
                        <el-input v-model="fromData.signature"></el-input>
                    </el-form-item>

                </el-col>
            </el-row>

            <el-form-item v-if="titles === '修改'">
                <el-button type="primary" @click="submitForm('fromData')">立即创建</el-button>
                <el-button @click="resetForm('fromData')">重置</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
export default {
    name: 'myTableModal',
    data () {
        return {
            modal1: false,
            titles: '',
            fromData: {
                name: '',
                department: '',
                workCode: '',
                annualLeave: '',
                maternityLeave: '',
                paternityLeave: '',
                doubleOvertime: '',
                threeOvertime: '',
                totalAllowance: '',
                attendanceCoefficient: '',
                signature: ""
            },
            rules: {
                name: [
                    { required: true, message: '请输入名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                // department: [
                //     { required: true, message: '请选择活动区域', trigger: 'change' }
                // ],
                // date1: [
                //     { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                // ],
                // date2: [
                //     { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                // ],
                // type: [
                //     { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                // ],
                // resource: [
                //     { required: true, message: '请选择活动资源', trigger: 'change' }
                // ],
                // desc: [
                //     { required: true, message: '请填写活动形式', trigger: 'blur' }
                // ]
            }
        }
    },
    methods:{
        handleClose() {
            this.modal1 = false
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>
