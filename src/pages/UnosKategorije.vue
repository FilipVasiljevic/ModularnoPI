<template>
  <div class="fixed-center" style="max-width: 400px">
    <h4>Unos nove kategorije</h4>

    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="kategorija"
        label="Naziv kategorija"
        lazy-rules
        :rules="[
          (val) =>
            (val && val.length > 0) || 'Potrebno je unjeti naziv kategorije',
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
import { collection, addDoc, db } from "firebase/firestore";

export default {
  data() {
    return {
      kategorija: "",
    };
  },
  methods: {
    async onSubmit() {
      let newKategorija = this.kategorija;
      try {
        const docRef = await addDoc(collection(db, "Kategorije"), {
          newKategorija,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
};
</script>
