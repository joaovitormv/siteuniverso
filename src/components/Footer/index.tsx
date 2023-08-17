import * as S from "./styles"
import Insta from "../../assets/insta.svg"

export function Footer() {
  return (
    <S.Footer>
      <a href="https://www.instagram.com/joaovitormv_/" target="_blank">
        <img src={Insta} alt="Instagram" />
      </a>     
    </S.Footer>
  )
}