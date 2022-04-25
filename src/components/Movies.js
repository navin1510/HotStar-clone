import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Recommended For You</h4>
            <Content>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1684/1011684-v-374e17c7e183"/>
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1684/1011684-v-374e17c7e183"/>
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1684/1011684-v-374e17c7e183"/>
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1684/1011684-v-374e17c7e183"/>
                </Wrap>
            </Content>            
        </Container>
    )
}

export default Movies

const Container = styled.div`

`

const Content = styled.div`
    display:grid;
    grid-gap:25px;
    grid-template-columns: repeat(4,minmax(0,0.29fr));
    
`

const Wrap = styled.div`
    border-radius:10px;
    overflow: hidden;
    border:3px solid rgba(249,249,249,0.1);    

    img{
        width:100%;
        height:100%;
        object-fit: cover;
    }
`