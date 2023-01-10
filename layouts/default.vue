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
          <!-- header layout -->
          <HeaderComponent />
          <!-- Content layout -->
          <v-main class="landing">
            <div>
              <nuxt />
            </div>
          </v-main>
          <!-- ========= // ============= -->
          <!-- Footer layout -->
          <FooterComponent />
        </template>
      </v-app>
    </client-only>
  </div>
</template>

<script>
import FooterComponent from '~/components/Layout/Footer.vue'
import HeaderComponent from '~/components/Layout/Header.vue'

export default {
  name: 'DefaultLayout',
  components: { HeaderComponent, FooterComponent },
  data() {
    return {}
  },
}
</script>
