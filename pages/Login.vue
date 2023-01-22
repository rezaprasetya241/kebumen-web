<template>
  <v-container
    fluid
    :class="$vuetify.breakpoint.smAndDown ? 'mobile view' : 'desktop view'"
    style="height: 100vh; width: 100%"
  >
    <v-row align="center" style="height: 100vh !important">
      <v-col
        v-if="$vuetify.breakpoint.mdAndUp"
        cols="6"
        style="padding: 0 !important"
      >
        <v-img src="/loginimg.png" height="100vh"></v-img>
      </v-col>
      <v-col
        :cols="$vuetify.breakpoint.sm ? '' : $vuetify.breakpoint.xs ? '' : '6'"
        align-self="center"
        :class="$vuetify.breakpoint.xs ? 'px-0' : 'px-16'"
        style="max-height:50vh,max-width:50vh"
      >
        <v-row class="mx-6">
          <v-col cols="12" class="text-center mr-2">
            <div class="d-flex" style="margin-bottom: 16px">
              <v-avatar size="auto" tile class="d-flex flex-column">
                <div>
                  <v-img width="61" height="81" src="/logo.png"></v-img>
                </div>
              </v-avatar>
              <div style="max-width: 345px; text-align: start !important">
                <h3>WONOREJO BERSATU</h3>
                <p class="font-weight-medium">
                  Terwujudnya Wonorejo II Bersatu, Mandiri, Maju dan Sejahtera
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
        <LoginForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginForm from '~/components/LoginForm.vue'

export default {
  components: { LoginForm },
  layout: 'admin',
}
</script>

<style scoped lang="scss"></style>
