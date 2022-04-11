import React, { useState, useEffect, useRef } from 'react';
import './guestbook.css';
import { FaComments as Comment } from 'react-icons/fa';
import axios from 'axios';

const Guestbook = () => {
  const [message, setMessage] = useState([]);
  const [nama, setNama] = useState();
  const [komentar, setKomentar] = useState();

  const myRef = useRef();


  useEffect(() => {
    selectMessage();
  }, []);

  const selectMessage = async () => {
    const response = await axios.get(`http://192.168.204.1:5000/`);
    const jsonData = await response.data;
    setMessage(jsonData);
  }

  const sendMessage = async e => {
    e.preventDefault();
    try {
      await axios.post(`http://192.168.204.1:5000/guestbook/post`, {
        nama: nama,
        komentar: komentar
      });
    } catch (err) {
      console.error(err.message);
    }
    selectMessage();
    window.alert("Success sending message!");
    scrollToComment();
  }

  const scrollToComment = () => {
    const scrollToComment = document.getElementById("message");
    window.scrollTo({
      top: scrollToComment.offsetTop,
      behavior: 'smooth'
    });
  }

  const scrollToForm = () => {
    const scrollBottom = document.getElementById("sendMessage");
    window.scrollTo({
      top: scrollBottom.offsetTop,
      behavior: 'smooth'
    });
  }

  return (
    <div className='guestbook'>
      <div className='guestbook-bg'>
        { /* intro */ }
          <div className='guestbook-intro' id="message">
            <p className='guestbook-title'>Guestbook</p>
            <p className='guestbook-subtitle'>Leave a Message / Wishes for us...</p>
            <button className='guestbook-button' onClick={scrollToForm} ><Comment /> Write your wish...</button>
            <div className='guestbook-dash'></div>
          </div>

        { /* komentar */ }
          <div className='guestbook-message'>
            {
              message.map((comments) => (
                <div key = {comments.id}>
                  <p className='guestbook-name'>{comments.nama}</p>
                  <p className='guestbook-comment'>{comments.komentar}</p>
                </div>
              ))
            }
          </div>

        { /* Send a message */ }
        <div className='guestbook-sendMessage' id="sendMessage">
          <form onSubmit={ sendMessage }>
            <input 
              type="text" 
              className='guestbook-inputName' 
              placeholder='Name'
              value={nama}
              onChange={e => setNama(e.target.value)}
              required
            />
            <textarea 
              className='guestbook-inputMessage' 
              placeholder='Write a message' 
              value={komentar}
              onChange={e => setKomentar(e.target.value)}
              required
            />
            <button className='guestbook-submit' type='submit'>Send Wish</button>
          </form>
        </div>

        <div className='guestbook-footer'>
          <p className='guestbook-thanks'>Thank You</p>
          <p className='guestbook-title'>Ajeng & Denny</p>
        </div>
        
      </div>
    </div>
  )
}

export default Guestbook;