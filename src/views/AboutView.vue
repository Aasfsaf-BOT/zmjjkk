<template>
    <div class="about">
      <h1>个人介绍</h1>
      <img src="../assets/profile.jpg" alt="个人照片" class="profile-img" />
      <p>姓名：张三</p>
      <p>基本信息：前端开发者，热爱编程与设计。</p>
      <p>网站设计简介：该网站风格统一，原创设计。</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutView",
  };
  </script>
  
  <style scoped>
  .about {
    text-align: center;
  }
  .profile-img {
    width: 200px;
    border-radius: 50%;
    margin: 10px 0;
  }
  </style>
  