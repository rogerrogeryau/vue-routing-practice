import Home from './components/Home.vue'
import Header from './components/Header.vue'
// import UserStart from './components/user/UserStart.vue'     //loaded lasily
// import UserEdit from './components/user/UserEdit.vue'       //loaded lasily
// import UserDetail from './components/user/UserDetail.vue'   //loaded lasily
// import User from './components/user/User.vue'               //loaded lasily


// loading routes lazily
// strange syntax - what it does is to load the component depending on user's input
const User = (resolve) => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require("./components/user/User.vue"));
    });
};

const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require("./components/user/UserStart.vue"));
    })
}

const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require("./components/user/UserDetail.vue"));
    })
}


const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], (q) => {
        resolve(require("./components/user/UserEdit.vue"));
    })
}



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
            {   path: ':id', 
                component: UserDetail ,
                props: true,
                // beforeEnter Guard only triggered in this route
                beforeEnter:(to, from, next) => {
                    console.log('inside route setup');
                    next();
                } 
                
            }  
                //this.$route.params.id no longer needed
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