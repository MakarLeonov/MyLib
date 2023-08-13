<template>
    <aside>
        <div class="statistics">
            <div class="statistics__gpoup">
                <p class="total-title">Total books:</p>
                <p class="total-amount">{{ books.length }}</p>
            </div>
            <div class="statistics__gpoup">
                <p>Books on my shelf:</p>
                <p class="amount">{{ booksOnMyShelf.length }}</p>
            </div>
            <div class="statistics__gpoup">
                <p>Left to a friend:</p>
                <p class="amount">{{ booksThatILeftToAFriend.length }}</p>
            </div>
            <div class="statistics__gpoup">
                <p>I`m reading now: </p>
                <p class="amount">{{ booksThatImReadingNow.length }}</p>
            </div>
        </div>

        <p class="title">+ Add a new book</p>
        <form>
            <div class="input">
                <input type="text" v-model="authorName" placeholder="Author's name...">
                <transition>
                    <svg v-if="authorName" @click="authorName = ''" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path d="M10.5 0C4.6935 0 0 4.6935 0 10.5C0 16.3065 4.6935 21 10.5 21C16.3065 21 21 16.3065 21 10.5C21 4.6935 16.3065 0 10.5 0ZM15.75 14.2695L14.2695 15.75L10.5 11.9805L6.7305 15.75L5.25 14.2695L9.0195 10.5L5.25 6.7305L6.7305 5.25L10.5 9.0195L14.2695 5.25L15.75 6.7305L11.9805 10.5L15.75 14.2695Z" fill="#4B4B4A"/>
                    </svg>
                </transition>
            </div>

            <div class="input">
                <input type="text" v-model="bookTitle" placeholder="Title of the book...">
                <transition>
                    <svg v-if="bookTitle" @click="bookTitle = ''" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path d="M10.5 0C4.6935 0 0 4.6935 0 10.5C0 16.3065 4.6935 21 10.5 21C16.3065 21 21 16.3065 21 10.5C21 4.6935 16.3065 0 10.5 0ZM15.75 14.2695L14.2695 15.75L10.5 11.9805L6.7305 15.75L5.25 14.2695L9.0195 10.5L5.25 6.7305L6.7305 5.25L10.5 9.0195L14.2695 5.25L15.75 6.7305L11.9805 10.5L15.75 14.2695Z" fill="#4B4B4A"/>
                    </svg>
                </transition>
            </div>

            <div class="input textarea">
                <textarea v-model="note" placeholder="Your note about this book..."></textarea>
                <transition>
                    <svg v-if="note" @click="note = ''" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path d="M10.5 0C4.6935 0 0 4.6935 0 10.5C0 16.3065 4.6935 21 10.5 21C16.3065 21 21 16.3065 21 10.5C21 4.6935 16.3065 0 10.5 0ZM15.75 14.2695L14.2695 15.75L10.5 11.9805L6.7305 15.75L5.25 14.2695L9.0195 10.5L5.25 6.7305L6.7305 5.25L10.5 9.0195L14.2695 5.25L15.75 6.7305L11.9805 10.5L15.75 14.2695Z" fill="#4B4B4A"/>
                    </svg>
                </transition>
            </div>
            <div class="buttons">
                <p @click="cleanForm">Clean the form</p>
                <button>Add this book</button>
            </div>
        </form>
    </aside>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const authorName = ref('')
const bookTitle = ref('')
const note = ref('')

function cleanForm() {
    authorName.value = ''
    bookTitle.value = ''
    note.value = ''
}

let books = computed(() => store.state.books)
let booksOnMyShelf = computed(() => store.getters.booksOnMyShelf)
let booksThatILeftToAFriend = computed(() => store.getters.booksThatILeftToAFriend)
let booksThatImReadingNow = computed(() => store.getters.booksThatImReadingNow)

</script>
<style lang="css" scoped>

aside {
    width: 30%;
    padding: 10px;
}

.title {
    color: #4B4B4A;
    font-size: 32px;
    margin-bottom: 7px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.input {
    position: relative;
    height: 55px;
}

input, textarea {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 1px solid #4B4B4A;
    background: #FFF;
    padding: 17px 40px 17px 15px;

    color: #4B4B4A;
    font-size: 18px;
    font-weight: 300;
}

.textarea {
    height: 250px;
}

textarea {
    width: 100%;
    height: 250px;
    resize: none;
}

svg {
    position: absolute;
    top: 17px;
    right: 17px;
    cursor: pointer;
}

.buttons {
    display: flex;
    justify-content: space-between;
}

.buttons > p {
    padding-bottom: 10px;
    color: #4b4b4adc;
    font-size: 18px;
    font-weight: 300;
    cursor: pointer;
    transition: all .3s ease-out;
}

.buttons > p:hover {
    text-decoration: underline 1px black;
    color: #4B4B4A;
    transition: all .3s ease-in;
}
.buttons > button {
    padding: 13px 40px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #4B4B4A;
    background: #FFF;
    font-size: 20px;
    font-weight: 300;
    cursor: pointer;
}

.statistics {
    display: flex;
    flex-direction: column;
    padding: 0 10px 20px;
    gap: 8px;
}
.statistics__gpoup {
    display: flex;
    justify-content: space-between;
    /* padding: 0 5px; */

    color: #4B4B4A;
    font-family: Rubik;
    font-size: 20px;
}
.total-title {
    color: #4B4B4A;
    font-family: Rubik;
    font-size: 30px;
}
.total-amount {
    color: #4B4B4A;
    font-family: Rubik;
    font-size: 24px;
}


.buttons > button:hover {
    background: #4B4B4A;
    color: #fff;
    transition: all .3s ease-in;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
    
</style>