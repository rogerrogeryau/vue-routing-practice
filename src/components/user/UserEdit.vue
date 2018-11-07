<template>
    <div>
        <h3>Edit the User</h3>
        <p>locale: {{$route.query.locale}}</p>
        <p>q: {{$route.query.q}}</p>
        <p>userID: {{id}}</p>
        <!--<p>q: {{query.q}}</p>        -->
    </div>

</template>




<script type="text/javascript" src="">
    export default{
        props:['id']
        
    }
    
    
    
    
</script>