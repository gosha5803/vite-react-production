import 'app/styles/main.scss'
import { AppRouter } from 'app/providers/router/AppRouter'
import { useTheme } from 'app/providers/ThemeProviders/index'
import { classNames } from 'shared/lib/classNames'
import { Navbar } from 'widgets/NavBar'
import { SideBar } from 'widgets/SideBar'

function App() {
  const { theme } = useTheme()

  return (
    <div
    className={classNames('app', {}, [theme])}
    >
      <Navbar/>
      <div className='content-page'>
        <SideBar/>
        <AppRouter/>
      </div>
    </div>
  )
}

export default App
