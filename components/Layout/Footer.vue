<template>
  <div style="background: #34835e !important">
    <v-container>
      <v-row class="px">
        <v-col cols="12" xs="12" sm="12" md="6" xl="6">
          <div class="d-flex justify-center mt-8">
            <div class="mr-4">
              <img
                class="mt-3"
                src="~/static//logo.svg"
                alt="Logo Desa"
                width="39"
                height="51"
              />
            </div>
            <div class="d-flex flex-column justify-center white--text">
              <div>
                <h1
                  :style="
                    $vuetify.breakpoint.xs ? 'font-size: 22px !important' : ''
                  "
                >
                  KEBUMEN BERIMAN
                </h1>
                <p>
                  Unggul dalam Mutu Santun dalam Perilaku, Berdasarkan Iman dan
                  Taqwa.
                </p>
              </div>
              <div>
                <v-icon class="text-active">mdi-map-marker</v-icon>
                <span>Jl. Karangbolong, Buayan, kebumen 54474</span>
              </div>
              <div>
                <v-icon class="text-active">mdi-email</v-icon>
                <span>kebumenadem@gmail.com</span>
              </div>
              <div>
                <v-icon class="text-active">mdi-phone</v-icon>
                <span>Telp. (0287) 4760162 </span>
              </div>
            </div>
          </div>
        </v-col>
        <v-col
          cols="12"
          xs="12"
          sm="12"
          md="6"
          xl="6"
          class="d-flex flex-column justify-center"
        >
          <h2 class="title text-active text-center">Maps</h2>
          <div class="d-flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9154741378347!2d110.38090371540953!3d-7.798773594379979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5771c52420e5%3A0xfb4c16a126cf33a9!2zVW5pdmVyc2l0YXMgQWhtYWQgRGFobGFuIC0tIEthbXB1cyAxIOqmiOqmpOqmtuqmpeqms-qmuuqmguqmseqmtuqmoOqmseqngOqmhOqmg-qmqeqmouqngOqmouqmg-qmreqmpOqngCAtLSDqpo_qpqnqp4DqpqXqprjqprHqp4Ag6qeH6qeR6qeH!5e0!3m2!1sid!2sid!4v1672221196708!5m2!1sid!2sid"
              width="480"
              height="220"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="text-center my-4">
      <v-icon class="mx-2" color="white">mdi-facebook</v-icon>
      <v-icon class="mx-2" color="white">mdi-instagram</v-icon>
      <v-icon class="mx-2" color="white">mdi-twitter</v-icon>
      <v-icon class="mx-2" color="white">mdi-youtube</v-icon>
    </div>
    <div
      class="text-center footer py-2"
      :style="$vuetify.breakpoint.xs ? 'font-size: 12px !important' : ''"
    >
      Copyright 2022 • Made With Love by Hey Asaa.
    </div>
  </div>
</template>
<script>
export default {
  name: 'FooterComponent',
}
</script>
<style lang="scss" scoped>
.footer {
  background: #205c40;
  color: white;
}
</style>
