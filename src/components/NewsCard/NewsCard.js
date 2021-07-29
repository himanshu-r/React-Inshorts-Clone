import React from 'react'
import './NewsCard.css'

const NewsCard = ({newsItem}) => {

    console.log(newsItem);

    const fulldate = new Date(newsItem.publishedAt);
    var date = fulldate.toString().split(" ");
    const hour = parseInt(date[4].substring(0, 2));
    const time = hour>12?true:false;


    return (
        <div className="newsCard">
            <img alt={newsItem.title} src={newsItem.urlToImage 
            ? newsItem.urlToImage
                : "https://cdn.dribbble.com/users/683081/screenshots/2728654/exfuse_app_main_nocontent.png" } 
                className="newsImage"
                
                />

                <div className='newsText' >

                    <div>
                        <span className="title" > {newsItem.title}</span>
                        <br></br>

                        <span className='author' >
                            <a href={newsItem.url} target="_blank" >
                            <b> Short </b>    
                            </a>
                            <span className="muted">

                            by {newsItem.author?newsItem.author:"unknown"} / {" "}
                            
                            { time?`${hour-12}:${date[4].substring(3,5)} PM` 
                            : `${hour}:${date[4].substring(3,5)} AM` } on {date[2]} {" "}
                            {date[1]} {" "} {date[3]}, {date[0]}

                            </span>
                        </span>

                    </div>

                    <div className="lowerNewsText" >
                        <div className="description" >
                            {newsItem.description}
                        </div>
                            <span className="readmore">
                                Read More At {" "}
                                <a href={newsItem.url} target="_blank">
                                    <b>{newsItem.source.name} </b>
                                </a>
                            </span>

                    </div>

                </div>
            
        </div>
    )
}

export default NewsCard
