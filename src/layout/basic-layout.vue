<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" :class="selectedKeys[0]!='home'?'navbar-shrink':''" id="mainNav"> <!-- -->
    <div class="container">

      <!-- Logo (navigate to home) -->
      <a class="navbar-brand" href="/"><img src="@/assets/img/img05.png" alt="Scamscan" /></a>

      <!-- Navbar Toggler -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars ms-1"></i>
      </button>

      <!-- Navigation items -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav text-uppercase ms-auto align-items-center py-4 py-lg-0">
            <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                What is a scam?
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="/learning">Learning</a></li>
                <li><a class="dropdown-item" href="/quiz">Check your knowledge</a></li>
                <li><a class="dropdown-item" href="/scenario?id=1">Scenario</a></li>
              </ul>
            </li>
            <!-- <li class="nav-item"><a class="nav-link" href="/quiz">Quiz</a></li> -->
            
            <li class="nav-item"><a class="nav-link" href="/scan"><button class="btn btn-outline-warning">SCAN</button></a></li>
            <li class="nav-item"><a class="nav-link" href="/report"><button class="btn btn-warning">REPORT SCAM</button></a></li>
        </ul>
      </div>
    </div>
  </nav>

  <div>
    <router-view></router-view>
  </div>

</template>
<script setup>
  import { onMounted, ref } from 'vue';
  import { useRoute } from "vue-router";
  // import footerBar from "../components/footerBar.vue";

  const route = useRoute();
  const selectedKeys = ref(['dashboard']);
  
  onMounted(()=>{
    selectedKeys.value = [route.name];
    console.log(selectedKeys.value);
  })

</script>