<template>
  <div class="fixed-center" style="max-width: 400px">
    <h4>Unos nove lokacije</h4>

    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-btn-dropdown color="primary" label="Grad"></q-btn-dropdown>
      <q-input
        filled
        v-model="lokacija"
        label="Naziv lokacije"
        lazy-rules
        :rules="[
          (val) =>
            (val && val.length > 0) || 'Potrebno je unjeti naziv lokacije',
        ]"
      />

      <div>
        <q-btn label="Spremi" type="submit" color="primary" />
        <q-btn
          label="Odustani"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "UnosLokacije",
});
</script>
