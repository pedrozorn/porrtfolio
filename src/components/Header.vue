<template>
    <div>
        <h1>{{ title }}</h1>
        <p> {{ text }}</p>
    </div>
</template>

<script>

export default ({
    data() {
        return {
            title: "Header",
            text: "ヘッダーテスト"
        }
    }
})
</script >

<style scoped lang="scss">
div {
  border: 1px solid red
}
</style>
