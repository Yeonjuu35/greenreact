import styled from "styled-components"

// Btn
export const Button = styled.button`
    background : ${props => props.newslatter ? '#74BF31' : '#FF8100' }
    font-size : ${props => props.support ? '20px' : '16px'}
    color : white;
    width : ${props => props.headerSupport ? '186px' : props.support ? '255px' : '150px'}
    height : ${props => props.headerSupport ? '100px' : props.support ? '50px' : '40px'}
    line-height : 0;
`   