<template>
  <div>
    <!-- Header -->
    <div id="header">
      <div class="content">
        <span id="message">欢迎访问宁工书城！【登陆】【注册】</span>
        <span id="media">
          <div id="weibo"></div>
          <div id="weixin"></div>
          <div id="dianhua"></div>
        </span>
      </div>
    </div>

    <!-- Logo -->
    <div id="logo">
      <div class="content">
        <div>
          <img src="/images/logo_2.png" alt="" />
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div id="nav">
      <div class="content">
        <div id="slogan"></div>
        <ul id="menu">
          <!-- 遍历主菜单 -->
          <li
            v-for="(menu, index) in menuItems"
            :key="index"
            @mouseenter="toggleDropdown(index, true)"
            @mouseleave="toggleDropdown(index, false)"
          >
            <!--<a href="#">{{ menu.name }}</a>-->
            <!-- 跳转链接 -->
            <router-link :to="menu.link" class="menu-item">{{ menu.name }}</router-link>

            <!-- 子菜单 -->
            <ul v-show="menu.isOpen">
              <li v-for="(sub, i) in menu.subMenu" :key="i">
                <a href="#">{{ sub }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div id="picture">
      <img src="/images/50_1.png" alt="" />
    </div>
    <!-- Main Content -->
    <div id="main">
      <!-- Picture Section -->
      <!--<div id="picture">
        <img src="/images/50_1.png" alt="" />
      </div>-->

      <!-- Special Offers Section -->
      <div id="special">
        <div class="title">每日特价</div>
        <ul>
          <li v-for="book in books" :key="book.id">
            <img :src="'/' + book.img" :alt="book.title" />
            <div>
              <p class="bookname">
                <router-link :to="{ name: 'Book', params: { id: book.id } }">{{ book.title }}</router-link>
              </p>
              <p>{{ book.author }}</p>
              <p>{{ book.press }}</p>
              <p>
                <!-- 原价 -->
                <span class="price original-price">￥{{ "59.9" }}</span>
                <!-- 新价格 -->
                <span class="price new-price">￥{{ book.price }}</span>
              </p>
            </div>
          </li>
        </ul>
      </div>

      <!-- News Section -->
      <div id="news">
        <div class="title">最新资讯</div>
        <ul>
          <li>
            <div class="imgzixun">
              <img src="/images/50.jpg" alt="" />
            </div>
            <p class="newstitle">浙江宁波：机器人进校园 点燃童心科技梦</p>
            <p class="newsdate">2024-12-20</p>
            <p class="newscontent">宁波工程学院“你好，Robot！”科普团成员带着两台机器人走进宁波市江北区慈城怀之幼儿园，与孩子们进行了一场互动表演，让孩子们近距离感受科技的魅力，激发他们的创新创造意识和科学探索精神。</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- Footer -->
    <div id="footer">
      <p>版权所有 &copy; 2024 宁工书城</p>
    </div>
  </div>
</template>

<script>
import books from './books.json'; // 导入 JSON 数据

export default {
  name: "Home",
  data() {
    return {
      menuItems: [
        { 
          name: "首页", 
          link:"/",
          isOpen: false, 
          subMenu: ["行业新闻", "学校新闻", "书城新闻"] 
        },
        { name: "商城",link:"/mall", isOpen: false, subMenu: ["图书", "电子产品", "文具"] },
        { name: "社区", link: "/comunity",isOpen: false, subMenu: ["活动", "交流", "分享"] },
        { name: "用户",link: "/user", isOpen: false, subMenu: ["登录", "注册"] },
        { name: "概况", link: "/about",isOpen: false, subMenu: ["宁工概况","历史沿革"] },
        { name: "新闻",link: "/news", isOpen: false, subMenu: ["最新新闻"] },
      ],
      books // 将 JSON 数据赋值到组件中
    };
  },
  methods: {
    // 控制下拉菜单的显示/隐藏
    toggleDropdown(index, isOpen) {
      this.menuItems[index].isOpen = isOpen;
    },
  },
};
</script>

<style scoped>
/* 全局基础样式 */
body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: #333;
  background-color: #eee;
}

ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
a {
  text-decoration: none;
}

/* Header 样式 */
#header {
  height: 50px;
  background-color: #036;
  color: #fff;
  line-height: 50px;
  padding: 0 20px;
}
#header #media div {
  display: inline-block;
  margin-left: 10px;
  width: 35px;
  height: 30px;
  background-image: url("/images/pngs.png");
  cursor: pointer;
}
#weibo {
  background-position: -60px 0;
  float: right;
}
#weixin {
  background-position: -60px -30px;
  float: right;
}
#dianhua {
  background-position: -60px -60px;
  float: right;
}

/* Logo 样式 */
#logo {
  height: 100px;
  background-color: #047;
  text-align: center;
}

