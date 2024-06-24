<template>
  <div class="app-container">

  
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="main-header" >
      <q-toolbar>
        <q-toolbar-title class="title">
          <q-avatar>
            <img src="./assets/LOGO_UAS_DINDA_LABPBK.png">
          </q-avatar>
          UAS LAB PBK-DINDA SUDITA MAULINA
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <q-list>
        <q-item-label header class="title-drawer"> DAFTAR TUGAS-DINDA</q-item-label>
        <q-item>
          <a href="https://dindasudita-projectcv.netlify.app/" class="drawer-link" target="_blank" rel="noopener noreferrer">
            TUGAS 1
          </a>
        </q-item>
        <q-item clickable to="/Tugas2" class="drawer-link" >
          <q-item-section>
            TUGAS 2
          </q-item-section>
        </q-item>
        <q-item>
          <a href="https://todoapp-dinda-tugas3prak.netlify.app/"  class="drawer-link" target="_blank" rel="noopener noreferrer">
            TUGAS 3
          </a>
        </q-item>
        <q-item>
          <a href="https://ourbag-tugasprak3-dindasudita.netlify.app/" class="drawer-link"  target="_blank" rel="noopener noreferrer">
            TUGAS 4
          </a>
        </q-item>
        <q-item>
          <a href="https://main--ourbag-tugas5prakpbk-dindasudita.netlify.app/"  class="drawer-link" target="_blank" rel="noopener noreferrer">
            TUGAS 5
          </a>
        </q-item>
        <q-item>
          <a href="https://tugas6dindasudita.netlify.app/"  class="drawer-link" target="_blank" rel="noopener noreferrer">
            TUGAS 6
          </a>
        </q-item>
        <q-item clickable to="/Weather" class="drawer-link">
          <q-item-section>
            UAS
          </q-item-section>
        </q-item>
        <q-item clickable to="/DescUAS" class="drawer-link">
          <q-item-section>
            KETERANGAN UAS
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

<q-page-container>
  <router-view />
</q-page-container>

    <q-footer elevated class="main-footer">
      <q-toolbar>
        <q-toolbar-title>
          <div class="Dfooter">© 2024 Dinda Sudita Maulina. All rights reserved</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const rightDrawerOpen = ref(false)

    const toggleRightDrawer = () => {
      rightDrawerOpen.value = !rightDrawerOpen.value
    }

    return {
      rightDrawerOpen,
      toggleRightDrawer 
    }
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap')

.app-container
  background-color: #FFF8EB
  height: 100vh
  width: 100vw


.main-header
  background-color: #fd9f01
  box-shadow: 0 6px 2px #feebc7
  color: #fff


.title
  font-weight: bold
  font-size: 20px



.title-drawer
  color: #196b85
  font-weight: bold


.drawer-link
  padding: 10px 20px
  display: flex
  transition: background-color 0.3s, color 0.3s
  text-decoration: none
  align-items: center
  width : 100%
  cursor: pointer
  box-sizing: border-box
  color: #e17800
  font-weight: bold


.drawer-link:hover
  background-color: #18a4c2
  color: #973f09


.q-page-container
  padding: 20px


.main-footer
  background-color: #18a4c2
  box-shadow: 0 -4px 8px #d4f9f8
  text-align: center

.Dfooter
  font-size: 15px


.laman-weather 
  display: flex
  justify-content: center
  align-items: center
  height: 100%
  weight: 100%
</style>
