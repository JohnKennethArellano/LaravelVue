<template>
  <div class="shadow-lg p-8 rounded-md">
    <BaseForm @submit.prevent="submitForm">
      <span class="w-full flex justify-center">
        <h1 class="font-bold text-3xl text-gray-700">Login</h1>
      </span>
      <div class="flex flex-col w-auto h-auto mb-2">
        <BaseLabel for="email" text="Email" />
        <BaseInput type="text" v-model="formdata.email" />
        <BaseError v-for="error in $v.email.$errors" :key="error.$uid" :msg="error.$message" />
      </div>
      <div class="flex flex-col w-auto h-auto mb-2">
        <BaseLabel for="password" text="Password" />
        <BaseInput type="text" v-model="formdata.password" />
        <BaseError v-for="error in $v.password.$errors" :key="error.$uid" :msg="error.$message" />
      </div>
      <BaseButton type="submit" class="btn-primary">
        <Loader v-if="loading"></Loader>
        <span v-else>Log in</span>
      </BaseButton>
      <span class="w-full flex justify-center mt-3 text-sm">
        <router-link to="/register">Register here</router-link>
      </span>
    </BaseForm>
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
import { required, helpers } from '@vuelidate/validators'
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2'
import db from '../firebase/init'
import { collection, addDoc } from 'firebase/firestore'

const Loader = defineAsyncComponent(() => import('../components/LoadingButton.vue'))

const router = useRouter()
const store = useStore()
const formdata = reactive({
  email: '',
  password: '',
})
const numberCheck = (value) => /\d/.test(value);
const loading = computed(() => store.state.loading.showLoading)
const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage('Email required', required),
    },
    password: {
      required: helpers.withMessage('Password required', required),
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

function registerUser(ev) {
  ev.preventDefault()
  store.dispatch("login", formdata)
    .then((data) => {
      // const err = this.rules.data?.message
      console.log(data?.message)
      if (data.message) {
        Swal.fire({
          text: data.message,
          icon: 'error',
          timer: 1000,
          showConfirmButton: false,
        }).then(() => {
          formdata.email = '',
            formdata.password = '',
            $v.value.$reset()
        })
      }
      else {
        router.push({
          path: '/about',
        })
      }

    })
    .catch((error) => {
      console.log(error)
    })
}

</script>