import { createRouter, createWebHistory} from 'vue-router'
import Library from '../views/Library.vue'
import Notes from '../views/Notes.vue'
import Сompilations from '../views/Сompilations.vue'
import ReadLater from '../views/ReadLater.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'main', component: Library },
    { path: '/notes', name: 'notes', component: Notes },
    { path: '/compilations', name: 'compilations', component: Сompilations },
    { path: '/read-later', name: 'read-later', component: ReadLater },
  ],
})

export default router