<template>
  <div>
    <el-col>
      <el-result
        icon="error"
        title="404"
        sub-title="页面不存在"
        style="padding: 150px; border: 1px solid #ddd"
      >
        <template #extra>
          <el-button type="primary" @click="$router.push('/')"
            >返回首页</el-button
          >
        </template>
      </el-result>
    </el-col>
  </div>
</template>

<script></script>

<style></style>
