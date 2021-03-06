import { useState } from 'react';
import './App.css';
import Axios from 'axios'

function App() {
  const can = ()=> {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d'); 
    var txt = 'HELLO This is canvas by Olysyan'; 
    ctx.textBaseline = "top"; 
    ctx.font = "14px 'Arial'"; 
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#f60"; 
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = "#069"; 
    ctx.fillText(txt, 2, 15);   
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)"; 
    ctx.fillText(txt, 4, 17); 
    return canvas.toDataURL(); 
  }
  const text = ()=> {
    "use strict";
    var strOnError, style, fonts, count, template, fragment, divs, i, font, div, body, result, e;
    strOnError = "Error";
    style = null;
    fonts = null;
    font = null;
    count = 0;
    template = null;
    divs = null;
    e = null;
    div = null;
    body = null;
    i = 0;
    try {
        style = "position: absolute; visibility: hidden; display: block !important";
        fonts = ["Abadi MT Condensed Light", "Adobe Fangsong Std", "Adobe Hebrew", "Adobe Ming Std", "Agency FB", "Aharoni", "Andalus", "Angsana New", "AngsanaUPC", "Aparajita", "Arab", "Arabic Transparent", "Arabic Typesetting", "Arial Baltic", "Arial Black", "Arial CE", "Arial CYR", "Arial Greek", "Arial TUR", "Arial", "Batang", "BatangChe", "Bauhaus 93", "Bell MT", "Bitstream Vera Serif", "Bodoni MT", "Bookman Old Style", "Braggadocio", "Broadway", "Browallia New", "BrowalliaUPC", "Calibri Light", "Calibri", "Californian FB", "Cambria Math", "Cambria", "Candara", "Castellar", "Casual", "Centaur", "Century Gothic", "Chalkduster", "Colonna MT", "Comic Sans MS", "Consolas", "Constantia", "Copperplate Gothic Light", "Corbel", "Cordia New", "CordiaUPC", "Courier New Baltic", "Courier New CE", "Courier New CYR", "Courier New Greek", "Courier New TUR", "Courier New", "DFKai-SB", "DaunPenh", "David", "DejaVu LGC Sans Mono", "Desdemona", "DilleniaUPC", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Engravers MT", "Eras Bold ITC", "Estrangelo Edessa", "EucrosiaUPC", "Euphemia", "Eurostile", "FangSong", "Forte", "FrankRuehl", "Franklin Gothic Heavy", "Franklin Gothic Medium", "FreesiaUPC", "French Script MT", "Gabriola", "Gautami", "Georgia", "Gigi", "Gisha", "Goudy Old Style", "Gulim", "GulimChe", "GungSeo", "Gungsuh", "GungsuhChe", "Haettenschweiler", "Harrington", "Hei S", "HeiT", "Heisei Kaku Gothic", "Hiragino Sans GB", "Impact", "Informal Roman", "IrisUPC", "Iskoola Pota", "JasmineUPC", "KacstOne", "KaiTi", "Kalinga", "Kartika", "Khmer UI", "Kino MT", "KodchiangUPC", "Kokila", "Kozuka Gothic Pr6N", "Lao UI", "Latha", "Leelawadee", "Levenim MT", "LilyUPC", "Lohit Gujarati", "Loma", "Lucida Bright", "Lucida Console", "Lucida Fax", "Lucida Sans Unicode", "MS Gothic", "MS Mincho", "MS PGothic", "MS PMincho", "MS Reference Sans Serif", "MS UI Gothic", "MV Boli", "Magneto", "Malgun Gothic", "Mangal", "Marlett", "Matura MT Script Capitals", "Meiryo UI", "Meiryo", "Menlo", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU-ExtB", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "Miriam Fixed", "Miriam", "Mongolian Baiti", "MoolBoran", "NSimSun", "Narkisim", "News Gothic MT", "Niagara Solid", "Nyala", "PMingLiU", "PMingLiU-ExtB", "Palace Script MT", "Palatino Linotype", "Papyrus", "Perpetua", "Plantagenet Cherokee", "Playbill", "Prelude Bold", "Prelude Condensed Bold", "Prelude Condensed Medium", "Prelude Medium", "PreludeCompressedWGL Black", "PreludeCompressedWGL Bold", "PreludeCompressedWGL Light", "PreludeCompressedWGL Medium", "PreludeCondensedWGL Black", "PreludeCondensedWGL Bold", "PreludeCondensedWGL Light", "PreludeCondensedWGL Medium", "PreludeWGL Black", "PreludeWGL Bold", "PreludeWGL Light", "PreludeWGL Medium", "Raavi", "Rachana", "Rockwell", "Rod", "Sakkal Majalla", "Sawasdee", "Script MT Bold", "Segoe Print", "Segoe Script", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Segoe UI", "Shonar Bangla", "Showcard Gothic", "Shruti", "SimHei", "SimSun", "SimSun-ExtB", "Simplified Arabic Fixed", "Simplified Arabic", "Snap ITC", "Sylfaen", "Symbol", "Tahoma", "Times New Roman Baltic", "Times New Roman CE", "Times New Roman CYR", "Times New Roman Greek", "Times New Roman TUR", "Times New Roman", "TlwgMono", "Traditional Arabic", "Trebuchet MS", "Tunga", "Tw Cen MT Condensed Extra Bold", "Ubuntu", "Umpush", "Univers", "Utopia", "Utsaah", "Vani", "Verdana", "Vijaya", "Vladimir Script", "Vrinda", "Webdings", "Wide Latin", "Wingdings"];
        count = fonts.length;
        template = '<b style="display:inline !important; width:auto !important; font:normal 10px/1 \'X\',sans-serif !important">ww</b>' + '<b style="display:inline !important; width:auto !important; font:normal 10px/1 \'X\',monospace !important">ww</b>';
        fragment = document.createDocumentFragment();
        divs = [];
        for (i = 0; i < count; i = i + 1) {
            font = fonts[i];
            div = document.createElement('div');
            font = font.replace(/['"<>]/g, '');
            div.innerHTML = template.replace(/X/g, font);
            div.style.cssText = style;
            fragment.appendChild(div);
            divs.push(div);
        }
        body = document.body;
        body.insertBefore(fragment, body.firstChild);
        result = [];
        for (i = 0; i < count; i = i + 1) {
            e = divs[i].getElementsByTagName('b');
            if (e[0].offsetWidth === e[1].offsetWidth) {
                result.push(fonts[i]);
            }}
        for (i = 0; i < count; i = i + 1) {
            body.removeChild(divs[i]);}
        return result.join('|');
    } catch (err) {
        return strOnError;
    }
}

  const [name,setName]=useState("")
  const [pass,setReview]=useState("")
  const [loginStatus,setloginStatus]=useState("")
  const H = window.screen.height;
  const W = window.screen.width;
  const ru = navigator.userAgent;
  const g = window.navigator.languages;
  const i = Date();    
  const session = can();
  const tex = text()
  const scr = window.screen.colorDepth
  const oi= window.navigator.activeVRDisplays
  
  // const hash1=f(String(H)+g+String(W)+String(scr)+ru)


  const login= ()=>{
    Axios.post('http://localhost:3001/login',{email: name,
    pass: pass
  }).then((response)=>{if (response.data.message){
    setloginStatus(response.data.message)
  }else{
    setloginStatus(response.data[0].name)
  }})
  }
  const submit=()=>{
    Axios.post('http://localhost:3001/auth',{email: name,
    pass: pass
  }).then((response)=>{console.log(response.data)})
    Axios.post('http://localhost:3001/fingerprint',{email: name,
    H: H,
    W: W,
    ru: ru,
    g: g,
    i:i,

    pass: pass,
    session: session,
    scr: scr,
    tex: tex,
    oi: oi
    }).then(()=>{
    alert("insert");
  })
  };
  
  return (
    <div className="App">
      <h1>Login</h1>
      <h1>{loginStatus}</h1>
      <div className="form">
      <input type="text" name="email"
      onChange={(e)=>{setName(e.target.value);}}/>
      <input type="text" name="pass"
      onChange={(e)=>{setReview(e.target.value)}}/>
      <button onClick={login}>login</button>
      <button onClick={submit}>register</button>
      </div>

    </div>
  );
}

export default App;
