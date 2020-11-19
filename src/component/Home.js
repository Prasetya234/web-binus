import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Home extends Component{
    render(){
        return(
            <div>
                <br/>
                <h1 align="center">Smk Bina Nusantara</h1>
                <br/>
                <center>
                    <Mui.ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <Mui.Button href="/">Home</Mui.Button>
                        <Mui.Button href="/Sejarah">Sejarah</Mui.Button>
                        <Mui.Button href="/Kepalasekolah">Kepala Sekolah</Mui.Button>
                        <Mui.Button href="/Guru">Guru</Mui.Button>
                        <Mui.Button href="/Jurusan">Jurusan</Mui.Button>
                        <Mui.Button href="/Alamatsekolah">Alamat Sekolah</Mui.Button>
                    </Mui.ButtonGroup>
                    <hr/>
                </center>
                <Mui.Container fidex>
                    <center>
                        <img src="/logo-smk.jpg" height="300" />
                    </center><br/><br/>
                    <Mui.Grid container spacing={1}>
                            <Mui.Grid item xs={12} sm={6}>
                                <h3 align="center">Visi</h3>
                                    <p><b><i>“Menyiapkan Tenaga Terampil Menengah yang Siap Berkompetisi dan Siap Kerja”</i></b></p>
                            </Mui.Grid>
                            <Mui.Grid item xs={12} sm={6}>
                                <h3 align="center">Misi</h3>
                                <ol>
                                    <li>Menyiapkan lulusan yang siap mengisi pasaran kerja sesuai dengan bidang profesinya</li><br/>
                                    <li>Meningkatkan ketrampilan wirausaha</li><br/>
                                    <li>Menyiapkan ketrampilan sesuai jurusannya</li><br/>
                                </ol>
                             </Mui.Grid>
                </Mui.Grid>
                </Mui.Container>
            </div>
        )
    }
} 

export default Home;