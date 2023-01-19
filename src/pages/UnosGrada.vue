<template>
  <div class="fixed-center" style="max-width: 400px">

    <h4> Unos novog grada</h4>

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="grad"
        label="Naziv grada"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Potrebno je unjeti naziv grada']"
      />

      <div>
        <q-btn label="Spremi" type="submit" color="primary"/>
        <q-btn label="Odustani" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>


<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UnosGrada'
})
</script>
