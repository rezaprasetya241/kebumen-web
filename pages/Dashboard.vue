<template>
  <v-container>
    <!-- <v-alert dismissible type="error"> I'm an error alert. </v-alert> -->

    <notifications position="top right" />
    <notifications group="foo" />
    <Sidebar />
    <div class="pa-8">
      <h2 class="title black--text font-weight-medium">DASHBOARD</h2>
      <!-- <template v-else> -->
      <v-row>
        <v-col cols="8" class="pt-0">
          <v-text-field
            v-model="postData.title"
            class="mt-4 rounded-lg"
            placeholder="Judul Post"
            height="40"
            flat
            solo
            dense
            outlined
            :error-messages="
              $v.postData.title.$invalid && $v.postData.title.$dirty
                ? '*Title news is required'
                : []
            "
            @input="$v.postData.title.$touch()"
            @blur="$v.postData.title.$touch()"
          ></v-text-field>
          <v-select
            v-model="postData.content"
            class="rounded-lg"
            placeholder="Pilih kontent"
            :items="content"
            flat
            solo
            dense
            outlined
            :error-messages="
              $v.postData.content.$invalid && $v.postData.content.$dirty
                ? '*Kontent news is required'
                : []
            "
            @input="$v.postData.content.$touch()"
            @blur="$v.postData.content.$touch()"
          ></v-select>

          <v-textarea
            v-model="postData.description"
            class="rounded-lg"
            outlined
            flat
            solo
            auto-grow
            dense
            placeholder="Konten isi artikel"
            height="300"
            :error-messages="
              $v.postData.description.$invalid && $v.postData.description.$dirty
                ? '*descripsi news is required'
                : []
            "
            @input="$v.postData.description.$touch()"
            @blur="$v.postData.description.$touch()"
          ></v-textarea>

          <v-btn
            width="100%"
            color="#34835e"
            class="white--text py-5 mt-4"
            @click="handleSubmit"
            >Kirim</v-btn
          >
          <!-- :disabled="$v.postData.$invalid" -->
        </v-col>
        <v-col>
          <div
            class="d-flex align-center justify-center rounded-lg"
            style="height: 300px; background: white"
          >
            <p v-if="!imageFile">Pilih gambar</p>
            <v-img v-else :src="imageFile" width="250" height="100%"></v-img>
          </div>
          <v-file-input
            id="imageInputFile"
            accept="iamge/*"
            hide-input
            prepend-icon=""
            :error-messages="
              $v.postData.imgUrl.$invalid && $v.postData.imgUrl.$dirty
                ? '*Image news is required'
                : []
            "
            @input="$v.postData.imgUrl.$touch()"
            @blur="$v.postData.imgUrl.$touch()"
            @change="imageInput"
          ></v-file-input>
          <v-btn
            width="100%"
            color="#34835e"
            class="white--text py-5 mt-4"
            @click="handleAddImage"
            >Pilih Gambar</v-btn
          >
        </v-col>
      </v-row>
      <!-- </template> -->
    </div>
  </v-container>
</template>
<script>
import { required } from 'vuelidate/lib/validators'
import Sidebar from '~/components/Layout/Sidebar.vue'
export default {
  components: { Sidebar },
  layout: 'admin',
  data() {
    return {
      imageFile: undefined,
      user: {
        username: '',
        password: '',
      },
      content: ['berita', 'event', 'artikel'],
      postData: {
        title: '',
        content: '',
        description: '',
        imgUrl: 'tester',
      },
      error_message: '',
      validUser: false,
    }
  },
  methods: {
    handleAddImage() {
      const addImage = document.getElementById('imageInputFile')
      addImage.click()
    },
    imageInput(event) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.postData.imgUrl = e.target.result
      }
      reader.readAsDataURL(event)
      this.imageFile = event ? URL.createObjectURL(event) : undefined
    },
    openNotification(typeNot, titleNot, messageNot) {
      this.$notify({
        group: 'foo',
        type: typeNot,
        title: titleNot,
        text: messageNot,
        duration: 2000,
      })
    },
    // submit
    async handleSubmit() {
      const res = await this.$store.dispatch('postNews', this.postData)
      if (res) {
        this.postData = {
          title: '',
          content: '',
          description: '',
          imgUrl: '',
        }
        this.openNotification(
          'success',
          'Successfull add news',
          'Add news successfull'
        )
        this.$v.postData.$reset()
      } else {
        this.openNotification(
          'error',
          'Failed add news',
          this.$store.get('message')
        )
      }
    },
    handleLogin() {
      if (
        this.user.username === 'admin@kebumen.com' &&
        this.user.password === 'desakebumen123'
      ) {
        this.validUser = true
        this.$cookiz.set('user', true)
        this.$router.push('/dashboard')
      } else {
        this.error_message = 'Username or Password is wrong'
      }
    },
  },
  validations: {
    postData: {
      title: { required },
      content: { required },
      description: { required },
      imgUrl: { required },
    },
  },
}
</script>
<style scoped lang="scss">
body {
  background: #e2eae6;
}
</style>
