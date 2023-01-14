<template>
  <div>
    <img
      :src="imgAddress"
      width="100%"
      :height="$vuetify.breakpoint.xs ? 200 : 360"
    />
    <h2 class="title black--text">{{ titleNews }}</h2>
    <p class="black--text">{{ description }}</p>
  </div>
</template>
<script>
export default {
  name: 'CardComponent',
  props: {
    imgAddress: {
      type: String,
      default: '~/static/ibusepeda.png',
    },
    titleNews: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
    },
  },
}
</script>
<style scoped></style>
