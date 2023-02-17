<template>
    <div>
        <h1>List Of Products</h1>
        <ProductList/>
    </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default{
    name: 'indexProducts',
    components: {
        ProductList
    }
}
</script>