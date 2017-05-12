<template>
    <f7-page>
        <f7-navbar v-bind:title="title" back-link="返回" sliding></f7-navbar>
        <iframe src="http://m.5read.com/index.jspx?xc=5&schoolid=72"></iframe>
    </f7-page>
</template>

<script>
    export default {
        data: function () {
            return {
                title: ''
            }
        }
    }
</script>

<style scoped>
    iframe {
        width: 100%;
        height: 100%;
    }
</style>

