import React, { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image'

const LogoImage = () => {
    return (
        <Fragment>
            <Link href={'/'} >
                <a style={{display: "flex", justifyContent:"center", flexDirection:"row", textDecoration: "none", color: "#222222"}}>
                  <Image src={'/assets/images/icon/logo/1.jpg'} alt="" width={70} height={70} quality={90}/>
                  <span style={{alignSelf: "center", paddingLeft: "10px", fontSize: "24px"}}>Tiệm Nhà T</span>
                </a>
            </Link>
        </Fragment>
    )
}

export default LogoImage;