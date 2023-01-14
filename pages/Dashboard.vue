<template>
  <v-container>
    <div class="pa-8">
      <h2 class="title black--text font-weight-medium">DASHBOARD</h2>
      <v-row>
        <v-col cols="8" class="pt-0">
          <v-text-field
            v-model="postData.title"
            class="my-4 rounded-lg"
            placeholder="Judul Post"
            flat
            solo
            dense
            outlined
            hide-details
          ></v-text-field>
          <v-select
            v-model="postData.content"
            class="my-4 rounded-lg"
            placeholder="Pilih kontent"
            :items="content"
            flat
            solo
            dense
            outlined
            hide-details
          ></v-select>

          <v-textarea
            v-model="postData.description"
            class="my-4 rounded-lg"
            outlined
            flat
            solo
            auto-grow
            dense
            placeholder="Konten isi artikel"
            hide-details
            height="300"
          ></v-textarea>

          <v-btn
            width="100%"
            color="#34835e"
            class="white--text py-5 mt-4"
            @click="handleSubmit"
            >Kirim</v-btn
          >
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
            hide-details
            prepend-icon=""
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
    </div>
  </v-container>
</template>
<script>
export default {
  layout: 'admin',

  data() {
    return {
      imageFile: undefined,
      content: ['berita', 'event', 'artikel'],
      postData: {
        title: '',
        content: '',
        description: '',
        imgUrl: 'tester',
      },
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

    // submit
    async handleSubmit() {
      await this.$store.dispatch('postNews', this.postData)
    },
  },
}
</script>
<style scoped lang="scss">
body {
  background: #e2eae6;
}
</style>
