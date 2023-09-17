import { BackgroundImage, BrandsContainer, ListOurBrands, LoginBtn, MainTitleContainer, TitleContainer, WelcomeMainContainer } from './style'
import { SiChevrolet, SiHonda, SiVolkswagen, SiToyota, SiRenault, SiHyundai, SiPeugeot, SiFord, SiCitroen } from 'react-icons/si'
import { FiArrowUpRight } from 'react-icons/fi'

const Welcome = () => {

  return (
    <WelcomeMainContainer>
      <BackgroundImage />
      <TitleContainer>
        <MainTitleContainer>
          <h1>BEM VINDO</h1>
          <span>AO MOTORS SHOP</span>
        </MainTitleContainer>
        <p>A melhor plataforma do Brasil para negociar o seu automóvel</p>
        <BrandsContainer>
          <LoginBtn to='/login'>Log in <FiArrowUpRight /></LoginBtn>
          <ListOurBrands className="avatar-container">
            <li className="avatar"><SiChevrolet /></li>
            <li className="avatar"><SiHonda /></li>
            <li className="avatar"><SiVolkswagen /></li>
            <li className="avatar"><SiToyota /></li>
            <li className="avatar"><SiRenault /></li>
            <li className="avatar"><SiHyundai /></li>
            <li className="avatar"><SiPeugeot /></li>
            <li className="avatar"><SiFord /></li>
            <li className="avatar"><SiCitroen /></li>
          </ListOurBrands>
        </BrandsContainer>
      </TitleContainer>
    </WelcomeMainContainer>
  )
}

export default Welcome