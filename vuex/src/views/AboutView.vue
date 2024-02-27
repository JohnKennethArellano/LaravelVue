<template>
  <div class="container">
    <Loader v-if="loading"></Loader>
    <div class="sidebar">
      <sidebar />
    </div>
    <div class="mainContent">
      <span>hello</span>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed, defineAsyncComponent } from 'vue';
// import { useRouter } from 'vue-router';
import sidebar from '@/components/sidebar.vue';
const store = useStore();
// const router = useRouter();
// const userLogin = computed(() => store.getters.getUser);
const Loader = defineAsyncComponent(() => import('@/components/Loader.vue'))
const loading = computed(() => store.state.loading.showLoading)

// onMounted(() => {
//   !userLogin.value ? router.push({ name: 'home' }) : router.push({ name: 'about' });
//   console.log(userLogin)
// });

</script>
