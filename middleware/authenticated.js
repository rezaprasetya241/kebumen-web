// Authentication middleware
export default function Authenticated({ app, route, redirect }) {
  // If the user hasn't logged in, redirect to login page.

  const token = app.$cookiz.get('admin-token')

  if (route.name === 'Dashboard') {
    if (!token) {
      return redirect('/login')
    }
    return true
  } else {
    if (token) {
      return true
    } else if (route.name === 'login') {
      return redirect('/dashboard')
    }
    return true
  }
}
