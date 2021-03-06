import React, { useState } from 'react';
import { URL } from '_utils/api';
import Button from '@material-ui/core/Button';

import axios from 'axios';
function MyBookRow(props) {
  const handleConfirm = async () => {
    try {
      const num = props.content.homeStayReservationNum;
      console.log(num);
      const response = await axios.patch(`${URL}/reservation/${num}/2`);
      props.history.push(`/host/manage/books`);
    } catch (e) {
      console.log(e);
    }
  };
  const handleDeny = async () => {
    try {
      const num = props.content.homeStayReservationNum;
      console.log(num);
      const response = await axios.patch(`${URL}/reservation/${num}/1`);
      props.history.push(`/host/manage/books`);
    } catch (e) {
      console.log(e);
    }
  };
  const setButton = approval => {
    if (approval == 0) {
      return (
        <>
          <td>
            <Button
              type="button"
              onClick={handleConfirm}
              variant="outlined"
              color="primary"
            >
              승인
            </Button>
          </td>
          <td>
            <Button
              type="button"
              onClick={handleDeny}
              variant="outlined"
              color="secondary"
            >
              거절
            </Button>
          </td>
        </>
      );
    }
  };
  return (
    <tr
      onClick={() => {
        props.history.push(
          `/host/books/num=${props.content.homeStayReservationNum}`
        );
      }}
    >
      <td>{props.content.name}</td>
      <td>{props.content.numberOfPeople}</td>
      <td>{props.content.checkInDay}</td>
      <td>{props.content.checkOutDay}</td>
      {setButton(props.content.approval)}
    </tr>
  );
}

export default MyBookRow;
