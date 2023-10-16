<template>
  <a-layout class="layout my-layout" style="padding:0;">
    <!-- <a-layout-header>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
        @click="handleMenuClick"
      >
        <a-menu-item key="/">Main</a-menu-item>
        <a-menu-item key="dashboard">Dashboard</a-menu-item>
        <a-menu-item key="quiz">Quiz</a-menu-item>
        <a-menu-item key="scam">Report Scam</a-menu-item>
        <a-menu-item key="scan">Scan</a-menu-item>
      </a-menu>
    </a-layout-header> -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" :class="selectedKeys[0]!='home'?'navbar-shrink':''" id="mainNav"> <!-- -->
      <div class="container">
        <a class="navbar-brand" href="/"><img src="@/assets/img/img05.png" alt="..." /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars ms-1"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li class="nav-item"><a class="nav-link" href="/">Main</a></li>
            <li class="nav-item"><a class="nav-link" href="/dashboard">Dashboard</a></li>
            <li class="nav-item"><a class="nav-link" href="/quiz">Quiz</a></li>
            <li class="nav-item"><a class="nav-link" href="/scenario?id=1">Scenario</a></li>
            <li class="nav-item"><a class="nav-link btn btn-outline-warning" href="/scan">Scan</a></li>
            <li class="nav-item"><a class="nav-link btn btn-warning" href="/scam">Report Scam</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <a-layout-content>
      <div class="content">
        <router-view></router-view>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script setup>
  import { onMounted, ref } from 'vue';
  import { useRouter, useRoute } from "vue-router";
  const router = useRouter();
  const route = useRoute();
  const selectedKeys = ref(['dashboard']);
  // 处理菜单项点击事件
  const handleMenuClick = (key) => {
    selectedKeys.value = [key];
    router.push(key.key);
  };
  onMounted(()=>{
    selectedKeys.value = [route.name];
  })
</script>
<style scoped>
  /* .content{
  //   // overflow: auto;
   }*/
  .ant-layout-header{
    background-color: #135592;
  }
  .ant-layout-header .ant-menu.ant-menu-overflow.ant-menu.ant-menu-root.ant-menu-horizontal.ant-menu-dark{
    background-color: #135592;
  }
</style>
<style>
  .my-layout .ant-layout-header .ant-menu-overflow li{
    letter-spacing: 1px;
    font-weight: bold;
  }
  .my-layout .ant-layout-header .ant-menu-overflow li.ant-menu-item-selected.ant-menu-item-only-child{
    background-color: #0f3e6a;
  }
</style>