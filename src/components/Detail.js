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
                    <img src="" alt="temporaria" />
                    <span></span>
                </AddButton>
                <GroupWatchButton>
                    <img src="" alt="temporaria" />
                    <span></span>
                </GroupWatchButton>
            </Controls>
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
    
`
// configurando o PlayButton
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
// configurando o TrailerButton
const TrailerButton = styled(PlayButton)`
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgba(249, 249, 249);
`

const AddButton = styled.button`

`

const GroupWatchButton = styled.button`

`