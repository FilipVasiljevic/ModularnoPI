<template>
  <q-page class="flex q-pa-md">
    <q-card class="full-width">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="Kategorije" label="Kategorije" />
        <q-tab name="Gradovi" label="Gradovi" />
        <q-tab name="Lokacije" label="Lokacije" />
      </q-tabs>
    </q-card>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      tab: "Kategorije",
    };
  },
};
</script>
