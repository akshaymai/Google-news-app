import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useEffect} from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
    border:'1px solid black',
    float:"none",
    marginTop:"20px",
    marginLeft:"300px",
    marginRight:"200px",
    background:'darksky'
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  avatar: {
    backgroundColor: red[500]
  },

}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [news,setNews]=React.useState([])
  
  useEffect(()=>{


    response();
  },[])
  
  
  const response= async()=>{
   const res = await fetch('https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=77292d75f7ec46b28d93a34af4779738')
   const reg= await res.json()
   setNews(reg.articles)

  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


console.log("asdfghjklkjhgfdsdfghjhgfdsdfgh",news)

  return (
    <Card className={classes.card}>
      <CardHeader
 
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        // title={news.articles}
        // subheader="September 14, 2016"
      />
      <CardMedia
        // className={classes.media}
        // image="/static/images/cards/paella.jpg"
        // title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {news.map((item,airtecal)=>{
            return(
              <div>
                <a  href={item.url} terget="_balnk">{item.title}</a>
                </div>
            )
          })}
    <h1>  Share This airtecal....via</h1>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
       <a href=""> <WhatsAppIcon/></a>
        </IconButton>
        <IconButton aria-label="share">
      <a href="" target="_balnk">  
      <FacebookIcon/>
      </a>
        </IconButton>
        <IconButton aria-label="tweet">
         <a href=""> <TwitterIcon/></a>
          </IconButton> */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
           <Typography paragraph>
           <IconButton aria-label="add to favorites">
       <a href="#"> <WhatsAppIcon/></a>
        </IconButton>
        <IconButton aria-label="share">
      <a href="#" target="_balnk">  
      <FacebookIcon/>
      </a>
        </IconButton>

        <IconButton aria-label="tweet">
         <a href="#"> <TwitterIcon/></a>
          </IconButton>
          </Typography>
          {/* <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography> */}
          {/* <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography> */}
         </CardContent>
      </Collapse> 
    </Card>
  );
}
