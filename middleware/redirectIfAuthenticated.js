export default function redirectIfAuthenticated({ $cookiz, redirect, store }) {
  const accessToken = $cookiz.get('access_token')
  if (accessToken) {
    redirect('/')
  }
}
