import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from '_utils/api';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Box from '@material-ui/core/Box';
import Star from './Star';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { pink } from '@material-ui/core/colors';
import { withRouter } from 'react-router-dom';
import './HouseCard.css';
import store from '_store/Store';

import { img } from '_utils/api';

const useStyles = makeStyles(() => ({
  root: { maxwidth: 365 },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
}));

function HouseCard(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const [state, setState] = useState(true);

  const [likeBtn, setLikeBtn] = useState(0);

  const userNum = store.getState().userReducer.num;
  console.log(userNum)

  useEffect( () => {
    const getMarked = async () => {
        try {
            setLikeBtn(null);
            const response = await axios.get(
                `${URL}/${props.homeStayNum}/mark?userNum=${userNum}`
            );
            setLikeBtn(response.data);
        } catch(e) {
           
        }
       
    };
    getMarked();
}, []);
  

  const addLike = async () => {
    try {
     const url=`${URL}/mark?homeStayNum=${props.homeStayNum}&userNum=${userNum}`
      console.log(url);
      const response = await axios.post(
        url
      ).then(res=>{console.log(res)});

      
    } catch (e) {
      console.log(e);
    }
  };

  const DeleteLike = async () => {
    try {
      const response = await axios.delete(
        `${URL}/mark?homeStayNum=${props.homeStayNum}&userNum=${userNum}`
      );
      console.log("삭제성공");
       
    } catch (e) {
      console.log(e);
      
    }
  };


  return (
    
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="add to favorites">
           { userNum === 0
                ? <span  onClick={ ()=>{ alert("로그인을 해주세요!!") } }><FavoriteBorderIcon/></span>
                :
                    likeBtn === 0
                    ? <span  onClick={ ()=>{ setLikeBtn(1);addLike();alert("즐겨찾기 추가했습니다!!") } }><FavoriteBorderIcon/></span>
                    : <span onClick={ ()=>{ setLikeBtn(0);DeleteLike();alert("즐겨찾기 삭제했습니다..") } }><FavoriteIcon style={{ color: pink[500] }} /></span>
              }
           
          </IconButton>
        }
        title={props.title}
      />
      <CardMedia
        className={classes.media}
        image={`${img}/${props.photoName}`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {props.addr1}
        </Typography>
        <div class="starAndReview">
         <Star />
         <Typography component="legend" color="textSecondary"> {props.avgOfStar}({props.countOfReview})</Typography></div>
         <Typography id="rate" variant="legend" color="textSecondary" component="p">
         ₩ {props.price}원</Typography>
      </CardContent>
     
      <div class="goDetail">
      <Button  color="secondary" onClick={() => {
        props.history.push(
        `/house/${props.homeStayNum}` )
      }}>자세히보기>></Button></div>

    </Card>
  );
}

export default withRouter(HouseCard);