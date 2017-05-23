<template>
    <f7-page>
        <f7-navbar title="问答咨询" back-link="返回" sliding></f7-navbar>
        <div v-if="!submited">
            <f7-list form>
                <f7-list-item>
                    <f7-label>标题</f7-label>
                    <f7-input type="text" placeholder="Input the title in here." v-model="title"
                              v-validate="'required|max:140'"
                              name="title"></f7-input>
                </f7-list-item>
                <f7-list-item class="no-border">
                    <f7-label>问题描述</f7-label>
                </f7-list-item>
                <f7-list-item>
                    <textarea placeholder="Input the description in here." v-model="description"
                              v-validate="'max:1000'" name="description"></textarea>
                </f7-list-item>
            </f7-list>

            <ul>
                <li v-show="errors.has('title')" class="is-danger">{{ errors.first('title') }}</li>
                <li v-show="errors.has('description')" class="is-danger">{{ errors.first('description') }}</li>
            </ul>

            <f7-button @click="submit">提交</f7-button>
        </div>
        <div v-else>
            <div class="greeting">提问成功！</div>
            <div class="back-button">
                <f7-link @click="$router.back()">返回主页</f7-link>
            </div>
        </div>
    </f7-page>
</template>

<script>
    import zh_CN from 'vee-validate/dist/locale/zh_CN'
    export default {
        data: function () {
            return {
                title: '',
                description: '',
                submited: false
            }
        },
        methods: {
            submit: function () {
                this.$validator.validateAll().then(() => {
                    this.$http.post('subjects', {
                        title: this.title,
                        description: this.description
                    })
                        .then(response => {
                            console.log(response)
                            this.submited = true
                        })
                        .catch(error => {
                            console.error(error)
                        });
                }).catch(() => {

                })
            }
        },
        created(){
            this.$validator.setLocale('zh_CN')
            this.$validator.updateDictionary({
                zh_CN: {
                    messages: zh_CN.messages,
                    attributes: {
                        title: '标题',
                        description: '问题描述'
                    }
                }
            })
        }
    }
</script>

<style>
    .list-block .no-border .item-inner:after {
        background-color: #FFF;
    }
</style>

<style scoped>
    .list-block {
        margin: 0;
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

    textarea {
        height: 300px;
    }
</style>
