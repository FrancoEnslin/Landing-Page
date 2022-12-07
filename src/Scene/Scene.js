import Spline from '@splinetool/react-spline';
import styled from 'styled-components'

export default function Scene() {

    return (
        <Wrapper>
            <Spline  className='spline' scene="https://prod.spline.design/oUlczkNHSS-gc1F2/scene.splinecode" />
            <Content>
                <h1>Collaborate with people</h1>
                <p>Bring your team together and build your community by using our cross-platform application</p>
            </Content>
        </Wrapper>


    );
}

const Wrapper = styled.div`
    font-family: 'Spline Sans', sans-serif;
    font-size: 16px;
    color: black;
    position: relative;

    .spline{
        position: absolute;
        margin: 0;
        top: 0;
        right: 0;
    }
`;

const Content = styled.div`

`
