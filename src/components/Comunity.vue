<template>
  <div id="community">
    <header>
      <div id="Logo">
        <img src="/images/logo_2.png" alt="Logo" />
      </div>
      <div id="Super_link">
        <router-link to="/">首页</router-link>
        <router-link to="/mall">商城</router-link>
        <router-link to="/comunity">社区</router-link>
        <router-link to="/user">用户</router-link>
        <router-link to="/about">概况</router-link> |
        <router-link to="/news">新闻</router-link>
      </div>
    </header>

    <div id="community-content">
      <!-- 用户列表 -->
      <div id="user-list">
        <h2>在线用户</h2>
        <div v-for="user in users" :key="user.id" class="user-card" @click="selectUser(user)">
          <img :src="user.avatar" alt="用户头像" />
          <p>{{ user.name }}</p>
        </div>
      </div>

      <!-- 用户详情 -->
      <div v-if="selectedUser" id="user-details">
        <h2>{{ selectedUser.name }} 的详细信息</h2>
        <div class="details-container">
          <div class="user-info">
            <img :src="selectedUser.avatar" alt="用户头像" class="user-avatar" />
            <p><strong>年龄:</strong> {{ selectedUser.age }}</p>
            <p><strong>职业:</strong> {{ selectedUser.job }}</p>
            <p><strong>兴趣:</strong> {{ selectedUser.interests.join(', ') }}</p>
            <p><strong>联系方式:</strong> {{ selectedUser.contact }}</p>
          </div>

          <!-- 聊天框 -->
          <div id="chat-box">
            <div v-for="msg in chatMessages" :key="msg.id" class="message">
              <p><strong>{{ msg.sender }}:</strong> {{ msg.content }}</p>
            </div>
            <input v-model="newMessage" placeholder="输入消息..." />
            <button @click="sendMessage">发送</button>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <p>版权所有 &copy; 2024 宁工书城</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Community',
  data() {
    return {
      users: [
        { id: 1, name: '张三', avatar: '/images/username.png', age: 25, job: '前端开发工程师', interests: ['编程', '旅行', '游戏'], contact: 'zhangsan@example.com' },
        { id: 2, name: '李四', avatar: '/images/username.png', age: 28, job: 'UI设计师', interests: ['设计', '阅读', '电影'], contact: 'lisi@example.com' },
        { id: 3, name: '王五', avatar: '/images/username.png', age: 30, job: '后端开发工程师', interests: ['编程', '健身', '音乐'], contact: 'wangwu@example.com' },
      ],
      selectedUser: null,
      chatMessages: [],
      newMessage: '',
    };
  },
  methods: {
    selectUser(user) {
      this.selectedUser = user;
      this.chatMessages = [];  // 清空消息
    },
    sendMessage() {
      if (this.newMessage.trim()) {
        this.chatMessages.push({
          id: Date.now(),
          sender: '我',
          content: this.newMessage,
        });
        this.newMessage = '';  // 发送后清空输入框
      }
    },
  },
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
}

#Super_link a:hover {
  color: #ffbc00;
}

/* Main Content */
#community-content {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px; /* 增加列之间的间距 */
}

/* 用户列表 */
#user-list {
  width: 30%;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#user-list h2 {
  color: #007bff;
  margin-bottom: 20px;
}

.user-card {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.user-card:hover {
  background-color: #f0f0f0;
}

.user-card img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

.user-card p {
  font-size: 1.2em;
  margin: 0;
}

/* 用户详细信息 */
#user-details {
  flex: 1; /* 自动填充剩余空间 */
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#user-details h2 {
  color: #007bff;
}

.details-container {
  display: flex;
  justify-content: space-between;
  gap: 20px; /* 增加细节项之间的间距 */
}

.user-info {
  flex: 0.4; /* 固定宽度 */
  min-width: 280px;
}

.user-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
}

#chat-box {
  flex: 0.6; /* 固定宽度 */
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.message {
  margin-bottom: 15px;
}

#chat-box input {
  width: 80%;
  padding: 10px;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

#chat-box button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

#chat-box button:hover {
  background-color: #0056b3;
}

/* Footer */
footer {
  background-color: #036;
  color: #fff;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
}
</style>
