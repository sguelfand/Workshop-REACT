import styled from 'styled-components';

const Title = styled.h1`
    font-size: 48px;
    text-transform: underline;
    color: blue; 
`
const Subtitle = styled(Title)`
    font-size: 30px;
    font-style: italic;
    color: lightgrey; 
`

export default {
    Title: Title,
    Subtitle: Subtitle
}
