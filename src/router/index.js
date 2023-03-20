import {createRouter , createWebHistory} from 'vue-router'
import VacationPicker from "@/components/VacationPicker"
import HelloWorld from "@/components/HelloWorld"

const routes = [
    {
        path: '/',
        name: 'home',
        component: VacationPicker
    },
    {
        path: '/hello',
        name: 'hello',
        component: HelloWorld
    }
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL), routes
})


export default router;



