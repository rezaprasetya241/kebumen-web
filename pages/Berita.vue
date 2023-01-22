<template>
  <v-container>
    <v-card class="pa-12 my-8 card-landing rounded-lg">
      <h2 class="text-center">BERITA ACARA DESA TERBARU1</h2>

      <template v-if="loaderNews">
        <v-progress-linear color="#34835E" indeterminate></v-progress-linear>
      </template>
      <template v-else>
        <CardComponent
          v-for="item in berita"
          :key="item.id"
          :img-address="item.imgUrl"
          :title-news="item.title"
          :description="item.description"
        ></CardComponent>
      </template>
    </v-card>
  </v-container>
</template>
<script>
import CardComponent from '~/components/CardComponent.vue'

export default {
  components: { CardComponent },
  data() {
    return {
      listNews: [
        {
          id: 1,
          title: 'Vaksinasi ke 2 Remaja',
          details: {
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.",
            moreDescription:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.",
          },
          imgUrl: require('~/static/berita.png'),
        },
        {
          id: 2,
          title: 'Vaksinasi ke 2 Remaja',
          details: {
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.",
            moreDescription:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.",
          },
          imgUrl: require('~/static/berita.png'),
        },
        {
          id: 3,
          title: 'Vaksinasi ke 2 Remaja',
          details: {
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.",
            moreDescription:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.",
          },
          imgUrl: require('~/static/berita.png'),
        },
      ],
    }
  },

  computed: {
    berita() {
      return this.$store.get('berita')
    },
    loaderNews() {
      return this.$store.get('loaderNews')
    },
  },
  mounted() {
    this.$store.dispatch('getNews')
  },
  methods: {
    async getNews() {
      await this.$store.dispatch('getNews')
    },
  },
}
</script>
<style scoped></style>
