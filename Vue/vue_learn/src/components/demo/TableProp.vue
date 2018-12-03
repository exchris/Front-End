<template>
    <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort="{prop: 'date', order: 'descending'}">
        <el-table-column
                prop="date"
                label="日期"
                sortable
                width="180">
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名"
                sortable
                width="180">
        </el-table-column>
        <el-table-column
                prop="address"
                label="地址">
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小',
                    address: '一、上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王虎',
                    address: '二、上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '三、上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '小虎',
                    address: '四、上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods: {
            /*formatter(row, column) {
                return row.address;
            }*/
        }
    }
</script>
<style scoped>

</style>