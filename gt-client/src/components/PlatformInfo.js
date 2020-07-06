import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import android from '../img/android.png';
import colecovision from '../img/colecovision.png';
import dreamcast from '../img/dc.png';
import dos from '../img/dos.png';
import html5 from '../img/html5.png';
import ios from '../img/ios.png';
import linux from '../img/linux.png';
import n64 from '../img/n64.png';
import ps2 from '../img/ps2.png';
import stadia from '../img/stadia.png';
import steam from '../img/steam.png';
import nswitch from '../img/switch.png';
import wiiu from '../img/wiiu.png';
import win from '../img/win.png';
import xbox from '../img/xbox.png';

const logoList = {
  'xbox-series-x':xbox,
  'win':win,
  'stadia--1':stadia,
  'colecovision':colecovision,
  'steam-vr':steam,
  'stadia':stadia,
  'playstation-vr':ps2,
  'ios':ios,
  'xbox':xbox,
  'psn':ps2,
  'psvita':ps2,
  'switch':nswitch,
  'dos':dos,
  'dc':dreamcast,
  'wiiu':wiiu,
  'playstation-5':ps2,
  'n64':n64,
  'browser':html5,
  'mac':ios,
  'ps3':ps2,
  'xbox360':xbox,
  'psp':ps2,
  'android':android,
  'xboxone':xbox,
  'ps4--1':ps2,
  'linux':linux,
  'ps':ps2,
  'steam--1':steam
}

const PlatformItem = styled.div`
  display:inline-block;
  margin-right:10px;
  margin-bottom:5px;
`;

const PlatformInfo = (props) => {
  const [logo,setLogo] = useState();
  const [size,setSize] = useState(16);

  useEffect(() => {
    if (logoList[props.platform.slug]){
      setLogo(logoList[props.platform.slug]);
    }
    if (props.size){
      setSize(props.size);
    }
  },[props.platform])

  return(
    <PlatformItem style={{fontSize:'12px'}}>
      {logo && <img src={logo} height={size} />} {props.platform.abbreviation}
    </PlatformItem>
  )
}

export default PlatformInfo;