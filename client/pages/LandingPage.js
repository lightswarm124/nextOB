import React from 'react';
import Link from 'next/link';
import {Layout} from '../components'

class LandingPage extends React.Component {
    redirectToGithub() {
      window.location.href = "http://github.com/login/oauth/authorize?client_id=79a74ecd4f74e041ef36&redirect_uri=http%3A%2F%2Fapi.openbounty.co%2Fauth%2Fauthorize?state=1001&scope=user%20user%3Aemail%20user%3Afollow%20public_repo%20repo%20read%3Arepo_hook%20write%3Arepo_hook%20admin%3Arepo_hook";
    }

    render() {
        return (
            <div className="appHeader">
                <div className="topBar col-xs-12 col-xs-offset-1">
                    <h3 onClick={this.redirectToGithub} className=" btn topBarNavRight hidden-xs hidden-sm noPadd"> LOGIN WITH GITHUB </h3>
                    <img src="/static/Logo_Black.svg" className="appLogo mainPageAppLogo" alt="logo "/>
                </div>

                <div className="heroTextContainer col-xs-10 col-xs-offset-1 col-md-4 noPadd">
                  <h1 className="heroTitleText"> Welcome to OpenBounty </h1>
                  <h3 className="heroText">
                    Open Bounty is a blockchain development platform
                    designed to help developers get rewarded for their
                    contributions and for project owners to get quality
                    code, quickly and reliably.
                  </h3>
                </div>

                <div className="heroLandingButtons col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1 noPadd">
                  <div className="btnLandingWhite col-xs-12 col-sm-2" type="button" onClick={()=>{this.props.pageChange('HOME')}}>GET STARTED</div>
                  <div id="seeHowItWorks" className="col-xs-12 col-sm-2 btn " onClick={()=> jump('.midBox')}><strong> & See How it Works </strong></div>
                </div>

                <div className="col-xs-12 col-lg-10 col-lg-offset-1 midBox">

                    <div className="s2TopTextContainer col-xs-12 row noPadd">
                        <div className="midBoxSmallBox col-xs-12 col-md-4 noPadd " >
                          <img src="/static/LandingPage_Icon1.svg" className="midBoxIcon1 MBI" alt="Icon" />
                          <h1 className="midBoxTitle" >Get Bounty Tokens</h1>
                          <p>
                            Et case aliquip accusata eam, ad
                            eam oratio verear consequuntur.
                          </p>
                        </div>

                        <div className="midBoxSmallBox col-xs-12 col-md-4 noPadd">
                          <img src="/static/LandingPage_Icon2.svg" className="midBoxIcon2 MBI" alt="Icon" />
                          <h1 className="midBoxTitle">Contribute with Code</h1>
                          <p>
                            Et case aliquip accusata eam, ad
                            eam oratio verear consequuntur.
                          </p>
                        </div>

                        <div className="midBoxSmallBox col-xs-12 col-md-4 noPadd ">
                          <img src="/static/LandingPage_Icon3.svg" className="midBoxIcon3 MBI" alt="Icon" />
                          <h1 className="midBoxTitle" >Manage Projects</h1>
                          <p>
                            Et case aliquip accusata eam, ad
                            eam oratio verear consequuntur.
                          </p>
                        </div>
                  </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
