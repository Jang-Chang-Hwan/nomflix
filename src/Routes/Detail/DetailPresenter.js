/**
 * DetailPresenter
 * 
 * Title: DetailPresenter
 * Description: Detail 화면을 담당하는 컴포넌트
 * Author: Langram-Jang
 * 
 * Learn by Nomad Coders
 *  
 */
 import React from 'react'
 import PropTypes from 'prop-types'
 import styled from 'styled-components'
 
 
const DetailPresenter = (
    {
        result,
        error,
        loading
    }
) => null;
 
DetailPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}
 
export default DetailPresenter