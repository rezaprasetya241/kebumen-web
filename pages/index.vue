<template>
  <div>
    <v-carousel hide-delimiters height="100vh">
      <v-carousel-item
        v-for="(item, i) in listImg"
        :key="i"
        :src="item.imgAddress"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row class="fill-height title" align="center" justify="center">
          <div
            class="white--text font-weight-medium"
            :style="
              $vuetify.breakpoint.xs
                ? 'font-size: 22px !important'
                : 'font-size: 40px !important'
            "
          >
            {{ item.title }}
          </div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <v-container>
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="8" xl="8">
          <v-card class="pa-12 card-landing rounded-lg">
            <h2 class="title black--text">POS TERBARU</h2>
            <CardComponent
              v-for="item in terbaru"
              :key="item.id"
              :img-address="item.imgUrl"
              :title-news="item.title"
              :description="item.description"
              class="mt-6"
            ></CardComponent>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="4" xl="12">
          <v-card class="pa-12 card-landing rounded-lg">
            <h2 class="text-center title black--text">SAMBUTAN KEPALA DESA</h2>
            <v-img
              class="rounded-lg"
              :src="require('~/static/kades 1.svg')"
              alt="Kepala desa"
              width="100%"
              :height="$vuetify.breakpoint.xs ? 300 : 430"
            ></v-img>
            <p class="black--text mt-8">
              Assalamualaikum Wr. Wb. <br />Dalam rangka mewujudkan Pemerintahan
              yang baik “Good governance” dengan Pola Pemerintahan yang
              Partisipatif, Transparan dan Akuntable maka melalui Website ini
              Saya selaku Kepala Desa berusaha menyajikan Informasi kegiatan
              Penyelenggaran Pemerintahan Desa, Pembangunan Desa, Pemberdayaan
              Masyarakat Desa, Pembinaan Masyarakat Desa, Serta
              Kegiatan-kegiatan Tak terduga yang terjadi di Desa Kedungsumber
              Kecamatan Temayang Kabupaten Bojonegoro dengan seluas-luasnya,
              Khususnya kepada seluruh warga masyarakat Desa Kedungsumber dan
              Kepada Semua orang secara umum.
            </p>
          </v-card>
        </v-col>
      </v-row>
      <v-card class="pa-12 card-border rounded-lg mt-8">
        <h2 class="title black--text text-center">STRUKTUR KELEMBAGAAN DESA</h2>
        <div class="d-flex align-center justify-center struktur">
          <v-img
            class="mr-8"
            :src="require('~/static/strukturDesa.svg')"
            :max-width="$vuetify.breakpoint.xs ? 250 : 420"
            max-height="100%"
          ></v-img>
          <div class="ml-8">
            <h2 class="title black--text mb-6">Keterangan:</h2>
            <p style="line-height: 8px">Dukuh: Bpk.Edi Irwanto</p>
            <p style="line-height: 8px">PKK: Ibu Eny Widyastuti, S.pd</p>
            <p style="line-height: 8px">PokGiat: Murtidjo</p>
            <v-list>
              <v-list-item v-for="data in listRt" :key="data.id">
                <v-list-item-content>
                  <v-list-item-title>{{
                    `${data.id} ${data.rt} ${data.name}`
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import CardComponent from '~/components/CardComponent.vue'

export default {
  name: 'IndexPage',
  components: { CardComponent },
  data() {
    return {
      listImg: [
        {
          imgAddress: require('~/static/ibusepeda.png'),
          title: '~ Selamat Datang ~',
        },
        {
          imgAddress:
            'https://images.unsplash.com/photo-1565060156559-fd6a027cd88e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGtlYnVtZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          title: '~ Di Kabupaten ~',
        },
        {
          imgAddress:
            'https://images.unsplash.com/photo-1647067606211-8ca1d23d9616?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGtlYnVtZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          title: '~ Kebumen Beriman ~',
        },
      ],
      listRt: [
        {
          id: '01',
          rt: 'Rt  01',
          name: 'Hadi Sanjoyo',
        },
        {
          id: '02',
          rt: 'Rt  02',
          name: 'Subiyanto ,S.iP',
        },
        {
          id: '03',
          rt: 'Rt  03',
          name: 'Subadi Atmojo',
        },
        {
          id: '04',
          rt: 'Rt  04',
          name: 'Samsudin',
        },
        {
          id: '05',
          rt: 'Rt  05',
          name: 'Warsidi',
        },
        {
          id: '06',
          rt: 'Rt  06',
          name: 'Wajiman',
        },
        {
          id: '07',
          rt: 'Rt  07',
          name: 'Jumadi',
        },
      ],
    }
  },
  computed: {
    terbaru() {
      return this.$store.get('terbaru')
    },
  },
  mounted() {
    this.$store.dispatch('getTerbaru')
  },
}
</script>
<style lang="scss" scoped>
:deep(.v-list-item) {
  min-height: 20px !important;
  .v-list-item__content {
    padding: 5px !important;
  }
}
.btn-icon {
  background: transparent !important;
  padding: 0 !important;
}
@media screen and (max-width: 1000px) {
  .struktur {
    flex-direction: column !important;
    /* :deep(.v-img) {
      margin-right: 0 !important;
      width: 200px !important;
    } */
    h2 {
      font-size: 16px !important;
    }
    p {
      font-size: 12px !important;
    }

    .v-list-item__title {
      text-align: start;
      font-size: 12px !important;
    }
  }
}
</style>
