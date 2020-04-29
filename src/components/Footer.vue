<template>
    <div class="footer-container">
        <div class="footer-logo">
            <h2 class="logo">GC</h2>
        </div>

        <div class="footer-content">
            <p class="copyright">&copy; 2020 GoCulis</p>
        </div>

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
    background-color:var(--text-color);
    display:flex;
    flex-direction: column;
    padding-left:90px;
    padding-top:20px;
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

.footer-content .copyright{
    color:var(--footer-back-color);
}

@media screen and (max-width: 500px) {
    .footer-container{
        padding-left:20px;

    }
}
</style>