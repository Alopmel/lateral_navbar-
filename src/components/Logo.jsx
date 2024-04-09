//import Logo from '../images/logo-removebg-preview.png'
import LogoIcon from '../assets/logo.png'
import LogoIconD from '../assets/logo_01.png'
import '../App.css'

const Logo = ({darkTheme , collapsed}) => {
  //console.log(collapsed);
  return (
    <>
    {
      darkTheme ? (
        <img src={LogoIcon} alt="Logo Tantra Shivaita Aplicado" className={collapsed ? 'logoP' : 'logo'}/>
      ) 
      : (
        <img src={LogoIconD} alt="Logo Tantra Shivaita Aplicado" className='logo'/>
      )
    }   
    </>
  )
}

export default Logo