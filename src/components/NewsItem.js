import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date , source} = this.props;

    return (
      <div className="container my-3">
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%' , zIndex:1}}>
          {source}</span>
    
  
          <img src={imageUrl? imageUrl: "https://images.indianexpress.com/2022/07/dmat_a3d2a7ac-f80f-11ea-97f6-30d2c6ba3f53.jpg"}                
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More..</a> 
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
