import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Jurusan extends Component{
    render(){
        return(
            <div>
                <br/>
                <h1 align="center">Jurusan</h1><br/>
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
                <Mui.Container fidex>
                        <Mui.Grid container spacing={1}>
                            <Mui.Grid item xs={12} sm={6}>
                                <h2>1. Akutansi</h2>
                                    <p>Akuntansi merupakan kompetensi yg mempelajari proses mencatat,mengolah dan menyajikan data yg berkaitan dengan keuangan.Untuk jurusan akuntansi di SMK, siswa di berikan banyak teori mengeni akuntansi keuangan perusahaan jasa,akuntansi keuangan perusahaan dagang dan perpajakan. Selain itu,siswa jurusan akuntansi juga dibekali dengan komputerisasi akuntansi, misalnya menggunakan program MYOB yang dapat menjadi nilai plus untuk lulusan SMK jurusan akuntansi.</p><br/>
                                <h3 align="center">Fasilitas :</h3>
                                    <ul>
                                        <li>Bank Mini</li>
                                        <li>Lab Computer</li>
                                    </ul>
                            </Mui.Grid>
                            <Mui.Grid item xs={12} sm={6}>
                                <img src="/akutansi.jpg" width="550" hight="450"></img>
                             </Mui.Grid>
                             <Mui.Grid item xs={12} sm={6}>
                                <img src="/tbsm.jpg" width="550" hight="450"></img>
                            </Mui.Grid>
                            <Mui.Grid item xs={12} sm={6}>
                                <h2>2. TBSM</h2>
                                    <p>Tenik Bisnis Sepeda Motor adalah kompetensi yang mempelajari tentang perawatan, perbaikan, dan modifikasi sepeda motor.</p>
                                    <p> Lulusannya mampu menjadi Teknisi yang berkarakter profesional, ahli dan terampil dalam melakukan perawatan dan perbaikan mesin sepeda motor, chasis, pemindahan tenaga, sistem kelistrikan sepeda motor, kreatif dalam modifikasi dan asesoris sepeda motor,merancang dan membuat produk yang berbasis welding (pengelasan), dan menguasai Otomotif Technology Computer mutakhir</p><br/>
                                    <h3 align="center">Fasilitas :</h3>
                                        <ol>
                                            <li>bengkel berstandar Astra Honda(AHM)</li>
                                        </ol>                     
                            </Mui.Grid>
                            <Mui.Grid item xs={12} sm={6}>
                                <h2>3. TKJ</h2>
                                    <p>Teknik komputer dan jaringan adalah kompetensi keahlian yg mempelajari tentang teknologi informasi dan jaringan. Di smk bina nusantara lulusannya mampu menjadi network engineer,software development dan juga bisa membuat film animasi .</p>
                                    <p>Pembelajarannya menggunakan cyber class dan menggunakan peralatan yang canggih seperti IBD, VIRTUALISER, dan menggunakan piranti multimedia lainnya. Bekerja sama dengan Intel Education untuk menjamin kualitas pembelajaran sesuai dengan kebutuhan industri.</p><br/>
                                <h3 align="center">Fasilitas :</h3>
                                    <ol>
                                       <li>Gedung milik sendiri</li>
                                       <li>Memiliki laboratorium canggih seperti laboratorium networking support</li>
                                       <li>Laboratorium hardware, software dan laboratorium multimedia.</li>
                                    </ol>
                            </Mui.Grid>
                            <Mui.Grid item xs={12} sm={6}>
                                <img src="/tkj.jpg" width="550" hight="450"></img>
                            </Mui.Grid>
                            <Mui.Grid item xs={12} sm={6}>
                                <img src="/tatabusana.jpg" width="550" hight="450"></img>
                            </Mui.Grid>
                            <Mui.Grid item xs={12} sm={6}>
                            <h2>4. Tata Busana</h2>
                                    <p>Tata Busana merupakan kompetensi yang mempelajari bagaimana mendesain busana yg sesuai dengan bentuk tubuh serta karakteristik model atau seseorang. Tidak hanya mendesain,tapi juga membuat pola hingga desain tersebut menjadi busana.</p>
                                    <p>Lulusan TB dapat mendapat menjadi seorang desainer/perancang busana,dapat pula membuka usaha sendiri berupa butik/konveksi/tailor.</p><br/>
                                        <h3 align="center">Fasilitas :</h3>
                                        <ul>
                                            <li>Mesin jahit industry</li>
                                            <li>Lab Garmen</li>
                                            <li>Peralatan Jahit yg berkualitas</li>
                                            <li>Mesin pasang kancing</li>
                                            <li>Mesin Obras</li>
                                            <li>Mesin Lubang kancing</li>
                                            <li>Boneka jahit</li>
                                        </ul>
                            </Mui.Grid>
                        </Mui.Grid>
                    </Mui.Container>
            </div>
        )
    }
} 
    
export default Jurusan;
    
    