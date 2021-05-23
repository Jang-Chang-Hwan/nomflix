/**
 * DetailContainer
 * 
 * Title: DetailContainer
 * Description: Detail에 관련한 데이터를 사용하는 컴포넌트
 * Author: Langram-Jang
 * 
 * Learn by Nomad Coders
 *  
 */

import { moviesApi, tvApi } from 'api'
import React from 'react'
import DetailPresenter from './DetailPresenter'

export default class extends React.Component {
    constructor(props) {
        super(props)
        const {
            location: {pathname}
        } = props
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        }
    }


    async componentDidMount() {
        const {
            match: {
                params: { id }
            },
            history: { push }
        } = this.props
        const { isMovie } = this.state
        const parsedId = parseInt(id) // 숫자로 변환

        // 잘못된 주소의 경우 Home으로 보내줌(Detail은 숫자만 받음)
        if (isNaN(parsedId)) {
            // return을 해주는 이유: Home에서 API를 호출해야 하므로 Detail에서 Home으로 보내줌
            return push("/")
        }

        let result = null // movie OR show
        try{
            // Override result TV or Movie
            if(isMovie) { // Movie
                ({
                    data: result
                } = await moviesApi.movieDetail(parsedId))
            } else { // TVshow
                ({
                    data: result
                } = await tvApi.showDetail(parsedId))
            }

        } catch{
            this.setState({ error: "Can't find anything." })
        } finally{
            this.setState({ loading:false, result })
        }

    }

    render() {
        const { result, error, loading } = this.state
        
        return (
            <DetailPresenter
                result={result}
                error={error}
                loading={loading}
            />
        )
    }
}
