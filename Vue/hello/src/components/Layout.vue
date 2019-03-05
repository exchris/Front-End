<template>
    <div>
        <!--基础布局-->
        <div class="basic-layout">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark"></div>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple"></div>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="4">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
    </div>

        <!--分栏 布局-->
        <div class="column-interval">
            <el-row :gutter="20">
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </div>

        <!--混合布局-->
        <div class="mixed-layout">
            <el-row :gutter="20">
                <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </div>

        <!--分栏偏移-->
        <div class="column-offset">
            <el-row :gutter="20">
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </div>

        <!--对齐方式-->
        <div class="alignment">
            <el-row type="flex" class="row-bg">
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="end">
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="space-between">
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </div>

        <!--响应式布局-->
        <div class="responsive-layout">
            <el-row :gutter="10">
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Layout"
    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
    }

    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .column-interval {
        margin-top:40px;
    }
</style>