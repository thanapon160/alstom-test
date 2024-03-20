<script setup lang="ts">
import { ref, reactive } from 'vue'
import FruitCard from './FruitCard.vue';

const fruits = ref(
  [
    {
        "id": 1,
        "name": "Banana",
        "description": "A banana is an edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called plantains, distinguishing them from dessert banana",
        "photoUrl":"http://www.pngall.com/wp-content/uploads/2016/04/Banana-PNG.png"
    },
    {
        "id": 2,
        "name": "Apple",
        "description": "An apple is a sweet, edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus.",
        "photoUrl":"https://images.freshop.com/00852201002228/ad2f58915e3267700906f1025ef8917f_medium.png"
    },
    {
        "id": 3,
        "name": "Peach",
        "description": "The peach is a deciduous tree native to the region of Northwest China between the Tarim Basin and the north slopes of the Kunlun Mountains, where it was first domesticated and cultivated. It bears an edible juicy fruit called a peach or a nectarine.",
        "photoUrl":"http://icons.iconarchive.com/icons/artbees/paradise-fruits/256/Peach-icon.png"
    },
    {
        "id": 4,
        "name": "Strawberry",
        "description": "The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness.",
        "photoUrl":"https://static.wixstatic.com/media/2cd43b_7415c9b79d664508b6f62a6953403b75~mv2.png/v1/fill/w_256,h_256,fp_0.50_0.50/2cd43b_7415c9b79d664508b6f62a6953403b75~mv2.png"
    },
    {
        "id": 5,
        "name": "Tomato",
        "description": "The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America.",
        "photoUrl":"https://www.kampexport.com/sites/kampexport.com/files/images/legume/image/tomates_256_1.jpg"
    },
    {
        "id": 6,
        "name": "Cherry",
        "description": "A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe. Commercial cherries are obtained from cultivars of several species, such as the sweet Prunus avium and the sour Prunus cerasus.",
        "photoUrl":"https://cdn.shopify.com/s/files/1/0610/2881/products/cherries.jpg?v=1446676415"
    }
  ]
)

const modal = ref(false)
let fruit = reactive({
  name: '',
  description: '',
  photoUrl: ''
})

function handleAddFruit() {
  if (fruit.name && fruit.description && fruit.photoUrl) {
    fruits.value.push({
      id: Math.floor(Math.random() * 100), // assume it uuid
      ...fruit
    })
  }
  fruit = {
    name: '',
    description: '',
    photoUrl: ''
  }
  modal.value = false
}
</script>

<template>
  <div class="header">
    <button @click="modal = true">Add Fruit</button>
  </div>

  {{ fruit.name }}

  <div v-if="modal" class="modal">
    <p>Please add your fruit information</p>
    <div class="input">
      Name: <input v-model="fruit.name"/>
      Description: <input v-model="fruit.description"/>
      Photo: <input v-model="fruit.photoUrl"/>
    </div>
    <div class="button">
      <button @click="modal = false">Close</button>
      <button @click="handleAddFruit">Add</button>
    </div>
  </div>

  <div class="container">
    <FruitCard
      v-for="fruit in fruits"
      :name="fruit.name"
      :description="fruit.description"
      :url="fruit.photoUrl"
    />
  </div>
</template>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: center;
  }

  .input {
    display: flex;
    flex-direction: column;
  }

  .modal {
    position: fixed;
    padding: 16px;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 600px;
    background-color: wheat;
    transform: translate(-50%, -50%);
  }

  .container {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 8px;
  }

  .button {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
  }
</style>
