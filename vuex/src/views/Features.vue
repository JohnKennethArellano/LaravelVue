<template>
  <div class="container">
    <Loader v-if="loading"></Loader>
    <div class="sidebar">
      <sidebar />
    </div>
    <div class="mainContent">
      <div class="w-full h-full flex items-center  relative">
        <div class="bar relative shadow-lg" :class="{ 'collapsed': col }">
          <div class="w-full h-[2vw] mt-3 flex justify-end relative">
            <button class="w-[2vw] h-[2vw] rounded-full shadow-lg bg-green-500 absolute right-[-2vw]"
              @click="toggler">i</button>
          </div>
          <ul>
            <li class="active">
              <span class="icon">i</span>
              <span class="text">Dashboard</span>
            </li>
            <li>
              <span class="icon">i</span>
              <span class="text">Dashboard</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { useStore } from 'vuex';
import { computed, defineAsyncComponent, ref } from 'vue';
import sidebar from '@/components/sidebar.vue';
import { icon } from '@fortawesome/fontawesome-svg-core';
const store = useStore();

const Loader = defineAsyncComponent(() => import('@/components/Loader.vue'))
const loading = computed(() => store.state.loading.showLoading)



const col = ref(false)
const toggler = () => {
  col.value = !col.value
}
</script>              
<style scoped>
.bar {
  width: 20vw;
  height: 30vh;
  transition: all ease .5s;
  padding: 1vw;
  display: flex;
  flex-direction: column;
}

.bar.collapsed {
  width: 6.5vw;
}

ul {
  width: 100%;
  height: 100%;
  ;
}

li {
  width: 100%;
  height: 4vw;
  background-color: none;
  border-radius: .2vw;
  display: flex;
  align-items: center;
  margin-bottom: 1vw;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

li::before {
  content: '';
  width: 0;
  height: 0;
  background-color: none;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  transition: clip-path ease 2s;
  clip-path: circle(0% at 0 0);
}

li::after {
  content: '';
  width: 0;
  height: 0;
  background-color: none;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -2;
  transition: clip-path ease 2s;
  clip-path: circle(0% at 100% 100%);
}

li.active::before,
li:hover::before {
  width: 100%;
  height: 100%;
  background-color: rgba(144, 238, 144, 0.558);
  clip-path: circle(200% at 0 0);

}

li.active::after,
li:hover::after {
  width: 100%;
  height: 100%;
  background-color: rgba(173, 216, 230, 0.515);
  clip-path: circle(200% at 100% 100%);
}

li:hover .icon,
li:hover .text,
li.active {
  color: white;
}

li .icon {
  padding: 1vw 2vw;
}

li .text {
  padding: 1vw 2vw;
  transition: all ease .3s;
  display: block;
}

.bar.collapsed li .text {
  display: none;
  opacity: 0;
}
</style>                                                                                                                                         