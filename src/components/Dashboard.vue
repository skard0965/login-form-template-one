<template>
<div class="dashboard-container">

    <div class="dashboard-header">
        <h3>Welcome to Goculis!</h3>
    </div>



</div>
    
</template>

<script>
export default {
    name:'dashboard'
    
}
</script>
<style>
.dashboard-container {
    /* margin:60px 60px; */
    background-color: var(--primary-green-color);
}

.dashboard-header {
    height:150px;
    /* width:30%; */
    display:flex;
    flex-direction: column;
    align-items: center;
    align-content: center;

}

.dashboard-header h3,p {
        margin-top:50px;
}

.dashboard-header h3 {
    font-size:30px;
}

.dashboard-header p{
    font-size:20px;
}


</style>
