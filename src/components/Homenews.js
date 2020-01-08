import React, { Component } from "react"
import {Link} from 'react-router-dom'
import './newcard.css'
import Navbar from './navbar';
import 'font-awesome/css/font-awesome.min.css';
import Card from "react-bootstrap/Card";



class Homenews extends Component {
constructor(props){
    super(props);
    this.state={
        news:[]

    }
} 
  componentDidMount = () => {
   fetch('https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=77292d75f7ec46b28d93a34af4779738')
   .then(function (response){
     return response.json()
 
   }).then((res)=>{
     this.setState({
       news:res.articles
     })
   })
  }
  
  render() {
    console.log("response",this.state.news)
    const firebase = this.props.location.state.users
    console.log("akshay",this.props.location.state)

    return(
      <div>
        <Navbar firebase={firebase}/>
        {this.state.news.map((items,index)=>{
       return (
    <Card style={{ width: '70rem',height:'18rem',border:"2px solid black",margin:"0 auto",float:"none",marginBottom: "10px" ,cursor:"pointer"}}>
  <Card.Body>
  <Card.Img variant="top" src={items.urlToImage} style={{"maxWidth":"150px","position": "absolute",
    "top": "20px",
    "right": "20px"}} />
    
       <Card.Title>
   
         <a  target="_blank" href={items.url}>{items.title}</a>
       
         <Link to="/share/news">
         <i class="fa fa-share-alt" aria-hidden="true">
    </i>
    </Link>
  </Card.Title>
 
    <Card.Subtitle className="mb-2 text-muted">{items.author}</Card.Subtitle>
    <Card.Subtitle className="mb-2 text-muted" >{items.publishedAt}</Card.Subtitle>  <br></br>
    <br/>
    <br/>
    <Card.Text style={{"lineHeight":"1.5em","overflow":"hidden","height":"3em"}}>
      {items.description}
    </Card.Text>
    <Card.Text>
      {items.content}
    </Card.Text>
  </Card.Body>
</Card>

       )
       })}
      </div>
    
        
  
    )
  }
}

export default Homenews;


