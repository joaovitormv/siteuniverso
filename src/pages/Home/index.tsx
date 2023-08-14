import * as S from './styles'
import { Intro } from '../../components/Text'
import Galaxia from "../../assets/galaxia-espiral 1.png"

export function Home() {
  return (
    <S.Section>
      <img src={Galaxia} alt="Galaxia" />
      <Intro /> {}
    </S.Section>
       
    
  )
}
