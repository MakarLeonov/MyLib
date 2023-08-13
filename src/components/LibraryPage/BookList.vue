<template>
    <section>
        <Book 
            v-for="(book, index) in this.$store.state.books" 
            :key="book.id" 
            :book="book"
            :id="index"
            />
    </section>
</template>
<script setup>
import Book from "./Book.vue"

</script>
<style lang="css" scoped>

section {
    position: relative;
    /* flex-grow: 1; */
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 5px;
}


    
</style>