<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 d-flex w-100">
                    <div class="col-lg-3">
                        <selectbar/>
                    </div>
                    <div class="col-lg-9 d-flex flex-wrap" style="background-color: #e3e3e3;">
                        <h4 class=" text-uppercase m-1">products</h4>
                        <div class="products-all d-flex flex-row  col-lg-12 flex-wrap ">
                            <div class=" justify-center align-items-center col-lg-3 " v-for="item in data.products" :key="item.id">
                                <div class="product-style d-flex flex-column justify-content-center align-items-center " style="background-color: aliceblue;">
                                    <NuxtLink class=" text-decoration-none d-flex flex-column justify-content-center align-items-center text-black" :to="`/products/${item.id}`">
                                        <img class="image-products"  :src="item.images[0]" alt="">
                                        <h4 class="h-style text-center">{{ item.title }}</h4>
                                    </NuxtLink>
                                    <p class="descrip-style">{{ item.description }}</p>
                                    <p class="price-style">{{ item.price }}</p>
                                    <div class=" d-flex justify-content-center align-items-center flex-row">
                                        <button type="button" class="btn btn-dark" @click="decrease(item.id)">-</button>
                                        <h2 class=" p-2 m-2">{{ counters[item.id] }}</h2>
                                        <button type="button" class="btn btn-dark" @click="increase(item.id)">+</button>
                                    </div>
                                    <button type="button" class="btn btn-primary w-75 pl-2 pr-2 m-4">
                                        {{ item.price }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import selectbar from '@/components/selectbar/selectebar.vue'
import { reactive, ref , onMounted  } from 'vue';

const { data } = await useFetch('https://dummyjson.com/products');

// const counter = useState('counter', () => 0);
const counters = reactive({});

onMounted(() => {
    data.value.products.forEach(product => {
        counters[product.id] = 0;
    });
});

const increase = (id)=> {
    if(!counters[id]) counters[id] = 0;
    counters[id]++;
}
const decrease = (id) =>{
    if(!counters[id]) counters[id] = 0;
    if(counters[id] > 0) counters[id]--;
}

</script>

<style lang="scss" scoped>
.price-style{
    width: 100%;
    min-height: 20px; 
  display: flex;
  align-items: start;
  padding: 10px;

}
.descrip-style{
    min-height: 220px; 
  display: flex;
  align-items: center;
  padding: 10px;

}
.h-style {
  min-height: 80px; 
  display: flex;
  align-items: center;

}
.product-style{
    
   width: 100%;
   min-height: 100%;
   border: #eeeeee 1px solid;

}
.image-products{
    width: 200px;
    height: 200px;
    
}
.products-all{
    widows: 100%;
    height: 100%;
    position: relative;

}

</style>