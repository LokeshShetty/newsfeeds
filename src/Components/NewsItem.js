import React from "react";


const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <div />
        <img
          src={
            !imageUrl
              ? "https://th.bing.com/th/id/R.7b9f08ef57505370ef7cc9e192d2b32e?rik=JHPeP2NoC1ylDQ&riu=http%3a%2f%2fil5.picdn.net%2fshutterstock%2fvideos%2f7613365%2fthumb%2f1.jpg&ehk=pHrjmrj%2bi9G3cBLWISX9eU%2b%2bIxmX%2fZ%2fR6tXSHpJnlz4%3d&risl=&pid=ImgRaw&r=0"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text ">
            <small className="text-danger">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noopener noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More...
          </a>
          {/*target blank is to open new web */}
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
