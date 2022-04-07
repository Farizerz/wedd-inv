import React, { useState, useEffect } from 'react';
import './rsvp.css';
import { FiGift as Gift } from 'react-icons/fi';
import { IoWalletSharp as Wallet } from 'react-icons/io5';
import axios from 'axios';

const RSVP = () => {
    const [nama, setNama] = useState();
    const [alamat, setAlamat] = useState();
    const [status, setStatus] = useState();

    const simpanData = async e => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5000/rsvp/post`, {
                nama: nama,
                alamat: alamat,
                status: status
            });
            console.log(status);
        } catch (err) {
            console.error(err.message);
        }
        window.location = "/";
    }

    const telor = async () => {
            const response = await axios.get(`http://localhost:5000/`);
            const jsonData = await response.data;
            console.table(jsonData);
    }

    useEffect(() => {
        telor();
    } ,[]);

  return (
    <div className='rsvp'>
        <div className='rsvp-bg'>
            <div className='rsvp-titleContainer'>
                <h1 className='rsvp-title'>RSVP</h1>
                <p className='rsvp-ucapan'>Kami tidak sabar menunggu hari pernikahan kami bersama Bapak/Ibu/Saudara/i, mohon konfirmasi kehadiran Bapak/Ibu/Saudara/i. Terima kasih.</p>
            </div>
            <div className='rsvp-formContainer'>
                <form onSubmit={ simpanData }>
                    <input type='text' className='rsvp-input' placeholder='Nama Lengkap' value={nama} onChange={e => setNama(e.target.value)} required ></input>
                    <input type='text' className='rsvp-input' placeholder='Alamat' value={alamat} onChange={e => setAlamat(e.target.value)} required></input>
                    <select className='rsvp-input' id='dropdown' value={status} onChange={e => setStatus(e.target.value)} required>
                        <option value="">Apakah Anda akan hadir?</option>
                        <option value="ya">Ya, Tentu!</option>
                        <option value="tidak">Maaf, tidak bisa.</option>
                    </select>
                    <button type='submit' className='rsvp-button'>Kirim</button>
                </form>
            </div>
            <div className='rsvp-donations'>
                <Gift className='rsvp-icon' />
                <p className='rsvp-donationTitle'>Wedding Gift</p>
                <p className='rsvp-ucapan' id='subtitle'>Bagi keluarga dan sahabat yang ingin mengirimkan hadiah, silakan mengirimkannya melalui tautan berikut:</p>
                <button className='rsvp-donationButton'><Wallet className='rsvp-donationIcon' /></button>
            </div>
            <div className='rsvp-footer' />
        </div>

        
    </div>
  )
}

export default RSVP;