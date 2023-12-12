import React from 'react';

const EmailTemplate = () => {
    const containerStyle = {
        backgroundColor: '#ffffff',
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    };

    const tableStyle = {
        maxWidth: '38em',
        margin: 'auto',
        width: '800px',
        border: 'none', // Updated to remove the border
    };

    const sectionStyle = {
        padding: '22px 40px',
        backgroundColor: '#F7F7F7',
    };

    const textStyle = {
        fontSize: '14px',
        lineHeight: 2,
        margin: 0,
    };

    const linkStyle = {
        color: '#000',
        textDecoration: 'none',
        border: '1px solid #929292',
        fontSize: '16px',
        padding: '10px 0px',
        width: '220px',
        display: 'block',
        textAlign: 'center',
        fontWeight: 500,
    };

    const hrStyle = {
        width: '100%',
        border: 'none',
        borderTop: '1px solid #eaeaea',
        borderColor: '#E5E5E5',
        margin: 0,
    };

    const imgStyle = {
        display: 'block',
        outline: 'none',
        border: 'none',
        textDecoration: 'none',
        margin: 'auto',
    };

    const h1Style = {
        fontSize: '32px',
        lineHeight: '1.3',
        fontWeight: '700',
        textAlign: 'center',
        letterSpacing: '-1px',
    };

    const pStyle = {
        fontSize: '14px',
        lineHeight: '2',
        margin: 0,
        color: '#747474',
        fontWeight: 500,
        marginTop: '24px',
    };

    const productInfoStyle = {
        fontSize: '14px',
        lineHeight: '2',
        margin: 0,
        color: '#747474',
        fontWeight: 500,
    };

    const orderInfoStyle = {
        fontSize: '14px',
        lineHeight: '1.4',
        margin: '12px 0 0 0',
        fontWeight: 500,
        color: '#6F6F6F',
    };

    const recommendationStyle = {
        fontSize: '15px',
        lineHeight: '1',
        margin: 0,
        padding: '10px',
        fontWeight: 500,
        color: '#747474',
    };

    const topPicksStyle = {
        fontSize: '32px',
        lineHeight: '1.3',
        margin: '16px 0',
        fontWeight: 700,
        textAlign: 'center',
        letterSpacing: '-1px',
    };

    const footerLinkStyle = {
        color: '#000',
        textDecoration: 'none',
        fontWeight: 500,
    };

    const phoneNumberStyle = {
        fontSize: '13.5px',
        lineHeight: '24px',
        margin: '16px 0',
        marginTop: 0,
        fontWeight: 500,
        color: '#000',
        marginBottom: 0,
    };

    const addressStyle = {
        fontSize: '14px',
        lineHeight: '2',
        margin: 0,
        color: '#747474',
        fontWeight: 500,
    };

    const menu = {
        container: {
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingTop: '20px',
            backgroundColor: '#F7F7F7',
        },
        content: {
            paddingLeft: '20px',
            paddingRight: '20px',
        },
        title: {
            paddingLeft: '20px',
            paddingRight: '20px',
            fontWeight: 'bold',
        },
        text: {
            fontSize: '13.5px',
            marginTop: 0,
            fontWeight: 500,
            color: '#000',
        },
        tel: {
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingTop: '32px',
            paddingBottom: '22px',
        },
    };

    const categories = {
        container: {
            width: '370px',
            margin: 'auto',
            paddingTop: '12px',
        },
        text: {
            fontWeight: '500',
            color: '#000',
        },
    };

    const footer = {
        policy: {
            width: '166px',
            margin: 'auto',
        },
        text: {
            margin: '0',
            color: '#AFAFAF',
            fontSize: '13px',
            textAlign: 'center',
        }
    };

    return (
        <>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <html lang="en">
                <body style={containerStyle}>
                    <table
                        align="center"
                        role="presentation"
                        cellSpacing="0"
                        cellPadding="0"
                        border="0"
                        width="100%"
                        style={tableStyle}
                    >
                        <tr style={{ width: '100%' }}>
                            <td>
                                <table
                                    style={sectionStyle}
                                    align="center"
                                    border="0"
                                    cellPadding="0"
                                    cellSpacing="0"
                                    role="presentation"
                                    width="100%"
                                >
                                    <tbody>
                                        <tr>
                                            <td>
                                                <br></br>
                                                <table
                                                    width="100%"
                                                    align="center"
                                                    role="presentation"
                                                    cellSpacing="0"
                                                    cellPadding="0"
                                                    border="0"
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <p style={textStyle}>Tracking Number</p>
                                                                <p style={{ ...textStyle, fontWeight: 500, color: '#6F6F6F', marginTop: '12px' }}>
                                                                    1ZV218970300071628
                                                                </p>
                                                            </td>
                                                            <td align="right">
                                                                <a target="_blank" style={linkStyle}>
                                                                    Track Package
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr style={hrStyle} />
                                <div style={containerStyle}>
                                    <table
                                        style={tableStyle}
                                        align="center"
                                        border="0"
                                        cellPadding="0"
                                        cellSpacing="0"
                                        role="presentation"
                                        width="100%"
                                    >
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <br></br>
                                                    <h1 style={h1Style}>It's On Its Way.</h1>
                                                    <p style={pStyle}>Your order is on its way. Use the link above to track its progress.</p>
                                                    <p style={pStyle}>
                                                        We've also charged your payment method for the cost of your order and will be removing any
                                                        authorization holds. For payment details, please visit your Orders page on Nike.com or in
                                                        the Nike app.
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <hr style={hrStyle} />
                                <br></br>
                                <table
                                    style={tableStyle}
                                    align="center"
                                    border="0"
                                    cellPadding="0"
                                    cellSpacing="0"
                                    role="presentation"
                                    width="100%"
                                >
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p style={textStyle}>Shipping to: Zeno Rocha</p>
                                                <p style={addressStyle}>2125 Chestnut St, San Francisco, CA 94123</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr style={{ width: '100%', border: 'none', borderTop: '1px solid #eaeaea', borderColor: '#E5E5E5', margin: '0' }} />
                                <table style={{ paddingLeft: '40px', paddingRight: '40px', paddingTop: '40px', paddingBottom: '40px' }} align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table width="100%" align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                                                    <tbody style={{ width: '100%' }}>
                                                        <tr style={{ width: '100%' }}>
                                                            <td><img alt="Brazil 2022/23 Stadium Away Women's Nike Dri-FIT Soccer Jersey" src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/nike-product.png" width="260px" style={{ display: 'block', outline: 'none', border: 'none', textDecoration: 'none', float: 'left' }} /></td>
                                                            <td style={{ verticalAlign: 'top', paddingLeft: '12px' }}>
                                                                <p style={{ fontSize: '14px', lineHeight: '2', margin: '0', fontWeight: '500' }}>Brazil 2022/23 Stadium Away Women's Nike Dri-FIT Soccer Jersey</p>
                                                                <p style={{ fontSize: '14px', lineHeight: '2', margin: '0', color: '#747474', fontWeight: '500' }}>Size L (12–14)</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr style={{ width: '100%', border: 'none', borderTop: '1px solid #eaeaea', borderColor: '#E5E5E5', margin: '0' }} />
                                <table style={{ paddingLeft: '40px', paddingRight: '40px', paddingTop: '22px', paddingBottom: '22px' }} align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table width="100%" style={{ display: 'inline-flex', marginBottom: '40px' }} align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                                                    <tbody style={{ width: '100%' }}>
                                                        <tr style={{ width: '100%' }}>
                                                            <td style={{ width: '170px' }}>
                                                                <p style={{ fontSize: '14px', lineHeight: '2', margin: '0', fontWeight: 'bold' }}>Order Number</p>
                                                                <p style={{ fontSize: '14px', lineHeight: '1.4', margin: '12px 0 0 0', fontWeight: '500', color: '#6F6F6F' }}>C0106373851</p>
                                                            </td>
                                                            <td>
                                                                <p style={{ fontSize: '14px', lineHeight: '2', margin: '0', fontWeight: 'bold' }}>Order Date</p>
                                                                <p style={{ fontSize: '14px', lineHeight: '1.4', margin: '12px 0 0 0', fontWeight: '500', color: '#6F6F6F' }}>Sep 22, 2022</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table width="100%" align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                                                    <tbody style={{ width: '100%' }}>
                                                        <tr style={{ width: '100%' }}>
                                                            <td align="center"><a target="_blank" style={{ color: '#000', textDecoration: 'none', border: '1px solid #929292', fontSize: '16px', padding: '10px 0px', width: '220px', display: 'block', textAlign: 'center', fontWeight: '500' }}>Order Status</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr style={{ width: '100%', border: 'none', borderTop: '1px solid #eaeaea', borderColor: '#E5E5E5', margin: '0' }} />
                                <table style={{ paddingTop: '22px', paddingBottom: '22px' }} align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p style={{ fontSize: '32px', lineHeight: '1.3', margin: '16px 0', fontWeight: '700', textAlign: 'center', letterSpacing: '-1px' }}>Top Picks For You</p>
                                                <table width="100%" style={{ padding: '20px 0' }} align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                                                    <tbody style={{ width: '100%' }}>
                                                        <tr style={{ width: '100%' }}>
                                                            <td align="center" style={{ verticalAlign: 'top', textAlign: 'left', paddingLeft: '4px', paddingRight: '2px' }}>
                                                                <img alt="USWNT 2022/23 Stadium Home" src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/nike-recomendation-1.png" width="100%" style={{ display: 'block', outline: 'none', border: 'none', textDecoration: 'none' }} />
                                                                <p style={{ fontSize: '15px', lineHeight: '1', margin: '0', paddingLeft: '10px', paddingRight: '10px', paddingTop: '12px', fontWeight: '500' }}>USWNT 2022/23 Stadium Home</p>
                                                                <p style={{ fontSize: '15px', lineHeight: '1', margin: '0', paddingLeft: '10px', paddingRight: '10px', paddingTop: '4px', color: '#747474' }}>Women's Nike Dri-FIT Soccer Jersey</p>
                                                            </td>
                                                            <td align="center" style={{ verticalAlign: 'top', textAlign: 'left', paddingLeft: '4px', paddingRight: '2px' }}>
                                                                <img alt="USWNT 2022/23 Stadium Home" src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/nike-recomendation-1.png" width="100%" style={{ display: 'block', outline: 'none', border: 'none', textDecoration: 'none' }} />
                                                                <p style={{ fontSize: '15px', lineHeight: '1', margin: '0', paddingLeft: '10px', paddingRight: '10px', paddingTop: '12px', fontWeight: '500' }}>USWNT 2022/23 Stadium Home</p>
                                                                <p style={{ fontSize: '15px', lineHeight: '1', margin: '0', paddingLeft: '10px', paddingRight: '10px', paddingTop: '4px', color: '#747474' }}>Women's Nike Dri-FIT Soccer Jersey</p>
                                                            </td>
                                                            <td align="center" style={{ verticalAlign: 'top', textAlign: 'left', paddingLeft: '4px', paddingRight: '2px' }}>
                                                                <img alt="USWNT 2022/23 Stadium Home" src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/nike-recomendation-1.png" width="100%" style={{ display: 'block', outline: 'none', border: 'none', textDecoration: 'none' }} />
                                                                <p style={{ fontSize: '15px', lineHeight: '1', margin: '0', paddingLeft: '10px', paddingRight: '10px', paddingTop: '12px', fontWeight: '500' }}>USWNT 2022/23 Stadium Home</p>
                                                                <p style={{ fontSize: '15px', lineHeight: '1', margin: '0', paddingLeft: '10px', paddingRight: '10px', paddingTop: '4px', color: '#747474' }}>Women's Nike Dri-FIT Soccer Jersey</p>
                                                            </td>
                                                            <td align="center" style={{ verticalAlign: 'top', textAlign: 'left', paddingLeft: '4px', paddingRight: '2px' }}>
                                                                <img alt="USWNT 2022/23 Stadium Home" src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/nike-recomendation-1.png" width="100%" style={{ display: 'block', outline: 'none', border: 'none', textDecoration: 'none' }} />
                                                                <p style={{ fontSize: '15px', lineHeight: '1', margin: '0', paddingLeft: '10px', paddingRight: '10px', paddingTop: '12px', fontWeight: '500' }}>USWNT 2022/23 Stadium Home</p>
                                                                <p style={{ fontSize: '15px', lineHeight: '1', margin: '0', paddingLeft: '10px', paddingRight: '10px', paddingTop: '4px', color: '#747474' }}>Women's Nike Dri-FIT Soccer Jersey</p>
                                                            </td>
                                                            {/* Repeat the above structure for the remaining three items */}
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr style={{ width: '100%', border: 'none', borderTop: '1px solid #eaeaea', borderColor: '#E5E5E5', margin: '0' }} />
                                <table style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', backgroundColor: '#F7F7F7' }} align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p style={{ fontSize: '14px', lineHeight: '24px', margin: '16px 0', paddingLeft: '20px', paddingRight: '20px', fontWeight: 'bold' }}>Get Help</p>
                                                <table width="100%" style={{ paddingTop: '22px', paddingBottom: '22px', paddingLeft: '20px', paddingRight: '20px' }} align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                                                    <tbody style={{ width: '100%' }}>
                                                        <tr style={{ width: '100%' }}>
                                                            <td colSpan="1" style={{ width: '33%' }}>
                                                                <a target="_blank" style={{ color: '#000', textDecoration: 'none', fontSize: '13.5px', marginTop: '0', fontWeight: '500' }} href="/">Shipping Status</a>
                                                            </td>
                                                            <td colSpan="1" style={{ width: '33%' }}>
                                                                <a target="_blank" style={{ color: '#000', textDecoration: 'none', fontSize: '13.5px', marginTop: '0', fontWeight: '500' }} href="/">Shipping &amp; Delivery</a>
                                                            </td>
                                                            <td colSpan="1" style={{ width: '33%' }}>
                                                                <a target="_blank" style={{ color: '#000', textDecoration: 'none', fontSize: '13.5px', marginTop: '0', fontWeight: '500' }} href="/">Returns &amp; Exchanges</a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table width="100%" style={{ paddingTop: '0', paddingBottom: '22px', paddingLeft: '20px', paddingRight: '20px' }} align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                                                    <tbody style={{ width: '100%' }}>
                                                        <tr style={{ width: '100%' }}>
                                                            <td colSpan="1" style={{ width: '33%' }}>
                                                                <a target="_blank" style={{ color: '#000', textDecoration: 'none', fontSize: '13.5px', marginTop: '0', fontWeight: '500' }} href="/">How to Return</a>
                                                            </td>
                                                            <td colSpan="2" style={{ width: '66%' }}>
                                                                <a target="_blank" style={{ color: '#000', textDecoration: 'none', fontSize: '13.5px', marginTop: '0', fontWeight: '500' }} href="/">Contact Options</a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <hr style={{ width: '100%', border: 'none', borderTop: '1px solid #eaeaea', borderColor: '#E5E5E5', margin: '0' }} />
                                                <table width="100%" style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '32px', paddingBottom: '22px' }} align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                                                    <tbody style={{ width: '100%' }}>
                                                        <tr style={{ width: '100%' }}>
                                                            <td>
                                                                <table width="100%" align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                                                                    <tbody style={{ width: '100%' }}>
                                                                        <tr style={{ width: '100%' }}>
                                                                            <td style={{ width: '16px' }}>
                                                                                <img src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/nike-phone.png" width="16px" height="26px" style={{ display: 'block', outline: 'none', border: 'none', textDecoration: 'none', paddingRight: '14px' }} />
                                                                            </td>
                                                                            <td>
                                                                                <p style={{ fontSize: '13.5px', lineHeight: '24px', margin: '16px 0', marginTop: '0', fontWeight: '500', color: '#000', marginBottom: '0' }}>1-800-806-6453</p>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td>
                                                                <p style={{ fontSize: '13.5px', lineHeight: '24px', margin: '16px 0', marginTop: '0', fontWeight: '500', color: '#000', marginBottom: '0' }}>4 am - 11 pm PT</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr style={{ width: '100%', border: 'none', borderTop: '1px solid #eaeaea', borderColor: '#E5E5E5', margin: '0' }} />

                                {/* Navigation Section */}
                                <table style={{ paddingTop: '22px', paddingBottom: '22px' }} align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p style={{ fontSize: '32px', lineHeight: '1.3', margin: '16px 0', fontWeight: '700', textAlign: 'center', letterSpacing: '-1px' }}>Nike.com</p>
                                                <table width="100%" style={{ width: '370px', margin: 'auto', paddingTop: '12px' }} align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                                                    <tbody style={{ width: '100%' }}>
                                                        <tr style={{ width: '100%' }}>
                                                            <td align="center"><a target="_blank" style={{ color: '#000', textDecoration: 'none', fontWeight: '500' }} href="/">Men</a></td>
                                                            <td align="center"><a target="_blank" style={{ color: '#000', textDecoration: 'none', fontWeight: '500' }} href="/">Women</a></td>
                                                            <td align="center"><a target="_blank" style={{ color: '#000', textDecoration: 'none', fontWeight: '500' }} href="/">Kids</a></td>
                                                            <td align="center"><a target="_blank" style={{ color: '#000', textDecoration: 'none', fontWeight: '500' }} href="/">Customize</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <hr style={{ width: '100%', border: 'none', borderTop: '1px solid #eaeaea', borderColor: '#E5E5E5', margin: '0', marginTop: '12px' }} />

                                {/* Footer Section */}
                                <table style={{ paddingTop: '22px', paddingBottom: '22px' }} align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table width="100%" style={{ width: '166px', margin: 'auto' }} align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                                                    <tbody style={{ width: '100%' }}>
                                                        <tr style={{ width: '100%' }}>
                                                            <td>
                                                                <p style={{ fontSize: '13px', lineHeight: '24px', margin: '0', color: '#AFAFAF', textAlign: 'center' }}>Web Version</p>
                                                            </td>
                                                            <td>
                                                                <p style={{ fontSize: '13px', lineHeight: '24px', margin: '0', color: '#AFAFAF', textAlign: 'center' }}>Privacy Policy</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <p style={{ fontSize: '13px', lineHeight: '24px', margin: '0', color: '#AFAFAF', textAlign: 'center', paddingTop: '30px', paddingBottom: '30px' }}>Please contact us if you have any questions. (If you reply to this email, we won't be able to see it.)</p>
                                                <p style={{ fontSize: '13px', lineHeight: '24px', margin: '0', color: '#AFAFAF', textAlign: 'center' }}>© 2022 Nike, Inc. All Rights Reserved.</p>
                                                <p style={{ fontSize: '13px', lineHeight: '24px', margin: '0', color: '#AFAFAF', textAlign: 'center' }}>NIKE, INC. One Bowerman Drive, Beaverton, Oregon 97005, USA.</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
            </html>
        </>
    );
};

export default EmailTemplate;
