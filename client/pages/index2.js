import React from 'react'
import Link from 'next/link'
import {Layout} from '../components'

const Index2 = () => (
    <div classname='indexLanding'>
        <div className="logo"><img src="/static/LandingPage_Icon1.png" alt="Logo"/></div>
        <h1 className="Title">Home Testing 1 2 3</h1>
        <div classname='indexHome'>
            <p>Note that Web3 is not loaded for this page as of yet. now let us test the length limit.</p>
            <div><Link href='/dapp'><a>My Dapp</a></Link></div>
            <div><Link href='/accounts'><a>My Accounts</a></Link></div>
        </div>

        <style>{`
            .indexLanding {
                text-align: center;
				color: #FFF;
				width: 90%;
				margin: 0 auto;
				max-width: 1024px;
				font-family: Raleway;
            }
            .Title {
                text-transform: uppercase;
                text-align: right;
                font-family: Montserrat;
            }
            .logo {
                position: relative;
                padding-top: 50px;
                height: 2vh;
            }
            .indexHome p {
                text-align: center;
                font-size: 20px;
            }
            @media screen and (max-width: 1024px) {
                .indexLanding { padding-bottom: 50px; }
            }
            @media screen and (min-width: 1024px) {
                .txtTitle { display: block; }
                .Title { display: inline; }
                .indexLanding {
                    display: -webkit-flex;display: -moz-flex;display: -ms-flex;display: -o-flex;display: flex;
                    justify-content: center;
                    max-width: 1200px;
                    -ms-align-items: center;align-items: center;
                    -webkit-flex-wrap: wrap;-moz-flex-wrap: wrap;-ms-flex-wrap: wrap;-o-flex-wrap: wrap;flex-wrap: wrap;
                }
                .logo {
                    width: 100%;
                    padding-top: 5px;
                    max-height: auto;
                    height: auto;
                }
                .logo img { width: 10%; height: auto; }
                .indexHome {
                    width: 10%;
                    margin-left: 5%;
                }
            }
        `}</style>
    </div>
)

export default () => (<Layout title="Index2" content={Index2}/>)
