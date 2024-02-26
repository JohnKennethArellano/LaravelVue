<template>
  <div class="shadow-lg p-8 rounded-md">
    <form @submit.prevent="submitForm" class="flex flex-col h-auto w-auto">
      <span class="w-full flex justify-center">
        <h1 class="font-bold text-3xl text-gray-700">Register</h1>
      </span>
      <div class="flex flex-col w-auto h-auto mb-2">
        <label for="name" class="w-full h-auto">Name</label>
        <input type="text" v-model="formdata.name"
          class="w-[20vw] py-2 px-4 outline-none focus:ring rounded text-md border border-gray-400">
        <p v-for="error in $v.name.$errors" :key="error.$uid" class="text-red-500 text-xs w-full ">{{
          error.$message }}
        </p>
      </div>
      <div class="flex flex-col w-auto h-auto mb-2">
        <label for="email" class="w-full h-auto">Email</label>
        <input type="text" v-model="formdata.email"
          class="w-[20vw] py-2 px-4 outline-none focus:ring rounded text-md border border-gray-400">
        <p v-for="error in $v.email.$errors" :key="error.$uid" class="text-red-500 text-xs w-full ">{{
          error.$message }}
        </p>
      </div>
      <div class="flex flex-col w-auto h-auto mb-2">
        <label for="password" class="w-full h-auto">Password</label>
        <input type="text" v-model="formdata.password"
          class="w-[20vw] py-2 px-4 outline-none focus:ring rounded text-md border border-gray-400">
        <p v-for="error in $v.password.$errors" :key="error.$uid" class="text-red-500 text-xs w-full ">{{
          error.$message }}
        </p>
      </div>
      <div class="flex flex-col w-auto h-auto mb-2">
        <label for="password_confirmation" class="w-full h-auto">Confirm your password</label>
        <input type="text" v-model="formdata.password_confirmation"
          class="w-[20vw] py-2 px-4 outline-none focus:ring rounded text-md border border-gray-400">
        <p v-for="error in $v.password_confirmation.$errors" :key="error.$uid" class="text-red-500 text-xs w-full ">
          {{
            error.$message }}
        </p>
      </div>
      <button type="submit" class="border rounded-lg relative h-[3vw] flex items-center justify-center">
        <Loader v-if="loading"></Loader>
        <span v-else>Register</span>
      </button>
      <span class="w-full flex justify-center mt-3 text-sm">
        <router-link to="/">Login here</router-link>
      </span>
    </form>
  </div>
</template>


<script setup>
import BaseButton from '@/components/BaseComponents/BaseButton.vue';
import BaseForm from '@/components/BaseComponents/BaseForm.vue';
import BaseLabel from '@/components/BaseComponents/BaseLabel.vue';
import BaseInput from '@/components/BaseComponents/BaseInput.vue';
import BaseError from '@/components/BaseComponents/BaseError.vue';

import { reactive, computed, defineAsyncComponent } from 'vue';
import { useStore } from 'vuex'
import useVuelidate from '@vuelidate/core'
import { required, helpers, sameAs } from '@vuelidate/validators'
import { useRouter } from 'vue-router';

const Loader = defineAsyncComponent(() => import('../components/LoadingButton.vue'))

const router = useRouter()
const store = useStore()
const formdata = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
})
const loading = computed(() => store.state.loading.showLoading)

const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage('Name required', required),
    },
    email: {
      required: helpers.withMessage('Email required', required),
    },
    password: {
      required: helpers.withMessage('Password required', required),
    },
    password_confirmation: {
      required: helpers.withMessage('Confirm your password', required),
      sameAs: helpers.withMessage("Password not mathced", sameAs(formdata.password))
    },
  }
})
const $v = useVuelidate(rules, formdata)

const submitForm = async (ev) => {
  ev.preventDefault();
  const result = await $v.value.$validate();
  if (result) {
    registerUser(ev)
  }
}

function registerUser(e) {
  e.preventDefault()
  store.dispatch("register", formdata)
    .then(() => {
      router.push({
        path: '/',
      })
    })
}
</script>