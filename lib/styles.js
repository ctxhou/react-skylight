'use strict';

module.exports = {
    wrapperStyle: {
        opacity: '1',
        visibility: 'visible',
        position: 'fixed',
        overflow: 'auto',
        zIndex: '100001',
        transition: 'all 0.3s',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    overlayStyles: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 99,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    dialogStyles: {
        transition: 'all 0.3s',
        display: 'inline-block',
        textAlign: 'left',
        verticalAlign: 'middle',
        backgroundColor: '#fff',
        borderRadius: '3px',
        zIndex: 100,
        position: 'relative',
        boxShadow: '0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)'
    },
    // dialogStyles: {
    //     // width: '50%',
    //     position: 'fixed',
    //     top: '50%',
    //     left: '50%',
    //     marginTop: '-200px',
    //     marginLeft: '-25%',
    //     backgroundColor: '#fff',
    //     borderRadius: '2px',
    //     zIndex: 100,
    //     padding: '10px',
    //     boxShadow: '0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)',
    //     textAlign: 'left'
    // },
    closeButtonStyle: {
        cursor: 'pointer',
        float: 'right',
        fontSize: '1.6em',
        margin: '-15px 0'
    },
    headerStyle: {},
    headerWrapper: {},
    closeButtonStyle: {},
    contentStyle: {
        height: '300px'
    }
};