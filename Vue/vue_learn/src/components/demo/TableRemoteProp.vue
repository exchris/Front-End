<template>
    <div class="wrap">
        <div class="tableData">
            <el-table
                    v-loading.body="loading"
                    :data="tableData"
                    stripe
                    border
                    element-loading-text="拼命加载中..."
                    @sort-change="sortChange"
                    style="width: 100%"
                    :default-sort="{prop: 'kcal', order: 'descending'}">
                <el-table-column
                        label="排名"
                        align="center"
                        style="width:5%;">
                    <template slot-scope="scope">
                        {{scope.row.rank}}
                    </template>
                </el-table-column>
                <el-table-column label="性别" style="width: 10%;" prop="sex" sortable align="center">
                    <template slot-scope="scope">
                        {{scope.row.sex}}
                    </template>
                </el-table-column>
                <el-table-column label="手机" style="width: 20%;" align="center">
                    <template slot-scope="scope">
                        {{scope.row.phone}}
                    </template>
                </el-table-column>
                <el-table-column label="团队" style="width: 20%;" align="center">
                    <template slot-scope="scope">
                        {{scope.row.teamName}}
                    </template>
                </el-table-column>
                <el-table-column label="消耗" style="width: 10%;" align="center" prop="kcal" sortable="custom">
                    <template slot-scope="scope">
                        {{scope.row.skcal}}
                    </template>
                </el-table-column>
                <el-table-column label="报名场馆" style="width: 10%;" align="center">
                    <template slot-scope="scope">
                        {{scope.row.branchName}}
                    </template>
                </el-table-column>
                <el-table-column label="备注" style="width: 25%;">
                    <template slot-scope="scope">
                        {{scope.row.remark}}
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="page" v-show="firstPaginationshow == 1">
            <el-pagination
                    background
                    @current-change="CurrentChange"
                    :current-page="firstpages.currentPage"
                    :page-size="firstpages.pageSize"
                    layout="total,prev,pager,next,jumper"
                    :total="firstpages.total"></el-pagination>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import qs from 'qs';
    import router from 'vue-router';
    import {Message} from 'element-ui';

    export default {
        data() {
            return {
                firstpages: "",
                firstPaginationshow: 0,
                firstchange: 0,
                tableData: [],
                loading: false,
                prop:"kcal",
                order:"desc",
            }
        },
        created: function () {
            this.ListClick(0)
        },
        methods: {
            ListClick(index) {
                this.pagechange = 0;
                this.firstpages = {};
                this.firstpages['currentPage'] = 1;
                this.firstpages['pageSize'] = 10;
                this.firstpages['totalpage'] = 0;
                this.firstpages['total'] = 0;
                this.getList();
            },
            CurrentChange(val) {
                if (this.pagechange == 0) {
                    return;
                }
                //页码变化取值
                this.firstpages['currentPage'] = parseInt(val);
                this.getList();
            },
            getList() {
                let url = "http://www.api.com/" + "NewActives/NewActivityRank/getRankList";
                let params = {};
                params['uid'] = 10002;
                params['clubId'] = 1001;
                params['branchId'] = 10010;
                params['token'] = "0a41c9281630a37ed3ab61033c3d9424";
                params['pid'] = 101;
                params['pages'] = parseInt(this.firstpages['currentPage']) - 1;
                params['rows'] = 10;
                params['id'] = 92;
                params['status'] = 1;
                params['keyworks'] = "";
                params['teamId'] = -1;
                params['branch'] = -1;
                params['type'] = 1;
                params['stime'] = 0;
                params['etime'] = 0;
                params['prop'] = this.prop;
                params['order'] = this.order;
                this.loading = true;
                axios.get(url, {params}).then((res) => {
                    console.log(res.data);
                    var rdata = res.data;
                    this.loading = false;
                    if (rdata['code'] != 1) {
                        //数据不合法
                        Message({showClose: true, message: rdata['message'], type: 'error'});
                    } else if (rdata['code'] == 1) {
                        var result = rdata['message'];
                        this.pagechange = 0;
                        //构造数组
                        this.firstpages['currentPage'] = parseInt(result['pages']['currentPage']);
                        this.firstpages['totalpage'] = parseInt(result['pages']['totalpage']);
                        this.firstpages['total'] = parseInt(result['pages']['total']);
                        if (this.firstpages['total'] != 0) {
                            this.firstPaginationshow = 1;
                        } else {
                            this.firstPaginationshow = 0;
                        }
                        this.tableData = [];
                        for (var i in result['list']) {
                            var rd = new Object();
                            for (var j in result['list'][i]) {
                                rd[j] = result['list'][i][j];
                            }
                            rd['check'] = false;
                            this.tableData.push(rd);
                        }
                        this.pagechange = 1;
                    }
                });

            },
            sortChange(column) {
                console.log(column.order);
                if (column.prop != null){
                    this.prop = column.prop;
                    this.order = column.order === "descending" ? "desc" : "asc";
                }
                this.getList();
            }
        },

    }
</script>

<style scoped>

</style>