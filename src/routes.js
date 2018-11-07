import Home from './components/Home.vue'
import UserStart from './components/user/UserStart.vue'
import UserEdit from './components/user/UserEdit.vue'
import UserDetail from './components/user/UserDetail.vue'
import User from './components/user/User.vue'
// import User from './components/user/User.vue'
// import User from './components/user/User.vue'
import Header from './components/Header.vue'


export const routes = [
    // {path: '', component:Home},    // depreciated and used code block 13-21 instead
    {path: '', components:{
        default:Home,
        'header-top':Header
    }},
    
    {path: '/user', 
        components:{    
            default:User,
            'header-top':Header
        }, 
        children: [
            {path: '', component:UserStart, name:'userStartPage'},
            {path: ':id/edit', component: UserEdit , props: true ,name:'userEdit'},
            {path: ':id', component: UserDetail , props: true}  //this.$route.params.id no longer needed
        ]
    },
    
    
    // redirect to specific route
    // {path: '/redirect-me', redirect:'/user'}  //assign key-value object instead
    {path: '/redirect-me', redirect:{name:'userStartPage'}},
    
    // catch-all routes / wildcards -- redriected to home page
    {path: '*', redirect:'/'} 
    
    
    // {path: '/user',component:User},
    // {path: '/user',component:User}
]