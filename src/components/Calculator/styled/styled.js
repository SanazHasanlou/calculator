import styled from 'styled-components'


export const Container = styled.div `
    width: 400px;
    border-radius: 10px;
    display: grid;
    justify-content: center;
    align-content: center;
    box-shadow : 2px 2px 10px #333;
    grid-template-rows:minmax(120px, auto) repeat(5, 90px);
    grid-template-columns:repeat(4, 100px);
    margin: 20px auto;
    

`

export const Screen = styled.div `
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    grid-column: 1 / -1;
    background-color: rgba(60, 64, 67, 0.75);
    padding:10px;
    word-wrap: break-word;
    word-break: break-all;
    display: flex;
    justify-content : space-around;
    flex-direction: column;
    text-align: right;
`

export const Button = styled.button `
    cursor: pointer;
    font-size: 2rem;
    border: 1px outset #ffffff;
    outline: none;
    background-color: rgba(255, 255, 255, 0.75);

    &:hover {
        background-color: rgba(255, 255, 255, 0.9);

    }

    ${({gridSpan}) => gridSpan && `grid-column: span ${gridSpan}`};
    ${({control}) => control && `background-color: skyblue`};
    ${({opration}) => opration && `background-color: gray`};
    ${({equal}) => equal && `border-bottom-right-radius: 10px`};
    ${({dot}) => dot && `border-bottom-left-radius: 10px`};

`

export const Previuos = styled.div `
font-size:1.5rem;
color: rgba(255, 255, 255, 0.75)
`
export const Current = styled.div `
font-size:2.5rem;
color: #ffffff;
letter-spacing: 1px
`
