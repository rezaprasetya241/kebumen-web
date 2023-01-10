<template>
  <v-container>
    <div class="pa-8">
      <h2 class="title black--text font-weight-medium">DASHBOARD</h2>
      <v-row>
        <v-col cols="8" class="pt-0">
          <v-text-field
            class="my-4 rounded-lg"
            placeholder="Judul Artikel"
            flat
            solo
            dense
            outlined
            hide-details
          ></v-text-field>
          <v-autocomplete
            class="my-4 rounded-lg"
            placeholder="Pilih kontent"
            flat
            solo
            dense
            outlined
            hide-details
          ></v-autocomplete>

          <v-textarea
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
        </v-col>
        <v-col>
          <div
            class="d-flex align-center justify-center rounded-lg"
            style="height: 300px; background: white"
          >
            <p>Pilih gambar</p>
          </div>
          <v-btn width="100%" color="#34835e" class="white--text py-5 mt-4"
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
}
</script>
<style scoped lang="scss">
body {
  background: #e2eae6;
}
</style>
