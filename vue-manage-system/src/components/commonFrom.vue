<template>
  <el-form :inline="inline" :model="form" ref="form" label-width="100px">
    <el-form-item v-for="item in formLabel" :key="item.model">
      <el-input
        v-model="form[item.model]"
        :placeholder="'请输入' + item.label"
        v-if="!item.type"
      ></el-input>
      <el-select
        v-model="form[item.model]"
        placeholder="请选择"
        v-if="item.type === 'select'"
      >
        <el-option
          v-for="item in item.opts"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-switch
        v-model="form[item.model]"
        v-if="item.type === 'switch'"
      ></el-switch>
    </el-form-item>
    <el-form-item><slot></slot></el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    form: Object,
    formLabel: Array,
    inline: Boolean
  }
};
</script>

<style lang="scss" scoped></style>
