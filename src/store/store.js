import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        books: [
            {id: 1, author: 'Эрих Мария Ремарк', title: 'На Западном фронет без перемен', rating: '🧡 🧡 🧡 🧡 🧡', status: 'On my shelf', date: '22.03.2002', note: 'Удивительно, что такое историческое призведение было написано одним из первых у этого автора!.'},
            {id: 2, author: 'Герман Гёссе', title: 'Степной волк', rating: '🧡 🧡 🖤 🖤 🖤', status: 'On my shelf', date: '22.03.2002', note: 'Книга про Даню, что ещё сказать.'},
            {id: 3, author: 'Герман Гёссе', title: 'Курортник', rating: '🧡 🧡 🧡 🖤 🖤', status: 'Reading now', date: '22.03.2002', note: 'Отличная книга, авториский слог просто великолепен, у меня нет слов, как мне нравится это читать, такой длинный коментарий, но автор заслуживает таких тысячу, причём ежечасно!!!!'},
            {id: 4, author: 'Эрнест Хемингуэй', title: 'Старик и море', rating: '🧡 🧡 🧡 🧡 🖤', status: 'On my shelf', date: '22.03.2002', note: 'Автор настолько передушнил, что прилось открыть форточку и выпасть.'},
        ]
      }
    },
    getters: {
      booksOnMyShelf(state) {
        return state.books.filter(el => el.status === 'On my shelf')
      },
      
      booksThatILeftToAFriend(state) {
        return state.books.filter(el => el.status === 'Left to a friend')
      },
      
      booksThatImReadingNow(state) {
        return state.books.filter(el => el.status === 'Reading now')
      },

    }
  })

  export default store