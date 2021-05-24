<template>
  <Layout active="/social">
    <el-card shadow="never" style="min-height: 400px;margin-bottom: 20px;padding: 0px 0px 20px 0px">
      <el-tabs v-model="activeTab" type="card" @tab-click="onSelect">
        <el-tab-pane
          :label="'粉丝 '+$page.followers.totalCount"
          name="followers"
          style="padding: 5px"
        >
          <div v-if="$page.followers.edges.length">
            <el-row style="min-height: 200px; ">
              <el-col
                :span="8"
                v-for="(item,index) in $page.followers.edges"
                :key="'followers'+index"
                style="padding: 10px"
              >
                <el-card shadow="hover" style="font-size: 13px;color: #606266;line-height: 20px">
                  <i class="el-icon-star-off"></i>&emsp;
                  <a
                    @click="$router.push(`/`)"
                    style=" text-decoration:none;cursor:pointer"
                  >{{item.node.name}}</a>
                  <br />
                  <i class="el-icon-message"></i>&emsp;
                  <a
                    :href="item.node.htmlUrl"
                    target="_blank"
                    style=" text-decoration:none;cursor:pointer"
                  >TA的主页</a>
                  <br />
                  <img
                    :src="GRIDSOME_API_URL+item.node.avatarUrl[0].url"
                    style="width: 100%;border-radius:5px;margin-top: 5px"
                  />
                </el-card>
              </el-col>
            </el-row>
            <!-- <div style="text-align: center;margin-top: 10px">
                <el-pagination
                  @current-change="onSelect"
                  background
                  layout="prev, pager, next"
                  :current-page.sync="followers.query.page"
                  :page-size="followers.query.pageSize"
                  :total="followers.query.pageNumber*followers.query.pageSize"
                ></el-pagination>
            </div>-->
          </div>
          <div
            style="min-height: 300px;margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center"
            v-else
          >
            <font style="font-size: 30px;color:#dddddd ">
              <b>(￢_￢) 没有一个粉丝</b>
            </font>
          </div>
        </el-tab-pane>
        <el-tab-pane
          :label="'关注 '+$page.followers.totalCount"
          name="following"
          style="padding: 5px"
        >
          <div v-if="$page.followers.edges.length">
            <el-row style="min-height: 200px; ">
              <el-col
                :span="8"
                v-for="(item,index) in $page.followers.edges"
                :key="'followers'+index"
                style="padding: 10px"
              >
                <el-card shadow="hover" style="font-size: 13px;color: #606266;line-height: 20px">
                  <i class="el-icon-star-off"></i>&emsp;
                  <a
                    @click="$router.push(`/`)"
                    style=" text-decoration:none;cursor:pointer"
                  >{{item.node.name}}</a>
                  <br />
                  <i class="el-icon-message"></i>&emsp;
                  <a
                    :href="item.node.htmlUrl"
                    target="_blank"
                    style=" text-decoration:none;cursor:pointer"
                  >TA的主页</a>
                  <br />
                  <img
                    :src="GRIDSOME_API_URL+item.node.avatarUrl[0].url"
                    style="width: 100%;border-radius:5px;margin-top: 5px"
                  />
                </el-card>
              </el-col>
            </el-row>
            <div style="text-align: center;margin-top: 10px">
              <pager :info="$page.followers.pageInfo" />
              <!-- <el-pagination
                  @current-change="onSelect"
                  background
                  layout="prev, pager, next"
                  :current-page.sync="followers.query.page"
                  :page-size="followers.query.pageSize"
                  :total="followers.query.pageNumber*followers.query.pageSize"
              ></el-pagination>-->
            </div>
          </div>
          <div
            style="min-height: 300px;margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center"
            v-else
          >
            <font style="font-size: 30px;color:#dddddd ">
              <b>(￢_￢) 还没有关注一个人</b>
            </font>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </Layout>
</template>

<page-query>
  query ($page: Int) {
    followers: allStrapiSocial (perPage: 10, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      },
      totalCount,
      edges {
        node {
          id,
          name,
          htmlUrl,
          avatarUrl {
            id,
            url
          }
        }
      }
    }
  }
</page-query>

<script>
import { Pager } from 'gridsome'
export default {
  name: 'social',
  metaInfo: {
    title: '社交圈'
  },
  components: { Pager },
  data() {
    return {
      activeTab: 'followers',
    }
  },
  methods: {
    onSelect() {
      console.log(this.activeTab)
    }
  }
}
</script>

<style>
</style>