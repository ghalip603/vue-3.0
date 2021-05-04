<template>
  <!--  <blogFramework> </blogFramework>-->
  <div class="wrapper">
    <div class="post">
      <div class="title">{{ item.name }}</div>
      <div class="time">{{ item.desciription }}</div>
      <div class="picture"><img :src="url" alt="" /></div>
    </div>
  </div>
</template>

<script>
import service from "@/utils/request";
export default {
  data() {
    return {
      item: {},
    };
  },
  name: "Blog",
  components: {
    // blogFramework,
  },
  async mounted() {
    const blogId = this.$route.params.id;
    this.item = await service.get(`/Blogs/${blogId}`);
    console.log(`mounted@BlogDetail:28`, this.item);
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
.pictures {
  width: 100%;
  height: 200px;
}
</style>
