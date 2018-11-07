<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{id}}</p>
        
        <!--without using name property in the route-->
        <!--<router-link-->
        <!--    tag="button"-->
        <!--    class="btn btn-primary" -->
        <!--    :to="'/user/' + id + '/edit'">Edit User     -->
        <!--    </router-link>    -->
        
        
        <router-link
            tag="button"
            class="btn btn-primary" 
            :to="{name:'userEdit',  query:{locale:'en', q:100}}">Edit User     
            </router-link> 
            
    </div>
    
</template>



<script type="text/javascript" src="">
    export default {
        props: ['id'],
    }
    
    
    
</script>