import Card from './Card.vue'

Card.install = (app) => {
  app.component('Card', Card)
}

export default Card