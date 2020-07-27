import Head from 'next/head';
import Link from 'next/link';

export default ()=>{
    return(
        <div>
            <Head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"/>
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
                <title>Uas Programing</title>
            </Head>
            <header id="header">
                <div className="container d-flex align-items-center">
                    <div className="logo mr-auto">
                        <Link href="/index">
                            <h1 className="text-light"><a href="index.html">Lets Study<span>.</span></a></h1>
                        </Link>
                    </div>
                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <Link href="/index">
                                <li><a>Beranda</a></li>
                            </Link>
                            <Link href="/tentang">
                                <li><a>Tentang Saya</a></li>
                            </Link>
                            <Link href="/layanan">
                                <li><a>Layanan</a></li>
                            </Link>
                            <Link href="/latihan">
                                <li><a>Latihan</a></li>
                            </Link>
                            <Link href="/tutorial">
                                <li><a>Tutorial</a></li>
                            </Link>
                            <Link href="/hubungi">
                                <li><a>Hubungi Saya</a></li>
                            </Link>
                            <Link href="/get">
                                <li className="get-started"><a >Get Started</a></li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </header>
            <style jsx>{`
                #header {
                    z-index: 997;
                    transition: all 0.5s;
                    padding: 16px 0;
                    background: #8B0000;
                }
                
                #header .logo h1 {
                    font-size: 28px;
                    margin: 0;
                    padding: 10px 0;
                    line-height: 1;
                    font-weight: 700;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    font-family: Verdana;
                }
                
                #header .logo h1 a, #header .logo h1 a:hover {
                    color: #FFFFFF;
                    text-decoration: none;
                }
                
                #header .logo h1 a span, #header .logo h1 a:hover span {
                    color: #FFFF00;
                }
                
                #header .logo img {
                    padding: 0;
                    margin: 0;
                    max-height: 40px;
                }
                .nav-menu, .nav-menu * {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }
                
                .nav-menu > ul > li {
                    position: relative;
                    white-space: nowrap;
                    float: left;
                }
                
                .nav-menu ul {
                    border-radius: 6px;
                }
                
                .nav-menu a {
                    display: block;
                    position: relative;
                    color: #FFFFFF;
                    padding: 10px 15px;
                    transition: 0.3s;
                    font-size: 16px;
                    font-family: Verdana;
                }
                
                .nav-menu a:hover, .nav-menu .active > a, .nav-menu li:hover > a {
                    color: #DC143C;
                    text-decoration: none;
                }
                
                .nav-menu .get-started a {
                    background: #800000;
                    color: #FFFFFF;
                    border-radius: 50px;
                    margin: 2px 0 0 15px;
                    padding: 4px 25px 6px 25px;
                    border: 2px solid #FFFFFF;
                }
                
                .nav-menu .get-started a:hover {
                    background: #DC143C;
                    color: #FFFFFF;
                }
            `}</style>
        </div>          
    );
}