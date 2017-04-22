<template>
    <f7-page>
        <f7-navbar title="我的收藏" back-link="返回" sliding></f7-navbar>

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
</template>

<script>
    export default {}
</script>
