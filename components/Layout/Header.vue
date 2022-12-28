<template>
  <div>
    <v-app-bar app color="primary">
      <v-layout class="headerInfo" justify-space-between>
        <div class="d-flex align-center ml-4">
          <img
            src="~/static//logo.svg"
            alt="Logo Desa"
            width="39"
            height="51"
            class="mr-4"
          />
          <h2 class="fw-bold">KEBUMEN BERIMAN</h2>
        </div>
        <v-list class="list">
          <v-list-item-group :value="menus.name" color="text-active">
            <template>
              <v-list-item
                v-for="menu in menus"
                :id="menu.name"
                :key="menu.name"
                :value="menu.name"
                class="mx-2"
                link
                @click="$router.push(menu.url)"
              >
                <v-list-item-content
                  ><v-list-item-title>{{
                    menu.name
                  }}</v-list-item-title></v-list-item-content
                >
              </v-list-item>
            </template>
          </v-list-item-group>
        </v-list>
        <!-- <div class="d-flex align-center">
          <v-list-item>
            
          </v-list-item>
        </div> -->
      </v-layout>
    </v-app-bar>
  </div>
</template>
<script>
import menus from '@/menu'
export default {
  name: 'HeaderComponent',

  computed: {
    menus() {
      return menus
    },
  },
}
</script>
<style lang="scss" scoped>
.list {
  display: flex;
  align-items: center;
  background: none;
  padding: 0 !important;
  .v-list-item-group {
    display: flex !important;
    align-items: center !important;
  }
}
</style>
