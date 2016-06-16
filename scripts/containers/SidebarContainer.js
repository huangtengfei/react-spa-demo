/**
 * Created by huangtengfei on 16/5/27.
 */

import React from 'react'
import { Link } from 'react-router'

export default class SidebarContainer extends React.Component {
    render() {
        return (
            <div className="sidebar-cont">
                <ul>
                    <li><Link to="/dashboard">控制台</Link></li>
                    <li><Link to="/message">消息中心</Link></li>
                    <li><Link to="/help">帮助</Link></li>
                    <li><Link to="/list">列表</Link></li>
                </ul>
            </div>
        )
    }
}
