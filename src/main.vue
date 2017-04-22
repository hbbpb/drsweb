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
                            <f7-list-item link="/search/" title="文献检索" link-view="#main-view"
                                          link-close-panel></f7-list-item>
                            <f7-list-item link="/my/" title="我的收藏" link-view="#main-view"
                                          link-close-panel></f7-list-item>
                            <f7-list-item link="/setting/" title="系统设置" link-view="#main-view"
                                          link-close-panel></f7-list-item>
                            <f7-list-item link="/help/" title="帮助" link-view="#main-view"
                                          link-close-panel></f7-list-item>
                            <f7-list-item link="/about/" title="关于" link-view="#main-view"
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
                                <f7-input name="username" placeholder="Username" type="text"></f7-input>
                            </f7-list-item>
                            <f7-list-item>
                                <f7-label>密码</f7-label>
                                <f7-input name="password" type="password" placeholder="Password"></f7-input>
                            </f7-list-item>
                        </f7-list>
                        <f7-list>
                            <f7-list-button title="Sign In" close-login-screen></f7-list-button>
                            <f7-list-label>
                                <p>新用户注册</p>
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
                    <f7-nav-center sliding>图书馆参考咨询服务</f7-nav-center>
                    <f7-nav-right>
                        <f7-link icon="icon-bars" open-panel="right"></f7-link>
                    </f7-nav-right>
                </f7-navbar>

                <!-- Pages -->
                <f7-pages>
                    <f7-page>
                        <!-- Search bar -->
                        <f7-searchbar
                                cancel-link="Cancel"
                                search-list="#search-list"
                                placeholder="Search in items"
                                :clear-button="true"
                        ></f7-searchbar>

                        <!-- Will be visible if there is no any results found, defined by "searchbar-not-found" class -->
                        <f7-list class="searchbar-not-found">
                            <f7-list-item title="Nothing found"></f7-list-item>
                        </f7-list>

                        <!-- Search-through list -->
                        <f7-list media-list class="searchbar-found" id="search-list">
                            <f7-list-item title="《人民的名义》" subtitle="周梅森" text="北京十月文艺出版社" link="/about/"></f7-list-item>
                            <f7-list-item title="《大秦帝国》" subtitle="孙皓晖" text="河南文艺出版社" link="/about/"></f7-list-item>
                            <f7-list-item title="《人民的名义》" subtitle="周梅森" text="北京十月文艺出版社" link="/about/"></f7-list-item>
                            <f7-list-item title="《大秦帝国》" subtitle="孙皓晖" text="河南文艺出版社" link="/about/"></f7-list-item>
                            <f7-list-item title="《人民的名义》" subtitle="周梅森" text="北京十月文艺出版社" link="/about/"></f7-list-item>
                            <f7-list-item title="《大秦帝国》" subtitle="孙皓晖" text="河南文艺出版社" link="/about/"></f7-list-item>
                            <f7-list-item title="《人民的名义》" subtitle="周梅森" text="北京十月文艺出版社" link="/about/"></f7-list-item>
                            <f7-list-item title="《大秦帝国》" subtitle="孙皓晖" text="河南文艺出版社" link="/about/"></f7-list-item>
                            <f7-list-item title="《人民的名义》" subtitle="周梅森" text="北京十月文艺出版社" link="/about/"></f7-list-item>
                            <f7-list-item title="《大秦帝国》" subtitle="孙皓晖" text="河南文艺出版社" link="/about/"></f7-list-item>
                            <f7-list-item title="《人民的名义》" subtitle="周梅森" text="北京十月文艺出版社" link="/about/"></f7-list-item>
                            <f7-list-item title="《大秦帝国》" subtitle="孙皓晖" text="河南文艺出版社" link="/about/"></f7-list-item>
                            <f7-list-item title="《人民的名义》" subtitle="周梅森" text="北京十月文艺出版社" link="/about/"></f7-list-item>
                            <f7-list-item title="《大秦帝国》" subtitle="孙皓晖" text="河南文艺出版社" link="/about/"></f7-list-item>
                            <f7-list-item title="《人民的名义》" subtitle="周梅森" text="北京十月文艺出版社" link="/about/"></f7-list-item>
                            <f7-list-item title="《大秦帝国》" subtitle="孙皓晖" text="河南文艺出版社" link="/about/"></f7-list-item>
                            <f7-list-item title="《人民的名义》" subtitle="周梅森" text="北京十月文艺出版社" link="/about/"></f7-list-item>
                            <f7-list-item title="《大秦帝国》" subtitle="孙皓晖" text="河南文艺出版社" link="/about/"></f7-list-item>
                            <f7-list-item title="《人民的名义》" subtitle="周梅森" text="北京十月文艺出版社" link="/about/"></f7-list-item>
                            <f7-list-item title="《大秦帝国》" subtitle="孙皓晖" text="河南文艺出版社" link="/about/"></f7-list-item>
                            <f7-list-item title="《人民的名义》" subtitle="周梅森" text="北京十月文艺出版社" link="/about/"></f7-list-item>
                            <f7-list-item title="《大秦帝国》" subtitle="孙皓晖" text="河南文艺出版社" link="/about/"></f7-list-item>
                            <f7-list-item title="《人民的名义》" subtitle="周梅森" text="北京十月文艺出版社" link="/about/"></f7-list-item>
                            <f7-list-item title="《大秦帝国》" subtitle="孙皓晖" text="河南文艺出版社" link="/about/"></f7-list-item>
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
