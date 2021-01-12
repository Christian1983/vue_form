<template lang='pug'>
  #TodoEdit(v-if="!loading")
    form(@submit="checkForm")
      p(for="userID") User ID
      input#userID(type="text" name="userID" v-model="edit_model.userId")
      br
      p(for="id") ID
      input#id(type="text" name="id" v-model="edit_model.id")
      br
      p(for="title") Title
      input#title(type="text" name="title" v-model="edit_model.title")
      br
      p(for="complete") ID
      input#complete(type="checkbox" name="complete" v-model="edit_model.completed")
      br
      button(type='submit' :disabled="!changed") Speichern
</template>

<script>
//import SimpleForm from './SimpleForm.vue'
import Form from '../mixins/form.js'
export default {
  props: ['url'],
  mixins: [Form],
}
</script>

<style>

</style>