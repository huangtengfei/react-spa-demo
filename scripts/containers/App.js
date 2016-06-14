/**
 * Created by huangtengfei on 16/5/27.
 */

import React from 'react'
import HeaderContainer from './HeaderContainer'

import SidebarContainer from './SidebarContainer'
import ContentContainer from './ContentContainer'
import FooterContainer from './FooterContainer'

export default class App extends React.Component {
    render() {
        return (
            <div className="app-cont">
                <HeaderContainer />
                <div className="center-cont">
                    <SidebarContainer />
                    <ContentContainer>
                        {this.props.children}
                    </ContentContainer>
                </div>
                <FooterContainer />
            </div>
        )
    }
}

