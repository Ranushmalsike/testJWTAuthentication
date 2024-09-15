<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
    <p>Hello, {{ user.name }}!</p>
    <button @click="handleLogout" class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      Logout
    </button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import authService from '../services/auth.service';

export default {
  name: 'Dashboard',
  setup() {
    const user = ref({});
    const router = useRouter();

    onMounted(() => {
      user.value = authService.getUser();
    });

    const handleLogout = () => {
      authService.logout();
      router.push('/login');
    };

    return {
      user,
      handleLogout
    };
  }
};
</script>
