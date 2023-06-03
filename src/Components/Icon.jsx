import styled from "@emotion/styled"

export default function Image(
    {
        width,
        height,
        src,
        alt,
        obejctFit,
    }
){
    return (
        <Wrapper width={width} height={height}>
            <Img src={src} alt={alt} obejctFit={obejctFit}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: ${props => props.obejctFit | "cover"};
`
