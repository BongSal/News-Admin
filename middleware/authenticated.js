export default function authenticated({ $cookiz, redirect, route, store }) {
  const accessToken = $cookiz.get('access_token')
  if (!accessToken) {
    redirect('/auth/login')
  }
}
