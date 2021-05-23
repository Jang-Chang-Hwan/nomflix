/**
 * SearchContainer
 * 
 * Title: SearchContainer
 * Description: Search에 관련한 데이터를 사용하는 컴포넌트
 * Author: Langram-Jang
 * 
 * Learn by Nomad Coders
 *  
 */

import { moviesApi, tvApi } from 'api'
import React from 'react'
import SearchPresenter from './SearchPresenter'

export default class extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        error: null,
        loading: false
    }

    // #5.4 현재 handleSubmit 할 수 있는 조건이 없으므로 강제 실행 (시뮬레이션)
    // componentDidMount() {
    //     this.handleSubmit()
    // }

    // handleSumbit : 누군가가 button click 했을 경우, 검색어 입력
    handleSubmit = () => {
        const { searchTerm } = this.state
        if (searchTerm !== "") {
            this.searchByTerm(searchTerm)
        }
    }

    searchByTerm = async () => {
        const { searchTerm } = this.state

        try {
            const { 
                data: { results: movieResults } 
            } = await moviesApi.search(searchTerm)
            const { 
                data: { results: tvResults } 
            } = await tvApi.search(searchTerm)
            this.setState({
                movieResults,
                tvResults
            })
            this.setState({ loading: true })
        } catch {
            this.setState({ error: "Can't find results..." })
        } finally {
            this.setState({ loading: false })
        }
    }


    render() {
        const { movieResults, tvResults, searchTerm, error, loading } = this.state

        console.log(this.state)

        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                error={error}
                loading={loading}
                handleSubmit={this.handleSubmit}
            />
        )
    }
}