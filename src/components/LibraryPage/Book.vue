<template>
    <div class="book" @click="openBook">
        <div class="head">
            <p class="id">{{ props.id + 1 }}.</p>
            <p class="title">{{ props.book.title }}</p>
            <p class="author">{{ props.book.author }}</p>
            <p class="rating">{{ props.book.rating }}</p>
        </div>
        <div class="content" :class="{'is-open': maxHeight !== '0'}">
            <p class="note">{{ props.book.note }}</p>
            <div class="bottom">
                <p class="status">Status: {{ props.book.status }}</p>
                <p class="date">{{ props.book.date }}</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps(['book', 'id'])

const maxHeight = ref('0')

function openBook() {
    if (maxHeight.value === '0') {
        maxHeight.value = 'fit-content'
    } else {
        maxHeight.value = '0'
    }
}

</script>
<style lang="css" scoped>

.book {
    box-sizing: border-box;
    border: 1px solid transparent;
    border-radius: 16px;
    color: #4B4B4A;
    cursor: pointer;
    background: #d4d4d41f;
}

.book:hover {
    border: 1px solid #4B4B4A;
    color: #000;
    transition: border 0.2s ease-in, color 0.2s ease-in;
}
.head {
    width: 100%;
    height: 60px;
    border-radius: 15px;
    /* background: #F0F0F0; */
    display: flex;
    justify-content: space-between;
    gap: 5px;
    align-items: center;
    padding: 0 20px;
    font-size: 16px;
}
.title {
    flex-grow: 1;
}
.author {
    flex-basis: 35%;
}
.rating {
    flex-basis: 13%;
}

.content {
    /* transition: .3s ease-in-out; */
    /* padding: 0 20px 10px; */
    max-height: v-bind(maxHeight);
    overflow: hidden;
}

.is-open  {
    padding: 0 20px 10px;
}
.note {
    color: #4B4B4A;
    font-size: 16px;
}

.bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

</style>