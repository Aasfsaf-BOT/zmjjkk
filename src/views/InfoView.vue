<template>
    <div>
      <h1>分块信息页</h1>
      <div v-for="n in 5" :key="n" class="info-block">
        <h2>分块信息 {{ n }}</h2>
        <p>这是第 {{ n }} 个信息内容。</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "InfoView",
  };
  </script>
  
  <style scoped>
  .info-block {
    border: 1px solid #ddd;
    padding: 15px;
    margin: 10px;
  }
  </style>
  