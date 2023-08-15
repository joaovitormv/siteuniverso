import * as S from "./styles";
import Ronaldo from "../../assets/ronaldo.png";
import BlackHole from "../../assets/buraco.png";
import NeutronStar from "../../assets/estrela.png";
import Supernova from "../../assets/supernova.png";

export function Square(){
    return (
        <S.Aside>
            <div>
                <img src={Ronaldo} alt="Ronaldo 'Fenomeno'" />
                <h3> Ronaldo Fenômeno </h3>
            </div>
            <div>
                <img src={BlackHole} alt="Buraco Negro" />
                <h3> Buraco Negro </h3>
            </div>
            <div>
                <img src={NeutronStar} alt="Estrela de Nêutrons"/>
                <h3> Estrela de Nêutrons </h3>
            </div>
            <div>
                <img src={Supernova} alt="Supernova"/>
                <h3> Supernova </h3>
            </div>
        </S.Aside>
    )
}