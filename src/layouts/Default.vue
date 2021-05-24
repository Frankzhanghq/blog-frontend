<template>
  <div>
    <section
      class="page-header"
      :style="'background-image: linear-gradient(120deg, #2690F9, #FC2D2D);color: #ffffff;'"
    >
      <div style="position:absolute; top:20px; right:20px; z-index:2;"></div>
      <div
        v-for="(item,index) in randomIcon"
        :key="'ri'+index"
        :style="'position:absolute; top:'+item.top+'px; left:'+item.left+'px; z-index:1;'"
      >
        <font :style="'font-size: '+item.size+'px;color:#fff;'">
          <b>♪</b>
        </font>
      </div>
      <h1 class="project-name">辣子鸡</h1>
      <h2 class="project-tagline">欢迎来到辣子鸡的个人博客</h2>
    </section>
    <section class="main-content">
      <el-row>
        <el-col :span="6" style="padding-right:10px">
          <sidebar :active="active"></sidebar>
        </el-col>
        <el-col :span="18" style="padding-left:10px">
          <slot />
        </el-col>
      </el-row>
    </section>
    <section class="foot">
      <foot></foot>
    </section>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import utils from '../utils/util'
import Foot from './components/Foot'
import Sidebar from './components/Sidebar'

export default {
  name: 'LayoutDefault',
  components: {
    Foot,
    Sidebar
  },
  props: ['active'],
  data() {
    return {
      randomIcon: []
    }
  },
  mounted() {
    let width = window.innerWidth
    for (let i = 0; i < 12; i++) {
      let temp = {}
      let left = utils.randomInt(10, width - 310)
      if (left > width / 2 - 150) {
        left += 300
      }
      temp["left"] = left
      temp["top"] = utils.randomInt(20, 300)
      temp["size"] = utils.randomInt(20, 40)
      this.randomIcon.push(temp)
    }
  }
}
</script>

<style>
.page-header {
  padding: 5rem 6rem;
  color: #fff;
  text-align: center;
  background-color: #159957;
  background-image: linear-gradient(120deg, #155799, #159957);
}
.main-content {
  max-width: 64rem;
  padding: 30px 0px 30px 0px;
  margin: 0 auto;
  font-size: 1.1rem;
  word-wrap: break-word;
  min-height: 800px;
}
.foot {
  max-width: 67rem;
  margin: 0 auto;
  font-size: 12px !important;
  color: #586069 !important;
  word-wrap: break-word;
}
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
