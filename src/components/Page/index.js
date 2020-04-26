import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {statusBarHeight,isIphoneX} from '../device'
import style from './page.less'

export default class extends React.PureComponent {
    static propTypes = {
        //保留头部区域（防止导航栏遮挡到内容）
        saveTop:PropTypes.bool,
        //保留底部区域（防止底部的操作按钮遮挡到内容）
        saveBottom:PropTypes.bool,
        className: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array,
        ])
    };

    static defaultProps = {
        saveTop:true,
        saveBottom:false
    };
    state ={
        statusBarHeight:statusBarHeight
    };

    render(){
        const {saveTop,saveBottom,className,children} = this.props;

        const bottomCss = saveBottom?
            (isIphoneX?style.saveBottomX:style.saveBottom)
            :
            null;

        return (
            <div className={className}>
                <div style={{paddingTop:this.state.statusBarHeight+'px'}}>
                    <div className={classNames({[style.navbarHeight]:saveTop},bottomCss)}>
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}
