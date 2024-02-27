<template>
  <div class="container">
    <Loader v-if="loading"></Loader>
    <div class="sidebar">
      <sidebar />
    </div>
    <div class="mainContent">
      <div class="w-full flex flex-wrap h-[fit-content] gap-[1vw]">
        <div class="w-full flex justify-end px-2">
          <BaseButton>
            <span class="text-sm">Add</span>
          </BaseButton>
        </div>
        <Suspense>
          <template #default>
            <MainCard v-for="(student, index) in studentDataFetched" :key="index" :name="student.name"
              :lrn="student.student_id" :age="student.age" />
          </template>
          <template #fallback>
            <LoaderCard v-for="n in loaderToShow" :key="n" />
          </template>
        </Suspense>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed, defineAsyncComponent } from 'vue';
import LoaderCard from '@/components/Cards/LoaderCard.vue'
import BaseButton from '@/components/BaseComponents/BaseButton.vue';
import sidebar from '@/components/sidebar.vue';
const store = useStore();

const Loader = defineAsyncComponent(() => import('@/components/Loader.vue'))
const MainCard = defineAsyncComponent(() => import('@/components/Cards/MainCard.vue'))
const loading = computed(() => store.state.loading.showLoading)
store.dispatch("getData")
const studentDataFetched = computed(() => store.getters.getStudentsData)

const loaderCount = 10;
const loaderToShow = computed(() => Array.from({ length: loaderCount }))
</script>                                                                                                                                                       