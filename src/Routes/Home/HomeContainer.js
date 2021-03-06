/**
 * HomeContainer
 * 
 * Title: HomeContainer
 * Description: Home에 관련한 데이터를 사용하는 컴포넌트
 * Author: Langram-Jang
 * 
 * Learn by Nomad Coders
 *  
 */

import { moviesApi } from 'api'
import React from 'react'
import HomePresenter from './HomePresenter'

export default class extends React.Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    }

    // 컴포넌트가 마운트 될 때 nowPlaying,upcoming,popular를 찾음 (다 찾을 때 까진 대기해야됨)
    async componentDidMount() {
        // 전체 API를 호출하거나 각각의 분리된 함수로 호출
        try {
            // await: 잠시 기다려라는 뜻 (성공/실패는 모르고 일단 끝날때까지 기다려라)
            // api를 가져올 때 시간이 걸리므로(데이터가 많아서) 대기하는 것
            const {
                data: { results: nowPlaying }
            } = await moviesApi.nowPlaying()
            const {
                data: { results: upcoming }
            } = await moviesApi.upcoming()
            const {
                data: { results: popular }
            } = await moviesApi.popular()

            // 일부러 에러주기
            // throw Error()

            this.setState({
                nowPlaying: nowPlaying,
                upcoming: upcoming,
                popular: popular
            })

        } catch {
            this.setState({
                error: "Can't find movies information."
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
        const { nowPlaying, upcoming, popular, error, loading } = this.state
        return (
            <HomePresenter 
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popular={popular}
                error={error}
                loading={loading}
            />
        )
    }
}

/**
 * PropTypes의 종류
 * 
 * array: 배열
 * arrayOf: 특정 PropType으로 이루어진 배열
 * bool: 논리 (true OR false)
 * func: 함수
 * number: 숫자
 * object: 객체
 * string: 문자열
 * symbol: ES6의 Symbol
 * node: Rendering 가능한 모든 것(숫자, 문자열, JSX)
 * instanceOf: 특정 클래스의 인스턴스 (ex: instanceOf(Class))
 * oneOf(['dog', 'cat']): 주어진 배열 요소 중 하나
 * oneOfType([React.PropTypes.string, PropTypes.number]): 주어진 배열 안의 타입 중 하나
 * objectOf(React.PropTypes.number): 객체의 모든 키 값이 인자로 주어진 PropType인 객체
 * shape({ name: PropTypes.string, num: PropTypes.number }): 주어진 스키마를 가진 객체
 * any: 아무것이나
 * 
 */