<script setup lang="ts">
import { Ref, ref } from 'vue'

const CURRENCY: { [key: string]: number } = {
  'ONE': 1,
  'TWO': 2,
  'FIVE': 5,
  'TEN': 10,
  'TWENTY': 20,
  'FIFTY': 50,
  'HUNDRED': 100,
};
let price: Ref<number> = ref(0)
let cash: Ref<number> = ref(0)
let result: Ref<{ status: string, change: (string|number)[][] }> = ref({
  status: '',
  change: []
})

const cid = ref([
  ["ONE", 1],
  ["TWO", 4],
  ["FIVE", 5],
  ["TEN", 60],
  ["TWENTY", 100],
  ["FIFTY", 50],
  ["HUNDRED", 200],
]);

const calculateChange = () => {
  const change: (string|number)[][] = [];
  const newCid: (string|number)[][] = [];

  let remaining = cash.value - price.value
  if (remaining === 0) {
    result.value = { status: 'OPEN', change: [] }
  }
  const totalCash = cid.value.reduce((prev, cur)=> {
    return prev + Number(cur[1])
  }, 0)
  const sortedCid = cid.value.toSorted((a, b) => Number(b[1]) - Number(a[1]));

  // 500
  // 350
  // 100 = 2
  // 50 = 1
  for (const [unit, amount] of sortedCid) {
    const value = CURRENCY[unit];
    const count = Math.floor(remaining / value);

    if (count > 0 && count <= Number(amount)) {
      change.push([
        unit, value * count
      ])
      remaining -= count * value;
      newCid.push([
        unit, Number(amount) - (value * count)

      ])
    } else {
      newCid.push([
        unit, amount
      ])
    }
  }

  cid.value = newCid

  if (remaining < 0 || totalCash < remaining) {
    result.value =  { status: 'INSUFFICIENT_FUNDS', change: [] };
  } else {
    result.value =  { status: 'OPEN', change };
  }
};
</script>

<template>
  Cash Drawer
  <div>
    <input type="number" v-model="price">Price</input>
  </div>
  <div>
    <input type="number" v-model="cash">Cash</input>
  </div>

  <div>
    <button @click="calculateChange()">Calculate</button>
  </div>

  <div>
    Result: {{ result }}
  </div>
</template>
