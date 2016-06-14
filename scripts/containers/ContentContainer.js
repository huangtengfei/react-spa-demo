/**
 * Created by huangtengfei on 16/5/27.
 */

import React from 'react'

export default class ContentContainer extends React.Component {
    render() {
        return (
            <div className="content-cont">
                {this.props.children}
            </div>
        )
    }
}