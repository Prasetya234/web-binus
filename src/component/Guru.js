import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Guru extends Component{
    render(){
        return(
            <div>
                <br/><h1 align="center">Guru</h1><br/>
                <center>
                    <Mui.ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <Mui.Button href="/">Home</Mui.Button>
                        <Mui.Button href="/Sejarah">Sejarah</Mui.Button>
                        <Mui.Button href="/Kepalasekolah">Kepala Sekolah</Mui.Button>
                        <Mui.Button href="/Guru">Guru</Mui.Button>
                        <Mui.Button href="/Jurusan">Jurusan</Mui.Button>
                        <Mui.Button href="/Alamatsekolah">Alamat Sekolah</Mui.Button>
                    </Mui.ButtonGroup>
                </center><hr/><br/><br/>
                <Mui.Container fidex>
                    <center>
                        <Mui.Grid container spacing={1}>
                            <Mui.Grid item xs={3} sm={3}>
                                <img src="/Septy.jpg"></img>
                                    <p>Septi Muslikhah</p>
                                    <p><b>Waka Kurikulum</b></p>
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                                <img src="/Ari.jpg"></img>
                                    <p>Ari Dwi Handoko,S.Pd</p>
                                    <p><b>Waka Kesiswaan</b></p>
                             </Mui.Grid>
                             <Mui.Grid item xs={3} sm={3}>
                                <img src="/Khusnul.jpg"></img>
                                    <p>Khusnul Khotima,S.Pd</p>
                                    <p><b>Waka Sarana dan Prasarana</b></p>
                             </Mui.Grid>
                             <Mui.Grid item xs={3} sm={3}>
                                 <img src="/Askuriati.jpg"></img>
                                    <p>Askuriat,S.E</p>
                                    <p><b>Waka SDM</b></p>
                             </Mui.Grid>
                             <Mui.Grid item xs={3} sm={3}>
                                 <img src="/Arga.jpg"></img>
                                    <p>Arga Dian SW,S.Kom</p>
                                    <p><b>K3 Teknik Komputer dan Jaringan</b></p>
                             </Mui.Grid>
                             <Mui.Grid item xs={3} sm={3}>
                                 <img src="/linda.jpg" width="260" height="300"></img>
                                    <p>Isti Malinda,S.Pd</p>
                                    <p><b>K3 Tata Busana</b></p>
                             </Mui.Grid>
                             <Mui.Grid item xs={3} sm={3}>
                                 <img src="/wahyu.jpeg" width="260" height="300"></img>
                                    <p>Wahyu Ambikawati,S.Pd</p>
                                    <p><b>K3 Teknik Bisnis Sepeda Motor</b></p>
                             </Mui.Grid>
                             <Mui.Grid item xs={3} sm={3}>
                                 <img src="/novita.jpeg" width="260" height="300"></img>
                                    <p>Novita Widyastutik,S.Pd</p>
                                    <b>K3 Akuntansi dan Keuangan Lembaga</b>
                             </Mui.Grid>
                             <Mui.Grid item xs={3} sm={3}>
                                 <img src="/dian.jpeg" width="260" height="300"></img>
                                    <p>Dianing Ratri O,S.Pd</p>
                                    <p><b>Sekretaris Jurusan Teknik Komputer dan Jaringan</b></p>
                             </Mui.Grid>
                             <Mui.Grid item xs={3} sm={3}>
                                 <img src="/soim.jpeg" width="260" height="300"></img>
                                    <p>Soimatun,S.Pd</p>
                                    <p><b>Sekretaris Jurusan Tata Busana</b></p>
                             </Mui.Grid>
                             <Mui.Grid item xs={3} sm={3}>
                                 <img src="/Rabisan.jpg" width="260" height="300"></img>
                                 <p>Tri Rabisan,S.Pd</p>
                                 <p><b>Sekretaris Jurusan Teknik Bisnis Sepeda Motor</b></p>
                             </Mui.Grid>
                             <Mui.Grid item xs={3} sm={3}>
                                 <img src="/vega.jpeg" width="260" height="300"></img>
                                    <p>Vega Nurmalita,S.Pd</p>
                                    <p><b>Sekretaris Jurusan Akuntansi dan Keuangan Lembaga</b></p>
                             </Mui.Grid>
                             <Mui.Grid item xs={3} sm={3}>
                                 <img src="/1.jpeg" width="260" height="300"></img>
                                    <p>Taqius SA,S.Kom</p>
                                    <p><b>Ka. Lab Jurusan Teknik Komputer dan Jaringan</b></p>
                             </Mui.Grid>
                             <Mui.Grid item xs={3} sm={3}>
                                 <img src="/2.jpeg" width="260" height="300"></img>
                                    <p>Aroem Santi L,S.Pd</p>
                                    <p><b>Ka. Lab Jurusan Tata Busana</b></p>
                             </Mui.Grid>
                             <Mui.Grid item xs={3} sm={3}>
                                 <img src="/3.jpg" width="260" height="300"></img>
                                    <p>Nonok Royin Wibowo</p>
                                    <p><b>Ka. Lab Sekretaris Jurusan Teknik Bisnis Sepeda Motor</b></p>
                             </Mui.Grid>
                             <Mui.Grid item xs={3} sm={3}>
                                 <img src="/4.jpeg" width="260" height="300"></img>
                                    <p>Indah Noviani,S.Pd</p>
                                    <p><b>Guru Mapel Bahasa Indonesia</b></p>
                             </Mui.Grid>
                             <Mui.Grid item xs={3} sm={3}>
                                 <img src="/5.jpeg" width="260" height="300"></img>
                                    <p>Ida Fahru Roziyah,S.Pd</p>
                                    <p><b>Guru Mapel Bahasa Jawa</b></p>
                             </Mui.Grid>
                             <Mui.Grid item xs={3} sm={3}>
                                 <img src="/6.jpeg" width="260" height="300"></img>
                                    <p>Indah Dwi Putri Banjarsari,S.Pd</p>
                                    <p><b>Guru Mapel Matematika</b></p>
                             </Mui.Grid> 
                             <Mui.Grid item xs={3} sm={3}>
                                 <img src="/7.jpeg" width="260" height="300"></img>
                                 <p>Arif Adi Wijaya,S.Pd</p>
                                 <p><b>Guru Mapel Penjasorkes</b></p>
                             </Mui.Grid>
                             <Mui.Grid item xs={3} sm={3}>
                                <img src="/8.jpeg" width="260" height="300"></img>
                                <p>Tito Dwi Yulianto,S.Pd</p>
                                <p><b>Guru Mapel Bahasa Inggris</b></p>
                             </Mui.Grid>
                             <Mui.Grid item xs={3} sm={3}>
                                <img src="/9.jpeg" width="260" height="300"></img>
                                <p>Muhammad Sholeh,S.Pd.I</p>
                                <p><b>Guru Mapel Agama Islam</b></p>
                             </Mui.Grid>
                             <Mui.Grid item xs={3} sm={3}>
                                <img src="/10.jpeg" width="260" height="300"></img>
                                <p>Siti Masruroh,A.Md</p>
                                <p><b>Guru Mapel Bahasa Jepang</b></p>
                             </Mui.Grid>
                             <Mui.Grid item xs={3} sm={3}>
                                <img src="/11.jpeg" width="260" height="300"></img>
                                <p>Ruri Ayuning Lati,S.Pd</p>
                                <p><b>Guru BK</b></p>                             
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                                <img src="/11.jpeg" width="260" height="300"></img>
                                <p>Rufi Tri Irianti,S.Pd</p>
                                <p><b>Guru Mapel Pendidikan Karakter</b></p>
                            </Mui.Grid>
                        </Mui.Grid>
                    </center>
                </Mui.Container>

            </div>
        )
    }
} 
        
export default Guru;