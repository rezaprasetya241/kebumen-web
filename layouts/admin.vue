<template>
  <div>
    <client-only>
      <v-overlay slot="placeholder" :value="true" opacity="1" color="#ffffff">
        <v-progress-circular
          indeterminate
          size="35"
          color="#000"
        ></v-progress-circular>
      </v-overlay>
      <v-app>
        <template>
          <Sidebar />
          <v-main class="landing">
            <nuxt />
          </v-main>
        </template>
      </v-app>
    </client-only>
  </div>
</template>
<script>
import Sidebar from '~/components/Layout/Sidebar.vue'

export default { components: { Sidebar } }
</script>
<style scoped></style>
