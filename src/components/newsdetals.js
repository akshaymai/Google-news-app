import React from 'react';
import {Link}  from 'react-router-dom';
class Itemdetals extends React.Component{
  constructor(props){
    super();
    this.state={
        Newslists:[],

    }

  }

componentDidMount= async ()=>{
    const response=await fetch(`https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=77292d75f7ec46b28d93a34af4779738`)
    const re=await response.json()

    this.setState({
        Newslists:re.articles
    })
}


  render(){
     console.log(this.state.Newslists)
    return (
        <div>
          {this.state.Newslists.map((item,index)=>{

            return(
              <div>
            <Link>{item.url}</Link>
                </div>
            )
          })}
             </div>
    )
  }
}

export default Itemdetals;