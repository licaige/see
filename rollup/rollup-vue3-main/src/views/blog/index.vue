<template>
  <div class="blog">
    <h2>CNode - Blog</h2>
    <div class="blog-list">
      <ul>
        <li v-for="item in data" :key="item.id" class="list-item">
          <a class="author" :href="`/user/${item.author.loginname}`">
            <img :src="item.author.avatar_url" />
          </a>
          <span class="visit">
            {{ item.reply_count + "/" + item.visit_count }}
          </span>
          <tab-type :tab="item.tab" :is-top="item.top" :is-good="item.good" />
          <span class="content">
            {{ item.title }}
          </span>
          <span class="last-reply">
            {{ formatDate(item.last_reply_at) }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { getTopicData } from "@/Api/cnodeAPI.js";
import dayjs from "dayjs";

export default {
  setup(props, contxt) {
    let data = ref([]);
    let loading = ref(false);

    onMounted(() => {
      // 挂载
      getCNodeList();
    });
    async function getCNodeList() {
      loading.value = true;
      const params = {
        page: 1,
        tab: "good",
        limit: 50,
        mdrender: true,
      };
      try {
        const res = await getTopicData(params);
        loading.value = false;

        if (res.success) {
          data.value = res.data;
        }
      } catch (err) {
        console.error(err);
      } finally {
        loading.value = false;
      }
    }

    return {
      data,
      loading,
    };
  },
  methods: {
    formatDate(val) {
      return dayjs(val).format("YYYY-MM-DD");
    },
  },
};
</script>
<style lang="less" scoped>
.blog {
  background-color: #fff;
  ul {
    li {
      height: 52px;
      line-height: 52px;
      border-bottom: 1px solid #f0f0f0;
      display: flex;
      align-items: center;
      padding: 0 5px;

      .author {
        display: inline-block;
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
      .visit {
        width: 70px;
        text-align: left;
        display: inline-block;
        font-size: 10px;
        color: #b4b4b4;
      }
      .content {
        flex: 1;
        cursor: pointer;
        margin-left: 5px;
        &:hover {
          text-decoration: underline;
        }
      }
      .last-reply {
        font-size: 13px;
        opacity: 0.6;
      }
    }
  }
}
</style>
