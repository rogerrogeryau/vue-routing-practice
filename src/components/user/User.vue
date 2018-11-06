<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <!--<p>Loaded ID: {{id}} </p>-->
        <button @click="navigateToHome" class="btn btn-primary">Navigate to Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>


<script type="text/javascript" src="">
    export default {
        // data(){
        //     return{
        //         id: this.$route.params.id
        //     }
        // },
        methods:{
            navigateToHome(){
                this.$router.push('/');
                
                // with named path
                // this.$router.push({name:'homePath'});
            }
        },
        // watch:{
        //     '$route':function(to, from){
        //         this.id = to.params.id
        //     }
        // }
    }
</script>