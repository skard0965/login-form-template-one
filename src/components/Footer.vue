<template>
    <div class="footer-container">
        <div class="footer-logo">
            <h2 class="logo">GC</h2>
        </div>

        <p class="copyright">&copy; 2020 GoCulis</p>

    </div>
</template>

<script>
export default {
    name:'footer'
    
}
</script>

<style>
.footer-container {
    height:150px;
    background-color:black;
    padding:20px 30px;
    display:flex;
    flex-direction: column;

}

.footer-logo {
    height:40px;
    width:40px;
    vertical-align: middle;
    background-color:var(--footer-back-color);
    text-align: center;
    display:flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-radius: 3px;
}

.footer-logo .logo {
    font-family: var(--font-style-two);
    color:var(--text-color);
    font-size:20px;

}

.footer-container .copyright {
    color:var(--footer-back-color);
    font-size:15px;
}


</style>