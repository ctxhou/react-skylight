var React = require('react');
var styles = require('./styles');
var classNames = require('./classNames');
var extend = require('util')._extend;

var SkyLight = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        showOverlay: React.PropTypes.bool,
        beforeOpen: React.PropTypes.func,
        afterOpen: React.PropTypes.func,
        beforeClose: React.PropTypes.func,
        afterClose: React.PropTypes.func,
        overlayStyles: React.PropTypes.object,
        dialogStyles: React.PropTypes.object,
        closeButtonStyle: React.PropTypes.object,
        onOverlayClick: React.PropTypes.func
    },
    getDefaultProps: function () {
        return {
            title: '',
            showOverlay: true,
            overlayStyles: styles.overlayStyles,
            dialogStyles: styles.dialogStyles,
            closeButtonStyle: styles.closeButtonStyle
        }
    },
    getInitialState: function () {
        return {
            isVisible: true
        };
    },
    show: function () {
        this.setState({isVisible: true});
    },
    hide: function () {
        this.setState({isVisible: false});
    },

    onOverlayClick: function() {
        this.props.onOverlayClick ? this.props.onOverlayClick() : this.props.afterClose();
    },
    componentWillUpdate: function (nextProps, nextState) {
        if (nextState.isVisible && !this.state.isVisible && this.props.beforeOpen) {
            this.props.beforeOpen();
        }

        if (!nextState.isVisible && this.state.isVisible && this.props.beforeClose) {
            this.props.beforeClose();
        }
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (!prevState.isVisible && this.state.isVisible && this.props.afterOpen) {
            this.props.afterOpen();
        }

        if (prevState.isVisible && !this.state.isVisible && this.props.afterClose) {
            this.props.afterClose();
        }

        document.body.style.overflow = 'hidden';
        // adjust height with the children height
    },

    componentWillUnmount: function() {
        document.body.style.overflow = 'auto';
    },

    render: function () {

        var overlay;
        var wrapperStyle = {
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          margin: 'auto',
          zIndex: 100,
          overflow: 'hidden'
        }
        // style
        var dialogStyles = extend(styles.dialogStyles, this.props.dialogStyles);
        var overlayStyles = extend(styles.overlayStyles, this.props.overlayStyles);
        var closeButtonStyle = extend(styles.closeButtonStyle, this.props.closeButtonStyle);
        var headerWrapper = extend(styles.headerWrapper, this.props.headerWrapper);
        var headerStyle = extend(styles.headerStyle, this.props.headerStyle);
        var contentStyle = this.props.contentStyle || styles.contentStyle;
        var wrapperStyle = extend(styles.wrapperStyle || this.props.wrapperStyle);
        // className
        var closeBtnClass = extend(classNames.closeBtnClass, this.props.closeBtnClass);

        if (this.state.isVisible) {
            overlayStyles.display = 'block';
            dialogStyles.display = 'inline-block';
        } else {
            overlayStyles.display = 'none';
            dialogStyles.display = 'none';
        }

        if (this.props.showOverlay) {
            overlay = (<div onClick={this.onOverlayClick} style={overlayStyles}></div>);
        }
        
        return (
            <div>
                {overlay}
                <section style={wrapperStyle}>
                    <div style={dialogStyles}>
                        <div style={headerWrapper}>
                            <div style={headerStyle}>{this.props.title}</div>
                            <a role="button" className={closeBtnClass} style={closeButtonStyle} onClick={this.hide}>&times;</a>
                        </div>
                        <div style={contentStyle}>
                            {this.props.children}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
});

module.exports = SkyLight;