/* 导航栏样式 */
#nav {
  background-color: #fff;
  height: 50px;
}

#nav #menu {
  display: flex; /* 主菜单横向排列 */
}

#nav #menu > li {
  position: relative;
  width: 120px;
  text-align: center;
}

#nav #menu > li .menu-item {
  display: block;
  line-height: 50px;
  color: #333;
  text-decoration: none;
}

#nav #menu > li .menu-item:hover {
  background-color: #036;
  color: #ff0;
}

/* 子菜单样式 */
#nav #menu li ul {
  display: none; /* 默认隐藏子菜单 */
  position: absolute;
  top: 50px;
  left: 0; /* 子菜单与父菜单对齐 */
  background-color: #fff;
  border: 1px solid #ccc;
  width: 120px;
  z-index: 1000; /* 确保子菜单层级高 */
}

#nav #menu li ul li {
  text-align: left; /* 子菜单内容左对齐 */
}

#nav #menu li ul li a {
  display: block;
  padding: 5px 10px;
  line-height: normal;
  color: #333;
  text-decoration: none;
}

#nav #menu li ul li a:hover {
  background-color: #f4f4f4;
  color: #c00;
}

/* 悬停显示子菜单 */
#nav #menu > li:hover ul {
  display: block; /* 鼠标悬停时显示子菜单 */
}

/* 主要内容 */
#main {
  width: 1200px;
  margin: auto;
  background-color: #fff;
}

#picture img {
  width: 100%;  /* 图片宽度设置为 100% */
  height: auto;  /* 保持图片的纵横比 */
  display: block;  /* 去除图片下方的空白 */
  margin-left: 0;  /* 确保图片从左侧开始 */
}

#special {
  height: 300px;
  background-color: #fff;
  margin-top: 10px;
  display: table;
  padding-bottom: 10px;
}

/* 特价区块标题 */
#special .title {
  font-size: 28px;
  padding: 10px;
  color: #333;
  border-bottom: solid 2px #ccc;
  margin-bottom: 15px;
}

#special ul {
  display: flex; /* 横向排列 */
  flex-wrap: wrap; /* 如果宽度不够，自动换行 */
  padding: 0;
  margin: 0;
  list-style: none;
  gap: 20px; /* 每本书之间的间距 */
}

/* 设置整个书本列表 */
#special ul li {
  border: solid 1px #ccc;
  margin: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
}

/* 鼠标悬浮时的效果 */
#special ul li:hover {
  border: solid 1px #900;
}

/* 图片和文字内容分布 */
#special ul li img {
  width: 100px;
  height: auto;
  margin-right: 20px;
}

#special ul li div {
  display: inline-block;
  width: 200px;
}

#special ul li div p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 书名样式 */
.bookname {
  font-size: 20px;
  color: #009;
  margin-bottom: 5px;
}

/* 原价样式：带横线 */
.original-price {
  text-decoration: line-through;
  color: #999;
  margin-right: 10px;
}

/* 新价格样式 */
.new-price {
  font-weight: bold;
  color: #e60000;
  font-size: 18px;
}

/* 每日特价标题 */
#special .title {
  font-size: 28px;
  padding: 10px;
  color: #333;
  border-bottom: solid 2px #ccc;
  margin-bottom: 15px;
}

/* 新闻区整体样式 */
#news {
  margin: 20px auto;
  width: 100%;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* 标题样式 */
#news .title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  border-bottom: 2px solid #0078d7;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

/* 列表样式 */
#news ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex; /* 使用 flex 布局让资讯横向排列 */
  gap: 20px; /* 每条资讯之间的间距 */
}

/* 每条资讯项的样式 */
#news ul li {
  flex: 1 1 calc(25% - 20px); /* 每个资讯占容器的 25%，减去间距 */
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* 鼠标悬停效果 */
#news ul li:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* 图片区域 */
#news ul li .imgzixun img {
  width: 100%; /* 图片宽度占满容器 */
  height: 150px; /* 固定高度 */
  object-fit: cover; /* 保持图片比例并填充区域 */
  border-bottom: 1px solid #ddd;
}

/* 新闻标题样式 */
#news ul li .newstitle {
  font-size: 16px;
  font-weight: bold;
  color: #0078d7;
  margin: 10px;
  line-height: 1.4;
  text-align: center; /* 居中显示 */
}

/* 新闻日期样式 */
#news ul li .newsdate {
  font-size: 14px;
  color: #999;
  text-align: center; /* 居中显示 */
  margin-bottom: 10px;
}

/* 新闻内容样式 */
#news ul li .newscontent {
  font-size: 14px;
  line-height: 1.8;
  color: #444;
  text-align: justify; /* 两端对齐 */
  padding: 0 10px 10px; /* 左右内边距和底部内边距 */
}

#footer {
  background-color: #036;
  color: #fff;
  padding: 20px;
  text-align: center;
}
</style>
