/**
 * Section
 * 
 * Title: Section
 * Description: 어떤 경로로 갈 것인지 정하는 컴포넌트
 * Author: Langram-Jang
 * 
 * Learn by Nomad Coders
 *  
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/* Set Styled */
const Container = styled.div`
    :not(:last-child) {
        margin-bottom: 50px;
    }
`
const Title = styled.span`
    font-size: 16px;
    font-weight: 600;
`
const Grid = styled.div`
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 125px);
    grid-gap: 25px;
`

// children: 예약된 React-Prop
const Section = ({ title, children }) => (
    <Container>
        <Title>{title}</Title>
        <Grid>{children}</Grid>
    </Container>
)


Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Section