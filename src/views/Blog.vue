<template>
  <!--  <blogFramework> </blogFramework>-->
  <div class="wrapper">
    <router-link v-for="item in items" :key="item.id" class="blog-item" :to="{name: 'BlogDetail', params: {id: item.id}}">
      <div class="title">{{ item.name }}</div>
      <img class="cover" :src="item.image"/>
      <div class="time"> {{item.created_at}}</div>
    </router-link>
  </div>
</template>

<script>
// import blogFramework from "../components/blogFramework";

import service from "@/utils/request";

export default {
  data() {
    return {
      items: []
    }
  },
  name: "Blog",
  components: {
    // blogFramework,
  },
  async mounted () {
    const baseUrl = 'http://localhost:1337'
    this.items = await service.get('/blogs')
    this.items = this.items.map(x=> {
      x.image = baseUrl + x.pictures.url
      return x
    })

  }
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
.cover {
  width: 200px;

}

</style>
