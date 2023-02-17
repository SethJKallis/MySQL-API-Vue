<template>
    <div>
        <table class="table table-striped table-dark table-hover">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" v-bind:key="item.product_id">
                    <td>{{ item.product_name }}</td>
                    <td>{{ item.product_price }}</td>
                    <td><router-link class="btn btn-success me-2" v-bind:to="{name: 'editProduct', params: {id: item.product_id}}">Edit</router-link>
                    <a class="btn btn-danger" v-on:click="deleteProduct(item.product_id)">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <router-link class="btn btn-primary" v-bind:to="{name: 'createProduct'}">ADD</router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    name: 'ProductList',
    data(){
        return{
            items: [],
        };
    },
    methods: {
        //GET ALL PRODUCTS
        async getProducts(){
            try{
                const response = await axios.get("http://localhost:3500/products");
                this.items = response.data
            } catch(err){
                console.log(err);
            }
        },
        async deleteProduct(id){
            try{
                await axios.delete(`http://localhost:3500/products/${id}`);
                this.getProducts();
            } catch(err){
                console.log(err);
            }
        },
    },
    created(){
        this.getProducts();
    }
}
</script>