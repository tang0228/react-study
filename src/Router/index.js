import MyInfo from "../pages/MyInfo"
import MessageBoard from '../pages/MessageBoard';
import BlogList from '../pages/BlogList/index.jsx';
import Helper from '../pages/Project';
import Index from '../pages/Index';
import BlogDetail from "../pages/BlogList/BLogDetail"

const routes = [
    {
        component: Index,
        exact: true,
        path: "/",
        text: "首页"
    },
    {
        component: MyInfo,
        exact: true,
        path: "/myinfo",
        text: "个人信息"
    },
    {
        component: BlogList,
        path: "/bloglist",
        text: "文章列表",
        exact: true,
        children: [
            {
                component: BlogDetail,
                exact: true,
                path: "/bloglist/:id",
            }
        ]
    },
    {
        component: MessageBoard,
        exact: true,
        path: "/message",
        text: "留言板"
    },
    {
        component: Helper,
        exact: true,
        path: "/project",
        text: "我的项目"
    },
]

export default routes;