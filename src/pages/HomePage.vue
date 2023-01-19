<template>
  <q-page-sticky position="top-right" :offset="[10, 10]">
    <div class="q-pa-md q-gutter-sm">
      <q-space />
      <q-btn label="Šifrarnici" color="primary" @click="otvoriSifrarnike()" />
      <q-btn label="Nova objava" color="primary" />
    </div>
    <div>
      <q-card class="my-card">
        <q-card-section>
          <div class="q-pa-md column q-gutter-sm">
            <q-btn-dropdown
              color="white"
              text-color="primary"
              label="Kategorija"
            ></q-btn-dropdown>
          </div>
          <div class="q-pa-md column q-gutter-sm">
            <q-btn-dropdown
              color="white"
              text-color="primary"
              label="Grad"
            ></q-btn-dropdown>
          </div>
          <div class="q-pa-md column q-gutter-sm">
            <q-btn-dropdown
              color="white"
              text-color="primary"
              label="Lokacija"
            ></q-btn-dropdown>
          </div>
          <div class="q-pa-md column q-gutter-sm">
            <q-btn label="Filtriraj" color="primary" />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page-sticky>
</template>

<script>
export default {
  methods: {
    otvoriSifrarnike() {
      this.$router.push("/sifrarnici");
    },
  },
};
</script>
