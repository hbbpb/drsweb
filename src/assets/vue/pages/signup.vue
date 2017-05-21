<template>
    <f7-page>
        <f7-navbar title="用户注册" back-link="返回" sliding></f7-navbar>
        <div v-if="!logined">
            <f7-list form>
                <f7-list-item>
                    <f7-label>用户名</f7-label>
                    <f7-input type="text" placeholder="Name" v-model="username"
                              v-validate="'required|alpha_num|min:3|max:30'"
                              name="username"></f7-input>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>邮件</f7-label>
                    <f7-input type="email" placeholder="Email" v-model="email" v-validate="'required|email|max:30'"
                              name="email"></f7-input>

                </f7-list-item>
                <f7-list-item>
                    <f7-label>密码</f7-label>
                    <f7-input type="password" placeholder="Password" v-model="password" name="password"
                              v-validate="'required|min:6|max:30'"></f7-input>
                </f7-list-item>
            </f7-list>


            <ul>
                <li v-show="errors.has('username')" class="is-danger">{{ errors.first('username') }}</li>
                <li v-show="errors.has('email')" class="is-danger">{{ errors.first('email') }}</li>
                <li v-show="errors.has('password')" class="is-danger">{{ errors.first('password') }}</li>
                <li v-show="errors.has('conflict')" class="is-danger">{{ errors.first('conflict') }}</li>
            </ul>

            <f7-button @click="signup">注册</f7-button>
        </div>
        <div v-else>
            <div class="greeting">注册成功！</div>
            <div class="back-button">
                <a href="/">返回主页</a>
            </div>
        </div>
    </f7-page>
</template>

<script>
    import zh_CN from 'vee-validate/dist/locale/zh_CN'
    export default {
        data: function () {
            return {
                username: '',
                email: '',
                password: '',
                logined: false
            }
        },
        methods: {
            signup: function () {
                this.$validator.validateAll().then(() => {
                    this.$http.post('auth/register', {
                        username: this.username,
                        email: this.email,
                        password: this.password
                    })
                        .then(response => {
                            console.log(response)
                            this.logined = true
//                            this.$router.back()
                        })
                        .catch(error => {
                            console.error(error)
                            if (error.status === 409) {
                                this.errors.add('conflict', '该用户名或邮件已被注册.')
                            }
                        });
                }).catch(() => {

                })
            }
        },
        created(){
            this.$validator.setLocale('zh_CN');
            this.$validator.updateDictionary({
                zh_CN: {
                    messages: zh_CN.messages,
                    attributes: {
                        username: '用户名',
                        email: '邮件',
                        password: '密码'
                    }
                }
            });
        }
    }
</script>

<style scoped>
    .list-block {
        margin: 43px 0 0 0;
    }

    .is-danger {
        color: red;
        font-size: 12px;
    }

    .greeting {
        font-size: 15px;
        text-align: center;
        margin-top: 30%;
        margin-bottom: 20%;
    }

    .back-button {
        text-align: center;
    }
</style>
