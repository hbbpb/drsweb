<template>
    <f7-page>
        <f7-navbar title="咨询列表" back-link="返回" sliding></f7-navbar>
        <!-- Search bar -->
        <f7-searchbar
                cancel-link="Cancel"
                search-list="#subject-list"
                placeholder="Search in items"
                :clear-button="true"
        ></f7-searchbar>

        <!-- Will be visible if there is no any results found, defined by "searchbar-not-found" class -->
        <f7-list class="searchbar-not-found">
            <f7-list-item title="Nothing found"></f7-list-item>
        </f7-list>

        <!-- Search-through list -->
        <f7-list media-list class="searchbar-found" id="subject-list">
            <f7-list-item v-for="item in subjects"
                          :key="item.id"
                          v-bind:title="item.title"
                          v-bind:subtitle="item.description"
                          v-bind:text="'by ' + item.questioner.username + ' at ' + formatDateTime(item.createdAt)"
                          link="/subject/"></f7-list-item>
        </f7-list>

    </f7-page>
</template>

<script>
    export default {
        data: function () {
            return {
                subjects: []
            }
        },
        methods: {
            getAllSubject: function () {
                this.$http.get('subjects')
                    .then(response => {
                        console.log(response)
                        this.subjects = response.data;
                    })
                    .catch(error => {
                        console.error(error)
                    })
            },
            formatDateTime: function (timestamp) {
                var date = new Date(timestamp)
                var y = date.getFullYear()
                var m = date.getMonth() + 1
                m = m < 10 ? ('0' + m) : m
                var d = date.getDate()
                d = d < 10 ? ('0' + d) : d
                var h = date.getHours()
                var minute = date.getMinutes()
                minute = minute < 10 ? ('0' + minute) : minute
                return y + '-' + m + '-' + d + ' ' + h + ':' + minute
            }
        },
        created(){
            this.getAllSubject()
        }
    }
</script>
