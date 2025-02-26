<template>
  <div id="school-profile">
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

    <!-- 学校简介部分 -->
    <div class="school-introduction" @mouseover="showDetails = true" @mouseleave="showDetails = false">
      <h1>宁波工程学院概况</h1>
      <p>
        宁波工程学院是经教育部批准设立，省市共建、以市为主的全日制普通本科院校、硕士学位授予单位。学校占地面积1800亩，设有风华校区、翠柏校区和前湾校区，现有19个二级教学机构，51个招生本科专业，24个一级学科，在校全日制本科学生17000余人，研究生203人；我校有教职工1415人，其中专任教师1136人（含辅导员和实验员177人）,高级专业技术职务437人，博士636人...
      </p>

      <!-- 显示详细信息的弹窗 -->
      <transition name="fade">
        <div v-if="showDetails">
          <!-- 遮罩层<div class="details-overlay"></div> -->
          
          
          <!-- 弹窗内容 -->
          <div class="details-popup">
            <h3>宁波工程学院详细信息</h3>
            <p>宁波工程学院是经教育部批准设立，省市共建、以市为主的全日制普通本科院校、硕士学位授予单位。学校占地面积1800亩，设有风华校区、翠柏校区和前湾校区，现有19个二级教学机构，51个招生本科专业，24个一级学科，在校全日制本科学生17000余人，研究生203人；我校有教职工1415人，其中专任教师1136人（含辅导员和实验员177人）,高级专业技术职务437人，博士636人。

学校“因甬而生”,1983年宁波高等专科学校作为宁波第一所以工科为主的高校，踏着改革开放的浪潮应运而生。学校“因德而立”，办学之初作为原联邦德国援建中国的四所高校之一，借鉴德国实施“工程师教育”成功经验和培养应用型人才教学体系，奠定了应用型的办学定位目标。学校“因用而强”,1997年成为全国示范性普通高等工程专科学校；2004年升格更名为宁波工程学院；2010年成为教育部首批61所“卓越工程师教育培养计划”实施高校；2016年入选国家产教融合建设高校；2021年获批硕士学位授予单位，同年入选国家教育强国项目和全国首批现代产业学院立项建设高校。

学校坚持文化育人理念，弘扬“讲实求精”的学校精神，践行“知行合一”的校训，重点打造“工匠精神”“阳明文化”等校园文化品牌，多层次构建特色鲜明、文明和谐、健康向上的校园文化氛围，积极发挥环境育人的功能，全面提高学生综合素质。

