<template>
  <!--  <blogFramework> </blogFramework>-->
  <div class="wrapper">
    <router-link
      v-for="item in items"
      :key="item.id"
      :src="url"
      class="blog-item"
      :to="{ name: 'BlogDetail', params: { id: item.id } }"
    >
      <div class="title">{{ item.name }}</div>
      <div class="time">{{ item.created_at }}</div>
      <div class="pictures"><img :src="url" alt="" /></div>
    </router-link>
  </div>
</template>

<script>
// import blogFramework from "../components/blogFramework";

import service from "@/utils/request";

export default {
  data() {
    return {
      items: [],
      url: "admin/plugins/upload/Wechat_IMG_13_5e2334246e.jpeg",
    };
  },

  name: "Blog",
  components: {
    // blogFramework,
  },

  async mounted() {
    this.items = await service.get("/blogs");
    this.items = await service.get("/uploads/");
  },
};
</script>

<style scoped>
.wrapper {
  padding: 20px;
}
.blog-item {
  border: 1px solid #e8e8e8;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.title {
  font-size: 24px;
  font-weight: bold;
}
.content {
  font-size: 18px;
}
</style>
