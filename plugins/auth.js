export default function ({ $auth, $config }) {
  if ($config.envMode === 'production') {
    $auth.options.cookie.options.secure = true
  }
}
