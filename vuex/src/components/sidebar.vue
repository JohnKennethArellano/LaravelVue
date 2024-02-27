<template>
    <nav class="relative w-[18vw] flex   h-full shadow-lg  p-5" :class="{ 'w-[5vw]': sidebarState }">
        <ul class="flex flex-col w-[100%] h-full relative">
            <div class="w-[100%] flex justify-end" :class="{ 'justify-center': sidebarState }">
                <icon :icon="sidebarState ? 'square-caret-right' : 'square-caret-left'" @click="toggleSideBarSize"
                    class="transition-all text-[2vw]" />
            </div>
            <div class="flex justify-center w-[fit-content] h-[10vh] p-5">
                <span :class="{ 'hidden': sidebarState }">Welcome, {{ userLogin }}</span>
            </div>
            <li v-for="(item, index) in links" :key="index">
                <div>
                    <div v-if="item.route">
                        <router-link :to="item.route">
                            <div class="inactiveRoute" :class="{ 'activeRoute': $route.path === item.route }">
                                <span class="p-3" :class="{ 'hidden': sidebarState }">{{ item.label }}</span>
                            </div>
                        </router-link>
                    </div>
                </div>
            </li>
            <div class="w-[100%] absolute bottom-0 flex justify-center">
                <icon icon="power-off" @click="logout" />
            </div>
        </ul>
    </nav>
</template>


<script setup>
import { useStore } from 'vuex';
import { computed, ref, } from 'vue';
import { useRouter } from 'vue-router';
const store = useStore();
const router = useRouter()
const userLogin = computed(() => store.getters.getUser);
const sidebarState = computed(() => store.getters.getSidebarState);
const isCollapsed = ref(false)

const toggleSideBarSize = () => {
    isCollapsed.value = !isCollapsed.value
    store.dispatch('sideBar', isCollapsed)
}

const links = ref([
    { label: "Dashboard", route: "/about" },
    { label: "Dito Lang", route: "/features" },
    { label: "Dyang Lang", route: "/contact" },
])
const logout = () => {
    store.dispatch('logout')
        .then(router.push({ name: 'home' }))
}
</script>