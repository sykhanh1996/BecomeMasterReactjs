import path from 'src/constants/path'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import Login from './pages/Login'
import RegisterLayout from './layouts/RegisterLayout'
import MainLayout from './layouts/MainLayout'

/**
 * Để tối ưu re-render thì nên ưu tiên dùng <Outlet /> thay cho {children}
 * Lưu ý là <Outlet /> nên đặt ngay trong component `element` thì mới có tác dụng tối ưu
 * Chứ không phải đặt bên trong children của component `element`
 */

//  ✅ Tối ưu re-render
// export default memo(function RegisterLayout({ children }: Props) {
//  return (
//    <div>
//      <RegisterHeader />
//      {children}
//      <Outlet />
//      <Footer />
//    </div>
//  )
//  })

//  ❌ Không tối ưu được vì <Outlet /> đặt vào vị trí children
// Khi <Outlet /> thay đổi tức là children thay đổi
// Dẫn đến component `RegisterLayout` bị re-render dù cho có dùng React.memo như trên
// <RegisterLayout>
//   <Outlet />
// </RegisterLayout>

function ProtectedRoute() {
  const isAuthenticated = true
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

function RejectedRoute() {
  const isAuthenticated = false

  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}
export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: '',
          element: <RegisterLayout />,
          children: [
            {
              path: path.login,
              element: <Login />
            },
            {
              path: path.register,
              element: <Register />
            }
          ]
        }
      ]
    },
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: '',
          index: true,
          element: <ProductList />
        }
      ]
    }
  ])

  return routeElements
}