展望未来，宁波工程学院将锚定目标、创新实干、坚毅前行，坚持把立德树人作为根本任务，突出地方性、应用型和国际化特色，为地方经济建设和社会发展服务，坚定不移地朝着建成一流应用型大学的目标奋勇前行。</p>
          </div>
        </div>
      </transition>
    </div>

    <!-- 服务地方 -->
    <div class="campus-resources">
      <h2>服务地方</h2>
      <p>
        学校全面融入地方经济社会发展，主动面向地方经济社会发展主战场，攻坚临港石化、智能制造、港航物流等地方支柱产业，和轨道交通、港口桥梁等地方重大基础设施建设中亟需解决的关键核心技术，以重点产业产学研协同创新为支撑，推动技术成果转化落地。
      </p>
    </div>

    <!-- 师资力量 -->
    <div class="faculty">
      <h2>师资力量</h2>
      <p>
        学校综合办学条件良好，基础设施齐备，现有教学科研仪器设备总值达5.5亿元。学校深化实施“人才强校”战略，聚焦国家重大发展战略、国际学术前沿以及区域重大需求，坚持“引育并举”，着力打造高水平应用型师资队伍，近三年共引进博士等高层次人才296人。
      </p>
    </div>

    <!-- 学科建设 -->
    <div class="discipline-construction">
      <h2>学科建设</h2>
      <p>
        学校重视学科建设，坚持工科为主，文、理、经、管多学科协调发展，目前，已经有“材料科学”“化学”“工程学”3个学科进入基本科学指标数据库（ESI）全球前1%。
      </p>
    </div>

    <!-- 科研创新 -->
    <div class="research-innovation">
      <h2>科研创新</h2>
      <p>
        学校加强科研基地和队伍建设，大力开展应用研究和科技开发，荣获国家科学技术奖2项。近五年获省部级科学技术奖（含一级行业协会/学会奖项）49项，宁波市科学技术奖27项；一批高水平论文发表于国内高水平期刊和国际顶尖期刊，有效发明专利666项；学校承担省部级以上项目200余项，2020年获市顶尖人才项目支持。
      </p>
    </div>

    <!-- 国际交流 -->
    <div class="international-exchange">
      <h2>国际交流</h2>
      <p>
        学校广泛开展对外合作，借鉴国外先进经验，强化外向型办学特色，与美国特拉华州立大学、韦恩州立大学等合作举办会计学、信息与计算科学、机械设计制造及其自动化等专业；与30多个国家和地区的130多所院校建立了校际合作关系，培养了来自70多个国家的近800名国际学生。学校在位于加勒比海的北美洲国家格林纳达建有孔子学院1所。重视与海外的科技合作与人才交流，与市科技局共建中国-中东欧国家创新合作研究中心等国家级科技合作平台。
      </p>
    </div>

    <!-- 数据展示 -->
    <div class="key-data">
      <h2>关键数据</h2>
      <div class="data-item">
        <p><strong>学校创建年份：</strong>1983年</p>
        <p><strong>校区数量：</strong>3个</p>
        <p><strong>总占地面积：</strong>1800亩</p>
        <p><strong>在校教职工：</strong>1415余人</p>

        <p><strong>聘请国内外知名专家：</strong>100余人</p>
        <p><strong>省级以上人才：</strong>160余人</p>
      </div>
    </div>

    <!-- 底部 -->
    <div id="footer">
      <p>版权所有 &copy; 2024 宁波工程学院</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SchoolProfile',
  data() {
    return {
      // 控制详细信息弹窗显示的状态
      showDetails: false,
    };
  },
};
</script>

<style scoped>
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

#school-profile {
  font-family: Arial, sans-serif;
  margin: 20px;
  color: #333;
}

#breadcrumb {
  font-size: 14px;
  margin-bottom: 20px;
}

h1, h2 {
  color: #0056b3;
}

h1 {
  font-size: 28px;
  margin-bottom: 20px;
}

h2 {
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
}

p {
  line-height: 1.6;
}

.school-introduction,
.campus-resources,
.faculty,
.discipline-construction,
.research-innovation,
.international-exchange,
.key-data {
  margin-bottom: 30px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.key-data .data-item {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#footer {
  background-color: #0056b3;
  color: white;
  text-align: center;
  padding: 15px;
  margin-top: 30px;
}

.details-popup {
  position: fixed; /* 固定定位，使弹窗总是显示在屏幕中间 */
  top: 50%; /* 垂直居中 */
  left: 50%; /* 水平居中 */
  transform: translate(-50%, -50%); /* 使弹窗完全居中 */
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 40px; /* 增大内边距使内容更大 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 600px; /* 设置宽度更大 */
  height: 400px; /* 设置高度更大 */
  z-index: 100; /* 确保弹窗位于顶部 */
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s ease;
  overflow: auto; /* 允许内容滚动 */
  word-wrap: break-word; /* 自动换行长单词 */
  white-space: normal; /* 确保文本内容允许换行 */
  overflow-wrap: break-word;
  word-break: break-word; /* 强制长单词换行 */
}

/* 确保段落内文本可以换行 */
.details-popup p {
  white-space: normal; /* 允许段落内文本换行 */
  word-wrap: break-word; /* 防止长单词超出容器 */
  overflow-wrap: break-word; /* 强制换行 */
  word-break: break-word; /* 强制换行长单词 */
}

/* 进一步确保弹窗文本内容不会超出容器 */
.details-popup .text-content {
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
}

.details-popup.v-enter-active, .details-popup.v-leave-active {
  transition: opacity 0.3s ease;
}

.details-popup.v-enter, .details-popup.v-leave-to {
  opacity: 1;
}

.details-popup.v-leave-to {
  opacity: 0;
  visibility: hidden;
}

/* 可能需要添加一个遮罩层，让弹窗更加显眼 */
/* .details-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99; 
} */

</style>
