webpackJsonp([0],{"./node_modules/awesome-typescript-loader/dist/entry.js!./src/components/MainTabs.tsx":function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),l=this&&this.__assign||Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++){t=arguments[o];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e};Object.defineProperty(t,"__esModule",{value:!0});var i=o("./node_modules/react/react.js"),a=o("./node_modules/material-ui/Tabs/index.js"),s=o("./src/components/MainContent.tsx"),r=o("./src/containers/AppBar.tsx"),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleChange=function(e){t.props.appPage.selectTab(null,e)},t.handleSwipeChange=function(e,t){},t}return n(t,e),t.prototype.render=function(){var e=l({},this.props,{basePath:"/",mainTabs:void 0}),t=void 0!==this.props.tempTabs?this.props.tempTabs:this.props.mainTabs;return i.createElement("div",null,i.createElement(r.default,{rightIcon:this.props.rightIcon,defaultTitle:this.props.title,leftIcon:this.props.leftIcon,onTitleClick:this.props.onTitleClick}),i.createElement(a.Tabs,{value:this.props.tabId,onChange:this.handleChange,children:t}),i.createElement(s.default,l({},e)))},t}(i.Component);t.default=u},"./node_modules/bundle-loader/index.js?lazy!./src/components/AppRoutes.tsx":function(e,t,o){e.exports=function(e){o.e(2).then(function(t){e(o("./node_modules/awesome-typescript-loader/dist/entry.js!./src/components/AppRoutes.tsx"))}.bind(null,o)).catch(o.oe)}},"./node_modules/bundle-loader/index.js?lazy!./src/components/GlobalComponents.tsx":function(e,t,o){e.exports=function(e){o.e(3).then(function(t){e(o("./node_modules/awesome-typescript-loader/dist/entry.js!./src/components/GlobalComponents.tsx"))}.bind(null,o)).catch(o.oe)}},"./node_modules/material-ui/AppBar/AppBar.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var o=t.muiTheme,n=o.appBar,l=o.button.iconButtonSize;return{root:{position:"relative",zIndex:o.zIndex.appBar,width:"100%",display:"flex",backgroundColor:n.color,paddingLeft:n.padding,paddingRight:n.padding},title:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",margin:0,paddingTop:0,letterSpacing:0,fontSize:24,fontWeight:n.titleFontWeight,color:n.textColor,height:n.height,lineHeight:n.height+"px"},mainElement:{boxFlex:1,flex:"1"},iconButtonStyle:{marginTop:(n.height-l)/2,marginRight:8,marginLeft:-16},iconButtonIconStyle:{fill:n.textColor,color:n.textColor},flatButton:{color:n.textColor,marginTop:(l-36)/2+1}}}Object.defineProperty(t,"__esModule",{value:!0});var i=o("./node_modules/babel-runtime/helpers/extends.js"),a=n(i),s=o("./node_modules/babel-runtime/core-js/object/keys.js"),r=n(s),u=o("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),c=n(u),d=o("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),p=n(d),h=o("./node_modules/babel-runtime/helpers/classCallCheck.js"),f=n(h),m=o("./node_modules/babel-runtime/helpers/createClass.js"),y=n(m),b=o("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),T=n(b),_=o("./node_modules/babel-runtime/helpers/inherits.js"),g=n(_);t.getStyles=l;var v=o("./node_modules/simple-assign/index.js"),x=n(v),j=o("./node_modules/react/react.js"),C=n(j),S=o("./node_modules/prop-types/index.js"),I=n(S),B=o("./node_modules/material-ui/IconButton/index.js"),w=n(B),E=o("./node_modules/material-ui/svg-icons/navigation/menu.js"),k=n(E),P=o("./node_modules/material-ui/Paper/index.js"),O=n(P),R=o("./node_modules/material-ui/utils/propTypes.js"),A=(n(R),o("./node_modules/warning/browser.js")),L=(n(A),function(e){function t(){var e,o,n,l;(0,f.default)(this,t);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return o=n=(0,T.default)(this,(e=t.__proto__||(0,p.default)(t)).call.apply(e,[this].concat(a))),n.handleTouchTapLeftIconButton=function(e){n.props.onLeftIconButtonTouchTap&&n.props.onLeftIconButtonTouchTap(e)},n.handleTouchTapRightIconButton=function(e){n.props.onRightIconButtonTouchTap&&n.props.onRightIconButtonTouchTap(e)},n.handleTitleTouchTap=function(e){n.props.onTitleTouchTap&&n.props.onTitleTouchTap(e)},l=o,(0,T.default)(n,l)}return(0,g.default)(t,e),(0,y.default)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.title,o=e.titleStyle,n=e.iconStyleLeft,i=e.iconStyleRight,s=(e.onTitleTouchTap,e.showMenuIconButton),u=e.iconElementLeft,d=e.iconElementRight,p=e.iconClassNameLeft,h=e.iconClassNameRight,f=(e.onLeftIconButtonTouchTap,e.onRightIconButtonTouchTap,e.className),m=e.style,y=e.zDepth,b=e.children,T=(0,c.default)(e,["title","titleStyle","iconStyleLeft","iconStyleRight","onTitleTouchTap","showMenuIconButton","iconElementLeft","iconElementRight","iconClassNameLeft","iconClassNameRight","onLeftIconButtonTouchTap","onRightIconButtonTouchTap","className","style","zDepth","children"]),_=this.context.muiTheme.prepareStyles,g=l(this.props,this.context),v=void 0,S=void 0,I="string"==typeof t||t instanceof String?"h1":"div",B=C.default.createElement(I,{onTouchTap:this.handleTitleTouchTap,style:_((0,x.default)(g.title,g.mainElement,o))},t),E=(0,x.default)({},g.iconButtonStyle,n);if(s)if(u){var P={};if("IconButton"===u.type.muiName){var R=u.props.children,A=R&&R.props&&R.props.color?null:g.iconButtonIconStyle;P.iconStyle=(0,x.default)({},A,u.props.iconStyle)}!u.props.onTouchTap&&this.props.onLeftIconButtonTouchTap&&(P.onTouchTap=this.handleTouchTapLeftIconButton),v=C.default.createElement("div",{style:_(E)},(0,r.default)(P).length>0?(0,j.cloneElement)(u,P):u)}else v=C.default.createElement(w.default,{style:E,iconStyle:g.iconButtonIconStyle,iconClassName:p,onTouchTap:this.handleTouchTapLeftIconButton},p?"":C.default.createElement(k.default,{style:(0,x.default)({},g.iconButtonIconStyle)}));var L=(0,x.default)({},g.iconButtonStyle,{marginRight:-16,marginLeft:"auto"},i);if(d){var M={};switch(d.type.muiName){case"IconMenu":case"IconButton":var z=d.props.children,N=z&&z.props&&z.props.color?null:g.iconButtonIconStyle;M.iconStyle=(0,x.default)({},N,d.props.iconStyle);break;case"FlatButton":M.style=(0,x.default)({},g.flatButton,d.props.style)}!d.props.onTouchTap&&this.props.onRightIconButtonTouchTap&&(M.onTouchTap=this.handleTouchTapRightIconButton),S=C.default.createElement("div",{style:_(L)},(0,r.default)(M).length>0?(0,j.cloneElement)(d,M):d)}else h&&(S=C.default.createElement(w.default,{style:L,iconStyle:g.iconButtonIconStyle,iconClassName:h,onTouchTap:this.handleTouchTapRightIconButton}));return C.default.createElement(O.default,(0,a.default)({},T,{rounded:!1,className:f,style:(0,x.default)({},g.root,m),zDepth:y}),v,B,S,b)}}]),t}(j.Component));L.muiName="AppBar",L.defaultProps={showMenuIconButton:!0,title:"",zDepth:1},L.contextTypes={muiTheme:I.default.object.isRequired},L.propTypes={},t.default=L},"./node_modules/material-ui/AppBar/index.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o("./node_modules/material-ui/AppBar/AppBar.js"),l=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=l.default},"./node_modules/material-ui/Tabs/InkBar.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var o=t.muiTheme,n=o.inkBar,l=o.isRtl;return{root:{left:e.left,width:e.width,bottom:0,display:"block",backgroundColor:e.color||n.backgroundColor,height:2,marginTop:-2,position:"relative",transition:x.default.easeOut("1s",l?"right":"left")}}}Object.defineProperty(t,"__esModule",{value:!0});var i=o("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),a=n(i),s=o("./node_modules/babel-runtime/helpers/classCallCheck.js"),r=n(s),u=o("./node_modules/babel-runtime/helpers/createClass.js"),c=n(u),d=o("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),p=n(d),h=o("./node_modules/babel-runtime/helpers/inherits.js"),f=n(h),m=o("./node_modules/simple-assign/index.js"),y=n(m),b=o("./node_modules/react/react.js"),T=n(b),_=o("./node_modules/prop-types/index.js"),g=n(_),v=o("./node_modules/material-ui/styles/transitions.js"),x=n(v),j=function(e){function t(){return(0,r.default)(this,t),(0,p.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.style,t=this.context.muiTheme.prepareStyles,o=l(this.props,this.context);return T.default.createElement("div",{style:t((0,y.default)(o.root,e))})}}]),t}(b.Component);j.contextTypes={muiTheme:g.default.object.isRequired},j.propTypes={},t.default=j},"./node_modules/material-ui/Tabs/Tab.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var o=t.muiTheme.tabs;return{root:{color:e.selected?o.selectedTextColor:o.textColor,fontWeight:500,fontSize:14,width:e.width,textTransform:"uppercase",padding:0},button:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:e.label&&e.icon?72:48}}}Object.defineProperty(t,"__esModule",{value:!0});var i=o("./node_modules/babel-runtime/helpers/extends.js"),a=n(i),s=o("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),r=n(s),u=o("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),c=n(u),d=o("./node_modules/babel-runtime/helpers/classCallCheck.js"),p=n(d),h=o("./node_modules/babel-runtime/helpers/createClass.js"),f=n(h),m=o("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),y=n(m),b=o("./node_modules/babel-runtime/helpers/inherits.js"),T=n(b),_=o("./node_modules/simple-assign/index.js"),g=n(_),v=o("./node_modules/react/react.js"),x=n(v),j=o("./node_modules/prop-types/index.js"),C=n(j),S=o("./node_modules/material-ui/internal/EnhancedButton.js"),I=n(S),B=function(e){function t(){var e,o,n,l;(0,p.default)(this,t);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return o=n=(0,y.default)(this,(e=t.__proto__||(0,c.default)(t)).call.apply(e,[this].concat(a))),n.handleTouchTap=function(e){n.props.onTouchTap&&n.props.onTouchTap(n.props.value,e,n)},l=o,(0,y.default)(n,l)}return(0,T.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props,t=e.icon,o=(e.index,e.onActive,e.onTouchTap,e.selected,e.label),n=e.buttonStyle,i=e.style,s=(e.value,e.width,(0,r.default)(e,["icon","index","onActive","onTouchTap","selected","label","buttonStyle","style","value","width"])),u=l(this.props,this.context),c=void 0;t&&x.default.isValidElement(t)&&(c=x.default.cloneElement(t,{style:{fontSize:24,color:t.props&&t.props.style&&t.props.style.color?t.props.style.color:u.root.color,marginBottom:o?5:0}}));var d=this.context.muiTheme.tabs.selectedTextColor;return x.default.createElement(I.default,(0,a.default)({},s,{style:(0,g.default)(u.root,i),focusRippleColor:d,touchRippleColor:d,focusRippleOpacity:.3,touchRippleOpacity:.3,onTouchTap:this.handleTouchTap}),x.default.createElement("div",{style:(0,g.default)(u.button,n)},c,o))}}]),t}(v.Component);B.muiName="Tab",B.contextTypes={muiTheme:C.default.object.isRequired},B.propTypes={},t.default=B},"./node_modules/material-ui/Tabs/TabTemplate.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=o("./node_modules/simple-assign/index.js"),i=n(l),a=o("./node_modules/react/react.js"),s=n(a),r=o("./node_modules/prop-types/index.js"),u=(n(r),{width:"100%",position:"relative",textAlign:"initial"}),c=function(e){var t=e.children,o=e.selected,n=e.style,l=(0,i.default)({},u,n);return o||(l.height=0,l.overflow="hidden"),s.default.createElement("div",{style:l},t)};c.propTypes={},t.default=c},"./node_modules/material-ui/Tabs/Tabs.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return{tabItemContainer:{width:"100%",backgroundColor:t.muiTheme.tabs.backgroundColor,whiteSpace:"nowrap",display:"flex"}}}Object.defineProperty(t,"__esModule",{value:!0});var i=o("./node_modules/babel-runtime/helpers/extends.js"),a=n(i),s=o("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),r=n(s),u=o("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),c=n(u),d=o("./node_modules/babel-runtime/helpers/classCallCheck.js"),p=n(d),h=o("./node_modules/babel-runtime/helpers/createClass.js"),f=n(h),m=o("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),y=n(m),b=o("./node_modules/babel-runtime/helpers/inherits.js"),T=n(b),_=o("./node_modules/simple-assign/index.js"),g=n(_),v=o("./node_modules/react/react.js"),x=n(v),j=o("./node_modules/prop-types/index.js"),C=n(j),S=o("./node_modules/warning/browser.js"),I=(n(S),o("./node_modules/material-ui/Tabs/TabTemplate.js")),B=n(I),w=o("./node_modules/material-ui/Tabs/InkBar.js"),E=n(w),k=function(e){function t(){var e,o,n,l;(0,p.default)(this,t);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return o=n=(0,y.default)(this,(e=t.__proto__||(0,c.default)(t)).call.apply(e,[this].concat(a))),n.state={selectedIndex:0},n.handleTabTouchTap=function(e,t,o){var l=n.getValueLink(n.props),i=o.props.index;(l.value&&l.value!==e||n.state.selectedIndex!==i)&&l.requestChange(e,t,o),n.setState({selectedIndex:i}),o.props.onActive&&o.props.onActive(o)},l=o,(0,y.default)(n,l)}return(0,T.default)(t,e),(0,f.default)(t,[{key:"componentWillMount",value:function(){var e=this.getValueLink(this.props),t=this.props.initialSelectedIndex;this.setState({selectedIndex:void 0!==e.value?this.getSelectedIndex(this.props):t<this.getTabCount()?t:0})}},{key:"componentWillReceiveProps",value:function(e,t){var o=this.getValueLink(e),n={muiTheme:t.muiTheme||this.context.muiTheme};void 0!==o.value&&(n.selectedIndex=this.getSelectedIndex(e)),this.setState(n)}},{key:"getTabs",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=[];return v.Children.forEach(e.children,function(e){(0,v.isValidElement)(e)&&t.push(e)}),t}},{key:"getTabCount",value:function(){return this.getTabs().length}},{key:"getValueLink",value:function(e){return e.valueLink||{value:e.value,requestChange:e.onChange}}},{key:"getSelectedIndex",value:function(e){var t=this.getValueLink(e),o=-1;return this.getTabs(e).forEach(function(e,n){t.value===e.props.value&&(o=n)}),o}},{key:"getSelected",value:function(e,t){var o=this.getValueLink(this.props);return o.value?o.value===e.props.value:this.state.selectedIndex===t}},{key:"render",value:function(){var e=this,t=this.props,o=t.contentContainerClassName,n=t.contentContainerStyle,i=(t.initialSelectedIndex,t.inkBarStyle),s=(t.onChange,t.style),u=t.tabItemContainerStyle,c=t.tabTemplate,d=t.tabTemplateStyle,p=(0,r.default)(t,["contentContainerClassName","contentContainerStyle","initialSelectedIndex","inkBarStyle","onChange","style","tabItemContainerStyle","tabTemplate","tabTemplateStyle"]),h=this.context.muiTheme.prepareStyles,f=l(this.props,this.context),m=this.getValueLink(this.props),y=(m.value,[]),b=100/this.getTabCount(),T=this.getTabs().map(function(t,o){return y.push(t.props.children?(0,v.createElement)(c||B.default,{key:o,selected:e.getSelected(t,o),style:d},t.props.children):void 0),(0,v.cloneElement)(t,{key:o,index:o,selected:e.getSelected(t,o),width:b+"%",onTouchTap:e.handleTabTouchTap})}),_=-1!==this.state.selectedIndex?x.default.createElement(E.default,{left:b*this.state.selectedIndex+"%",width:b+"%",style:i}):null,j=u?u.width:"100%";return x.default.createElement("div",(0,a.default)({style:h((0,g.default)({},s))},p),x.default.createElement("div",{style:h((0,g.default)(f.tabItemContainer,u))},T),x.default.createElement("div",{style:{width:j}},_),x.default.createElement("div",{style:h((0,g.default)({},n)),className:o},y))}}]),t}(v.Component);k.defaultProps={initialSelectedIndex:0,onChange:function(){}},k.contextTypes={muiTheme:C.default.object.isRequired},k.propTypes={},t.default=k},"./node_modules/material-ui/Tabs/index.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Tabs=t.Tab=void 0;var l=o("./node_modules/material-ui/Tabs/Tab.js"),i=n(l),a=o("./node_modules/material-ui/Tabs/Tabs.js"),s=n(a);t.Tab=i.default,t.Tabs=s.default,t.default=s.default},"./src/components/AppBar.tsx":function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var l=o("./node_modules/react/react.js"),i=o("./node_modules/material-ui/AppBar/index.js"),a=o("./src/components/commonStyles.ts"),s=o("./src/res/images/ui/app_icon_48.png"),r=function(e){return l.createElement("div",null,l.createElement("div",{style:{position:"relative",top:4}},l.createElement("img",{style:{width:40,display:"block",float:"left",position:"relative",top:6},src:s}),l.createElement("div",{style:{position:"relative",top:-5,left:5}},e)))},u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props,t=e.title,o=e.leftIcon,n=e.onTitleClick,s=e.rightIcon;return l.createElement(i.default,{style:{backgroundColor:"#01579B"},titleStyle:a.appBarTitleStyle,iconStyleLeft:a.appBarIconeStyle,title:r(t),onTitleTouchTap:n,iconElementLeft:o,iconElementRight:s})},t}(l.Component);t.default=u},"./src/components/MainContent.tsx":function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),l=this&&this.__assign||Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++){t=arguments[o];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e};Object.defineProperty(t,"__esModule",{value:!0});var i=o("./node_modules/react/react.js"),a=o("./src/components/Bundle.tsx"),s=o("./node_modules/bundle-loader/index.js?lazy!./src/components/AppRoutes.tsx"),r=o("./node_modules/bundle-loader/index.js?lazy!./src/components/GlobalComponents.tsx"),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=l({},this.props,{basePath:"/"});return i.createElement("div",null,i.createElement(a.default,{load:s},function(t){return t?i.createElement(t,l({},e)):null}),i.createElement(a.default,{load:r},function(e){return e?i.createElement(e,null):null}))},t}(i.Component);t.default=u},"./src/components/commonStyles.ts":function(e,t,o){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++){t=arguments[o];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e};Object.defineProperty(t,"__esModule",{value:!0}),t.PrimaryColor="#D6C502",t.PrimaryColor2="#000000",t.listItemImage={width:"80px",height:"80px"},t.blueBackgroundPage={},t.greyContainer={backgroundColor:"#E0E0E0",padding:"10px 10px 10px 10px"},t.whiteContainer={backgroundColor:"white",padding:"10px 10px 10px 10px"},t.blueContainer={backgroundColor:t.PrimaryColor,padding:"10px 10px 10px 10px",color:"white",textAlign:"center",minHeight:35,position:"relative"},t.titleStyles1={color:t.PrimaryColor,fontWeight:900,padding:15,fontSize:18},t.subtitleStyles1={color:t.PrimaryColor2,fontWeight:700,padding:"0px 15px 0px 15px",fontSize:14},t.titleStyles3={color:t.PrimaryColor,fontWeight:900,padding:"5px 15px 5px 15px",fontSize:18},t.subtitleStyles3={color:t.PrimaryColor2,fontWeight:700,padding:"5px 15px 5px 15px",fontSize:14},t.titleStyles2={color:t.PrimaryColor2,fontWeight:900,fontSize:18,textAlign:"center"},t.titleStylesLeft2=n({},t.titleStyles2,{textAlign:"left"}),t.contentContainer1={margin:"0px auto 0px auto",width:500},t.socialIcons={width:50,marginRight:10},t.fullWidthDialagStyle={width:"100%",maxWidth:"700px"},t.homeFooterDefault={},t.homeFooterAbsolute={position:"absolute",bottom:0},t.appBarTitleStyle={position:"relative",left:-25,top:1},t.appBarIconeStyle={position:"relative",left:-10},t.toolBarContentLeft={position:"absolute",top:0,width:200},t.toolBarContentRight={position:"absolute",right:0,top:0}},"./src/containers/AppBar.tsx":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("./node_modules/react-redux/es/index.js"),l=o("./src/components/AppBar.tsx"),i=function(e,t){return{title:e.view.page.title||t.defaultTitle,leftIcon:t.leftIcon,rightIcon:t.rightIcon}},a=function(e,t){return{}};t.default=n.connect(i,a)(l.default)}});