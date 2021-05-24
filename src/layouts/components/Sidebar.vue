<template>
  <div>
    <el-card shadow="never">
      <el-menu :default-active="active" @select="onSelect">
        <el-menu-item v-for="item in menuList" :key="item.path" :index="item.path">
          <span slot="title">{{item.meta.title}}</span>
        </el-menu-item>
      </el-menu>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SiderBar',
  props:['active'],
  data() {
    return {
      menuList: [{
        path: '/',
        meta: {
          title: '最新动态'
        }
      }, {
        path: '/social',
        meta: {
          title: '社交圈'
        }
      }, {
        path: '/blog',
        meta: {
          title: '博客列表'
        }
      }, {
        path: '/project',
        meta: {
          title: '开源项目'
        }
      }],
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    onSelect(index) {
      console.log(index)
      this.$router.push(index)
    },
  }
}
</script>