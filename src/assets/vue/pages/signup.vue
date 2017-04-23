<template>
    <f7-page>
        <f7-navbar title="用户注册" back-link="返回" sliding></f7-navbar>
        <f7-list form>
            <f7-list-item>
                <f7-label>用户名</f7-label>
                <f7-input type="text" placeholder="Name"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>E-mail</f7-label>
                <f7-input type="email" placeholder="E-mail"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>密码</f7-label>
                <f7-input type="password" placeholder="Password"></f7-input>
            </f7-list-item>
        </f7-list>

        <f7-button color="green">注册</f7-button>

    </f7-page>
</template>

<script>
    export default {}
</script>
