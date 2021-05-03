<template>
  <div class="blogBannerGradients">
    <h2 class="blogBannerTitle">博客</h2>
    <h4 class="blogBannerSmallTitle">Blog</h4>
  </div>
  <div class="blogMainContainer">
    <div class="item-list-card">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "blogFramework",
    };
  },
};
</script>

<style scoped>
.blogBannerGradients {
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 100%;
  background-color: #1fc8db;
  background-image: linear-gradient(
    141deg,
    #9fb8ad 0%,
    #1fc8db 51%,
    #2cb5e8 75%
  );
  color: white;
  opacity: 0.95;
  text-align: center;
  margin: auto;
}
.blogBannerTitle {
  margin: 0 10px 0 10px;
  text-align: right;
  padding: 20px;
  flex-grow: 1;
}
.blogBannerSmallTitle {
  text-align: left;
  padding-left: 40px;
  margin: 0;
  color: #d3dce6;
  opacity: 0.3;
  font-size: 3rem;
}
</style>
