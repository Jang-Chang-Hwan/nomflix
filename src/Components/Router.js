import React from 'react'
import { BrowserRouter as Router,
         Route,
         Redirect, 
         Switch 
} from 'react-router-dom'
import Header from 'Components/Header'
import Home from 'Routes/Home'
import TV from 'Routes/TV'
import Search from 'Routes/Search'

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/tv' component={TV} />
                <Route path='/search' component={Search} />

                <Redirect from='*' to='/' />
            </Switch>
        </>
    </Router>
)
/* 
 * Route
 * >> exact: 정확히 해당 주소를 가지고있어야함 
 * >> composition : 두 개 이상의 Route를 동시에 렌더링 하는 방식
 * 
 * Redirect
 * from > to 주소로 이동시켜준다
 * 
 * Switch
 * 주소를 한번만 실행시켜준다. 
 * composition을 하게되면 한 개만 동작하므로 exact로 구분시켜줘야함
 */