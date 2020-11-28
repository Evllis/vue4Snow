<template>
    <div class="header">
        <div class="header-left">
            左
        </div>
        <div class="header-main">
            <slot>Title</slot>
        </div>
        <div class="header-right">
            <div>右</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ys-header',
    data() {
        return {}
    },
    methods: {},
    moutned() {},
}
</script>

<style lang="less" scoped>
    .header {
        display: flex;
        width: 100%;
        line-height: 88px;
        height: 88px;
        font-size: 36px;
        background-color: #42b983;
        z-index: 999;
        color: #fff;
        transition: background-color 0.5s ease;
        .header-main {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        .header-left,
        .header-right {
            padding: 0 16px;
            width: 120px;
        }
        .header-left {
            text-align: left;
        }
        .header-right {
            text-align: right;
        }
    }
</style>
