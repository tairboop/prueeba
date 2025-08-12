import Footer from '@/components/footer'
import { ThemeSwitch } from '@/components/theme-switch'
import LoginForm from './login/login-form'

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 flex items-center justify-center px-2 md:px-5 lg:px-8">
        <div className="bg-gradient w-full max-w-7xl min-h-[400px] md:min-h-[600px] rounded-lg flex relative">
          <ThemeSwitch className="absolute top-0 right-0 z-10 m-3 p-2 rounded-xl content-blur" />
          <div className="relative flex-1 rounded-l-lg hidden lg:flex items-center justify-center p-10 text-center text-white bg-[url('/img/bg-login.jpg')] dark:bg-[url('/img/bg-login-dark.jpg')] bg-cover bg-center bg-no-repeat text-foreground">
            <div className="absolute inset-0 bg-white/20 dark:bg-black/30 rounded-l-lg" />
            <div className="relative z-10 text-foreground">
              <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
              <p className="text-lg mb-2">
                This is a base template developed by the <strong>Chipoko Team</strong>.
              </p>
              <p className="text-sm text-neutral dark:text-neutral-300">Use this layout as a starting point for your application ✨</p>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center px-5">
            <h1 className="text-xl font-semibold mb-4">Sign in</h1>
            <LoginForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
