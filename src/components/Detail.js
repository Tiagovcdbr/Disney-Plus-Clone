import React from 'react'
import styled from 'styled-components'
// Criando os botões do Menu detail e aplicando as devidas configurações
function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="temporaria" />
            </Background>
            <ImageTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="temporaria" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="temporaria" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="temporaria" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="temporaria" />
                    <span></span>
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2018 . 7m . Família, Fantasia, Crianças, Animação
            </SubTitle>
            <Description>
                Sofrendo com a ausência do filho, uma mãe volta a ver sentido na vida quando um dos bolinhos que preparou ganha vida.
                Ela então começa a cuidar da criatura dando-lhe todo o amor e carinho.
                Mas, de forma inesperada, ele cresce e ganha independência, deixando sua criadora triste mais uma vez.
            </Description>
        </Container>
    )
}

export default Detail


const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: calc(3.5vw + 5px);
    position: relative;
`
// estilizando a imagem de fundo da seção Detail
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`
// configurando o tamanho da imagem de titulo
const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

`

const Controls = styled.div`
    display: flex;
    align-items: center;
    
`
// configurando o PlayButton e replicando a configuração nos botões abaixo ↓
//                                                                         ↓
const PlayButton = styled.button`                                          
    border-radius: 4px;                                                    
    font-size: 15px;                                                       
    padding: 0px 24px;                                                     
    margin-right: 22px;                                                    
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb (249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
`
// configurando o TrailerButton e utilizando a importando a configuração do playbutton com o styled(PlayButton) ↖
// que no caso serviu para usar a mesma configuração do PlayButton sem precisar fazer tudo novamente
const TrailerButton = styled(PlayButton)`
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgba(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`
// configurando o Botão Add criado com o sinal de + e ajustando seu tamanho espaço e dimensão e replicando abaixo ↙
const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        font-size: 30px;
        color: white;
    }


`
// Aplicando a mesma configuração do AddButton utilizando styled(AddButton) ↖
const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);

`
// Configurando o Subtitulo
const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;

`
// Configurando a Descrição
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);

`