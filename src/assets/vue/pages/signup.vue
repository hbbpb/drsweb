<template>
    <f7-page>
        <f7-navbar title="用户注册" back-link="返回" sliding></f7-navbar>
        <f7-list form>
            <f7-list-item>
                <f7-label>用户名</f7-label>
                <f7-input type="text" placeholder="Name" v-model="name"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>邮件</f7-label>
                <f7-input type="email" placeholder="E-mail" v-model="email"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>密码</f7-label>
                <f7-input type="password" placeholder="Password" v-model="password"></f7-input>
            </f7-list-item>
        </f7-list>

        <ul>
            <li v-for="error in errors" class="error">{{error}}</li>
        </ul>

        <f7-button @click="signup">注册</f7-button>

    </f7-page>
</template>

<script>
    export default {
        data: function () {
            return {
                name: '',
                email: '',
                password: '',
                errors: []
            }
        },
        methods: {
            signup: function () {
                if (this.validate()) {
                    this.$http.post('signup', {
                        name: this.name,
                        email: this.email,
                        password: this.password
                    })
                        .then(response => {
                            console.log(response)
                        })
                        .catch(error => {
                            console.error(error)
                        });
                }
            },
            validate: function () {
                this.errors = [];
                var name = this.name.trim()
                var email = this.email.trim()
                var password = this.password.trim()

                if (!name.length) {
                    this.errors.push('用户名不能为空。')
                }
                if (!email.length) {
                    this.errors.push('邮件不能为空。')
                }
                if (!password.length) {
                    this.errors.push('密码不能为空。')
                }
                return !this.errors.length
            }
        }
    }
</script>

<style scoped>
    .error {
        color: red;
        font-size: 12px;
    }
</style>
