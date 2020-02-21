import styled from "styled-components";
import DefaultImg from '../images/default-notfound-image.png'

const StyledHero = styled.header`
    min-height: 60vh;
    background: url(${props => props.img ? props.img : DefaultImg}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;

    .banner {
        display: inline-block;
        background: rgba(0, 0, 0, 0.5);
        color: var(--mainWhite);
        padding: 2rem 1rem;
        text-align: center;
        text-transform: capitalize;
        letter-spacing: var(--mainSpacing);
        font-size: 9vh;
      }
`;

export default StyledHero;