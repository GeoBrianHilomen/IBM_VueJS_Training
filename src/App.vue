<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// @ts-ignore: Vue SFC module declaration missing in this project
import HomeView from './views/Task3/HomeView.vue';
import TaskListView from './views/Task4/TaskListView.vue';

</script>
  
<template>
    
    <header>
      <h1>My App</h1>
      <nav>
        <RouterLink to="/home">Home</RouterLink>&nbsp
        <RouterLink to="/about">About</RouterLink>&nbsp
        <RouterLink to="/task4">Task4</RouterLink>&nbsp
      </nav>
    </header>
    <main>
    <!-- <HomeView /> -->

    <RouterView />
  </main>
</template>
