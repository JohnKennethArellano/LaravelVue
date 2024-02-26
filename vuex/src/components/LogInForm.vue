<template>
    <form @submit.prevent="submitForm" class="flex flex-col h-auto w-auto">
        <div class="flex flex-col w-auto h-auto mb-2">
            <label for="username" class="w-full h-auto">Username</label>
            <input type="text" v-model="formdata.username"
                class="w-[20vw] py-2 px-4 outline-none focus:ring rounded text-md border border-gray-400">
            <p v-for="error in $v.username.$errors" :key="error.$uid" class="text-red-500 text-xs">{{ error.$message }}</p>
        </div>
        <div class="flex flex-col w-auto h-auto mb-2">
            <label for="email" class="w-full h-auto">Email</label>
            <input type="text" v-model="formdata.email"
                class="w-[20vw] py-2 px-4 outline-none focus:ring rounded text-md border border-gray-400">
            <p v-for="error in $v.email.$errors" :key="error.$uid" class="text-red-500 text-xs">{{ error.$message }}</p>
        </div>
        <div class="flex flex-col w-auto h-auto mb-2">
            <label for="password" class="w-full h-auto">Password</label>
            <input type="text" v-model="formdata.password"
                class="w-[20vw] py-2 px-4 outline-none focus:ring rounded text-md border border-gray-400">
            <p v-for="error in $v.password.$errors" :key="error.$uid" class="text-red-500 text-xs">{{ error.$message }}</p>
        </div>
        <div class="flex flex-col w-auto h-auto mb-2">
            <label for="confirmPassword" class="w-full h-auto">Confirm Password</label>
            <input type="text" v-model="formdata.confirmPassword"
                class="w-[20vw] py-2 px-4 outline-none focus:ring rounded text-md border border-gray-400">
            <p v-for="error in $v.confirmPassword.$errors" :key="error.$uid" class="text-red-500 text-xs">{{ error.$message
            }}</p>
        </div>
        <BaseButton type="submit" class="btn-primary" />
    </form>
</template>


<script setup>
import BaseButton from './BaseComponents/BaseButton.vue';


import { reactive, computed } from 'vue';
import { store } from '../store/store'
import useVuelidate from '@vuelidate/core'
import { required, sameAs, minLength, helpers } from '@vuelidate/validators'

import { useRouter } from 'vue-router';

const router = useRouter()
// const useStore = store
// const userData = ref(null)
const formdata = reactive({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
})
const mustBeBulSUEmail = (value) => value.includes('@bulsu.edu.ph')
const rules = computed(() => {
    return {
        username: {
            required: helpers.withMessage('Username required', required),
            minLength: minLength(8)
        },
        email: {
            required: helpers.withMessage('Email required', required),
            mustBeBulSUEmail: helpers.withMessage('Your email must be a valid BulSU email', mustBeBulSUEmail)
        },
        password: {
            required: helpers.withMessage('Password required', required),
        },
        confirmPassword: {
            required: helpers.withMessage('Confirm your password', required),
            sameAs: helpers.withMessage('Password not matched', sameAs(formdata.password)),
        },
    }
})
const $v = useVuelidate(rules, formdata)
const submitForm = async () => {

    const result = await $v.value.$validate();
    result ? router.push({ name: 'about' }) : console.log("error ")
}
</script>