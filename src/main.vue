<template>
    <!-- App -->
    <div id="app">

        <!-- Statusbar -->
        <f7-statusbar></f7-statusbar>

        <!-- Main Views -->
        <f7-views>
            <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
                <!-- Navbar -->
                <f7-navbar>
                    <f7-nav-center sliding>图书馆参考咨询服务</f7-nav-center>
                    <f7-nav-right>
                        <f7-link icon="icon-bars" open-panel="right"></f7-link>
                    </f7-nav-right>
                </f7-navbar>
                <!-- Pages -->
                <f7-pages>
                    <f7-page login-screen>
                        <f7-login-screen-title>Login</f7-login-screen-title>
                        <f7-list form>
                            <f7-list-item>
                                <f7-label>Username</f7-label>
                                <f7-input name="username" placeholder="Username" type="text"></f7-input>
                            </f7-list-item>
                            <f7-list-item>
                                <f7-label>Password</f7-label>
                                <f7-input name="password" type="password" placeholder="Password"></f7-input>
                            </f7-list-item>
                        </f7-list>
                        <f7-list>
                            <f7-list-button link="/home/" title="登录"></f7-list-button>
                            <f7-list-label>
                                <p link="/sign-up/">新用户注册</p>
                            </f7-list-label>
                        </f7-list>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-views>

    </div>
</template>

<script>
    export default {}
</script>
