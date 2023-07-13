import { createBrowserRouter } from 'react-router-dom'

import AuthLayout from '@/layouts/AuthLayout'
import MainLayout from '@/layouts/MainLayout'
import ProtectedLayout from '@/layouts/ProtectedLayout'

import {
    Error,
    Home,
    SignIn,
    SignUp,
    TagName,
    DetailPost,
    postLoader,
    getRecentLoader,
    Recent,
    Trending,
    Write,
    Liked,
} from './const'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'tags/:tagName',
                element: <TagName />,
                loader: postLoader,
            },
            {
                path: 'tags/:tagName/:postId',
                element: <DetailPost />,
            },
            {
                path: 'trending',
                element: <Trending />,
            },
            {
                path: 'recent',
                element: <Recent />,
                loader: getRecentLoader,
            },
        ],
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: 'sign-up',
                element: <SignUp />,
            },
            {
                path: 'sign-in',
                element: <SignIn />,
            },
        ],
    },
    {
        element: <ProtectedLayout />,
        children: [
            {
                path: 'manager/:username',
                element: <div>Setting</div>,
            },
            {
                path: 'store/liked',
                element: <Liked />,
            },
            {
                path: 'write',
                element: <Write />,
            },
        ],
    },
])

export default router
