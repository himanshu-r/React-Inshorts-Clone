import { Container } from '@material-ui/core'
import React from 'react'
import NewsCard from '../components/NewsCard/NewsCard'
import './NewsContent.css'

const NewsContent = ({newsArray, newsResults, loadmore, setLoadmore}) => {
    return (
        <Container maxWidth="md">
            <div className="content">
                <div className="downloadMessage">
                    <span className="messages">
                        For the best experience use inshorts app on your smartphone
                    </span>
                    <img src="https://assets.inshorts.com/website_assets/images/appstore.png">
                    </img>
                    <img src="https://assets.inshorts.com/website_assets/images/playstore.png">
                    </img>

                </div>

                {
                newsArray.map((newsItem) => (

                    <NewsCard newsItem={newsItem} key={newsItem.title} />

                ))
                
                }

                {
                    loadmore <= newsResults && (
                        <>
                            <hr />
                            <button className='loadmore' onClick={()=> setLoadmore(loadmore+20)}>
                                Load More
                            </button>
                        </>
                    )
                }




            </div>
        </Container>
    )
}

export default NewsContent
