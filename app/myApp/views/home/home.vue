<template>
    <div>home页面</div>
    <favlist></favlist>
    <div v-link="{name: 'shop'}">go shop</div>
</template>
<style>
</style>
<script type="text/babel">
    import Favlist from 'components/Favlist.vue'
    export default {
        components: {
            Favlist
        }
    }
</script>