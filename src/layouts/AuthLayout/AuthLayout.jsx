import { SpinnerAnimation } from '@/utils/const'
import { Box } from '@mui/material'
import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const AuthLayout = () => {
    const checkLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    if (checkLoggedIn) return <Navigate to="/" replace />

    return (
        <Suspense fallback={<SpinnerAnimation />}>
            <Box className="bg-auth bg-gray-900/60 bg-blend-overlay">
                <Outlet />
            </Box>
        </Suspense>
    )
}

export default AuthLayout
