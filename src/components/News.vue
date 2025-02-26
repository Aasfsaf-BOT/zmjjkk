<template>
  <div id="news-page">
     <!-- 头部 -->
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

    <!-- 主体内容 -->
    <div class="content">
      <!-- 左侧主要新闻 -->
      <div class="main-news">
        <div class="main-image">
          <img src="/images/50.jpg" alt="Main News" />
          <div class="overlay">
            <h2>浙江宁波：机器人进校园 点燃童心科技梦</h2>
            <p>
              近日，宁波工程学院“你好，Robot！”科普团成员带着两台机器人走进宁波市江北区慈城怀之幼儿园，与孩子们进行了一场互动表演，让孩子们近距离感受科技的魅力，激发他们的创新创造意识和科学探索精神。
            </p>
          </div>
        </div>
      </div>

      <!-- 右侧新闻列表 -->
      <aside class="news-list">
        <ul>
          <li>
            <h3>中国高校人文社会科学信息网</h3>
            <p>加快推进实体经济和数字经济深度融合</p>
          </li>
          <li>
            <h3>求是网</h3>
            <p>加快推进实体经济和数字经济深度融合</p>
          </li>
          <li>
            <h3>中国青年网</h3>
            <p>加快推进实体经济和数字经济深度融合</p>
          </li>
          <li>
            <h3>新华网</h3>
            <p>加快推进实体经济和数字经济深度融合</p>
          </li>
          <li>
            <h3>中国商务新闻网</h3>
            <p>加快推进实体经济和数字经济深度融合</p>
          </li>
          <li>
            <h3>凤凰网</h3>
            <p>加快推进实体经济和数字经济深度融合</p>
          </li>
        </ul>
      </aside>
    </div>

    <!-- 底部日期新闻 -->
    <footer>
  <div class="date-news">
    <ul>
      <!-- 左右两列的列表 -->
      <li>
        <span class="news-title">汤飞帆来校宣讲党的二十届三中全会精神及省委全会市委全会精神</span>
        <span class="news-date">9-19</span>
      </li>
      <li>
        <span class="news-title">纪检审计支部赴奉化滕头村开展主题党日活动</span>
        <span class="news-date">12-22</span>
      </li>
      <li>
        <span class="news-title">校领导为国交和经管学子讲授形势与政策课</span>
        <span class="news-date">12-21</span>
      </li>
      <li>
        <span class="news-title">冯建波调研马克思主义学院</span>
        <span class="news-date">12-20</span>
      </li>
      <li>
        <span class="news-title">校领导在前湾校区调研并讲授专题党课</span>
        <span class="news-date">12-20</span>
      </li>
      <li>
        <span class="news-title">学校召开本科公共课教学改革教师座谈会</span>
        <span class="news-date">12-19</span>
      </li>
      <li>
        <span class="news-title">学校召开2024年学院团委综合考核评比会</span>
        <span class="news-date">12-16</span>
      </li>
      <li>
        <span class="news-title">邵千钧在建交学院讲授“形势与政策”课</span>
        <span class="news-date">12-19</span>
      </li>
    </ul>
  </div>
</footer>
  </div>
</template>

<script>
export default {
  name: "NewsPage",
};
</script>

<style scoped>
/* 页面基础样式 */
#news-page {
  font-family: Arial, sans-serif;
  color: #333;
}

/* 头部导航样式 */
/* 头部 */
header {
    background-color: #047;
    color: white;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
}

/* 主体内容样式 */
.content {
  display: flex;
  padding: 20px;
  gap: 20px;
}

/* 左侧主要新闻样式 */
.main-news {
  flex: 2;
}

.main-news .main-image {
  position: relative;
}

.main-news .main-image img {
  width: 100%;
  border-radius: 8px;
}

.main-news .main-image .overlay {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  width: 96.59%;
  padding: 20px;
  border-radius: 0 0 8px 8px;
}

/* 右侧新闻列表样式 */
.news-list {
  flex: 1;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.news-list ul {
  list-style: none;
  padding: 0;
}

.news-list ul li {
  margin-bottom: 15px;
}

.news-list ul li h3 {
  font-size: 25px;
  color: #0056b3;
}

.news-list ul li p {
  font-size: 18px;
  color: #555;
}

/* 底部日期新闻样式 */
footer .date-news {
  margin-top: 20px;
  background: #f1f1f1;
  padding: 20px;
  border-radius: 8px;
}

footer .date-news ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr; /* 两列布局 */
  gap: 10px;
}

footer .date-news ul li {
  display: flex;
  justify-content: space-between; /* 标题和日期分布到两端 */
  align-items: center;
  font-size: 14px;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

footer .news-title {
  color: #333;
  flex: 1; /* 自动调整标题宽度 */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; /* 超出部分显示省略号 */
}

footer .news-date {
  color: #0056b3;
  font-weight: bold;
  margin-left: 10px;
  flex-shrink: 0; /* 日期保持固定宽度 */
}

</style>
