// ** fonts
import {Sora} from '@next/font/google'

// ** componens
import Nav from '../components/Nav'
import TopLeftImg from '../components/TopLeftImg'
import Header from '../components/Header'

// ** font settings
const sora = Sora({
subsets:['latin'],
variable:'--font-sora',
weight:['100','200','300','400','500','600','700','800']
})
const Layout = ({children}) => {
  return <div className={`page bg-site text-white bg-cover bg-no-repeat relative ${sora.variable} font-sora`}>
    <TopLeftImg/>
    <Nav/>
    <Header/>
    {children}
  </div>
};

export default Layout;
