export default ()=>{
    return(
        <div>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container" data-aos="fade-up">
                        <div className="row  justify-content-center">
                            <div className="col-lg-6">
                                <h3>Lets Study</h3>
                                <p>Kirimkan Masukan Kepada Kami</p>
                            </div>
                        </div>
                        <div className="row footer-newsletter justify-content-center">
                            <div className="col-lg-6">
                                <form action="" method="post">
                                    <input type="email" name="email" placeholder="Enter your Email"/>
                                    <input type="submit" value="Subscribe"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container footer-bottom clearfix">
                    <div className="copyright">
                        &copy; Copyright <strong><span>2020</span></strong>. By Sri Hastuti 1118101571
                    </div>
                </div>
            </footer>

            <style jsx>{`
                #footer {
                    color: #fff;
                    font-size: 14px;
                    position: relative;
                }
                
                #footer::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    background: #F08080;
                    z-index: 1;
                }
                
                #footer .footer-top {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                    padding: 80px 0;
                }
                
                #footer .footer-top h3 {
                    font-size: 36px;
                    font-weight: 700;
                    color: #fff;
                    position: relative;
                    font-family: "Poppins", sans-serif;
                    padding-bottom: 0;
                    margin-bottom: 0;
                }
                
                #footer .footer-top p {
                    font-size: 15;
                    font-style: italic;
                    margin: 30px 0 0 0;
                    padding: 0;
                }
                
                #footer .footer-top .footer-newsletter {
                    text-align: center;
                    font-size: 15px;
                    margin-top: 30px;
                }
                
                #footer .footer-top .footer-newsletter form {
                    background: #FFFFFF;
                    padding: 6px 10px;
                    position: relative;
                    border-radius: 50px;
                    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
                    text-align: left;
                }
                
                #footer .footer-top .footer-newsletter form input[type="email"] {
                    border: 0;
                    padding: 4px 8px;
                    width: calc(100% - 100px);
                }
                
                #footer .footer-top .footer-newsletter form input[type="submit"] {
                    position: absolute;
                    top: 0;
                    right: -1px;
                    bottom: 0;
                    border: 0;
                    background: none;
                    font-size: 16px;
                    padding: 0 20px;
                    background: #800000;
                    color: #ffffff;
                    transition: 0.3s;
                    border-radius: 50px;
                    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
                }
                
                #footer .footer-top .footer-newsletter form input[type="submit"]:hover {
                    background: #fcb102;
                }
                
                #footer .footer-top .social-links {
                    margin-top: 30px;
                }
                
                
                #footer .footer-bottom {
                    border-top: 4px solid #ffffff;
                    z-index: 2;
                    position: relative;
                    padding-top: 40px;
                    padding-bottom: 40px;
                }
                
                #footer .copyright {
                    text-align: center;
                    float: left;
                }
                
                #footer .credits {
                    float: right;
                    text-align: center;
                    font-size: 13px;
                }
                
                @media (max-width: 768px) {
                    #footer .copyright, #footer .credits {
                        padding: 5px;
                        float: none;
                        text-align: ceneter;
                    }
                }
            `}</style>
        </div>
    );
}