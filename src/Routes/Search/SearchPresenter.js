/**
 * SearchPresenter
 * 
 * Title: SearchPresenter
 * Description: Search 화면을 담당하는 컴포넌트
 * Author: Langram-Jang
 * 
 * Learn by Nomad Coders
 *  
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Loader from 'Components/Loader'
import Section from 'Components/Section'
import Message from 'Components/Message'
import Poster from 'Components/Poster'

const Container = styled.div`
    padding: 0px 20px;
`
const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
`
const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%;
`
const SearchPresenter = (
    {
        movieResults,
        tvResults,
        error,
        loading,
        searchTerm,
        handleSubmit,
        updateTerm
    }
) => (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="Search Movies or TV Shows..." value={searchTerm} onChange={updateTerm}/>
        </Form>
        {loading ? 
            (<Loader />) : 
            (<>
                {movieResults && movieResults.length > 0 && (
                    <Section title="Movie Results">
                        {movieResults.map(movie => (
                            <Poster
                                key={movie.id}
                                id={movie.id}
                                imageUrl={movie.poster_path}
                                title={movie.original_title}
                                rating={movie.vote_average}
                                year={movie.release_date 
                                        && movie.release_date.substring(0, 4)}
                                isMovie={true}
                            />
                        ))}
                    </Section>
                )}
                {tvResults && tvResults.length > 0 && (
                    <Section title="TV Show Results">
                        {tvResults.map(show => (
                            <Poster 
                                key={show.id}
                                id={show.id}
                                imageUrl={show.poster_path}
                                title={show.original_name}
                                rating={show.vote_average}
                                year={show.first_air_date
                                        && show.first_air_date.substring(0, 4)}
                            />
                        ))}
                    </Section>
                )}
                {error && <Message color="#e74c3c" text={error} />}
                {   tvResults && 
                    movieResults && 
                    tvResults.length === 0 && 
                    movieResults.length === 0 && (
                        <Message text="Nothing Found" color="#a5a6ff" />
                )}
            </>)
        }
    </Container>
)

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    searchTerm: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
}

export default SearchPresenter