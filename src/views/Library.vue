<template>
    <main>
        <MyTitle>My Own Library {{ this.$store.state.count }}</MyTitle>
        <Filters />
        <div class="content">
            <BookList />
            <AddingForm />
        </div>
    </main>
</template>
<script>
import BookList from '../components/LibraryPage/BookList.vue';
import AddingForm from '../components/LibraryPage/AddingForm.vue';
import Filters from '../components/LibraryPage/Filters.vue';
import MyTitle from '../components/UI/MyTitle.vue';

export default {
    components: { MyTitle, Filters, BookList, AddingForm }
}
</script>
<style lang="css" scoped>

/* main {
    width: 1000px;
} */
    .content {
        width: 100%;
        display: flex;
        gap: 15px;
        margin-top: 15px;
    }
</style>