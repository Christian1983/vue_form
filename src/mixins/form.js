import axios from 'axios'

export default {
  data: () => ({
    errors: [],
    model: null,
    edit_model: null,
    loading: true,
    requiredRule: [
      v => !!v || 'Muss ausgefüllt werden.'
    ]
  }),

  created: function () {
    if (this.url != undefined) { this.initModel() }
    else { console.log('error: model url undefined!') }
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

    validate() {
      console.log('checking form ...')
      return true
    },

    reset() {
      this.model = JSON.parse(JSON.stringify(this.edit_model))
    },

    submit() {
      if(this.validate()) {
        // .. submit
      }
    }
  },

  computed: {
    changed: function() {
      let __changed = false
      Object.entries(this.edit_model).forEach(([key, value]) => {
        if (value != this.model[key]) { __changed = true }
      })
      return __changed
    },
  }
}
