<template>
  <div id="Home">
    <Fertilizer/>
    <Vegetable/>
    <Area/>
    <Order/>
    <Problems/>
    <Problem_solving/>
    <Farmers/>
  </div>
</template>

<script>
import Fertilizer from './Fertilizer'
import Vegetable from './Vegetable'
import Area from './Area'
import Order from './Order'
import Problem_solving from './Problem_solving'
import Problems from './Problems'
import Farmers from './Farmers'
export default {
name :'Home',
components:{
  Fertilizer,
  Vegetable,
  Area,
  Order,
  Problem_solving,
  Problems,
  Farmers,
},
}
</script>

<style>
.scop {
  margin-top: 30px;
  border-style: solid none none none;
}
</style>