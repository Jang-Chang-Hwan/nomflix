/**
 * TVContainer
 * 
 * Title: TVContainer
 * Description: TV에 관련한 데이터를 사용하는 컴포넌트
 * Author: Langram-Jang
 * 
 * Learn by Nomad Coders
 *  
 */

import { tvApi } from 'api'
import React from 'react'
import TVPresenter from './TVPresenter'

export default class extends React.Component {
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        error: null,
        loading: true
    }

    // Equals `async componentDidMount...`
    componentDidMount = async() => {
        
        try {
            const {
                data: { results: topRated }
            } = await tvApi.topRated()
            const {
                data: { results: popular }
            } = await tvApi.popular()
            const {
                data: { results: airingToday }
            } = await tvApi.airingToday()

            this.setState({
                topRated: topRated,
                popular: popular,
                airingToday: airingToday
            })

        } catch {
            this.setState({
                error: "Can't find TV information."
            })
        } finally {
            this.setState({
                // 어떠한 상황이건 loading값은 false 처리되어
                // error이건 data건 보여줄 것이다.
                loading: false
            })
        }
    }
     
    render() {
        const { topRated, popular, airingToday, error, loading } = this.state
        console.log(this.state)
        return (
            <TVPresenter 
                topRated={topRated} 
                popular={popular} 
                airingToday={airingToday} 
                error={error} 
                loading={loading}
            />
        )
    }
}