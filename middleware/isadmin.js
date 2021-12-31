export default function ({ $auth, redirect }) {
  if ($auth.user.roles != 'admin') {
    redirect('/')
  }
}
