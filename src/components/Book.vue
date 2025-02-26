<template>
  <div class="book-container">
    <div class="book-image">
      <img :src="'/' + book.img" :alt="book.title" />
    </div>
    <div class="book-details">
      <h1>{{ book.title }}</h1>
      <p class="author">作者: {{ book.author }}</p>
      <p class="press">出版社: {{ book.press }}</p>
      <p class="price">价格: ￥{{ book.price }}</p>
      <button class="buy-button">立即购买</button>
    </div>
  </div>
</template>

<script>
import books from './books.json'; // 导入 JSON 数据

export default {
  name: 'Book',
  data() {
    return {
      book: {}
    };
  },
  created() {
    const bookId = this.$route.params.id;
    this.book = books.find(book => book.id == bookId);
  }
};
</script>

<style scoped>
.book-container {
  display: flex;
  max-width: 1400px; /* 墛大宽度 */
  margin: 40px auto; /* 墛大外边距 */
  padding: 40px; /* 墛大内边距 */
  background-color: #fff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1); /* 墛大阴影 */
  border-radius: 15px; /* 墛大圆角 */
}

.book-image {
  flex: 1;
  text-align: center;
}

.book-image img {
  max-width: 100%;
  height: auto;
  border-radius: 15px; /* 墛大圆角 */
}

.book-details {
  flex: 2;
  padding: 40px; /* 墛大内边距 */
}

.book-details h1 {
  font-size: 36px; /* 墛大字体 */
  margin-bottom: 30px; /* 墛大下边距 */
}

.book-details .author,
.book-details .press,
.book-details .price {
  font-size: 24px; /* 墛大字体 */
  margin-bottom: 20px; /* 墛大下边距 */
}

.book-details .price {
  color: #e60000;
  font-weight: bold;
}

.buy-button {
  display: inline-block;
  padding: 15px 30px; /* 墛大按钮尺寸 */
  font-size: 24px; /* 墛大字体 */
  color: #fff;
  background-color: #ff5000;
  border: none;
  border-radius: 10px; /* 墛大圆角 */
  cursor: pointer;
  transition: background-color 0.3s;
}

.buy-button:hover {
  background-color: #e64500;
}
</style>