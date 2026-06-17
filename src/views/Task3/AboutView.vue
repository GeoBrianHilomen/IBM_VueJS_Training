<template>
    <div>
        <h1>About This App</h1>
        <button class="back-btn" @click="goBack">← Back</button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
  // your code here
  router.push('/home')

}
</script>

<style scoped>

</style>