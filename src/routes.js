import Home from './components/Home.vue'
import UserStart from './components/user/UserStart.vue'
import UserEdit from './components/user/UserEdit.vue'
import UserDetail from './components/user/UserDetail.vue'
import User from './components/user/User.vue'
// import User from './components/user/User.vue'
// import User from './components/user/User.vue'


export const routes = [
    {path: '', component:Home},
    {path: '/user', component:User , 
    
    children: [
        {path: '', component:UserStart},
        {path: ':id/edit', component: UserEdit , props: true ,name:'userEdit'},
        {path: ':id', component: UserDetail , props: true}  //this.$route.params.id no longer needed
    ]},
    // {path: '/user',component:User},
    // {path: '/user',component:User}
]