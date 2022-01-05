export default function ({ $auth, $config }) {
  $auth.strategies.local.options.endpoints.login.url = `${$config.apiURL}/v1/auth/login`
  $auth.strategies.local.options.endpoints.logout.url = `${$config.apiURL}/v1/auth/logout`
  $auth.strategies.local.options.endpoints.user.url = `${$config.apiURL}/v1/auth/me`
  if ($config.envMode === 'production') {
    $auth.options.cookie.options.secure = true
  }
}
