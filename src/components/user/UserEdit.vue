<template>
    <div>
        <h3>Edit the User</h3>
        <p>locale: {{$route.query.locale}}</p>
        <p>q: {{$route.query.q}}</p>
        <p>userID: {{id}}</p>
        <!--<p>q: {{query.q}}</p>        -->
        
        <hr>
        <buttton class="btn btn-primary">Confirm</buttton>
        
        <div style="height:700px"></div>
        <p id="data">Some Extra Data</p>
    </div>

</template>




<script type="text/javascript" src="">
    export default{
        props:['id']
        
    }
    
    
    
    
</script>