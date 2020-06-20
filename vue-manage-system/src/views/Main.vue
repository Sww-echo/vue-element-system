<template>
  <el-container style="height:100%">
    <el-aside width="auto"><CommonAside></CommonAside></el-aside>
    <el-container>
      <el-header><CommonHeader></CommonHeader></el-header>
      <CommonTab></CommonTab>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonHeader from "../components/CommonHeader";
import CommonAside from "../components/CommonAside";
import CommonTab from "../components/commonTab";
export default {
  components: {
    CommonHeader,
    CommonAside,
    CommonTab
  }
};
</script>

<style lang="scss" scoped>
.el-header {
  background-color: black;
}
</style>
