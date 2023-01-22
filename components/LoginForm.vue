<template>
  <v-card
    flat
    class="mx-4 py-8 rounded-lg pa-4"
    style="border: none !important"
  >
    <form @submit.prevent>
      <p
        v-if="error_message"
        class="mb-4 mt-4 red--text"
        :style="$vuetify.breakpoint.xs && 'font-size: 12px'"
      >
        {{ error_message }}
      </p>
      <div class="font-weight-medium">Email Address</div>
      <v-text-field
        v-model="user.username"
        placeholder="Email"
        type="email"
        class="mb-1"
        height="44px"
        color="#34835E"
        background-color="#E2EAE6"
        dense
        outlined
        rounded
        :error-messages="
          $v.user.username.$invalid && $v.user.username.$dirty
            ? '*Email is required'
            : []
        "
        @input="$v.user.username.$touch()"
        @blur="$v.user.username.$touch()"
      ></v-text-field>
      <div class="font-weight-medium">Password</div>
      <v-text-field
        v-model="user.password"
        placeholder="Password"
        filled
        type="password"
        class="mb-1"
        height="44px"
        color="#34835E"
        background-color="#E2EAE6"
        dense
        outlined
        rounded
        :error-messages="
          $v.user.password.$invalid && $v.user.password.$dirty
            ? '*Password is required'
            : []
        "
        @input="$v.user.password.$touch()"
        @blur="$v.user.password.$touch()"
      ></v-text-field>
      <v-btn
        :class="
          $vuetify.breakpoint.smAndDown ? 'white--text mb-4' : 'white--text'
        "
        color="#34835E"
        large
        block
        rounded
        depressed
        :disabled="$v.$invalid"
        type="submit"
        @click="handleLogin"
      >
        Masuk
      </v-btn>
    </form>
  </v-card>
</template>
<script>
import { required } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      error_message: '',
    }
  },
  methods: {
    handleLogin() {
      if (
        this.user.username === 'admin@kebumen.com' &&
        this.user.password === 'desakebumen123'
      ) {
        this.$cookiz.set('admin-token', true)
        this.$router.push('/dashboard')
      } else {
        this.error_message = 'Username or Password is wrong'
      }
    },
  },

  validations: {
    user: {
      username: { required },
      password: { required },
    },
  },
}
</script>
<style scoped lang="scss"></style>
