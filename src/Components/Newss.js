import React, { useEffect, useState } from "react";
import NewsComponent from "./NewsComponent";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";





const Newss = (props)=> {

  const [articles,setArtciles]= useState([]);
  const [loading,setLoading]= useState(false);
  const [page,setPage]= useState(1);
  const [totalArt,setTotalArt]= useState(0);

  const  getNews = async () => {
    
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.ApiKey}&page=${page}&pageSize=${props.PageLimit}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(50);
    setPage(page);
    setArtciles(parsedData.articles);
    setTotalArt(parsedData.totalResults);
    setLoading(false)
    props.setProgress(100);
  }


  useEffect(() => {
    getNews();
    },[])

  const fetchMoreData = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.ApiKey}&page=${
      page+1
    }&pageSize=${props.PageLimit}`;
    setPage(page+1);
    setLoading(true);

    let data = await fetch(url);
    let parsedData = await data.json();
    setArtciles(articles.concat(parsedData.articles));
    setTotalArt(parsedData.totalResults);
    setLoading(false);
  };

  
    return (
      <>
        <h1 className="text-center " style={{ margin: "35px 0px" }}>
          <strong style={{lineHeight: "2.2",fontSize: "3.5rem"}}>Latest News</strong>
        </h1>
        
          <InfiniteScroll
            dataLength={articles.length} //This is important field to render the next data
            next={fetchMoreData}
            hasMore={totalArt !== articles.length}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {articles.map((ele) => {
                  return (
                    <div className="col-md-4" key={ele.url}>
                      <NewsComponent
                        title={ele.title ? ele.title : ""}
                        desc={ele.description ? ele.description : ""}
                        imgUrl={ele.urlToImage}
                        url={ele.url}
                        author={ele.author}
                        date={ele.publishedAt}
                        source={ele.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        
      </>
    );
  
}

Newss.propTypes = {
  country: PropTypes.string,
  PageLimit: PropTypes.number,

}
Newss.defaultProps={
  country: "in",
  PageLimit: 12,

}

export default Newss
