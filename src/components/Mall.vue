<template>
    <div id="app">
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

        <!-- 搜索框 -->
        <div id="search">
            <input type="text" v-model="searchQuery" placeholder="书名/作者" />
            <button @click="searchBook">搜索</button>
        </div>

        <!-- 图书分类 -->
        <div id="book-categories">
            <div class="category-list">
                <div v-for="category in categories" :key="category.id" class="category-item">
                    <img :src="category.imgSrc" :alt="category.name" class="category-image" />
                    <p>{{ category.name }}</p>
                </div>
            </div>
        </div>

        <!-- 秒杀栏 -->
        <div id="seckill">
            <h2>秒杀商品</h2>
            <div class="commodities">
                <div v-for="item in seckillItems" :key="item.id" class="commodity">
                    <img :src="item.imgSrc" :alt="item.name" />
                    <div class="info">
                        <p>{{ item.name }}</p>
                        <p class="price">秒杀价：￥{{ item.price }}</p>
                        <p class="original-price">原价：￥{{ item.originalPrice }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 底部 -->
        <footer>
            <div class="footer-links">
                <a href="#">购物流程</a>
                <a href="#">发票制度</a>
                <a href="#">服务协议</a>
                <a href="#">会员优惠</a>
            </div>
            <p>版权所有 &copy; 2024 宁工书城</p>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: '',
            categories: [
                { id: 1, name: '哲学类', imgSrc: '/images/book/book5.jpg' },
                { id: 2, name: '文学类', imgSrc: '/images/book/book6.jpg' },
                { id: 3, name: '科学类', imgSrc: '/images/book/book7.jpg' },
                { id: 4, name: '历史类', imgSrc: '/images/book/book8.jpg' },
                { id: 5, name: '艺术类', imgSrc: '/images/book/book9.jpg' },
                { id: 6, name: '教育类', imgSrc: '/images/book/book10.jpg' },
                { id: 7, name: '计算机类', imgSrc: '/images/book/book11.jpg' },
                { id: 8, name: '经济类', imgSrc: '/images/book/book12.jpg' }
            ],
            ads: [
                { id: 1, imgSrc: '/images/book/B1.jpg', alt: '广告1' },
                { id: 2, imgSrc: '/images/book/B2.jpg', alt: '广告2' },
                // 添加更多广告
            ],
            seckillItems: [
                { id: 1, name: '童话故事', imgSrc: '/images/book/B1.jpg', price: '1.00', originalPrice: '9.9' },
                { id: 2, name: '哲学入门', imgSrc: '/images/book/B2.jpg', price: '2.00', originalPrice: '15.9' },
                { id: 3, name: '历史故事', imgSrc: '/images/book/B3.jpg', price: '3.50', originalPrice: '20.0' },
                { id: 4, name: '科学探索', imgSrc: '/images/book/B6.jpg', price: '4.00', originalPrice: '30.0' },
                { id: 5, name: '文学经典', imgSrc: '/images/book/B7.jpg', price: '5.00', originalPrice: '25.0' },
                { id: 6, name: '心理学入门', imgSrc: '/images/book/book1.jpg', price: '2.50', originalPrice: '18.0' }]
        };
    },
    methods: {
        searchBook() {
            // 搜索功能逻辑，调用 API 或者进行页面跳转等
            console.log('Searching for:', this.searchQuery);
        }
    }
};
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    background-color: #f8f8f8;
    margin: 0;
    padding: 0;
}

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

/* 搜索框 */
#search {
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: white;
}

#search input {
    padding: 10px;
    font-size: 16px;
    width: 300px;
    margin-right: 10px;
}

#search button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #f4a261;
    border: none;
    color: white;
}

/* 广告栏 */
#book-categories {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.category-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.category-item {
    text-align: center;
    width: 120px;
}

.category-item img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.category-item p {
    margin-top: 10px;
    font-size: 14px;
    color: #333;
}


/* 秒杀栏 */
#seckill {
    padding: 20px;
    background-color: #fff;
}

#seckill h2 {
    font-size: 24px;
    color: #047;
    margin-bottom: 20px;
}

.commodities {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.commodity {
    width: 200px;
    background-color: #f4f4f4;
    padding: 10px;
    text-align: center;
}

.commodity img {
    width: 100%;
    height: auto;
}

.commodity .info p {
    margin: 5px 0;
}

.price {
    color: red;
    font-size: 16px;
}

.original-price {
    text-decoration: line-through;
    font-size: 14px;
    color: grey;
}

/* 底部 */
footer {
    background-color: #047;
    color: white;
    padding: 20px;
    text-align: center;
}

.footer-links a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
}
</style>