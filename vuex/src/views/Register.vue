<template>
  <div class="shadow-lg p-8 rounded-md">
    <BaseForm @submit.prevent="submitForm">
      <span class="w-full flex justify-center">
        <h1 class="font-bold text-3xl text-gray-700">Register</h1>
      </span>
      <div class="flex flex-col w-auto h-auto mb-2">
        <BaseLabel for="name" text="Name" />
        <BaseInput type="text" v-model="formdata.name" />
        <BaseError v-for="error in $v.name.$errors" :key="error.$uid" :msg="error.$message" />
      </div>
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
      <div class="flex flex-col w-auto h-auto mb-2">
        <BaseLabel for="password_confirmation" text="Confirm password" />
        <BaseInput type="text" v-model="formdata.password_confirmation" />
        <BaseError v-for="error in $v.password_confirmation.$errors" :key="error.$uid" :msg="error.$message" />
      </div>
      <BaseButton type="submit" class="btn-primary">
        <Loader v-if="loading"></Loader>
        <span v-else>Register</span>
      </BaseButton>
      <span class="w-full flex justify-center mt-3 text-sm">
        <router-link to="/">Login here</router-link>
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