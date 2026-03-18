<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
      <h1 class="text-xl font-bold text-gray-900">Portfolio CMS</h1>
      <div class="flex gap-4">
        <router-link to="/projects" class="text-gray-600 hover:text-gray-900">Projects</router-link>
        <router-link to="/settings" class="text-gray-600 hover:text-gray-900">Settings</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<script setup>
import { RouterView } from 'vue-router';
</script>
