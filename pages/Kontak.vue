<template>
  <v-container>
    <v-card class="pa-12 my-8 card-landing rounded-lg">
      <h2 class="black--text text-center">KONTAK DAN SOSIAL MEDIA</h2>
      <v-row class="mt-8">
        <v-col cols="12" xs="12" sm="12" md="6" xl="6" class="pb-0">
          <v-row>
            <v-col>
              <v-text-field
                class="rounded-lg"
                placeholder="Nama"
                outlined
                dense
                filled
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                class="rounded-lg"
                placeholder="Phone"
                outlined
                dense
                filled
              ></v-text-field>
            </v-col>
          </v-row>
          <v-text-field
            class="rounded-lg"
            placeholder="Phone"
            outlined
            dense
            filled
          ></v-text-field>
          <v-textarea
            filled
            outlined
            flat
            auto-grow
            dense
            placeholder="Pesan"
            hide-details
            height="300"
          ></v-textarea>
          <v-btn width="100%" color="#34835e" class="white--text py-5 mt-4"
            >Kirim Pesan</v-btn
          >
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6" xl="6">
          <div>
            <h2 class="title black--text font-weight-medium">
              KEBUMEN BERIMAN
            </h2>
            <div class="my-4">
              <v-icon class="text-active">mdi-map-marker</v-icon>
              <span>Jl. Karangbolong, Buayan, kebumen 54474</span>
            </div>
            <div class="my-4">
              <v-icon class="text-active">mdi-email</v-icon>
              <span>kebumenadem@gmail.com</span>
            </div>
            <div class="my-4">
              <v-icon class="text-active">mdi-phone</v-icon>
              <span>Telp. (0287) 4760162 </span>
            </div>
          </div>
          <div>
            <h2 class="title black--text font-weight-medium">Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9154741378347!2d110.38090371540953!3d-7.798773594379979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5771c52420e5%3A0xfb4c16a126cf33a9!2zVW5pdmVyc2l0YXMgQWhtYWQgRGFobGFuIC0tIEthbXB1cyAxIOqmiOqmpOqmtuqmpeqms-qmuuqmguqmseqmtuqmoOqmseqngOqmhOqmg-qmqeqmouqngOqmouqmg-qmreqmpOqngCAtLSDqpo_qpqnqp4DqpqXqprjqprHqp4Ag6qeH6qeR6qeH!5e0!3m2!1sid!2sid!4v1672221196708!5m2!1sid!2sid"
              :width="$vuetify.breakpoint.xs ? 250 : '100%'"
              height="285"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
export default {}
</script>
<style scoped lang="scss"></style>
