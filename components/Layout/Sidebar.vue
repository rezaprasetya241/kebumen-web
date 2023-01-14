<template>
  <div>
    <v-navigation-drawer :value="drawer" app color="#34835E" width="260" dark>
      <v-layout class="d-flex flex-column align-center justify-center">
        <div class="mt-12 text-center">
          <v-avatar size="72">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
          <p class="mb-0 mt-3 white--text">Syifa Kirana</p>
          <p class="mb-0" style="color: #9599a6">Admin Web Profile</p>
        </div>
        <v-divider
          class="my-2"
          color="#FFC72C"
          width="100%"
          style="border: 1px solid transparent"
        ></v-divider>
        <p class="text-active mt-8">DASHBOARD</p>
      </v-layout>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: 'SidebarDashboard',
  data() {
    return {
      drawer: false,
    }
  },
}
</script>
<style scoped lang="scss"></style>
