import Header from '../component/header';
import Layout from '../component/layout';
import Footer from '../component/footer';

export default ()=>{
    return(
        <div>
            <Header/>
            <Layout>
            <section id="hero">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className=" col-lg-6 py-5 py-lg-0 order-2 order-lg-1" data-aos="fade-right">
                            <h1>Hubungi Kami</h1>
                            <h2>Jika Ingin Mengetahui Info Lebih Lanjut</h2>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
                            <img src="/bahan/layanan.png" classNameName="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="row">
                    <div className="col">
                        <img src="..." height="auto" width="500"/>
                        <h1 className="blue">Kontak Kami</h1>
                        <p className="neo">
                        Silahkan tinggalkan pesan anda, pada kolom yang tersedia.
                        </p>
                    </div>
                    <div className="col">
                    <form method="post" action="#">
                        <div className="form-group">
                            <label for="">Nama Anda:</label>
                            <input type="text" className="form-control" name="nama" placeholder="Masukkan Nama"/>
                        </div>
                        <div className="form-group">
                            <label for="">E-mail Anda:</label>
                            <input type="email" className="form-control" name="email" placeholder="Masukkan Email"/>
                        </div>
                        <div className="form-group">
                            <label for="">Pesan Anda:</label>
                            <textarea name="pesan" className="form-control" cols="30" rows="7"></textarea>
                        </div>
                        <input className="btn btn-primary" type="submit" value="Masukan"/>
                    </form>
                    </div>
                </div>
            </section>
            <style jsx>{`
                #hero {
                    width: 100%;
                    padding: 0 0 0 0;
                    background: #800000;
                    background: linear-gradient(180deg, #800000 0%, #800002 35%, #800012 100%);
                }
                
                #hero h1 {
                    margin: 0 0 15px 0;
                    font-size: 48px;
                    font-weight: 700;
                    line-height: 56px;
                    color: #FFFFFF;
                    font-family: Verdana;
                }
                
                #hero h2 {
                    color: #FFFFFF;
                    margin-bottom: 30px;
                    font-size: 22px;
                }
                
                #hero .btn-get-started {
                    color: #FFFFFF;
                    border-radius: 50px;
                    padding: 8px 35px 10px 35px;
                    border: 2px solid #FFFFFF;
                    transition: all ease-in-out 0.3s;
                    display: inline-block;
                    background: #800000;
                }
                
                #hero .btn-get-started:hover {
                    background: transparent;
                    color: #DC143C;
                }
                
                @media (max-width: 991px) {
                    #hero .hero-img {
                        text-align: center;
                    }
                    #hero .hero-img img {
                        width: 50%;
                    }
                }
                
                @media (max-width: 768px) {
                    #hero {
                        -moz-text-align-last: center;
                        text-align-last: center;
                    }
                    #hero h1 {
                        font-size: 28px;
                        line-height: 36px;
                    }
                    #hero h2 {
                        font-size: 18px;
                        line-height: 24px;
                        margin-bottom: 30px;
                    }
                    #hero .hero-img img {
                        width: 70%;
                    }
                }
                
                @media (max-width: 575px) {
                    #hero .hero-img img {
                        width: 80%;
                    }
                }
                section {
                    padding: 60px 0;
                    overflow: hidden;
                  }
                  
                .section-bg {
                    background: linear-gradient(180deg, #f2f6fa 0%, #fff 100%);
                }
                
                .section-title {
                    text-align: center;
                    padding-bottom: 30px;
                }
                
                .section-title h2 {
                    font-size: 32px;
                    font-weight: 600;
                    text-transform: uppercase;
                    margin-bottom: 20px;
                    padding-bottom: 20px;
                    position: relative;
                    font-family: "Poppins", sans-serif;
                    color: #213b52;
                }
                
                .section-title h2::before {
                    content: '';
                    position: absolute;
                    display: block;
                    width: 120px;
                    height: 1px;
                    background: #ddd;
                    bottom: 1px;
                    left: calc(50% - 60px);
                }
                
                .section-title h2::after {
                    content: '';
                    position: absolute;
                    display: block;
                    width: 40px;
                    height: 3px;
                    background: #fdc134;
                    bottom: 0;
                    left: calc(50% - 20px);
                }
                
                .section-title p {
                    margin-bottom: 0;
                }
            `}</style>
            </Layout>
            <Footer/>
        </div>
    );
}