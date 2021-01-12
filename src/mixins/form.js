import axios from 'axios'

export default {
  data: () => ({
    errors: [],
    model: null,
    edit_model: null,
    loading: true,
  }),

  created: function () {
    if (this.url != undefined) { this.initModel() }
  },

  methods: {
    initModel() {
      axios.get(this.url)
        .then(response => {
          this.model = response.data
          this.edit_model = JSON.parse(JSON.stringify(this.model))
          this.loading = false
        })
    },

    checkForm() {
      console.log('checking form ...')
    }
  },

  computed: {
    changed: function () {
      let __changed = false
      Object.entries(this.edit_model).forEach(([key, value]) => {
        if (value != this.model[key]) { __changed = true }
      })
      return __changed
    }
  }
}
