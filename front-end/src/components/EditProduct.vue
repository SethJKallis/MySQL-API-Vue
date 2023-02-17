<template>
    <div>
        <div class="form-group">
            <label class="label" for="name">Product Name</label>
            <div class="form-control">
                <input class="form-control" type="text" v-model="product_name">
            </div>
        </div>

        <div class="form-group">
            <label class="label" for="price">price</label>
            <div class="form-control">
                <input class="form-control" type="text" v-model="product_price">
            </div>
        </div>

        <div class="control">
            <button class="btn btn-primary" v-on:click="updateProduct">UPDATE</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    name: 'EditProduct',
    data(){
        return{
            product_name: '',
            product_price: ''
        };
    },
    methods: {
        //GET PRODUCT BY ID
        async getProductById(){
            try{
                const response = await axios.get(`http://localhost:3500/products/${this.$route.params.id}`);
                this.product_name = response.data.product_name;
                this.product_price = response.data.product_price;
            } catch(err){
                console.log(err);
            }
        },

        async updateProduct(){
            try{
                await axios.put(`http://localhost:3500/products/${this.$route.params.id}`, {
                    product_name: this.product_name,
                    product_price: this.product_price
                });
                this.product_name = '';
                this.product_price = '';
                this.$router.push('/');
            } catch(err){
                console.log(err)
            }
        }
    },
    created: function(){
        this.getProductById();
    }
}
</script>