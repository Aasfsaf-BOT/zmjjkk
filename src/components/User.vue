<template>
  <header>
    <div id="Logo">
      <img src="/images/logo_2.png" alt="Logo" />
    </div>
    <div id="Super_link">
      <div class="links">
        <router-link to="/">首页</router-link>
        <router-link to="/mall">商城</router-link>
        <router-link to="/comunity">社区</router-link>
        <router-link to="/user">用户</router-link>
        <router-link to="/about">概况</router-link> |
        <router-link to="/news">新闻</router-link>
      </div>
    </div>
  </header>

  <div id="profile">
    <div class="container">
      <!-- 个人照片 -->
      <div class="photo">
        <img src="/images/username.png" alt="个人照片" />
      </div>

      <!-- 个人基本信息 -->
      <div class="info">
        <h2>个人信息</h2>
        <p><strong>姓名:</strong> 傅方威</p>
        <p><strong>班级:</strong> 信科221</p>
        <p><strong>职业:</strong> 前端开发</p>
        <p><strong>兴趣:</strong> 编程、阅读、旅行</p>
        <p><strong>联系方式:</strong> 1142119552@qq.com</p>
      </div>

      <!-- 网站设计简介 -->
      <div class="description">
        <h2>网站设计简介</h2>
        <p>本网站是一个宁波工程学院的图书商城平台，旨在为校内师生提供一个易于浏览、搜索和购买图书的便捷平台。我们提供丰富的图书种类，包括文学、历史、科技、艺术等多个类别。设计理念是简洁、清晰、用户友好，致力于提升用户体验，快速找到所需的图书并完成购买。</p>
        <p>本网站一共分为6个部分：首页、商城、社区、用户、概况、新闻。</p>
        <p>首页部分展示了宁波工程学院建校50周年的隆重图片，接下来展示每日特价的图书以及校园资讯。</p>
        <p>商城部分提供商品搜索界面，可以查看不同分类的书籍及当日特价商品。</p>
        <p>社区部分用于在校购买图书的用户之间的交流与互动。</p>
        <p>用户界面展示了个人信息、照片及本网站简介。</p>
        <p>概况界面显示了学校的概况。</p>
        <p>新闻界面显示了学校的最新动态与大事。</p>
      </div>
    </div>

    <footer>
      <p>版权所有 &copy; 2024 财大书城</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Profile',
};
</script>

<style scoped>
/* Header */
header {
  background-color: #047;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

#Logo img {
  width: 100px;
}

#Super_link {
  display: flex;
  align-items: center;
}

#Super_link a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

#Super_link a:hover {
  color: #ffbc00;
}

/* Profile */
#profile {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.container {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.photo {
  flex: 1;
  text-align: center;
  margin-right: 20px;
}

.photo img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #007bff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.info,
.description {
  flex: 2;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: 20px;
}

.info h2,
.description h2 {
  margin-bottom: 15px;
  color: #007bff;
  font-size: 1.5em;
}

.info p,
.description p {
  line-height: 1.8;
  font-size: 1.1em;
  margin-bottom: 10px;
}

.description p {
  color: #555;
}

footer {
  background-color: #036;
  color: #fff;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .photo {
    margin-bottom: 30px;
    margin-left: 0;
  }

  .info,
  .description {
    width: 100%;
    margin-left: 0;
  }

  #Super_link a {
    margin: 0 5px;
  }
}
</style>
