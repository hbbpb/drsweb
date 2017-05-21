<template>
    <!-- App -->
    <div id="app">

        <!-- Statusbar -->
        <f7-statusbar></f7-statusbar>

        <!-- Right Panel -->
        <f7-panel right cover layout="dark">
            <f7-view id="right-panel-view" navbar-through :dynamic-navbar="true">
                <f7-navbar title="菜单" sliding></f7-navbar>
                <f7-pages>
                    <f7-page>
                        <f7-list>
                            <f7-list-item v-for="menu in menuList" :key="menu.id" v-bind:link="menu.link"
                                          v-bind:title="menu.title"
                                          link-view="#main-view"
                                          link-close-panel></f7-list-item>
                        </f7-list>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-panel>

        <!-- Login Screen -->
        <f7-login-screen id="login-screen" :opened="true">
            <f7-view>
                <f7-pages>
                    <f7-page login-screen>
                        <f7-login-screen-title>用户登录</f7-login-screen-title>
                        <f7-list form>
                            <f7-list-item>
                                <f7-label>用户名</f7-label>
                                <f7-input name="username" placeholder="Username" type="text"
                                          v-validate="'required'"
                                          v-model="username"></f7-input>
                            </f7-list-item>
                            <f7-list-item>
                                <f7-label>密码</f7-label>
                                <f7-input name="password" type="password" placeholder="Password"
                                          v-validate="'required'"
                                          v-model="password"></f7-input>
                            </f7-list-item>
                        </f7-list>
                        <ul>
                            <li v-show="errors.has('username')" class="is-danger">{{ errors.first('username') }}</li>
                            <li v-show="errors.has('password')" class="is-danger">{{ errors.first('password') }}</li>
                            <li v-show="errors.has('login')" class="is-danger">{{ errors.first('login') }}</li>
                        </ul>
                        <f7-list>
                            <f7-list-button title="登录" @click="login"></f7-list-button>
                            <f7-list-label>
                                <a href="/signup/">新用户注册</a>
                            </f7-list-label>
                        </f7-list>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-login-screen>

        <!-- Main Views -->
        <f7-views>
            <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
                <!-- Navbar -->
                <f7-navbar>
                    <f7-nav-center sliding>{{title}}</f7-nav-center>
                    <f7-nav-right>
                        <f7-link icon="icon-bars" open-panel="right"></f7-link>
                    </f7-nav-right>
                </f7-navbar>

                <!-- Pages -->
                <f7-pages>
                    <f7-page>
                        <div>
                            <f7-grid no-gutter>
                                <f7-col width="100">
                                    <div class="title">
                                        数字参考咨询系统
                                    </div>
                                </f7-col>
                            </f7-grid>
                            <f7-grid no-gutter>
                                <f7-col width="100">
                                    <div class="banner"></div>
                                </f7-col>
                            </f7-grid>
                            <f7-grid no-gutter>
                                <f7-col width="50" v-for="menu in menuList" :key="menu.id" class="menu-card">
                                    <a v-bind:href="menu.link">
                                        <div class="menu-card-item">
                                            {{menu.title}}
                                        </div>
                                    </a>
                                </f7-col>
                            </f7-grid>
                        </div>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-views>

    </div>
</template>

<script>
    import zh_CN from 'vee-validate/dist/locale/zh_CN'
    export default {
        data: function () {
            return {
                title: '图书馆参考咨询服务',
                username: '',
                password: '',
                menuList: [
                    {
                        id: 0,
                        title: '问答咨询',
                        link: ''
                    },
                    {
                        id: 1,
                        title: '查询记录',
                        link: ''
                    },
                    {
                        id: 2,
                        title: '文献咨询',
                        link: '/literature/'
                    },
                    {
                        id: 3,
                        title: '知识咨询',
                        link: ''
                    },
                    {
                        id: 4,
                        title: '表单咨询',
                        link: ''
                    },
                    {
                        id: 5,
                        title: '服务指南',
                        link: '/about/'
                    }
                ]
            }
        },
        computed: {
            logined: function () {
                return this.$root.logined
            }
        },
        methods: {
            login: function () {
                this.$validator.validateAll().then(() => {
                    this.$http.post('auth/login', {
                        username: this.username,
                        password: this.password
                    })
                        .then(response => {
                            console.log(response)
                            this.$root.logined = true
                            this.$f7.closeModal('#login-screen')
                        })
                        .catch(error => {
                            console.error(error)
                            if (error.status === 401) {
                                this.errors.add('login', '用户名或密码不正确.')
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
    .title {
        height: 59px;
        color: white;
        background: #005ea8;
        line-height: 59px;
        text-align: center;
        font-size: 25px;
        display: none;
    }

    .banner {
        height: 250px;
        background-image: url("./assets/static/images/banner1.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .menu-card-item {
        height: 85px;
        color: white;
        line-height: 85px;
        text-align: center;
    }

    .menu-card:nth-of-type(1) {
        background: linear-gradient(to bottom, #f9aa2f, #fc9408);
    }

    .menu-card:nth-of-type(2) {
        background: linear-gradient(to bottom, #514a4c, #302c33);
    }

    .menu-card:nth-of-type(3) {
        background: linear-gradient(to bottom, #3dc4bd, #20b4b5);
    }

    .menu-card:nth-of-type(4) {
        background: linear-gradient(to bottom, #d74428, #ce2302);
    }

    .menu-card:nth-of-type(5) {
        background: linear-gradient(to bottom, #5f7285, #3c5f6d);
    }

    .menu-card:nth-of-type(6) {
        background: linear-gradient(to bottom, #00658a, #014c76)
    }
</style>
