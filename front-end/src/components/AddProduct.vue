<template>
    <div>
        <div class="form-group">
            <label class="label" for="name">Product Name</label>
            <div class="control">
                <input class="form-control text-center w-50 mx-auto" type="text" v-model="product_name">
            </div>
        </div>

        <div class="form-group">
            <label class="label" for="price">price</label>
            <div class="control">
                <input class="form-control text-center w-50 mx-auto" type="text" v-model="product_price">
            </div>
        </div>

        <div class="control">
            <button class="btn btn-success mt-2" v-on:click="createProduct">SAVE</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default{
    name: 'AddProduct',
    data(){
        return{
            product_name:'',
            product_price:''
        };
    },
    methods: {
        //CREATE A NEW PRODUCT
        async createProduct(){
            try{
                await axios.post('http://localhost:3500/products', {
                    product_name: this.product_name,
                    product_price: this.product_price
                });
                this.product_name = '',
                this.product_price = '',
                this.$router.push('/');
            }catch(err){
                console.log(err)
            }
        }
    }
}
</script>