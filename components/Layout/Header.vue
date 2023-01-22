<template>
  <div>
    <v-app-bar app color="#34835E">
      <v-layout class="headerInfo" justify-space-between>
        <div class="d-flex align-center ml-4 logo">
          <img
            src="~/static//logo.png"
            alt="Logo Desa"
            width="39"
            height="51"
            class="mr-4"
          />
          <h2 class="fw-bold white--text">WONOREJO II BERSATU</h2>
        </div>
        <v-app-bar-nav-icon
          v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
          color="white"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-list class="list">
          <v-list-item-group
            v-model="selectedItem"
            :value="menus.name"
            color="transparent"
          >
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
                <!-- class="text-primary" -->
                <!-- :color="selectedItem === menu.name ? '#FFC72C' : 'white'" -->
                <v-list-item-content class="pa-4"
                  ><v-list-item-title
                    :style="
                      selectedItem === menu.name
                        ? 'color: #FFC72C !important'
                        : 'color: white !important'
                    "
                    >{{ menu.name }}</v-list-item-title
                  ></v-list-item-content
                >
              </v-list-item>
            </template>
          </v-list-item-group>
        </v-list>
      </v-layout>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      right
      fixed
      temporary
      style="background: #34835e"
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="selectedItem"
          :value="menus.name"
          color="text-active"
        >
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
              ><v-list-item-title class="text-primary">{{
                menu.name
              }}</v-list-item-title></v-list-item-content
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import menus from '@/menu'
export default {
  name: 'HeaderComponent',
  data() {
    return {
      drawer: false,
      selectedItem: 'Beranda',
    }
  },

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

@media screen and (max-width: 1000px) {
  .list {
    display: none;
    .v-list-item-group {
      .v-list-item__title {
        font-size: 12px !important;
      }
    }
  }
  .logo {
    img {
      width: 25px !important;
      height: 40px !important;
    }
    h2 {
      font-size: 14px;
    }
  }
}
</style>
