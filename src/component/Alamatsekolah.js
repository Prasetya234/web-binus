import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Alamatsekolah extends Component{
    render(){
        return(
            <div>
                <br/><h1 align="center">Alamat Kontak</h1><br/>
                    <center>
                        <Mui.ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                            <Mui.Button href="/">Home</Mui.Button>
                            <Mui.Button href="/Sejarah">Sejarah</Mui.Button>
                            <Mui.Button href="/Kepalasekolah">Kepala Sekolah</Mui.Button>
                            <Mui.Button href="/Guru">Guru</Mui.Button>
                            <Mui.Button href="/Jurusan">Jurusan</Mui.Button>
                            <Mui.Button href="/Alamatsekolah">Alamat Sekolah</Mui.Button>
                        </Mui.ButtonGroup>
                    </center><hr/><br/>
                        <h2 align="center">Kontak Kami</h2><br/>
                            <Mui.Container fidex>
                            <Mui.Grid container spacing={1}>
                                <Mui.Grid item xs={12} sm={6}>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22402.963567475297!2d110.29755399973882!3d-6.971302244756769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e705fdc0235654d%3A0x97b3afe1b2104e70!2sSMK%20Bina%20Nusantara%20Semarang!5e0!3m2!1sid!2sid!4v1605772856139!5m2!1sid!2sid" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                </Mui.Grid>
                                <Mui.Grid item xs={12} sm={6}>
                                    <h3 align="justify">SMK BINA NUSANTARA</h3><p>(NSS: 402036316053, NPSN:  20328986)</p>
                                        <p align="justify"><b>Alamat :</b> Jl. Kemantren No. 5 RT 04 RW 02 Kelurahan Wonosari Kecamatan Ngaliyan Semarang</p>
                                        <p align="justify"><b>Telp :</b>(024) 8662971</p>
                                        <p align="justify"><b>Email :</b> smkbinusasmg@yahoo.com</p>
                                </Mui.Grid>
                            </Mui.Grid>
                            </Mui.Container>
            </div>
        )
    }
} 
    
export default Alamatsekolah;
  