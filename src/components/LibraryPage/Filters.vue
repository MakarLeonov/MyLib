<template>
    <section>
        <div 
            class="filter" 
            :class="{ 'active': filter === currentFilter }"
            @click="changeFilter(filter)"
            v-for="(filter, index) in filters" 
            :key="index">
                {{ filter }}
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'

const currentFilter = ref('All books')

const filters = [
                'All books',
                'On my shelf',
                'Left to a friend',
                'Reading now',
            ]

function changeFilter(filter) {
    currentFilter.value = filter
}

</script>
<style lang="css" scoped>

section {
    margin-top: 7px;
    display: flex;
    gap: 5px;
}

.filter {
    border: 1.9px solid #fff;
    box-sizing: border-box;
    border-radius: 16.5px;
    background: #FFF;
    padding: 8px 23px;
    font-size: 18px;
    cursor: pointer;
    transition: all .2s ease-out;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none; 
       -moz-user-select: none; 
        -ms-user-select: none; 
            user-select: none;
}

.active {
    border: 1.9px solid #000;
    transition: all .2s ease-in;
}
    
</style>