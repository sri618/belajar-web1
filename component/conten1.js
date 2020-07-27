import Layout from '../component/layout';

export default () => {
    return(
        <div>
            <Layout>
                <section id="services" className="services section-bg">
                    <div className="container">
                        <div className="section-title">
                            <h2 data-aos="fade-in">Paket Layanan</h2>
                            <p data-aos="fade-in">Belajar Lebih Mudah Dengan Kami</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-right">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="/bahan/des.png" alt="..."/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="">Paket Belajar Desain Grafis</a></h5>
                                        <p className="card-text">Saya Menyediakan Paket Lengkap Belajar Desain Grafis Tentunya Dengan Harga Terjangkau</p>
                                        <div className="read-more">
                                            <a href="#"><i className="icofont-arrow-right"></i> Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-left">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="/bahan/des.png" alt="..."/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="">Paket Belajar Pemograman Web</a></h5>
                                        <p className="card-text">Saya Menyediakan Paket Lengkap Pemograman Web Mulai Dari Dasar Sampai Menjadi Master Koding</p>
                                        <div className="read-more">
                                            <a href="#"><i className="icofont-arrow-right"></i> Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
            <style jsx>{`
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
                .services {
                    padding-bottom: 40px;
                }
                
                .services .card {
                    border: 0;
                    padding: 0 30px;
                    margin-bottom: 60px;
                    position: relative;
                    background: transparent;
                }
                
                .services .card-img {
                    width: calc(100% + 60px);
                    margin-left: -30px;
                    overflow: hidden;
                    z-index: 9;
                    border-radius: 0;
                }
                
                .services .card-img img {
                    max-width: 100%;
                    transition: all 0.3s ease-in-out;
                }
                
                .services .card-body {
                    z-index: 10;
                    background: #fff;
                    border-top: 4px solid #fff;
                    padding: 30px;
                    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
                    margin-top: -60px;
                    transition: 0.3s;
                }
                
                .services .card-title {
                    font-weight: 700;
                    text-align: center;
                    margin-bottom: 20px;
                }
                
                .services .card-title a {
                    color: #213b52;
                    transition: 0.3s;
                }
                
                .services .card-text {
                    color: #5e5e5e;
                }
                
                .services .read-more a {
                    color: #777777;
                    text-transform: uppercase;
                    font-weight: 600;
                    font-size: 12px;
                    transition: 0.3s;
                }
                
                .services .read-more a:hover {
                    color: #fdc134;
                }
                
                .services .card:hover img {
                    transform: scale(1.1);
                }
                
                .services .card:hover .card-body {
                    border-color: #fdc134;
                }
                
                .services .card:hover .card-body .card-title a {
                    color: #fdc134;
                }
            `}</style>
        </div>
    );
}