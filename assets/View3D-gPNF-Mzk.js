import{r as Ye,g as Dx,j as vt,F as Ux,u as Nx,a as Br}from"./index-T7YraGQf.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qa="169",ps={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tv=0,zd=1,Av=2,Ox=3,bv=0,Qu=1,Ma=2,Ei=3,mr=0,Hn=1,ki=2,pr=0,ws=1,kd=2,Hd=3,Vd=4,Cv=5,zr=100,Rv=101,Pv=102,Iv=103,Lv=104,Dv=200,Uv=201,Nv=202,Ov=203,uu=204,hu=205,Fv=206,Bv=207,zv=208,kv=209,Hv=210,Vv=211,Gv=212,Wv=213,Xv=214,fu=0,du=1,pu=2,Rs=3,mu=4,gu=5,vu=6,_u=7,$a=0,Yv=1,qv=2,Wi=0,Zv=1,jv=2,Jv=3,sp=4,Kv=5,Qv=6,$v=7,Gd="attached",e_="detached",$u=300,gr=301,Hr=302,La=303,Da=304,No=306,Ua=1e3,gi=1001,Na=1002,vn=1003,op=1004,Fx=1004,Mo=1005,Bx=1005,an=1006,wa=1007,zx=1007,Vi=1008,kx=1008,Ai=1009,ap=1010,lp=1011,Ro=1012,eh=1013,vr=1014,Zn=1015,Oo=1016,th=1017,nh=1018,Ps=1020,cp=35902,up=1021,hp=1022,In=1023,fp=1024,dp=1025,Es=1026,Is=1027,ih=1028,el=1029,pp=1030,rh=1031,Hx=1032,sh=1033,Ea=33776,Ta=33777,Aa=33778,ba=33779,yu=35840,xu=35841,Su=35842,Mu=35843,wu=36196,Eu=37492,Tu=37496,Au=37808,bu=37809,Cu=37810,Ru=37811,Pu=37812,Iu=37813,Lu=37814,Du=37815,Uu=37816,Nu=37817,Ou=37818,Fu=37819,Bu=37820,zu=37821,Ca=36492,ku=36494,Hu=36495,mp=36283,Vu=36284,Gu=36285,Wu=36286,t_=2200,n_=2201,i_=2202,Oa=2300,Xu=2301,ou=2302,ys=2400,xs=2401,Fa=2402,oh=2500,gp=2501,Vx=0,Gx=1,Wx=2,r_=3200,s_=3201,Xx=3202,Yx=3203,Gr=0,o_=1,hr="",mi="srgb",yr="srgb-linear",ah="display-p3",tl="display-p3-linear",Ba="linear",Vt="srgb",za="rec709",ka="p3",qx=0,gs=7680,Zx=7681,jx=7682,Jx=7683,Kx=34055,Qx=34056,$x=5386,eS=512,tS=513,nS=514,iS=515,rS=516,sS=517,oS=518,Wd=519,a_=512,l_=513,c_=514,vp=515,u_=516,h_=517,f_=518,d_=519,Ha=35044,aS=35048,lS=35040,cS=35045,uS=35049,hS=35041,fS=35046,dS=35050,pS=35042,mS="100",Xd="300 es",Gi=2e3,Va=2001;let qi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}};const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ig=1234567;const Ts=Math.PI/180,Po=180/Math.PI;function ri(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]).toLowerCase()}function Kt(r,e,t){return Math.max(e,Math.min(t,r))}function _p(r,e){return(r%e+e)%e}function gS(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function vS(r,e,t){return r!==e?(t-r)/(e-r):0}function Ra(r,e,t){return(1-t)*r+t*e}function _S(r,e,t,n){return Ra(r,e,1-Math.exp(-t*n))}function yS(r,e=1){return e-Math.abs(_p(r,e*2)-e)}function xS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function SS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function MS(r,e){return r+Math.floor(Math.random()*(e-r+1))}function wS(r,e){return r+Math.random()*(e-r)}function ES(r){return r*(.5-Math.random())}function TS(r){r!==void 0&&(Ig=r);let e=Ig+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function AS(r){return r*Ts}function bS(r){return r*Po}function CS(r){return(r&r-1)===0&&r!==0}function RS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function PS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function IS(r,e,t,n,i){const s=Math.cos,a=Math.sin,c=s(t/2),u=a(t/2),h=s((e+n)/2),f=a((e+n)/2),p=s((e-n)/2),m=a((e-n)/2),g=s((n-e)/2),y=a((n-e)/2);switch(i){case"XYX":r.set(c*f,u*p,u*m,c*h);break;case"YZY":r.set(u*m,c*f,u*p,c*h);break;case"ZXZ":r.set(u*p,u*m,c*f,c*h);break;case"XZX":r.set(c*f,u*y,u*g,c*h);break;case"YXY":r.set(u*g,c*f,u*y,c*h);break;case"ZYZ":r.set(u*y,u*g,c*f,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function kn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function mt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const p_={DEG2RAD:Ts,RAD2DEG:Po,generateUUID:ri,clamp:Kt,euclideanModulo:_p,mapLinear:gS,inverseLerp:vS,lerp:Ra,damp:_S,pingpong:yS,smoothstep:xS,smootherstep:SS,randInt:MS,randFloat:wS,randFloatSpread:ES,seededRandom:TS,degToRad:AS,radToDeg:bS,isPowerOfTwo:CS,ceilPowerOfTwo:RS,floorPowerOfTwo:PS,setQuaternionFromProperEuler:IS,normalize:mt,denormalize:kn};class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,n,i,s,a,c,u,h){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,c,u,h)}set(e,t,n,i,s,a,c,u,h){const f=this.elements;return f[0]=e,f[1]=i,f[2]=c,f[3]=t,f[4]=s,f[5]=u,f[6]=n,f[7]=a,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],c=n[3],u=n[6],h=n[1],f=n[4],p=n[7],m=n[2],g=n[5],y=n[8],M=i[0],x=i[3],_=i[6],E=i[1],w=i[4],b=i[7],U=i[2],P=i[5],L=i[8];return s[0]=a*M+c*E+u*U,s[3]=a*x+c*w+u*P,s[6]=a*_+c*b+u*L,s[1]=h*M+f*E+p*U,s[4]=h*x+f*w+p*P,s[7]=h*_+f*b+p*L,s[2]=m*M+g*E+y*U,s[5]=m*x+g*w+y*P,s[8]=m*_+g*b+y*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],f=e[8];return t*a*f-t*c*h-n*s*f+n*c*u+i*s*h-i*a*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=f*a-c*h,m=c*u-f*s,g=h*s-a*u,y=t*p+n*m+i*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/y;return e[0]=p*M,e[1]=(i*h-f*n)*M,e[2]=(c*n-i*a)*M,e[3]=m*M,e[4]=(f*t-i*u)*M,e[5]=(i*s-c*t)*M,e[6]=g*M,e[7]=(n*u-h*t)*M,e[8]=(a*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,c){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*a+h*c)+a+e,-i*h,i*u,-i*(-h*a+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(zf.makeScale(e,t)),this}rotate(e){return this.premultiply(zf.makeRotation(-e)),this}translate(e,t){return this.premultiply(zf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zf=new pt;function m_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const LS={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function wo(r,e){return new LS[r](e)}function Ga(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function g_(){const r=Ga("canvas");return r.style.display="block",r}const Lg={};function au(r){r in Lg||(Lg[r]=!0,console.warn(r))}function DS(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function US(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function NS(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Dg=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ug=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),sa={[yr]:{transfer:Ba,primaries:za,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[mi]:{transfer:Vt,primaries:za,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[tl]:{transfer:Ba,primaries:ka,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Ug),fromReference:r=>r.applyMatrix3(Dg)},[ah]:{transfer:Vt,primaries:ka,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Ug),fromReference:r=>r.applyMatrix3(Dg).convertLinearToSRGB()}},OS=new Set([yr,tl]),Ot={enabled:!0,_workingColorSpace:yr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!OS.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=sa[e].toReference,i=sa[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return sa[r].primaries},getTransfer:function(r){return r===hr?Ba:sa[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(sa[e].luminanceCoefficients)}};function Co(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function kf(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let $s;class v_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$s===void 0&&($s=Ga("canvas")),$s.width=e.width,$s.height=e.height;const n=$s.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=$s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ga("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Co(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Co(t[n]/255)*255):t[n]=Co(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FS=0;class Ss{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=ri(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,c=i.length;a<c;a++)i[a].isDataTexture?s.push(Hf(i[a].image)):s.push(Hf(i[a]))}else s=Hf(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Hf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?v_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BS=0;class Qt extends qi{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,n=gi,i=gi,s=an,a=Vi,c=In,u=Ai,h=Qt.DEFAULT_ANISOTROPY,f=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=ri(),this.name="",this.source=new Ss(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$u)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ua:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case Na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ua:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case Na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=$u;Qt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,n=0,i=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,h=u[0],f=u[4],p=u[8],m=u[1],g=u[5],y=u[9],M=u[2],x=u[6],_=u[10];if(Math.abs(f-m)<.01&&Math.abs(p-M)<.01&&Math.abs(y-x)<.01){if(Math.abs(f+m)<.1&&Math.abs(p+M)<.1&&Math.abs(y+x)<.1&&Math.abs(h+g+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(h+1)/2,b=(g+1)/2,U=(_+1)/2,P=(f+m)/4,L=(p+M)/4,F=(y+x)/4;return w>b&&w>U?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=P/n,s=L/n):b>U?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=P/i,s=F/i):U<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(U),n=L/s,i=F/s),this.set(n,i,s,t),this}let E=Math.sqrt((x-y)*(x-y)+(p-M)*(p-M)+(m-f)*(m-f));return Math.abs(E)<.001&&(E=1),this.x=(x-y)/E,this.y=(p-M)/E,this.z=(m-f)/E,this.w=Math.acos((h+g+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class __ extends qi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Qt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let c=0;c<a;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ss(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends __{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class lh extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zS extends bi{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new lh(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class yp extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kS extends bi{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new yp(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Ln{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,c){let u=n[i+0],h=n[i+1],f=n[i+2],p=n[i+3];const m=s[a+0],g=s[a+1],y=s[a+2],M=s[a+3];if(c===0){e[t+0]=u,e[t+1]=h,e[t+2]=f,e[t+3]=p;return}if(c===1){e[t+0]=m,e[t+1]=g,e[t+2]=y,e[t+3]=M;return}if(p!==M||u!==m||h!==g||f!==y){let x=1-c;const _=u*m+h*g+f*y+p*M,E=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const U=Math.sqrt(w),P=Math.atan2(U,_*E);x=Math.sin(x*P)/U,c=Math.sin(c*P)/U}const b=c*E;if(u=u*x+m*b,h=h*x+g*b,f=f*x+y*b,p=p*x+M*b,x===1-c){const U=1/Math.sqrt(u*u+h*h+f*f+p*p);u*=U,h*=U,f*=U,p*=U}}e[t]=u,e[t+1]=h,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,s,a){const c=n[i],u=n[i+1],h=n[i+2],f=n[i+3],p=s[a],m=s[a+1],g=s[a+2],y=s[a+3];return e[t]=c*y+f*p+u*g-h*m,e[t+1]=u*y+f*m+h*p-c*g,e[t+2]=h*y+f*g+c*m-u*p,e[t+3]=f*y-c*p-u*m-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,c=Math.cos,u=Math.sin,h=c(n/2),f=c(i/2),p=c(s/2),m=u(n/2),g=u(i/2),y=u(s/2);switch(a){case"XYZ":this._x=m*f*p+h*g*y,this._y=h*g*p-m*f*y,this._z=h*f*y+m*g*p,this._w=h*f*p-m*g*y;break;case"YXZ":this._x=m*f*p+h*g*y,this._y=h*g*p-m*f*y,this._z=h*f*y-m*g*p,this._w=h*f*p+m*g*y;break;case"ZXY":this._x=m*f*p-h*g*y,this._y=h*g*p+m*f*y,this._z=h*f*y+m*g*p,this._w=h*f*p-m*g*y;break;case"ZYX":this._x=m*f*p-h*g*y,this._y=h*g*p+m*f*y,this._z=h*f*y-m*g*p,this._w=h*f*p+m*g*y;break;case"YZX":this._x=m*f*p+h*g*y,this._y=h*g*p+m*f*y,this._z=h*f*y-m*g*p,this._w=h*f*p-m*g*y;break;case"XZY":this._x=m*f*p-h*g*y,this._y=h*g*p-m*f*y,this._z=h*f*y+m*g*p,this._w=h*f*p+m*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],c=t[5],u=t[9],h=t[2],f=t[6],p=t[10],m=n+c+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(f-u)*g,this._y=(s-h)*g,this._z=(a-i)*g}else if(n>c&&n>p){const g=2*Math.sqrt(1+n-c-p);this._w=(f-u)/g,this._x=.25*g,this._y=(i+a)/g,this._z=(s+h)/g}else if(c>p){const g=2*Math.sqrt(1+c-n-p);this._w=(s-h)/g,this._x=(i+a)/g,this._y=.25*g,this._z=(u+f)/g}else{const g=2*Math.sqrt(1+p-n-c);this._w=(a-i)/g,this._x=(s+h)/g,this._y=(u+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,c=t._x,u=t._y,h=t._z,f=t._w;return this._x=n*f+a*c+i*h-s*u,this._y=i*f+a*u+s*c-n*h,this._z=s*f+a*h+n*u-i*c,this._w=a*f-n*c-i*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let c=a*e._w+n*e._x+i*e._y+s*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const u=1-c*c;if(u<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const h=Math.sqrt(u),f=Math.atan2(h,c),p=Math.sin((1-t)*f)/h,m=Math.sin(t*f)/h;return this._w=a*p+this._w*m,this._x=n*p+this._x*m,this._y=i*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ng.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ng.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,c=e.z,u=e.w,h=2*(a*i-c*n),f=2*(c*t-s*i),p=2*(s*n-a*t);return this.x=t+u*h+a*p-c*f,this.y=n+u*f+c*h-s*p,this.z=i+u*p+s*f-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,c=t.y,u=t.z;return this.x=i*u-s*c,this.y=s*a-n*u,this.z=n*c-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vf.copy(this).projectOnVector(e),this.sub(Vf)}reflect(e){return this.sub(Vf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vf=new D,Ng=new Ln;class _n{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,c=s.count;a<c;a++)e.isMesh===!0?e.getVertexPosition(a,Si):Si.fromBufferAttribute(s,a),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cc.copy(n.boundingBox)),cc.applyMatrix4(e.matrixWorld),this.union(cc)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),uc.subVectors(this.max,oa),eo.subVectors(e.a,oa),to.subVectors(e.b,oa),no.subVectors(e.c,oa),Pr.subVectors(to,eo),Ir.subVectors(no,to),ns.subVectors(eo,no);let t=[0,-Pr.z,Pr.y,0,-Ir.z,Ir.y,0,-ns.z,ns.y,Pr.z,0,-Pr.x,Ir.z,0,-Ir.x,ns.z,0,-ns.x,-Pr.y,Pr.x,0,-Ir.y,Ir.x,0,-ns.y,ns.x,0];return!Gf(t,eo,to,no,uc)||(t=[1,0,0,0,1,0,0,0,1],!Gf(t,eo,to,no,uc))?!1:(hc.crossVectors(Pr,Ir),t=[hc.x,hc.y,hc.z],Gf(t,eo,to,no,uc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ir=[new D,new D,new D,new D,new D,new D,new D,new D],Si=new D,cc=new _n,eo=new D,to=new D,no=new D,Pr=new D,Ir=new D,ns=new D,oa=new D,uc=new D,hc=new D,is=new D;function Gf(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){is.fromArray(r,s);const c=i.x*Math.abs(is.x)+i.y*Math.abs(is.y)+i.z*Math.abs(is.z),u=e.dot(is),h=t.dot(is),f=n.dot(is);if(Math.max(-Math.max(u,h,f),Math.min(u,h,f))>c)return!1}return!0}const HS=new _n,aa=new D,Wf=new D;class yn{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):HS.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;aa.subVectors(e,this.center);const t=aa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(aa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(aa.copy(e.center).add(Wf)),this.expandByPoint(aa.copy(e.center).sub(Wf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rr=new D,Xf=new D,fc=new D,Lr=new D,Yf=new D,dc=new D,qf=new D;class Ds{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rr.copy(this.origin).addScaledVector(this.direction,t),rr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xf.copy(e).add(t).multiplyScalar(.5),fc.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(Xf);const s=e.distanceTo(t)*.5,a=-this.direction.dot(fc),c=Lr.dot(this.direction),u=-Lr.dot(fc),h=Lr.lengthSq(),f=Math.abs(1-a*a);let p,m,g,y;if(f>0)if(p=a*u-c,m=a*c-u,y=s*f,p>=0)if(m>=-y)if(m<=y){const M=1/f;p*=M,m*=M,g=p*(p+a*m+2*c)+m*(a*p+m+2*u)+h}else m=s,p=Math.max(0,-(a*m+c)),g=-p*p+m*(m+2*u)+h;else m=-s,p=Math.max(0,-(a*m+c)),g=-p*p+m*(m+2*u)+h;else m<=-y?(p=Math.max(0,-(-a*s+c)),m=p>0?-s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h):m<=y?(p=0,m=Math.min(Math.max(-s,-u),s),g=m*(m+2*u)+h):(p=Math.max(0,-(a*s+c)),m=p>0?s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h);else m=a>0?-s:s,p=Math.max(0,-(a*m+c)),g=-p*p+m*(m+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(Xf).addScaledVector(fc,m),g}intersectSphere(e,t){rr.subVectors(e.center,this.origin);const n=rr.dot(this.direction),i=rr.dot(rr)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),c=n-a,u=n+a;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,c,u;const h=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,i=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,i=(e.min.x-m.x)*h),f>=0?(s=(e.min.y-m.y)*f,a=(e.max.y-m.y)*f):(s=(e.max.y-m.y)*f,a=(e.min.y-m.y)*f),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),p>=0?(c=(e.min.z-m.z)*p,u=(e.max.z-m.z)*p):(c=(e.max.z-m.z)*p,u=(e.min.z-m.z)*p),n>u||c>i)||((c>n||n!==n)&&(n=c),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,t,n,i,s){Yf.subVectors(t,e),dc.subVectors(n,e),qf.crossVectors(Yf,dc);let a=this.direction.dot(qf),c;if(a>0){if(i)return null;c=1}else if(a<0)c=-1,a=-a;else return null;Lr.subVectors(this.origin,e);const u=c*this.direction.dot(dc.crossVectors(Lr,dc));if(u<0)return null;const h=c*this.direction.dot(Yf.cross(Lr));if(h<0||u+h>a)return null;const f=-c*Lr.dot(qf);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,i,s,a,c,u,h,f,p,m,g,y,M,x){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,c,u,h,f,p,m,g,y,M,x)}set(e,t,n,i,s,a,c,u,h,f,p,m,g,y,M,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=c,_[13]=u,_[2]=h,_[6]=f,_[10]=p,_[14]=m,_[3]=g,_[7]=y,_[11]=M,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/io.setFromMatrixColumn(e,0).length(),s=1/io.setFromMatrixColumn(e,1).length(),a=1/io.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),c=Math.sin(n),u=Math.cos(i),h=Math.sin(i),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=a*f,g=a*p,y=c*f,M=c*p;t[0]=u*f,t[4]=-u*p,t[8]=h,t[1]=g+y*h,t[5]=m-M*h,t[9]=-c*u,t[2]=M-m*h,t[6]=y+g*h,t[10]=a*u}else if(e.order==="YXZ"){const m=u*f,g=u*p,y=h*f,M=h*p;t[0]=m+M*c,t[4]=y*c-g,t[8]=a*h,t[1]=a*p,t[5]=a*f,t[9]=-c,t[2]=g*c-y,t[6]=M+m*c,t[10]=a*u}else if(e.order==="ZXY"){const m=u*f,g=u*p,y=h*f,M=h*p;t[0]=m-M*c,t[4]=-a*p,t[8]=y+g*c,t[1]=g+y*c,t[5]=a*f,t[9]=M-m*c,t[2]=-a*h,t[6]=c,t[10]=a*u}else if(e.order==="ZYX"){const m=a*f,g=a*p,y=c*f,M=c*p;t[0]=u*f,t[4]=y*h-g,t[8]=m*h+M,t[1]=u*p,t[5]=M*h+m,t[9]=g*h-y,t[2]=-h,t[6]=c*u,t[10]=a*u}else if(e.order==="YZX"){const m=a*u,g=a*h,y=c*u,M=c*h;t[0]=u*f,t[4]=M-m*p,t[8]=y*p+g,t[1]=p,t[5]=a*f,t[9]=-c*f,t[2]=-h*f,t[6]=g*p+y,t[10]=m-M*p}else if(e.order==="XZY"){const m=a*u,g=a*h,y=c*u,M=c*h;t[0]=u*f,t[4]=-p,t[8]=h*f,t[1]=m*p+M,t[5]=a*f,t[9]=g*p-y,t[2]=y*p-g,t[6]=c*f,t[10]=M*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VS,e,GS)}lookAt(e,t,n){const i=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Dr.crossVectors(n,ti),Dr.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Dr.crossVectors(n,ti)),Dr.normalize(),pc.crossVectors(ti,Dr),i[0]=Dr.x,i[4]=pc.x,i[8]=ti.x,i[1]=Dr.y,i[5]=pc.y,i[9]=ti.y,i[2]=Dr.z,i[6]=pc.z,i[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],c=n[4],u=n[8],h=n[12],f=n[1],p=n[5],m=n[9],g=n[13],y=n[2],M=n[6],x=n[10],_=n[14],E=n[3],w=n[7],b=n[11],U=n[15],P=i[0],L=i[4],F=i[8],G=i[12],A=i[1],C=i[5],Y=i[9],Z=i[13],K=i[2],ce=i[6],j=i[10],ve=i[14],H=i[3],oe=i[7],ie=i[11],ue=i[15];return s[0]=a*P+c*A+u*K+h*H,s[4]=a*L+c*C+u*ce+h*oe,s[8]=a*F+c*Y+u*j+h*ie,s[12]=a*G+c*Z+u*ve+h*ue,s[1]=f*P+p*A+m*K+g*H,s[5]=f*L+p*C+m*ce+g*oe,s[9]=f*F+p*Y+m*j+g*ie,s[13]=f*G+p*Z+m*ve+g*ue,s[2]=y*P+M*A+x*K+_*H,s[6]=y*L+M*C+x*ce+_*oe,s[10]=y*F+M*Y+x*j+_*ie,s[14]=y*G+M*Z+x*ve+_*ue,s[3]=E*P+w*A+b*K+U*H,s[7]=E*L+w*C+b*ce+U*oe,s[11]=E*F+w*Y+b*j+U*ie,s[15]=E*G+w*Z+b*ve+U*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],c=e[5],u=e[9],h=e[13],f=e[2],p=e[6],m=e[10],g=e[14],y=e[3],M=e[7],x=e[11],_=e[15];return y*(+s*u*p-i*h*p-s*c*m+n*h*m+i*c*g-n*u*g)+M*(+t*u*g-t*h*m+s*a*m-i*a*g+i*h*f-s*u*f)+x*(+t*h*p-t*c*g-s*a*p+n*a*g+s*c*f-n*h*f)+_*(-i*c*f-t*u*p+t*c*m+i*a*p-n*a*m+n*u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=e[9],m=e[10],g=e[11],y=e[12],M=e[13],x=e[14],_=e[15],E=p*x*h-M*m*h+M*u*g-c*x*g-p*u*_+c*m*_,w=y*m*h-f*x*h-y*u*g+a*x*g+f*u*_-a*m*_,b=f*M*h-y*p*h+y*c*g-a*M*g-f*c*_+a*p*_,U=y*p*u-f*M*u-y*c*m+a*M*m+f*c*x-a*p*x,P=t*E+n*w+i*b+s*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=E*L,e[1]=(M*m*s-p*x*s-M*i*g+n*x*g+p*i*_-n*m*_)*L,e[2]=(c*x*s-M*u*s+M*i*h-n*x*h-c*i*_+n*u*_)*L,e[3]=(p*u*s-c*m*s-p*i*h+n*m*h+c*i*g-n*u*g)*L,e[4]=w*L,e[5]=(f*x*s-y*m*s+y*i*g-t*x*g-f*i*_+t*m*_)*L,e[6]=(y*u*s-a*x*s-y*i*h+t*x*h+a*i*_-t*u*_)*L,e[7]=(a*m*s-f*u*s+f*i*h-t*m*h-a*i*g+t*u*g)*L,e[8]=b*L,e[9]=(y*p*s-f*M*s-y*n*g+t*M*g+f*n*_-t*p*_)*L,e[10]=(a*M*s-y*c*s+y*n*h-t*M*h-a*n*_+t*c*_)*L,e[11]=(f*c*s-a*p*s-f*n*h+t*p*h+a*n*g-t*c*g)*L,e[12]=U*L,e[13]=(f*M*i-y*p*i+y*n*m-t*M*m-f*n*x+t*p*x)*L,e[14]=(y*c*i-a*M*i-y*n*u+t*M*u+a*n*x-t*c*x)*L,e[15]=(a*p*i-f*c*i+f*n*u-t*p*u-a*n*m+t*c*m)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,c=e.y,u=e.z,h=s*a,f=s*c;return this.set(h*a+n,h*c-i*u,h*u+i*c,0,h*c+i*u,f*c+n,f*u-i*a,0,h*u-i*c,f*u+i*a,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,c=t._z,u=t._w,h=s+s,f=a+a,p=c+c,m=s*h,g=s*f,y=s*p,M=a*f,x=a*p,_=c*p,E=u*h,w=u*f,b=u*p,U=n.x,P=n.y,L=n.z;return i[0]=(1-(M+_))*U,i[1]=(g+b)*U,i[2]=(y-w)*U,i[3]=0,i[4]=(g-b)*P,i[5]=(1-(m+_))*P,i[6]=(x+E)*P,i[7]=0,i[8]=(y+w)*L,i[9]=(x-E)*L,i[10]=(1-(m+M))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=io.set(i[0],i[1],i[2]).length();const a=io.set(i[4],i[5],i[6]).length(),c=io.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Mi.copy(this);const h=1/s,f=1/a,p=1/c;return Mi.elements[0]*=h,Mi.elements[1]*=h,Mi.elements[2]*=h,Mi.elements[4]*=f,Mi.elements[5]*=f,Mi.elements[6]*=f,Mi.elements[8]*=p,Mi.elements[9]*=p,Mi.elements[10]*=p,t.setFromRotationMatrix(Mi),n.x=s,n.y=a,n.z=c,this}makePerspective(e,t,n,i,s,a,c=Gi){const u=this.elements,h=2*s/(t-e),f=2*s/(n-i),p=(t+e)/(t-e),m=(n+i)/(n-i);let g,y;if(c===Gi)g=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(c===Va)g=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=h,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=f,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,s,a,c=Gi){const u=this.elements,h=1/(t-e),f=1/(n-i),p=1/(a-s),m=(t+e)*h,g=(n+i)*f;let y,M;if(c===Gi)y=(a+s)*p,M=-2*p;else if(c===Va)y=s*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-m,u[1]=0,u[5]=2*f,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=M,u[14]=-y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const io=new D,Mi=new rt,VS=new D(0,0,0),GS=new D(1,1,1),Dr=new D,pc=new D,ti=new D,Og=new rt,Fg=new Ln;class si{constructor(e=0,t=0,n=0,i=si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],c=i[8],u=i[1],h=i[5],f=i[9],p=i[2],m=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Kt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Og.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Og,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fg.setFromEuler(this),this.setFromQuaternion(Fg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class As{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WS=0;const Bg=new D,ro=new Ln,sr=new rt,mc=new D,la=new D,XS=new D,YS=new Ln,zg=new D(1,0,0),kg=new D(0,1,0),Hg=new D(0,0,1),Vg={type:"added"},qS={type:"removed"},so={type:"childadded",child:null},Zf={type:"childremoved",child:null};class It extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WS++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new D,t=new si,n=new Ln,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new pt}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new As,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.multiply(ro),this}rotateOnWorldAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.premultiply(ro),this}rotateX(e){return this.rotateOnAxis(zg,e)}rotateY(e){return this.rotateOnAxis(kg,e)}rotateZ(e){return this.rotateOnAxis(Hg,e)}translateOnAxis(e,t){return Bg.copy(e).applyQuaternion(this.quaternion),this.position.add(Bg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zg,e)}translateY(e){return this.translateOnAxis(kg,e)}translateZ(e){return this.translateOnAxis(Hg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mc.copy(e):mc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(la,mc,this.up):sr.lookAt(mc,la,this.up),this.quaternion.setFromRotationMatrix(sr),i&&(sr.extractRotation(i.matrixWorld),ro.setFromRotationMatrix(sr),this.quaternion.premultiply(ro.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vg),so.child=e,this.dispatchEvent(so),so.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qS),Zf.child=e,this.dispatchEvent(Zf),Zf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vg),so.child=e,this.dispatchEvent(so),so.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,XS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,YS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let h=0,f=u.length;h<f;h++){const p=u[h];s(e.shapes,p)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(s(e.materials,this.material[u]));i.material=c}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];i.animations.push(s(e.animations,u))}}if(t){const c=a(e.geometries),u=a(e.materials),h=a(e.textures),f=a(e.images),p=a(e.shapes),m=a(e.skeletons),g=a(e.animations),y=a(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),y.length>0&&(n.nodes=y)}return n.object=i,n;function a(c){const u=[];for(const h in c){const f=c[h];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}It.DEFAULT_UP=new D(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new D,or=new D,jf=new D,ar=new D,oo=new D,ao=new D,Gg=new D,Jf=new D,Kf=new D,Qf=new D,$f=new Tt,ed=new Tt,td=new Tt;class qn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),wi.subVectors(e,t),i.cross(wi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){wi.subVectors(i,t),or.subVectors(n,t),jf.subVectors(e,t);const a=wi.dot(wi),c=wi.dot(or),u=wi.dot(jf),h=or.dot(or),f=or.dot(jf),p=a*h-c*c;if(p===0)return s.set(0,0,0),null;const m=1/p,g=(h*u-c*f)*m,y=(a*f-c*u)*m;return s.set(1-g-y,y,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(e,t,n,i,s,a,c,u){return this.getBarycoord(e,t,n,i,ar)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,ar.x),u.addScaledVector(a,ar.y),u.addScaledVector(c,ar.z),u)}static getInterpolatedAttribute(e,t,n,i,s,a){return $f.setScalar(0),ed.setScalar(0),td.setScalar(0),$f.fromBufferAttribute(e,t),ed.fromBufferAttribute(e,n),td.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector($f,s.x),a.addScaledVector(ed,s.y),a.addScaledVector(td,s.z),a}static isFrontFacing(e,t,n,i){return wi.subVectors(n,t),or.subVectors(e,t),wi.cross(or).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),or.subVectors(this.a,this.b),wi.cross(or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return qn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,c;oo.subVectors(i,n),ao.subVectors(s,n),Jf.subVectors(e,n);const u=oo.dot(Jf),h=ao.dot(Jf);if(u<=0&&h<=0)return t.copy(n);Kf.subVectors(e,i);const f=oo.dot(Kf),p=ao.dot(Kf);if(f>=0&&p<=f)return t.copy(i);const m=u*p-f*h;if(m<=0&&u>=0&&f<=0)return a=u/(u-f),t.copy(n).addScaledVector(oo,a);Qf.subVectors(e,s);const g=oo.dot(Qf),y=ao.dot(Qf);if(y>=0&&g<=y)return t.copy(s);const M=g*h-u*y;if(M<=0&&h>=0&&y<=0)return c=h/(h-y),t.copy(n).addScaledVector(ao,c);const x=f*y-g*p;if(x<=0&&p-f>=0&&g-y>=0)return Gg.subVectors(s,i),c=(p-f)/(p-f+(g-y)),t.copy(i).addScaledVector(Gg,c);const _=1/(x+M+m);return a=M*_,c=m*_,t.copy(n).addScaledVector(oo,a).addScaledVector(ao,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const y_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ur={h:0,s:0,l:0},gc={h:0,s:0,l:0};function nd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ot.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ot.workingColorSpace){if(e=_p(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=nd(a,s,e+1/3),this.g=nd(a,s,e),this.b=nd(a,s,e-1/3)}return Ot.toWorkingColorSpace(this,i),this}setStyle(e,t=mi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],c=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mi){const n=y_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}copyLinearToSRGB(e){return this.r=kf(e.r),this.g=kf(e.g),this.b=kf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Ot.fromWorkingColorSpace(Rn.copy(this),e),Math.round(Kt(Rn.r*255,0,255))*65536+Math.round(Kt(Rn.g*255,0,255))*256+Math.round(Kt(Rn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ot.workingColorSpace){Ot.fromWorkingColorSpace(Rn.copy(this),t);const n=Rn.r,i=Rn.g,s=Rn.b,a=Math.max(n,i,s),c=Math.min(n,i,s);let u,h;const f=(c+a)/2;if(c===a)u=0,h=0;else{const p=a-c;switch(h=f<=.5?p/(a+c):p/(2-a-c),a){case n:u=(i-s)/p+(i<s?6:0);break;case i:u=(s-n)/p+2;break;case s:u=(n-i)/p+4;break}u/=6}return e.h=u,e.s=h,e.l=f,e}getRGB(e,t=Ot.workingColorSpace){return Ot.fromWorkingColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=mi){Ot.fromWorkingColorSpace(Rn.copy(this),e);const t=Rn.r,n=Rn.g,i=Rn.b;return e!==mi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ur),this.setHSL(Ur.h+e,Ur.s+t,Ur.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ur),e.getHSL(gc);const n=Ra(Ur.h,gc.h,t),i=Ra(Ur.s,gc.s,t),s=Ra(Ur.l,gc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new ze;ze.NAMES=y_;let ZS=0;class Dn extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=ws,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uu,this.blendDst=hu,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(n.blending=this.blending),this.side!==mr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uu&&(n.blendSrc=this.blendSrc),this.blendDst!==hu&&(n.blendDst=this.blendDst),this.blendEquation!==zr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const c in s){const u=s[c];delete u.metadata,a.push(u)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wr extends Dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fr=jS();function jS(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let u=0;u<256;++u){const h=u-127;h<-27?(n[u]=0,n[u|256]=32768,i[u]=24,i[u|256]=24):h<-14?(n[u]=1024>>-h-14,n[u|256]=1024>>-h-14|32768,i[u]=-h-1,i[u|256]=-h-1):h<=15?(n[u]=h+15<<10,n[u|256]=h+15<<10|32768,i[u]=13,i[u|256]=13):h<128?(n[u]=31744,n[u|256]=64512,i[u]=24,i[u|256]=24):(n[u]=31744,n[u|256]=64512,i[u]=13,i[u|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),c=new Uint32Array(64);for(let u=1;u<1024;++u){let h=u<<13,f=0;for(;!(h&8388608);)h<<=1,f-=8388608;h&=-8388609,f+=947912704,s[u]=h|f}for(let u=1024;u<2048;++u)s[u]=939524096+(u-1024<<13);for(let u=1;u<31;++u)a[u]=u<<23;a[31]=1199570944,a[32]=2147483648;for(let u=33;u<63;++u)a[u]=2147483648+(u-32<<23);a[63]=3347054592;for(let u=1;u<64;++u)u!==32&&(c[u]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:c}}function Yn(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Kt(r,-65504,65504),fr.floatView[0]=r;const e=fr.uint32View[0],t=e>>23&511;return fr.baseTable[t]+((e&8388607)>>fr.shiftTable[t])}function xa(r){const e=r>>10;return fr.uint32View[0]=fr.mantissaTable[fr.offsetTable[e]+(r&1023)]+fr.exponentTable[e],fr.floatView[0]}const JS={toHalfFloat:Yn,fromHalfFloat:xa},on=new D,vc=new le;class zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ha,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vc.fromBufferAttribute(this,t),vc.applyMatrix3(e),this.setXY(t,vc.x,vc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ha&&(e.usage=this.usage),e}}class KS extends zt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class QS extends zt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class $S extends zt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class eM extends zt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class xp extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class tM extends zt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Sp extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nM extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=xa(this.array[e*this.itemSize]);return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=Yn(t),this}getY(e){let t=xa(this.array[e*this.itemSize+1]);return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=Yn(t),this}getZ(e){let t=xa(this.array[e*this.itemSize+2]);return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=Yn(t),this}getW(e){let t=xa(this.array[e*this.itemSize+3]);return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=Yn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=Yn(t),this.array[e+1]=Yn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=Yn(t),this.array[e+1]=Yn(n),this.array[e+2]=Yn(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.array[e+0]=Yn(t),this.array[e+1]=Yn(n),this.array[e+2]=Yn(i),this.array[e+3]=Yn(s),this}}class Ze extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let iM=0;const pi=new rt,id=new It,lo=new D,ni=new _n,ca=new _n,gn=new D;class St extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(m_(e)?Sp:xp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new pt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,n){return pi.makeTranslation(e,t,n),this.applyMatrix4(pi),this}scale(e,t,n){return pi.makeScale(e,t,n),this.applyMatrix4(pi),this}lookAt(e){return id.lookAt(e),id.updateMatrix(),this.applyMatrix4(id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ze(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ni.setFromBufferAttribute(s),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const c=t[s];ca.setFromBufferAttribute(c),this.morphTargetsRelative?(gn.addVectors(ni.min,ca.min),ni.expandByPoint(gn),gn.addVectors(ni.max,ca.max),ni.expandByPoint(gn)):(ni.expandByPoint(ca.min),ni.expandByPoint(ca.max))}ni.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)gn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(gn));if(t)for(let s=0,a=t.length;s<a;s++){const c=t[s],u=this.morphTargetsRelative;for(let h=0,f=c.count;h<f;h++)gn.fromBufferAttribute(c,h),u&&(lo.fromBufferAttribute(e,h),gn.add(lo)),i=Math.max(i,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),c=[],u=[];for(let F=0;F<n.count;F++)c[F]=new D,u[F]=new D;const h=new D,f=new D,p=new D,m=new le,g=new le,y=new le,M=new D,x=new D;function _(F,G,A){h.fromBufferAttribute(n,F),f.fromBufferAttribute(n,G),p.fromBufferAttribute(n,A),m.fromBufferAttribute(s,F),g.fromBufferAttribute(s,G),y.fromBufferAttribute(s,A),f.sub(h),p.sub(h),g.sub(m),y.sub(m);const C=1/(g.x*y.y-y.x*g.y);isFinite(C)&&(M.copy(f).multiplyScalar(y.y).addScaledVector(p,-g.y).multiplyScalar(C),x.copy(p).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(C),c[F].add(M),c[G].add(M),c[A].add(M),u[F].add(x),u[G].add(x),u[A].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let F=0,G=E.length;F<G;++F){const A=E[F],C=A.start,Y=A.count;for(let Z=C,K=C+Y;Z<K;Z+=3)_(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const w=new D,b=new D,U=new D,P=new D;function L(F){U.fromBufferAttribute(i,F),P.copy(U);const G=c[F];w.copy(G),w.sub(U.multiplyScalar(U.dot(G))).normalize(),b.crossVectors(P,G);const C=b.dot(u[F])<0?-1:1;a.setXYZW(F,w.x,w.y,w.z,C)}for(let F=0,G=E.length;F<G;++F){const A=E[F],C=A.start,Y=A.count;for(let Z=C,K=C+Y;Z<K;Z+=3)L(e.getX(Z+0)),L(e.getX(Z+1)),L(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const i=new D,s=new D,a=new D,c=new D,u=new D,h=new D,f=new D,p=new D;if(e)for(let m=0,g=e.count;m<g;m+=3){const y=e.getX(m+0),M=e.getX(m+1),x=e.getX(m+2);i.fromBufferAttribute(t,y),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,x),f.subVectors(a,s),p.subVectors(i,s),f.cross(p),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,x),c.add(f),u.add(f),h.add(f),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(M,u.x,u.y,u.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let m=0,g=t.count;m<g;m+=3)i.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),f.subVectors(a,s),p.subVectors(i,s),f.cross(p),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(c,u){const h=c.array,f=c.itemSize,p=c.normalized,m=new h.constructor(u.length*f);let g=0,y=0;for(let M=0,x=u.length;M<x;M++){c.isInterleavedBufferAttribute?g=u[M]*c.data.stride+c.offset:g=u[M]*f;for(let _=0;_<f;_++)m[y++]=h[g++]}return new zt(m,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,n=this.index.array,i=this.attributes;for(const c in i){const u=i[c],h=e(u,n);t.setAttribute(c,h)}const s=this.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++){const m=h[f],g=e(m,n);u.push(g)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],f=[];for(let p=0,m=h.length;p<m;p++){const g=h[p];f.push(g.toJSON(e.data))}f.length>0&&(i[u]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const f=i[h];this.setAttribute(h,f.clone(t))}const s=e.morphAttributes;for(const h in s){const f=[],p=s[h];for(let m=0,g=p.length;m<g;m++)f.push(p[m].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,f=a.length;h<f;h++){const p=a[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wg=new rt,rs=new Ds,_c=new yn,Xg=new D,yc=new D,xc=new D,Sc=new D,rd=new D,Mc=new D,Yg=new D,wc=new D;class nn extends It{constructor(e=new St,t=new Wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const c=this.morphTargetInfluences;if(s&&c){Mc.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const f=c[u],p=s[u];f!==0&&(rd.fromBufferAttribute(p,e),a?Mc.addScaledVector(rd,f):Mc.addScaledVector(rd.sub(t),f))}t.add(Mc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_c.copy(n.boundingSphere),_c.applyMatrix4(s),rs.copy(e.ray).recast(e.near),!(_c.containsPoint(rs.origin)===!1&&(rs.intersectSphere(_c,Xg)===null||rs.origin.distanceToSquared(Xg)>(e.far-e.near)**2))&&(Wg.copy(s).invert(),rs.copy(e.ray).applyMatrix4(Wg),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,c=s.index,u=s.attributes.position,h=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,m=s.groups,g=s.drawRange;if(c!==null)if(Array.isArray(a))for(let y=0,M=m.length;y<M;y++){const x=m[y],_=a[x.materialIndex],E=Math.max(x.start,g.start),w=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let b=E,U=w;b<U;b+=3){const P=c.getX(b),L=c.getX(b+1),F=c.getX(b+2);i=Ec(this,_,e,n,h,f,p,P,L,F),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const y=Math.max(0,g.start),M=Math.min(c.count,g.start+g.count);for(let x=y,_=M;x<_;x+=3){const E=c.getX(x),w=c.getX(x+1),b=c.getX(x+2);i=Ec(this,a,e,n,h,f,p,E,w,b),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(a))for(let y=0,M=m.length;y<M;y++){const x=m[y],_=a[x.materialIndex],E=Math.max(x.start,g.start),w=Math.min(u.count,Math.min(x.start+x.count,g.start+g.count));for(let b=E,U=w;b<U;b+=3){const P=b,L=b+1,F=b+2;i=Ec(this,_,e,n,h,f,p,P,L,F),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const y=Math.max(0,g.start),M=Math.min(u.count,g.start+g.count);for(let x=y,_=M;x<_;x+=3){const E=x,w=x+1,b=x+2;i=Ec(this,a,e,n,h,f,p,E,w,b),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function rM(r,e,t,n,i,s,a,c){let u;if(e.side===Hn?u=n.intersectTriangle(a,s,i,!0,c):u=n.intersectTriangle(i,s,a,e.side===mr,c),u===null)return null;wc.copy(c),wc.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(wc);return h<t.near||h>t.far?null:{distance:h,point:wc.clone(),object:r}}function Ec(r,e,t,n,i,s,a,c,u,h){r.getVertexPosition(c,yc),r.getVertexPosition(u,xc),r.getVertexPosition(h,Sc);const f=rM(r,e,t,n,yc,xc,Sc,Yg);if(f){const p=new D;qn.getBarycoord(Yg,yc,xc,Sc,p),i&&(f.uv=qn.getInterpolatedAttribute(i,c,u,h,p,new le)),s&&(f.uv1=qn.getInterpolatedAttribute(s,c,u,h,p,new le)),a&&(f.normal=qn.getInterpolatedAttribute(a,c,u,h,p,new D),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const m={a:c,b:u,c:h,normal:new D,materialIndex:0};qn.getNormal(yc,xc,Sc,m.normal),f.face=m,f.barycoord=p}return f}class Us extends St{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const c=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const u=[],h=[],f=[],p=[];let m=0,g=0;y("z","y","x",-1,-1,n,t,e,a,s,0),y("z","y","x",1,-1,n,t,-e,a,s,1),y("x","z","y",1,1,e,n,t,i,a,2),y("x","z","y",1,-1,e,n,-t,i,a,3),y("x","y","z",1,-1,e,t,n,i,s,4),y("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new Ze(h,3)),this.setAttribute("normal",new Ze(f,3)),this.setAttribute("uv",new Ze(p,2));function y(M,x,_,E,w,b,U,P,L,F,G){const A=b/L,C=U/F,Y=b/2,Z=U/2,K=P/2,ce=L+1,j=F+1;let ve=0,H=0;const oe=new D;for(let ie=0;ie<j;ie++){const ue=ie*C-Z;for(let Fe=0;Fe<ce;Fe++){const He=Fe*A-Y;oe[M]=He*E,oe[x]=ue*w,oe[_]=K,h.push(oe.x,oe.y,oe.z),oe[M]=0,oe[x]=0,oe[_]=P>0?1:-1,f.push(oe.x,oe.y,oe.z),p.push(Fe/L),p.push(1-ie/F),ve+=1}}for(let ie=0;ie<F;ie++)for(let ue=0;ue<L;ue++){const Fe=m+ue+ce*ie,He=m+ue+ce*(ie+1),re=m+(ue+1)+ce*(ie+1),ge=m+(ue+1)+ce*ie;u.push(Fe,He,ge),u.push(He,re,ge),H+=6}c.addGroup(g,H,G),g+=H,m+=ve}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Io(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function zn(r){const e={};for(let t=0;t<r.length;t++){const n=Io(r[t]);for(const i in n)e[i]=n[i]}return e}function sM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function x_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ot.workingColorSpace}const Yu={clone:Io,merge:zn};var oM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends Dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oM,this.fragmentShader=aM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Io(e.uniforms),this.uniformsGroups=sM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class nl extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new D,qg=new le,Zg=new le;class tn extends nl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,qg,Zg),t.subVectors(Zg,qg)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ts*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,h=a.fullHeight;s+=a.offsetX*i/u,t-=a.offsetY*n/h,i*=a.width/u,n*=a.height/h}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const co=-90,uo=1;class S_ extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new tn(co,uo,e,t);i.layers=this.layers,this.add(i);const s=new tn(co,uo,e,t);s.layers=this.layers,this.add(s);const a=new tn(co,uo,e,t);a.layers=this.layers,this.add(a);const c=new tn(co,uo,e,t);c.layers=this.layers,this.add(c);const u=new tn(co,uo,e,t);u.layers=this.layers,this.add(u);const h=new tn(co,uo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,c,u]=t;for(const h of t)this.remove(h);if(e===Gi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Va)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,c,u,h,f]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,c),e.setRenderTarget(n,3,i),e.render(t,u),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,i),e.render(t,f),e.setRenderTarget(p,m,g),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class il extends Qt{constructor(e,t,n,i,s,a,c,u,h,f){e=e!==void 0?e:[],t=t!==void 0?t:gr,super(e,t,n,i,s,a,c,u,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class M_ extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new il(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Us(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:Io(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:pr});s.uniforms.tEquirect.value=t;const a=new nn(i,s),c=t.minFilter;return t.minFilter===Vi&&(t.minFilter=an),new S_(1,10,this).update(e,a),t.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const sd=new D,lM=new D,cM=new pt;class ur{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=sd.subVectors(n,t).cross(lM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(sd),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||cM.getNormalMatrix(e),i=this.coplanarPoint(sd).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new yn,Tc=new D;class rl{constructor(e=new ur,t=new ur,n=new ur,i=new ur,s=new ur,a=new ur){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(i),c[4].copy(s),c[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gi){const n=this.planes,i=e.elements,s=i[0],a=i[1],c=i[2],u=i[3],h=i[4],f=i[5],p=i[6],m=i[7],g=i[8],y=i[9],M=i[10],x=i[11],_=i[12],E=i[13],w=i[14],b=i[15];if(n[0].setComponents(u-s,m-h,x-g,b-_).normalize(),n[1].setComponents(u+s,m+h,x+g,b+_).normalize(),n[2].setComponents(u+a,m+f,x+y,b+E).normalize(),n[3].setComponents(u-a,m-f,x-y,b-E).normalize(),n[4].setComponents(u-c,m-p,x-M,b-w).normalize(),t===Gi)n[5].setComponents(u+c,m+p,x+M,b+w).normalize();else if(t===Va)n[5].setComponents(c,p,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Tc.x=i.normal.x>0?e.max.x:e.min.x,Tc.y=i.normal.y>0?e.max.y:e.min.y,Tc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function w_(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function uM(r){const e=new WeakMap;function t(c,u){const h=c.array,f=c.usage,p=h.byteLength,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?g=r.HALF_FLOAT:g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function n(c,u,h){const f=u.array,p=u.updateRanges;if(r.bindBuffer(h,c),p.length===0)r.bufferSubData(h,0,f);else{p.sort((g,y)=>g.start-y.start);let m=0;for(let g=1;g<p.length;g++){const y=p[m],M=p[g];M.start<=y.start+y.count+1?y.count=Math.max(y.count,M.start+M.count-y.start):(++m,p[m]=M)}p.length=m+1;for(let g=0,y=p.length;g<y;g++){const M=p[g];r.bufferSubData(h,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}u.clearUpdateRanges()}u.onUploadCallback()}function i(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=e.get(c);u&&(r.deleteBuffer(u.buffer),e.delete(c))}function a(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const f=e.get(c);(!f||f.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,u),h.version=c.version}}return{get:i,remove:s,update:a}}class Fo extends St{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,c=Math.floor(n),u=Math.floor(i),h=c+1,f=u+1,p=e/c,m=t/u,g=[],y=[],M=[],x=[];for(let _=0;_<f;_++){const E=_*m-a;for(let w=0;w<h;w++){const b=w*p-s;y.push(b,-E,0),M.push(0,0,1),x.push(w/c),x.push(1-_/u)}}for(let _=0;_<u;_++)for(let E=0;E<c;E++){const w=E+h*_,b=E+h*(_+1),U=E+1+h*(_+1),P=E+1+h*_;g.push(w,b,P),g.push(b,U,P)}this.setIndex(g),this.setAttribute("position",new Ze(y,3)),this.setAttribute("normal",new Ze(M,3)),this.setAttribute("uv",new Ze(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.width,e.height,e.widthSegments,e.heightSegments)}}var hM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_M=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,EM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,TM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,UM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,NM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,OM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,FM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HM="gl_FragColor = linearToOutputTexel( gl_FragColor );",VM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,XM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,YM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ZM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$M=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ew=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ow=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_w=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ww=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ew=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Aw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Uw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ow=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ww=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$w=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,e1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,r1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,s1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,c1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,v1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,y1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,T1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,R1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,I1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,L1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,N1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,V1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:hM,alphahash_pars_fragment:fM,alphamap_fragment:dM,alphamap_pars_fragment:pM,alphatest_fragment:mM,alphatest_pars_fragment:gM,aomap_fragment:vM,aomap_pars_fragment:_M,batching_pars_vertex:yM,batching_vertex:xM,begin_vertex:SM,beginnormal_vertex:MM,bsdfs:wM,iridescence_fragment:EM,bumpmap_pars_fragment:TM,clipping_planes_fragment:AM,clipping_planes_pars_fragment:bM,clipping_planes_pars_vertex:CM,clipping_planes_vertex:RM,color_fragment:PM,color_pars_fragment:IM,color_pars_vertex:LM,color_vertex:DM,common:UM,cube_uv_reflection_fragment:NM,defaultnormal_vertex:OM,displacementmap_pars_vertex:FM,displacementmap_vertex:BM,emissivemap_fragment:zM,emissivemap_pars_fragment:kM,colorspace_fragment:HM,colorspace_pars_fragment:VM,envmap_fragment:GM,envmap_common_pars_fragment:WM,envmap_pars_fragment:XM,envmap_pars_vertex:YM,envmap_physical_pars_fragment:iw,envmap_vertex:qM,fog_vertex:ZM,fog_pars_vertex:jM,fog_fragment:JM,fog_pars_fragment:KM,gradientmap_pars_fragment:QM,lightmap_pars_fragment:$M,lights_lambert_fragment:ew,lights_lambert_pars_fragment:tw,lights_pars_begin:nw,lights_toon_fragment:rw,lights_toon_pars_fragment:sw,lights_phong_fragment:ow,lights_phong_pars_fragment:aw,lights_physical_fragment:lw,lights_physical_pars_fragment:cw,lights_fragment_begin:uw,lights_fragment_maps:hw,lights_fragment_end:fw,logdepthbuf_fragment:dw,logdepthbuf_pars_fragment:pw,logdepthbuf_pars_vertex:mw,logdepthbuf_vertex:gw,map_fragment:vw,map_pars_fragment:_w,map_particle_fragment:yw,map_particle_pars_fragment:xw,metalnessmap_fragment:Sw,metalnessmap_pars_fragment:Mw,morphinstance_vertex:ww,morphcolor_vertex:Ew,morphnormal_vertex:Tw,morphtarget_pars_vertex:Aw,morphtarget_vertex:bw,normal_fragment_begin:Cw,normal_fragment_maps:Rw,normal_pars_fragment:Pw,normal_pars_vertex:Iw,normal_vertex:Lw,normalmap_pars_fragment:Dw,clearcoat_normal_fragment_begin:Uw,clearcoat_normal_fragment_maps:Nw,clearcoat_pars_fragment:Ow,iridescence_pars_fragment:Fw,opaque_fragment:Bw,packing:zw,premultiplied_alpha_fragment:kw,project_vertex:Hw,dithering_fragment:Vw,dithering_pars_fragment:Gw,roughnessmap_fragment:Ww,roughnessmap_pars_fragment:Xw,shadowmap_pars_fragment:Yw,shadowmap_pars_vertex:qw,shadowmap_vertex:Zw,shadowmask_pars_fragment:jw,skinbase_vertex:Jw,skinning_pars_vertex:Kw,skinning_vertex:Qw,skinnormal_vertex:$w,specularmap_fragment:e1,specularmap_pars_fragment:t1,tonemapping_fragment:n1,tonemapping_pars_fragment:i1,transmission_fragment:r1,transmission_pars_fragment:s1,uv_pars_fragment:o1,uv_pars_vertex:a1,uv_vertex:l1,worldpos_vertex:c1,background_vert:u1,background_frag:h1,backgroundCube_vert:f1,backgroundCube_frag:d1,cube_vert:p1,cube_frag:m1,depth_vert:g1,depth_frag:v1,distanceRGBA_vert:_1,distanceRGBA_frag:y1,equirect_vert:x1,equirect_frag:S1,linedashed_vert:M1,linedashed_frag:w1,meshbasic_vert:E1,meshbasic_frag:T1,meshlambert_vert:A1,meshlambert_frag:b1,meshmatcap_vert:C1,meshmatcap_frag:R1,meshnormal_vert:P1,meshnormal_frag:I1,meshphong_vert:L1,meshphong_frag:D1,meshphysical_vert:U1,meshphysical_frag:N1,meshtoon_vert:O1,meshtoon_frag:F1,points_vert:B1,points_frag:z1,shadow_vert:k1,shadow_frag:H1,sprite_vert:V1,sprite_frag:G1},Re={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Ti={basic:{uniforms:zn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:zn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ze(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:zn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:zn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:zn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new ze(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:zn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:zn([Re.points,Re.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:zn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:zn([Re.common,Re.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:zn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:zn([Re.sprite,Re.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:zn([Re.common,Re.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:zn([Re.lights,Re.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Ti.physical={uniforms:zn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Ac={r:0,b:0,g:0},os=new si,W1=new rt;function X1(r,e,t,n,i,s,a){const c=new ze(0);let u=s===!0?0:1,h,f,p=null,m=0,g=null;function y(E){let w=E.isScene===!0?E.background:null;return w&&w.isTexture&&(w=(E.backgroundBlurriness>0?t:e).get(w)),w}function M(E){let w=!1;const b=y(E);b===null?_(c,u):b&&b.isColor&&(_(b,1),w=!0);const U=r.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(E,w){const b=y(w);b&&(b.isCubeTexture||b.mapping===No)?(f===void 0&&(f=new nn(new Us(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Io(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(U,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),os.copy(w.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),f.material.uniforms.envMap.value=b,f.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(W1.makeRotationFromEuler(os)),f.material.toneMapped=Ot.getTransfer(b.colorSpace)!==Vt,(p!==b||m!==b.version||g!==r.toneMapping)&&(f.material.needsUpdate=!0,p=b,m=b.version,g=r.toneMapping),f.layers.enableAll(),E.unshift(f,f.geometry,f.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new nn(new Fo(2,2),new vi({name:"BackgroundMaterial",uniforms:Io(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=Ot.getTransfer(b.colorSpace)!==Vt,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(p!==b||m!==b.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,p=b,m=b.version,g=r.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function _(E,w){E.getRGB(Ac,x_(r)),n.buffers.color.setClear(Ac.r,Ac.g,Ac.b,w,a)}return{getClearColor:function(){return c},setClearColor:function(E,w=1){c.set(E),u=w,_(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(E){u=E,_(c,u)},render:M,addToRenderList:x}}function Y1(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=m(null);let s=i,a=!1;function c(A,C,Y,Z,K){let ce=!1;const j=p(Z,Y,C);s!==j&&(s=j,h(s.object)),ce=g(A,Z,Y,K),ce&&y(A,Z,Y,K),K!==null&&e.update(K,r.ELEMENT_ARRAY_BUFFER),(ce||a)&&(a=!1,b(A,C,Y,Z),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function u(){return r.createVertexArray()}function h(A){return r.bindVertexArray(A)}function f(A){return r.deleteVertexArray(A)}function p(A,C,Y){const Z=Y.wireframe===!0;let K=n[A.id];K===void 0&&(K={},n[A.id]=K);let ce=K[C.id];ce===void 0&&(ce={},K[C.id]=ce);let j=ce[Z];return j===void 0&&(j=m(u()),ce[Z]=j),j}function m(A){const C=[],Y=[],Z=[];for(let K=0;K<t;K++)C[K]=0,Y[K]=0,Z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:Y,attributeDivisors:Z,object:A,attributes:{},index:null}}function g(A,C,Y,Z){const K=s.attributes,ce=C.attributes;let j=0;const ve=Y.getAttributes();for(const H in ve)if(ve[H].location>=0){const ie=K[H];let ue=ce[H];if(ue===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(ue=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(ue=A.instanceColor)),ie===void 0||ie.attribute!==ue||ue&&ie.data!==ue.data)return!0;j++}return s.attributesNum!==j||s.index!==Z}function y(A,C,Y,Z){const K={},ce=C.attributes;let j=0;const ve=Y.getAttributes();for(const H in ve)if(ve[H].location>=0){let ie=ce[H];ie===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(ie=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(ie=A.instanceColor));const ue={};ue.attribute=ie,ie&&ie.data&&(ue.data=ie.data),K[H]=ue,j++}s.attributes=K,s.attributesNum=j,s.index=Z}function M(){const A=s.newAttributes;for(let C=0,Y=A.length;C<Y;C++)A[C]=0}function x(A){_(A,0)}function _(A,C){const Y=s.newAttributes,Z=s.enabledAttributes,K=s.attributeDivisors;Y[A]=1,Z[A]===0&&(r.enableVertexAttribArray(A),Z[A]=1),K[A]!==C&&(r.vertexAttribDivisor(A,C),K[A]=C)}function E(){const A=s.newAttributes,C=s.enabledAttributes;for(let Y=0,Z=C.length;Y<Z;Y++)C[Y]!==A[Y]&&(r.disableVertexAttribArray(Y),C[Y]=0)}function w(A,C,Y,Z,K,ce,j){j===!0?r.vertexAttribIPointer(A,C,Y,K,ce):r.vertexAttribPointer(A,C,Y,Z,K,ce)}function b(A,C,Y,Z){M();const K=Z.attributes,ce=Y.getAttributes(),j=C.defaultAttributeValues;for(const ve in ce){const H=ce[ve];if(H.location>=0){let oe=K[ve];if(oe===void 0&&(ve==="instanceMatrix"&&A.instanceMatrix&&(oe=A.instanceMatrix),ve==="instanceColor"&&A.instanceColor&&(oe=A.instanceColor)),oe!==void 0){const ie=oe.normalized,ue=oe.itemSize,Fe=e.get(oe);if(Fe===void 0)continue;const He=Fe.buffer,re=Fe.type,ge=Fe.bytesPerElement,Pe=re===r.INT||re===r.UNSIGNED_INT||oe.gpuType===eh;if(oe.isInterleavedBufferAttribute){const we=oe.data,st=we.stride,et=oe.offset;if(we.isInstancedInterleavedBuffer){for(let at=0;at<H.locationSize;at++)_(H.location+at,we.meshPerAttribute);A.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let at=0;at<H.locationSize;at++)x(H.location+at);r.bindBuffer(r.ARRAY_BUFFER,He);for(let at=0;at<H.locationSize;at++)w(H.location+at,ue/H.locationSize,re,ie,st*ge,(et+ue/H.locationSize*at)*ge,Pe)}else{if(oe.isInstancedBufferAttribute){for(let we=0;we<H.locationSize;we++)_(H.location+we,oe.meshPerAttribute);A.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let we=0;we<H.locationSize;we++)x(H.location+we);r.bindBuffer(r.ARRAY_BUFFER,He);for(let we=0;we<H.locationSize;we++)w(H.location+we,ue/H.locationSize,re,ie,ue*ge,ue/H.locationSize*we*ge,Pe)}}else if(j!==void 0){const ie=j[ve];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(H.location,ie);break;case 3:r.vertexAttrib3fv(H.location,ie);break;case 4:r.vertexAttrib4fv(H.location,ie);break;default:r.vertexAttrib1fv(H.location,ie)}}}}E()}function U(){F();for(const A in n){const C=n[A];for(const Y in C){const Z=C[Y];for(const K in Z)f(Z[K].object),delete Z[K];delete C[Y]}delete n[A]}}function P(A){if(n[A.id]===void 0)return;const C=n[A.id];for(const Y in C){const Z=C[Y];for(const K in Z)f(Z[K].object),delete Z[K];delete C[Y]}delete n[A.id]}function L(A){for(const C in n){const Y=n[C];if(Y[A.id]===void 0)continue;const Z=Y[A.id];for(const K in Z)f(Z[K].object),delete Z[K];delete Y[A.id]}}function F(){G(),a=!0,s!==i&&(s=i,h(s.object))}function G(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:c,reset:F,resetDefaultState:G,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:M,enableAttribute:x,disableUnusedAttributes:E}}function q1(r,e,t){let n;function i(h){n=h}function s(h,f){r.drawArrays(n,h,f),t.update(f,n,1)}function a(h,f,p){p!==0&&(r.drawArraysInstanced(n,h,f,p),t.update(f,n,p))}function c(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,f,0,p);let g=0;for(let y=0;y<p;y++)g+=f[y];t.update(g,n,1)}function u(h,f,p,m){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<h.length;y++)a(h[y],f[y],m[y]);else{g.multiDrawArraysInstancedWEBGL(n,h,0,f,0,m,0,p);let y=0;for(let M=0;M<p;M++)y+=f[M];for(let M=0;M<m.length;M++)t.update(y,n,m[M])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Z1(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(L){return!(L!==In&&n.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(L){const F=L===Oo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Ai&&n.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Zn&&!F)}function u(L){if(L==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const f=u(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const p=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(m===!0){const L=e.get("EXT_clip_control");L.clipControlEXT(L.LOWER_LEFT_EXT,L.ZERO_TO_ONE_EXT)}const g=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),U=y>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:p,reverseDepthBuffer:m,maxTextures:g,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:b,vertexTextures:U,maxSamples:P}}function j1(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new ur,c=new pt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||n!==0||i;return i=m,n=p.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){t=f(p,m,0)},this.setState=function(p,m,g){const y=p.clippingPlanes,M=p.clipIntersection,x=p.clipShadows,_=r.get(p);if(!i||y===null||y.length===0||s&&!x)s?f(null):h();else{const E=s?0:n,w=E*4;let b=_.clippingState||null;u.value=b,b=f(y,m,w,g);for(let U=0;U!==w;++U)b[U]=t[U];_.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,m,g,y){const M=p!==null?p.length:0;let x=null;if(M!==0){if(x=u.value,y!==!0||x===null){const _=g+M*4,E=m.matrixWorldInverse;c.getNormalMatrix(E),(x===null||x.length<_)&&(x=new Float32Array(_));for(let w=0,b=g;w!==M;++w,b+=4)a.copy(p[w]).applyMatrix4(E,c),a.normal.toArray(x,b),x[b+3]=a.constant}u.value=x,u.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function J1(r){let e=new WeakMap;function t(a,c){return c===La?a.mapping=gr:c===Da&&(a.mapping=Hr),a}function n(a){if(a&&a.isTexture){const c=a.mapping;if(c===La||c===Da)if(e.has(a)){const u=e.get(a).texture;return t(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const h=new M_(u.height);return h.fromEquirectangularTexture(r,a),e.set(a,h),a.addEventListener("dispose",i),t(h.texture,a.mapping)}else return null}}return a}function i(a){const c=a.target;c.removeEventListener("dispose",i);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class kr extends nl{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,c=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,c-=f*this.view.offsetY,u=c-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,c,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Eo=4,jg=[.125,.215,.35,.446,.526,.582],_s=20,od=new kr,Jg=new ze;let ad=null,ld=0,cd=0,ud=!1;const vs=(1+Math.sqrt(5))/2,ho=1/vs,Kg=[new D(-vs,ho,0),new D(vs,ho,0),new D(-ho,0,vs),new D(ho,0,vs),new D(0,vs,-ho),new D(0,vs,ho),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Yd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ad=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ad,ld,cd),this._renderer.xr.enabled=ud,e.scissorTest=!1,bc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===Hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ad=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Oo,format:In,colorSpace:yr,depthBuffer:!1},i=Qg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qg(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=K1(s)),this._blurMaterial=Q1(s,e,t)}return i}_compileMaterial(e){const t=new nn(this._lodPlanes[0],e);this._renderer.compile(t,od)}_sceneToCubeUV(e,t,n,i){const c=new tn(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(Jg),f.toneMapping=Wi,f.autoClear=!1;const g=new Wr({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),y=new nn(new Us,g);let M=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,M=!0):(g.color.copy(Jg),M=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(c.up.set(0,u[_],0),c.lookAt(h[_],0,0)):E===1?(c.up.set(0,0,u[_]),c.lookAt(0,h[_],0)):(c.up.set(0,u[_],0),c.lookAt(0,0,h[_]));const w=this._cubeSize;bc(i,E*w,_>2?w:0,w,w),f.setRenderTarget(i),M&&f.render(y,c),f.render(e,c)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=m,f.autoClear=p,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===gr||e.mapping===Hr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=e0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$g());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new nn(this._lodPlanes[0],s),c=s.uniforms;c.envMap.value=e;const u=this._cubeSize;bc(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(a,od)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=Kg[(i-s-1)%Kg.length];this._blur(e,s-1,s,a,c)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,c){const u=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new nn(this._lodPlanes[i],h),m=h.uniforms,g=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*_s-1),M=s/y,x=isFinite(s)?1+Math.floor(f*M):_s;x>_s&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${_s}`);const _=[];let E=0;for(let L=0;L<_s;++L){const F=L/M,G=Math.exp(-F*F/2);_.push(G),L===0?E+=G:L<x&&(E+=2*G)}for(let L=0;L<_.length;L++)_[L]=_[L]/E;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=_,m.latitudinal.value=a==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:w}=this;m.dTheta.value=y,m.mipInt.value=w-n;const b=this._sizeLods[i],U=3*b*(i>w-Eo?i-w+Eo:0),P=4*(this._cubeSize-b);bc(t,U,P,3*b,2*b),u.setRenderTarget(t),u.render(p,od)}}function K1(r){const e=[],t=[],n=[];let i=r;const s=r-Eo+1+jg.length;for(let a=0;a<s;a++){const c=Math.pow(2,i);t.push(c);let u=1/c;a>r-Eo?u=jg[a-r+Eo-1]:a===0&&(u=0),n.push(u);const h=1/(c-2),f=-h,p=1+h,m=[f,f,p,f,p,p,f,f,p,p,f,p],g=6,y=6,M=3,x=2,_=1,E=new Float32Array(M*y*g),w=new Float32Array(x*y*g),b=new Float32Array(_*y*g);for(let P=0;P<g;P++){const L=P%3*2/3-1,F=P>2?0:-1,G=[L,F,0,L+2/3,F,0,L+2/3,F+1,0,L,F,0,L+2/3,F+1,0,L,F+1,0];E.set(G,M*y*P),w.set(m,x*y*P);const A=[P,P,P,P,P,P];b.set(A,_*y*P)}const U=new St;U.setAttribute("position",new zt(E,M)),U.setAttribute("uv",new zt(w,x)),U.setAttribute("faceIndex",new zt(b,_)),e.push(U),i>Eo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qg(r,e,t){const n=new bi(r,e,t);return n.texture.mapping=No,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Q1(r,e,t){const n=new Float32Array(_s),i=new D(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function $g(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function e0(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Mp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $1(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const u=c.mapping,h=u===La||u===Da,f=u===gr||u===Hr;if(h||f){let p=e.get(c);const m=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==m)return t===null&&(t=new Yd(r)),p=h?t.fromEquirectangular(c,p):t.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),p.texture;if(p!==void 0)return p.texture;{const g=c.image;return h&&g&&g.height>0||f&&g&&i(g)?(t===null&&(t=new Yd(r)),p=h?t.fromEquirectangular(c):t.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),c.addEventListener("dispose",s),p.texture):null}}}return c}function i(c){let u=0;const h=6;for(let f=0;f<h;f++)c[f]!==void 0&&u++;return u===h}function s(c){const u=c.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function eE(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&au("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function tE(r,e,t,n){const i={},s=new WeakMap;function a(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const y in m.attributes)e.remove(m.attributes[y]);for(const y in m.morphAttributes){const M=m.morphAttributes[y];for(let x=0,_=M.length;x<_;x++)e.remove(M[x])}m.removeEventListener("dispose",a),delete i[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(p,m){return i[m.id]===!0||(m.addEventListener("dispose",a),i[m.id]=!0,t.memory.geometries++),m}function u(p){const m=p.attributes;for(const y in m)e.update(m[y],r.ARRAY_BUFFER);const g=p.morphAttributes;for(const y in g){const M=g[y];for(let x=0,_=M.length;x<_;x++)e.update(M[x],r.ARRAY_BUFFER)}}function h(p){const m=[],g=p.index,y=p.attributes.position;let M=0;if(g!==null){const E=g.array;M=g.version;for(let w=0,b=E.length;w<b;w+=3){const U=E[w+0],P=E[w+1],L=E[w+2];m.push(U,P,P,L,L,U)}}else if(y!==void 0){const E=y.array;M=y.version;for(let w=0,b=E.length/3-1;w<b;w+=3){const U=w+0,P=w+1,L=w+2;m.push(U,P,P,L,L,U)}}else return;const x=new(m_(m)?Sp:xp)(m,1);x.version=M;const _=s.get(p);_&&e.remove(_),s.set(p,x)}function f(p){const m=s.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&h(p)}else h(p);return s.get(p)}return{get:c,update:u,getWireframeAttribute:f}}function nE(r,e,t){let n;function i(m){n=m}let s,a;function c(m){s=m.type,a=m.bytesPerElement}function u(m,g){r.drawElements(n,g,s,m*a),t.update(g,n,1)}function h(m,g,y){y!==0&&(r.drawElementsInstanced(n,g,s,m*a,y),t.update(g,n,y))}function f(m,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,m,0,y);let x=0;for(let _=0;_<y;_++)x+=g[_];t.update(x,n,1)}function p(m,g,y,M){if(y===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<m.length;_++)h(m[_]/a,g[_],M[_]);else{x.multiDrawElementsInstancedWEBGL(n,g,0,s,m,0,M,0,y);let _=0;for(let E=0;E<y;E++)_+=g[E];for(let E=0;E<M.length;E++)t.update(_,n,M[E])}}this.setMode=i,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function iE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,c){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=c*(s/3);break;case r.LINES:t.lines+=c*(s/2);break;case r.LINE_STRIP:t.lines+=c*(s-1);break;case r.LINE_LOOP:t.lines+=c*s;break;case r.POINTS:t.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function rE(r,e,t){const n=new WeakMap,i=new Tt;function s(a,c,u){const h=a.morphTargetInfluences,f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=f!==void 0?f.length:0;let m=n.get(c);if(m===void 0||m.count!==p){let G=function(){L.dispose(),n.delete(c),c.removeEventListener("dispose",G)};m!==void 0&&m.texture.dispose();const g=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],_=c.morphAttributes.normal||[],E=c.morphAttributes.color||[];let w=0;g===!0&&(w=1),y===!0&&(w=2),M===!0&&(w=3);let b=c.attributes.position.count*w,U=1;b>e.maxTextureSize&&(U=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const P=new Float32Array(b*U*4*p),L=new lh(P,b,U,p);L.type=Zn,L.needsUpdate=!0;const F=w*4;for(let A=0;A<p;A++){const C=x[A],Y=_[A],Z=E[A],K=b*U*4*A;for(let ce=0;ce<C.count;ce++){const j=ce*F;g===!0&&(i.fromBufferAttribute(C,ce),P[K+j+0]=i.x,P[K+j+1]=i.y,P[K+j+2]=i.z,P[K+j+3]=0),y===!0&&(i.fromBufferAttribute(Y,ce),P[K+j+4]=i.x,P[K+j+5]=i.y,P[K+j+6]=i.z,P[K+j+7]=0),M===!0&&(i.fromBufferAttribute(Z,ce),P[K+j+8]=i.x,P[K+j+9]=i.y,P[K+j+10]=i.z,P[K+j+11]=Z.itemSize===4?i.w:1)}}m={count:p,texture:L,size:new le(b,U)},n.set(c,m),c.addEventListener("dispose",G)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let M=0;M<h.length;M++)g+=h[M];const y=c.morphTargetsRelative?1:1-g;u.getUniforms().setValue(r,"morphTargetBaseInfluence",y),u.getUniforms().setValue(r,"morphTargetInfluences",h)}u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:s}}function sE(r,e,t,n){let i=new WeakMap;function s(u){const h=n.render.frame,f=u.geometry,p=e.get(u,f);if(i.get(p)!==h&&(e.update(p),i.set(p,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),i.get(u)!==h&&(t.update(u.instanceMatrix,r.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,r.ARRAY_BUFFER),i.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;i.get(m)!==h&&(m.update(),i.set(m,h))}return p}function a(){i=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}class wp extends Qt{constructor(e,t,n,i,s,a,c,u,h,f=Es){if(f!==Es&&f!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Es&&(n=vr),n===void 0&&f===Is&&(n=Ps),super(null,i,s,a,c,u,f,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:vn,this.minFilter=u!==void 0?u:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const E_=new Qt,t0=new wp(1,1),T_=new lh,A_=new yp,b_=new il,n0=[],i0=[],r0=new Float32Array(16),s0=new Float32Array(9),o0=new Float32Array(4);function Bo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=n0[i];if(s===void 0&&(s=new Float32Array(i),n0[i]=s),e!==0){n.toArray(s,0);for(let a=1,c=0;a!==e;++a)c+=t,r[a].toArray(s,c)}return s}function un(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function hn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ch(r,e){let t=i0[e];t===void 0&&(t=new Int32Array(e),i0[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function oE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function aE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2fv(this.addr,e),hn(t,e)}}function lE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;r.uniform3fv(this.addr,e),hn(t,e)}}function cE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4fv(this.addr,e),hn(t,e)}}function uE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;o0.set(n),r.uniformMatrix2fv(this.addr,!1,o0),hn(t,n)}}function hE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;s0.set(n),r.uniformMatrix3fv(this.addr,!1,s0),hn(t,n)}}function fE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;r0.set(n),r.uniformMatrix4fv(this.addr,!1,r0),hn(t,n)}}function dE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function pE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2iv(this.addr,e),hn(t,e)}}function mE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;r.uniform3iv(this.addr,e),hn(t,e)}}function gE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4iv(this.addr,e),hn(t,e)}}function vE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function _E(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2uiv(this.addr,e),hn(t,e)}}function yE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;r.uniform3uiv(this.addr,e),hn(t,e)}}function xE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4uiv(this.addr,e),hn(t,e)}}function SE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(t0.compareFunction=vp,s=t0):s=E_,t.setTexture2D(e||s,i)}function ME(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||A_,i)}function wE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||b_,i)}function EE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||T_,i)}function TE(r){switch(r){case 5126:return oE;case 35664:return aE;case 35665:return lE;case 35666:return cE;case 35674:return uE;case 35675:return hE;case 35676:return fE;case 5124:case 35670:return dE;case 35667:case 35671:return pE;case 35668:case 35672:return mE;case 35669:case 35673:return gE;case 5125:return vE;case 36294:return _E;case 36295:return yE;case 36296:return xE;case 35678:case 36198:case 36298:case 36306:case 35682:return SE;case 35679:case 36299:case 36307:return ME;case 35680:case 36300:case 36308:case 36293:return wE;case 36289:case 36303:case 36311:case 36292:return EE}}function AE(r,e){r.uniform1fv(this.addr,e)}function bE(r,e){const t=Bo(e,this.size,2);r.uniform2fv(this.addr,t)}function CE(r,e){const t=Bo(e,this.size,3);r.uniform3fv(this.addr,t)}function RE(r,e){const t=Bo(e,this.size,4);r.uniform4fv(this.addr,t)}function PE(r,e){const t=Bo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function IE(r,e){const t=Bo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function LE(r,e){const t=Bo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function DE(r,e){r.uniform1iv(this.addr,e)}function UE(r,e){r.uniform2iv(this.addr,e)}function NE(r,e){r.uniform3iv(this.addr,e)}function OE(r,e){r.uniform4iv(this.addr,e)}function FE(r,e){r.uniform1uiv(this.addr,e)}function BE(r,e){r.uniform2uiv(this.addr,e)}function zE(r,e){r.uniform3uiv(this.addr,e)}function kE(r,e){r.uniform4uiv(this.addr,e)}function HE(r,e,t){const n=this.cache,i=e.length,s=ch(t,i);un(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||E_,s[a])}function VE(r,e,t){const n=this.cache,i=e.length,s=ch(t,i);un(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||A_,s[a])}function GE(r,e,t){const n=this.cache,i=e.length,s=ch(t,i);un(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||b_,s[a])}function WE(r,e,t){const n=this.cache,i=e.length,s=ch(t,i);un(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||T_,s[a])}function XE(r){switch(r){case 5126:return AE;case 35664:return bE;case 35665:return CE;case 35666:return RE;case 35674:return PE;case 35675:return IE;case 35676:return LE;case 5124:case 35670:return DE;case 35667:case 35671:return UE;case 35668:case 35672:return NE;case 35669:case 35673:return OE;case 5125:return FE;case 36294:return BE;case 36295:return zE;case 36296:return kE;case 35678:case 36198:case 36298:case 36306:case 35682:return HE;case 35679:case 36299:case 36307:return VE;case 35680:case 36300:case 36308:case 36293:return GE;case 36289:case 36303:case 36311:case 36292:return WE}}class YE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=TE(t.type)}}class qE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=XE(t.type)}}class ZE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const c=i[s];c.setValue(e,t[c.id],n)}}}const hd=/(\w+)(\])?(\[|\.)?/g;function a0(r,e){r.seq.push(e),r.map[e.id]=e}function jE(r,e,t){const n=r.name,i=n.length;for(hd.lastIndex=0;;){const s=hd.exec(n),a=hd.lastIndex;let c=s[1];const u=s[2]==="]",h=s[3];if(u&&(c=c|0),h===void 0||h==="["&&a+2===i){a0(t,h===void 0?new YE(c,r,e):new qE(c,r,e));break}else{let p=t.map[c];p===void 0&&(p=new ZE(c),a0(t,p)),t=p}}}class lu{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);jE(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const c=t[s],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function l0(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const JE=37297;let KE=0;function QE(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const c=a+1;n.push(`${c===e?">":" "} ${c}: ${t[a]}`)}return n.join(`
`)}function $E(r){const e=Ot.getPrimaries(Ot.workingColorSpace),t=Ot.getPrimaries(r);let n;switch(e===t?n="":e===ka&&t===za?n="LinearDisplayP3ToLinearSRGB":e===za&&t===ka&&(n="LinearSRGBToLinearDisplayP3"),r){case yr:case tl:return[n,"LinearTransferOETF"];case mi:case ah:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function c0(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+QE(r.getShaderSource(e),a)}else return i}function eT(r,e){const t=$E(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function tT(r,e){let t;switch(e){case Zv:t="Linear";break;case jv:t="Reinhard";break;case Jv:t="Cineon";break;case sp:t="ACESFilmic";break;case Qv:t="AgX";break;case $v:t="Neutral";break;case Kv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cc=new D;function nT(){Ot.getLuminanceCoefficients(Cc);const r=Cc.x.toFixed(4),e=Cc.y.toFixed(4),t=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function rT(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sT(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let c=1;s.type===r.FLOAT_MAT2&&(c=2),s.type===r.FLOAT_MAT3&&(c=3),s.type===r.FLOAT_MAT4&&(c=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:c}}return t}function Sa(r){return r!==""}function u0(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function h0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oT=/^[ \t]*#include +<([\w\d./]+)>/gm;function qd(r){return r.replace(oT,lT)}const aT=new Map;function lT(r,e){let t=gt[e];if(t===void 0){const n=aT.get(e);if(n!==void 0)t=gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return qd(t)}const cT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function f0(r){return r.replace(cT,uT)}function uT(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function d0(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hT(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Qu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ma?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function fT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case gr:case Hr:e="ENVMAP_TYPE_CUBE";break;case No:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Hr:e="ENVMAP_MODE_REFRACTION";break}return e}function pT(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case $a:e="ENVMAP_BLENDING_MULTIPLY";break;case Yv:e="ENVMAP_BLENDING_MIX";break;case qv:e="ENVMAP_BLENDING_ADD";break}return e}function mT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function gT(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,c=t.fragmentShader;const u=hT(t),h=fT(t),f=dT(t),p=pT(t),m=mT(t),g=iT(t),y=rT(s),M=i.createProgram();let x,_,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Sa).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Sa).join(`
`),_.length>0&&(_+=`
`)):(x=[d0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),_=[d0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?gt.tonemapping_pars_fragment:"",t.toneMapping!==Wi?tT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,eT("linearToOutputTexel",t.outputColorSpace),nT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sa).join(`
`)),a=qd(a),a=u0(a,t),a=h0(a,t),c=qd(c),c=u0(c,t),c=h0(c,t),a=f0(a),c=f0(c),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===Xd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=E+x+a,b=E+_+c,U=l0(i,i.VERTEX_SHADER,w),P=l0(i,i.FRAGMENT_SHADER,b);i.attachShader(M,U),i.attachShader(M,P),t.index0AttributeName!==void 0?i.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function L(C){if(r.debug.checkShaderErrors){const Y=i.getProgramInfoLog(M).trim(),Z=i.getShaderInfoLog(U).trim(),K=i.getShaderInfoLog(P).trim();let ce=!0,j=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(ce=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,M,U,P);else{const ve=c0(i,U,"vertex"),H=c0(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+Y+`
`+ve+`
`+H)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(Z===""||K==="")&&(j=!1);j&&(C.diagnostics={runnable:ce,programLog:Y,vertexShader:{log:Z,prefix:x},fragmentShader:{log:K,prefix:_}})}i.deleteShader(U),i.deleteShader(P),F=new lu(i,M),G=sT(i,M)}let F;this.getUniforms=function(){return F===void 0&&L(this),F};let G;this.getAttributes=function(){return G===void 0&&L(this),G};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(M,JE)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=KE++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=U,this.fragmentShader=P,this}let vT=0;class _T{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yT(e),t.set(e,n)),n}}class yT{constructor(e){this.id=vT++,this.code=e,this.usedTimes=0}}function xT(r,e,t,n,i,s,a){const c=new As,u=new _T,h=new Set,f=[],p=i.logarithmicDepthBuffer,m=i.reverseDepthBuffer,g=i.vertexTextures;let y=i.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(A){return h.add(A),A===0?"uv":`uv${A}`}function _(A,C,Y,Z,K){const ce=Z.fog,j=K.geometry,ve=A.isMeshStandardMaterial?Z.environment:null,H=(A.isMeshStandardMaterial?t:e).get(A.envMap||ve),oe=H&&H.mapping===No?H.image.height:null,ie=M[A.type];A.precision!==null&&(y=i.getMaxPrecision(A.precision),y!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const ue=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Fe=ue!==void 0?ue.length:0;let He=0;j.morphAttributes.position!==void 0&&(He=1),j.morphAttributes.normal!==void 0&&(He=2),j.morphAttributes.color!==void 0&&(He=3);let re,ge,Pe,we;if(ie){const Yt=Ti[ie];re=Yt.vertexShader,ge=Yt.fragmentShader}else re=A.vertexShader,ge=A.fragmentShader,u.update(A),Pe=u.getVertexShaderID(A),we=u.getFragmentShaderID(A);const st=r.getRenderTarget(),et=K.isInstancedMesh===!0,at=K.isBatchedMesh===!0,tt=!!A.map,pe=!!A.matcap,O=!!H,Te=!!A.aoMap,Ee=!!A.lightMap,ye=!!A.bumpMap,Ae=!!A.normalMap,je=!!A.displacementMap,Le=!!A.emissiveMap,N=!!A.metalnessMap,R=!!A.roughnessMap,J=A.anisotropy>0,ae=A.clearcoat>0,fe=A.dispersion>0,he=A.iridescence>0,qe=A.sheen>0,be=A.transmission>0,De=J&&!!A.anisotropyMap,At=ae&&!!A.clearcoatMap,xe=ae&&!!A.clearcoatNormalMap,Ne=ae&&!!A.clearcoatRoughnessMap,ct=he&&!!A.iridescenceMap,ut=he&&!!A.iridescenceThicknessMap,ke=qe&&!!A.sheenColorMap,_t=qe&&!!A.sheenRoughnessMap,k=!!A.specularMap,me=!!A.specularColorMap,z=!!A.specularIntensityMap,_e=be&&!!A.transmissionMap,$=be&&!!A.thicknessMap,de=!!A.gradientMap,Ce=!!A.alphaMap,Be=A.alphaTest>0,Mt=!!A.alphaHash,Ct=!!A.extensions;let Ht=Wi;A.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ht=r.toneMapping);const yt={shaderID:ie,shaderType:A.type,shaderName:A.name,vertexShader:re,fragmentShader:ge,defines:A.defines,customVertexShaderID:Pe,customFragmentShaderID:we,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:at,batchingColor:at&&K._colorsTexture!==null,instancing:et,instancingColor:et&&K.instanceColor!==null,instancingMorph:et&&K.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:st===null?r.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:yr,alphaToCoverage:!!A.alphaToCoverage,map:tt,matcap:pe,envMap:O,envMapMode:O&&H.mapping,envMapCubeUVHeight:oe,aoMap:Te,lightMap:Ee,bumpMap:ye,normalMap:Ae,displacementMap:g&&je,emissiveMap:Le,normalMapObjectSpace:Ae&&A.normalMapType===o_,normalMapTangentSpace:Ae&&A.normalMapType===Gr,metalnessMap:N,roughnessMap:R,anisotropy:J,anisotropyMap:De,clearcoat:ae,clearcoatMap:At,clearcoatNormalMap:xe,clearcoatRoughnessMap:Ne,dispersion:fe,iridescence:he,iridescenceMap:ct,iridescenceThicknessMap:ut,sheen:qe,sheenColorMap:ke,sheenRoughnessMap:_t,specularMap:k,specularColorMap:me,specularIntensityMap:z,transmission:be,transmissionMap:_e,thicknessMap:$,gradientMap:de,opaque:A.transparent===!1&&A.blending===ws&&A.alphaToCoverage===!1,alphaMap:Ce,alphaTest:Be,alphaHash:Mt,combine:A.combine,mapUv:tt&&x(A.map.channel),aoMapUv:Te&&x(A.aoMap.channel),lightMapUv:Ee&&x(A.lightMap.channel),bumpMapUv:ye&&x(A.bumpMap.channel),normalMapUv:Ae&&x(A.normalMap.channel),displacementMapUv:je&&x(A.displacementMap.channel),emissiveMapUv:Le&&x(A.emissiveMap.channel),metalnessMapUv:N&&x(A.metalnessMap.channel),roughnessMapUv:R&&x(A.roughnessMap.channel),anisotropyMapUv:De&&x(A.anisotropyMap.channel),clearcoatMapUv:At&&x(A.clearcoatMap.channel),clearcoatNormalMapUv:xe&&x(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&x(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&x(A.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&x(A.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&x(A.sheenColorMap.channel),sheenRoughnessMapUv:_t&&x(A.sheenRoughnessMap.channel),specularMapUv:k&&x(A.specularMap.channel),specularColorMapUv:me&&x(A.specularColorMap.channel),specularIntensityMapUv:z&&x(A.specularIntensityMap.channel),transmissionMapUv:_e&&x(A.transmissionMap.channel),thicknessMapUv:$&&x(A.thicknessMap.channel),alphaMapUv:Ce&&x(A.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ae||J),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!j.attributes.uv&&(tt||Ce),fog:!!ce,useFog:A.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:m,skinning:K.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:He,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&Y.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ht,decodeVideoTexture:tt&&A.map.isVideoTexture===!0&&Ot.getTransfer(A.map.colorSpace)===Vt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ki,flipSided:A.side===Hn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ct&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&A.extensions.multiDraw===!0||at)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return yt.vertexUv1s=h.has(1),yt.vertexUv2s=h.has(2),yt.vertexUv3s=h.has(3),h.clear(),yt}function E(A){const C=[];if(A.shaderID?C.push(A.shaderID):(C.push(A.customVertexShaderID),C.push(A.customFragmentShaderID)),A.defines!==void 0)for(const Y in A.defines)C.push(Y),C.push(A.defines[Y]);return A.isRawShaderMaterial===!1&&(w(C,A),b(C,A),C.push(r.outputColorSpace)),C.push(A.customProgramCacheKey),C.join()}function w(A,C){A.push(C.precision),A.push(C.outputColorSpace),A.push(C.envMapMode),A.push(C.envMapCubeUVHeight),A.push(C.mapUv),A.push(C.alphaMapUv),A.push(C.lightMapUv),A.push(C.aoMapUv),A.push(C.bumpMapUv),A.push(C.normalMapUv),A.push(C.displacementMapUv),A.push(C.emissiveMapUv),A.push(C.metalnessMapUv),A.push(C.roughnessMapUv),A.push(C.anisotropyMapUv),A.push(C.clearcoatMapUv),A.push(C.clearcoatNormalMapUv),A.push(C.clearcoatRoughnessMapUv),A.push(C.iridescenceMapUv),A.push(C.iridescenceThicknessMapUv),A.push(C.sheenColorMapUv),A.push(C.sheenRoughnessMapUv),A.push(C.specularMapUv),A.push(C.specularColorMapUv),A.push(C.specularIntensityMapUv),A.push(C.transmissionMapUv),A.push(C.thicknessMapUv),A.push(C.combine),A.push(C.fogExp2),A.push(C.sizeAttenuation),A.push(C.morphTargetsCount),A.push(C.morphAttributeCount),A.push(C.numDirLights),A.push(C.numPointLights),A.push(C.numSpotLights),A.push(C.numSpotLightMaps),A.push(C.numHemiLights),A.push(C.numRectAreaLights),A.push(C.numDirLightShadows),A.push(C.numPointLightShadows),A.push(C.numSpotLightShadows),A.push(C.numSpotLightShadowsWithMaps),A.push(C.numLightProbes),A.push(C.shadowMapType),A.push(C.toneMapping),A.push(C.numClippingPlanes),A.push(C.numClipIntersection),A.push(C.depthPacking)}function b(A,C){c.disableAll(),C.supportsVertexTextures&&c.enable(0),C.instancing&&c.enable(1),C.instancingColor&&c.enable(2),C.instancingMorph&&c.enable(3),C.matcap&&c.enable(4),C.envMap&&c.enable(5),C.normalMapObjectSpace&&c.enable(6),C.normalMapTangentSpace&&c.enable(7),C.clearcoat&&c.enable(8),C.iridescence&&c.enable(9),C.alphaTest&&c.enable(10),C.vertexColors&&c.enable(11),C.vertexAlphas&&c.enable(12),C.vertexUv1s&&c.enable(13),C.vertexUv2s&&c.enable(14),C.vertexUv3s&&c.enable(15),C.vertexTangents&&c.enable(16),C.anisotropy&&c.enable(17),C.alphaHash&&c.enable(18),C.batching&&c.enable(19),C.dispersion&&c.enable(20),C.batchingColor&&c.enable(21),A.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reverseDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.alphaToCoverage&&c.enable(20),A.push(c.mask)}function U(A){const C=M[A.type];let Y;if(C){const Z=Ti[C];Y=Yu.clone(Z.uniforms)}else Y=A.uniforms;return Y}function P(A,C){let Y;for(let Z=0,K=f.length;Z<K;Z++){const ce=f[Z];if(ce.cacheKey===C){Y=ce,++Y.usedTimes;break}}return Y===void 0&&(Y=new gT(r,C,A,s),f.push(Y)),Y}function L(A){if(--A.usedTimes===0){const C=f.indexOf(A);f[C]=f[f.length-1],f.pop(),A.destroy()}}function F(A){u.remove(A)}function G(){u.dispose()}return{getParameters:_,getProgramCacheKey:E,getUniforms:U,acquireProgram:P,releaseProgram:L,releaseShaderCache:F,programs:f,dispose:G}}function ST(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let c=r.get(a);return c===void 0&&(c={},r.set(a,c)),c}function n(a){r.delete(a)}function i(a,c,u){r.get(a)[c]=u}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function MT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function p0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function m0(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(p,m,g,y,M,x){let _=r[e];return _===void 0?(_={id:p.id,object:p,geometry:m,material:g,groupOrder:y,renderOrder:p.renderOrder,z:M,group:x},r[e]=_):(_.id=p.id,_.object=p,_.geometry=m,_.material=g,_.groupOrder=y,_.renderOrder=p.renderOrder,_.z=M,_.group=x),e++,_}function c(p,m,g,y,M,x){const _=a(p,m,g,y,M,x);g.transmission>0?n.push(_):g.transparent===!0?i.push(_):t.push(_)}function u(p,m,g,y,M,x){const _=a(p,m,g,y,M,x);g.transmission>0?n.unshift(_):g.transparent===!0?i.unshift(_):t.unshift(_)}function h(p,m){t.length>1&&t.sort(p||MT),n.length>1&&n.sort(m||p0),i.length>1&&i.sort(m||p0)}function f(){for(let p=e,m=r.length;p<m;p++){const g=r[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:u,finish:f,sort:h}}function wT(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new m0,r.set(n,[a])):i>=s.length?(a=new m0,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function ET(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ze};break;case"SpotLight":t={position:new D,direction:new D,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function TT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let AT=0;function bT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function CT(r){const e=new ET,t=TT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new D);const i=new D,s=new rt,a=new rt;function c(h){let f=0,p=0,m=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let g=0,y=0,M=0,x=0,_=0,E=0,w=0,b=0,U=0,P=0,L=0;h.sort(bT);for(let G=0,A=h.length;G<A;G++){const C=h[G],Y=C.color,Z=C.intensity,K=C.distance,ce=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=Y.r*Z,p+=Y.g*Z,m+=Y.b*Z;else if(C.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(C.sh.coefficients[j],Z);L++}else if(C.isDirectionalLight){const j=e.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ve=C.shadow,H=t.get(C);H.shadowIntensity=ve.intensity,H.shadowBias=ve.bias,H.shadowNormalBias=ve.normalBias,H.shadowRadius=ve.radius,H.shadowMapSize=ve.mapSize,n.directionalShadow[g]=H,n.directionalShadowMap[g]=ce,n.directionalShadowMatrix[g]=C.shadow.matrix,E++}n.directional[g]=j,g++}else if(C.isSpotLight){const j=e.get(C);j.position.setFromMatrixPosition(C.matrixWorld),j.color.copy(Y).multiplyScalar(Z),j.distance=K,j.coneCos=Math.cos(C.angle),j.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),j.decay=C.decay,n.spot[M]=j;const ve=C.shadow;if(C.map&&(n.spotLightMap[U]=C.map,U++,ve.updateMatrices(C),C.castShadow&&P++),n.spotLightMatrix[M]=ve.matrix,C.castShadow){const H=t.get(C);H.shadowIntensity=ve.intensity,H.shadowBias=ve.bias,H.shadowNormalBias=ve.normalBias,H.shadowRadius=ve.radius,H.shadowMapSize=ve.mapSize,n.spotShadow[M]=H,n.spotShadowMap[M]=ce,b++}M++}else if(C.isRectAreaLight){const j=e.get(C);j.color.copy(Y).multiplyScalar(Z),j.halfWidth.set(C.width*.5,0,0),j.halfHeight.set(0,C.height*.5,0),n.rectArea[x]=j,x++}else if(C.isPointLight){const j=e.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),j.distance=C.distance,j.decay=C.decay,C.castShadow){const ve=C.shadow,H=t.get(C);H.shadowIntensity=ve.intensity,H.shadowBias=ve.bias,H.shadowNormalBias=ve.normalBias,H.shadowRadius=ve.radius,H.shadowMapSize=ve.mapSize,H.shadowCameraNear=ve.camera.near,H.shadowCameraFar=ve.camera.far,n.pointShadow[y]=H,n.pointShadowMap[y]=ce,n.pointShadowMatrix[y]=C.shadow.matrix,w++}n.point[y]=j,y++}else if(C.isHemisphereLight){const j=e.get(C);j.skyColor.copy(C.color).multiplyScalar(Z),j.groundColor.copy(C.groundColor).multiplyScalar(Z),n.hemi[_]=j,_++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=m;const F=n.hash;(F.directionalLength!==g||F.pointLength!==y||F.spotLength!==M||F.rectAreaLength!==x||F.hemiLength!==_||F.numDirectionalShadows!==E||F.numPointShadows!==w||F.numSpotShadows!==b||F.numSpotMaps!==U||F.numLightProbes!==L)&&(n.directional.length=g,n.spot.length=M,n.rectArea.length=x,n.point.length=y,n.hemi.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=b+U-P,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=L,F.directionalLength=g,F.pointLength=y,F.spotLength=M,F.rectAreaLength=x,F.hemiLength=_,F.numDirectionalShadows=E,F.numPointShadows=w,F.numSpotShadows=b,F.numSpotMaps=U,F.numLightProbes=L,n.version=AT++)}function u(h,f){let p=0,m=0,g=0,y=0,M=0;const x=f.matrixWorldInverse;for(let _=0,E=h.length;_<E;_++){const w=h[_];if(w.isDirectionalLight){const b=n.directional[p];b.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(x),p++}else if(w.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(x),g++}else if(w.isRectAreaLight){const b=n.rectArea[y];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(x),a.identity(),s.copy(w.matrixWorld),s.premultiply(x),a.extractRotation(s),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),y++}else if(w.isPointLight){const b=n.point[m];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(x),m++}else if(w.isHemisphereLight){const b=n.hemi[M];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(x),M++}}}return{setup:c,setupView:u,state:n}}function g0(r){const e=new CT(r),t=[],n=[];function i(f){h.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function a(f){n.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:a}}function RT(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let c;return a===void 0?(c=new g0(r),e.set(i,[c])):s>=a.length?(c=new g0(r),a.push(c)):c=a[s],c}function n(){e=new WeakMap}return{get:t,dispose:n}}class Ep extends Dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=r_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tp extends Dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const PT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function LT(r,e,t){let n=new rl;const i=new le,s=new le,a=new Tt,c=new Ep({depthPacking:s_}),u=new Tp,h={},f=t.maxTextureSize,p={[mr]:Hn,[Hn]:mr,[ki]:ki},m=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:PT,fragmentShader:IT}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const y=new St;y.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new nn(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qu;let _=this.type;this.render=function(P,L,F){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;const G=r.getRenderTarget(),A=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(pr),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const Z=_!==Ei&&this.type===Ei,K=_===Ei&&this.type!==Ei;for(let ce=0,j=P.length;ce<j;ce++){const ve=P[ce],H=ve.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ve,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const oe=H.getFrameExtents();if(i.multiply(oe),s.copy(H.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/oe.x),i.x=s.x*oe.x,H.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/oe.y),i.y=s.y*oe.y,H.mapSize.y=s.y)),H.map===null||Z===!0||K===!0){const ue=this.type!==Ei?{minFilter:vn,magFilter:vn}:{};H.map!==null&&H.map.dispose(),H.map=new bi(i.x,i.y,ue),H.map.texture.name=ve.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const ie=H.getViewportCount();for(let ue=0;ue<ie;ue++){const Fe=H.getViewport(ue);a.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),Y.viewport(a),H.updateMatrices(ve,ue),n=H.getFrustum(),b(L,F,H.camera,ve,this.type)}H.isPointLightShadow!==!0&&this.type===Ei&&E(H,F),H.needsUpdate=!1}_=this.type,x.needsUpdate=!1,r.setRenderTarget(G,A,C)};function E(P,L){const F=e.update(M);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,g.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new bi(i.x,i.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(L,null,F,m,M,null),g.uniforms.shadow_pass.value=P.mapPass.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(L,null,F,g,M,null)}function w(P,L,F,G){let A=null;const C=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(C!==void 0)A=C;else if(A=F.isPointLight===!0?u:c,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const Y=A.uuid,Z=L.uuid;let K=h[Y];K===void 0&&(K={},h[Y]=K);let ce=K[Z];ce===void 0&&(ce=A.clone(),K[Z]=ce,L.addEventListener("dispose",U)),A=ce}if(A.visible=L.visible,A.wireframe=L.wireframe,G===Ei?A.side=L.shadowSide!==null?L.shadowSide:L.side:A.side=L.shadowSide!==null?L.shadowSide:p[L.side],A.alphaMap=L.alphaMap,A.alphaTest=L.alphaTest,A.map=L.map,A.clipShadows=L.clipShadows,A.clippingPlanes=L.clippingPlanes,A.clipIntersection=L.clipIntersection,A.displacementMap=L.displacementMap,A.displacementScale=L.displacementScale,A.displacementBias=L.displacementBias,A.wireframeLinewidth=L.wireframeLinewidth,A.linewidth=L.linewidth,F.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const Y=r.properties.get(A);Y.light=F}return A}function b(P,L,F,G,A){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&A===Ei)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const Z=e.update(P),K=P.material;if(Array.isArray(K)){const ce=Z.groups;for(let j=0,ve=ce.length;j<ve;j++){const H=ce[j],oe=K[H.materialIndex];if(oe&&oe.visible){const ie=w(P,oe,G,A);P.onBeforeShadow(r,P,L,F,Z,ie,H),r.renderBufferDirect(F,null,Z,ie,P,H),P.onAfterShadow(r,P,L,F,Z,ie,H)}}}else if(K.visible){const ce=w(P,K,G,A);P.onBeforeShadow(r,P,L,F,Z,ce,null),r.renderBufferDirect(F,null,Z,ce,P,null),P.onAfterShadow(r,P,L,F,Z,ce,null)}}const Y=P.children;for(let Z=0,K=Y.length;Z<K;Z++)b(Y[Z],L,F,G,A)}function U(P){P.target.removeEventListener("dispose",U);for(const F in h){const G=h[F],A=P.target.uuid;A in G&&(G[A].dispose(),delete G[A])}}}const DT={[fu]:du,[pu]:vu,[mu]:_u,[Rs]:gu,[du]:fu,[vu]:pu,[_u]:mu,[gu]:Rs};function UT(r){function e(){let z=!1;const _e=new Tt;let $=null;const de=new Tt(0,0,0,0);return{setMask:function(Ce){$!==Ce&&!z&&(r.colorMask(Ce,Ce,Ce,Ce),$=Ce)},setLocked:function(Ce){z=Ce},setClear:function(Ce,Be,Mt,Ct,Ht){Ht===!0&&(Ce*=Ct,Be*=Ct,Mt*=Ct),_e.set(Ce,Be,Mt,Ct),de.equals(_e)===!1&&(r.clearColor(Ce,Be,Mt,Ct),de.copy(_e))},reset:function(){z=!1,$=null,de.set(-1,0,0,0)}}}function t(){let z=!1,_e=!1,$=null,de=null,Ce=null;return{setReversed:function(Be){_e=Be},setTest:function(Be){Be?Pe(r.DEPTH_TEST):we(r.DEPTH_TEST)},setMask:function(Be){$!==Be&&!z&&(r.depthMask(Be),$=Be)},setFunc:function(Be){if(_e&&(Be=DT[Be]),de!==Be){switch(Be){case fu:r.depthFunc(r.NEVER);break;case du:r.depthFunc(r.ALWAYS);break;case pu:r.depthFunc(r.LESS);break;case Rs:r.depthFunc(r.LEQUAL);break;case mu:r.depthFunc(r.EQUAL);break;case gu:r.depthFunc(r.GEQUAL);break;case vu:r.depthFunc(r.GREATER);break;case _u:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=Be}},setLocked:function(Be){z=Be},setClear:function(Be){Ce!==Be&&(r.clearDepth(Be),Ce=Be)},reset:function(){z=!1,$=null,de=null,Ce=null}}}function n(){let z=!1,_e=null,$=null,de=null,Ce=null,Be=null,Mt=null,Ct=null,Ht=null;return{setTest:function(yt){z||(yt?Pe(r.STENCIL_TEST):we(r.STENCIL_TEST))},setMask:function(yt){_e!==yt&&!z&&(r.stencilMask(yt),_e=yt)},setFunc:function(yt,Yt,fn){($!==yt||de!==Yt||Ce!==fn)&&(r.stencilFunc(yt,Yt,fn),$=yt,de=Yt,Ce=fn)},setOp:function(yt,Yt,fn){(Be!==yt||Mt!==Yt||Ct!==fn)&&(r.stencilOp(yt,Yt,fn),Be=yt,Mt=Yt,Ct=fn)},setLocked:function(yt){z=yt},setClear:function(yt){Ht!==yt&&(r.clearStencil(yt),Ht=yt)},reset:function(){z=!1,_e=null,$=null,de=null,Ce=null,Be=null,Mt=null,Ct=null,Ht=null}}}const i=new e,s=new t,a=new n,c=new WeakMap,u=new WeakMap;let h={},f={},p=new WeakMap,m=[],g=null,y=!1,M=null,x=null,_=null,E=null,w=null,b=null,U=null,P=new ze(0,0,0),L=0,F=!1,G=null,A=null,C=null,Y=null,Z=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,j=0;const ve=r.getParameter(r.VERSION);ve.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ve)[1]),ce=j>=1):ve.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ve)[1]),ce=j>=2);let H=null,oe={};const ie=r.getParameter(r.SCISSOR_BOX),ue=r.getParameter(r.VIEWPORT),Fe=new Tt().fromArray(ie),He=new Tt().fromArray(ue);function re(z,_e,$,de){const Ce=new Uint8Array(4),Be=r.createTexture();r.bindTexture(z,Be),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Mt=0;Mt<$;Mt++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(_e,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,Ce):r.texImage2D(_e+Mt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ce);return Be}const ge={};ge[r.TEXTURE_2D]=re(r.TEXTURE_2D,r.TEXTURE_2D,1),ge[r.TEXTURE_CUBE_MAP]=re(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[r.TEXTURE_2D_ARRAY]=re(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ge[r.TEXTURE_3D]=re(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Pe(r.DEPTH_TEST),s.setFunc(Rs),Ee(!1),ye(zd),Pe(r.CULL_FACE),O(pr);function Pe(z){h[z]!==!0&&(r.enable(z),h[z]=!0)}function we(z){h[z]!==!1&&(r.disable(z),h[z]=!1)}function st(z,_e){return f[z]!==_e?(r.bindFramebuffer(z,_e),f[z]=_e,z===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=_e),z===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=_e),!0):!1}function et(z,_e){let $=m,de=!1;if(z){$=p.get(_e),$===void 0&&($=[],p.set(_e,$));const Ce=z.textures;if($.length!==Ce.length||$[0]!==r.COLOR_ATTACHMENT0){for(let Be=0,Mt=Ce.length;Be<Mt;Be++)$[Be]=r.COLOR_ATTACHMENT0+Be;$.length=Ce.length,de=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,de=!0);de&&r.drawBuffers($)}function at(z){return g!==z?(r.useProgram(z),g=z,!0):!1}const tt={[zr]:r.FUNC_ADD,[Rv]:r.FUNC_SUBTRACT,[Pv]:r.FUNC_REVERSE_SUBTRACT};tt[Iv]=r.MIN,tt[Lv]=r.MAX;const pe={[Dv]:r.ZERO,[Uv]:r.ONE,[Nv]:r.SRC_COLOR,[uu]:r.SRC_ALPHA,[Hv]:r.SRC_ALPHA_SATURATE,[zv]:r.DST_COLOR,[Fv]:r.DST_ALPHA,[Ov]:r.ONE_MINUS_SRC_COLOR,[hu]:r.ONE_MINUS_SRC_ALPHA,[kv]:r.ONE_MINUS_DST_COLOR,[Bv]:r.ONE_MINUS_DST_ALPHA,[Vv]:r.CONSTANT_COLOR,[Gv]:r.ONE_MINUS_CONSTANT_COLOR,[Wv]:r.CONSTANT_ALPHA,[Xv]:r.ONE_MINUS_CONSTANT_ALPHA};function O(z,_e,$,de,Ce,Be,Mt,Ct,Ht,yt){if(z===pr){y===!0&&(we(r.BLEND),y=!1);return}if(y===!1&&(Pe(r.BLEND),y=!0),z!==Cv){if(z!==M||yt!==F){if((x!==zr||w!==zr)&&(r.blendEquation(r.FUNC_ADD),x=zr,w=zr),yt)switch(z){case ws:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kd:r.blendFunc(r.ONE,r.ONE);break;case Hd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vd:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ws:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kd:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Hd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vd:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}_=null,E=null,b=null,U=null,P.set(0,0,0),L=0,M=z,F=yt}return}Ce=Ce||_e,Be=Be||$,Mt=Mt||de,(_e!==x||Ce!==w)&&(r.blendEquationSeparate(tt[_e],tt[Ce]),x=_e,w=Ce),($!==_||de!==E||Be!==b||Mt!==U)&&(r.blendFuncSeparate(pe[$],pe[de],pe[Be],pe[Mt]),_=$,E=de,b=Be,U=Mt),(Ct.equals(P)===!1||Ht!==L)&&(r.blendColor(Ct.r,Ct.g,Ct.b,Ht),P.copy(Ct),L=Ht),M=z,F=!1}function Te(z,_e){z.side===ki?we(r.CULL_FACE):Pe(r.CULL_FACE);let $=z.side===Hn;_e&&($=!$),Ee($),z.blending===ws&&z.transparent===!1?O(pr):O(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),i.setMask(z.colorWrite);const de=z.stencilWrite;a.setTest(de),de&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),je(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Pe(r.SAMPLE_ALPHA_TO_COVERAGE):we(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(z){G!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),G=z)}function ye(z){z!==Tv?(Pe(r.CULL_FACE),z!==A&&(z===zd?r.cullFace(r.BACK):z===Av?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):we(r.CULL_FACE),A=z}function Ae(z){z!==C&&(ce&&r.lineWidth(z),C=z)}function je(z,_e,$){z?(Pe(r.POLYGON_OFFSET_FILL),(Y!==_e||Z!==$)&&(r.polygonOffset(_e,$),Y=_e,Z=$)):we(r.POLYGON_OFFSET_FILL)}function Le(z){z?Pe(r.SCISSOR_TEST):we(r.SCISSOR_TEST)}function N(z){z===void 0&&(z=r.TEXTURE0+K-1),H!==z&&(r.activeTexture(z),H=z)}function R(z,_e,$){$===void 0&&(H===null?$=r.TEXTURE0+K-1:$=H);let de=oe[$];de===void 0&&(de={type:void 0,texture:void 0},oe[$]=de),(de.type!==z||de.texture!==_e)&&(H!==$&&(r.activeTexture($),H=$),r.bindTexture(z,_e||ge[z]),de.type=z,de.texture=_e)}function J(){const z=oe[H];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ae(){try{r.compressedTexImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{r.compressedTexImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{r.texSubImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function qe(){try{r.texSubImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function be(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function De(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function At(){try{r.texStorage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xe(){try{r.texStorage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ne(){try{r.texImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ct(){try{r.texImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ut(z){Fe.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),Fe.copy(z))}function ke(z){He.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),He.copy(z))}function _t(z,_e){let $=u.get(_e);$===void 0&&($=new WeakMap,u.set(_e,$));let de=$.get(z);de===void 0&&(de=r.getUniformBlockIndex(_e,z.name),$.set(z,de))}function k(z,_e){const de=u.get(_e).get(z);c.get(_e)!==de&&(r.uniformBlockBinding(_e,de,z.__bindingPointIndex),c.set(_e,de))}function me(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},H=null,oe={},f={},p=new WeakMap,m=[],g=null,y=!1,M=null,x=null,_=null,E=null,w=null,b=null,U=null,P=new ze(0,0,0),L=0,F=!1,G=null,A=null,C=null,Y=null,Z=null,Fe.set(0,0,r.canvas.width,r.canvas.height),He.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:Pe,disable:we,bindFramebuffer:st,drawBuffers:et,useProgram:at,setBlending:O,setMaterial:Te,setFlipSided:Ee,setCullFace:ye,setLineWidth:Ae,setPolygonOffset:je,setScissorTest:Le,activeTexture:N,bindTexture:R,unbindTexture:J,compressedTexImage2D:ae,compressedTexImage3D:fe,texImage2D:Ne,texImage3D:ct,updateUBOMapping:_t,uniformBlockBinding:k,texStorage2D:At,texStorage3D:xe,texSubImage2D:he,texSubImage3D:qe,compressedTexSubImage2D:be,compressedTexSubImage3D:De,scissor:ut,viewport:ke,reset:me}}function NT(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function OT(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function FT(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function Zd(r,e,t,n){const i=BT(n);switch(t){case up:return r*e;case fp:return r*e;case dp:return r*e*2;case ih:return r*e/i.components*i.byteLength;case el:return r*e/i.components*i.byteLength;case pp:return r*e*2/i.components*i.byteLength;case rh:return r*e*2/i.components*i.byteLength;case hp:return r*e*3/i.components*i.byteLength;case In:return r*e*4/i.components*i.byteLength;case sh:return r*e*4/i.components*i.byteLength;case Ea:case Ta:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Aa:case ba:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xu:case Mu:return Math.max(r,16)*Math.max(e,8)/4;case yu:case Su:return Math.max(r,8)*Math.max(e,8)/2;case wu:case Eu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Au:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case bu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Cu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ru:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Pu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Iu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Lu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Du:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Uu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Nu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ou:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Fu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Bu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case zu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ca:case ku:case Hu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case mp:case Vu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Gu:case Wu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function BT(r){switch(r){case Ai:case ap:return{byteLength:1,components:1};case Ro:case lp:case Oo:return{byteLength:2,components:1};case th:case nh:return{byteLength:2,components:4};case vr:case eh:case Zn:return{byteLength:4,components:1};case cp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}const zT={contain:NT,cover:OT,fill:FT,getByteLength:Zd};function kT(r,e,t,n,i,s,a){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new le,f=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(N,R){return g?new OffscreenCanvas(N,R):Ga("canvas")}function M(N,R,J){let ae=1;const fe=Le(N);if((fe.width>J||fe.height>J)&&(ae=J/Math.max(fe.width,fe.height)),ae<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const he=Math.floor(ae*fe.width),qe=Math.floor(ae*fe.height);p===void 0&&(p=y(he,qe));const be=R?y(he,qe):p;return be.width=he,be.height=qe,be.getContext("2d").drawImage(N,0,0,he,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+he+"x"+qe+")."),be}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),N;return N}function x(N){return N.generateMipmaps&&N.minFilter!==vn&&N.minFilter!==an}function _(N){r.generateMipmap(N)}function E(N,R,J,ae,fe=!1){if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let he=R;if(R===r.RED&&(J===r.FLOAT&&(he=r.R32F),J===r.HALF_FLOAT&&(he=r.R16F),J===r.UNSIGNED_BYTE&&(he=r.R8)),R===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(he=r.R8UI),J===r.UNSIGNED_SHORT&&(he=r.R16UI),J===r.UNSIGNED_INT&&(he=r.R32UI),J===r.BYTE&&(he=r.R8I),J===r.SHORT&&(he=r.R16I),J===r.INT&&(he=r.R32I)),R===r.RG&&(J===r.FLOAT&&(he=r.RG32F),J===r.HALF_FLOAT&&(he=r.RG16F),J===r.UNSIGNED_BYTE&&(he=r.RG8)),R===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(he=r.RG8UI),J===r.UNSIGNED_SHORT&&(he=r.RG16UI),J===r.UNSIGNED_INT&&(he=r.RG32UI),J===r.BYTE&&(he=r.RG8I),J===r.SHORT&&(he=r.RG16I),J===r.INT&&(he=r.RG32I)),R===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(he=r.RGB8UI),J===r.UNSIGNED_SHORT&&(he=r.RGB16UI),J===r.UNSIGNED_INT&&(he=r.RGB32UI),J===r.BYTE&&(he=r.RGB8I),J===r.SHORT&&(he=r.RGB16I),J===r.INT&&(he=r.RGB32I)),R===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(he=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(he=r.RGBA16UI),J===r.UNSIGNED_INT&&(he=r.RGBA32UI),J===r.BYTE&&(he=r.RGBA8I),J===r.SHORT&&(he=r.RGBA16I),J===r.INT&&(he=r.RGBA32I)),R===r.RGB&&J===r.UNSIGNED_INT_5_9_9_9_REV&&(he=r.RGB9_E5),R===r.RGBA){const qe=fe?Ba:Ot.getTransfer(ae);J===r.FLOAT&&(he=r.RGBA32F),J===r.HALF_FLOAT&&(he=r.RGBA16F),J===r.UNSIGNED_BYTE&&(he=qe===Vt?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT_4_4_4_4&&(he=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(he=r.RGB5_A1)}return(he===r.R16F||he===r.R32F||he===r.RG16F||he===r.RG32F||he===r.RGBA16F||he===r.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function w(N,R){let J;return N?R===null||R===vr||R===Ps?J=r.DEPTH24_STENCIL8:R===Zn?J=r.DEPTH32F_STENCIL8:R===Ro&&(J=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===vr||R===Ps?J=r.DEPTH_COMPONENT24:R===Zn?J=r.DEPTH_COMPONENT32F:R===Ro&&(J=r.DEPTH_COMPONENT16),J}function b(N,R){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==vn&&N.minFilter!==an?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function U(N){const R=N.target;R.removeEventListener("dispose",U),L(R),R.isVideoTexture&&f.delete(R)}function P(N){const R=N.target;R.removeEventListener("dispose",P),G(R)}function L(N){const R=n.get(N);if(R.__webglInit===void 0)return;const J=N.source,ae=m.get(J);if(ae){const fe=ae[R.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&F(N),Object.keys(ae).length===0&&m.delete(J)}n.remove(N)}function F(N){const R=n.get(N);r.deleteTexture(R.__webglTexture);const J=N.source,ae=m.get(J);delete ae[R.__cacheKey],a.memory.textures--}function G(N){const R=n.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(R.__webglFramebuffer[ae]))for(let fe=0;fe<R.__webglFramebuffer[ae].length;fe++)r.deleteFramebuffer(R.__webglFramebuffer[ae][fe]);else r.deleteFramebuffer(R.__webglFramebuffer[ae]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[ae])}else{if(Array.isArray(R.__webglFramebuffer))for(let ae=0;ae<R.__webglFramebuffer.length;ae++)r.deleteFramebuffer(R.__webglFramebuffer[ae]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ae=0;ae<R.__webglColorRenderbuffer.length;ae++)R.__webglColorRenderbuffer[ae]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[ae]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const J=N.textures;for(let ae=0,fe=J.length;ae<fe;ae++){const he=n.get(J[ae]);he.__webglTexture&&(r.deleteTexture(he.__webglTexture),a.memory.textures--),n.remove(J[ae])}n.remove(N)}let A=0;function C(){A=0}function Y(){const N=A;return N>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),A+=1,N}function Z(N){const R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.wrapR||0),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.colorSpace),R.join()}function K(N,R){const J=n.get(N);if(N.isVideoTexture&&Ae(N),N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){const ae=N.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(J,N,R);return}}t.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+R)}function ce(N,R){const J=n.get(N);if(N.version>0&&J.__version!==N.version){He(J,N,R);return}t.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+R)}function j(N,R){const J=n.get(N);if(N.version>0&&J.__version!==N.version){He(J,N,R);return}t.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+R)}function ve(N,R){const J=n.get(N);if(N.version>0&&J.__version!==N.version){re(J,N,R);return}t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+R)}const H={[Ua]:r.REPEAT,[gi]:r.CLAMP_TO_EDGE,[Na]:r.MIRRORED_REPEAT},oe={[vn]:r.NEAREST,[op]:r.NEAREST_MIPMAP_NEAREST,[Mo]:r.NEAREST_MIPMAP_LINEAR,[an]:r.LINEAR,[wa]:r.LINEAR_MIPMAP_NEAREST,[Vi]:r.LINEAR_MIPMAP_LINEAR},ie={[a_]:r.NEVER,[d_]:r.ALWAYS,[l_]:r.LESS,[vp]:r.LEQUAL,[c_]:r.EQUAL,[f_]:r.GEQUAL,[u_]:r.GREATER,[h_]:r.NOTEQUAL};function ue(N,R){if(R.type===Zn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===an||R.magFilter===wa||R.magFilter===Mo||R.magFilter===Vi||R.minFilter===an||R.minFilter===wa||R.minFilter===Mo||R.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,H[R.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,H[R.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,H[R.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,oe[R.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,oe[R.minFilter]),R.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,ie[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===vn||R.minFilter!==Mo&&R.minFilter!==Vi||R.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Fe(N,R){let J=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",U));const ae=R.source;let fe=m.get(ae);fe===void 0&&(fe={},m.set(ae,fe));const he=Z(R);if(he!==N.__cacheKey){fe[he]===void 0&&(fe[he]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,J=!0),fe[he].usedTimes++;const qe=fe[N.__cacheKey];qe!==void 0&&(fe[N.__cacheKey].usedTimes--,qe.usedTimes===0&&F(R)),N.__cacheKey=he,N.__webglTexture=fe[he].texture}return J}function He(N,R,J){let ae=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ae=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ae=r.TEXTURE_3D);const fe=Fe(N,R),he=R.source;t.bindTexture(ae,N.__webglTexture,r.TEXTURE0+J);const qe=n.get(he);if(he.version!==qe.__version||fe===!0){t.activeTexture(r.TEXTURE0+J);const be=Ot.getPrimaries(Ot.workingColorSpace),De=R.colorSpace===hr?null:Ot.getPrimaries(R.colorSpace),At=R.colorSpace===hr||be===De?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let xe=M(R.image,!1,i.maxTextureSize);xe=je(R,xe);const Ne=s.convert(R.format,R.colorSpace),ct=s.convert(R.type);let ut=E(R.internalFormat,Ne,ct,R.colorSpace,R.isVideoTexture);ue(ae,R);let ke;const _t=R.mipmaps,k=R.isVideoTexture!==!0,me=qe.__version===void 0||fe===!0,z=he.dataReady,_e=b(R,xe);if(R.isDepthTexture)ut=w(R.format===Is,R.type),me&&(k?t.texStorage2D(r.TEXTURE_2D,1,ut,xe.width,xe.height):t.texImage2D(r.TEXTURE_2D,0,ut,xe.width,xe.height,0,Ne,ct,null));else if(R.isDataTexture)if(_t.length>0){k&&me&&t.texStorage2D(r.TEXTURE_2D,_e,ut,_t[0].width,_t[0].height);for(let $=0,de=_t.length;$<de;$++)ke=_t[$],k?z&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,ke.width,ke.height,Ne,ct,ke.data):t.texImage2D(r.TEXTURE_2D,$,ut,ke.width,ke.height,0,Ne,ct,ke.data);R.generateMipmaps=!1}else k?(me&&t.texStorage2D(r.TEXTURE_2D,_e,ut,xe.width,xe.height),z&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,xe.width,xe.height,Ne,ct,xe.data)):t.texImage2D(r.TEXTURE_2D,0,ut,xe.width,xe.height,0,Ne,ct,xe.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){k&&me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,ut,_t[0].width,_t[0].height,xe.depth);for(let $=0,de=_t.length;$<de;$++)if(ke=_t[$],R.format!==In)if(Ne!==null)if(k){if(z)if(R.layerUpdates.size>0){const Ce=Zd(ke.width,ke.height,R.format,R.type);for(const Be of R.layerUpdates){const Mt=ke.data.subarray(Be*Ce/ke.data.BYTES_PER_ELEMENT,(Be+1)*Ce/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,Be,ke.width,ke.height,1,Ne,Mt,0,0)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,ke.width,ke.height,xe.depth,Ne,ke.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,ut,ke.width,ke.height,xe.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?z&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,ke.width,ke.height,xe.depth,Ne,ct,ke.data):t.texImage3D(r.TEXTURE_2D_ARRAY,$,ut,ke.width,ke.height,xe.depth,0,Ne,ct,ke.data)}else{k&&me&&t.texStorage2D(r.TEXTURE_2D,_e,ut,_t[0].width,_t[0].height);for(let $=0,de=_t.length;$<de;$++)ke=_t[$],R.format!==In?Ne!==null?k?z&&t.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,ke.width,ke.height,Ne,ke.data):t.compressedTexImage2D(r.TEXTURE_2D,$,ut,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?z&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,ke.width,ke.height,Ne,ct,ke.data):t.texImage2D(r.TEXTURE_2D,$,ut,ke.width,ke.height,0,Ne,ct,ke.data)}else if(R.isDataArrayTexture)if(k){if(me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,ut,xe.width,xe.height,xe.depth),z)if(R.layerUpdates.size>0){const $=Zd(xe.width,xe.height,R.format,R.type);for(const de of R.layerUpdates){const Ce=xe.data.subarray(de*$/xe.data.BYTES_PER_ELEMENT,(de+1)*$/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,de,xe.width,xe.height,1,Ne,ct,Ce)}R.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ne,ct,xe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ut,xe.width,xe.height,xe.depth,0,Ne,ct,xe.data);else if(R.isData3DTexture)k?(me&&t.texStorage3D(r.TEXTURE_3D,_e,ut,xe.width,xe.height,xe.depth),z&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ne,ct,xe.data)):t.texImage3D(r.TEXTURE_3D,0,ut,xe.width,xe.height,xe.depth,0,Ne,ct,xe.data);else if(R.isFramebufferTexture){if(me)if(k)t.texStorage2D(r.TEXTURE_2D,_e,ut,xe.width,xe.height);else{let $=xe.width,de=xe.height;for(let Ce=0;Ce<_e;Ce++)t.texImage2D(r.TEXTURE_2D,Ce,ut,$,de,0,Ne,ct,null),$>>=1,de>>=1}}else if(_t.length>0){if(k&&me){const $=Le(_t[0]);t.texStorage2D(r.TEXTURE_2D,_e,ut,$.width,$.height)}for(let $=0,de=_t.length;$<de;$++)ke=_t[$],k?z&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,Ne,ct,ke):t.texImage2D(r.TEXTURE_2D,$,ut,Ne,ct,ke);R.generateMipmaps=!1}else if(k){if(me){const $=Le(xe);t.texStorage2D(r.TEXTURE_2D,_e,ut,$.width,$.height)}z&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ne,ct,xe)}else t.texImage2D(r.TEXTURE_2D,0,ut,Ne,ct,xe);x(R)&&_(ae),qe.__version=he.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function re(N,R,J){if(R.image.length!==6)return;const ae=Fe(N,R),fe=R.source;t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+J);const he=n.get(fe);if(fe.version!==he.__version||ae===!0){t.activeTexture(r.TEXTURE0+J);const qe=Ot.getPrimaries(Ot.workingColorSpace),be=R.colorSpace===hr?null:Ot.getPrimaries(R.colorSpace),De=R.colorSpace===hr||qe===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const At=R.isCompressedTexture||R.image[0].isCompressedTexture,xe=R.image[0]&&R.image[0].isDataTexture,Ne=[];for(let de=0;de<6;de++)!At&&!xe?Ne[de]=M(R.image[de],!0,i.maxCubemapSize):Ne[de]=xe?R.image[de].image:R.image[de],Ne[de]=je(R,Ne[de]);const ct=Ne[0],ut=s.convert(R.format,R.colorSpace),ke=s.convert(R.type),_t=E(R.internalFormat,ut,ke,R.colorSpace),k=R.isVideoTexture!==!0,me=he.__version===void 0||ae===!0,z=fe.dataReady;let _e=b(R,ct);ue(r.TEXTURE_CUBE_MAP,R);let $;if(At){k&&me&&t.texStorage2D(r.TEXTURE_CUBE_MAP,_e,_t,ct.width,ct.height);for(let de=0;de<6;de++){$=Ne[de].mipmaps;for(let Ce=0;Ce<$.length;Ce++){const Be=$[Ce];R.format!==In?ut!==null?k?z&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,0,0,Be.width,Be.height,ut,Be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,_t,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,0,0,Be.width,Be.height,ut,ke,Be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,_t,Be.width,Be.height,0,ut,ke,Be.data)}}}else{if($=R.mipmaps,k&&me){$.length>0&&_e++;const de=Le(Ne[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,_e,_t,de.width,de.height)}for(let de=0;de<6;de++)if(xe){k?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ne[de].width,Ne[de].height,ut,ke,Ne[de].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,_t,Ne[de].width,Ne[de].height,0,ut,ke,Ne[de].data);for(let Ce=0;Ce<$.length;Ce++){const Mt=$[Ce].image[de].image;k?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,0,0,Mt.width,Mt.height,ut,ke,Mt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,_t,Mt.width,Mt.height,0,ut,ke,Mt.data)}}else{k?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ut,ke,Ne[de]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,_t,ut,ke,Ne[de]);for(let Ce=0;Ce<$.length;Ce++){const Be=$[Ce];k?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,0,0,ut,ke,Be.image[de]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,_t,ut,ke,Be.image[de])}}}x(R)&&_(r.TEXTURE_CUBE_MAP),he.__version=fe.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function ge(N,R,J,ae,fe,he){const qe=s.convert(J.format,J.colorSpace),be=s.convert(J.type),De=E(J.internalFormat,qe,be,J.colorSpace);if(!n.get(R).__hasExternalTextures){const xe=Math.max(1,R.width>>he),Ne=Math.max(1,R.height>>he);fe===r.TEXTURE_3D||fe===r.TEXTURE_2D_ARRAY?t.texImage3D(fe,he,De,xe,Ne,R.depth,0,qe,be,null):t.texImage2D(fe,he,De,xe,Ne,0,qe,be,null)}t.bindFramebuffer(r.FRAMEBUFFER,N),ye(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,fe,n.get(J).__webglTexture,0,Ee(R)):(fe===r.TEXTURE_2D||fe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ae,fe,n.get(J).__webglTexture,he),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Pe(N,R,J){if(r.bindRenderbuffer(r.RENDERBUFFER,N),R.depthBuffer){const ae=R.depthTexture,fe=ae&&ae.isDepthTexture?ae.type:null,he=w(R.stencilBuffer,fe),qe=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=Ee(R);ye(R)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,he,R.width,R.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,he,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,he,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,qe,r.RENDERBUFFER,N)}else{const ae=R.textures;for(let fe=0;fe<ae.length;fe++){const he=ae[fe],qe=s.convert(he.format,he.colorSpace),be=s.convert(he.type),De=E(he.internalFormat,qe,be,he.colorSpace),At=Ee(R);J&&ye(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,At,De,R.width,R.height):ye(R)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,At,De,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,De,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function we(N,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,N),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),K(R.depthTexture,0);const ae=n.get(R.depthTexture).__webglTexture,fe=Ee(R);if(R.depthTexture.format===Es)ye(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ae,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ae,0);else if(R.depthTexture.format===Is)ye(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ae,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function st(N){const R=n.get(N),J=N.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==N.depthTexture){const ae=N.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ae){const fe=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ae.removeEventListener("dispose",fe)};ae.addEventListener("dispose",fe),R.__depthDisposeCallback=fe}R.__boundDepthTexture=ae}if(N.depthTexture&&!R.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");we(R.__webglFramebuffer,N)}else if(J){R.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[ae]),R.__webglDepthbuffer[ae]===void 0)R.__webglDepthbuffer[ae]=r.createRenderbuffer(),Pe(R.__webglDepthbuffer[ae],N,!1);else{const fe=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=R.__webglDepthbuffer[ae];r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,he)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),Pe(R.__webglDepthbuffer,N,!1);else{const ae=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,fe)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function et(N,R,J){const ae=n.get(N);R!==void 0&&ge(ae.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&st(N)}function at(N){const R=N.texture,J=n.get(N),ae=n.get(R);N.addEventListener("dispose",P);const fe=N.textures,he=N.isWebGLCubeRenderTarget===!0,qe=fe.length>1;if(qe||(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=R.version,a.memory.textures++),he){J.__webglFramebuffer=[];for(let be=0;be<6;be++)if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer[be]=[];for(let De=0;De<R.mipmaps.length;De++)J.__webglFramebuffer[be][De]=r.createFramebuffer()}else J.__webglFramebuffer[be]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer=[];for(let be=0;be<R.mipmaps.length;be++)J.__webglFramebuffer[be]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(qe)for(let be=0,De=fe.length;be<De;be++){const At=n.get(fe[be]);At.__webglTexture===void 0&&(At.__webglTexture=r.createTexture(),a.memory.textures++)}if(N.samples>0&&ye(N)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let be=0;be<fe.length;be++){const De=fe[be];J.__webglColorRenderbuffer[be]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[be]);const At=s.convert(De.format,De.colorSpace),xe=s.convert(De.type),Ne=E(De.internalFormat,At,xe,De.colorSpace,N.isXRRenderTarget===!0),ct=Ee(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,ct,Ne,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,J.__webglColorRenderbuffer[be])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),Pe(J.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){t.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture),ue(r.TEXTURE_CUBE_MAP,R);for(let be=0;be<6;be++)if(R.mipmaps&&R.mipmaps.length>0)for(let De=0;De<R.mipmaps.length;De++)ge(J.__webglFramebuffer[be][De],N,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,De);else ge(J.__webglFramebuffer[be],N,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);x(R)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(qe){for(let be=0,De=fe.length;be<De;be++){const At=fe[be],xe=n.get(At);t.bindTexture(r.TEXTURE_2D,xe.__webglTexture),ue(r.TEXTURE_2D,At),ge(J.__webglFramebuffer,N,At,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,0),x(At)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let be=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(be=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(be,ae.__webglTexture),ue(be,R),R.mipmaps&&R.mipmaps.length>0)for(let De=0;De<R.mipmaps.length;De++)ge(J.__webglFramebuffer[De],N,R,r.COLOR_ATTACHMENT0,be,De);else ge(J.__webglFramebuffer,N,R,r.COLOR_ATTACHMENT0,be,0);x(R)&&_(be),t.unbindTexture()}N.depthBuffer&&st(N)}function tt(N){const R=N.textures;for(let J=0,ae=R.length;J<ae;J++){const fe=R[J];if(x(fe)){const he=N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,qe=n.get(fe).__webglTexture;t.bindTexture(he,qe),_(he),t.unbindTexture()}}}const pe=[],O=[];function Te(N){if(N.samples>0){if(ye(N)===!1){const R=N.textures,J=N.width,ae=N.height;let fe=r.COLOR_BUFFER_BIT;const he=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,qe=n.get(N),be=R.length>1;if(be)for(let De=0;De<R.length;De++)t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let De=0;De<R.length;De++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(fe|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(fe|=r.STENCIL_BUFFER_BIT)),be){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,qe.__webglColorRenderbuffer[De]);const At=n.get(R[De]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,At,0)}r.blitFramebuffer(0,0,J,ae,0,0,J,ae,fe,r.NEAREST),u===!0&&(pe.length=0,O.length=0,pe.push(r.COLOR_ATTACHMENT0+De),N.depthBuffer&&N.resolveDepthBuffer===!1&&(pe.push(he),O.push(he),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,O)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),be)for(let De=0;De<R.length;De++){t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,qe.__webglColorRenderbuffer[De]);const At=n.get(R[De]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,At,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&u){const R=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function Ee(N){return Math.min(i.maxSamples,N.samples)}function ye(N){const R=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ae(N){const R=a.render.frame;f.get(N)!==R&&(f.set(N,R),N.update())}function je(N,R){const J=N.colorSpace,ae=N.format,fe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||J!==yr&&J!==hr&&(Ot.getTransfer(J)===Vt?(ae!==In||fe!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),R}function Le(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=Y,this.resetTextureUnits=C,this.setTexture2D=K,this.setTexture2DArray=ce,this.setTexture3D=j,this.setTextureCube=ve,this.rebindTextures=et,this.setupRenderTarget=at,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ye}function C_(r,e){function t(n,i=hr){let s;const a=Ot.getTransfer(i);if(n===Ai)return r.UNSIGNED_BYTE;if(n===th)return r.UNSIGNED_SHORT_4_4_4_4;if(n===nh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===cp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===ap)return r.BYTE;if(n===lp)return r.SHORT;if(n===Ro)return r.UNSIGNED_SHORT;if(n===eh)return r.INT;if(n===vr)return r.UNSIGNED_INT;if(n===Zn)return r.FLOAT;if(n===Oo)return r.HALF_FLOAT;if(n===up)return r.ALPHA;if(n===hp)return r.RGB;if(n===In)return r.RGBA;if(n===fp)return r.LUMINANCE;if(n===dp)return r.LUMINANCE_ALPHA;if(n===Es)return r.DEPTH_COMPONENT;if(n===Is)return r.DEPTH_STENCIL;if(n===ih)return r.RED;if(n===el)return r.RED_INTEGER;if(n===pp)return r.RG;if(n===rh)return r.RG_INTEGER;if(n===sh)return r.RGBA_INTEGER;if(n===Ea||n===Ta||n===Aa||n===ba)if(a===Vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ea)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ea)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ta)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Aa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ba)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yu||n===xu||n===Su||n===Mu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===yu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Su)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wu||n===Eu||n===Tu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===wu||n===Eu)return a===Vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Tu)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Au||n===bu||n===Cu||n===Ru||n===Pu||n===Iu||n===Lu||n===Du||n===Uu||n===Nu||n===Ou||n===Fu||n===Bu||n===zu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Au)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bu)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cu)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ru)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pu)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Iu)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lu)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Du)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uu)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nu)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ou)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fu)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bu)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zu)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ca||n===ku||n===Hu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ca)return a===Vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ku)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mp||n===Vu||n===Gu||n===Wu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ca)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Vu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class R_ extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class To extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HT={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new To,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new To,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new To,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const c=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,n),_=this._getHandJoint(h,M);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const f=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],m=f.position.distanceTo(p.position),g=.02,y=.005;h.inputState.pinching&&m>g+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=g-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(HT)))}return c!==null&&(c.visible=i!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new To;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const VT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class WT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Qt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new vi({vertexShader:VT,fragmentShader:GT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nn(new Fo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XT extends qi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,c="local-floor",u=1,h=null,f=null,p=null,m=null,g=null,y=null;const M=new WT,x=t.getContextAttributes();let _=null,E=null;const w=[],b=[],U=new le;let P=null;const L=new tn;L.layers.enable(1),L.viewport=new Tt;const F=new tn;F.layers.enable(2),F.viewport=new Tt;const G=[L,F],A=new R_;A.layers.enable(1),A.layers.enable(2);let C=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ge=w[re];return ge===void 0&&(ge=new fd,w[re]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(re){let ge=w[re];return ge===void 0&&(ge=new fd,w[re]=ge),ge.getGripSpace()},this.getHand=function(re){let ge=w[re];return ge===void 0&&(ge=new fd,w[re]=ge),ge.getHandSpace()};function Z(re){const ge=b.indexOf(re.inputSource);if(ge===-1)return;const Pe=w[ge];Pe!==void 0&&(Pe.update(re.inputSource,re.frame,h||a),Pe.dispatchEvent({type:re.type,data:re.inputSource}))}function K(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",ce);for(let re=0;re<w.length;re++){const ge=b[re];ge!==null&&(b[re]=null,w[re].disconnect(ge))}C=null,Y=null,M.reset(),e.setRenderTarget(_),g=null,m=null,p=null,i=null,E=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){c=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(re){h=re},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return i},this.setSession=async function(re){if(i=re,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",K),i.addEventListener("inputsourceschange",ce),x.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(U),i.renderState.layers===void 0){const ge={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(i,t,ge),i.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new bi(g.framebufferWidth,g.framebufferHeight,{format:In,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ge=null,Pe=null,we=null;x.depth&&(we=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=x.stencil?Is:Es,Pe=x.stencil?Ps:vr);const st={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};p=new XRWebGLBinding(i,t),m=p.createProjectionLayer(st),i.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),E=new bi(m.textureWidth,m.textureHeight,{format:In,type:Ai,depthTexture:new wp(m.textureWidth,m.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(u),h=null,a=await i.requestReferenceSpace(c),He.setContext(i),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ce(re){for(let ge=0;ge<re.removed.length;ge++){const Pe=re.removed[ge],we=b.indexOf(Pe);we>=0&&(b[we]=null,w[we].disconnect(Pe))}for(let ge=0;ge<re.added.length;ge++){const Pe=re.added[ge];let we=b.indexOf(Pe);if(we===-1){for(let et=0;et<w.length;et++)if(et>=b.length){b.push(Pe),we=et;break}else if(b[et]===null){b[et]=Pe,we=et;break}if(we===-1)break}const st=w[we];st&&st.connect(Pe)}}const j=new D,ve=new D;function H(re,ge,Pe){j.setFromMatrixPosition(ge.matrixWorld),ve.setFromMatrixPosition(Pe.matrixWorld);const we=j.distanceTo(ve),st=ge.projectionMatrix.elements,et=Pe.projectionMatrix.elements,at=st[14]/(st[10]-1),tt=st[14]/(st[10]+1),pe=(st[9]+1)/st[5],O=(st[9]-1)/st[5],Te=(st[8]-1)/st[0],Ee=(et[8]+1)/et[0],ye=at*Te,Ae=at*Ee,je=we/(-Te+Ee),Le=je*-Te;if(ge.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Le),re.translateZ(je),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),st[10]===-1)re.projectionMatrix.copy(ge.projectionMatrix),re.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const N=at+je,R=tt+je,J=ye-Le,ae=Ae+(we-Le),fe=pe*tt/R*N,he=O*tt/R*N;re.projectionMatrix.makePerspective(J,ae,fe,he,N,R),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function oe(re,ge){ge===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ge.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(i===null)return;let ge=re.near,Pe=re.far;M.texture!==null&&(M.depthNear>0&&(ge=M.depthNear),M.depthFar>0&&(Pe=M.depthFar)),A.near=F.near=L.near=ge,A.far=F.far=L.far=Pe,(C!==A.near||Y!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),C=A.near,Y=A.far);const we=re.parent,st=A.cameras;oe(A,we);for(let et=0;et<st.length;et++)oe(st[et],we);st.length===2?H(A,L,F):A.projectionMatrix.copy(L.projectionMatrix),ie(re,A,we)};function ie(re,ge,Pe){Pe===null?re.matrix.copy(ge.matrixWorld):(re.matrix.copy(Pe.matrixWorld),re.matrix.invert(),re.matrix.multiply(ge.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ge.projectionMatrix),re.projectionMatrixInverse.copy(ge.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Po*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(m===null&&g===null))return u},this.setFoveation=function(re){u=re,m!==null&&(m.fixedFoveation=re),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=re)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(A)};let ue=null;function Fe(re,ge){if(f=ge.getViewerPose(h||a),y=ge,f!==null){const Pe=f.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let we=!1;Pe.length!==A.cameras.length&&(A.cameras.length=0,we=!0);for(let et=0;et<Pe.length;et++){const at=Pe[et];let tt=null;if(g!==null)tt=g.getViewport(at);else{const O=p.getViewSubImage(m,at);tt=O.viewport,et===0&&(e.setRenderTargetTextures(E,O.colorTexture,m.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(E))}let pe=G[et];pe===void 0&&(pe=new tn,pe.layers.enable(et),pe.viewport=new Tt,G[et]=pe),pe.matrix.fromArray(at.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(at.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(tt.x,tt.y,tt.width,tt.height),et===0&&(A.matrix.copy(pe.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),we===!0&&A.cameras.push(pe)}const st=i.enabledFeatures;if(st&&st.includes("depth-sensing")){const et=p.getDepthInformation(Pe[0]);et&&et.isValid&&et.texture&&M.init(e,et,i.renderState)}}for(let Pe=0;Pe<w.length;Pe++){const we=b[Pe],st=w[Pe];we!==null&&st!==void 0&&st.update(we,ge,h||a)}ue&&ue(re,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),y=null}const He=new w_;He.setAnimationLoop(Fe),this.setAnimationLoop=function(re){ue=re},this.dispose=function(){}}}const as=new si,YT=new rt;function qT(r,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,x_(r)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function i(x,_,E,w,b){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(x,_):_.isMeshToonMaterial?(s(x,_),p(x,_)):_.isMeshPhongMaterial?(s(x,_),f(x,_)):_.isMeshStandardMaterial?(s(x,_),m(x,_),_.isMeshPhysicalMaterial&&g(x,_,b)):_.isMeshMatcapMaterial?(s(x,_),y(x,_)):_.isMeshDepthMaterial?s(x,_):_.isMeshDistanceMaterial?(s(x,_),M(x,_)):_.isMeshNormalMaterial?s(x,_):_.isLineBasicMaterial?(a(x,_),_.isLineDashedMaterial&&c(x,_)):_.isPointsMaterial?u(x,_,E,w):_.isSpriteMaterial?h(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Hn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Hn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const E=e.get(_),w=E.envMap,b=E.envMapRotation;w&&(x.envMap.value=w,as.copy(b),as.x*=-1,as.y*=-1,as.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),x.envMapRotation.value.setFromMatrix4(YT.makeRotationFromEuler(as)),x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function a(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function c(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function u(x,_,E,w){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*E,x.scale.value=w*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function f(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function p(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function m(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function g(x,_,E){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Hn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=E.texture,x.transmissionSamplerSize.value.set(E.width,E.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,_){_.matcap&&(x.matcap.value=_.matcap)}function M(x,_){const E=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(E.matrixWorld),x.nearDistance.value=E.shadow.camera.near,x.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ZT(r,e,t,n){let i={},s={},a=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function u(E,w){const b=w.program;n.uniformBlockBinding(E,b)}function h(E,w){let b=i[E.id];b===void 0&&(y(E),b=f(E),i[E.id]=b,E.addEventListener("dispose",x));const U=w.program;n.updateUBOMapping(E,U);const P=e.render.frame;s[E.id]!==P&&(m(E),s[E.id]=P)}function f(E){const w=p();E.__bindingPointIndex=w;const b=r.createBuffer(),U=E.__size,P=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,U,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,b),b}function p(){for(let E=0;E<c;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){const w=i[E.id],b=E.uniforms,U=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let P=0,L=b.length;P<L;P++){const F=Array.isArray(b[P])?b[P]:[b[P]];for(let G=0,A=F.length;G<A;G++){const C=F[G];if(g(C,P,G,U)===!0){const Y=C.__offset,Z=Array.isArray(C.value)?C.value:[C.value];let K=0;for(let ce=0;ce<Z.length;ce++){const j=Z[ce],ve=M(j);typeof j=="number"||typeof j=="boolean"?(C.__data[0]=j,r.bufferSubData(r.UNIFORM_BUFFER,Y+K,C.__data)):j.isMatrix3?(C.__data[0]=j.elements[0],C.__data[1]=j.elements[1],C.__data[2]=j.elements[2],C.__data[3]=0,C.__data[4]=j.elements[3],C.__data[5]=j.elements[4],C.__data[6]=j.elements[5],C.__data[7]=0,C.__data[8]=j.elements[6],C.__data[9]=j.elements[7],C.__data[10]=j.elements[8],C.__data[11]=0):(j.toArray(C.__data,K),K+=ve.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function g(E,w,b,U){const P=E.value,L=w+"_"+b;if(U[L]===void 0)return typeof P=="number"||typeof P=="boolean"?U[L]=P:U[L]=P.clone(),!0;{const F=U[L];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return U[L]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function y(E){const w=E.uniforms;let b=0;const U=16;for(let L=0,F=w.length;L<F;L++){const G=Array.isArray(w[L])?w[L]:[w[L]];for(let A=0,C=G.length;A<C;A++){const Y=G[A],Z=Array.isArray(Y.value)?Y.value:[Y.value];for(let K=0,ce=Z.length;K<ce;K++){const j=Z[K],ve=M(j),H=b%U,oe=H%ve.boundary,ie=H+oe;b+=oe,ie!==0&&U-ie<ve.storage&&(b+=U-ie),Y.__data=new Float32Array(ve.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=b,b+=ve.storage}}}const P=b%U;return P>0&&(b+=U-P),E.__size=b,E.__cache={},this}function M(E){const w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function x(E){const w=E.target;w.removeEventListener("dispose",x);const b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function _(){for(const E in i)r.deleteBuffer(i[E]);a=[],i={},s={}}return{bind:u,update:h,dispose:_}}class P_{constructor(e={}){const{canvas:t=g_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),y=new Int32Array(4);let M=null,x=null;const _=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mi,this.toneMapping=Wi,this.toneMappingExposure=1;const w=this;let b=!1,U=0,P=0,L=null,F=-1,G=null;const A=new Tt,C=new Tt;let Y=null;const Z=new ze(0);let K=0,ce=t.width,j=t.height,ve=1,H=null,oe=null;const ie=new Tt(0,0,ce,j),ue=new Tt(0,0,ce,j);let Fe=!1;const He=new rl;let re=!1,ge=!1;const Pe=new rt,we=new rt,st=new D,et=new Tt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function pe(){return L===null?ve:1}let O=n;function Te(I,W){return t.getContext(I,W)}try{const I={alpha:!0,depth:i,stencil:s,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qa}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",Be,!1),O===null){const W="webgl2";if(O=Te(W,I),O===null)throw Te(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Ee,ye,Ae,je,Le,N,R,J,ae,fe,he,qe,be,De,At,xe,Ne,ct,ut,ke,_t,k,me,z;function _e(){Ee=new eE(O),Ee.init(),k=new C_(O,Ee),ye=new Z1(O,Ee,e,k),Ae=new UT(O),ye.reverseDepthBuffer&&Ae.buffers.depth.setReversed(!0),je=new iE(O),Le=new ST,N=new kT(O,Ee,Ae,Le,ye,k,je),R=new J1(w),J=new $1(w),ae=new uM(O),me=new Y1(O,ae),fe=new tE(O,ae,je,me),he=new sE(O,fe,ae,je),ut=new rE(O,ye,N),xe=new j1(Le),qe=new xT(w,R,J,Ee,ye,me,xe),be=new qT(w,Le),De=new wT,At=new RT(Ee),ct=new X1(w,R,J,Ae,he,m,u),Ne=new LT(w,he,ye),z=new ZT(O,je,ye,Ae),ke=new q1(O,Ee,je),_t=new nE(O,Ee,je),je.programs=qe.programs,w.capabilities=ye,w.extensions=Ee,w.properties=Le,w.renderLists=De,w.shadowMap=Ne,w.state=Ae,w.info=je}_e();const $=new XT(w,O);this.xr=$,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const I=Ee.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Ee.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(I){I!==void 0&&(ve=I,this.setSize(ce,j,!1))},this.getSize=function(I){return I.set(ce,j)},this.setSize=function(I,W,ee=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=I,j=W,t.width=Math.floor(I*ve),t.height=Math.floor(W*ve),ee===!0&&(t.style.width=I+"px",t.style.height=W+"px"),this.setViewport(0,0,I,W)},this.getDrawingBufferSize=function(I){return I.set(ce*ve,j*ve).floor()},this.setDrawingBufferSize=function(I,W,ee){ce=I,j=W,ve=ee,t.width=Math.floor(I*ee),t.height=Math.floor(W*ee),this.setViewport(0,0,I,W)},this.getCurrentViewport=function(I){return I.copy(A)},this.getViewport=function(I){return I.copy(ie)},this.setViewport=function(I,W,ee,te){I.isVector4?ie.set(I.x,I.y,I.z,I.w):ie.set(I,W,ee,te),Ae.viewport(A.copy(ie).multiplyScalar(ve).round())},this.getScissor=function(I){return I.copy(ue)},this.setScissor=function(I,W,ee,te){I.isVector4?ue.set(I.x,I.y,I.z,I.w):ue.set(I,W,ee,te),Ae.scissor(C.copy(ue).multiplyScalar(ve).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(I){Ae.setScissorTest(Fe=I)},this.setOpaqueSort=function(I){H=I},this.setTransparentSort=function(I){oe=I},this.getClearColor=function(I){return I.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(I=!0,W=!0,ee=!0){let te=0;if(I){let q=!1;if(L!==null){const Me=L.texture.format;q=Me===sh||Me===rh||Me===el}if(q){const Me=L.texture.type,Oe=Me===Ai||Me===vr||Me===Ro||Me===Ps||Me===th||Me===nh,Ve=ct.getClearColor(),Ge=ct.getClearAlpha(),ot=Ve.r,lt=Ve.g,Je=Ve.b;Oe?(g[0]=ot,g[1]=lt,g[2]=Je,g[3]=Ge,O.clearBufferuiv(O.COLOR,0,g)):(y[0]=ot,y[1]=lt,y[2]=Je,y[3]=Ge,O.clearBufferiv(O.COLOR,0,y))}else te|=O.COLOR_BUFFER_BIT}W&&(te|=O.DEPTH_BUFFER_BIT,O.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),ee&&(te|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),De.dispose(),At.dispose(),Le.dispose(),R.dispose(),J.dispose(),he.dispose(),me.dispose(),z.dispose(),qe.dispose(),$.dispose(),$.removeEventListener("sessionstart",ji),$.removeEventListener("sessionend",hl),Ji.stop()};function de(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const I=je.autoReset,W=Ne.enabled,ee=Ne.autoUpdate,te=Ne.needsUpdate,q=Ne.type;_e(),je.autoReset=I,Ne.enabled=W,Ne.autoUpdate=ee,Ne.needsUpdate=te,Ne.type=q}function Be(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Mt(I){const W=I.target;W.removeEventListener("dispose",Mt),Ct(W)}function Ct(I){Ht(I),Le.remove(I)}function Ht(I){const W=Le.get(I).programs;W!==void 0&&(W.forEach(function(ee){qe.releaseProgram(ee)}),I.isShaderMaterial&&qe.releaseShaderCache(I))}this.renderBufferDirect=function(I,W,ee,te,q,Me){W===null&&(W=at);const Oe=q.isMesh&&q.matrixWorld.determinant()<0,Ve=Ph(I,W,ee,te,q);Ae.setMaterial(te,Oe);let Ge=ee.index,ot=1;if(te.wireframe===!0){if(Ge=fe.getWireframeAttribute(ee),Ge===void 0)return;ot=2}const lt=ee.drawRange,Je=ee.attributes.position;let Rt=lt.start*ot,Lt=(lt.start+lt.count)*ot;Me!==null&&(Rt=Math.max(Rt,Me.start*ot),Lt=Math.min(Lt,(Me.start+Me.count)*ot)),Ge!==null?(Rt=Math.max(Rt,0),Lt=Math.min(Lt,Ge.count)):Je!=null&&(Rt=Math.max(Rt,0),Lt=Math.min(Lt,Je.count));const Ft=Lt-Rt;if(Ft<0||Ft===1/0)return;me.setup(q,te,Ve,ee,Ge);let wt,Qe=ke;if(Ge!==null&&(wt=ae.get(Ge),Qe=_t,Qe.setIndex(wt)),q.isMesh)te.wireframe===!0?(Ae.setLineWidth(te.wireframeLinewidth*pe()),Qe.setMode(O.LINES)):Qe.setMode(O.TRIANGLES);else if(q.isLine){let Xe=te.linewidth;Xe===void 0&&(Xe=1),Ae.setLineWidth(Xe*pe()),q.isLineSegments?Qe.setMode(O.LINES):q.isLineLoop?Qe.setMode(O.LINE_LOOP):Qe.setMode(O.LINE_STRIP)}else q.isPoints?Qe.setMode(O.POINTS):q.isSprite&&Qe.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Qe.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Qe.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Xe=q._multiDrawStarts,bt=q._multiDrawCounts,ht=q._multiDrawCount,ln=Ge?ae.get(Ge).bytesPerElement:1,Jn=Le.get(te).currentProgram.getUniforms();for(let Bt=0;Bt<ht;Bt++)Jn.setValue(O,"_gl_DrawID",Bt),Qe.render(Xe[Bt]/ln,bt[Bt])}else if(q.isInstancedMesh)Qe.renderInstances(Rt,Ft,q.count);else if(ee.isInstancedBufferGeometry){const Xe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,bt=Math.min(ee.instanceCount,Xe);Qe.renderInstances(Rt,Ft,bt)}else Qe.render(Rt,Ft)};function yt(I,W,ee){I.transparent===!0&&I.side===ki&&I.forceSinglePass===!1?(I.side=Hn,I.needsUpdate=!0,ks(I,W,ee),I.side=mr,I.needsUpdate=!0,ks(I,W,ee),I.side=ki):ks(I,W,ee)}this.compile=function(I,W,ee=null){ee===null&&(ee=I),x=At.get(ee),x.init(W),E.push(x),ee.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),I!==ee&&I.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),x.setupLights();const te=new Set;return I.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Me=q.material;if(Me)if(Array.isArray(Me))for(let Oe=0;Oe<Me.length;Oe++){const Ve=Me[Oe];yt(Ve,ee,q),te.add(Ve)}else yt(Me,ee,q),te.add(Me)}),E.pop(),x=null,te},this.compileAsync=function(I,W,ee=null){const te=this.compile(I,W,ee);return new Promise(q=>{function Me(){if(te.forEach(function(Oe){Le.get(Oe).currentProgram.isReady()&&te.delete(Oe)}),te.size===0){q(I);return}setTimeout(Me,10)}Ee.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Yt=null;function fn(I){Yt&&Yt(I)}function ji(){Ji.stop()}function hl(){Ji.start()}const Ji=new w_;Ji.setAnimationLoop(fn),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(I){Yt=I,$.setAnimationLoop(I),I===null?Ji.stop():Ji.start()},$.addEventListener("sessionstart",ji),$.addEventListener("sessionend",hl),this.render=function(I,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(W),W=$.getCamera()),I.isScene===!0&&I.onBeforeRender(w,I,W,L),x=At.get(I,E.length),x.init(W),E.push(x),we.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),He.setFromProjectionMatrix(we),ge=this.localClippingEnabled,re=xe.init(this.clippingPlanes,ge),M=De.get(I,_.length),M.init(),_.push(M),$.enabled===!0&&$.isPresenting===!0){const Me=w.xr.getDepthSensingMesh();Me!==null&&Bs(Me,W,-1/0,w.sortObjects)}Bs(I,W,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(H,oe),tt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,tt&&ct.addToRenderList(M,I),this.info.render.frame++,re===!0&&xe.beginShadows();const ee=x.state.shadowsArray;Ne.render(ee,I,W),re===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=M.opaque,q=M.transmissive;if(x.setupLights(),W.isArrayCamera){const Me=W.cameras;if(q.length>0)for(let Oe=0,Ve=Me.length;Oe<Ve;Oe++){const Ge=Me[Oe];fl(te,q,I,Ge)}tt&&ct.render(I);for(let Oe=0,Ve=Me.length;Oe<Ve;Oe++){const Ge=Me[Oe];zs(M,I,Ge,Ge.viewport)}}else q.length>0&&fl(te,q,I,W),tt&&ct.render(I),zs(M,I,W);L!==null&&(N.updateMultisampleRenderTarget(L),N.updateRenderTargetMipmap(L)),I.isScene===!0&&I.onAfterRender(w,I,W),me.resetDefaultState(),F=-1,G=null,E.pop(),E.length>0?(x=E[E.length-1],re===!0&&xe.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,_.pop(),_.length>0?M=_[_.length-1]:M=null};function Bs(I,W,ee,te){if(I.visible===!1)return;if(I.layers.test(W.layers)){if(I.isGroup)ee=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(W);else if(I.isLight)x.pushLight(I),I.castShadow&&x.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||He.intersectsSprite(I)){te&&et.setFromMatrixPosition(I.matrixWorld).applyMatrix4(we);const Oe=he.update(I),Ve=I.material;Ve.visible&&M.push(I,Oe,Ve,ee,et.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||He.intersectsObject(I))){const Oe=he.update(I),Ve=I.material;if(te&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),et.copy(I.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),et.copy(Oe.boundingSphere.center)),et.applyMatrix4(I.matrixWorld).applyMatrix4(we)),Array.isArray(Ve)){const Ge=Oe.groups;for(let ot=0,lt=Ge.length;ot<lt;ot++){const Je=Ge[ot],Rt=Ve[Je.materialIndex];Rt&&Rt.visible&&M.push(I,Oe,Rt,ee,et.z,Je)}}else Ve.visible&&M.push(I,Oe,Ve,ee,et.z,null)}}const Me=I.children;for(let Oe=0,Ve=Me.length;Oe<Ve;Oe++)Bs(Me[Oe],W,ee,te)}function zs(I,W,ee,te){const q=I.opaque,Me=I.transmissive,Oe=I.transparent;x.setupLightsView(ee),re===!0&&xe.setGlobalState(w.clippingPlanes,ee),te&&Ae.viewport(A.copy(te)),q.length>0&&Pi(q,W,ee),Me.length>0&&Pi(Me,W,ee),Oe.length>0&&Pi(Oe,W,ee),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function fl(I,W,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[te.id]===void 0&&(x.state.transmissionRenderTarget[te.id]=new bi(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?Oo:Ai,minFilter:Vi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ot.workingColorSpace}));const Me=x.state.transmissionRenderTarget[te.id],Oe=te.viewport||A;Me.setSize(Oe.z,Oe.w);const Ve=w.getRenderTarget();w.setRenderTarget(Me),w.getClearColor(Z),K=w.getClearAlpha(),K<1&&w.setClearColor(16777215,.5),w.clear(),tt&&ct.render(ee);const Ge=w.toneMapping;w.toneMapping=Wi;const ot=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),x.setupLightsView(te),re===!0&&xe.setGlobalState(w.clippingPlanes,te),Pi(I,ee,te),N.updateMultisampleRenderTarget(Me),N.updateRenderTargetMipmap(Me),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let Je=0,Rt=W.length;Je<Rt;Je++){const Lt=W[Je],Ft=Lt.object,wt=Lt.geometry,Qe=Lt.material,Xe=Lt.group;if(Qe.side===ki&&Ft.layers.test(te.layers)){const bt=Qe.side;Qe.side=Hn,Qe.needsUpdate=!0,dl(Ft,ee,te,wt,Qe,Xe),Qe.side=bt,Qe.needsUpdate=!0,lt=!0}}lt===!0&&(N.updateMultisampleRenderTarget(Me),N.updateRenderTargetMipmap(Me))}w.setRenderTarget(Ve),w.setClearColor(Z,K),ot!==void 0&&(te.viewport=ot),w.toneMapping=Ge}function Pi(I,W,ee){const te=W.isScene===!0?W.overrideMaterial:null;for(let q=0,Me=I.length;q<Me;q++){const Oe=I[q],Ve=Oe.object,Ge=Oe.geometry,ot=te===null?Oe.material:te,lt=Oe.group;Ve.layers.test(ee.layers)&&dl(Ve,W,ee,Ge,ot,lt)}}function dl(I,W,ee,te,q,Me){I.onBeforeRender(w,W,ee,te,q,Me),I.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),q.onBeforeRender(w,W,ee,te,I,Me),q.transparent===!0&&q.side===ki&&q.forceSinglePass===!1?(q.side=Hn,q.needsUpdate=!0,w.renderBufferDirect(ee,W,te,q,I,Me),q.side=mr,q.needsUpdate=!0,w.renderBufferDirect(ee,W,te,q,I,Me),q.side=ki):w.renderBufferDirect(ee,W,te,q,I,Me),I.onAfterRender(w,W,ee,te,q,Me)}function ks(I,W,ee){W.isScene!==!0&&(W=at);const te=Le.get(I),q=x.state.lights,Me=x.state.shadowsArray,Oe=q.state.version,Ve=qe.getParameters(I,q.state,Me,W,ee),Ge=qe.getProgramCacheKey(Ve);let ot=te.programs;te.environment=I.isMeshStandardMaterial?W.environment:null,te.fog=W.fog,te.envMap=(I.isMeshStandardMaterial?J:R).get(I.envMap||te.environment),te.envMapRotation=te.environment!==null&&I.envMap===null?W.environmentRotation:I.envMapRotation,ot===void 0&&(I.addEventListener("dispose",Mt),ot=new Map,te.programs=ot);let lt=ot.get(Ge);if(lt!==void 0){if(te.currentProgram===lt&&te.lightsStateVersion===Oe)return ml(I,Ve),lt}else Ve.uniforms=qe.getUniforms(I),I.onBeforeCompile(Ve,w),lt=qe.acquireProgram(Ve,Ge),ot.set(Ge,lt),te.uniforms=Ve.uniforms;const Je=te.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Je.clippingPlanes=xe.uniform),ml(I,Ve),te.needsLights=Lh(I),te.lightsStateVersion=Oe,te.needsLights&&(Je.ambientLightColor.value=q.state.ambient,Je.lightProbe.value=q.state.probe,Je.directionalLights.value=q.state.directional,Je.directionalLightShadows.value=q.state.directionalShadow,Je.spotLights.value=q.state.spot,Je.spotLightShadows.value=q.state.spotShadow,Je.rectAreaLights.value=q.state.rectArea,Je.ltc_1.value=q.state.rectAreaLTC1,Je.ltc_2.value=q.state.rectAreaLTC2,Je.pointLights.value=q.state.point,Je.pointLightShadows.value=q.state.pointShadow,Je.hemisphereLights.value=q.state.hemi,Je.directionalShadowMap.value=q.state.directionalShadowMap,Je.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Je.spotShadowMap.value=q.state.spotShadowMap,Je.spotLightMatrix.value=q.state.spotLightMatrix,Je.spotLightMap.value=q.state.spotLightMap,Je.pointShadowMap.value=q.state.pointShadowMap,Je.pointShadowMatrix.value=q.state.pointShadowMatrix),te.currentProgram=lt,te.uniformsList=null,lt}function pl(I){if(I.uniformsList===null){const W=I.currentProgram.getUniforms();I.uniformsList=lu.seqWithValue(W.seq,I.uniforms)}return I.uniformsList}function ml(I,W){const ee=Le.get(I);ee.outputColorSpace=W.outputColorSpace,ee.batching=W.batching,ee.batchingColor=W.batchingColor,ee.instancing=W.instancing,ee.instancingColor=W.instancingColor,ee.instancingMorph=W.instancingMorph,ee.skinning=W.skinning,ee.morphTargets=W.morphTargets,ee.morphNormals=W.morphNormals,ee.morphColors=W.morphColors,ee.morphTargetsCount=W.morphTargetsCount,ee.numClippingPlanes=W.numClippingPlanes,ee.numIntersection=W.numClipIntersection,ee.vertexAlphas=W.vertexAlphas,ee.vertexTangents=W.vertexTangents,ee.toneMapping=W.toneMapping}function Ph(I,W,ee,te,q){W.isScene!==!0&&(W=at),N.resetTextureUnits();const Me=W.fog,Oe=te.isMeshStandardMaterial?W.environment:null,Ve=L===null?w.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:yr,Ge=(te.isMeshStandardMaterial?J:R).get(te.envMap||Oe),ot=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,lt=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Je=!!ee.morphAttributes.position,Rt=!!ee.morphAttributes.normal,Lt=!!ee.morphAttributes.color;let Ft=Wi;te.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ft=w.toneMapping);const wt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Qe=wt!==void 0?wt.length:0,Xe=Le.get(te),bt=x.state.lights;if(re===!0&&(ge===!0||I!==G)){const Un=I===G&&te.id===F;xe.setState(te,I,Un)}let ht=!1;te.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==bt.state.version||Xe.outputColorSpace!==Ve||q.isBatchedMesh&&Xe.batching===!1||!q.isBatchedMesh&&Xe.batching===!0||q.isBatchedMesh&&Xe.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Xe.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Xe.instancing===!1||!q.isInstancedMesh&&Xe.instancing===!0||q.isSkinnedMesh&&Xe.skinning===!1||!q.isSkinnedMesh&&Xe.skinning===!0||q.isInstancedMesh&&Xe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Xe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Xe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Xe.instancingMorph===!1&&q.morphTexture!==null||Xe.envMap!==Ge||te.fog===!0&&Xe.fog!==Me||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==xe.numPlanes||Xe.numIntersection!==xe.numIntersection)||Xe.vertexAlphas!==ot||Xe.vertexTangents!==lt||Xe.morphTargets!==Je||Xe.morphNormals!==Rt||Xe.morphColors!==Lt||Xe.toneMapping!==Ft||Xe.morphTargetsCount!==Qe)&&(ht=!0):(ht=!0,Xe.__version=te.version);let ln=Xe.currentProgram;ht===!0&&(ln=ks(te,W,q));let Jn=!1,Bt=!1,xr=!1;const Wt=ln.getUniforms(),_i=Xe.uniforms;if(Ae.useProgram(ln.program)&&(Jn=!0,Bt=!0,xr=!0),te.id!==F&&(F=te.id,Bt=!0),Jn||G!==I){ye.reverseDepthBuffer?(Pe.copy(I.projectionMatrix),US(Pe),NS(Pe),Wt.setValue(O,"projectionMatrix",Pe)):Wt.setValue(O,"projectionMatrix",I.projectionMatrix),Wt.setValue(O,"viewMatrix",I.matrixWorldInverse);const Un=Wt.map.cameraPosition;Un!==void 0&&Un.setValue(O,st.setFromMatrixPosition(I.matrixWorld)),ye.logarithmicDepthBuffer&&Wt.setValue(O,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Wt.setValue(O,"isOrthographic",I.isOrthographicCamera===!0),G!==I&&(G=I,Bt=!0,xr=!0)}if(q.isSkinnedMesh){Wt.setOptional(O,q,"bindMatrix"),Wt.setOptional(O,q,"bindMatrixInverse");const Un=q.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),Wt.setValue(O,"boneTexture",Un.boneTexture,N))}q.isBatchedMesh&&(Wt.setOptional(O,q,"batchingTexture"),Wt.setValue(O,"batchingTexture",q._matricesTexture,N),Wt.setOptional(O,q,"batchingIdTexture"),Wt.setValue(O,"batchingIdTexture",q._indirectTexture,N),Wt.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&Wt.setValue(O,"batchingColorTexture",q._colorsTexture,N));const Sr=ee.morphAttributes;if((Sr.position!==void 0||Sr.normal!==void 0||Sr.color!==void 0)&&ut.update(q,ee,ln),(Bt||Xe.receiveShadow!==q.receiveShadow)&&(Xe.receiveShadow=q.receiveShadow,Wt.setValue(O,"receiveShadow",q.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(_i.envMap.value=Ge,_i.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&W.environment!==null&&(_i.envMapIntensity.value=W.environmentIntensity),Bt&&(Wt.setValue(O,"toneMappingExposure",w.toneMappingExposure),Xe.needsLights&&Ih(_i,xr),Me&&te.fog===!0&&be.refreshFogUniforms(_i,Me),be.refreshMaterialUniforms(_i,te,ve,j,x.state.transmissionRenderTarget[I.id]),lu.upload(O,pl(Xe),_i,N)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(lu.upload(O,pl(Xe),_i,N),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Wt.setValue(O,"center",q.center),Wt.setValue(O,"modelViewMatrix",q.modelViewMatrix),Wt.setValue(O,"normalMatrix",q.normalMatrix),Wt.setValue(O,"modelMatrix",q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Un=te.uniformsGroups;for(let Nn=0,Dh=Un.length;Nn<Dh;Nn++){const gl=Un[Nn];z.update(gl,ln),z.bind(gl,ln)}}return ln}function Ih(I,W){I.ambientLightColor.needsUpdate=W,I.lightProbe.needsUpdate=W,I.directionalLights.needsUpdate=W,I.directionalLightShadows.needsUpdate=W,I.pointLights.needsUpdate=W,I.pointLightShadows.needsUpdate=W,I.spotLights.needsUpdate=W,I.spotLightShadows.needsUpdate=W,I.rectAreaLights.needsUpdate=W,I.hemisphereLights.needsUpdate=W}function Lh(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(I,W,ee){Le.get(I.texture).__webglTexture=W,Le.get(I.depthTexture).__webglTexture=ee;const te=Le.get(I);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,W){const ee=Le.get(I);ee.__webglFramebuffer=W,ee.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(I,W=0,ee=0){L=I,U=W,P=ee;let te=!0,q=null,Me=!1,Oe=!1;if(I){const Ge=Le.get(I);if(Ge.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(O.FRAMEBUFFER,null),te=!1;else if(Ge.__webglFramebuffer===void 0)N.setupRenderTarget(I);else if(Ge.__hasExternalTextures)N.rebindTextures(I,Le.get(I.texture).__webglTexture,Le.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Je=I.depthTexture;if(Ge.__boundDepthTexture!==Je){if(Je!==null&&Le.has(Je)&&(I.width!==Je.image.width||I.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(I)}}const ot=I.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Oe=!0);const lt=Le.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(lt[W])?q=lt[W][ee]:q=lt[W],Me=!0):I.samples>0&&N.useMultisampledRTT(I)===!1?q=Le.get(I).__webglMultisampledFramebuffer:Array.isArray(lt)?q=lt[ee]:q=lt,A.copy(I.viewport),C.copy(I.scissor),Y=I.scissorTest}else A.copy(ie).multiplyScalar(ve).floor(),C.copy(ue).multiplyScalar(ve).floor(),Y=Fe;if(Ae.bindFramebuffer(O.FRAMEBUFFER,q)&&te&&Ae.drawBuffers(I,q),Ae.viewport(A),Ae.scissor(C),Ae.setScissorTest(Y),Me){const Ge=Le.get(I.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ge.__webglTexture,ee)}else if(Oe){const Ge=Le.get(I.texture),ot=W||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ge.__webglTexture,ee||0,ot)}F=-1},this.readRenderTargetPixels=function(I,W,ee,te,q,Me,Oe){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Le.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ve=Ve[Oe]),Ve){Ae.bindFramebuffer(O.FRAMEBUFFER,Ve);try{const Ge=I.texture,ot=Ge.format,lt=Ge.type;if(!ye.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=I.width-te&&ee>=0&&ee<=I.height-q&&O.readPixels(W,ee,te,q,k.convert(ot),k.convert(lt),Me)}finally{const Ge=L!==null?Le.get(L).__webglFramebuffer:null;Ae.bindFramebuffer(O.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(I,W,ee,te,q,Me,Oe){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Le.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ve=Ve[Oe]),Ve){const Ge=I.texture,ot=Ge.format,lt=Ge.type;if(!ye.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=I.width-te&&ee>=0&&ee<=I.height-q){Ae.bindFramebuffer(O.FRAMEBUFFER,Ve);const Je=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Je),O.bufferData(O.PIXEL_PACK_BUFFER,Me.byteLength,O.STREAM_READ),O.readPixels(W,ee,te,q,k.convert(ot),k.convert(lt),0);const Rt=L!==null?Le.get(L).__webglFramebuffer:null;Ae.bindFramebuffer(O.FRAMEBUFFER,Rt);const Lt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await DS(O,Lt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Je),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Me),O.deleteBuffer(Je),O.deleteSync(Lt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,W=null,ee=0){I.isTexture!==!0&&(au("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,I=arguments[1]);const te=Math.pow(2,-ee),q=Math.floor(I.image.width*te),Me=Math.floor(I.image.height*te),Oe=W!==null?W.x:0,Ve=W!==null?W.y:0;N.setTexture2D(I,0),O.copyTexSubImage2D(O.TEXTURE_2D,ee,0,0,Oe,Ve,q,Me),Ae.unbindTexture()},this.copyTextureToTexture=function(I,W,ee=null,te=null,q=0){I.isTexture!==!0&&(au("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,I=arguments[1],W=arguments[2],q=arguments[3]||0,ee=null);let Me,Oe,Ve,Ge,ot,lt;ee!==null?(Me=ee.max.x-ee.min.x,Oe=ee.max.y-ee.min.y,Ve=ee.min.x,Ge=ee.min.y):(Me=I.image.width,Oe=I.image.height,Ve=0,Ge=0),te!==null?(ot=te.x,lt=te.y):(ot=0,lt=0);const Je=k.convert(W.format),Rt=k.convert(W.type);N.setTexture2D(W,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const Lt=O.getParameter(O.UNPACK_ROW_LENGTH),Ft=O.getParameter(O.UNPACK_IMAGE_HEIGHT),wt=O.getParameter(O.UNPACK_SKIP_PIXELS),Qe=O.getParameter(O.UNPACK_SKIP_ROWS),Xe=O.getParameter(O.UNPACK_SKIP_IMAGES),bt=I.isCompressedTexture?I.mipmaps[q]:I.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,bt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,bt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ve),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ge),I.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,q,ot,lt,Me,Oe,Je,Rt,bt.data):I.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,q,ot,lt,bt.width,bt.height,Je,bt.data):O.texSubImage2D(O.TEXTURE_2D,q,ot,lt,Me,Oe,Je,Rt,bt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Lt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ft),O.pixelStorei(O.UNPACK_SKIP_PIXELS,wt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Qe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Xe),q===0&&W.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(I,W,ee=null,te=null,q=0){I.isTexture!==!0&&(au("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,te=arguments[1]||null,I=arguments[2],W=arguments[3],q=arguments[4]||0);let Me,Oe,Ve,Ge,ot,lt,Je,Rt,Lt;const Ft=I.isCompressedTexture?I.mipmaps[q]:I.image;ee!==null?(Me=ee.max.x-ee.min.x,Oe=ee.max.y-ee.min.y,Ve=ee.max.z-ee.min.z,Ge=ee.min.x,ot=ee.min.y,lt=ee.min.z):(Me=Ft.width,Oe=Ft.height,Ve=Ft.depth,Ge=0,ot=0,lt=0),te!==null?(Je=te.x,Rt=te.y,Lt=te.z):(Je=0,Rt=0,Lt=0);const wt=k.convert(W.format),Qe=k.convert(W.type);let Xe;if(W.isData3DTexture)N.setTexture3D(W,0),Xe=O.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)N.setTexture2DArray(W,0),Xe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const bt=O.getParameter(O.UNPACK_ROW_LENGTH),ht=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ln=O.getParameter(O.UNPACK_SKIP_PIXELS),Jn=O.getParameter(O.UNPACK_SKIP_ROWS),Bt=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ft.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ft.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ge),O.pixelStorei(O.UNPACK_SKIP_ROWS,ot),O.pixelStorei(O.UNPACK_SKIP_IMAGES,lt),I.isDataTexture||I.isData3DTexture?O.texSubImage3D(Xe,q,Je,Rt,Lt,Me,Oe,Ve,wt,Qe,Ft.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(Xe,q,Je,Rt,Lt,Me,Oe,Ve,wt,Ft.data):O.texSubImage3D(Xe,q,Je,Rt,Lt,Me,Oe,Ve,wt,Qe,Ft),O.pixelStorei(O.UNPACK_ROW_LENGTH,bt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ht),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ln),O.pixelStorei(O.UNPACK_SKIP_ROWS,Jn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Bt),q===0&&W.generateMipmaps&&O.generateMipmap(Xe),Ae.unbindTexture()},this.initRenderTarget=function(I){Le.get(I).__webglFramebuffer===void 0&&N.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?N.setTextureCube(I,0):I.isData3DTexture?N.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?N.setTexture2DArray(I,0):N.setTexture2D(I,0),Ae.unbindTexture()},this.resetState=function(){U=0,P=0,L=null,Ae.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ah?"display-p3":"srgb",t.unpackColorSpace=Ot.workingColorSpace===tl?"display-p3":"srgb"}}class uh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new uh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class hh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new hh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let Ap=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class fh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ha,this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new D;class ii{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyMatrix4(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyNormalMatrix(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.transformDirection(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ii(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class bp extends Dn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let fo;const ua=new D,po=new D,mo=new D,go=new le,ha=new le,I_=new rt,Rc=new D,fa=new D,Pc=new D,v0=new le,dd=new le,_0=new le;class L_ extends It{constructor(e=new bp){if(super(),this.isSprite=!0,this.type="Sprite",fo===void 0){fo=new St;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new fh(t,5);fo.setIndex([0,1,2,0,2,3]),fo.setAttribute("position",new ii(n,3,0,!1)),fo.setAttribute("uv",new ii(n,2,3,!1))}this.geometry=fo,this.material=e,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),po.setFromMatrixScale(this.matrixWorld),I_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),mo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&po.multiplyScalar(-mo.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Ic(Rc.set(-.5,-.5,0),mo,a,po,i,s),Ic(fa.set(.5,-.5,0),mo,a,po,i,s),Ic(Pc.set(.5,.5,0),mo,a,po,i,s),v0.set(0,0),dd.set(1,0),_0.set(1,1);let c=e.ray.intersectTriangle(Rc,fa,Pc,!1,ua);if(c===null&&(Ic(fa.set(-.5,.5,0),mo,a,po,i,s),dd.set(0,1),c=e.ray.intersectTriangle(Rc,Pc,fa,!1,ua),c===null))return;const u=e.ray.origin.distanceTo(ua);u<e.near||u>e.far||t.push({distance:u,point:ua.clone(),uv:qn.getInterpolation(ua,Rc,fa,Pc,v0,dd,_0,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ic(r,e,t,n,i,s){go.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(ha.x=s*go.x-i*go.y,ha.y=i*go.x+s*go.y):ha.copy(go),r.copy(e),r.x+=ha.x,r.y+=ha.y,r.applyMatrix4(I_)}const Lc=new D,y0=new D;class D_ extends It{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Lc.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Lc);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Lc.setFromMatrixPosition(e.matrixWorld),y0.setFromMatrixPosition(this.matrixWorld);const n=Lc.distanceTo(y0)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const x0=new D,S0=new Tt,M0=new Tt,jT=new D,w0=new rt,Dc=new D,pd=new yn,E0=new rt,md=new Ds;class U_ extends nn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gd,this.bindMatrix=new rt,this.bindMatrixInverse=new rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _n),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Dc),this.boundingBox.expandByPoint(Dc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Dc),this.boundingSphere.expandByPoint(Dc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pd.copy(this.boundingSphere),pd.applyMatrix4(i),e.ray.intersectsSphere(pd)!==!1&&(E0.copy(i).invert(),md.copy(e.ray).applyMatrix4(E0),!(this.boundingBox!==null&&md.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,md)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Tt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===e_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;S0.fromBufferAttribute(i.attributes.skinIndex,e),M0.fromBufferAttribute(i.attributes.skinWeight,e),x0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=M0.getComponent(s);if(a!==0){const c=S0.getComponent(s);w0.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(jT.copy(x0).applyMatrix4(w0),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Cp extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Xi extends Qt{constructor(e=null,t=1,n=1,i,s,a,c,u,h=vn,f=vn,p,m){super(null,a,c,u,h,f,i,s,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const T0=new rt,JT=new rt;class dh{constructor(e=[],t=[]){this.uuid=ri(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new rt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new rt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const c=e[s]?e[s].matrixWorld:JT;T0.multiplyMatrices(c,t[s]),T0.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new dh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Xi(t,e,e,In,Zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Cp),this.bones.push(a),this.boneInverses.push(new rt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const c=n[i];e.boneInverses.push(c.toArray())}return e}}class Lo extends zt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vo=new rt,A0=new rt,Uc=[],b0=new _n,KT=new rt,da=new nn,pa=new yn;class N_ extends nn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Lo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,KT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vo),b0.copy(e.boundingBox).applyMatrix4(vo),this.boundingBox.union(b0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vo),pa.copy(e.boundingSphere).applyMatrix4(vo),this.boundingSphere.union(pa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let c=0;c<n.length;c++)n[c]=i[a+c]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(da.geometry=this.geometry,da.material=this.material,da.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pa.copy(this.boundingSphere),pa.applyMatrix4(n),e.ray.intersectsSphere(pa)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,vo),A0.multiplyMatrices(n,vo),da.matrixWorld=A0,da.raycast(e,Uc);for(let a=0,c=Uc.length;a<c;a++){const u=Uc[a];u.instanceId=s,u.object=this,t.push(u)}Uc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Lo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xi(new Float32Array(i*this.count),i,this.count,ih,Zn));const s=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const c=this.geometry.morphTargetsRelative?1:1-a,u=i*e;s[u]=c,s.set(n,u+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function QT(r,e){return r.z-e.z}function $T(r,e){return e.z-r.z}class eA{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n){const i=this.pool,s=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1,index:-1});const a=i[this.index];s.push(a),this.index++,a.start=e.start,a.count=e.count,a.z=t,a.index=n}reset(){this.list.length=0,this.index=0}}const Or=new rt,gd=new rt,tA=new rt,nA=new ze(1,1,1),C0=new rt,vd=new rl,Nc=new _n,ls=new yn,ma=new D,R0=new D,iA=new D,_d=new eA,Pn=new nn,Oc=[];function rA(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let a=0;a<n;a++)e.setComponent(s+t,a,r.getComponent(s,a))}else e.array.set(r.array,t*n);e.needsUpdate=!0}class O_ extends nn{get maxInstanceCount(){return this._maxInstanceCount}constructor(e,t,n=t*2,i){super(new St,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._availableInstanceIds=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Xi(t,e,e,In,Zn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new Xi(t,e,e,el,vr);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new Xi(t,e,e,In,Zn);n.colorSpace=Ot.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const a=e.getAttribute(s),{array:c,itemSize:u,normalized:h}=a,f=new c.constructor(n*u),p=new zt(f,u,h);t.setAttribute(s,p)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new zt(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);const e=this.boundingBox,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Or),this.getBoundingBoxAt(s,Nc).applyMatrix4(Or),e.union(Nc)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);const e=this.boundingSphere,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Or),this.getBoundingSphereAt(s,ls).applyMatrix4(Or),e.union(ls)}}addInstance(e){if(this._drawInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(i=this._availableInstanceIds.pop(),this._drawInfo[i]=n):(i=this._drawInfo.length,this._drawInfo.push(n));const s=this._matricesTexture,a=s.image.data;tA.toArray(a,i*16),s.needsUpdate=!0;const c=this._colorsTexture;return c&&(nA.toArray(c.image.data,i*4),c.needsUpdate=!0),i}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const a=this._reservedRanges,c=this._drawRanges,u=this._bounds;this._geometryCount!==0&&(s=a[a.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,s===null?i.vertexStart=0:i.vertexStart=s.vertexStart+s.vertexCount;const h=e.getIndex(),f=h!==null;if(f&&(n===-1?i.indexCount=h.count:i.indexCount=n,s===null?i.indexStart=0:i.indexStart=s.indexStart+s.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const p=this._geometryCount;return this._geometryCount++,a.push(i),c.push({start:f?i.indexStart:i.vertexStart,count:-1}),u.push({boxInitialized:!1,box:new _n,sphereInitialized:!1,sphere:new yn}),this.setGeometryAt(p,e),p}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),a=t.getIndex(),c=this._reservedRanges[e];if(i&&a.count>c.indexCount||t.attributes.position.count>c.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const u=c.vertexStart,h=c.vertexCount;for(const g in n.attributes){const y=t.getAttribute(g),M=n.getAttribute(g);rA(y,M,u);const x=y.itemSize;for(let _=y.count,E=h;_<E;_++){const w=u+_;for(let b=0;b<x;b++)M.setComponent(w,b,0)}M.needsUpdate=!0,M.addUpdateRange(u*x,h*x)}if(i){const g=c.indexStart;for(let y=0;y<a.count;y++)s.setX(g+y,u+a.getX(y));for(let y=a.count,M=c.indexCount;y<M;y++)s.setX(g+y,u);s.needsUpdate=!0,s.addUpdateRange(g,c.indexCount)}const f=this._bounds[e];t.boundingBox!==null?(f.box.copy(t.boundingBox),f.boxInitialized=!0):f.boxInitialized=!1,t.boundingSphere!==null?(f.sphere.copy(t.boundingSphere),f.sphereInitialized=!0):f.sphereInitialized=!1;const p=this._drawRanges[e],m=t.getAttribute("position");return p.count=i?a.count:m.count,this._visibilityChanged=!0,e}deleteInstance(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.box,s=this.geometry;if(n.boxInitialized===!1){i.makeEmpty();const a=s.index,c=s.attributes.position,u=this._drawRanges[e];for(let h=u.start,f=u.start+u.count;h<f;h++){let p=h;a&&(p=a.getX(p)),i.expandByPoint(ma.fromBufferAttribute(c,p))}n.boxInitialized=!0}return t.copy(i),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.sphere,s=this.geometry;if(n.sphereInitialized===!1){i.makeEmpty(),this.getBoundingBoxAt(e,Nc),Nc.getCenter(i.center);const a=s.index,c=s.attributes.position,u=this._drawRanges[e];let h=0;for(let f=u.start,p=u.start+u.count;f<p;f++){let m=f;a&&(m=a.getX(m)),ma.fromBufferAttribute(c,m),h=Math.max(h,i.center.distanceToSquared(ma))}i.radius=Math.sqrt(h),n.sphereInitialized=!0}return t.copy(i),t}setMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture,s=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(s,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(i,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,i=this._colorsTexture.image.data,s=this._drawInfo;return e>=s.length||s[e].active===!1?this:(t.toArray(i,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,i=this._drawInfo;return e>=i.length||i[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||t<0||t>=this._geometryCount?null:(n[e].geometryIndex=t,this)}getGeometryIdAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;const n=this._drawRanges[e];return t.start=n.start,t.count=n.count,t}raycast(e,t){const n=this._drawInfo,i=this._drawRanges,s=this.matrixWorld,a=this.geometry;Pn.material=this.material,Pn.geometry.index=a.index,Pn.geometry.attributes=a.attributes,Pn.geometry.boundingBox===null&&(Pn.geometry.boundingBox=new _n),Pn.geometry.boundingSphere===null&&(Pn.geometry.boundingSphere=new yn);for(let c=0,u=n.length;c<u;c++){if(!n[c].visible||!n[c].active)continue;const h=n[c].geometryIndex,f=i[h];Pn.geometry.setDrawRange(f.start,f.count),this.getMatrixAt(c,Pn.matrixWorld).premultiply(s),this.getBoundingBoxAt(h,Pn.geometry.boundingBox),this.getBoundingSphereAt(h,Pn.geometry.boundingSphere),Pn.raycast(e,Oc);for(let p=0,m=Oc.length;p<m;p++){const g=Oc[p];g.object=this,g.batchId=c,t.push(g)}Oc.length=0}Pn.material=null,Pn.geometry.index=null,Pn.geometry.attributes={},Pn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._drawInfo=e._drawInfo.map(t=>({...t})),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),c=a===null?1:a.array.BYTES_PER_ELEMENT,u=this._drawInfo,h=this._multiDrawStarts,f=this._multiDrawCounts,p=this._drawRanges,m=this.perObjectFrustumCulled,g=this._indirectTexture,y=g.image.data;m&&(C0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),vd.setFromProjectionMatrix(C0,e.coordinateSystem));let M=0;if(this.sortObjects){gd.copy(this.matrixWorld).invert(),ma.setFromMatrixPosition(n.matrixWorld).applyMatrix4(gd),R0.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(gd);for(let E=0,w=u.length;E<w;E++)if(u[E].visible&&u[E].active){const b=u[E].geometryIndex;this.getMatrixAt(E,Or),this.getBoundingSphereAt(b,ls).applyMatrix4(Or);let U=!1;if(m&&(U=!vd.intersectsSphere(ls)),!U){const P=iA.subVectors(ls.center,ma).dot(R0);_d.push(p[b],P,E)}}const x=_d.list,_=this.customSort;_===null?x.sort(s.transparent?$T:QT):_.call(this,x,n);for(let E=0,w=x.length;E<w;E++){const b=x[E];h[M]=b.start*c,f[M]=b.count,y[M]=b.index,M++}_d.reset()}else for(let x=0,_=u.length;x<_;x++)if(u[x].visible&&u[x].active){const E=u[x].geometryIndex;let w=!1;if(m&&(this.getMatrixAt(x,Or),this.getBoundingSphereAt(E,ls).applyMatrix4(Or),w=!vd.intersectsSphere(ls)),!w){const b=p[E];h[M]=b.start*c,f[M]=b.count,y[M]=x,M++}}g.needsUpdate=!0,this._multiDrawCount=M,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,a){this.onBeforeRender(e,null,i,s,a)}}class Vn extends Dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qu=new D,Zu=new D,P0=new rt,ga=new Ds,Fc=new yn,yd=new D,I0=new D;let Vr=class extends It{constructor(e=new St,t=new Vn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)qu.fromBufferAttribute(t,i-1),Zu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=qu.distanceTo(Zu);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fc.copy(n.boundingSphere),Fc.applyMatrix4(i),Fc.radius+=s,e.ray.intersectsSphere(Fc)===!1)return;P0.copy(i).invert(),ga.copy(e.ray).applyMatrix4(P0);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=this.isLineSegments?2:1,f=n.index,m=n.attributes.position;if(f!==null){const g=Math.max(0,a.start),y=Math.min(f.count,a.start+a.count);for(let M=g,x=y-1;M<x;M+=h){const _=f.getX(M),E=f.getX(M+1),w=Bc(this,e,ga,u,_,E);w&&t.push(w)}if(this.isLineLoop){const M=f.getX(y-1),x=f.getX(g),_=Bc(this,e,ga,u,M,x);_&&t.push(_)}}else{const g=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let M=g,x=y-1;M<x;M+=h){const _=Bc(this,e,ga,u,M,M+1);_&&t.push(_)}if(this.isLineLoop){const M=Bc(this,e,ga,u,y-1,g);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}};function Bc(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(qu.fromBufferAttribute(a,i),Zu.fromBufferAttribute(a,s),t.distanceSqToSegment(qu,Zu,yd,I0)>n)return;yd.applyMatrix4(r.matrixWorld);const u=e.ray.origin.distanceTo(yd);if(!(u<e.near||u>e.far))return{distance:u,point:I0.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const L0=new D,D0=new D;class Zi extends Vr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)L0.fromBufferAttribute(t,i),D0.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+L0.distanceTo(D0);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class F_ extends Vr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Rp extends Dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const U0=new rt,jd=new Ds,zc=new yn,kc=new D;class B_ extends It{constructor(e=new St,t=new Rp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zc.copy(n.boundingSphere),zc.applyMatrix4(i),zc.radius+=s,e.ray.intersectsSphere(zc)===!1)return;U0.copy(i).invert(),jd.copy(e.ray).applyMatrix4(U0);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=m,M=g;y<M;y++){const x=h.getX(y);kc.fromBufferAttribute(p,x),N0(kc,x,u,i,e,t,this)}}else{const m=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let y=m,M=g;y<M;y++)kc.fromBufferAttribute(p,y),N0(kc,y,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function N0(r,e,t,n,i,s,a){const c=jd.distanceSqToPoint(r);if(c<t){const u=new D;jd.closestPointToPoint(r,u),u.applyMatrix4(n);const h=i.ray.origin.distanceTo(u);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(c),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class sA extends Qt{constructor(e,t,n,i,s,a,c,u,h){super(e,t,n,i,s,a,c,u,h),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:an,this.magFilter=s!==void 0?s:an,this.generateMipmaps=!1;const f=this;function p(){f.needsUpdate=!0,e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(p)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class oA extends Qt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=vn,this.minFilter=vn,this.generateMipmaps=!1,this.needsUpdate=!0}}class ph extends Qt{constructor(e,t,n,i,s,a,c,u,h,f,p,m){super(null,a,c,u,h,f,i,s,p,m),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class aA extends ph{constructor(e,t,n,i,s,a){super(e,t,n,s,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=gi,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lA extends ph{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,gr),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class cA extends Qt{constructor(e,t,n,i,s,a,c,u,h){super(e,t,n,i,s,a,c,u,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ci{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let c=0,u=s-1,h;for(;c<=u;)if(i=Math.floor(c+(u-c)/2),h=n[i]-a,h<0)c=i+1;else if(h>0)u=i-1;else{u=i;break}if(i=u,n[i]===a)return i/(s-1);const f=n[i],m=n[i+1]-f,g=(a-f)/m;return(i+g)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),c=this.getPoint(s),u=t||(a.isVector2?new le:new D);return u.copy(c).sub(a).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,i=[],s=[],a=[],c=new D,u=new rt;for(let g=0;g<=e;g++){const y=g/e;i[g]=this.getTangentAt(y,new D)}s[0]=new D,a[0]=new D;let h=Number.MAX_VALUE;const f=Math.abs(i[0].x),p=Math.abs(i[0].y),m=Math.abs(i[0].z);f<=h&&(h=f,n.set(1,0,0)),p<=h&&(h=p,n.set(0,1,0)),m<=h&&n.set(0,0,1),c.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],c),a[0].crossVectors(i[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),a[g]=a[g-1].clone(),c.crossVectors(i[g-1],i[g]),c.length()>Number.EPSILON){c.normalize();const y=Math.acos(Kt(i[g-1].dot(i[g]),-1,1));s[g].applyMatrix4(u.makeRotationAxis(c,y))}a[g].crossVectors(i[g],s[g])}if(t===!0){let g=Math.acos(Kt(s[0].dot(s[e]),-1,1));g/=e,i[0].dot(c.crossVectors(s[0],s[e]))>0&&(g=-g);for(let y=1;y<=e;y++)s[y].applyMatrix4(u.makeRotationAxis(i[y],g*y)),a[y].crossVectors(i[y],s[y])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class mh extends Ci{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,c=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=c,this.aRotation=u}getPoint(e,t=new le){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const c=this.aStartAngle+e*s;let u=this.aX+this.xRadius*Math.cos(c),h=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=u-this.aX,g=h-this.aY;u=m*f-g*p+this.aX,h=m*p+g*f+this.aY}return n.set(u,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class z_ extends mh{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Pp(){let r=0,e=0,t=0,n=0;function i(s,a,c,u){r=s,e=c,t=-3*s+3*a-2*c-u,n=2*s-2*a+c+u}return{initCatmullRom:function(s,a,c,u,h){i(a,c,h*(c-s),h*(u-a))},initNonuniformCatmullRom:function(s,a,c,u,h,f,p){let m=(a-s)/h-(c-s)/(h+f)+(c-a)/f,g=(c-a)/f-(u-a)/(f+p)+(u-c)/p;m*=f,g*=f,i(a,c,m,g)},calc:function(s){const a=s*s,c=a*s;return r+e*s+t*a+n*c}}}const Hc=new D,xd=new Pp,Sd=new Pp,Md=new Pp;class k_ extends Ci{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let c=Math.floor(a),u=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:u===0&&c===s-1&&(c=s-2,u=1);let h,f;this.closed||c>0?h=i[(c-1)%s]:(Hc.subVectors(i[0],i[1]).add(i[0]),h=Hc);const p=i[c%s],m=i[(c+1)%s];if(this.closed||c+2<s?f=i[(c+2)%s]:(Hc.subVectors(i[s-1],i[s-2]).add(i[s-1]),f=Hc),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let y=Math.pow(h.distanceToSquared(p),g),M=Math.pow(p.distanceToSquared(m),g),x=Math.pow(m.distanceToSquared(f),g);M<1e-4&&(M=1),y<1e-4&&(y=M),x<1e-4&&(x=M),xd.initNonuniformCatmullRom(h.x,p.x,m.x,f.x,y,M,x),Sd.initNonuniformCatmullRom(h.y,p.y,m.y,f.y,y,M,x),Md.initNonuniformCatmullRom(h.z,p.z,m.z,f.z,y,M,x)}else this.curveType==="catmullrom"&&(xd.initCatmullRom(h.x,p.x,m.x,f.x,this.tension),Sd.initCatmullRom(h.y,p.y,m.y,f.y,this.tension),Md.initCatmullRom(h.z,p.z,m.z,f.z,this.tension));return n.set(xd.calc(u),Sd.calc(u),Md.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function O0(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,c=r*r,u=r*c;return(2*t-2*n+s+a)*u+(-3*t+3*n-2*s-a)*c+s*r+t}function uA(r,e){const t=1-r;return t*t*e}function hA(r,e){return 2*(1-r)*r*e}function fA(r,e){return r*r*e}function Pa(r,e,t,n){return uA(r,e)+hA(r,t)+fA(r,n)}function dA(r,e){const t=1-r;return t*t*t*e}function pA(r,e){const t=1-r;return 3*t*t*r*e}function mA(r,e){return 3*(1-r)*r*r*e}function gA(r,e){return r*r*r*e}function Ia(r,e,t,n,i){return dA(r,e)+pA(r,t)+mA(r,n)+gA(r,i)}class Ip extends Ci{constructor(e=new le,t=new le,n=new le,i=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new le){const n=t,i=this.v0,s=this.v1,a=this.v2,c=this.v3;return n.set(Ia(e,i.x,s.x,a.x,c.x),Ia(e,i.y,s.y,a.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class H_ extends Ci{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){const n=t,i=this.v0,s=this.v1,a=this.v2,c=this.v3;return n.set(Ia(e,i.x,s.x,a.x,c.x),Ia(e,i.y,s.y,a.y,c.y),Ia(e,i.z,s.z,a.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lp extends Ci{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class V_ extends Ci{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dp extends Ci{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Pa(e,i.x,s.x,a.x),Pa(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Up extends Ci{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Pa(e,i.x,s.x,a.x),Pa(e,i.y,s.y,a.y),Pa(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Np extends Ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),c=s-a,u=i[a===0?a:a-1],h=i[a],f=i[a>i.length-2?i.length-1:a+1],p=i[a>i.length-3?i.length-1:a+2];return n.set(O0(c,u.x,h.x,f.x,p.x),O0(c,u.y,h.y,f.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new le().fromArray(i))}return this}}var ju=Object.freeze({__proto__:null,ArcCurve:z_,CatmullRomCurve3:k_,CubicBezierCurve:Ip,CubicBezierCurve3:H_,EllipseCurve:mh,LineCurve:Lp,LineCurve3:V_,QuadraticBezierCurve:Dp,QuadraticBezierCurve3:Up,SplineCurve:Np});class G_ extends Ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ju[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,c=this.curves[s],u=c.getLength(),h=u===0?0:1-a/u;return c.getPointAt(h,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],c=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,u=a.getPoints(c);for(let h=0;h<u.length;h++){const f=u[h];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new ju[i.type]().fromJSON(i))}return this}}class Wa extends G_{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Lp(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Dp(this.currentPoint.clone(),new le(e,t),new le(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const c=new Ip(this.currentPoint.clone(),new le(e,t),new le(n,i),new le(s,a));return this.curves.push(c),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Np(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(e+c,t+u,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,c,u){const h=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+h,t+f,n,i,s,a,c,u),this}absellipse(e,t,n,i,s,a,c,u){const h=new mh(e,t,n,i,s,a,c,u);if(this.curves.length>0){const p=h.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(h);const f=h.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class sl extends St{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Kt(i,0,Math.PI*2);const s=[],a=[],c=[],u=[],h=[],f=1/t,p=new D,m=new le,g=new D,y=new D,M=new D;let x=0,_=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:x=e[E+1].x-e[E].x,_=e[E+1].y-e[E].y,g.x=_*1,g.y=-x,g.z=_*0,M.copy(g),g.normalize(),u.push(g.x,g.y,g.z);break;case e.length-1:u.push(M.x,M.y,M.z);break;default:x=e[E+1].x-e[E].x,_=e[E+1].y-e[E].y,g.x=_*1,g.y=-x,g.z=_*0,y.copy(g),g.x+=M.x,g.y+=M.y,g.z+=M.z,g.normalize(),u.push(g.x,g.y,g.z),M.copy(y)}for(let E=0;E<=t;E++){const w=n+E*f*i,b=Math.sin(w),U=Math.cos(w);for(let P=0;P<=e.length-1;P++){p.x=e[P].x*b,p.y=e[P].y,p.z=e[P].x*U,a.push(p.x,p.y,p.z),m.x=E/t,m.y=P/(e.length-1),c.push(m.x,m.y);const L=u[3*P+0]*b,F=u[3*P+1],G=u[3*P+0]*U;h.push(L,F,G)}}for(let E=0;E<t;E++)for(let w=0;w<e.length-1;w++){const b=w+E*e.length,U=b,P=b+e.length,L=b+e.length+1,F=b+1;s.push(U,P,F),s.push(L,F,P)}this.setIndex(s),this.setAttribute("position",new Ze(a,3)),this.setAttribute("uv",new Ze(c,2)),this.setAttribute("normal",new Ze(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.points,e.segments,e.phiStart,e.phiLength)}}class gh extends sl{constructor(e=1,t=1,n=4,i=8){const s=new Wa;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new gh(e.radius,e.length,e.capSegments,e.radialSegments)}}class vh extends St{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],c=[],u=[],h=new D,f=new le;a.push(0,0,0),c.push(0,0,1),u.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){const g=n+p/t*i;h.x=e*Math.cos(g),h.y=e*Math.sin(g),a.push(h.x,h.y,h.z),c.push(0,0,1),f.x=(a[m]/e+1)/2,f.y=(a[m+1]/e+1)/2,u.push(f.x,f.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class zo extends St{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,c=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:c,thetaLength:u};const h=this;i=Math.floor(i),s=Math.floor(s);const f=[],p=[],m=[],g=[];let y=0;const M=[],x=n/2;let _=0;E(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(f),this.setAttribute("position",new Ze(p,3)),this.setAttribute("normal",new Ze(m,3)),this.setAttribute("uv",new Ze(g,2));function E(){const b=new D,U=new D;let P=0;const L=(t-e)/n;for(let F=0;F<=s;F++){const G=[],A=F/s,C=A*(t-e)+e;for(let Y=0;Y<=i;Y++){const Z=Y/i,K=Z*u+c,ce=Math.sin(K),j=Math.cos(K);U.x=C*ce,U.y=-A*n+x,U.z=C*j,p.push(U.x,U.y,U.z),b.set(ce,L,j).normalize(),m.push(b.x,b.y,b.z),g.push(Z,1-A),G.push(y++)}M.push(G)}for(let F=0;F<i;F++)for(let G=0;G<s;G++){const A=M[G][F],C=M[G+1][F],Y=M[G+1][F+1],Z=M[G][F+1];e>0&&(f.push(A,C,Z),P+=3),t>0&&(f.push(C,Y,Z),P+=3)}h.addGroup(_,P,0),_+=P}function w(b){const U=y,P=new le,L=new D;let F=0;const G=b===!0?e:t,A=b===!0?1:-1;for(let Y=1;Y<=i;Y++)p.push(0,x*A,0),m.push(0,A,0),g.push(.5,.5),y++;const C=y;for(let Y=0;Y<=i;Y++){const K=Y/i*u+c,ce=Math.cos(K),j=Math.sin(K);L.x=G*j,L.y=x*A,L.z=G*ce,p.push(L.x,L.y,L.z),m.push(0,A,0),P.x=ce*.5+.5,P.y=j*.5*A+.5,g.push(P.x,P.y),y++}for(let Y=0;Y<i;Y++){const Z=U+Y,K=C+Y;b===!0?f.push(K,K+1,Z):f.push(K+1,K,Z),F+=3}h.addGroup(_,F,b===!0?1:2),_+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _h extends zo{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,c=Math.PI*2){super(0,e,t,n,i,s,a,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:c}}static fromJSON(e){return new _h(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xr extends St{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];c(i),h(n),f(),this.setAttribute("position",new Ze(s,3)),this.setAttribute("normal",new Ze(s.slice(),3)),this.setAttribute("uv",new Ze(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function c(E){const w=new D,b=new D,U=new D;for(let P=0;P<t.length;P+=3)g(t[P+0],w),g(t[P+1],b),g(t[P+2],U),u(w,b,U,E)}function u(E,w,b,U){const P=U+1,L=[];for(let F=0;F<=P;F++){L[F]=[];const G=E.clone().lerp(b,F/P),A=w.clone().lerp(b,F/P),C=P-F;for(let Y=0;Y<=C;Y++)Y===0&&F===P?L[F][Y]=G:L[F][Y]=G.clone().lerp(A,Y/C)}for(let F=0;F<P;F++)for(let G=0;G<2*(P-F)-1;G++){const A=Math.floor(G/2);G%2===0?(m(L[F][A+1]),m(L[F+1][A]),m(L[F][A])):(m(L[F][A+1]),m(L[F+1][A+1]),m(L[F+1][A]))}}function h(E){const w=new D;for(let b=0;b<s.length;b+=3)w.x=s[b+0],w.y=s[b+1],w.z=s[b+2],w.normalize().multiplyScalar(E),s[b+0]=w.x,s[b+1]=w.y,s[b+2]=w.z}function f(){const E=new D;for(let w=0;w<s.length;w+=3){E.x=s[w+0],E.y=s[w+1],E.z=s[w+2];const b=x(E)/2/Math.PI+.5,U=_(E)/Math.PI+.5;a.push(b,1-U)}y(),p()}function p(){for(let E=0;E<a.length;E+=6){const w=a[E+0],b=a[E+2],U=a[E+4],P=Math.max(w,b,U),L=Math.min(w,b,U);P>.9&&L<.1&&(w<.2&&(a[E+0]+=1),b<.2&&(a[E+2]+=1),U<.2&&(a[E+4]+=1))}}function m(E){s.push(E.x,E.y,E.z)}function g(E,w){const b=E*3;w.x=e[b+0],w.y=e[b+1],w.z=e[b+2]}function y(){const E=new D,w=new D,b=new D,U=new D,P=new le,L=new le,F=new le;for(let G=0,A=0;G<s.length;G+=9,A+=6){E.set(s[G+0],s[G+1],s[G+2]),w.set(s[G+3],s[G+4],s[G+5]),b.set(s[G+6],s[G+7],s[G+8]),P.set(a[A+0],a[A+1]),L.set(a[A+2],a[A+3]),F.set(a[A+4],a[A+5]),U.copy(E).add(w).add(b).divideScalar(3);const C=x(U);M(P,A+0,E,C),M(L,A+2,w,C),M(F,A+4,b,C)}}function M(E,w,b,U){U<0&&E.x===1&&(a[w]=E.x-1),b.x===0&&b.z===0&&(a[w]=U/2/Math.PI+.5)}function x(E){return Math.atan2(E.z,-E.x)}function _(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.vertices,e.indices,e.radius,e.details)}}class yh extends Xr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new yh(e.radius,e.detail)}}const Vc=new D,Gc=new D,wd=new D,Wc=new qn;class Op extends St{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Ts*t),a=e.getIndex(),c=e.getAttribute("position"),u=a?a.count:c.count,h=[0,0,0],f=["a","b","c"],p=new Array(3),m={},g=[];for(let y=0;y<u;y+=3){a?(h[0]=a.getX(y),h[1]=a.getX(y+1),h[2]=a.getX(y+2)):(h[0]=y,h[1]=y+1,h[2]=y+2);const{a:M,b:x,c:_}=Wc;if(M.fromBufferAttribute(c,h[0]),x.fromBufferAttribute(c,h[1]),_.fromBufferAttribute(c,h[2]),Wc.getNormal(wd),p[0]=`${Math.round(M.x*i)},${Math.round(M.y*i)},${Math.round(M.z*i)}`,p[1]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,p[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let E=0;E<3;E++){const w=(E+1)%3,b=p[E],U=p[w],P=Wc[f[E]],L=Wc[f[w]],F=`${b}_${U}`,G=`${U}_${b}`;G in m&&m[G]?(wd.dot(m[G].normal)<=s&&(g.push(P.x,P.y,P.z),g.push(L.x,L.y,L.z)),m[G]=null):F in m||(m[F]={index0:h[E],index1:h[w],normal:wd.clone()})}}for(const y in m)if(m[y]){const{index0:M,index1:x}=m[y];Vc.fromBufferAttribute(c,M),Gc.fromBufferAttribute(c,x),g.push(Vc.x,Vc.y,Vc.z),g.push(Gc.x,Gc.y,Gc.z)}this.setAttribute("position",new Ze(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class bs extends Wa{constructor(e){super(e),this.uuid=ri(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Wa().fromJSON(i))}return this}}const vA={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=W_(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let c,u,h,f,p,m,g;if(n&&(s=MA(r,e,s,t)),r.length>80*t){c=h=r[0],u=f=r[1];for(let y=t;y<i;y+=t)p=r[y],m=r[y+1],p<c&&(c=p),m<u&&(u=m),p>h&&(h=p),m>f&&(f=m);g=Math.max(h-c,f-u),g=g!==0?32767/g:0}return Xa(s,a,t,c,u,g,0),a}};function W_(r,e,t,n,i){let s,a;if(i===DA(r,e,t,n)>0)for(s=e;s<t;s+=n)a=F0(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=F0(s,r[s],r[s+1],a);return a&&xh(a,a.next)&&(qa(a),a=a.next),a}function Ls(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(xh(t,t.next)||Zt(t.prev,t,t.next)===0)){if(qa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Xa(r,e,t,n,i,s,a){if(!r)return;!a&&s&&bA(r,n,i,s);let c=r,u,h;for(;r.prev!==r.next;){if(u=r.prev,h=r.next,s?yA(r,n,i,s):_A(r)){e.push(u.i/t|0),e.push(r.i/t|0),e.push(h.i/t|0),qa(r),r=h.next,c=h.next;continue}if(r=h,r===c){a?a===1?(r=xA(Ls(r),e,t),Xa(r,e,t,n,i,s,2)):a===2&&SA(r,e,t,n,i,s):Xa(Ls(r),e,t,n,i,s,1);break}}}function _A(r){const e=r.prev,t=r,n=r.next;if(Zt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,c=e.y,u=t.y,h=n.y,f=i<s?i<a?i:a:s<a?s:a,p=c<u?c<h?c:h:u<h?u:h,m=i>s?i>a?i:a:s>a?s:a,g=c>u?c>h?c:h:u>h?u:h;let y=n.next;for(;y!==e;){if(y.x>=f&&y.x<=m&&y.y>=p&&y.y<=g&&Ao(i,c,s,u,a,h,y.x,y.y)&&Zt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function yA(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Zt(i,s,a)>=0)return!1;const c=i.x,u=s.x,h=a.x,f=i.y,p=s.y,m=a.y,g=c<u?c<h?c:h:u<h?u:h,y=f<p?f<m?f:m:p<m?p:m,M=c>u?c>h?c:h:u>h?u:h,x=f>p?f>m?f:m:p>m?p:m,_=Jd(g,y,e,t,n),E=Jd(M,x,e,t,n);let w=r.prevZ,b=r.nextZ;for(;w&&w.z>=_&&b&&b.z<=E;){if(w.x>=g&&w.x<=M&&w.y>=y&&w.y<=x&&w!==i&&w!==a&&Ao(c,f,u,p,h,m,w.x,w.y)&&Zt(w.prev,w,w.next)>=0||(w=w.prevZ,b.x>=g&&b.x<=M&&b.y>=y&&b.y<=x&&b!==i&&b!==a&&Ao(c,f,u,p,h,m,b.x,b.y)&&Zt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;w&&w.z>=_;){if(w.x>=g&&w.x<=M&&w.y>=y&&w.y<=x&&w!==i&&w!==a&&Ao(c,f,u,p,h,m,w.x,w.y)&&Zt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;b&&b.z<=E;){if(b.x>=g&&b.x<=M&&b.y>=y&&b.y<=x&&b!==i&&b!==a&&Ao(c,f,u,p,h,m,b.x,b.y)&&Zt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function xA(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!xh(i,s)&&X_(i,n,n.next,s)&&Ya(i,s)&&Ya(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),qa(n),qa(n.next),n=r=s),n=n.next}while(n!==r);return Ls(n)}function SA(r,e,t,n,i,s){let a=r;do{let c=a.next.next;for(;c!==a.prev;){if(a.i!==c.i&&PA(a,c)){let u=Y_(a,c);a=Ls(a,a.next),u=Ls(u,u.next),Xa(a,e,t,n,i,s,0),Xa(u,e,t,n,i,s,0);return}c=c.next}a=a.next}while(a!==r)}function MA(r,e,t,n){const i=[];let s,a,c,u,h;for(s=0,a=e.length;s<a;s++)c=e[s]*n,u=s<a-1?e[s+1]*n:r.length,h=W_(r,c,u,n,!1),h===h.next&&(h.steiner=!0),i.push(RA(h));for(i.sort(wA),s=0;s<i.length;s++)t=EA(i[s],t);return t}function wA(r,e){return r.x-e.x}function EA(r,e){const t=TA(r,e);if(!t)return e;const n=Y_(t,r);return Ls(n,n.next),Ls(t,t.next)}function TA(r,e){let t=e,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const m=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=s&&m>n&&(n=m,i=t.x<t.next.x?t:t.next,m===s))return i}t=t.next}while(t!==e);if(!i)return null;const c=i,u=i.x,h=i.y;let f=1/0,p;t=i;do s>=t.x&&t.x>=u&&s!==t.x&&Ao(a<h?s:n,a,u,h,a<h?n:s,a,t.x,t.y)&&(p=Math.abs(a-t.y)/(s-t.x),Ya(t,r)&&(p<f||p===f&&(t.x>i.x||t.x===i.x&&AA(i,t)))&&(i=t,f=p)),t=t.next;while(t!==c);return i}function AA(r,e){return Zt(r.prev,r,e.prev)<0&&Zt(e.next,r,r.next)<0}function bA(r,e,t,n){let i=r;do i.z===0&&(i.z=Jd(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,CA(i)}function CA(r){let e,t,n,i,s,a,c,u,h=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,c=0,e=0;e<h&&(c++,n=n.nextZ,!!n);e++);for(u=h;c>0||u>0&&n;)c!==0&&(u===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,c--):(i=n,n=n.nextZ,u--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,h*=2}while(a>1);return r}function Jd(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function RA(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Ao(r,e,t,n,i,s,a,c){return(i-a)*(e-c)>=(r-a)*(s-c)&&(r-a)*(n-c)>=(t-a)*(e-c)&&(t-a)*(s-c)>=(i-a)*(n-c)}function PA(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!IA(r,e)&&(Ya(r,e)&&Ya(e,r)&&LA(r,e)&&(Zt(r.prev,r,e.prev)||Zt(r,e.prev,e))||xh(r,e)&&Zt(r.prev,r,r.next)>0&&Zt(e.prev,e,e.next)>0)}function Zt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function xh(r,e){return r.x===e.x&&r.y===e.y}function X_(r,e,t,n){const i=Yc(Zt(r,e,t)),s=Yc(Zt(r,e,n)),a=Yc(Zt(t,n,r)),c=Yc(Zt(t,n,e));return!!(i!==s&&a!==c||i===0&&Xc(r,t,e)||s===0&&Xc(r,n,e)||a===0&&Xc(t,r,n)||c===0&&Xc(t,e,n))}function Xc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Yc(r){return r>0?1:r<0?-1:0}function IA(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&X_(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Ya(r,e){return Zt(r.prev,r,r.next)<0?Zt(r,e,r.next)>=0&&Zt(r,r.prev,e)>=0:Zt(r,e,r.prev)<0||Zt(r,r.next,e)<0}function LA(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Y_(r,e){const t=new Kd(r.i,r.x,r.y),n=new Kd(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function F0(r,e,t,n){const i=new Kd(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qa(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Kd(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function DA(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class Yi{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Yi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];B0(e),z0(n,e);let a=e.length;t.forEach(B0);for(let u=0;u<t.length;u++)i.push(a),a+=t[u].length,z0(n,t[u]);const c=vA.triangulate(n,i);for(let u=0;u<c.length;u+=3)s.push(c.slice(u,u+3));return s}}function B0(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function z0(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Sh extends St{constructor(e=new bs([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];a(h)}this.setAttribute("position",new Ze(i,3)),this.setAttribute("uv",new Ze(s,2)),this.computeVertexNormals();function a(c){const u=[],h=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,y=t.bevelSize!==void 0?t.bevelSize:g-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:UA;let w,b=!1,U,P,L,F;_&&(w=_.getSpacedPoints(f),b=!0,m=!1,U=_.computeFrenetFrames(f,!1),P=new D,L=new D,F=new D),m||(x=0,g=0,y=0,M=0);const G=c.extractPoints(h);let A=G.shape;const C=G.holes;if(!Yi.isClockWise(A)){A=A.reverse();for(let pe=0,O=C.length;pe<O;pe++){const Te=C[pe];Yi.isClockWise(Te)&&(C[pe]=Te.reverse())}}const Z=Yi.triangulateShape(A,C),K=A;for(let pe=0,O=C.length;pe<O;pe++){const Te=C[pe];A=A.concat(Te)}function ce(pe,O,Te){return O||console.error("THREE.ExtrudeGeometry: vec does not exist"),pe.clone().addScaledVector(O,Te)}const j=A.length,ve=Z.length;function H(pe,O,Te){let Ee,ye,Ae;const je=pe.x-O.x,Le=pe.y-O.y,N=Te.x-pe.x,R=Te.y-pe.y,J=je*je+Le*Le,ae=je*R-Le*N;if(Math.abs(ae)>Number.EPSILON){const fe=Math.sqrt(J),he=Math.sqrt(N*N+R*R),qe=O.x-Le/fe,be=O.y+je/fe,De=Te.x-R/he,At=Te.y+N/he,xe=((De-qe)*R-(At-be)*N)/(je*R-Le*N);Ee=qe+je*xe-pe.x,ye=be+Le*xe-pe.y;const Ne=Ee*Ee+ye*ye;if(Ne<=2)return new le(Ee,ye);Ae=Math.sqrt(Ne/2)}else{let fe=!1;je>Number.EPSILON?N>Number.EPSILON&&(fe=!0):je<-Number.EPSILON?N<-Number.EPSILON&&(fe=!0):Math.sign(Le)===Math.sign(R)&&(fe=!0),fe?(Ee=-Le,ye=je,Ae=Math.sqrt(J)):(Ee=je,ye=Le,Ae=Math.sqrt(J/2))}return new le(Ee/Ae,ye/Ae)}const oe=[];for(let pe=0,O=K.length,Te=O-1,Ee=pe+1;pe<O;pe++,Te++,Ee++)Te===O&&(Te=0),Ee===O&&(Ee=0),oe[pe]=H(K[pe],K[Te],K[Ee]);const ie=[];let ue,Fe=oe.concat();for(let pe=0,O=C.length;pe<O;pe++){const Te=C[pe];ue=[];for(let Ee=0,ye=Te.length,Ae=ye-1,je=Ee+1;Ee<ye;Ee++,Ae++,je++)Ae===ye&&(Ae=0),je===ye&&(je=0),ue[Ee]=H(Te[Ee],Te[Ae],Te[je]);ie.push(ue),Fe=Fe.concat(ue)}for(let pe=0;pe<x;pe++){const O=pe/x,Te=g*Math.cos(O*Math.PI/2),Ee=y*Math.sin(O*Math.PI/2)+M;for(let ye=0,Ae=K.length;ye<Ae;ye++){const je=ce(K[ye],oe[ye],Ee);we(je.x,je.y,-Te)}for(let ye=0,Ae=C.length;ye<Ae;ye++){const je=C[ye];ue=ie[ye];for(let Le=0,N=je.length;Le<N;Le++){const R=ce(je[Le],ue[Le],Ee);we(R.x,R.y,-Te)}}}const He=y+M;for(let pe=0;pe<j;pe++){const O=m?ce(A[pe],Fe[pe],He):A[pe];b?(L.copy(U.normals[0]).multiplyScalar(O.x),P.copy(U.binormals[0]).multiplyScalar(O.y),F.copy(w[0]).add(L).add(P),we(F.x,F.y,F.z)):we(O.x,O.y,0)}for(let pe=1;pe<=f;pe++)for(let O=0;O<j;O++){const Te=m?ce(A[O],Fe[O],He):A[O];b?(L.copy(U.normals[pe]).multiplyScalar(Te.x),P.copy(U.binormals[pe]).multiplyScalar(Te.y),F.copy(w[pe]).add(L).add(P),we(F.x,F.y,F.z)):we(Te.x,Te.y,p/f*pe)}for(let pe=x-1;pe>=0;pe--){const O=pe/x,Te=g*Math.cos(O*Math.PI/2),Ee=y*Math.sin(O*Math.PI/2)+M;for(let ye=0,Ae=K.length;ye<Ae;ye++){const je=ce(K[ye],oe[ye],Ee);we(je.x,je.y,p+Te)}for(let ye=0,Ae=C.length;ye<Ae;ye++){const je=C[ye];ue=ie[ye];for(let Le=0,N=je.length;Le<N;Le++){const R=ce(je[Le],ue[Le],Ee);b?we(R.x,R.y+w[f-1].y,w[f-1].x+Te):we(R.x,R.y,p+Te)}}}re(),ge();function re(){const pe=i.length/3;if(m){let O=0,Te=j*O;for(let Ee=0;Ee<ve;Ee++){const ye=Z[Ee];st(ye[2]+Te,ye[1]+Te,ye[0]+Te)}O=f+x*2,Te=j*O;for(let Ee=0;Ee<ve;Ee++){const ye=Z[Ee];st(ye[0]+Te,ye[1]+Te,ye[2]+Te)}}else{for(let O=0;O<ve;O++){const Te=Z[O];st(Te[2],Te[1],Te[0])}for(let O=0;O<ve;O++){const Te=Z[O];st(Te[0]+j*f,Te[1]+j*f,Te[2]+j*f)}}n.addGroup(pe,i.length/3-pe,0)}function ge(){const pe=i.length/3;let O=0;Pe(K,O),O+=K.length;for(let Te=0,Ee=C.length;Te<Ee;Te++){const ye=C[Te];Pe(ye,O),O+=ye.length}n.addGroup(pe,i.length/3-pe,1)}function Pe(pe,O){let Te=pe.length;for(;--Te>=0;){const Ee=Te;let ye=Te-1;ye<0&&(ye=pe.length-1);for(let Ae=0,je=f+x*2;Ae<je;Ae++){const Le=j*Ae,N=j*(Ae+1),R=O+Ee+Le,J=O+ye+Le,ae=O+ye+N,fe=O+Ee+N;et(R,J,ae,fe)}}}function we(pe,O,Te){u.push(pe),u.push(O),u.push(Te)}function st(pe,O,Te){at(pe),at(O),at(Te);const Ee=i.length/3,ye=E.generateTopUV(n,i,Ee-3,Ee-2,Ee-1);tt(ye[0]),tt(ye[1]),tt(ye[2])}function et(pe,O,Te,Ee){at(pe),at(O),at(Ee),at(O),at(Te),at(Ee);const ye=i.length/3,Ae=E.generateSideWallUV(n,i,ye-6,ye-3,ye-2,ye-1);tt(Ae[0]),tt(Ae[1]),tt(Ae[3]),tt(Ae[1]),tt(Ae[2]),tt(Ae[3])}function at(pe){i.push(u[pe*3+0]),i.push(u[pe*3+1]),i.push(u[pe*3+2])}function tt(pe){s.push(pe.x),s.push(pe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return NA(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const c=t[e.shapes[s]];n.push(c)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ju[i.type]().fromJSON(i)),new Sh(n,e.options)}}const UA={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],c=e[n*3],u=e[n*3+1],h=e[i*3],f=e[i*3+1];return[new le(s,a),new le(c,u),new le(h,f)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],c=e[t*3+1],u=e[t*3+2],h=e[n*3],f=e[n*3+1],p=e[n*3+2],m=e[i*3],g=e[i*3+1],y=e[i*3+2],M=e[s*3],x=e[s*3+1],_=e[s*3+2];return Math.abs(c-f)<Math.abs(a-h)?[new le(a,1-u),new le(h,1-p),new le(m,1-y),new le(M,1-_)]:[new le(c,1-u),new le(f,1-p),new le(g,1-y),new le(x,1-_)]}};function NA(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Mh extends Xr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Mh(e.radius,e.detail)}}class ol extends Xr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ol(e.radius,e.detail)}}class wh extends St{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const c=[],u=[],h=[],f=[];let p=e;const m=(t-e)/i,g=new D,y=new le;for(let M=0;M<=i;M++){for(let x=0;x<=n;x++){const _=s+x/n*a;g.x=p*Math.cos(_),g.y=p*Math.sin(_),u.push(g.x,g.y,g.z),h.push(0,0,1),y.x=(g.x/t+1)/2,y.y=(g.y/t+1)/2,f.push(y.x,y.y)}p+=m}for(let M=0;M<i;M++){const x=M*(n+1);for(let _=0;_<n;_++){const E=_+x,w=E,b=E+n+1,U=E+n+2,P=E+1;c.push(w,b,P),c.push(b,U,P)}}this.setIndex(c),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Eh extends St{constructor(e=new bs([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let c=0,u=0;if(Array.isArray(e)===!1)h(e);else for(let f=0;f<e.length;f++)h(e[f]),this.addGroup(c,u,f),c+=u,u=0;this.setIndex(n),this.setAttribute("position",new Ze(i,3)),this.setAttribute("normal",new Ze(s,3)),this.setAttribute("uv",new Ze(a,2));function h(f){const p=i.length/3,m=f.extractPoints(t);let g=m.shape;const y=m.holes;Yi.isClockWise(g)===!1&&(g=g.reverse());for(let x=0,_=y.length;x<_;x++){const E=y[x];Yi.isClockWise(E)===!0&&(y[x]=E.reverse())}const M=Yi.triangulateShape(g,y);for(let x=0,_=y.length;x<_;x++){const E=y[x];g=g.concat(E)}for(let x=0,_=g.length;x<_;x++){const E=g[x];i.push(E.x,E.y,0),s.push(0,0,1),a.push(E.x,E.y)}for(let x=0,_=M.length;x<_;x++){const E=M[x],w=E[0]+p,b=E[1]+p,U=E[2]+p;n.push(w,b,U),u+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return OA(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new Eh(n,e.curveSegments)}}function OA(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class al extends St{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(a+c,Math.PI);let h=0;const f=[],p=new D,m=new D,g=[],y=[],M=[],x=[];for(let _=0;_<=n;_++){const E=[],w=_/n;let b=0;_===0&&a===0?b=.5/t:_===n&&u===Math.PI&&(b=-.5/t);for(let U=0;U<=t;U++){const P=U/t;p.x=-e*Math.cos(i+P*s)*Math.sin(a+w*c),p.y=e*Math.cos(a+w*c),p.z=e*Math.sin(i+P*s)*Math.sin(a+w*c),y.push(p.x,p.y,p.z),m.copy(p).normalize(),M.push(m.x,m.y,m.z),x.push(P+b,1-w),E.push(h++)}f.push(E)}for(let _=0;_<n;_++)for(let E=0;E<t;E++){const w=f[_][E+1],b=f[_][E],U=f[_+1][E],P=f[_+1][E+1];(_!==0||a>0)&&g.push(w,b,P),(_!==n-1||u<Math.PI)&&g.push(b,U,P)}this.setIndex(g),this.setAttribute("position",new Ze(y,3)),this.setAttribute("normal",new Ze(M,3)),this.setAttribute("uv",new Ze(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Th extends Xr{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Th(e.radius,e.detail)}}class Ah extends St{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],u=[],h=[],f=new D,p=new D,m=new D;for(let g=0;g<=n;g++)for(let y=0;y<=i;y++){const M=y/i*s,x=g/n*Math.PI*2;p.x=(e+t*Math.cos(x))*Math.cos(M),p.y=(e+t*Math.cos(x))*Math.sin(M),p.z=t*Math.sin(x),c.push(p.x,p.y,p.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),m.subVectors(p,f).normalize(),u.push(m.x,m.y,m.z),h.push(y/i),h.push(g/n)}for(let g=1;g<=n;g++)for(let y=1;y<=i;y++){const M=(i+1)*g+y-1,x=(i+1)*(g-1)+y-1,_=(i+1)*(g-1)+y,E=(i+1)*g+y;a.push(M,x,E),a.push(x,_,E)}this.setIndex(a),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ah(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class bh extends St{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);const c=[],u=[],h=[],f=[],p=new D,m=new D,g=new D,y=new D,M=new D,x=new D,_=new D;for(let w=0;w<=n;++w){const b=w/n*s*Math.PI*2;E(b,s,a,e,g),E(b+.01,s,a,e,y),x.subVectors(y,g),_.addVectors(y,g),M.crossVectors(x,_),_.crossVectors(M,x),M.normalize(),_.normalize();for(let U=0;U<=i;++U){const P=U/i*Math.PI*2,L=-t*Math.cos(P),F=t*Math.sin(P);p.x=g.x+(L*_.x+F*M.x),p.y=g.y+(L*_.y+F*M.y),p.z=g.z+(L*_.z+F*M.z),u.push(p.x,p.y,p.z),m.subVectors(p,g).normalize(),h.push(m.x,m.y,m.z),f.push(w/n),f.push(U/i)}}for(let w=1;w<=n;w++)for(let b=1;b<=i;b++){const U=(i+1)*(w-1)+(b-1),P=(i+1)*w+(b-1),L=(i+1)*w+b,F=(i+1)*(w-1)+b;c.push(U,P,F),c.push(P,L,F)}this.setIndex(c),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(f,2));function E(w,b,U,P,L){const F=Math.cos(w),G=Math.sin(w),A=U/b*w,C=Math.cos(A);L.x=P*(2+C)*.5*F,L.y=P*(2+C)*G*.5,L.z=P*Math.sin(A)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bh(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Ch extends St{constructor(e=new Up(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const c=new D,u=new D,h=new le;let f=new D;const p=[],m=[],g=[],y=[];M(),this.setIndex(y),this.setAttribute("position",new Ze(p,3)),this.setAttribute("normal",new Ze(m,3)),this.setAttribute("uv",new Ze(g,2));function M(){for(let w=0;w<t;w++)x(w);x(s===!1?t:0),E(),_()}function x(w){f=e.getPointAt(w/t,f);const b=a.normals[w],U=a.binormals[w];for(let P=0;P<=i;P++){const L=P/i*Math.PI*2,F=Math.sin(L),G=-Math.cos(L);u.x=G*b.x+F*U.x,u.y=G*b.y+F*U.y,u.z=G*b.z+F*U.z,u.normalize(),m.push(u.x,u.y,u.z),c.x=f.x+n*u.x,c.y=f.y+n*u.y,c.z=f.z+n*u.z,p.push(c.x,c.y,c.z)}}function _(){for(let w=1;w<=t;w++)for(let b=1;b<=i;b++){const U=(i+1)*(w-1)+(b-1),P=(i+1)*w+(b-1),L=(i+1)*w+b,F=(i+1)*(w-1)+b;y.push(U,P,F),y.push(P,L,F)}}function E(){for(let w=0;w<=t;w++)for(let b=0;b<=i;b++)h.x=w/t,h.y=b/i,g.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ch(new ju[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Fp extends St{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new D,s=new D;if(e.index!==null){const a=e.attributes.position,c=e.index;let u=e.groups;u.length===0&&(u=[{start:0,count:c.count,materialIndex:0}]);for(let h=0,f=u.length;h<f;++h){const p=u[h],m=p.start,g=p.count;for(let y=m,M=m+g;y<M;y+=3)for(let x=0;x<3;x++){const _=c.getX(y+x),E=c.getX(y+(x+1)%3);i.fromBufferAttribute(a,_),s.fromBufferAttribute(a,E),k0(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let c=0,u=a.count/3;c<u;c++)for(let h=0;h<3;h++){const f=3*c+h,p=3*c+(h+1)%3;i.fromBufferAttribute(a,f),s.fromBufferAttribute(a,p),k0(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ze(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function k0(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var H0=Object.freeze({__proto__:null,BoxGeometry:Us,CapsuleGeometry:gh,CircleGeometry:vh,ConeGeometry:_h,CylinderGeometry:zo,DodecahedronGeometry:yh,EdgesGeometry:Op,ExtrudeGeometry:Sh,IcosahedronGeometry:Mh,LatheGeometry:sl,OctahedronGeometry:ol,PlaneGeometry:Fo,PolyhedronGeometry:Xr,RingGeometry:wh,ShapeGeometry:Eh,SphereGeometry:al,TetrahedronGeometry:Th,TorusGeometry:Ah,TorusKnotGeometry:bh,TubeGeometry:Ch,WireframeGeometry:Fp});class q_ extends Dn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ze(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Z_ extends vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bp extends Dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class j_ extends Bp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class J_ extends Dn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ze(16777215),this.specular=new ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class K_ extends Dn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ze(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Q_ extends Dn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class $_ extends Dn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ey extends Dn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ze(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ty extends Vn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Ms(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function ny(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function iy(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Qd(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const c=t[s]*e;for(let u=0;u!==e;++u)i[a++]=r[c+u]}return i}function zp(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}function FA(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let u=0;u<s.tracks.length;++u){const h=s.tracks[u],f=h.getValueSize(),p=[],m=[];for(let g=0;g<h.times.length;++g){const y=h.times[g]*i;if(!(y<t||y>=n)){p.push(h.times[g]);for(let M=0;M<f;++M)m.push(h.values[g*f+M])}}p.length!==0&&(h.times=Ms(p,h.times.constructor),h.values=Ms(m,h.values.constructor),a.push(h))}s.tracks=a;let c=1/0;for(let u=0;u<s.tracks.length;++u)c>s.tracks[u].times[0]&&(c=s.tracks[u].times[0]);for(let u=0;u<s.tracks.length;++u)s.tracks[u].shift(-1*c);return s.resetDuration(),s}function BA(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const c=t.tracks[a],u=c.ValueTypeName;if(u==="bool"||u==="string")continue;const h=r.tracks.find(function(_){return _.name===c.name&&_.ValueTypeName===u});if(h===void 0)continue;let f=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=p/3);let m=0;const g=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(m=g/3);const y=c.times.length-1;let M;if(s<=c.times[0]){const _=f,E=p-f;M=c.values.slice(_,E)}else if(s>=c.times[y]){const _=y*p+f,E=_+p-f;M=c.values.slice(_,E)}else{const _=c.createInterpolant(),E=f,w=p-f;_.evaluate(s),M=_.resultBuffer.slice(E,w)}u==="quaternion"&&new Ln().fromArray(M).normalize().conjugate().toArray(M);const x=h.times.length;for(let _=0;_<x;++_){const E=_*g+m;if(u==="quaternion")Ln.multiplyQuaternionsFlat(h.values,E,M,0,h.values,E);else{const w=g-m*2;for(let b=0;b<w;++b)h.values[E+b]-=M[b]}}}return r.blendMode=gp,r}const zA={convertArray:Ms,isTypedArray:ny,getKeyframeOrder:iy,sortedArray:Qd,flattenJSON:zp,subclip:FA,makeClipAdditive:BA};class ll{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let c=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const c=t[1];e<c&&(n=2,s=c);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const c=n+a>>>1;e<t[c]?a=c:n=c+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ry extends ll{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ys,endingEnd:ys}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,c=i[s],u=i[a];if(c===void 0)switch(this.getSettings_().endingStart){case xs:s=e,c=2*t-n;break;case Fa:s=i.length-2,c=t+i[s]-i[s+1];break;default:s=e,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case xs:a=e,u=2*n-t;break;case Fa:a=1,u=n+i[1]-i[0];break;default:a=e-1,u=t}const h=(n-t)*.5,f=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(u-n),this._offsetPrev=s*f,this._offsetNext=a*f}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,g=this._weightNext,y=(n-t)/(i-t),M=y*y,x=M*y,_=-m*x+2*m*M-m*y,E=(1+m)*x+(-1.5-2*m)*M+(-.5+m)*y+1,w=(-1-g)*x+(1.5+g)*M+.5*y,b=g*x-g*M;for(let U=0;U!==c;++U)s[U]=_*a[f+U]+E*a[h+U]+w*a[u+U]+b*a[p+U];return s}}class kp extends ll{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=(n-t)/(i-t),p=1-f;for(let m=0;m!==c;++m)s[m]=a[h+m]*p+a[u+m]*f;return s}}class sy extends ll{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ri{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ms(t,this.TimeBufferType),this.values=Ms(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ms(e.times,Array),values:Ms(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new sy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ry(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Oa:t=this.InterpolantFactoryMethodDiscrete;break;case Xu:t=this.InterpolantFactoryMethodLinear;break;case ou:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oa;case this.InterpolantFactoryMethodLinear:return Xu;case this.InterpolantFactoryMethodSmooth:return ou}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const c=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*c,a*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let c=0;c!==s;c++){const u=n[c];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,u),e=!1;break}if(a!==null&&a>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,u,a),e=!1;break}a=u}if(i!==void 0&&ny(i))for(let c=0,u=i.length;c!==u;++c){const h=i[c];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ou,s=e.length-1;let a=1;for(let c=1;c<s;++c){let u=!1;const h=e[c],f=e[c+1];if(h!==f&&(c!==1||h!==e[0]))if(i)u=!0;else{const p=c*n,m=p-n,g=p+n;for(let y=0;y!==n;++y){const M=t[p+y];if(M!==t[m+y]||M!==t[g+y]){u=!0;break}}}if(u){if(c!==a){e[a]=e[c];const p=c*n,m=a*n;for(let g=0;g!==n;++g)t[m+g]=t[p+g]}++a}}if(s>0){e[a]=e[s];for(let c=s*n,u=a*n,h=0;h!==n;++h)t[u+h]=t[c+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=Xu;class Ns extends Ri{constructor(e,t,n){super(e,t,n)}}Ns.prototype.ValueTypeName="bool";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=Oa;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class Hp extends Ri{}Hp.prototype.ValueTypeName="color";class Za extends Ri{}Za.prototype.ValueTypeName="number";class oy extends ll{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,u=(n-t)/(i-t);let h=e*c;for(let f=h+c;h!==f;h+=4)Ln.slerpFlat(s,0,a,h-c,a,h,u);return s}}class cl extends Ri{InterpolantFactoryMethodLinear(e){return new oy(this.times,this.values,this.getValueSize(),e)}}cl.prototype.ValueTypeName="quaternion";cl.prototype.InterpolantFactoryMethodSmooth=void 0;class Os extends Ri{constructor(e,t,n){super(e,t,n)}}Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=Oa;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class ja extends Ri{}ja.prototype.ValueTypeName="vector";class Ja{constructor(e="",t=-1,n=[],i=oh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ri(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,c=n.length;a!==c;++a)t.push(HA(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Ri.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let c=0;c<s;c++){let u=[],h=[];u.push((c+s-1)%s,c,(c+1)%s),h.push(0,1,0);const f=iy(u);u=Qd(u,1,f),h=Qd(h,1,f),!i&&u[0]===0&&(u.push(s),h.push(h[0])),a.push(new Za(".morphTargetInfluences["+t[c].name+"]",u,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let c=0,u=e.length;c<u;c++){const h=e[c],f=h.name.match(s);if(f&&f.length>1){const p=f[1];let m=i[p];m||(i[p]=m=[]),m.push(h)}}const a=[];for(const c in i)a.push(this.CreateFromMorphTargetSequence(c,i[c],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(p,m,g,y,M){if(g.length!==0){const x=[],_=[];zp(g,x,_,y),x.length!==0&&M.push(new p(m,x,_))}},i=[],s=e.name||"default",a=e.fps||30,c=e.blendMode;let u=e.length||-1;const h=e.hierarchy||[];for(let p=0;p<h.length;p++){const m=h[p].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const g={};let y;for(y=0;y<m.length;y++)if(m[y].morphTargets)for(let M=0;M<m[y].morphTargets.length;M++)g[m[y].morphTargets[M]]=-1;for(const M in g){const x=[],_=[];for(let E=0;E!==m[y].morphTargets.length;++E){const w=m[y];x.push(w.time),_.push(w.morphTarget===M?1:0)}i.push(new Za(".morphTargetInfluence["+M+"]",x,_))}u=g.length*a}else{const g=".bones["+t[p].name+"]";n(ja,g+".position",m,"pos",i),n(cl,g+".quaternion",m,"rot",i),n(ja,g+".scale",m,"scl",i)}}return i.length===0?null:new this(s,u,i,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function kA(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Za;case"vector":case"vector2":case"vector3":case"vector4":return ja;case"color":return Hp;case"quaternion":return cl;case"bool":case"boolean":return Ns;case"string":return Os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function HA(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=kA(r.type);if(r.times===void 0){const t=[],n=[];zp(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const dr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Vp{constructor(e,t,n){const i=this;let s=!1,a=0,c=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){c++,s===!1&&i.onStart!==void 0&&i.onStart(f,a,c),s=!0},this.itemEnd=function(f){a++,i.onProgress!==void 0&&i.onProgress(f,a,c),a===c&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,p){return h.push(f,p),this},this.removeHandler=function(f){const p=h.indexOf(f);return p!==-1&&h.splice(p,2),this},this.getHandler=function(f){for(let p=0,m=h.length;p<m;p+=2){const g=h[p],y=h[p+1];if(g.global&&(g.lastIndex=0),g.test(f))return y}return null}}}const ay=new Vp;class jn{constructor(e){this.manager=e!==void 0?e:ay,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}jn.DEFAULT_MATERIAL_NAME="__DEFAULT";const lr={};class VA extends Error{constructor(e,t){super(e),this.response=t}}class _r extends jn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=dr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(lr[e]!==void 0){lr[e].push({onLoad:t,onProgress:n,onError:i});return}lr[e]=[],lr[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,u=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const f=lr[e],p=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),g=m?parseInt(m):0,y=g!==0;let M=0;const x=new ReadableStream({start(_){E();function E(){p.read().then(({done:w,value:b})=>{if(w)_.close();else{M+=b.byteLength;const U=new ProgressEvent("progress",{lengthComputable:y,loaded:M,total:g});for(let P=0,L=f.length;P<L;P++){const F=f[P];F.onProgress&&F.onProgress(U)}_.enqueue(b),E()}},w=>{_.error(w)})}}});return new Response(x)}else throw new VA(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(f=>new DOMParser().parseFromString(f,c));case"json":return h.json();default:if(c===void 0)return h.text();{const p=/charset="?([^;"\s]*)"?/i.exec(c),m=p&&p[1]?p[1].toLowerCase():void 0,g=new TextDecoder(m);return h.arrayBuffer().then(y=>g.decode(y))}}}).then(h=>{dr.add(e,h);const f=lr[e];delete lr[e];for(let p=0,m=f.length;p<m;p++){const g=f[p];g.onLoad&&g.onLoad(h)}}).catch(h=>{const f=lr[e];if(f===void 0)throw this.manager.itemError(e),h;delete lr[e];for(let p=0,m=f.length;p<m;p++){const g=f[p];g.onError&&g.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class GA extends jn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new _r(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Ja.parse(e[n]);t.push(i)}return t}}class WA extends jn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=[],c=new ph,u=new _r(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(s.withCredentials);let h=0;function f(p){u.load(e[p],function(m){const g=s.parse(m,!0);a[p]={width:g.width,height:g.height,format:g.format,mipmaps:g.mipmaps},h+=1,h===6&&(g.mipmapCount===1&&(c.minFilter=an),c.image=a,c.format=g.format,c.needsUpdate=!0,t&&t(c))},n,i)}if(Array.isArray(e))for(let p=0,m=e.length;p<m;++p)f(p);else u.load(e,function(p){const m=s.parse(p,!0);if(m.isCubemap){const g=m.mipmaps.length/m.mipmapCount;for(let y=0;y<g;y++){a[y]={mipmaps:[]};for(let M=0;M<m.mipmapCount;M++)a[y].mipmaps.push(m.mipmaps[y*m.mipmapCount+M]),a[y].format=m.format,a[y].width=m.width,a[y].height=m.height}c.image=a}else c.image.width=m.width,c.image.height=m.height,c.mipmaps=m.mipmaps;m.mipmapCount===1&&(c.minFilter=an),c.format=m.format,c.needsUpdate=!0,t&&t(c)},n,i);return c}}class Ka extends jn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=dr.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const c=Ga("img");function u(){f(),dr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(p){f(),i&&i(p),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){c.removeEventListener("load",u,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",u,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),s.manager.itemStart(e),c.src=e,c}}class XA extends jn{constructor(e){super(e)}load(e,t,n,i){const s=new il;s.colorSpace=mi;const a=new Ka(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let c=0;function u(h){a.load(e[h],function(f){s.images[h]=f,c++,c===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let h=0;h<e.length;++h)u(h);return s}}class YA extends jn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Xi,c=new _r(this.manager);return c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(s.withCredentials),c.load(e,function(u){let h;try{h=s.parse(u)}catch(f){if(i!==void 0)i(f);else{console.error(f);return}}h.image!==void 0?a.image=h.image:h.data!==void 0&&(a.image.width=h.width,a.image.height=h.height,a.image.data=h.data),a.wrapS=h.wrapS!==void 0?h.wrapS:gi,a.wrapT=h.wrapT!==void 0?h.wrapT:gi,a.magFilter=h.magFilter!==void 0?h.magFilter:an,a.minFilter=h.minFilter!==void 0?h.minFilter:an,a.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(a.colorSpace=h.colorSpace),h.flipY!==void 0&&(a.flipY=h.flipY),h.format!==void 0&&(a.format=h.format),h.type!==void 0&&(a.type=h.type),h.mipmaps!==void 0&&(a.mipmaps=h.mipmaps,a.minFilter=Vi),h.mipmapCount===1&&(a.minFilter=an),h.generateMipmaps!==void 0&&(a.generateMipmaps=h.generateMipmaps),a.needsUpdate=!0,t&&t(a,h)},n,i),a}}class qA extends jn{constructor(e){super(e)}load(e,t,n,i){const s=new Qt,a=new Ka(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Yr extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ly extends Yr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ed=new rt,V0=new D,G0=new D;class Gp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rl,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;V0.setFromMatrixPosition(e.matrixWorld),t.position.copy(V0),G0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(G0),t.updateMatrixWorld(),Ed.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ed),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ed)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ZA extends Gp{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Po*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class cy extends Yr{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new ZA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const W0=new rt,va=new D,Td=new D;class jA extends Gp{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new Tt(2,1,1,1),new Tt(0,1,1,1),new Tt(3,1,1,1),new Tt(1,1,1,1),new Tt(3,0,1,1),new Tt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),va.setFromMatrixPosition(e.matrixWorld),n.position.copy(va),Td.copy(n.position),Td.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Td),n.updateMatrixWorld(),i.makeTranslation(-va.x,-va.y,-va.z),W0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(W0)}}class uy extends Yr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class JA extends Gp{constructor(){super(new kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hy extends Yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new JA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fy extends Yr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class dy extends Yr{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class py{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new D)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class my extends Yr{constructor(e=new py,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Rh extends jn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,a=new _r(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const a=e.uniforms[s];switch(i.uniforms[s]={},a.type){case"t":i.uniforms[s].value=n(a.value);break;case"c":i.uniforms[s].value=new ze().setHex(a.value);break;case"v2":i.uniforms[s].value=new le().fromArray(a.value);break;case"v3":i.uniforms[s].value=new D().fromArray(a.value);break;case"v4":i.uniforms[s].value=new Tt().fromArray(a.value);break;case"m3":i.uniforms[s].value=new pt().fromArray(a.value);break;case"m4":i.uniforms[s].value=new rt().fromArray(a.value);break;default:i.uniforms[s].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new le().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Rh.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:q_,SpriteMaterial:bp,RawShaderMaterial:Z_,ShaderMaterial:vi,PointsMaterial:Rp,MeshPhysicalMaterial:j_,MeshStandardMaterial:Bp,MeshPhongMaterial:J_,MeshToonMaterial:K_,MeshNormalMaterial:Q_,MeshLambertMaterial:$_,MeshDepthMaterial:Ep,MeshDistanceMaterial:Tp,MeshBasicMaterial:Wr,MeshMatcapMaterial:ey,LineDashedMaterial:ty,LineBasicMaterial:Vn,Material:Dn};return new t[e]}}class $d{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Wp extends St{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class gy extends jn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new _r(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(g,y){if(t[y]!==void 0)return t[y];const x=g.interleavedBuffers[y],_=s(g,x.buffer),E=wo(x.type,_),w=new fh(E,x.stride);return w.uuid=x.uuid,t[y]=w,w}function s(g,y){if(n[y]!==void 0)return n[y];const x=g.arrayBuffers[y],_=new Uint32Array(x).buffer;return n[y]=_,_}const a=e.isInstancedBufferGeometry?new Wp:new St,c=e.data.index;if(c!==void 0){const g=wo(c.type,c.array);a.setIndex(new zt(g,1))}const u=e.data.attributes;for(const g in u){const y=u[g];let M;if(y.isInterleavedBufferAttribute){const x=i(e.data,y.data);M=new ii(x,y.itemSize,y.offset,y.normalized)}else{const x=wo(y.type,y.array),_=y.isInstancedBufferAttribute?Lo:zt;M=new _(x,y.itemSize,y.normalized)}y.name!==void 0&&(M.name=y.name),y.usage!==void 0&&M.setUsage(y.usage),a.setAttribute(g,M)}const h=e.data.morphAttributes;if(h)for(const g in h){const y=h[g],M=[];for(let x=0,_=y.length;x<_;x++){const E=y[x];let w;if(E.isInterleavedBufferAttribute){const b=i(e.data,E.data);w=new ii(b,E.itemSize,E.offset,E.normalized)}else{const b=wo(E.type,E.array);w=new zt(b,E.itemSize,E.normalized)}E.name!==void 0&&(w.name=E.name),M.push(w)}a.morphAttributes[g]=M}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const p=e.data.groups||e.data.drawcalls||e.data.offsets;if(p!==void 0)for(let g=0,y=p.length;g!==y;++g){const M=p[g];a.addGroup(M.start,M.count,M.materialIndex)}const m=e.data.boundingSphere;if(m!==void 0){const g=new D;m.center!==void 0&&g.fromArray(m.center),a.boundingSphere=new yn(g,m.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class KA extends jn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=this.path===""?$d.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const c=new _r(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){let h=null;try{h=JSON.parse(u)}catch(p){i!==void 0&&i(p),console.error("THREE:ObjectLoader: Can't parse "+e+".",p.message);return}const f=h.metadata;if(f===void 0||f.type===void 0||f.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(h,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?$d.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new _r(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const a=await s.loadAsync(e,t),c=JSON.parse(a),u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(c)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(h)}),c=this.parseTextures(e.textures,a),u=this.parseMaterials(e.materials,c),h=this.parseObject(e.object,s,u,c,n),f=this.parseSkeletons(e.skeletons,h);if(this.bindSkeletons(h,f),this.bindLightTargets(h),t!==void 0){let p=!1;for(const m in a)if(a[m].data instanceof HTMLImageElement){p=!0;break}p===!1&&t(h)}return h}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,s),c=this.parseMaterials(e.materials,a),u=this.parseObject(e.object,i,c,a,t),h=this.parseSkeletons(e.skeletons,u);return this.bindSkeletons(u,h),this.bindLightTargets(u),u}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new bs().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,a=e.length;s<a;s++){const c=new dh().fromJSON(e[s],i);n[c.uuid]=c}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new gy;for(let s=0,a=e.length;s<a;s++){let c;const u=e[s];switch(u.type){case"BufferGeometry":case"InstancedBufferGeometry":c=i.parse(u);break;default:u.type in H0?c=H0[u.type].fromJSON(u,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${u.type}"`)}c.uuid=u.uuid,u.name!==void 0&&(c.name=u.name),u.userData!==void 0&&(c.userData=u.userData),n[u.uuid]=c}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new Rh;s.setTextures(t);for(let a=0,c=e.length;a<c;a++){const u=e[a];n[u.uuid]===void 0&&(n[u.uuid]=s.parse(u)),i[u.uuid]=n[u.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=Ja.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function a(u){return n.manager.itemStart(u),s.load(u,function(){n.manager.itemEnd(u)},void 0,function(){n.manager.itemError(u),n.manager.itemEnd(u)})}function c(u){if(typeof u=="string"){const h=u,f=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h)?h:n.resourcePath+h;return a(f)}else return u.data?{data:wo(u.type,u.data),width:u.width,height:u.height}:null}if(e!==void 0&&e.length>0){const u=new Vp(t);s=new Ka(u),s.setCrossOrigin(this.crossOrigin);for(let h=0,f=e.length;h<f;h++){const p=e[h],m=p.url;if(Array.isArray(m)){const g=[];for(let y=0,M=m.length;y<M;y++){const x=m[y],_=c(x);_!==null&&(_ instanceof HTMLImageElement?g.push(_):g.push(new Xi(_.data,_.width,_.height)))}i[p.uuid]=new Ss(g)}else{const g=c(p.url);i[p.uuid]=new Ss(g)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(a){if(typeof a=="string"){const c=a,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:t.resourcePath+c;return await i.loadAsync(u)}else return a.data?{data:wo(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new Ka(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,c=e.length;a<c;a++){const u=e[a],h=u.url;if(Array.isArray(h)){const f=[];for(let p=0,m=h.length;p<m;p++){const g=h[p],y=await s(g);y!==null&&(y instanceof HTMLImageElement?f.push(y):f.push(new Xi(y.data,y.width,y.height)))}n[u.uuid]=new Ss(f)}else{const f=await s(u.url);n[u.uuid]=new Ss(f)}}}return n}parseTextures(e,t){function n(s,a){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}const i={};if(e!==void 0)for(let s=0,a=e.length;s<a;s++){const c=e[s];c.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',c.uuid),t[c.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",c.image);const u=t[c.image],h=u.data;let f;Array.isArray(h)?(f=new il,h.length===6&&(f.needsUpdate=!0)):(h&&h.data?f=new Xi:f=new Qt,h&&(f.needsUpdate=!0)),f.source=u,f.uuid=c.uuid,c.name!==void 0&&(f.name=c.name),c.mapping!==void 0&&(f.mapping=n(c.mapping,QA)),c.channel!==void 0&&(f.channel=c.channel),c.offset!==void 0&&f.offset.fromArray(c.offset),c.repeat!==void 0&&f.repeat.fromArray(c.repeat),c.center!==void 0&&f.center.fromArray(c.center),c.rotation!==void 0&&(f.rotation=c.rotation),c.wrap!==void 0&&(f.wrapS=n(c.wrap[0],X0),f.wrapT=n(c.wrap[1],X0)),c.format!==void 0&&(f.format=c.format),c.internalFormat!==void 0&&(f.internalFormat=c.internalFormat),c.type!==void 0&&(f.type=c.type),c.colorSpace!==void 0&&(f.colorSpace=c.colorSpace),c.minFilter!==void 0&&(f.minFilter=n(c.minFilter,Y0)),c.magFilter!==void 0&&(f.magFilter=n(c.magFilter,Y0)),c.anisotropy!==void 0&&(f.anisotropy=c.anisotropy),c.flipY!==void 0&&(f.flipY=c.flipY),c.generateMipmaps!==void 0&&(f.generateMipmaps=c.generateMipmaps),c.premultiplyAlpha!==void 0&&(f.premultiplyAlpha=c.premultiplyAlpha),c.unpackAlignment!==void 0&&(f.unpackAlignment=c.unpackAlignment),c.compareFunction!==void 0&&(f.compareFunction=c.compareFunction),c.userData!==void 0&&(f.userData=c.userData),i[c.uuid]=f}return i}parseObject(e,t,n,i,s){let a;function c(m){return t[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",m),t[m]}function u(m){if(m!==void 0){if(Array.isArray(m)){const g=[];for(let y=0,M=m.length;y<M;y++){const x=m[y];n[x]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",x),g.push(n[x])}return g}return n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),n[m]}}function h(m){return i[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",m),i[m]}let f,p;switch(e.type){case"Scene":a=new Ap,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new ze(e.background):a.background=h(e.background)),e.environment!==void 0&&(a.environment=h(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new hh(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new uh(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new tn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new kr(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new fy(e.color,e.intensity);break;case"DirectionalLight":a=new hy(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new uy(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new dy(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new cy(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new ly(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new my().fromJSON(e);break;case"SkinnedMesh":f=c(e.geometry),p=u(e.material),a=new U_(f,p),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":f=c(e.geometry),p=u(e.material),a=new nn(f,p);break;case"InstancedMesh":f=c(e.geometry),p=u(e.material);const m=e.count,g=e.instanceMatrix,y=e.instanceColor;a=new N_(f,p,m),a.instanceMatrix=new Lo(new Float32Array(g.array),16),y!==void 0&&(a.instanceColor=new Lo(new Float32Array(y.array),y.itemSize));break;case"BatchedMesh":f=c(e.geometry),p=u(e.material),a=new O_(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,p),a.geometry=f,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(M=>{const x=new _n;x.min.fromArray(M.boxMin),x.max.fromArray(M.boxMax);const _=new yn;return _.radius=M.sphereRadius,_.center.fromArray(M.sphereCenter),{boxInitialized:M.boxInitialized,box:x,sphereInitialized:M.sphereInitialized,sphere:_}}),a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=h(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=h(e.colorsTexture.uuid));break;case"LOD":a=new D_;break;case"Line":a=new Vr(c(e.geometry),u(e.material));break;case"LineLoop":a=new F_(c(e.geometry),u(e.material));break;case"LineSegments":a=new Zi(c(e.geometry),u(e.material));break;case"PointCloud":case"Points":a=new B_(c(e.geometry),u(e.material));break;case"Sprite":a=new L_(u(e.material));break;case"Group":a=new To;break;case"Bone":a=new Cp;break;default:a=new It}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const m=e.children;for(let g=0;g<m.length;g++)a.add(this.parseObject(m[g],t,n,i,s))}if(e.animations!==void 0){const m=e.animations;for(let g=0;g<m.length;g++){const y=m[g];a.animations.push(s[y])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const m=e.levels;for(let g=0;g<m.length;g++){const y=m[g],M=a.getObjectByProperty("uuid",y.object);M!==void 0&&a.addLevel(M,y.distance,y.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new It}})}}const QA={UVMapping:$u,CubeReflectionMapping:gr,CubeRefractionMapping:Hr,EquirectangularReflectionMapping:La,EquirectangularRefractionMapping:Da,CubeUVReflectionMapping:No},X0={RepeatWrapping:Ua,ClampToEdgeWrapping:gi,MirroredRepeatWrapping:Na},Y0={NearestFilter:vn,NearestMipmapNearestFilter:op,NearestMipmapLinearFilter:Mo,LinearFilter:an,LinearMipmapNearestFilter:wa,LinearMipmapLinearFilter:Vi};class $A extends jn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=dr.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader;const u=fetch(e,c).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return dr.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),dr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});dr.add(e,u),s.manager.itemStart(e)}}let qc;class Xp{static getContext(){return qc===void 0&&(qc=new(window.AudioContext||window.webkitAudioContext)),qc}static setContext(e){qc=e}}class eb extends jn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new _r(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(u){try{const h=u.slice(0);Xp.getContext().decodeAudioData(h,function(p){t(p)}).catch(c)}catch(h){c(h)}},n,i);function c(u){i?i(u):console.error(u),s.manager.itemError(e)}}}const q0=new rt,Z0=new rt,cs=new rt;class tb{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new tn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new tn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,cs.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,a=t.near*Math.tan(Ts*t.fov*.5)/t.zoom;let c,u;Z0.elements[12]=-i,q0.elements[12]=i,c=-a*t.aspect+s,u=a*t.aspect+s,cs.elements[0]=2*t.near/(u-c),cs.elements[8]=(u+c)/(u-c),this.cameraL.projectionMatrix.copy(cs),c=-a*t.aspect-s,u=a*t.aspect-s,cs.elements[0]=2*t.near/(u-c),cs.elements[8]=(u+c)/(u-c),this.cameraR.projectionMatrix.copy(cs)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Z0),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(q0)}}class Yp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=j0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=j0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function j0(){return performance.now()}const us=new D,J0=new Ln,nb=new D,hs=new D;class ib extends It{constructor(){super(),this.type="AudioListener",this.context=Xp.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Yp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(us,J0,nb),hs.set(0,0,-1).applyQuaternion(J0),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(us.x,i),t.positionY.linearRampToValueAtTime(us.y,i),t.positionZ.linearRampToValueAtTime(us.z,i),t.forwardX.linearRampToValueAtTime(hs.x,i),t.forwardY.linearRampToValueAtTime(hs.y,i),t.forwardZ.linearRampToValueAtTime(hs.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(us.x,us.y,us.z),t.setOrientation(hs.x,hs.y,hs.z,n.x,n.y,n.z)}}class vy extends It{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const fs=new D,K0=new Ln,rb=new D,ds=new D;class sb extends vy{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(fs,K0,rb),ds.set(0,0,1).applyQuaternion(K0);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(fs.x,n),t.positionY.linearRampToValueAtTime(fs.y,n),t.positionZ.linearRampToValueAtTime(fs.z,n),t.orientationX.linearRampToValueAtTime(ds.x,n),t.orientationY.linearRampToValueAtTime(ds.y,n),t.orientationZ.linearRampToValueAtTime(ds.z,n)}else t.setPosition(fs.x,fs.y,fs.z),t.setOrientation(ds.x,ds.y,ds.z)}}class ob{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class _y{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let c=0;c!==i;++c)n[s+c]=n[c];a=t}else{a+=t;const c=t/a;this._mixBufferRegion(n,s,0,c,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,c=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const u=t*this._origIndex;this._mixBufferRegion(n,i,u,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let u=t,h=t+t;u!==h;++u)if(n[u]!==n[u+t]){c.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Ln.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;Ln.multiplyQuaternionsFlat(e,a,e,t,e,n),Ln.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let c=0;c!==s;++c){const u=t+c;e[u]=e[u]*a+e[n+c]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]+e[n+a]*i}}}const qp="\\[\\]\\.:\\/",ab=new RegExp("["+qp+"]","g"),Zp="[^"+qp+"]",lb="[^"+qp.replace("\\.","")+"]",cb=/((?:WC+[\/:])*)/.source.replace("WC",Zp),ub=/(WCOD+)?/.source.replace("WCOD",lb),hb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zp),fb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zp),db=new RegExp("^"+cb+ub+hb+fb+"$"),pb=["material","materials","bones","map"];class mb{constructor(e,t,n){const i=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Pt{constructor(e,t,n){this.path=t,this.parsedPath=n||Pt.parseTrackName(t),this.node=Pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Pt.Composite(e,t,n):new Pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ab,"")}static parseTrackName(e){const t=db.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);pb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const c=s[a];if(c.name===t||c.uuid===t)return c;const u=n(c.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===h){h=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[i];if(a===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(u=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Pt.Composite=mb;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class gb{constructor(){this.isAnimationObjectGroup=!0,this.uuid=ri(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,a=s.length;let c,u=e.length,h=this.nCachedObjects_;for(let f=0,p=arguments.length;f!==p;++f){const m=arguments[f],g=m.uuid;let y=t[g];if(y===void 0){y=u++,t[g]=y,e.push(m);for(let M=0,x=a;M!==x;++M)s[M].push(new Pt(m,n[M],i[M]))}else if(y<h){c=e[y];const M=--h,x=e[M];t[x.uuid]=y,e[y]=x,t[g]=M,e[M]=m;for(let _=0,E=a;_!==E;++_){const w=s[_],b=w[M];let U=w[y];w[y]=b,U===void 0&&(U=new Pt(m,n[_],i[_])),w[M]=U}}else e[y]!==c&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=h}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let a=0,c=arguments.length;a!==c;++a){const u=arguments[a],h=u.uuid,f=t[h];if(f!==void 0&&f>=s){const p=s++,m=e[p];t[m.uuid]=f,e[f]=m,t[h]=p,e[p]=u;for(let g=0,y=i;g!==y;++g){const M=n[g],x=M[p],_=M[f];M[f]=x,M[p]=_}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,a=e.length;for(let c=0,u=arguments.length;c!==u;++c){const h=arguments[c],f=h.uuid,p=t[f];if(p!==void 0)if(delete t[f],p<s){const m=--s,g=e[m],y=--a,M=e[y];t[g.uuid]=p,e[p]=g,t[M.uuid]=m,e[m]=M,e.pop();for(let x=0,_=i;x!==_;++x){const E=n[x],w=E[m],b=E[y];E[p]=w,E[m]=b,E.pop()}}else{const m=--a,g=e[m];m>0&&(t[g.uuid]=p),e[p]=g,e.pop();for(let y=0,M=i;y!==M;++y){const x=n[y];x[p]=x[m],x.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const a=this._paths,c=this._parsedPaths,u=this._objects,h=u.length,f=this.nCachedObjects_,p=new Array(h);i=s.length,n[e]=i,a.push(e),c.push(t),s.push(p);for(let m=f,g=u.length;m!==g;++m){const y=u[m];p[m]=new Pt(y,e,t)}return p}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,a=this._bindings,c=a.length-1,u=a[c],h=e[c];t[h]=n,a[n]=u,a.pop(),s[n]=s[c],s.pop(),i[n]=i[c],i.pop()}}}class yy{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,c=new Array(a),u={endingStart:ys,endingEnd:ys};for(let h=0;h!==a;++h){const f=s[h].createInterpolant(null);c[h]=f,f.settings=u}this._interpolantSettings=u,this._interpolants=c,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=n_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,c=i/s;e.warp(1,a,t),this.warp(c,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let c=this._timeScaleInterpolant;c===null&&(c=i._lendControlInterpolant(),this._timeScaleInterpolant=c);const u=c.parameterPositions,h=c.sampleValues;return u[0]=s,u[1]=s+n,h[0]=e/a,h[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const u=(e-s)*n;u<0||n===0?t=0:(this._startTime=null,t=n*u)}t*=this._updateTimeScale(e);const a=this._updateTime(t),c=this._updateWeight(e);if(c>0){const u=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case gp:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(a),h[f].accumulateAdditive(c);break;case oh:default:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(a),h[f].accumulate(i,c)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===i_;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===t_){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const c=Math.floor(i/t);i-=t*c,s+=Math.abs(c);const u=this.repetitions-s;if(u<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(u===1){const h=e<0;this._setEndings(h,!h,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:c})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=xs,i.endingEnd=xs):(e?i.endingStart=this.zeroSlopeAtStart?xs:ys:i.endingStart=Fa,t?i.endingEnd=this.zeroSlopeAtEnd?xs:ys:i.endingEnd=Fa)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const c=a.parameterPositions,u=a.sampleValues;return c[0]=s,u[0]=t,c[1]=s+e,u[1]=n,this}}const vb=new Float32Array(1);class _b extends qi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,c=e._interpolants,u=n.uuid,h=this._bindingsByRootAndName;let f=h[u];f===void 0&&(f={},h[u]=f);for(let p=0;p!==s;++p){const m=i[p],g=m.name;let y=f[g];if(y!==void 0)++y.referenceCount,a[p]=y;else{if(y=a[p],y!==void 0){y._cacheIndex===null&&(++y.referenceCount,this._addInactiveBinding(y,u,g));continue}const M=t&&t._propertyBindings[p].binding.parsedPath;y=new _y(Pt.create(n,g,M),m.ValueTypeName,m.getValueSize()),++y.referenceCount,this._addInactiveBinding(y,u,g),a[p]=y}c[p].resultBuffer=y.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const c=a.knownActions;e._byClipCacheIndex=c.length,c.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,c=a[s],u=c.knownActions,h=u[u.length-1],f=e._byClipCacheIndex;h._byClipCacheIndex=f,u[f]=h,u.pop(),e._byClipCacheIndex=null;const p=c.actionByRoot,m=(e._localRoot||this._root).uuid;delete p[m],u.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,c=a[i],u=t[t.length-1],h=e._cacheIndex;u._cacheIndex=h,t[h]=u,t.pop(),delete c[s],Object.keys(c).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new kp(new Float32Array(2),new Float32Array(2),1,vb),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?Ja.findByName(i,e):e;const c=a!==null?a.uuid:e,u=this._actionsByClip[c];let h=null;if(n===void 0&&(a!==null?n=a.blendMode:n=oh),u!==void 0){const p=u.actionByRoot[s];if(p!==void 0&&p.blendMode===n)return p;h=u.knownActions[0],a===null&&(a=h._clip)}if(a===null)return null;const f=new yy(this,a,t,n);return this._bindAction(f,h),this._addInactiveAction(f,c,s),f}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Ja.findByName(n,e):e,a=s?s.uuid:e,c=this._actionsByClip[a];return c!==void 0&&c.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,s,a);const c=this._bindings,u=this._nActiveBindings;for(let h=0;h!==u;++h)c[h].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let c=0,u=a.length;c!==u;++c){const h=a[c];this._deactivateAction(h);const f=h._cacheIndex,p=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,p._cacheIndex=f,t[f]=p,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const c=n[a].actionByRoot,u=c[t];u!==void 0&&(this._deactivateAction(u),this._removeInactiveAction(u))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const c=s[a];c.restoreOriginalState(),this._removeInactiveBinding(c)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class jp{constructor(e){this.value=e}clone(){return new jp(this.value.clone===void 0?this.value:this.value.clone())}}let yb=0;class xb extends qi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:yb++}),this.name="",this.usage=Ha,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<s.length;a++)this.uniforms.push(s[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class Ju extends fh{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Sb{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Q0=new rt;class xy{constructor(e,t,n=0,i=1/0){this.ray=new Ds(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new As,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Q0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Q0),this}intersectObject(e,t=!0,n=[]){return ep(e,this,n,t),n.sort($0),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ep(e[i],this,n,t);return n.sort($0),n}}function $0(r,e){return r.distance-e.distance}function ep(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,c=s.length;a<c;a++)ep(s[a],e,t,!0)}}class tp{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Mb{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class Jp{constructor(e,t,n,i){Jp.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}const ev=new le;class wb{constructor(e=new le(1/0,1/0),t=new le(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ev.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ev).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tv=new D,Zc=new D;class Sy{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){tv.subVectors(e,this.start),Zc.subVectors(this.end,this.start);const n=Zc.dot(Zc);let s=Zc.dot(tv)/n;return t&&(s=Kt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const nv=new D;class Eb extends It{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new St,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,c=1,u=32;a<u;a++,c++){const h=a/u*Math.PI*2,f=c/u*Math.PI*2;i.push(Math.cos(h),Math.sin(h),1,Math.cos(f),Math.sin(f),1)}n.setAttribute("position",new Ze(i,3));const s=new Vn({fog:!1,toneMapped:!1});this.cone=new Zi(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),nv.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(nv),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Fr=new D,jc=new rt,Ad=new rt;class Tb extends Zi{constructor(e){const t=My(e),n=new St,i=[],s=[],a=new ze(0,0,1),c=new ze(0,1,0);for(let h=0;h<t.length;h++){const f=t[h];f.parent&&f.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(a.r,a.g,a.b),s.push(c.r,c.g,c.b))}n.setAttribute("position",new Ze(i,3)),n.setAttribute("color",new Ze(s,3));const u=new Vn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,u),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Ad.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const c=t[s];c.parent&&c.parent.isBone&&(jc.multiplyMatrices(Ad,c.matrixWorld),Fr.setFromMatrixPosition(jc),i.setXYZ(a,Fr.x,Fr.y,Fr.z),jc.multiplyMatrices(Ad,c.parent.matrixWorld),Fr.setFromMatrixPosition(jc),i.setXYZ(a+1,Fr.x,Fr.y,Fr.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function My(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,My(r.children[t]));return e}class Ab extends nn{constructor(e,t,n){const i=new al(t,4,2),s=new Wr({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const bb=new D,iv=new ze,rv=new ze;class Cb extends It{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new ol(t);i.rotateY(Math.PI*.5),this.material=new Wr({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),a=new Float32Array(s.count*3);i.setAttribute("color",new zt(a,3)),this.add(new nn(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");iv.copy(this.light.color),rv.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?iv:rv;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(bb.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Rb extends Zi{constructor(e=10,t=10,n=4473924,i=8947848){n=new ze(n),i=new ze(i);const s=t/2,a=e/t,c=e/2,u=[],h=[];for(let m=0,g=0,y=-c;m<=t;m++,y+=a){u.push(-c,0,y,c,0,y),u.push(y,0,-c,y,0,c);const M=m===s?n:i;M.toArray(h,g),g+=3,M.toArray(h,g),g+=3,M.toArray(h,g),g+=3,M.toArray(h,g),g+=3}const f=new St;f.setAttribute("position",new Ze(u,3)),f.setAttribute("color",new Ze(h,3));const p=new Vn({vertexColors:!0,toneMapped:!1});super(f,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Pb extends Zi{constructor(e=10,t=16,n=8,i=64,s=4473924,a=8947848){s=new ze(s),a=new ze(a);const c=[],u=[];if(t>1)for(let p=0;p<t;p++){const m=p/t*(Math.PI*2),g=Math.sin(m)*e,y=Math.cos(m)*e;c.push(0,0,0),c.push(g,0,y);const M=p&1?s:a;u.push(M.r,M.g,M.b),u.push(M.r,M.g,M.b)}for(let p=0;p<n;p++){const m=p&1?s:a,g=e-e/n*p;for(let y=0;y<i;y++){let M=y/i*(Math.PI*2),x=Math.sin(M)*g,_=Math.cos(M)*g;c.push(x,0,_),u.push(m.r,m.g,m.b),M=(y+1)/i*(Math.PI*2),x=Math.sin(M)*g,_=Math.cos(M)*g,c.push(x,0,_),u.push(m.r,m.g,m.b)}}const h=new St;h.setAttribute("position",new Ze(c,3)),h.setAttribute("color",new Ze(u,3));const f=new Vn({vertexColors:!0,toneMapped:!1});super(h,f),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const sv=new D,Jc=new D,ov=new D;class Ib extends It{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new St;i.setAttribute("position",new Ze([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new Vn({fog:!1,toneMapped:!1});this.lightPlane=new Vr(i,s),this.add(this.lightPlane),i=new St,i.setAttribute("position",new Ze([0,0,0,0,0,1],3)),this.targetLine=new Vr(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),sv.setFromMatrixPosition(this.light.matrixWorld),Jc.setFromMatrixPosition(this.light.target.matrixWorld),ov.subVectors(Jc,sv),this.lightPlane.lookAt(Jc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Jc),this.targetLine.scale.z=ov.length()}}const Kc=new D,Jt=new nl;class Lb extends Zi{constructor(e){const t=new St,n=new Vn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],a={};c("n1","n2"),c("n2","n4"),c("n4","n3"),c("n3","n1"),c("f1","f2"),c("f2","f4"),c("f4","f3"),c("f3","f1"),c("n1","f1"),c("n2","f2"),c("n3","f3"),c("n4","f4"),c("p","n1"),c("p","n2"),c("p","n3"),c("p","n4"),c("u1","u2"),c("u2","u3"),c("u3","u1"),c("c","t"),c("p","c"),c("cn1","cn2"),c("cn3","cn4"),c("cf1","cf2"),c("cf3","cf4");function c(y,M){u(y),u(M)}function u(y){i.push(0,0,0),s.push(0,0,0),a[y]===void 0&&(a[y]=[]),a[y].push(i.length/3-1)}t.setAttribute("position",new Ze(i,3)),t.setAttribute("color",new Ze(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const h=new ze(16755200),f=new ze(16711680),p=new ze(43775),m=new ze(16777215),g=new ze(3355443);this.setColors(h,f,p,m,g)}setColors(e,t,n,i,s){const c=this.geometry.getAttribute("color");c.setXYZ(0,e.r,e.g,e.b),c.setXYZ(1,e.r,e.g,e.b),c.setXYZ(2,e.r,e.g,e.b),c.setXYZ(3,e.r,e.g,e.b),c.setXYZ(4,e.r,e.g,e.b),c.setXYZ(5,e.r,e.g,e.b),c.setXYZ(6,e.r,e.g,e.b),c.setXYZ(7,e.r,e.g,e.b),c.setXYZ(8,e.r,e.g,e.b),c.setXYZ(9,e.r,e.g,e.b),c.setXYZ(10,e.r,e.g,e.b),c.setXYZ(11,e.r,e.g,e.b),c.setXYZ(12,e.r,e.g,e.b),c.setXYZ(13,e.r,e.g,e.b),c.setXYZ(14,e.r,e.g,e.b),c.setXYZ(15,e.r,e.g,e.b),c.setXYZ(16,e.r,e.g,e.b),c.setXYZ(17,e.r,e.g,e.b),c.setXYZ(18,e.r,e.g,e.b),c.setXYZ(19,e.r,e.g,e.b),c.setXYZ(20,e.r,e.g,e.b),c.setXYZ(21,e.r,e.g,e.b),c.setXYZ(22,e.r,e.g,e.b),c.setXYZ(23,e.r,e.g,e.b),c.setXYZ(24,t.r,t.g,t.b),c.setXYZ(25,t.r,t.g,t.b),c.setXYZ(26,t.r,t.g,t.b),c.setXYZ(27,t.r,t.g,t.b),c.setXYZ(28,t.r,t.g,t.b),c.setXYZ(29,t.r,t.g,t.b),c.setXYZ(30,t.r,t.g,t.b),c.setXYZ(31,t.r,t.g,t.b),c.setXYZ(32,n.r,n.g,n.b),c.setXYZ(33,n.r,n.g,n.b),c.setXYZ(34,n.r,n.g,n.b),c.setXYZ(35,n.r,n.g,n.b),c.setXYZ(36,n.r,n.g,n.b),c.setXYZ(37,n.r,n.g,n.b),c.setXYZ(38,i.r,i.g,i.b),c.setXYZ(39,i.r,i.g,i.b),c.setXYZ(40,s.r,s.g,s.b),c.setXYZ(41,s.r,s.g,s.b),c.setXYZ(42,s.r,s.g,s.b),c.setXYZ(43,s.r,s.g,s.b),c.setXYZ(44,s.r,s.g,s.b),c.setXYZ(45,s.r,s.g,s.b),c.setXYZ(46,s.r,s.g,s.b),c.setXYZ(47,s.r,s.g,s.b),c.setXYZ(48,s.r,s.g,s.b),c.setXYZ(49,s.r,s.g,s.b),c.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;Jt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),en("c",t,e,Jt,0,0,-1),en("t",t,e,Jt,0,0,1),en("n1",t,e,Jt,-n,-i,-1),en("n2",t,e,Jt,n,-i,-1),en("n3",t,e,Jt,-n,i,-1),en("n4",t,e,Jt,n,i,-1),en("f1",t,e,Jt,-n,-i,1),en("f2",t,e,Jt,n,-i,1),en("f3",t,e,Jt,-n,i,1),en("f4",t,e,Jt,n,i,1),en("u1",t,e,Jt,n*.7,i*1.1,-1),en("u2",t,e,Jt,-n*.7,i*1.1,-1),en("u3",t,e,Jt,0,i*2,-1),en("cf1",t,e,Jt,-n,0,1),en("cf2",t,e,Jt,n,0,1),en("cf3",t,e,Jt,0,-i,1),en("cf4",t,e,Jt,0,i,1),en("cn1",t,e,Jt,-n,0,-1),en("cn2",t,e,Jt,n,0,-1),en("cn3",t,e,Jt,0,-i,-1),en("cn4",t,e,Jt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function en(r,e,t,n,i,s,a){Kc.set(i,s,a).unproject(n);const c=e[r];if(c!==void 0){const u=t.getAttribute("position");for(let h=0,f=c.length;h<f;h++)u.setXYZ(c[h],Kc.x,Kc.y,Kc.z)}}const Qc=new _n;class Db extends Zi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new St;s.setIndex(new zt(n,1)),s.setAttribute("position",new zt(i,3)),super(s,new Vn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Qc.setFromObject(this.object),Qc.isEmpty())return;const t=Qc.min,n=Qc.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ub extends Zi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new St;s.setIndex(new zt(n,1)),s.setAttribute("position",new Ze(i,3)),super(s,new Vn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Nb extends Vr{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new St;a.setAttribute("position",new Ze(s,3)),a.computeBoundingSphere(),super(a,new Vn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const c=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],u=new St;u.setAttribute("position",new Ze(c,3)),u.computeBoundingSphere(),this.add(new nn(u,new Wr({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const av=new D;let $c,bd;class Ob extends It{constructor(e=new D(0,0,1),t=new D(0,0,0),n=1,i=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",$c===void 0&&($c=new St,$c.setAttribute("position",new Ze([0,0,0,0,1,0],3)),bd=new zo(0,.5,1,5,1),bd.translate(0,-.5,0)),this.position.copy(t),this.line=new Vr($c,new Vn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new nn(bd,new Wr({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{av.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(av,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Fb extends Zi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new St;i.setAttribute("position",new Ze(t,3)),i.setAttribute("color",new Ze(n,3));const s=new Vn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new ze,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Bb{constructor(){this.type="ShapePath",this.color=new ze,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Wa,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,a){return this.currentPath.bezierCurveTo(e,t,n,i,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const E=[];for(let w=0,b=_.length;w<b;w++){const U=_[w],P=new bs;P.curves=U.curves,E.push(P)}return E}function n(_,E){const w=E.length;let b=!1;for(let U=w-1,P=0;P<w;U=P++){let L=E[U],F=E[P],G=F.x-L.x,A=F.y-L.y;if(Math.abs(A)>Number.EPSILON){if(A<0&&(L=E[P],G=-G,F=E[U],A=-A),_.y<L.y||_.y>F.y)continue;if(_.y===L.y){if(_.x===L.x)return!0}else{const C=A*(_.x-L.x)-G*(_.y-L.y);if(C===0)return!0;if(C<0)continue;b=!b}}else{if(_.y!==L.y)continue;if(F.x<=_.x&&_.x<=L.x||L.x<=_.x&&_.x<=F.x)return!0}}return b}const i=Yi.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,c,u;const h=[];if(s.length===1)return c=s[0],u=new bs,u.curves=c.curves,h.push(u),h;let f=!i(s[0].getPoints());f=e?!f:f;const p=[],m=[];let g=[],y=0,M;m[y]=void 0,g[y]=[];for(let _=0,E=s.length;_<E;_++)c=s[_],M=c.getPoints(),a=i(M),a=e?!a:a,a?(!f&&m[y]&&y++,m[y]={s:new bs,p:M},m[y].s.curves=c.curves,f&&y++,g[y]=[]):g[y].push({h:c,p:M[0]});if(!m[0])return t(s);if(m.length>1){let _=!1,E=0;for(let w=0,b=m.length;w<b;w++)p[w]=[];for(let w=0,b=m.length;w<b;w++){const U=g[w];for(let P=0;P<U.length;P++){const L=U[P];let F=!0;for(let G=0;G<m.length;G++)n(L.p,m[G].p)&&(w!==G&&E++,F?(F=!1,p[G].push(L)):_=!0);F&&p[w].push(L)}}E>0&&_===!1&&(g=p)}let x;for(let _=0,E=m.length;_<E;_++){u=m[_].s,h.push(u),x=g[_];for(let w=0,b=x.length;w<b;w++)u.holes.push(x[w].h)}return h}}class zb extends qi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class kb extends bi{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);const Hb=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:sp,AddEquation:zr,AddOperation:qv,AdditiveAnimationBlendMode:gp,AdditiveBlending:kd,AgXToneMapping:Qv,AlphaFormat:up,AlwaysCompare:d_,AlwaysDepth:du,AlwaysStencilFunc:Wd,AmbientLight:fy,AnimationAction:yy,AnimationClip:Ja,AnimationLoader:GA,AnimationMixer:_b,AnimationObjectGroup:gb,AnimationUtils:zA,ArcCurve:z_,ArrayCamera:R_,ArrowHelper:Ob,AttachedBindMode:Gd,Audio:vy,AudioAnalyser:ob,AudioContext:Xp,AudioListener:ib,AudioLoader:eb,AxesHelper:Fb,BackSide:Hn,BasicDepthPacking:r_,BasicShadowMap:bv,BatchedMesh:O_,Bone:Cp,BooleanKeyframeTrack:Ns,Box2:wb,Box3:_n,Box3Helper:Ub,BoxGeometry:Us,BoxHelper:Db,BufferAttribute:zt,BufferGeometry:St,BufferGeometryLoader:gy,ByteType:ap,Cache:dr,Camera:nl,CameraHelper:Lb,CanvasTexture:cA,CapsuleGeometry:gh,CatmullRomCurve3:k_,CineonToneMapping:Jv,CircleGeometry:vh,ClampToEdgeWrapping:gi,Clock:Yp,Color:ze,ColorKeyframeTrack:Hp,ColorManagement:Ot,CompressedArrayTexture:aA,CompressedCubeTexture:lA,CompressedTexture:ph,CompressedTextureLoader:WA,ConeGeometry:_h,ConstantAlphaFactor:Wv,ConstantColorFactor:Vv,Controls:zb,CubeCamera:S_,CubeReflectionMapping:gr,CubeRefractionMapping:Hr,CubeTexture:il,CubeTextureLoader:XA,CubeUVReflectionMapping:No,CubicBezierCurve:Ip,CubicBezierCurve3:H_,CubicInterpolant:ry,CullFaceBack:zd,CullFaceFront:Av,CullFaceFrontBack:Ox,CullFaceNone:Tv,Curve:Ci,CurvePath:G_,CustomBlending:Cv,CustomToneMapping:Kv,CylinderGeometry:zo,Cylindrical:Mb,Data3DTexture:yp,DataArrayTexture:lh,DataTexture:Xi,DataTextureLoader:YA,DataUtils:JS,DecrementStencilOp:Jx,DecrementWrapStencilOp:Qx,DefaultLoadingManager:ay,DepthFormat:Es,DepthStencilFormat:Is,DepthTexture:wp,DetachedBindMode:e_,DirectionalLight:hy,DirectionalLightHelper:Ib,DiscreteInterpolant:sy,DisplayP3ColorSpace:ah,DodecahedronGeometry:yh,DoubleSide:ki,DstAlphaFactor:Fv,DstColorFactor:zv,DynamicCopyUsage:dS,DynamicDrawUsage:aS,DynamicReadUsage:uS,EdgesGeometry:Op,EllipseCurve:mh,EqualCompare:c_,EqualDepth:mu,EqualStencilFunc:nS,EquirectangularReflectionMapping:La,EquirectangularRefractionMapping:Da,Euler:si,EventDispatcher:qi,ExtrudeGeometry:Sh,FileLoader:_r,Float16BufferAttribute:nM,Float32BufferAttribute:Ze,FloatType:Zn,Fog:hh,FogExp2:uh,FramebufferTexture:oA,FrontSide:mr,Frustum:rl,GLBufferAttribute:Sb,GLSL1:mS,GLSL3:Xd,GreaterCompare:u_,GreaterDepth:vu,GreaterEqualCompare:f_,GreaterEqualDepth:gu,GreaterEqualStencilFunc:oS,GreaterStencilFunc:rS,GridHelper:Rb,Group:To,HalfFloatType:Oo,HemisphereLight:ly,HemisphereLightHelper:Cb,IcosahedronGeometry:Mh,ImageBitmapLoader:$A,ImageLoader:Ka,ImageUtils:v_,IncrementStencilOp:jx,IncrementWrapStencilOp:Kx,InstancedBufferAttribute:Lo,InstancedBufferGeometry:Wp,InstancedInterleavedBuffer:Ju,InstancedMesh:N_,Int16BufferAttribute:eM,Int32BufferAttribute:tM,Int8BufferAttribute:KS,IntType:eh,InterleavedBuffer:fh,InterleavedBufferAttribute:ii,Interpolant:ll,InterpolateDiscrete:Oa,InterpolateLinear:Xu,InterpolateSmooth:ou,InvertStencilOp:$x,KeepStencilOp:gs,KeyframeTrack:Ri,LOD:D_,LatheGeometry:sl,Layers:As,LessCompare:l_,LessDepth:pu,LessEqualCompare:vp,LessEqualDepth:Rs,LessEqualStencilFunc:iS,LessStencilFunc:tS,Light:Yr,LightProbe:my,Line:Vr,Line3:Sy,LineBasicMaterial:Vn,LineCurve:Lp,LineCurve3:V_,LineDashedMaterial:ty,LineLoop:F_,LineSegments:Zi,LinearDisplayP3ColorSpace:tl,LinearFilter:an,LinearInterpolant:kp,LinearMipMapLinearFilter:kx,LinearMipMapNearestFilter:zx,LinearMipmapLinearFilter:Vi,LinearMipmapNearestFilter:wa,LinearSRGBColorSpace:yr,LinearToneMapping:Zv,LinearTransfer:Ba,Loader:jn,LoaderUtils:$d,LoadingManager:Vp,LoopOnce:t_,LoopPingPong:i_,LoopRepeat:n_,LuminanceAlphaFormat:dp,LuminanceFormat:fp,MOUSE:ps,Material:Dn,MaterialLoader:Rh,MathUtils:p_,Matrix2:Jp,Matrix3:pt,Matrix4:rt,MaxEquation:Lv,Mesh:nn,MeshBasicMaterial:Wr,MeshDepthMaterial:Ep,MeshDistanceMaterial:Tp,MeshLambertMaterial:$_,MeshMatcapMaterial:ey,MeshNormalMaterial:Q_,MeshPhongMaterial:J_,MeshPhysicalMaterial:j_,MeshStandardMaterial:Bp,MeshToonMaterial:K_,MinEquation:Iv,MirroredRepeatWrapping:Na,MixOperation:Yv,MultiplyBlending:Vd,MultiplyOperation:$a,NearestFilter:vn,NearestMipMapLinearFilter:Bx,NearestMipMapNearestFilter:Fx,NearestMipmapLinearFilter:Mo,NearestMipmapNearestFilter:op,NeutralToneMapping:$v,NeverCompare:a_,NeverDepth:fu,NeverStencilFunc:eS,NoBlending:pr,NoColorSpace:hr,NoToneMapping:Wi,NormalAnimationBlendMode:oh,NormalBlending:ws,NotEqualCompare:h_,NotEqualDepth:_u,NotEqualStencilFunc:sS,NumberKeyframeTrack:Za,Object3D:It,ObjectLoader:KA,ObjectSpaceNormalMap:o_,OctahedronGeometry:ol,OneFactor:Uv,OneMinusConstantAlphaFactor:Xv,OneMinusConstantColorFactor:Gv,OneMinusDstAlphaFactor:Bv,OneMinusDstColorFactor:kv,OneMinusSrcAlphaFactor:hu,OneMinusSrcColorFactor:Ov,OrthographicCamera:kr,P3Primaries:ka,PCFShadowMap:Qu,PCFSoftShadowMap:Ma,PMREMGenerator:Yd,Path:Wa,PerspectiveCamera:tn,Plane:ur,PlaneGeometry:Fo,PlaneHelper:Nb,PointLight:uy,PointLightHelper:Ab,Points:B_,PointsMaterial:Rp,PolarGridHelper:Pb,PolyhedronGeometry:Xr,PositionalAudio:sb,PropertyBinding:Pt,PropertyMixer:_y,QuadraticBezierCurve:Dp,QuadraticBezierCurve3:Up,Quaternion:Ln,QuaternionKeyframeTrack:cl,QuaternionLinearInterpolant:oy,RED_GREEN_RGTC2_Format:Gu,RED_RGTC1_Format:mp,REVISION:Qa,RGBADepthPacking:s_,RGBAFormat:In,RGBAIntegerFormat:sh,RGBA_ASTC_10x10_Format:Fu,RGBA_ASTC_10x5_Format:Uu,RGBA_ASTC_10x6_Format:Nu,RGBA_ASTC_10x8_Format:Ou,RGBA_ASTC_12x10_Format:Bu,RGBA_ASTC_12x12_Format:zu,RGBA_ASTC_4x4_Format:Au,RGBA_ASTC_5x4_Format:bu,RGBA_ASTC_5x5_Format:Cu,RGBA_ASTC_6x5_Format:Ru,RGBA_ASTC_6x6_Format:Pu,RGBA_ASTC_8x5_Format:Iu,RGBA_ASTC_8x6_Format:Lu,RGBA_ASTC_8x8_Format:Du,RGBA_BPTC_Format:Ca,RGBA_ETC2_EAC_Format:Tu,RGBA_PVRTC_2BPPV1_Format:Mu,RGBA_PVRTC_4BPPV1_Format:Su,RGBA_S3TC_DXT1_Format:Ta,RGBA_S3TC_DXT3_Format:Aa,RGBA_S3TC_DXT5_Format:ba,RGBDepthPacking:Xx,RGBFormat:hp,RGBIntegerFormat:Hx,RGB_BPTC_SIGNED_Format:ku,RGB_BPTC_UNSIGNED_Format:Hu,RGB_ETC1_Format:wu,RGB_ETC2_Format:Eu,RGB_PVRTC_2BPPV1_Format:xu,RGB_PVRTC_4BPPV1_Format:yu,RGB_S3TC_DXT1_Format:Ea,RGDepthPacking:Yx,RGFormat:pp,RGIntegerFormat:rh,RawShaderMaterial:Z_,Ray:Ds,Raycaster:xy,Rec709Primaries:za,RectAreaLight:dy,RedFormat:ih,RedIntegerFormat:el,ReinhardToneMapping:jv,RenderTarget:__,RepeatWrapping:Ua,ReplaceStencilOp:Zx,ReverseSubtractEquation:Pv,RingGeometry:wh,SIGNED_RED_GREEN_RGTC2_Format:Wu,SIGNED_RED_RGTC1_Format:Vu,SRGBColorSpace:mi,SRGBTransfer:Vt,Scene:Ap,ShaderChunk:gt,ShaderLib:Ti,ShaderMaterial:vi,ShadowMaterial:q_,Shape:bs,ShapeGeometry:Eh,ShapePath:Bb,ShapeUtils:Yi,ShortType:lp,Skeleton:dh,SkeletonHelper:Tb,SkinnedMesh:U_,Source:Ss,Sphere:yn,SphereGeometry:al,Spherical:tp,SphericalHarmonics3:py,SplineCurve:Np,SpotLight:cy,SpotLightHelper:Eb,Sprite:L_,SpriteMaterial:bp,SrcAlphaFactor:uu,SrcAlphaSaturateFactor:Hv,SrcColorFactor:Nv,StaticCopyUsage:fS,StaticDrawUsage:Ha,StaticReadUsage:cS,StereoCamera:tb,StreamCopyUsage:pS,StreamDrawUsage:lS,StreamReadUsage:hS,StringKeyframeTrack:Os,SubtractEquation:Rv,SubtractiveBlending:Hd,TOUCH:ms,TangentSpaceNormalMap:Gr,TetrahedronGeometry:Th,Texture:Qt,TextureLoader:qA,TextureUtils:zT,TorusGeometry:Ah,TorusKnotGeometry:bh,Triangle:qn,TriangleFanDrawMode:Wx,TriangleStripDrawMode:Gx,TrianglesDrawMode:Vx,TubeGeometry:Ch,UVMapping:$u,Uint16BufferAttribute:xp,Uint32BufferAttribute:Sp,Uint8BufferAttribute:QS,Uint8ClampedBufferAttribute:$S,Uniform:jp,UniformsGroup:xb,UniformsLib:Re,UniformsUtils:Yu,UnsignedByteType:Ai,UnsignedInt248Type:Ps,UnsignedInt5999Type:cp,UnsignedIntType:vr,UnsignedShort4444Type:th,UnsignedShort5551Type:nh,UnsignedShortType:Ro,VSMShadowMap:Ei,Vector2:le,Vector3:D,Vector4:Tt,VectorKeyframeTrack:ja,VideoTexture:sA,WebGL3DRenderTarget:kS,WebGLArrayRenderTarget:zS,WebGLCoordinateSystem:Gi,WebGLCubeRenderTarget:M_,WebGLMultipleRenderTargets:kb,WebGLRenderTarget:bi,WebGLRenderer:P_,WebGLUtils:C_,WebGPUCoordinateSystem:Va,WireframeGeometry:Fp,WrapAroundEnding:Fa,ZeroCurvatureEnding:ys,ZeroFactor:Dv,ZeroSlopeEnding:xs,ZeroStencilOp:qx,createCanvasElement:g_},Symbol.toStringTag,{value:"Module"}));var wy={exports:{}},Fs={};/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Fs.ConcurrentRoot=1;Fs.ContinuousEventPriority=4;Fs.DefaultEventPriority=16;Fs.DiscreteEventPriority=1;Fs.IdleEventPriority=536870912;Fs.LegacyRoot=0;wy.exports=Fs;var bo=wy.exports;function Vb(r){let e;const t=new Set,n=(h,f)=>{const p=typeof h=="function"?h(e):h;if(p!==e){const m=e;e=f?p:Object.assign({},e,p),t.forEach(g=>g(e,m))}},i=()=>e,s=(h,f=i,p=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let m=f(e);function g(){const y=f(e);if(!p(m,y)){const M=m;h(m=y,M)}}return t.add(g),()=>t.delete(g)},u={setState:n,getState:i,subscribe:(h,f,p)=>f||p?s(h,f,p):(t.add(h),()=>t.delete(h)),destroy:()=>t.clear()};return e=r(n,i,u),u}const Gb=typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),lv=Gb?Ye.useEffect:Ye.useLayoutEffect;function Wb(r){const e=typeof r=="function"?Vb(r):r,t=(n=e.getState,i=Object.is)=>{const[,s]=Ye.useReducer(x=>x+1,0),a=e.getState(),c=Ye.useRef(a),u=Ye.useRef(n),h=Ye.useRef(i),f=Ye.useRef(!1),p=Ye.useRef();p.current===void 0&&(p.current=n(a));let m,g=!1;(c.current!==a||u.current!==n||h.current!==i||f.current)&&(m=n(a),g=!i(p.current,m)),lv(()=>{g&&(p.current=m),c.current=a,u.current=n,h.current=i,f.current=!1});const y=Ye.useRef(a);lv(()=>{const x=()=>{try{const E=e.getState(),w=u.current(E);h.current(p.current,w)||(c.current=E,p.current=w,s())}catch{f.current=!0,s()}},_=e.subscribe(x);return e.getState()!==y.current&&x(),_},[]);const M=g?m:p.current;return Ye.useDebugValue(M),M};return Object.assign(t,e),t[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const n=[t,e];return{next(){const i=n.length<=0;return{value:n.shift(),done:i}}}},t}var Ey={exports:{}},Ty={exports:{}},Ay={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(r){function e(H,oe){var ie=H.length;H.push(oe);e:for(;0<ie;){var ue=ie-1>>>1,Fe=H[ue];if(0<i(Fe,oe))H[ue]=oe,H[ie]=Fe,ie=ue;else break e}}function t(H){return H.length===0?null:H[0]}function n(H){if(H.length===0)return null;var oe=H[0],ie=H.pop();if(ie!==oe){H[0]=ie;e:for(var ue=0,Fe=H.length,He=Fe>>>1;ue<He;){var re=2*(ue+1)-1,ge=H[re],Pe=re+1,we=H[Pe];if(0>i(ge,ie))Pe<Fe&&0>i(we,ge)?(H[ue]=we,H[Pe]=ie,ue=Pe):(H[ue]=ge,H[re]=ie,ue=re);else if(Pe<Fe&&0>i(we,ie))H[ue]=we,H[Pe]=ie,ue=Pe;else break e}}return oe}function i(H,oe){var ie=H.sortIndex-oe.sortIndex;return ie!==0?ie:H.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;r.unstable_now=function(){return s.now()}}else{var a=Date,c=a.now();r.unstable_now=function(){return a.now()-c}}var u=[],h=[],f=1,p=null,m=3,g=!1,y=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(H){for(var oe=t(h);oe!==null;){if(oe.callback===null)n(h);else if(oe.startTime<=H)n(h),oe.sortIndex=oe.expirationTime,e(u,oe);else break;oe=t(h)}}function b(H){if(M=!1,w(H),!y)if(t(u)!==null)y=!0,j(U);else{var oe=t(h);oe!==null&&ve(b,oe.startTime-H)}}function U(H,oe){y=!1,M&&(M=!1,_(F),F=-1),g=!0;var ie=m;try{for(w(oe),p=t(u);p!==null&&(!(p.expirationTime>oe)||H&&!C());){var ue=p.callback;if(typeof ue=="function"){p.callback=null,m=p.priorityLevel;var Fe=ue(p.expirationTime<=oe);oe=r.unstable_now(),typeof Fe=="function"?p.callback=Fe:p===t(u)&&n(u),w(oe)}else n(u);p=t(u)}if(p!==null)var He=!0;else{var re=t(h);re!==null&&ve(b,re.startTime-oe),He=!1}return He}finally{p=null,m=ie,g=!1}}var P=!1,L=null,F=-1,G=5,A=-1;function C(){return!(r.unstable_now()-A<G)}function Y(){if(L!==null){var H=r.unstable_now();A=H;var oe=!0;try{oe=L(!0,H)}finally{oe?Z():(P=!1,L=null)}}else P=!1}var Z;if(typeof E=="function")Z=function(){E(Y)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ce=K.port2;K.port1.onmessage=Y,Z=function(){ce.postMessage(null)}}else Z=function(){x(Y,0)};function j(H){L=H,P||(P=!0,Z())}function ve(H,oe){F=x(function(){H(r.unstable_now())},oe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_continueExecution=function(){y||g||(y=!0,j(U))},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(u)},r.unstable_next=function(H){switch(m){case 1:case 2:case 3:var oe=3;break;default:oe=m}var ie=m;m=oe;try{return H()}finally{m=ie}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(H,oe){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ie=m;m=H;try{return oe()}finally{m=ie}},r.unstable_scheduleCallback=function(H,oe,ie){var ue=r.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?ue+ie:ue):ie=ue,H){case 1:var Fe=-1;break;case 2:Fe=250;break;case 5:Fe=1073741823;break;case 4:Fe=1e4;break;default:Fe=5e3}return Fe=ie+Fe,H={id:f++,callback:oe,priorityLevel:H,startTime:ie,expirationTime:Fe,sortIndex:-1},ie>ue?(H.sortIndex=ie,e(h,H),t(u)===null&&H===t(h)&&(M?(_(F),F=-1):M=!0,ve(b,ie-ue))):(H.sortIndex=Fe,e(u,H),y||g||(y=!0,j(U))),H},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(H){var oe=m;return function(){var ie=m;m=oe;try{return H.apply(this,arguments)}finally{m=ie}}}})(Ay);Ty.exports=Ay;var np=Ty.exports;/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xb=function(e){var t={},n=Ye,i=np,s=Object.assign;function a(o){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+o,d=1;d<arguments.length;d++)l+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+o+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,u=Symbol.for("react.element"),h=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),y=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen"),U=Symbol.iterator;function P(o){return o===null||typeof o!="object"?null:(o=U&&o[U]||o["@@iterator"],typeof o=="function"?o:null)}function L(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case f:return"Fragment";case h:return"Portal";case m:return"Profiler";case p:return"StrictMode";case x:return"Suspense";case _:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case y:return(o.displayName||"Context")+".Consumer";case g:return(o._context.displayName||"Context")+".Provider";case M:var l=o.render;return o=o.displayName,o||(o=l.displayName||l.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case E:return l=o.displayName||null,l!==null?l:L(o.type)||"Memo";case w:l=o._payload,o=o._init;try{return L(o(l))}catch{}}return null}function F(o){var l=o.type;switch(o.tag){case 24:return"Cache";case 9:return(l.displayName||"Context")+".Consumer";case 10:return(l._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=l.render,o=o.displayName||o.name||"",l.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return l;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return L(l);case 8:return l===p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l}return null}function G(o){var l=o,d=o;if(o.alternate)for(;l.return;)l=l.return;else{o=l;do l=o,l.flags&4098&&(d=l.return),o=l.return;while(o)}return l.tag===3?d:null}function A(o){if(G(o)!==o)throw Error(a(188))}function C(o){var l=o.alternate;if(!l){if(l=G(o),l===null)throw Error(a(188));return l!==o?null:o}for(var d=o,v=l;;){var S=d.return;if(S===null)break;var T=S.alternate;if(T===null){if(v=S.return,v!==null){d=v;continue}break}if(S.child===T.child){for(T=S.child;T;){if(T===d)return A(S),o;if(T===v)return A(S),l;T=T.sibling}throw Error(a(188))}if(d.return!==v.return)d=S,v=T;else{for(var B=!1,V=S.child;V;){if(V===d){B=!0,d=S,v=T;break}if(V===v){B=!0,v=S,d=T;break}V=V.sibling}if(!B){for(V=T.child;V;){if(V===d){B=!0,d=T,v=S;break}if(V===v){B=!0,v=T,d=S;break}V=V.sibling}if(!B)throw Error(a(189))}}if(d.alternate!==v)throw Error(a(190))}if(d.tag!==3)throw Error(a(188));return d.stateNode.current===d?o:l}function Y(o){return o=C(o),o!==null?Z(o):null}function Z(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var l=Z(o);if(l!==null)return l;o=o.sibling}return null}function K(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){if(o.tag!==4){var l=K(o);if(l!==null)return l}o=o.sibling}return null}var ce=Array.isArray,j=e.getPublicInstance,ve=e.getRootHostContext,H=e.getChildHostContext,oe=e.prepareForCommit,ie=e.resetAfterCommit,ue=e.createInstance,Fe=e.appendInitialChild,He=e.finalizeInitialChildren,re=e.prepareUpdate,ge=e.shouldSetTextContent,Pe=e.createTextInstance,we=e.scheduleTimeout,st=e.cancelTimeout,et=e.noTimeout,at=e.isPrimaryRenderer,tt=e.supportsMutation,pe=e.supportsPersistence,O=e.supportsHydration,Te=e.getInstanceFromNode,Ee=e.preparePortalMount,ye=e.getCurrentEventPriority,Ae=e.detachDeletedInstance,je=e.supportsMicrotasks,Le=e.scheduleMicrotask,N=e.supportsTestSelectors,R=e.findFiberRoot,J=e.getBoundingRect,ae=e.getTextContent,fe=e.isHiddenSubtree,he=e.matchAccessibilityRole,qe=e.setFocusIfFocusable,be=e.setupIntersectionObserver,De=e.appendChild,At=e.appendChildToContainer,xe=e.commitTextUpdate,Ne=e.commitMount,ct=e.commitUpdate,ut=e.insertBefore,ke=e.insertInContainerBefore,_t=e.removeChild,k=e.removeChildFromContainer,me=e.resetTextContent,z=e.hideInstance,_e=e.hideTextInstance,$=e.unhideInstance,de=e.unhideTextInstance,Ce=e.clearContainer,Be=e.cloneInstance,Mt=e.createContainerChildSet,Ct=e.appendChildToContainerChildSet,Ht=e.finalizeContainerChildren,yt=e.replaceContainerChildren,Yt=e.cloneHiddenInstance,fn=e.cloneHiddenTextInstance,ji=e.canHydrateInstance,hl=e.canHydrateTextInstance,Ji=e.canHydrateSuspenseInstance,Bs=e.isSuspenseInstancePending,zs=e.isSuspenseInstanceFallback,fl=e.registerSuspenseInstanceRetry,Pi=e.getNextHydratableSibling,dl=e.getFirstHydratableChild,ks=e.getFirstHydratableChildWithinContainer,pl=e.getFirstHydratableChildWithinSuspenseInstance,ml=e.hydrateInstance,Ph=e.hydrateTextInstance,Ih=e.hydrateSuspenseInstance,Lh=e.getNextHydratableInstanceAfterSuspenseInstance,I=e.commitHydratedContainer,W=e.commitHydratedSuspenseInstance,ee=e.clearSuspenseBoundary,te=e.clearSuspenseBoundaryFromContainer,q=e.shouldDeleteUnhydratedTailInstances,Me=e.didNotMatchHydratedContainerTextInstance,Oe=e.didNotMatchHydratedTextInstance,Ve;function Ge(o){if(Ve===void 0)try{throw Error()}catch(d){var l=d.stack.trim().match(/\n( *(at )?)/);Ve=l&&l[1]||""}return`
`+Ve+o}var ot=!1;function lt(o,l){if(!o||ot)return"";ot=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(l)if(l=function(){throw Error()},Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(Se){var v=Se}Reflect.construct(o,[],l)}else{try{l.call()}catch(Se){v=Se}o.call(l.prototype)}else{try{throw Error()}catch(Se){v=Se}o()}}catch(Se){if(Se&&v&&typeof Se.stack=="string"){for(var S=Se.stack.split(`
`),T=v.stack.split(`
`),B=S.length-1,V=T.length-1;1<=B&&0<=V&&S[B]!==T[V];)V--;for(;1<=B&&0<=V;B--,V--)if(S[B]!==T[V]){if(B!==1||V!==1)do if(B--,V--,0>V||S[B]!==T[V]){var se=`
`+S[B].replace(" at new "," at ");return o.displayName&&se.includes("<anonymous>")&&(se=se.replace("<anonymous>",o.displayName)),se}while(1<=B&&0<=V);break}}}finally{ot=!1,Error.prepareStackTrace=d}return(o=o?o.displayName||o.name:"")?Ge(o):""}var Je=Object.prototype.hasOwnProperty,Rt=[],Lt=-1;function Ft(o){return{current:o}}function wt(o){0>Lt||(o.current=Rt[Lt],Rt[Lt]=null,Lt--)}function Qe(o,l){Lt++,Rt[Lt]=o.current,o.current=l}var Xe={},bt=Ft(Xe),ht=Ft(!1),ln=Xe;function Jn(o,l){var d=o.type.contextTypes;if(!d)return Xe;var v=o.stateNode;if(v&&v.__reactInternalMemoizedUnmaskedChildContext===l)return v.__reactInternalMemoizedMaskedChildContext;var S={},T;for(T in d)S[T]=l[T];return v&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=l,o.__reactInternalMemoizedMaskedChildContext=S),S}function Bt(o){return o=o.childContextTypes,o!=null}function xr(){wt(ht),wt(bt)}function Wt(o,l,d){if(bt.current!==Xe)throw Error(a(168));Qe(bt,l),Qe(ht,d)}function _i(o,l,d){var v=o.stateNode;if(l=l.childContextTypes,typeof v.getChildContext!="function")return d;v=v.getChildContext();for(var S in v)if(!(S in l))throw Error(a(108,F(o)||"Unknown",S));return s({},d,v)}function Sr(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||Xe,ln=bt.current,Qe(bt,o),Qe(ht,ht.current),!0}function Un(o,l,d){var v=o.stateNode;if(!v)throw Error(a(169));d?(o=_i(o,l,ln),v.__reactInternalMemoizedMergedChildContext=o,wt(ht),wt(bt),Qe(bt,o)):wt(ht),Qe(ht,d)}var Nn=Math.clz32?Math.clz32:Wy,Dh=Math.log,gl=Math.LN2;function Wy(o){return o>>>=0,o===0?32:31-(Dh(o)/gl|0)|0}var vl=64,_l=4194304;function ko(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function yl(o,l){var d=o.pendingLanes;if(d===0)return 0;var v=0,S=o.suspendedLanes,T=o.pingedLanes,B=d&268435455;if(B!==0){var V=B&~S;V!==0?v=ko(V):(T&=B,T!==0&&(v=ko(T)))}else B=d&~S,B!==0?v=ko(B):T!==0&&(v=ko(T));if(v===0)return 0;if(l!==0&&l!==v&&!(l&S)&&(S=v&-v,T=l&-l,S>=T||S===16&&(T&4194240)!==0))return l;if(v&4&&(v|=d&16),l=o.entangledLanes,l!==0)for(o=o.entanglements,l&=v;0<l;)d=31-Nn(l),S=1<<d,v|=o[d],l&=~S;return v}function Xy(o,l){switch(o){case 1:case 2:case 4:return l+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yy(o,l){for(var d=o.suspendedLanes,v=o.pingedLanes,S=o.expirationTimes,T=o.pendingLanes;0<T;){var B=31-Nn(T),V=1<<B,se=S[B];se===-1?(!(V&d)||V&v)&&(S[B]=Xy(V,l)):se<=l&&(o.expiredLanes|=V),T&=~V}}function Uh(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function Nh(o){for(var l=[],d=0;31>d;d++)l.push(o);return l}function Ho(o,l,d){o.pendingLanes|=l,l!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,l=31-Nn(l),o[l]=d}function qy(o,l){var d=o.pendingLanes&~l;o.pendingLanes=l,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=l,o.mutableReadLanes&=l,o.entangledLanes&=l,l=o.entanglements;var v=o.eventTimes;for(o=o.expirationTimes;0<d;){var S=31-Nn(d),T=1<<S;l[S]=0,v[S]=-1,o[S]=-1,d&=~T}}function Oh(o,l){var d=o.entangledLanes|=l;for(o=o.entanglements;d;){var v=31-Nn(d),S=1<<v;S&l|o[v]&l&&(o[v]|=l),d&=~S}}var Dt=0;function em(o){return o&=-o,1<o?4<o?o&268435455?16:536870912:4:1}var Fh=i.unstable_scheduleCallback,tm=i.unstable_cancelCallback,Zy=i.unstable_shouldYield,jy=i.unstable_requestPaint,dn=i.unstable_now,Bh=i.unstable_ImmediatePriority,Jy=i.unstable_UserBlockingPriority,zh=i.unstable_NormalPriority,Ky=i.unstable_IdlePriority,xl=null,Ii=null;function Qy(o){if(Ii&&typeof Ii.onCommitFiberRoot=="function")try{Ii.onCommitFiberRoot(xl,o,void 0,(o.current.flags&128)===128)}catch{}}function $y(o,l){return o===l&&(o!==0||1/o===1/l)||o!==o&&l!==l}var Li=typeof Object.is=="function"?Object.is:$y,Ki=null,Sl=!1,kh=!1;function nm(o){Ki===null?Ki=[o]:Ki.push(o)}function ex(o){Sl=!0,nm(o)}function Di(){if(!kh&&Ki!==null){kh=!0;var o=0,l=Dt;try{var d=Ki;for(Dt=1;o<d.length;o++){var v=d[o];do v=v(!0);while(v!==null)}Ki=null,Sl=!1}catch(S){throw Ki!==null&&(Ki=Ki.slice(o+1)),Fh(Bh,Di),S}finally{Dt=l,kh=!1}}return null}var tx=c.ReactCurrentBatchConfig;function Ml(o,l){if(Li(o,l))return!0;if(typeof o!="object"||o===null||typeof l!="object"||l===null)return!1;var d=Object.keys(o),v=Object.keys(l);if(d.length!==v.length)return!1;for(v=0;v<d.length;v++){var S=d[v];if(!Je.call(l,S)||!Li(o[S],l[S]))return!1}return!0}function nx(o){switch(o.tag){case 5:return Ge(o.type);case 16:return Ge("Lazy");case 13:return Ge("Suspense");case 19:return Ge("SuspenseList");case 0:case 2:case 15:return o=lt(o.type,!1),o;case 11:return o=lt(o.type.render,!1),o;case 1:return o=lt(o.type,!0),o;default:return""}}function yi(o,l){if(o&&o.defaultProps){l=s({},l),o=o.defaultProps;for(var d in o)l[d]===void 0&&(l[d]=o[d]);return l}return l}var wl=Ft(null),El=null,Hs=null,Hh=null;function Vh(){Hh=Hs=El=null}function im(o,l,d){at?(Qe(wl,l._currentValue),l._currentValue=d):(Qe(wl,l._currentValue2),l._currentValue2=d)}function Gh(o){var l=wl.current;wt(wl),at?o._currentValue=l:o._currentValue2=l}function Wh(o,l,d){for(;o!==null;){var v=o.alternate;if((o.childLanes&l)!==l?(o.childLanes|=l,v!==null&&(v.childLanes|=l)):v!==null&&(v.childLanes&l)!==l&&(v.childLanes|=l),o===d)break;o=o.return}}function Vs(o,l){El=o,Hh=Hs=null,o=o.dependencies,o!==null&&o.firstContext!==null&&(o.lanes&l&&($n=!0),o.firstContext=null)}function oi(o){var l=at?o._currentValue:o._currentValue2;if(Hh!==o)if(o={context:o,memoizedValue:l,next:null},Hs===null){if(El===null)throw Error(a(308));Hs=o,El.dependencies={lanes:0,firstContext:o}}else Hs=Hs.next=o;return l}var Ui=null,Mr=!1;function Xh(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rm(o,l){o=o.updateQueue,l.updateQueue===o&&(l.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function Qi(o,l){return{eventTime:o,lane:l,tag:0,payload:null,callback:null,next:null}}function wr(o,l){var d=o.updateQueue;d!==null&&(d=d.shared,rn!==null&&o.mode&1&&!(Et&2)?(o=d.interleaved,o===null?(l.next=l,Ui===null?Ui=[d]:Ui.push(d)):(l.next=o.next,o.next=l),d.interleaved=l):(o=d.pending,o===null?l.next=l:(l.next=o.next,o.next=l),d.pending=l))}function Tl(o,l,d){if(l=l.updateQueue,l!==null&&(l=l.shared,(d&4194240)!==0)){var v=l.lanes;v&=o.pendingLanes,d|=v,l.lanes=d,Oh(o,d)}}function sm(o,l){var d=o.updateQueue,v=o.alternate;if(v!==null&&(v=v.updateQueue,d===v)){var S=null,T=null;if(d=d.firstBaseUpdate,d!==null){do{var B={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};T===null?S=T=B:T=T.next=B,d=d.next}while(d!==null);T===null?S=T=l:T=T.next=l}else S=T=l;d={baseState:v.baseState,firstBaseUpdate:S,lastBaseUpdate:T,shared:v.shared,effects:v.effects},o.updateQueue=d;return}o=d.lastBaseUpdate,o===null?d.firstBaseUpdate=l:o.next=l,d.lastBaseUpdate=l}function Al(o,l,d,v){var S=o.updateQueue;Mr=!1;var T=S.firstBaseUpdate,B=S.lastBaseUpdate,V=S.shared.pending;if(V!==null){S.shared.pending=null;var se=V,Se=se.next;se.next=null,B===null?T=Se:B.next=Se,B=se;var We=o.alternate;We!==null&&(We=We.updateQueue,V=We.lastBaseUpdate,V!==B&&(V===null?We.firstBaseUpdate=Se:V.next=Se,We.lastBaseUpdate=se))}if(T!==null){var ft=S.baseState;B=0,We=Se=se=null,V=T;do{var nt=V.lane,kt=V.eventTime;if((v&nt)===nt){We!==null&&(We=We.next={eventTime:kt,lane:0,tag:V.tag,payload:V.payload,callback:V.callback,next:null});e:{var $e=o,bn=V;switch(nt=l,kt=d,bn.tag){case 1:if($e=bn.payload,typeof $e=="function"){ft=$e.call(kt,ft,nt);break e}ft=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=bn.payload,nt=typeof $e=="function"?$e.call(kt,ft,nt):$e,nt==null)break e;ft=s({},ft,nt);break e;case 2:Mr=!0}}V.callback!==null&&V.lane!==0&&(o.flags|=64,nt=S.effects,nt===null?S.effects=[V]:nt.push(V))}else kt={eventTime:kt,lane:nt,tag:V.tag,payload:V.payload,callback:V.callback,next:null},We===null?(Se=We=kt,se=ft):We=We.next=kt,B|=nt;if(V=V.next,V===null){if(V=S.shared.pending,V===null)break;nt=V,V=nt.next,nt.next=null,S.lastBaseUpdate=nt,S.shared.pending=null}}while(!0);if(We===null&&(se=ft),S.baseState=se,S.firstBaseUpdate=Se,S.lastBaseUpdate=We,l=S.shared.interleaved,l!==null){S=l;do B|=S.lane,S=S.next;while(S!==l)}else T===null&&(S.shared.lanes=0);Ks|=B,o.lanes=B,o.memoizedState=ft}}function om(o,l,d){if(o=l.effects,l.effects=null,o!==null)for(l=0;l<o.length;l++){var v=o[l],S=v.callback;if(S!==null){if(v.callback=null,v=d,typeof S!="function")throw Error(a(191,S));S.call(v)}}}var am=new n.Component().refs;function Yh(o,l,d,v){l=o.memoizedState,d=d(v,l),d=d==null?l:s({},l,d),o.memoizedState=d,o.lanes===0&&(o.updateQueue.baseState=d)}var bl={isMounted:function(o){return(o=o._reactInternals)?G(o)===o:!1},enqueueSetState:function(o,l,d){o=o._reactInternals;var v=Fn(),S=Ar(o),T=Qi(v,S);T.payload=l,d!=null&&(T.callback=d),wr(o,T),l=hi(o,S,v),l!==null&&Tl(l,o,S)},enqueueReplaceState:function(o,l,d){o=o._reactInternals;var v=Fn(),S=Ar(o),T=Qi(v,S);T.tag=1,T.payload=l,d!=null&&(T.callback=d),wr(o,T),l=hi(o,S,v),l!==null&&Tl(l,o,S)},enqueueForceUpdate:function(o,l){o=o._reactInternals;var d=Fn(),v=Ar(o),S=Qi(d,v);S.tag=2,l!=null&&(S.callback=l),wr(o,S),l=hi(o,v,d),l!==null&&Tl(l,o,v)}};function lm(o,l,d,v,S,T,B){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(v,T,B):l.prototype&&l.prototype.isPureReactComponent?!Ml(d,v)||!Ml(S,T):!0}function cm(o,l,d){var v=!1,S=Xe,T=l.contextType;return typeof T=="object"&&T!==null?T=oi(T):(S=Bt(l)?ln:bt.current,v=l.contextTypes,T=(v=v!=null)?Jn(o,S):Xe),l=new l(d,T),o.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=bl,o.stateNode=l,l._reactInternals=o,v&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=S,o.__reactInternalMemoizedMaskedChildContext=T),l}function um(o,l,d,v){o=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(d,v),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(d,v),l.state!==o&&bl.enqueueReplaceState(l,l.state,null)}function qh(o,l,d,v){var S=o.stateNode;S.props=d,S.state=o.memoizedState,S.refs=am,Xh(o);var T=l.contextType;typeof T=="object"&&T!==null?S.context=oi(T):(T=Bt(l)?ln:bt.current,S.context=Jn(o,T)),S.state=o.memoizedState,T=l.getDerivedStateFromProps,typeof T=="function"&&(Yh(o,l,T,d),S.state=o.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof S.getSnapshotBeforeUpdate=="function"||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(l=S.state,typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount(),l!==S.state&&bl.enqueueReplaceState(S,S.state,null),Al(o,d,S,v),S.state=o.memoizedState),typeof S.componentDidMount=="function"&&(o.flags|=4194308)}var Gs=[],Ws=0,Cl=null,Rl=0,ai=[],li=0,qr=null,$i=1,er="";function Zr(o,l){Gs[Ws++]=Rl,Gs[Ws++]=Cl,Cl=o,Rl=l}function hm(o,l,d){ai[li++]=$i,ai[li++]=er,ai[li++]=qr,qr=o;var v=$i;o=er;var S=32-Nn(v)-1;v&=~(1<<S),d+=1;var T=32-Nn(l)+S;if(30<T){var B=S-S%5;T=(v&(1<<B)-1).toString(32),v>>=B,S-=B,$i=1<<32-Nn(l)+S|d<<S|v,er=T+o}else $i=1<<T|d<<S|v,er=o}function Zh(o){o.return!==null&&(Zr(o,1),hm(o,1,0))}function jh(o){for(;o===Cl;)Cl=Gs[--Ws],Gs[Ws]=null,Rl=Gs[--Ws],Gs[Ws]=null;for(;o===qr;)qr=ai[--li],ai[li]=null,er=ai[--li],ai[li]=null,$i=ai[--li],ai[li]=null}var Kn=null,Qn=null,Xt=!1,Vo=!1,xi=null;function fm(o,l){var d=fi(5,null,null,0);d.elementType="DELETED",d.stateNode=l,d.return=o,l=o.deletions,l===null?(o.deletions=[d],o.flags|=16):l.push(d)}function dm(o,l){switch(o.tag){case 5:return l=ji(l,o.type,o.pendingProps),l!==null?(o.stateNode=l,Kn=o,Qn=dl(l),!0):!1;case 6:return l=hl(l,o.pendingProps),l!==null?(o.stateNode=l,Kn=o,Qn=null,!0):!1;case 13:if(l=Ji(l),l!==null){var d=qr!==null?{id:$i,overflow:er}:null;return o.memoizedState={dehydrated:l,treeContext:d,retryLane:1073741824},d=fi(18,null,null,0),d.stateNode=l,d.return=o,o.child=d,Kn=o,Qn=null,!0}return!1;default:return!1}}function Jh(o){return(o.mode&1)!==0&&(o.flags&128)===0}function Kh(o){if(Xt){var l=Qn;if(l){var d=l;if(!dm(o,l)){if(Jh(o))throw Error(a(418));l=Pi(d);var v=Kn;l&&dm(o,l)?fm(v,d):(o.flags=o.flags&-4097|2,Xt=!1,Kn=o)}}else{if(Jh(o))throw Error(a(418));o.flags=o.flags&-4097|2,Xt=!1,Kn=o}}}function pm(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;Kn=o}function Go(o){if(!O||o!==Kn)return!1;if(!Xt)return pm(o),Xt=!0,!1;if(o.tag!==3&&(o.tag!==5||q(o.type)&&!ge(o.type,o.memoizedProps))){var l=Qn;if(l){if(Jh(o)){for(o=Qn;o;)o=Pi(o);throw Error(a(418))}for(;l;)fm(o,l),l=Pi(l)}}if(pm(o),o.tag===13){if(!O)throw Error(a(316));if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(a(317));Qn=Lh(o)}else Qn=Kn?Pi(o.stateNode):null;return!0}function Xs(){O&&(Qn=Kn=null,Vo=Xt=!1)}function Qh(o){xi===null?xi=[o]:xi.push(o)}function Wo(o,l,d){if(o=d.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(a(309));var v=d.stateNode}if(!v)throw Error(a(147,o));var S=v,T=""+o;return l!==null&&l.ref!==null&&typeof l.ref=="function"&&l.ref._stringRef===T?l.ref:(l=function(B){var V=S.refs;V===am&&(V=S.refs={}),B===null?delete V[T]:V[T]=B},l._stringRef=T,l)}if(typeof o!="string")throw Error(a(284));if(!d._owner)throw Error(a(290,o))}return o}function Pl(o,l){throw o=Object.prototype.toString.call(l),Error(a(31,o==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":o))}function mm(o){var l=o._init;return l(o._payload)}function gm(o){function l(Q,X){if(o){var ne=Q.deletions;ne===null?(Q.deletions=[X],Q.flags|=16):ne.push(X)}}function d(Q,X){if(!o)return null;for(;X!==null;)l(Q,X),X=X.sibling;return null}function v(Q,X){for(Q=new Map;X!==null;)X.key!==null?Q.set(X.key,X):Q.set(X.index,X),X=X.sibling;return Q}function S(Q,X){return Q=Cr(Q,X),Q.index=0,Q.sibling=null,Q}function T(Q,X,ne){return Q.index=ne,o?(ne=Q.alternate,ne!==null?(ne=ne.index,ne<X?(Q.flags|=2,X):ne):(Q.flags|=2,X)):(Q.flags|=1048576,X)}function B(Q){return o&&Q.alternate===null&&(Q.flags|=2),Q}function V(Q,X,ne,Ue){return X===null||X.tag!==6?(X=Of(ne,Q.mode,Ue),X.return=Q,X):(X=S(X,ne),X.return=Q,X)}function se(Q,X,ne,Ue){var Ke=ne.type;return Ke===f?We(Q,X,ne.props.children,Ue,ne.key):X!==null&&(X.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===w&&mm(Ke)===X.type)?(Ue=S(X,ne.props),Ue.ref=Wo(Q,X,ne),Ue.return=Q,Ue):(Ue=ac(ne.type,ne.key,ne.props,null,Q.mode,Ue),Ue.ref=Wo(Q,X,ne),Ue.return=Q,Ue)}function Se(Q,X,ne,Ue){return X===null||X.tag!==4||X.stateNode.containerInfo!==ne.containerInfo||X.stateNode.implementation!==ne.implementation?(X=Ff(ne,Q.mode,Ue),X.return=Q,X):(X=S(X,ne.children||[]),X.return=Q,X)}function We(Q,X,ne,Ue,Ke){return X===null||X.tag!==7?(X=ts(ne,Q.mode,Ue,Ke),X.return=Q,X):(X=S(X,ne),X.return=Q,X)}function ft(Q,X,ne){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Of(""+X,Q.mode,ne),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case u:return ne=ac(X.type,X.key,X.props,null,Q.mode,ne),ne.ref=Wo(Q,null,X),ne.return=Q,ne;case h:return X=Ff(X,Q.mode,ne),X.return=Q,X;case w:var Ue=X._init;return ft(Q,Ue(X._payload),ne)}if(ce(X)||P(X))return X=ts(X,Q.mode,ne,null),X.return=Q,X;Pl(Q,X)}return null}function nt(Q,X,ne,Ue){var Ke=X!==null?X.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return Ke!==null?null:V(Q,X,""+ne,Ue);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case u:return ne.key===Ke?se(Q,X,ne,Ue):null;case h:return ne.key===Ke?Se(Q,X,ne,Ue):null;case w:return Ke=ne._init,nt(Q,X,Ke(ne._payload),Ue)}if(ce(ne)||P(ne))return Ke!==null?null:We(Q,X,ne,Ue,null);Pl(Q,ne)}return null}function kt(Q,X,ne,Ue,Ke){if(typeof Ue=="string"&&Ue!==""||typeof Ue=="number")return Q=Q.get(ne)||null,V(X,Q,""+Ue,Ke);if(typeof Ue=="object"&&Ue!==null){switch(Ue.$$typeof){case u:return Q=Q.get(Ue.key===null?ne:Ue.key)||null,se(X,Q,Ue,Ke);case h:return Q=Q.get(Ue.key===null?ne:Ue.key)||null,Se(X,Q,Ue,Ke);case w:var xt=Ue._init;return kt(Q,X,ne,xt(Ue._payload),Ke)}if(ce(Ue)||P(Ue))return Q=Q.get(ne)||null,We(X,Q,Ue,Ke,null);Pl(X,Ue)}return null}function $e(Q,X,ne,Ue){for(var Ke=null,xt=null,dt=X,Ut=X=0,mn=null;dt!==null&&Ut<ne.length;Ut++){dt.index>Ut?(mn=dt,dt=null):mn=dt.sibling;var Nt=nt(Q,dt,ne[Ut],Ue);if(Nt===null){dt===null&&(dt=mn);break}o&&dt&&Nt.alternate===null&&l(Q,dt),X=T(Nt,X,Ut),xt===null?Ke=Nt:xt.sibling=Nt,xt=Nt,dt=mn}if(Ut===ne.length)return d(Q,dt),Xt&&Zr(Q,Ut),Ke;if(dt===null){for(;Ut<ne.length;Ut++)dt=ft(Q,ne[Ut],Ue),dt!==null&&(X=T(dt,X,Ut),xt===null?Ke=dt:xt.sibling=dt,xt=dt);return Xt&&Zr(Q,Ut),Ke}for(dt=v(Q,dt);Ut<ne.length;Ut++)mn=kt(dt,Q,Ut,ne[Ut],Ue),mn!==null&&(o&&mn.alternate!==null&&dt.delete(mn.key===null?Ut:mn.key),X=T(mn,X,Ut),xt===null?Ke=mn:xt.sibling=mn,xt=mn);return o&&dt.forEach(function(Rr){return l(Q,Rr)}),Xt&&Zr(Q,Ut),Ke}function bn(Q,X,ne,Ue){var Ke=P(ne);if(typeof Ke!="function")throw Error(a(150));if(ne=Ke.call(ne),ne==null)throw Error(a(151));for(var xt=Ke=null,dt=X,Ut=X=0,mn=null,Nt=ne.next();dt!==null&&!Nt.done;Ut++,Nt=ne.next()){dt.index>Ut?(mn=dt,dt=null):mn=dt.sibling;var Rr=nt(Q,dt,Nt.value,Ue);if(Rr===null){dt===null&&(dt=mn);break}o&&dt&&Rr.alternate===null&&l(Q,dt),X=T(Rr,X,Ut),xt===null?Ke=Rr:xt.sibling=Rr,xt=Rr,dt=mn}if(Nt.done)return d(Q,dt),Xt&&Zr(Q,Ut),Ke;if(dt===null){for(;!Nt.done;Ut++,Nt=ne.next())Nt=ft(Q,Nt.value,Ue),Nt!==null&&(X=T(Nt,X,Ut),xt===null?Ke=Nt:xt.sibling=Nt,xt=Nt);return Xt&&Zr(Q,Ut),Ke}for(dt=v(Q,dt);!Nt.done;Ut++,Nt=ne.next())Nt=kt(dt,Q,Ut,Nt.value,Ue),Nt!==null&&(o&&Nt.alternate!==null&&dt.delete(Nt.key===null?Ut:Nt.key),X=T(Nt,X,Ut),xt===null?Ke=Nt:xt.sibling=Nt,xt=Nt);return o&&dt.forEach(function(Lx){return l(Q,Lx)}),Xt&&Zr(Q,Ut),Ke}function di(Q,X,ne,Ue){if(typeof ne=="object"&&ne!==null&&ne.type===f&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case u:e:{for(var Ke=ne.key,xt=X;xt!==null;){if(xt.key===Ke){if(Ke=ne.type,Ke===f){if(xt.tag===7){d(Q,xt.sibling),X=S(xt,ne.props.children),X.return=Q,Q=X;break e}}else if(xt.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===w&&mm(Ke)===xt.type){d(Q,xt.sibling),X=S(xt,ne.props),X.ref=Wo(Q,xt,ne),X.return=Q,Q=X;break e}d(Q,xt);break}else l(Q,xt);xt=xt.sibling}ne.type===f?(X=ts(ne.props.children,Q.mode,Ue,ne.key),X.return=Q,Q=X):(Ue=ac(ne.type,ne.key,ne.props,null,Q.mode,Ue),Ue.ref=Wo(Q,X,ne),Ue.return=Q,Q=Ue)}return B(Q);case h:e:{for(xt=ne.key;X!==null;){if(X.key===xt)if(X.tag===4&&X.stateNode.containerInfo===ne.containerInfo&&X.stateNode.implementation===ne.implementation){d(Q,X.sibling),X=S(X,ne.children||[]),X.return=Q,Q=X;break e}else{d(Q,X);break}else l(Q,X);X=X.sibling}X=Ff(ne,Q.mode,Ue),X.return=Q,Q=X}return B(Q);case w:return xt=ne._init,di(Q,X,xt(ne._payload),Ue)}if(ce(ne))return $e(Q,X,ne,Ue);if(P(ne))return bn(Q,X,ne,Ue);Pl(Q,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,X!==null&&X.tag===6?(d(Q,X.sibling),X=S(X,ne),X.return=Q,Q=X):(d(Q,X),X=Of(ne,Q.mode,Ue),X.return=Q,Q=X),B(Q)):d(Q,X)}return di}var Ys=gm(!0),vm=gm(!1),Xo={},ci=Ft(Xo),Yo=Ft(Xo),qs=Ft(Xo);function Ni(o){if(o===Xo)throw Error(a(174));return o}function $h(o,l){Qe(qs,l),Qe(Yo,o),Qe(ci,Xo),o=ve(l),wt(ci),Qe(ci,o)}function Zs(){wt(ci),wt(Yo),wt(qs)}function _m(o){var l=Ni(qs.current),d=Ni(ci.current);l=H(d,o.type,l),d!==l&&(Qe(Yo,o),Qe(ci,l))}function ef(o){Yo.current===o&&(wt(ci),wt(Yo))}var qt=Ft(0);function Il(o){for(var l=o;l!==null;){if(l.tag===13){var d=l.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||Bs(d)||zs(d)))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if(l.flags&128)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var tf=[];function nf(){for(var o=0;o<tf.length;o++){var l=tf[o];at?l._workInProgressVersionPrimary=null:l._workInProgressVersionSecondary=null}tf.length=0}var Ll=c.ReactCurrentDispatcher,ui=c.ReactCurrentBatchConfig,js=0,jt=null,En=null,pn=null,Dl=!1,qo=!1,Zo=0,ix=0;function Tn(){throw Error(a(321))}function rf(o,l){if(l===null)return!1;for(var d=0;d<l.length&&d<o.length;d++)if(!Li(o[d],l[d]))return!1;return!0}function sf(o,l,d,v,S,T){if(js=T,jt=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,Ll.current=o===null||o.memoizedState===null?ax:lx,o=d(v,S),qo){T=0;do{if(qo=!1,Zo=0,25<=T)throw Error(a(301));T+=1,pn=En=null,l.updateQueue=null,Ll.current=cx,o=d(v,S)}while(qo)}if(Ll.current=Bl,l=En!==null&&En.next!==null,js=0,pn=En=jt=null,Dl=!1,l)throw Error(a(300));return o}function of(){var o=Zo!==0;return Zo=0,o}function tr(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?jt.memoizedState=pn=o:pn=pn.next=o,pn}function Oi(){if(En===null){var o=jt.alternate;o=o!==null?o.memoizedState:null}else o=En.next;var l=pn===null?jt.memoizedState:pn.next;if(l!==null)pn=l,En=o;else{if(o===null)throw Error(a(310));En=o,o={memoizedState:En.memoizedState,baseState:En.baseState,baseQueue:En.baseQueue,queue:En.queue,next:null},pn===null?jt.memoizedState=pn=o:pn=pn.next=o}return pn}function jr(o,l){return typeof l=="function"?l(o):l}function Ul(o){var l=Oi(),d=l.queue;if(d===null)throw Error(a(311));d.lastRenderedReducer=o;var v=En,S=v.baseQueue,T=d.pending;if(T!==null){if(S!==null){var B=S.next;S.next=T.next,T.next=B}v.baseQueue=S=T,d.pending=null}if(S!==null){T=S.next,v=v.baseState;var V=B=null,se=null,Se=T;do{var We=Se.lane;if((js&We)===We)se!==null&&(se=se.next={lane:0,action:Se.action,hasEagerState:Se.hasEagerState,eagerState:Se.eagerState,next:null}),v=Se.hasEagerState?Se.eagerState:o(v,Se.action);else{var ft={lane:We,action:Se.action,hasEagerState:Se.hasEagerState,eagerState:Se.eagerState,next:null};se===null?(V=se=ft,B=v):se=se.next=ft,jt.lanes|=We,Ks|=We}Se=Se.next}while(Se!==null&&Se!==T);se===null?B=v:se.next=V,Li(v,l.memoizedState)||($n=!0),l.memoizedState=v,l.baseState=B,l.baseQueue=se,d.lastRenderedState=v}if(o=d.interleaved,o!==null){S=o;do T=S.lane,jt.lanes|=T,Ks|=T,S=S.next;while(S!==o)}else S===null&&(d.lanes=0);return[l.memoizedState,d.dispatch]}function Nl(o){var l=Oi(),d=l.queue;if(d===null)throw Error(a(311));d.lastRenderedReducer=o;var v=d.dispatch,S=d.pending,T=l.memoizedState;if(S!==null){d.pending=null;var B=S=S.next;do T=o(T,B.action),B=B.next;while(B!==S);Li(T,l.memoizedState)||($n=!0),l.memoizedState=T,l.baseQueue===null&&(l.baseState=T),d.lastRenderedState=T}return[T,v]}function ym(){}function xm(o,l){var d=jt,v=Oi(),S=l(),T=!Li(v.memoizedState,S);if(T&&(v.memoizedState=S,$n=!0),v=v.queue,Jo(wm.bind(null,d,v,o),[o]),v.getSnapshot!==l||T||pn!==null&&pn.memoizedState.tag&1){if(d.flags|=2048,jo(9,Mm.bind(null,d,v,S,l),void 0,null),rn===null)throw Error(a(349));js&30||Sm(d,l,S)}return S}function Sm(o,l,d){o.flags|=16384,o={getSnapshot:l,value:d},l=jt.updateQueue,l===null?(l={lastEffect:null,stores:null},jt.updateQueue=l,l.stores=[o]):(d=l.stores,d===null?l.stores=[o]:d.push(o))}function Mm(o,l,d,v){l.value=d,l.getSnapshot=v,Em(l)&&hi(o,1,-1)}function wm(o,l,d){return d(function(){Em(l)&&hi(o,1,-1)})}function Em(o){var l=o.getSnapshot;o=o.value;try{var d=l();return!Li(o,d)}catch{return!0}}function af(o){var l=tr();return typeof o=="function"&&(o=o()),l.memoizedState=l.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jr,lastRenderedState:o},l.queue=o,o=o.dispatch=ox.bind(null,jt,o),[l.memoizedState,o]}function jo(o,l,d,v){return o={tag:o,create:l,destroy:d,deps:v,next:null},l=jt.updateQueue,l===null?(l={lastEffect:null,stores:null},jt.updateQueue=l,l.lastEffect=o.next=o):(d=l.lastEffect,d===null?l.lastEffect=o.next=o:(v=d.next,d.next=o,o.next=v,l.lastEffect=o)),o}function Tm(){return Oi().memoizedState}function Ol(o,l,d,v){var S=tr();jt.flags|=o,S.memoizedState=jo(1|l,d,void 0,v===void 0?null:v)}function Fl(o,l,d,v){var S=Oi();v=v===void 0?null:v;var T=void 0;if(En!==null){var B=En.memoizedState;if(T=B.destroy,v!==null&&rf(v,B.deps)){S.memoizedState=jo(l,d,T,v);return}}jt.flags|=o,S.memoizedState=jo(1|l,d,T,v)}function lf(o,l){return Ol(8390656,8,o,l)}function Jo(o,l){return Fl(2048,8,o,l)}function Am(o,l){return Fl(4,2,o,l)}function bm(o,l){return Fl(4,4,o,l)}function Cm(o,l){if(typeof l=="function")return o=o(),l(o),function(){l(null)};if(l!=null)return o=o(),l.current=o,function(){l.current=null}}function Rm(o,l,d){return d=d!=null?d.concat([o]):null,Fl(4,4,Cm.bind(null,l,o),d)}function cf(){}function Pm(o,l){var d=Oi();l=l===void 0?null:l;var v=d.memoizedState;return v!==null&&l!==null&&rf(l,v[1])?v[0]:(d.memoizedState=[o,l],o)}function Im(o,l){var d=Oi();l=l===void 0?null:l;var v=d.memoizedState;return v!==null&&l!==null&&rf(l,v[1])?v[0]:(o=o(),d.memoizedState=[o,l],o)}function rx(o,l){var d=Dt;Dt=d!==0&&4>d?d:4,o(!0);var v=ui.transition;ui.transition={};try{o(!1),l()}finally{Dt=d,ui.transition=v}}function Lm(){return Oi().memoizedState}function sx(o,l,d){var v=Ar(o);d={lane:v,action:d,hasEagerState:!1,eagerState:null,next:null},Dm(o)?Um(l,d):(Nm(o,l,d),d=Fn(),o=hi(o,v,d),o!==null&&Om(o,l,v))}function ox(o,l,d){var v=Ar(o),S={lane:v,action:d,hasEagerState:!1,eagerState:null,next:null};if(Dm(o))Um(l,S);else{Nm(o,l,S);var T=o.alternate;if(o.lanes===0&&(T===null||T.lanes===0)&&(T=l.lastRenderedReducer,T!==null))try{var B=l.lastRenderedState,V=T(B,d);if(S.hasEagerState=!0,S.eagerState=V,Li(V,B))return}catch{}finally{}d=Fn(),o=hi(o,v,d),o!==null&&Om(o,l,v)}}function Dm(o){var l=o.alternate;return o===jt||l!==null&&l===jt}function Um(o,l){qo=Dl=!0;var d=o.pending;d===null?l.next=l:(l.next=d.next,d.next=l),o.pending=l}function Nm(o,l,d){rn!==null&&o.mode&1&&!(Et&2)?(o=l.interleaved,o===null?(d.next=d,Ui===null?Ui=[l]:Ui.push(l)):(d.next=o.next,o.next=d),l.interleaved=d):(o=l.pending,o===null?d.next=d:(d.next=o.next,o.next=d),l.pending=d)}function Om(o,l,d){if(d&4194240){var v=l.lanes;v&=o.pendingLanes,d|=v,l.lanes=d,Oh(o,d)}}var Bl={readContext:oi,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},ax={readContext:oi,useCallback:function(o,l){return tr().memoizedState=[o,l===void 0?null:l],o},useContext:oi,useEffect:lf,useImperativeHandle:function(o,l,d){return d=d!=null?d.concat([o]):null,Ol(4194308,4,Cm.bind(null,l,o),d)},useLayoutEffect:function(o,l){return Ol(4194308,4,o,l)},useInsertionEffect:function(o,l){return Ol(4,2,o,l)},useMemo:function(o,l){var d=tr();return l=l===void 0?null:l,o=o(),d.memoizedState=[o,l],o},useReducer:function(o,l,d){var v=tr();return l=d!==void 0?d(l):l,v.memoizedState=v.baseState=l,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:l},v.queue=o,o=o.dispatch=sx.bind(null,jt,o),[v.memoizedState,o]},useRef:function(o){var l=tr();return o={current:o},l.memoizedState=o},useState:af,useDebugValue:cf,useDeferredValue:function(o){var l=af(o),d=l[0],v=l[1];return lf(function(){var S=ui.transition;ui.transition={};try{v(o)}finally{ui.transition=S}},[o]),d},useTransition:function(){var o=af(!1),l=o[0];return o=rx.bind(null,o[1]),tr().memoizedState=o,[l,o]},useMutableSource:function(){},useSyncExternalStore:function(o,l,d){var v=jt,S=tr();if(Xt){if(d===void 0)throw Error(a(407));d=d()}else{if(d=l(),rn===null)throw Error(a(349));js&30||Sm(v,l,d)}S.memoizedState=d;var T={value:d,getSnapshot:l};return S.queue=T,lf(wm.bind(null,v,T,o),[o]),v.flags|=2048,jo(9,Mm.bind(null,v,T,d,l),void 0,null),d},useId:function(){var o=tr(),l=rn.identifierPrefix;if(Xt){var d=er,v=$i;d=(v&~(1<<32-Nn(v)-1)).toString(32)+d,l=":"+l+"R"+d,d=Zo++,0<d&&(l+="H"+d.toString(32)),l+=":"}else d=ix++,l=":"+l+"r"+d.toString(32)+":";return o.memoizedState=l},unstable_isNewReconciler:!1},lx={readContext:oi,useCallback:Pm,useContext:oi,useEffect:Jo,useImperativeHandle:Rm,useInsertionEffect:Am,useLayoutEffect:bm,useMemo:Im,useReducer:Ul,useRef:Tm,useState:function(){return Ul(jr)},useDebugValue:cf,useDeferredValue:function(o){var l=Ul(jr),d=l[0],v=l[1];return Jo(function(){var S=ui.transition;ui.transition={};try{v(o)}finally{ui.transition=S}},[o]),d},useTransition:function(){var o=Ul(jr)[0],l=Oi().memoizedState;return[o,l]},useMutableSource:ym,useSyncExternalStore:xm,useId:Lm,unstable_isNewReconciler:!1},cx={readContext:oi,useCallback:Pm,useContext:oi,useEffect:Jo,useImperativeHandle:Rm,useInsertionEffect:Am,useLayoutEffect:bm,useMemo:Im,useReducer:Nl,useRef:Tm,useState:function(){return Nl(jr)},useDebugValue:cf,useDeferredValue:function(o){var l=Nl(jr),d=l[0],v=l[1];return Jo(function(){var S=ui.transition;ui.transition={};try{v(o)}finally{ui.transition=S}},[o]),d},useTransition:function(){var o=Nl(jr)[0],l=Oi().memoizedState;return[o,l]},useMutableSource:ym,useSyncExternalStore:xm,useId:Lm,unstable_isNewReconciler:!1};function uf(o,l){try{var d="",v=l;do d+=nx(v),v=v.return;while(v);var S=d}catch(T){S=`
Error generating stack: `+T.message+`
`+T.stack}return{value:o,source:l,stack:S}}function hf(o,l){try{console.error(l.value)}catch(d){setTimeout(function(){throw d})}}var ux=typeof WeakMap=="function"?WeakMap:Map;function Fm(o,l,d){d=Qi(-1,d),d.tag=3,d.payload={element:null};var v=l.value;return d.callback=function(){ec||(ec=!0,Rf=v),hf(o,l)},d}function Bm(o,l,d){d=Qi(-1,d),d.tag=3;var v=o.type.getDerivedStateFromError;if(typeof v=="function"){var S=l.value;d.payload=function(){return v(S)},d.callback=function(){hf(o,l)}}var T=o.stateNode;return T!==null&&typeof T.componentDidCatch=="function"&&(d.callback=function(){hf(o,l),typeof v!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var B=l.stack;this.componentDidCatch(l.value,{componentStack:B!==null?B:""})}),d}function zm(o,l,d){var v=o.pingCache;if(v===null){v=o.pingCache=new ux;var S=new Set;v.set(l,S)}else S=v.get(l),S===void 0&&(S=new Set,v.set(l,S));S.has(d)||(S.add(d),o=Ex.bind(null,o,l,d),l.then(o,o))}function km(o){do{var l;if((l=o.tag===13)&&(l=o.memoizedState,l=l!==null?l.dehydrated!==null:!0),l)return o;o=o.return}while(o!==null);return null}function Hm(o,l,d,v,S){return o.mode&1?(o.flags|=65536,o.lanes=S,o):(o===l?o.flags|=65536:(o.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(l=Qi(-1,1),l.tag=2,wr(d,l))),d.lanes|=1),o)}function Fi(o){o.flags|=4}function Vm(o,l){if(o!==null&&o.child===l.child)return!0;if(l.flags&16)return!1;for(o=l.child;o!==null;){if(o.flags&12854||o.subtreeFlags&12854)return!1;o=o.sibling}return!0}var Ko,Qo,zl,kl;if(tt)Ko=function(o,l){for(var d=l.child;d!==null;){if(d.tag===5||d.tag===6)Fe(o,d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===l)break;for(;d.sibling===null;){if(d.return===null||d.return===l)return;d=d.return}d.sibling.return=d.return,d=d.sibling}},Qo=function(){},zl=function(o,l,d,v,S){if(o=o.memoizedProps,o!==v){var T=l.stateNode,B=Ni(ci.current);d=re(T,d,o,v,S,B),(l.updateQueue=d)&&Fi(l)}},kl=function(o,l,d,v){d!==v&&Fi(l)};else if(pe){Ko=function(o,l,d,v){for(var S=l.child;S!==null;){if(S.tag===5){var T=S.stateNode;d&&v&&(T=Yt(T,S.type,S.memoizedProps,S)),Fe(o,T)}else if(S.tag===6)T=S.stateNode,d&&v&&(T=fn(T,S.memoizedProps,S)),Fe(o,T);else if(S.tag!==4){if(S.tag===22&&S.memoizedState!==null)T=S.child,T!==null&&(T.return=S),Ko(o,S,!0,!0);else if(S.child!==null){S.child.return=S,S=S.child;continue}}if(S===l)break;for(;S.sibling===null;){if(S.return===null||S.return===l)return;S=S.return}S.sibling.return=S.return,S=S.sibling}};var Gm=function(o,l,d,v){for(var S=l.child;S!==null;){if(S.tag===5){var T=S.stateNode;d&&v&&(T=Yt(T,S.type,S.memoizedProps,S)),Ct(o,T)}else if(S.tag===6)T=S.stateNode,d&&v&&(T=fn(T,S.memoizedProps,S)),Ct(o,T);else if(S.tag!==4){if(S.tag===22&&S.memoizedState!==null)T=S.child,T!==null&&(T.return=S),Gm(o,S,!0,!0);else if(S.child!==null){S.child.return=S,S=S.child;continue}}if(S===l)break;for(;S.sibling===null;){if(S.return===null||S.return===l)return;S=S.return}S.sibling.return=S.return,S=S.sibling}};Qo=function(o,l){var d=l.stateNode;if(!Vm(o,l)){o=d.containerInfo;var v=Mt(o);Gm(v,l,!1,!1),d.pendingChildren=v,Fi(l),Ht(o,v)}},zl=function(o,l,d,v,S){var T=o.stateNode,B=o.memoizedProps;if((o=Vm(o,l))&&B===v)l.stateNode=T;else{var V=l.stateNode,se=Ni(ci.current),Se=null;B!==v&&(Se=re(V,d,B,v,S,se)),o&&Se===null?l.stateNode=T:(T=Be(T,Se,d,B,v,l,o,V),He(T,d,v,S,se)&&Fi(l),l.stateNode=T,o?Fi(l):Ko(T,l,!1,!1))}},kl=function(o,l,d,v){d!==v?(o=Ni(qs.current),d=Ni(ci.current),l.stateNode=Pe(v,o,d,l),Fi(l)):l.stateNode=o.stateNode}}else Qo=function(){},zl=function(){},kl=function(){};function $o(o,l){if(!Xt)switch(o.tailMode){case"hidden":l=o.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?o.tail=null:d.sibling=null;break;case"collapsed":d=o.tail;for(var v=null;d!==null;)d.alternate!==null&&(v=d),d=d.sibling;v===null?l||o.tail===null?o.tail=null:o.tail.sibling=null:v.sibling=null}}function An(o){var l=o.alternate!==null&&o.alternate.child===o.child,d=0,v=0;if(l)for(var S=o.child;S!==null;)d|=S.lanes|S.childLanes,v|=S.subtreeFlags&14680064,v|=S.flags&14680064,S.return=o,S=S.sibling;else for(S=o.child;S!==null;)d|=S.lanes|S.childLanes,v|=S.subtreeFlags,v|=S.flags,S.return=o,S=S.sibling;return o.subtreeFlags|=v,o.childLanes=d,l}function hx(o,l,d){var v=l.pendingProps;switch(jh(l),l.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(l),null;case 1:return Bt(l.type)&&xr(),An(l),null;case 3:return v=l.stateNode,Zs(),wt(ht),wt(bt),nf(),v.pendingContext&&(v.context=v.pendingContext,v.pendingContext=null),(o===null||o.child===null)&&(Go(l)?Fi(l):o===null||o.memoizedState.isDehydrated&&!(l.flags&256)||(l.flags|=1024,xi!==null&&(Lf(xi),xi=null))),Qo(o,l),An(l),null;case 5:ef(l),d=Ni(qs.current);var S=l.type;if(o!==null&&l.stateNode!=null)zl(o,l,S,v,d),o.ref!==l.ref&&(l.flags|=512,l.flags|=2097152);else{if(!v){if(l.stateNode===null)throw Error(a(166));return An(l),null}if(o=Ni(ci.current),Go(l)){if(!O)throw Error(a(175));o=ml(l.stateNode,l.type,l.memoizedProps,d,o,l,!Vo),l.updateQueue=o,o!==null&&Fi(l)}else{var T=ue(S,v,d,o,l);Ko(T,l,!1,!1),l.stateNode=T,He(T,S,v,d,o)&&Fi(l)}l.ref!==null&&(l.flags|=512,l.flags|=2097152)}return An(l),null;case 6:if(o&&l.stateNode!=null)kl(o,l,o.memoizedProps,v);else{if(typeof v!="string"&&l.stateNode===null)throw Error(a(166));if(o=Ni(qs.current),d=Ni(ci.current),Go(l)){if(!O)throw Error(a(176));if(o=l.stateNode,v=l.memoizedProps,(d=Ph(o,v,l,!Vo))&&(S=Kn,S!==null))switch(T=(S.mode&1)!==0,S.tag){case 3:Me(S.stateNode.containerInfo,o,v,T);break;case 5:Oe(S.type,S.memoizedProps,S.stateNode,o,v,T)}d&&Fi(l)}else l.stateNode=Pe(v,o,d,l)}return An(l),null;case 13:if(wt(qt),v=l.memoizedState,Xt&&Qn!==null&&l.mode&1&&!(l.flags&128)){for(o=Qn;o;)o=Pi(o);return Xs(),l.flags|=98560,l}if(v!==null&&v.dehydrated!==null){if(v=Go(l),o===null){if(!v)throw Error(a(318));if(!O)throw Error(a(344));if(o=l.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(a(317));Ih(o,l)}else Xs(),!(l.flags&128)&&(l.memoizedState=null),l.flags|=4;return An(l),null}return xi!==null&&(Lf(xi),xi=null),l.flags&128?(l.lanes=d,l):(v=v!==null,d=!1,o===null?Go(l):d=o.memoizedState!==null,v&&!d&&(l.child.flags|=8192,l.mode&1&&(o===null||qt.current&1?cn===0&&(cn=3):Uf())),l.updateQueue!==null&&(l.flags|=4),An(l),null);case 4:return Zs(),Qo(o,l),o===null&&Ee(l.stateNode.containerInfo),An(l),null;case 10:return Gh(l.type._context),An(l),null;case 17:return Bt(l.type)&&xr(),An(l),null;case 19:if(wt(qt),S=l.memoizedState,S===null)return An(l),null;if(v=(l.flags&128)!==0,T=S.rendering,T===null)if(v)$o(S,!1);else{if(cn!==0||o!==null&&o.flags&128)for(o=l.child;o!==null;){if(T=Il(o),T!==null){for(l.flags|=128,$o(S,!1),o=T.updateQueue,o!==null&&(l.updateQueue=o,l.flags|=4),l.subtreeFlags=0,o=d,v=l.child;v!==null;)d=v,S=o,d.flags&=14680066,T=d.alternate,T===null?(d.childLanes=0,d.lanes=S,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=T.childLanes,d.lanes=T.lanes,d.child=T.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=T.memoizedProps,d.memoizedState=T.memoizedState,d.updateQueue=T.updateQueue,d.type=T.type,S=T.dependencies,d.dependencies=S===null?null:{lanes:S.lanes,firstContext:S.firstContext}),v=v.sibling;return Qe(qt,qt.current&1|2),l.child}o=o.sibling}S.tail!==null&&dn()>Cf&&(l.flags|=128,v=!0,$o(S,!1),l.lanes=4194304)}else{if(!v)if(o=Il(T),o!==null){if(l.flags|=128,v=!0,o=o.updateQueue,o!==null&&(l.updateQueue=o,l.flags|=4),$o(S,!0),S.tail===null&&S.tailMode==="hidden"&&!T.alternate&&!Xt)return An(l),null}else 2*dn()-S.renderingStartTime>Cf&&d!==1073741824&&(l.flags|=128,v=!0,$o(S,!1),l.lanes=4194304);S.isBackwards?(T.sibling=l.child,l.child=T):(o=S.last,o!==null?o.sibling=T:l.child=T,S.last=T)}return S.tail!==null?(l=S.tail,S.rendering=l,S.tail=l.sibling,S.renderingStartTime=dn(),l.sibling=null,o=qt.current,Qe(qt,v?o&1|2:o&1),l):(An(l),null);case 22:case 23:return Df(),v=l.memoizedState!==null,o!==null&&o.memoizedState!==null!==v&&(l.flags|=8192),v&&l.mode&1?ei&1073741824&&(An(l),tt&&l.subtreeFlags&6&&(l.flags|=8192)):An(l),null;case 24:return null;case 25:return null}throw Error(a(156,l.tag))}var fx=c.ReactCurrentOwner,$n=!1;function On(o,l,d,v){l.child=o===null?vm(l,null,d,v):Ys(l,o.child,d,v)}function Wm(o,l,d,v,S){d=d.render;var T=l.ref;return Vs(l,S),v=sf(o,l,d,v,T,S),d=of(),o!==null&&!$n?(l.updateQueue=o.updateQueue,l.flags&=-2053,o.lanes&=~S,nr(o,l,S)):(Xt&&d&&Zh(l),l.flags|=1,On(o,l,v,S),l.child)}function Xm(o,l,d,v,S){if(o===null){var T=d.type;return typeof T=="function"&&!Nf(T)&&T.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(l.tag=15,l.type=T,Ym(o,l,T,v,S)):(o=ac(d.type,null,v,l,l.mode,S),o.ref=l.ref,o.return=l,l.child=o)}if(T=o.child,!(o.lanes&S)){var B=T.memoizedProps;if(d=d.compare,d=d!==null?d:Ml,d(B,v)&&o.ref===l.ref)return nr(o,l,S)}return l.flags|=1,o=Cr(T,v),o.ref=l.ref,o.return=l,l.child=o}function Ym(o,l,d,v,S){if(o!==null&&Ml(o.memoizedProps,v)&&o.ref===l.ref)if($n=!1,(o.lanes&S)!==0)o.flags&131072&&($n=!0);else return l.lanes=o.lanes,nr(o,l,S);return ff(o,l,d,v,S)}function qm(o,l,d){var v=l.pendingProps,S=v.children,T=o!==null?o.memoizedState:null;if(v.mode==="hidden")if(!(l.mode&1))l.memoizedState={baseLanes:0,cachePool:null},Qe(Js,ei),ei|=d;else if(d&1073741824)l.memoizedState={baseLanes:0,cachePool:null},v=T!==null?T.baseLanes:d,Qe(Js,ei),ei|=v;else return o=T!==null?T.baseLanes|d:d,l.lanes=l.childLanes=1073741824,l.memoizedState={baseLanes:o,cachePool:null},l.updateQueue=null,Qe(Js,ei),ei|=o,null;else T!==null?(v=T.baseLanes|d,l.memoizedState=null):v=d,Qe(Js,ei),ei|=v;return On(o,l,S,d),l.child}function Zm(o,l){var d=l.ref;(o===null&&d!==null||o!==null&&o.ref!==d)&&(l.flags|=512,l.flags|=2097152)}function ff(o,l,d,v,S){var T=Bt(d)?ln:bt.current;return T=Jn(l,T),Vs(l,S),d=sf(o,l,d,v,T,S),v=of(),o!==null&&!$n?(l.updateQueue=o.updateQueue,l.flags&=-2053,o.lanes&=~S,nr(o,l,S)):(Xt&&v&&Zh(l),l.flags|=1,On(o,l,d,S),l.child)}function jm(o,l,d,v,S){if(Bt(d)){var T=!0;Sr(l)}else T=!1;if(Vs(l,S),l.stateNode===null)o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),cm(l,d,v),qh(l,d,v,S),v=!0;else if(o===null){var B=l.stateNode,V=l.memoizedProps;B.props=V;var se=B.context,Se=d.contextType;typeof Se=="object"&&Se!==null?Se=oi(Se):(Se=Bt(d)?ln:bt.current,Se=Jn(l,Se));var We=d.getDerivedStateFromProps,ft=typeof We=="function"||typeof B.getSnapshotBeforeUpdate=="function";ft||typeof B.UNSAFE_componentWillReceiveProps!="function"&&typeof B.componentWillReceiveProps!="function"||(V!==v||se!==Se)&&um(l,B,v,Se),Mr=!1;var nt=l.memoizedState;B.state=nt,Al(l,v,B,S),se=l.memoizedState,V!==v||nt!==se||ht.current||Mr?(typeof We=="function"&&(Yh(l,d,We,v),se=l.memoizedState),(V=Mr||lm(l,d,V,v,nt,se,Se))?(ft||typeof B.UNSAFE_componentWillMount!="function"&&typeof B.componentWillMount!="function"||(typeof B.componentWillMount=="function"&&B.componentWillMount(),typeof B.UNSAFE_componentWillMount=="function"&&B.UNSAFE_componentWillMount()),typeof B.componentDidMount=="function"&&(l.flags|=4194308)):(typeof B.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=v,l.memoizedState=se),B.props=v,B.state=se,B.context=Se,v=V):(typeof B.componentDidMount=="function"&&(l.flags|=4194308),v=!1)}else{B=l.stateNode,rm(o,l),V=l.memoizedProps,Se=l.type===l.elementType?V:yi(l.type,V),B.props=Se,ft=l.pendingProps,nt=B.context,se=d.contextType,typeof se=="object"&&se!==null?se=oi(se):(se=Bt(d)?ln:bt.current,se=Jn(l,se));var kt=d.getDerivedStateFromProps;(We=typeof kt=="function"||typeof B.getSnapshotBeforeUpdate=="function")||typeof B.UNSAFE_componentWillReceiveProps!="function"&&typeof B.componentWillReceiveProps!="function"||(V!==ft||nt!==se)&&um(l,B,v,se),Mr=!1,nt=l.memoizedState,B.state=nt,Al(l,v,B,S);var $e=l.memoizedState;V!==ft||nt!==$e||ht.current||Mr?(typeof kt=="function"&&(Yh(l,d,kt,v),$e=l.memoizedState),(Se=Mr||lm(l,d,Se,v,nt,$e,se)||!1)?(We||typeof B.UNSAFE_componentWillUpdate!="function"&&typeof B.componentWillUpdate!="function"||(typeof B.componentWillUpdate=="function"&&B.componentWillUpdate(v,$e,se),typeof B.UNSAFE_componentWillUpdate=="function"&&B.UNSAFE_componentWillUpdate(v,$e,se)),typeof B.componentDidUpdate=="function"&&(l.flags|=4),typeof B.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof B.componentDidUpdate!="function"||V===o.memoizedProps&&nt===o.memoizedState||(l.flags|=4),typeof B.getSnapshotBeforeUpdate!="function"||V===o.memoizedProps&&nt===o.memoizedState||(l.flags|=1024),l.memoizedProps=v,l.memoizedState=$e),B.props=v,B.state=$e,B.context=se,v=Se):(typeof B.componentDidUpdate!="function"||V===o.memoizedProps&&nt===o.memoizedState||(l.flags|=4),typeof B.getSnapshotBeforeUpdate!="function"||V===o.memoizedProps&&nt===o.memoizedState||(l.flags|=1024),v=!1)}return df(o,l,d,v,T,S)}function df(o,l,d,v,S,T){Zm(o,l);var B=(l.flags&128)!==0;if(!v&&!B)return S&&Un(l,d,!1),nr(o,l,T);v=l.stateNode,fx.current=l;var V=B&&typeof d.getDerivedStateFromError!="function"?null:v.render();return l.flags|=1,o!==null&&B?(l.child=Ys(l,o.child,null,T),l.child=Ys(l,null,V,T)):On(o,l,V,T),l.memoizedState=v.state,S&&Un(l,d,!0),l.child}function Jm(o){var l=o.stateNode;l.pendingContext?Wt(o,l.pendingContext,l.pendingContext!==l.context):l.context&&Wt(o,l.context,!1),$h(o,l.containerInfo)}function Km(o,l,d,v,S){return Xs(),Qh(S),l.flags|=256,On(o,l,d,v),l.child}var Hl={dehydrated:null,treeContext:null,retryLane:0};function Vl(o){return{baseLanes:o,cachePool:null}}function Qm(o,l,d){var v=l.pendingProps,S=qt.current,T=!1,B=(l.flags&128)!==0,V;if((V=B)||(V=o!==null&&o.memoizedState===null?!1:(S&2)!==0),V?(T=!0,l.flags&=-129):(o===null||o.memoizedState!==null)&&(S|=1),Qe(qt,S&1),o===null)return Kh(l),o=l.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?(l.mode&1?zs(o)?l.lanes=8:l.lanes=1073741824:l.lanes=1,null):(S=v.children,o=v.fallback,T?(v=l.mode,T=l.child,S={mode:"hidden",children:S},!(v&1)&&T!==null?(T.childLanes=0,T.pendingProps=S):T=lc(S,v,0,null),o=ts(o,v,d,null),T.return=l,o.return=l,T.sibling=o,l.child=T,l.child.memoizedState=Vl(d),l.memoizedState=Hl,o):pf(l,S));if(S=o.memoizedState,S!==null){if(V=S.dehydrated,V!==null){if(B)return l.flags&256?(l.flags&=-257,Gl(o,l,d,Error(a(422)))):l.memoizedState!==null?(l.child=o.child,l.flags|=128,null):(T=v.fallback,S=l.mode,v=lc({mode:"visible",children:v.children},S,0,null),T=ts(T,S,d,null),T.flags|=2,v.return=l,T.return=l,v.sibling=T,l.child=v,l.mode&1&&Ys(l,o.child,null,d),l.child.memoizedState=Vl(d),l.memoizedState=Hl,T);if(!(l.mode&1))l=Gl(o,l,d,null);else if(zs(V))l=Gl(o,l,d,Error(a(419)));else if(v=(d&o.childLanes)!==0,$n||v){if(v=rn,v!==null){switch(d&-d){case 4:T=2;break;case 16:T=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:T=32;break;case 536870912:T=268435456;break;default:T=0}v=T&(v.suspendedLanes|d)?0:T,v!==0&&v!==S.retryLane&&(S.retryLane=v,hi(o,v,-1))}Uf(),l=Gl(o,l,d,Error(a(421)))}else Bs(V)?(l.flags|=128,l.child=o.child,l=Tx.bind(null,o),fl(V,l),l=null):(d=S.treeContext,O&&(Qn=pl(V),Kn=l,Xt=!0,xi=null,Vo=!1,d!==null&&(ai[li++]=$i,ai[li++]=er,ai[li++]=qr,$i=d.id,er=d.overflow,qr=l)),l=pf(l,l.pendingProps.children),l.flags|=4096);return l}return T?(v=eg(o,l,v.children,v.fallback,d),T=l.child,S=o.child.memoizedState,T.memoizedState=S===null?Vl(d):{baseLanes:S.baseLanes|d,cachePool:null},T.childLanes=o.childLanes&~d,l.memoizedState=Hl,v):(d=$m(o,l,v.children,d),l.memoizedState=null,d)}return T?(v=eg(o,l,v.children,v.fallback,d),T=l.child,S=o.child.memoizedState,T.memoizedState=S===null?Vl(d):{baseLanes:S.baseLanes|d,cachePool:null},T.childLanes=o.childLanes&~d,l.memoizedState=Hl,v):(d=$m(o,l,v.children,d),l.memoizedState=null,d)}function pf(o,l){return l=lc({mode:"visible",children:l},o.mode,0,null),l.return=o,o.child=l}function $m(o,l,d,v){var S=o.child;return o=S.sibling,d=Cr(S,{mode:"visible",children:d}),!(l.mode&1)&&(d.lanes=v),d.return=l,d.sibling=null,o!==null&&(v=l.deletions,v===null?(l.deletions=[o],l.flags|=16):v.push(o)),l.child=d}function eg(o,l,d,v,S){var T=l.mode;o=o.child;var B=o.sibling,V={mode:"hidden",children:d};return!(T&1)&&l.child!==o?(d=l.child,d.childLanes=0,d.pendingProps=V,l.deletions=null):(d=Cr(o,V),d.subtreeFlags=o.subtreeFlags&14680064),B!==null?v=Cr(B,v):(v=ts(v,T,S,null),v.flags|=2),v.return=l,d.return=l,d.sibling=v,l.child=d,v}function Gl(o,l,d,v){return v!==null&&Qh(v),Ys(l,o.child,null,d),o=pf(l,l.pendingProps.children),o.flags|=2,l.memoizedState=null,o}function tg(o,l,d){o.lanes|=l;var v=o.alternate;v!==null&&(v.lanes|=l),Wh(o.return,l,d)}function mf(o,l,d,v,S){var T=o.memoizedState;T===null?o.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:v,tail:d,tailMode:S}:(T.isBackwards=l,T.rendering=null,T.renderingStartTime=0,T.last=v,T.tail=d,T.tailMode=S)}function ng(o,l,d){var v=l.pendingProps,S=v.revealOrder,T=v.tail;if(On(o,l,v.children,d),v=qt.current,v&2)v=v&1|2,l.flags|=128;else{if(o!==null&&o.flags&128)e:for(o=l.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&tg(o,d,l);else if(o.tag===19)tg(o,d,l);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===l)break e;for(;o.sibling===null;){if(o.return===null||o.return===l)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}v&=1}if(Qe(qt,v),!(l.mode&1))l.memoizedState=null;else switch(S){case"forwards":for(d=l.child,S=null;d!==null;)o=d.alternate,o!==null&&Il(o)===null&&(S=d),d=d.sibling;d=S,d===null?(S=l.child,l.child=null):(S=d.sibling,d.sibling=null),mf(l,!1,S,d,T);break;case"backwards":for(d=null,S=l.child,l.child=null;S!==null;){if(o=S.alternate,o!==null&&Il(o)===null){l.child=S;break}o=S.sibling,S.sibling=d,d=S,S=o}mf(l,!0,d,null,T);break;case"together":mf(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function nr(o,l,d){if(o!==null&&(l.dependencies=o.dependencies),Ks|=l.lanes,!(d&l.childLanes))return null;if(o!==null&&l.child!==o.child)throw Error(a(153));if(l.child!==null){for(o=l.child,d=Cr(o,o.pendingProps),l.child=d,d.return=l;o.sibling!==null;)o=o.sibling,d=d.sibling=Cr(o,o.pendingProps),d.return=l;d.sibling=null}return l.child}function dx(o,l,d){switch(l.tag){case 3:Jm(l),Xs();break;case 5:_m(l);break;case 1:Bt(l.type)&&Sr(l);break;case 4:$h(l,l.stateNode.containerInfo);break;case 10:im(l,l.type._context,l.memoizedProps.value);break;case 13:var v=l.memoizedState;if(v!==null)return v.dehydrated!==null?(Qe(qt,qt.current&1),l.flags|=128,null):d&l.child.childLanes?Qm(o,l,d):(Qe(qt,qt.current&1),o=nr(o,l,d),o!==null?o.sibling:null);Qe(qt,qt.current&1);break;case 19:if(v=(d&l.childLanes)!==0,o.flags&128){if(v)return ng(o,l,d);l.flags|=128}var S=l.memoizedState;if(S!==null&&(S.rendering=null,S.tail=null,S.lastEffect=null),Qe(qt,qt.current),v)break;return null;case 22:case 23:return l.lanes=0,qm(o,l,d)}return nr(o,l,d)}function px(o,l){switch(jh(l),l.tag){case 1:return Bt(l.type)&&xr(),o=l.flags,o&65536?(l.flags=o&-65537|128,l):null;case 3:return Zs(),wt(ht),wt(bt),nf(),o=l.flags,o&65536&&!(o&128)?(l.flags=o&-65537|128,l):null;case 5:return ef(l),null;case 13:if(wt(qt),o=l.memoizedState,o!==null&&o.dehydrated!==null){if(l.alternate===null)throw Error(a(340));Xs()}return o=l.flags,o&65536?(l.flags=o&-65537|128,l):null;case 19:return wt(qt),null;case 4:return Zs(),null;case 10:return Gh(l.type._context),null;case 22:case 23:return Df(),null;case 24:return null;default:return null}}var Wl=!1,Jr=!1,mx=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function Xl(o,l){var d=o.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(v){Xn(o,l,v)}else d.current=null}function gf(o,l,d){try{d()}catch(v){Xn(o,l,v)}}var ig=!1;function gx(o,l){for(oe(o.containerInfo),Ie=l;Ie!==null;)if(o=Ie,l=o.child,(o.subtreeFlags&1028)!==0&&l!==null)l.return=o,Ie=l;else for(;Ie!==null;){o=Ie;try{var d=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(d!==null){var v=d.memoizedProps,S=d.memoizedState,T=o.stateNode,B=T.getSnapshotBeforeUpdate(o.elementType===o.type?v:yi(o.type,v),S);T.__reactInternalSnapshotBeforeUpdate=B}break;case 3:tt&&Ce(o.stateNode.containerInfo);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(V){Xn(o,o.return,V)}if(l=o.sibling,l!==null){l.return=o.return,Ie=l;break}Ie=o.return}return d=ig,ig=!1,d}function Kr(o,l,d){var v=l.updateQueue;if(v=v!==null?v.lastEffect:null,v!==null){var S=v=v.next;do{if((S.tag&o)===o){var T=S.destroy;S.destroy=void 0,T!==void 0&&gf(l,d,T)}S=S.next}while(S!==v)}}function ea(o,l){if(l=l.updateQueue,l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&o)===o){var v=d.create;d.destroy=v()}d=d.next}while(d!==l)}}function vf(o){var l=o.ref;if(l!==null){var d=o.stateNode;switch(o.tag){case 5:o=j(d);break;default:o=d}typeof l=="function"?l(o):l.current=o}}function rg(o,l,d){if(Ii&&typeof Ii.onCommitFiberUnmount=="function")try{Ii.onCommitFiberUnmount(xl,l)}catch{}switch(l.tag){case 0:case 11:case 14:case 15:if(o=l.updateQueue,o!==null&&(o=o.lastEffect,o!==null)){var v=o=o.next;do{var S=v,T=S.destroy;S=S.tag,T!==void 0&&(S&2||S&4)&&gf(l,d,T),v=v.next}while(v!==o)}break;case 1:if(Xl(l,d),o=l.stateNode,typeof o.componentWillUnmount=="function")try{o.props=l.memoizedProps,o.state=l.memoizedState,o.componentWillUnmount()}catch(B){Xn(l,d,B)}break;case 5:Xl(l,d);break;case 4:tt?ug(o,l,d):pe&&pe&&(l=l.stateNode.containerInfo,d=Mt(l),yt(l,d))}}function sg(o,l,d){for(var v=l;;)if(rg(o,v,d),v.child===null||tt&&v.tag===4){if(v===l)break;for(;v.sibling===null;){if(v.return===null||v.return===l)return;v=v.return}v.sibling.return=v.return,v=v.sibling}else v.child.return=v,v=v.child}function og(o){var l=o.alternate;l!==null&&(o.alternate=null,og(l)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(l=o.stateNode,l!==null&&Ae(l)),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function ag(o){return o.tag===5||o.tag===3||o.tag===4}function lg(o){e:for(;;){for(;o.sibling===null;){if(o.return===null||ag(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue e;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function cg(o){if(tt){e:{for(var l=o.return;l!==null;){if(ag(l))break e;l=l.return}throw Error(a(160))}var d=l;switch(d.tag){case 5:l=d.stateNode,d.flags&32&&(me(l),d.flags&=-33),d=lg(o),yf(o,d,l);break;case 3:case 4:l=d.stateNode.containerInfo,d=lg(o),_f(o,d,l);break;default:throw Error(a(161))}}}function _f(o,l,d){var v=o.tag;if(v===5||v===6)o=o.stateNode,l?ke(d,o,l):At(d,o);else if(v!==4&&(o=o.child,o!==null))for(_f(o,l,d),o=o.sibling;o!==null;)_f(o,l,d),o=o.sibling}function yf(o,l,d){var v=o.tag;if(v===5||v===6)o=o.stateNode,l?ut(d,o,l):De(d,o);else if(v!==4&&(o=o.child,o!==null))for(yf(o,l,d),o=o.sibling;o!==null;)yf(o,l,d),o=o.sibling}function ug(o,l,d){for(var v=l,S=!1,T,B;;){if(!S){S=v.return;e:for(;;){if(S===null)throw Error(a(160));switch(T=S.stateNode,S.tag){case 5:B=!1;break e;case 3:T=T.containerInfo,B=!0;break e;case 4:T=T.containerInfo,B=!0;break e}S=S.return}S=!0}if(v.tag===5||v.tag===6)sg(o,v,d),B?k(T,v.stateNode):_t(T,v.stateNode);else if(v.tag===18)B?te(T,v.stateNode):ee(T,v.stateNode);else if(v.tag===4){if(v.child!==null){T=v.stateNode.containerInfo,B=!0,v.child.return=v,v=v.child;continue}}else if(rg(o,v,d),v.child!==null){v.child.return=v,v=v.child;continue}if(v===l)break;for(;v.sibling===null;){if(v.return===null||v.return===l)return;v=v.return,v.tag===4&&(S=!1)}v.sibling.return=v.return,v=v.sibling}}function xf(o,l){if(tt){switch(l.tag){case 0:case 11:case 14:case 15:Kr(3,l,l.return),ea(3,l),Kr(5,l,l.return);return;case 1:return;case 5:var d=l.stateNode;if(d!=null){var v=l.memoizedProps;o=o!==null?o.memoizedProps:v;var S=l.type,T=l.updateQueue;l.updateQueue=null,T!==null&&ct(d,T,S,o,v,l)}return;case 6:if(l.stateNode===null)throw Error(a(162));d=l.memoizedProps,xe(l.stateNode,o!==null?o.memoizedProps:d,d);return;case 3:O&&o!==null&&o.memoizedState.isDehydrated&&I(l.stateNode.containerInfo);return;case 12:return;case 13:Yl(l);return;case 19:Yl(l);return;case 17:return}throw Error(a(163))}switch(l.tag){case 0:case 11:case 14:case 15:Kr(3,l,l.return),ea(3,l),Kr(5,l,l.return);return;case 12:return;case 13:Yl(l);return;case 19:Yl(l);return;case 3:O&&o!==null&&o.memoizedState.isDehydrated&&I(l.stateNode.containerInfo);break;case 22:case 23:return}e:if(pe){switch(l.tag){case 1:case 5:case 6:break e;case 3:case 4:l=l.stateNode,yt(l.containerInfo,l.pendingChildren);break e}throw Error(a(163))}}function Yl(o){var l=o.updateQueue;if(l!==null){o.updateQueue=null;var d=o.stateNode;d===null&&(d=o.stateNode=new mx),l.forEach(function(v){var S=Ax.bind(null,o,v);d.has(v)||(d.add(v),v.then(S,S))})}}function vx(o,l){for(Ie=l;Ie!==null;){l=Ie;var d=l.deletions;if(d!==null)for(var v=0;v<d.length;v++){var S=d[v];try{var T=o;tt?ug(T,S,l):sg(T,S,l);var B=S.alternate;B!==null&&(B.return=null),S.return=null}catch(Ke){Xn(S,l,Ke)}}if(d=l.child,l.subtreeFlags&12854&&d!==null)d.return=l,Ie=d;else for(;Ie!==null;){l=Ie;try{var V=l.flags;if(V&32&&tt&&me(l.stateNode),V&512){var se=l.alternate;if(se!==null){var Se=se.ref;Se!==null&&(typeof Se=="function"?Se(null):Se.current=null)}}if(V&8192)switch(l.tag){case 13:if(l.memoizedState!==null){var We=l.alternate;(We===null||We.memoizedState===null)&&(bf=dn())}break;case 22:var ft=l.memoizedState!==null,nt=l.alternate,kt=nt!==null&&nt.memoizedState!==null;if(d=l,tt){e:if(v=d,S=ft,T=null,tt)for(var $e=v;;){if($e.tag===5){if(T===null){T=$e;var bn=$e.stateNode;S?z(bn):$($e.stateNode,$e.memoizedProps)}}else if($e.tag===6){if(T===null){var di=$e.stateNode;S?_e(di):de(di,$e.memoizedProps)}}else if(($e.tag!==22&&$e.tag!==23||$e.memoizedState===null||$e===v)&&$e.child!==null){$e.child.return=$e,$e=$e.child;continue}if($e===v)break;for(;$e.sibling===null;){if($e.return===null||$e.return===v)break e;T===$e&&(T=null),$e=$e.return}T===$e&&(T=null),$e.sibling.return=$e.return,$e=$e.sibling}}if(ft&&!kt&&d.mode&1){Ie=d;for(var Q=d.child;Q!==null;){for(d=Ie=Q;Ie!==null;){v=Ie;var X=v.child;switch(v.tag){case 0:case 11:case 14:case 15:Kr(4,v,v.return);break;case 1:Xl(v,v.return);var ne=v.stateNode;if(typeof ne.componentWillUnmount=="function"){var Ue=v.return;try{ne.props=v.memoizedProps,ne.state=v.memoizedState,ne.componentWillUnmount()}catch(Ke){Xn(v,Ue,Ke)}}break;case 5:Xl(v,v.return);break;case 22:if(v.memoizedState!==null){dg(d);continue}}X!==null?(X.return=v,Ie=X):dg(d)}Q=Q.sibling}}}switch(V&4102){case 2:cg(l),l.flags&=-3;break;case 6:cg(l),l.flags&=-3,xf(l.alternate,l);break;case 4096:l.flags&=-4097;break;case 4100:l.flags&=-4097,xf(l.alternate,l);break;case 4:xf(l.alternate,l)}}catch(Ke){Xn(l,l.return,Ke)}if(d=l.sibling,d!==null){d.return=l.return,Ie=d;break}Ie=l.return}}}function _x(o,l,d){Ie=o,hg(o)}function hg(o,l,d){for(var v=(o.mode&1)!==0;Ie!==null;){var S=Ie,T=S.child;if(S.tag===22&&v){var B=S.memoizedState!==null||Wl;if(!B){var V=S.alternate,se=V!==null&&V.memoizedState!==null||Jr;V=Wl;var Se=Jr;if(Wl=B,(Jr=se)&&!Se)for(Ie=S;Ie!==null;)B=Ie,se=B.child,B.tag===22&&B.memoizedState!==null?pg(S):se!==null?(se.return=B,Ie=se):pg(S);for(;T!==null;)Ie=T,hg(T),T=T.sibling;Ie=S,Wl=V,Jr=Se}fg(o)}else S.subtreeFlags&8772&&T!==null?(T.return=S,Ie=T):fg(o)}}function fg(o){for(;Ie!==null;){var l=Ie;if(l.flags&8772){var d=l.alternate;try{if(l.flags&8772)switch(l.tag){case 0:case 11:case 15:Jr||ea(5,l);break;case 1:var v=l.stateNode;if(l.flags&4&&!Jr)if(d===null)v.componentDidMount();else{var S=l.elementType===l.type?d.memoizedProps:yi(l.type,d.memoizedProps);v.componentDidUpdate(S,d.memoizedState,v.__reactInternalSnapshotBeforeUpdate)}var T=l.updateQueue;T!==null&&om(l,T,v);break;case 3:var B=l.updateQueue;if(B!==null){if(d=null,l.child!==null)switch(l.child.tag){case 5:d=j(l.child.stateNode);break;case 1:d=l.child.stateNode}om(l,B,d)}break;case 5:var V=l.stateNode;d===null&&l.flags&4&&Ne(V,l.type,l.memoizedProps,l);break;case 6:break;case 4:break;case 12:break;case 13:if(O&&l.memoizedState===null){var se=l.alternate;if(se!==null){var Se=se.memoizedState;if(Se!==null){var We=Se.dehydrated;We!==null&&W(We)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(a(163))}Jr||l.flags&512&&vf(l)}catch(ft){Xn(l,l.return,ft)}}if(l===o){Ie=null;break}if(d=l.sibling,d!==null){d.return=l.return,Ie=d;break}Ie=l.return}}function dg(o){for(;Ie!==null;){var l=Ie;if(l===o){Ie=null;break}var d=l.sibling;if(d!==null){d.return=l.return,Ie=d;break}Ie=l.return}}function pg(o){for(;Ie!==null;){var l=Ie;try{switch(l.tag){case 0:case 11:case 15:var d=l.return;try{ea(4,l)}catch(se){Xn(l,d,se)}break;case 1:var v=l.stateNode;if(typeof v.componentDidMount=="function"){var S=l.return;try{v.componentDidMount()}catch(se){Xn(l,S,se)}}var T=l.return;try{vf(l)}catch(se){Xn(l,T,se)}break;case 5:var B=l.return;try{vf(l)}catch(se){Xn(l,B,se)}}}catch(se){Xn(l,l.return,se)}if(l===o){Ie=null;break}var V=l.sibling;if(V!==null){V.return=l.return,Ie=V;break}Ie=l.return}}var ql=0,Zl=1,jl=2,Jl=3,Kl=4;if(typeof Symbol=="function"&&Symbol.for){var ta=Symbol.for;ql=ta("selector.component"),Zl=ta("selector.has_pseudo_class"),jl=ta("selector.role"),Jl=ta("selector.test_id"),Kl=ta("selector.text")}function Sf(o){var l=Te(o);if(l!=null){if(typeof l.memoizedProps["data-testname"]!="string")throw Error(a(364));return l}if(o=R(o),o===null)throw Error(a(362));return o.stateNode.current}function Mf(o,l){switch(l.$$typeof){case ql:if(o.type===l.value)return!0;break;case Zl:e:{l=l.value,o=[o,0];for(var d=0;d<o.length;){var v=o[d++],S=o[d++],T=l[S];if(v.tag!==5||!fe(v)){for(;T!=null&&Mf(v,T);)S++,T=l[S];if(S===l.length){l=!0;break e}else for(v=v.child;v!==null;)o.push(v,S),v=v.sibling}}l=!1}return l;case jl:if(o.tag===5&&he(o.stateNode,l.value))return!0;break;case Kl:if((o.tag===5||o.tag===6)&&(o=ae(o),o!==null&&0<=o.indexOf(l.value)))return!0;break;case Jl:if(o.tag===5&&(o=o.memoizedProps["data-testname"],typeof o=="string"&&o.toLowerCase()===l.value.toLowerCase()))return!0;break;default:throw Error(a(365))}return!1}function wf(o){switch(o.$$typeof){case ql:return"<"+(L(o.value)||"Unknown")+">";case Zl:return":has("+(wf(o)||"")+")";case jl:return'[role="'+o.value+'"]';case Kl:return'"'+o.value+'"';case Jl:return'[data-testname="'+o.value+'"]';default:throw Error(a(365))}}function mg(o,l){var d=[];o=[o,0];for(var v=0;v<o.length;){var S=o[v++],T=o[v++],B=l[T];if(S.tag!==5||!fe(S)){for(;B!=null&&Mf(S,B);)T++,B=l[T];if(T===l.length)d.push(S);else for(S=S.child;S!==null;)o.push(S,T),S=S.sibling}}return d}function Ef(o,l){if(!N)throw Error(a(363));o=Sf(o),o=mg(o,l),l=[],o=Array.from(o);for(var d=0;d<o.length;){var v=o[d++];if(v.tag===5)fe(v)||l.push(v.stateNode);else for(v=v.child;v!==null;)o.push(v),v=v.sibling}return l}var yx=Math.ceil,Ql=c.ReactCurrentDispatcher,Tf=c.ReactCurrentOwner,$t=c.ReactCurrentBatchConfig,Et=0,rn=null,sn=null,xn=0,ei=0,Js=Ft(0),cn=0,na=null,Ks=0,$l=0,Af=0,ia=null,Gn=null,bf=0,Cf=1/0;function Qs(){Cf=dn()+500}var ec=!1,Rf=null,Er=null,tc=!1,Tr=null,nc=0,ra=0,Pf=null,ic=-1,rc=0;function Fn(){return Et&6?dn():ic!==-1?ic:ic=dn()}function Ar(o){return o.mode&1?Et&2&&xn!==0?xn&-xn:tx.transition!==null?(rc===0&&(o=vl,vl<<=1,!(vl&4194240)&&(vl=64),rc=o),rc):(o=Dt,o!==0?o:ye()):1}function hi(o,l,d){if(50<ra)throw ra=0,Pf=null,Error(a(185));var v=sc(o,l);return v===null?null:(Ho(v,l,d),(!(Et&2)||v!==rn)&&(v===rn&&(!(Et&2)&&($l|=l),cn===4&&br(v,xn)),Wn(v,d),l===1&&Et===0&&!(o.mode&1)&&(Qs(),Sl&&Di())),v)}function sc(o,l){o.lanes|=l;var d=o.alternate;for(d!==null&&(d.lanes|=l),d=o,o=o.return;o!==null;)o.childLanes|=l,d=o.alternate,d!==null&&(d.childLanes|=l),d=o,o=o.return;return d.tag===3?d.stateNode:null}function Wn(o,l){var d=o.callbackNode;Yy(o,l);var v=yl(o,o===rn?xn:0);if(v===0)d!==null&&tm(d),o.callbackNode=null,o.callbackPriority=0;else if(l=v&-v,o.callbackPriority!==l){if(d!=null&&tm(d),l===1)o.tag===0?ex(vg.bind(null,o)):nm(vg.bind(null,o)),je?Le(function(){Et===0&&Di()}):Fh(Bh,Di),d=null;else{switch(em(v)){case 1:d=Bh;break;case 4:d=Jy;break;case 16:d=zh;break;case 536870912:d=Ky;break;default:d=zh}d=Ag(d,gg.bind(null,o))}o.callbackPriority=l,o.callbackNode=d}}function gg(o,l){if(ic=-1,rc=0,Et&6)throw Error(a(327));var d=o.callbackNode;if(es()&&o.callbackNode!==d)return null;var v=yl(o,o===rn?xn:0);if(v===0)return null;if(v&30||v&o.expiredLanes||l)l=oc(o,v);else{l=v;var S=Et;Et|=2;var T=xg();(rn!==o||xn!==l)&&(Qs(),Qr(o,l));do try{Mx();break}catch(V){yg(o,V)}while(!0);Vh(),Ql.current=T,Et=S,sn!==null?l=0:(rn=null,xn=0,l=cn)}if(l!==0){if(l===2&&(S=Uh(o),S!==0&&(v=S,l=If(o,S))),l===1)throw d=na,Qr(o,0),br(o,v),Wn(o,dn()),d;if(l===6)br(o,v);else{if(S=o.current.alternate,!(v&30)&&!xx(S)&&(l=oc(o,v),l===2&&(T=Uh(o),T!==0&&(v=T,l=If(o,T))),l===1))throw d=na,Qr(o,0),br(o,v),Wn(o,dn()),d;switch(o.finishedWork=S,o.finishedLanes=v,l){case 0:case 1:throw Error(a(345));case 2:$r(o,Gn);break;case 3:if(br(o,v),(v&130023424)===v&&(l=bf+500-dn(),10<l)){if(yl(o,0)!==0)break;if(S=o.suspendedLanes,(S&v)!==v){Fn(),o.pingedLanes|=o.suspendedLanes&S;break}o.timeoutHandle=we($r.bind(null,o,Gn),l);break}$r(o,Gn);break;case 4:if(br(o,v),(v&4194240)===v)break;for(l=o.eventTimes,S=-1;0<v;){var B=31-Nn(v);T=1<<B,B=l[B],B>S&&(S=B),v&=~T}if(v=S,v=dn()-v,v=(120>v?120:480>v?480:1080>v?1080:1920>v?1920:3e3>v?3e3:4320>v?4320:1960*yx(v/1960))-v,10<v){o.timeoutHandle=we($r.bind(null,o,Gn),v);break}$r(o,Gn);break;case 5:$r(o,Gn);break;default:throw Error(a(329))}}}return Wn(o,dn()),o.callbackNode===d?gg.bind(null,o):null}function If(o,l){var d=ia;return o.current.memoizedState.isDehydrated&&(Qr(o,l).flags|=256),o=oc(o,l),o!==2&&(l=Gn,Gn=d,l!==null&&Lf(l)),o}function Lf(o){Gn===null?Gn=o:Gn.push.apply(Gn,o)}function xx(o){for(var l=o;;){if(l.flags&16384){var d=l.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var v=0;v<d.length;v++){var S=d[v],T=S.getSnapshot;S=S.value;try{if(!Li(T(),S))return!1}catch{return!1}}}if(d=l.child,l.subtreeFlags&16384&&d!==null)d.return=l,l=d;else{if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function br(o,l){for(l&=~Af,l&=~$l,o.suspendedLanes|=l,o.pingedLanes&=~l,o=o.expirationTimes;0<l;){var d=31-Nn(l),v=1<<d;o[d]=-1,l&=~v}}function vg(o){if(Et&6)throw Error(a(327));es();var l=yl(o,0);if(!(l&1))return Wn(o,dn()),null;var d=oc(o,l);if(o.tag!==0&&d===2){var v=Uh(o);v!==0&&(l=v,d=If(o,v))}if(d===1)throw d=na,Qr(o,0),br(o,l),Wn(o,dn()),d;if(d===6)throw Error(a(345));return o.finishedWork=o.current.alternate,o.finishedLanes=l,$r(o,Gn),Wn(o,dn()),null}function _g(o){Tr!==null&&Tr.tag===0&&!(Et&6)&&es();var l=Et;Et|=1;var d=$t.transition,v=Dt;try{if($t.transition=null,Dt=1,o)return o()}finally{Dt=v,$t.transition=d,Et=l,!(Et&6)&&Di()}}function Df(){ei=Js.current,wt(Js)}function Qr(o,l){o.finishedWork=null,o.finishedLanes=0;var d=o.timeoutHandle;if(d!==et&&(o.timeoutHandle=et,st(d)),sn!==null)for(d=sn.return;d!==null;){var v=d;switch(jh(v),v.tag){case 1:v=v.type.childContextTypes,v!=null&&xr();break;case 3:Zs(),wt(ht),wt(bt),nf();break;case 5:ef(v);break;case 4:Zs();break;case 13:wt(qt);break;case 19:wt(qt);break;case 10:Gh(v.type._context);break;case 22:case 23:Df()}d=d.return}if(rn=o,sn=o=Cr(o.current,null),xn=ei=l,cn=0,na=null,Af=$l=Ks=0,Gn=ia=null,Ui!==null){for(l=0;l<Ui.length;l++)if(d=Ui[l],v=d.interleaved,v!==null){d.interleaved=null;var S=v.next,T=d.pending;if(T!==null){var B=T.next;T.next=S,v.next=B}d.pending=v}Ui=null}return o}function yg(o,l){do{var d=sn;try{if(Vh(),Ll.current=Bl,Dl){for(var v=jt.memoizedState;v!==null;){var S=v.queue;S!==null&&(S.pending=null),v=v.next}Dl=!1}if(js=0,pn=En=jt=null,qo=!1,Zo=0,Tf.current=null,d===null||d.return===null){cn=1,na=l,sn=null;break}e:{var T=o,B=d.return,V=d,se=l;if(l=xn,V.flags|=32768,se!==null&&typeof se=="object"&&typeof se.then=="function"){var Se=se,We=V,ft=We.tag;if(!(We.mode&1)&&(ft===0||ft===11||ft===15)){var nt=We.alternate;nt?(We.updateQueue=nt.updateQueue,We.memoizedState=nt.memoizedState,We.lanes=nt.lanes):(We.updateQueue=null,We.memoizedState=null)}var kt=km(B);if(kt!==null){kt.flags&=-257,Hm(kt,B,V,T,l),kt.mode&1&&zm(T,Se,l),l=kt,se=Se;var $e=l.updateQueue;if($e===null){var bn=new Set;bn.add(se),l.updateQueue=bn}else $e.add(se);break e}else{if(!(l&1)){zm(T,Se,l),Uf();break e}se=Error(a(426))}}else if(Xt&&V.mode&1){var di=km(B);if(di!==null){!(di.flags&65536)&&(di.flags|=256),Hm(di,B,V,T,l),Qh(se);break e}}T=se,cn!==4&&(cn=2),ia===null?ia=[T]:ia.push(T),se=uf(se,V),V=B;do{switch(V.tag){case 3:V.flags|=65536,l&=-l,V.lanes|=l;var Q=Fm(V,se,l);sm(V,Q);break e;case 1:T=se;var X=V.type,ne=V.stateNode;if(!(V.flags&128)&&(typeof X.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(Er===null||!Er.has(ne)))){V.flags|=65536,l&=-l,V.lanes|=l;var Ue=Bm(V,T,l);sm(V,Ue);break e}}V=V.return}while(V!==null)}Mg(d)}catch(Ke){l=Ke,sn===d&&d!==null&&(sn=d=d.return);continue}break}while(!0)}function xg(){var o=Ql.current;return Ql.current=Bl,o===null?Bl:o}function Uf(){(cn===0||cn===3||cn===2)&&(cn=4),rn===null||!(Ks&268435455)&&!($l&268435455)||br(rn,xn)}function oc(o,l){var d=Et;Et|=2;var v=xg();rn===o&&xn===l||Qr(o,l);do try{Sx();break}catch(S){yg(o,S)}while(!0);if(Vh(),Et=d,Ql.current=v,sn!==null)throw Error(a(261));return rn=null,xn=0,cn}function Sx(){for(;sn!==null;)Sg(sn)}function Mx(){for(;sn!==null&&!Zy();)Sg(sn)}function Sg(o){var l=Tg(o.alternate,o,ei);o.memoizedProps=o.pendingProps,l===null?Mg(o):sn=l,Tf.current=null}function Mg(o){var l=o;do{var d=l.alternate;if(o=l.return,l.flags&32768){if(d=px(d,l),d!==null){d.flags&=32767,sn=d;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{cn=6,sn=null;return}}else if(d=hx(d,l,ei),d!==null){sn=d;return}if(l=l.sibling,l!==null){sn=l;return}sn=l=o}while(l!==null);cn===0&&(cn=5)}function $r(o,l){var d=Dt,v=$t.transition;try{$t.transition=null,Dt=1,wx(o,l,d)}finally{$t.transition=v,Dt=d}return null}function wx(o,l,d){do es();while(Tr!==null);if(Et&6)throw Error(a(327));var v=o.finishedWork,S=o.finishedLanes;if(v===null)return null;if(o.finishedWork=null,o.finishedLanes=0,v===o.current)throw Error(a(177));o.callbackNode=null,o.callbackPriority=0;var T=v.lanes|v.childLanes;if(qy(o,T),o===rn&&(sn=rn=null,xn=0),!(v.subtreeFlags&2064)&&!(v.flags&2064)||tc||(tc=!0,Ag(zh,function(){return es(),null})),T=(v.flags&15990)!==0,v.subtreeFlags&15990||T){T=$t.transition,$t.transition=null;var B=Dt;Dt=1;var V=Et;Et|=4,Tf.current=null,gx(o,v),vx(o,v),ie(o.containerInfo),o.current=v,_x(v),jy(),Et=V,Dt=B,$t.transition=T}else o.current=v;if(tc&&(tc=!1,Tr=o,nc=S),T=o.pendingLanes,T===0&&(Er=null),Qy(v.stateNode),Wn(o,dn()),l!==null)for(d=o.onRecoverableError,v=0;v<l.length;v++)d(l[v]);if(ec)throw ec=!1,o=Rf,Rf=null,o;return nc&1&&o.tag!==0&&es(),T=o.pendingLanes,T&1?o===Pf?ra++:(ra=0,Pf=o):ra=0,Di(),null}function es(){if(Tr!==null){var o=em(nc),l=$t.transition,d=Dt;try{if($t.transition=null,Dt=16>o?16:o,Tr===null)var v=!1;else{if(o=Tr,Tr=null,nc=0,Et&6)throw Error(a(331));var S=Et;for(Et|=4,Ie=o.current;Ie!==null;){var T=Ie,B=T.child;if(Ie.flags&16){var V=T.deletions;if(V!==null){for(var se=0;se<V.length;se++){var Se=V[se];for(Ie=Se;Ie!==null;){var We=Ie;switch(We.tag){case 0:case 11:case 15:Kr(8,We,T)}var ft=We.child;if(ft!==null)ft.return=We,Ie=ft;else for(;Ie!==null;){We=Ie;var nt=We.sibling,kt=We.return;if(og(We),We===Se){Ie=null;break}if(nt!==null){nt.return=kt,Ie=nt;break}Ie=kt}}}var $e=T.alternate;if($e!==null){var bn=$e.child;if(bn!==null){$e.child=null;do{var di=bn.sibling;bn.sibling=null,bn=di}while(bn!==null)}}Ie=T}}if(T.subtreeFlags&2064&&B!==null)B.return=T,Ie=B;else e:for(;Ie!==null;){if(T=Ie,T.flags&2048)switch(T.tag){case 0:case 11:case 15:Kr(9,T,T.return)}var Q=T.sibling;if(Q!==null){Q.return=T.return,Ie=Q;break e}Ie=T.return}}var X=o.current;for(Ie=X;Ie!==null;){B=Ie;var ne=B.child;if(B.subtreeFlags&2064&&ne!==null)ne.return=B,Ie=ne;else e:for(B=X;Ie!==null;){if(V=Ie,V.flags&2048)try{switch(V.tag){case 0:case 11:case 15:ea(9,V)}}catch(Ke){Xn(V,V.return,Ke)}if(V===B){Ie=null;break e}var Ue=V.sibling;if(Ue!==null){Ue.return=V.return,Ie=Ue;break e}Ie=V.return}}if(Et=S,Di(),Ii&&typeof Ii.onPostCommitFiberRoot=="function")try{Ii.onPostCommitFiberRoot(xl,o)}catch{}v=!0}return v}finally{Dt=d,$t.transition=l}}return!1}function wg(o,l,d){l=uf(d,l),l=Fm(o,l,1),wr(o,l),l=Fn(),o=sc(o,1),o!==null&&(Ho(o,1,l),Wn(o,l))}function Xn(o,l,d){if(o.tag===3)wg(o,o,d);else for(;l!==null;){if(l.tag===3){wg(l,o,d);break}else if(l.tag===1){var v=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof v.componentDidCatch=="function"&&(Er===null||!Er.has(v))){o=uf(d,o),o=Bm(l,o,1),wr(l,o),o=Fn(),l=sc(l,1),l!==null&&(Ho(l,1,o),Wn(l,o));break}}l=l.return}}function Ex(o,l,d){var v=o.pingCache;v!==null&&v.delete(l),l=Fn(),o.pingedLanes|=o.suspendedLanes&d,rn===o&&(xn&d)===d&&(cn===4||cn===3&&(xn&130023424)===xn&&500>dn()-bf?Qr(o,0):Af|=d),Wn(o,l)}function Eg(o,l){l===0&&(o.mode&1?(l=_l,_l<<=1,!(_l&130023424)&&(_l=4194304)):l=1);var d=Fn();o=sc(o,l),o!==null&&(Ho(o,l,d),Wn(o,d))}function Tx(o){var l=o.memoizedState,d=0;l!==null&&(d=l.retryLane),Eg(o,d)}function Ax(o,l){var d=0;switch(o.tag){case 13:var v=o.stateNode,S=o.memoizedState;S!==null&&(d=S.retryLane);break;case 19:v=o.stateNode;break;default:throw Error(a(314))}v!==null&&v.delete(l),Eg(o,d)}var Tg;Tg=function(o,l,d){if(o!==null)if(o.memoizedProps!==l.pendingProps||ht.current)$n=!0;else{if(!(o.lanes&d)&&!(l.flags&128))return $n=!1,dx(o,l,d);$n=!!(o.flags&131072)}else $n=!1,Xt&&l.flags&1048576&&hm(l,Rl,l.index);switch(l.lanes=0,l.tag){case 2:var v=l.type;o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),o=l.pendingProps;var S=Jn(l,bt.current);Vs(l,d),S=sf(null,l,v,o,S,d);var T=of();return l.flags|=1,typeof S=="object"&&S!==null&&typeof S.render=="function"&&S.$$typeof===void 0?(l.tag=1,l.memoizedState=null,l.updateQueue=null,Bt(v)?(T=!0,Sr(l)):T=!1,l.memoizedState=S.state!==null&&S.state!==void 0?S.state:null,Xh(l),S.updater=bl,l.stateNode=S,S._reactInternals=l,qh(l,v,o,d),l=df(null,l,v,!0,T,d)):(l.tag=0,Xt&&T&&Zh(l),On(null,l,S,d),l=l.child),l;case 16:v=l.elementType;e:{switch(o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),o=l.pendingProps,S=v._init,v=S(v._payload),l.type=v,S=l.tag=Cx(v),o=yi(v,o),S){case 0:l=ff(null,l,v,o,d);break e;case 1:l=jm(null,l,v,o,d);break e;case 11:l=Wm(null,l,v,o,d);break e;case 14:l=Xm(null,l,v,yi(v.type,o),d);break e}throw Error(a(306,v,""))}return l;case 0:return v=l.type,S=l.pendingProps,S=l.elementType===v?S:yi(v,S),ff(o,l,v,S,d);case 1:return v=l.type,S=l.pendingProps,S=l.elementType===v?S:yi(v,S),jm(o,l,v,S,d);case 3:e:{if(Jm(l),o===null)throw Error(a(387));v=l.pendingProps,T=l.memoizedState,S=T.element,rm(o,l),Al(l,v,null,d);var B=l.memoizedState;if(v=B.element,O&&T.isDehydrated)if(T={element:v,isDehydrated:!1,cache:B.cache,transitions:B.transitions},l.updateQueue.baseState=T,l.memoizedState=T,l.flags&256){S=Error(a(423)),l=Km(o,l,v,d,S);break e}else if(v!==S){S=Error(a(424)),l=Km(o,l,v,d,S);break e}else for(O&&(Qn=ks(l.stateNode.containerInfo),Kn=l,Xt=!0,xi=null,Vo=!1),d=vm(l,null,v,d),l.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(Xs(),v===S){l=nr(o,l,d);break e}On(o,l,v,d)}l=l.child}return l;case 5:return _m(l),o===null&&Kh(l),v=l.type,S=l.pendingProps,T=o!==null?o.memoizedProps:null,B=S.children,ge(v,S)?B=null:T!==null&&ge(v,T)&&(l.flags|=32),Zm(o,l),On(o,l,B,d),l.child;case 6:return o===null&&Kh(l),null;case 13:return Qm(o,l,d);case 4:return $h(l,l.stateNode.containerInfo),v=l.pendingProps,o===null?l.child=Ys(l,null,v,d):On(o,l,v,d),l.child;case 11:return v=l.type,S=l.pendingProps,S=l.elementType===v?S:yi(v,S),Wm(o,l,v,S,d);case 7:return On(o,l,l.pendingProps,d),l.child;case 8:return On(o,l,l.pendingProps.children,d),l.child;case 12:return On(o,l,l.pendingProps.children,d),l.child;case 10:e:{if(v=l.type._context,S=l.pendingProps,T=l.memoizedProps,B=S.value,im(l,v,B),T!==null)if(Li(T.value,B)){if(T.children===S.children&&!ht.current){l=nr(o,l,d);break e}}else for(T=l.child,T!==null&&(T.return=l);T!==null;){var V=T.dependencies;if(V!==null){B=T.child;for(var se=V.firstContext;se!==null;){if(se.context===v){if(T.tag===1){se=Qi(-1,d&-d),se.tag=2;var Se=T.updateQueue;if(Se!==null){Se=Se.shared;var We=Se.pending;We===null?se.next=se:(se.next=We.next,We.next=se),Se.pending=se}}T.lanes|=d,se=T.alternate,se!==null&&(se.lanes|=d),Wh(T.return,d,l),V.lanes|=d;break}se=se.next}}else if(T.tag===10)B=T.type===l.type?null:T.child;else if(T.tag===18){if(B=T.return,B===null)throw Error(a(341));B.lanes|=d,V=B.alternate,V!==null&&(V.lanes|=d),Wh(B,d,l),B=T.sibling}else B=T.child;if(B!==null)B.return=T;else for(B=T;B!==null;){if(B===l){B=null;break}if(T=B.sibling,T!==null){T.return=B.return,B=T;break}B=B.return}T=B}On(o,l,S.children,d),l=l.child}return l;case 9:return S=l.type,v=l.pendingProps.children,Vs(l,d),S=oi(S),v=v(S),l.flags|=1,On(o,l,v,d),l.child;case 14:return v=l.type,S=yi(v,l.pendingProps),S=yi(v.type,S),Xm(o,l,v,S,d);case 15:return Ym(o,l,l.type,l.pendingProps,d);case 17:return v=l.type,S=l.pendingProps,S=l.elementType===v?S:yi(v,S),o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),l.tag=1,Bt(v)?(o=!0,Sr(l)):o=!1,Vs(l,d),cm(l,v,S),qh(l,v,S,d),df(null,l,v,!0,o,d);case 19:return ng(o,l,d);case 22:return qm(o,l,d)}throw Error(a(156,l.tag))};function Ag(o,l){return Fh(o,l)}function bx(o,l,d,v){this.tag=o,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=v,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(o,l,d,v){return new bx(o,l,d,v)}function Nf(o){return o=o.prototype,!(!o||!o.isReactComponent)}function Cx(o){if(typeof o=="function")return Nf(o)?1:0;if(o!=null){if(o=o.$$typeof,o===M)return 11;if(o===E)return 14}return 2}function Cr(o,l){var d=o.alternate;return d===null?(d=fi(o.tag,l,o.key,o.mode),d.elementType=o.elementType,d.type=o.type,d.stateNode=o.stateNode,d.alternate=o,o.alternate=d):(d.pendingProps=l,d.type=o.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=o.flags&14680064,d.childLanes=o.childLanes,d.lanes=o.lanes,d.child=o.child,d.memoizedProps=o.memoizedProps,d.memoizedState=o.memoizedState,d.updateQueue=o.updateQueue,l=o.dependencies,d.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},d.sibling=o.sibling,d.index=o.index,d.ref=o.ref,d}function ac(o,l,d,v,S,T){var B=2;if(v=o,typeof o=="function")Nf(o)&&(B=1);else if(typeof o=="string")B=5;else e:switch(o){case f:return ts(d.children,S,T,l);case p:B=8,S|=8;break;case m:return o=fi(12,d,l,S|2),o.elementType=m,o.lanes=T,o;case x:return o=fi(13,d,l,S),o.elementType=x,o.lanes=T,o;case _:return o=fi(19,d,l,S),o.elementType=_,o.lanes=T,o;case b:return lc(d,S,T,l);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case g:B=10;break e;case y:B=9;break e;case M:B=11;break e;case E:B=14;break e;case w:B=16,v=null;break e}throw Error(a(130,o==null?o:typeof o,""))}return l=fi(B,d,l,S),l.elementType=o,l.type=v,l.lanes=T,l}function ts(o,l,d,v){return o=fi(7,o,v,l),o.lanes=d,o}function lc(o,l,d,v){return o=fi(22,o,v,l),o.elementType=b,o.lanes=d,o.stateNode={},o}function Of(o,l,d){return o=fi(6,o,null,l),o.lanes=d,o}function Ff(o,l,d){return l=fi(4,o.children!==null?o.children:[],o.key,l),l.lanes=d,l.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},l}function Rx(o,l,d,v,S){this.tag=l,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=et,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nh(0),this.expirationTimes=Nh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nh(0),this.identifierPrefix=v,this.onRecoverableError=S,O&&(this.mutableSourceEagerHydrationData=null)}function bg(o,l,d,v,S,T,B,V,se){return o=new Rx(o,l,d,V,se),l===1?(l=1,T===!0&&(l|=8)):l=0,T=fi(3,null,null,l),o.current=T,T.stateNode=o,T.memoizedState={element:v,isDehydrated:d,cache:null,transitions:null},Xh(T),o}function Cg(o){if(!o)return Xe;o=o._reactInternals;e:{if(G(o)!==o||o.tag!==1)throw Error(a(170));var l=o;do{switch(l.tag){case 3:l=l.stateNode.context;break e;case 1:if(Bt(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break e}}l=l.return}while(l!==null);throw Error(a(171))}if(o.tag===1){var d=o.type;if(Bt(d))return _i(o,d,l)}return l}function Rg(o){var l=o._reactInternals;if(l===void 0)throw typeof o.render=="function"?Error(a(188)):(o=Object.keys(o).join(","),Error(a(268,o)));return o=Y(l),o===null?null:o.stateNode}function Pg(o,l){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var d=o.retryLane;o.retryLane=d!==0&&d<l?d:l}}function Bf(o,l){Pg(o,l),(o=o.alternate)&&Pg(o,l)}function Px(o){return o=Y(o),o===null?null:o.stateNode}function Ix(){return null}return t.attemptContinuousHydration=function(o){if(o.tag===13){var l=Fn();hi(o,134217728,l),Bf(o,134217728)}},t.attemptHydrationAtCurrentPriority=function(o){if(o.tag===13){var l=Fn(),d=Ar(o);hi(o,d,l),Bf(o,d)}},t.attemptSynchronousHydration=function(o){switch(o.tag){case 3:var l=o.stateNode;if(l.current.memoizedState.isDehydrated){var d=ko(l.pendingLanes);d!==0&&(Oh(l,d|1),Wn(l,dn()),!(Et&6)&&(Qs(),Di()))}break;case 13:var v=Fn();_g(function(){return hi(o,1,v)}),Bf(o,1)}},t.batchedUpdates=function(o,l){var d=Et;Et|=1;try{return o(l)}finally{Et=d,Et===0&&(Qs(),Sl&&Di())}},t.createComponentSelector=function(o){return{$$typeof:ql,value:o}},t.createContainer=function(o,l,d,v,S,T,B){return bg(o,l,!1,null,d,v,S,T,B)},t.createHasPseudoClassSelector=function(o){return{$$typeof:Zl,value:o}},t.createHydrationContainer=function(o,l,d,v,S,T,B,V,se){return o=bg(d,v,!0,o,S,T,B,V,se),o.context=Cg(null),d=o.current,v=Fn(),S=Ar(d),T=Qi(v,S),T.callback=l??null,wr(d,T),o.current.lanes=S,Ho(o,S,v),Wn(o,v),o},t.createPortal=function(o,l,d){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:v==null?null:""+v,children:o,containerInfo:l,implementation:d}},t.createRoleSelector=function(o){return{$$typeof:jl,value:o}},t.createTestNameSelector=function(o){return{$$typeof:Jl,value:o}},t.createTextSelector=function(o){return{$$typeof:Kl,value:o}},t.deferredUpdates=function(o){var l=Dt,d=$t.transition;try{return $t.transition=null,Dt=16,o()}finally{Dt=l,$t.transition=d}},t.discreteUpdates=function(o,l,d,v,S){var T=Dt,B=$t.transition;try{return $t.transition=null,Dt=1,o(l,d,v,S)}finally{Dt=T,$t.transition=B,Et===0&&Qs()}},t.findAllNodes=Ef,t.findBoundingRects=function(o,l){if(!N)throw Error(a(363));l=Ef(o,l),o=[];for(var d=0;d<l.length;d++)o.push(J(l[d]));for(l=o.length-1;0<l;l--){d=o[l];for(var v=d.x,S=v+d.width,T=d.y,B=T+d.height,V=l-1;0<=V;V--)if(l!==V){var se=o[V],Se=se.x,We=Se+se.width,ft=se.y,nt=ft+se.height;if(v>=Se&&T>=ft&&S<=We&&B<=nt){o.splice(l,1);break}else if(v!==Se||d.width!==se.width||nt<T||ft>B){if(!(T!==ft||d.height!==se.height||We<v||Se>S)){Se>v&&(se.width+=Se-v,se.x=v),We<S&&(se.width=S-Se),o.splice(l,1);break}}else{ft>T&&(se.height+=ft-T,se.y=T),nt<B&&(se.height=B-ft),o.splice(l,1);break}}}return o},t.findHostInstance=Rg,t.findHostInstanceWithNoPortals=function(o){return o=C(o),o=o!==null?K(o):null,o===null?null:o.stateNode},t.findHostInstanceWithWarning=function(o){return Rg(o)},t.flushControlled=function(o){var l=Et;Et|=1;var d=$t.transition,v=Dt;try{$t.transition=null,Dt=1,o()}finally{Dt=v,$t.transition=d,Et=l,Et===0&&(Qs(),Di())}},t.flushPassiveEffects=es,t.flushSync=_g,t.focusWithin=function(o,l){if(!N)throw Error(a(363));for(o=Sf(o),l=mg(o,l),l=Array.from(l),o=0;o<l.length;){var d=l[o++];if(!fe(d)){if(d.tag===5&&qe(d.stateNode))return!0;for(d=d.child;d!==null;)l.push(d),d=d.sibling}}return!1},t.getCurrentUpdatePriority=function(){return Dt},t.getFindAllNodesFailureDescription=function(o,l){if(!N)throw Error(a(363));var d=0,v=[];o=[Sf(o),0];for(var S=0;S<o.length;){var T=o[S++],B=o[S++],V=l[B];if((T.tag!==5||!fe(T))&&(Mf(T,V)&&(v.push(wf(V)),B++,B>d&&(d=B)),B<l.length))for(T=T.child;T!==null;)o.push(T,B),T=T.sibling}if(d<l.length){for(o=[];d<l.length;d++)o.push(wf(l[d]));return`findAllNodes was able to match part of the selector:
  `+(v.join(" > ")+`

No matching component was found for:
  `)+o.join(" > ")}return null},t.getPublicRootInstance=function(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return j(o.child.stateNode);default:return o.child.stateNode}},t.injectIntoDevTools=function(o){if(o={bundleType:o.bundleType,version:o.version,rendererPackageName:o.rendererPackageName,rendererConfig:o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:c.ReactCurrentDispatcher,findHostInstanceByFiber:Px,findFiberByHostInstance:o.findFiberByHostInstance||Ix,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")o=!1;else{var l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(l.isDisabled||!l.supportsFiber)o=!0;else{try{xl=l.inject(o),Ii=l}catch{}o=!!l.checkDCE}}return o},t.isAlreadyRendering=function(){return!1},t.observeVisibleRects=function(o,l,d,v){if(!N)throw Error(a(363));o=Ef(o,l);var S=be(o,d,v).disconnect;return{disconnect:function(){S()}}},t.registerMutableSourceForHydration=function(o,l){var d=l._getVersion;d=d(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,d]:o.mutableSourceEagerHydrationData.push(l,d)},t.runWithPriority=function(o,l){var d=Dt;try{return Dt=o,l()}finally{Dt=d}},t.shouldError=function(){return null},t.shouldSuspend=function(){return!1},t.updateContainer=function(o,l,d,v){var S=l.current,T=Fn(),B=Ar(S);return d=Cg(d),l.context===null?l.context=d:l.pendingContext=d,l=Qi(T,B),l.payload={element:o},v=v===void 0?null:v,v!==null&&(l.callback=v),wr(S,l),o=hi(S,B,T),o!==null&&Tl(o,S,B),B},t};Ey.exports=Xb;var Yb=Ey.exports;const qb=Dx(Yb),Kp={},Zb=r=>void Object.assign(Kp,r);function jb(r,e){function t(f,{args:p=[],attach:m,...g},y){let M=`${f[0].toUpperCase()}${f.slice(1)}`,x;if(f==="primitive"){if(g.object===void 0)throw new Error("R3F: Primitives without 'object' are invalid!");const _=g.object;x=xo(_,{type:f,root:y,attach:m,primitive:!0})}else{const _=Kp[M];if(!_)throw new Error(`R3F: ${M} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(!Array.isArray(p))throw new Error("R3F: The args prop must be an array!");x=xo(new _(...p),{type:f,root:y,attach:m,memoizedProps:{args:p}})}return x.__r3f.attach===void 0&&(x.isBufferGeometry?x.__r3f.attach="geometry":x.isMaterial&&(x.__r3f.attach="material")),M!=="inject"&&Pd(x,g),x}function n(f,p){let m=!1;if(p){var g,y;(g=p.__r3f)!=null&&g.attach?Rd(f,p,p.__r3f.attach):p.isObject3D&&f.isObject3D&&(f.add(p),m=!0),m||(y=f.__r3f)==null||y.objects.push(p),p.__r3f||xo(p,{}),p.__r3f.parent=f,rp(p),So(p)}}function i(f,p,m){let g=!1;if(p){var y,M;if((y=p.__r3f)!=null&&y.attach)Rd(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){p.parent=f,p.dispatchEvent({type:"added"}),f.dispatchEvent({type:"childadded",child:p});const x=f.children.filter(E=>E!==p),_=x.indexOf(m);f.children=[...x.slice(0,_),p,...x.slice(_)],g=!0}g||(M=f.__r3f)==null||M.objects.push(p),p.__r3f||xo(p,{}),p.__r3f.parent=f,rp(p),So(p)}}function s(f,p,m=!1){f&&[...f].forEach(g=>a(p,g,m))}function a(f,p,m){if(p){var g,y,M;if(p.__r3f&&(p.__r3f.parent=null),(g=f.__r3f)!=null&&g.objects&&(f.__r3f.objects=f.__r3f.objects.filter(b=>b!==p)),(y=p.__r3f)!=null&&y.attach)dv(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){var x;f.remove(p),(x=p.__r3f)!=null&&x.root&&nC(cu(p),p)}const E=(M=p.__r3f)==null?void 0:M.primitive,w=!E&&(m===void 0?p.dispose!==null:m);if(!E){var _;s((_=p.__r3f)==null?void 0:_.objects,p,w),s(p.children,p,w)}if(delete p.__r3f,w&&p.dispose&&p.type!=="Scene"){const b=()=>{try{p.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT>"u"?np.unstable_scheduleCallback(np.unstable_IdlePriority,b):b()}So(f)}}function c(f,p,m,g){var y;const M=(y=f.__r3f)==null?void 0:y.parent;if(!M)return;const x=t(p,m,f.__r3f.root);if(f.children){for(const _ of f.children)_.__r3f&&n(x,_);f.children=f.children.filter(_=>!_.__r3f)}f.__r3f.objects.forEach(_=>n(x,_)),f.__r3f.objects=[],f.__r3f.autoRemovedBeforeAppend||a(M,f),x.parent&&(x.__r3f.autoRemovedBeforeAppend=!0),n(M,x),x.raycast&&x.__r3f.eventCount&&cu(x).getState().internal.interaction.push(x),[g,g.alternate].forEach(_=>{_!==null&&(_.stateNode=x,_.ref&&(typeof _.ref=="function"?_.ref(x):_.ref.current=x))})}const u=()=>{};return{reconciler:qb({createInstance:t,removeChild:a,appendChild:n,appendInitialChild:n,insertBefore:i,supportsMutation:!0,isPrimaryRenderer:!1,supportsPersistence:!1,supportsHydration:!1,noTimeout:-1,appendChildToContainer:(f,p)=>{if(!p)return;const m=f.getState().scene;m.__r3f&&(m.__r3f.root=f,n(m,p))},removeChildFromContainer:(f,p)=>{p&&a(f.getState().scene,p)},insertInContainerBefore:(f,p,m)=>{if(!p||!m)return;const g=f.getState().scene;g.__r3f&&i(g,p,m)},getRootHostContext:()=>null,getChildHostContext:f=>f,finalizeInitialChildren(f){var p;return!!((p=f==null?void 0:f.__r3f)!=null?p:{}).handlers},prepareUpdate(f,p,m,g){var y;if(((y=f==null?void 0:f.__r3f)!=null?y:{}).primitive&&g.object&&g.object!==f)return[!0];{const{args:x=[],children:_,...E}=g,{args:w=[],children:b,...U}=m;if(!Array.isArray(x))throw new Error("R3F: the args prop must be an array!");if(x.some((L,F)=>L!==w[F]))return[!0];const P=Dy(f,E,U,!0);return P.changes.length?[!1,P]:null}},commitUpdate(f,[p,m],g,y,M,x){p?c(f,g,M,x):Pd(f,m)},commitMount(f,p,m,g){var y;const M=(y=f.__r3f)!=null?y:{};f.raycast&&M.handlers&&M.eventCount&&cu(f).getState().internal.interaction.push(f)},getPublicInstance:f=>f,prepareForCommit:()=>null,preparePortalMount:f=>xo(f.getState().scene),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance(f){var p;const{attach:m,parent:g}=(p=f.__r3f)!=null?p:{};m&&g&&dv(g,f,m),f.isObject3D&&(f.visible=!1),So(f)},unhideInstance(f,p){var m;const{attach:g,parent:y}=(m=f.__r3f)!=null?m:{};g&&y&&Rd(y,f,g),(f.isObject3D&&p.visible==null||p.visible)&&(f.visible=!0),So(f)},createTextInstance:u,hideTextInstance:u,unhideTextInstance:u,getCurrentEventPriority:()=>e?e():bo.DefaultEventPriority,beforeActiveInstanceBlur:()=>{},afterActiveInstanceBlur:()=>{},detachDeletedInstance:()=>{},now:typeof performance<"u"&&Gt.fun(performance.now)?performance.now:Gt.fun(Date.now)?Date.now:()=>0,scheduleTimeout:Gt.fun(setTimeout)?setTimeout:void 0,cancelTimeout:Gt.fun(clearTimeout)?clearTimeout:void 0}),applyProps:Pd}}var cv,uv;const Cd=r=>"colorSpace"in r||"outputColorSpace"in r,by=()=>{var r;return(r=Kp.ColorManagement)!=null?r:null},Cy=r=>r&&r.isOrthographicCamera,Jb=r=>r&&r.hasOwnProperty("current"),ul=typeof window<"u"&&((cv=window.document)!=null&&cv.createElement||((uv=window.navigator)==null?void 0:uv.product)==="ReactNative")?Ye.useLayoutEffect:Ye.useEffect;function Ry(r){const e=Ye.useRef(r);return ul(()=>void(e.current=r),[r]),e}function Kb({set:r}){return ul(()=>(r(new Promise(()=>null)),()=>r(!1)),[r]),null}class Py extends Ye.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}}Py.getDerivedStateFromError=()=>({error:!0});const Iy="__default",hv=new Map,Qb=r=>r&&!!r.memoized&&!!r.changes;function Ly(r){var e;const t=typeof window<"u"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(r)?Math.min(Math.max(r[0],t),r[1]):r}const _a=r=>{var e;return(e=r.__r3f)==null?void 0:e.root.getState()};function cu(r){let e=r.__r3f.root;for(;e.getState().previousRoot;)e=e.getState().previousRoot;return e}const Gt={obj:r=>r===Object(r)&&!Gt.arr(r)&&typeof r!="function",fun:r=>typeof r=="function",str:r=>typeof r=="string",num:r=>typeof r=="number",boo:r=>typeof r=="boolean",und:r=>r===void 0,arr:r=>Array.isArray(r),equ(r,e,{arrays:t="shallow",objects:n="reference",strict:i=!0}={}){if(typeof r!=typeof e||!!r!=!!e)return!1;if(Gt.str(r)||Gt.num(r)||Gt.boo(r))return r===e;const s=Gt.obj(r);if(s&&n==="reference")return r===e;const a=Gt.arr(r);if(a&&t==="reference")return r===e;if((a||s)&&r===e)return!0;let c;for(c in r)if(!(c in e))return!1;if(s&&t==="shallow"&&n==="shallow"){for(c in i?e:r)if(!Gt.equ(r[c],e[c],{strict:i,objects:"reference"}))return!1}else for(c in i?e:r)if(r[c]!==e[c])return!1;if(Gt.und(c)){if(a&&r.length===0&&e.length===0||s&&Object.keys(r).length===0&&Object.keys(e).length===0)return!0;if(r!==e)return!1}return!0}};function $b(r){r.dispose&&r.type!=="Scene"&&r.dispose();for(const e in r)e.dispose==null||e.dispose(),delete r[e]}function xo(r,e){const t=r;return t.__r3f={type:"",root:null,previousAttach:null,memoizedProps:{},eventCount:0,handlers:{},objects:[],parent:null,...e},r}function ip(r,e){let t=r;if(e.includes("-")){const n=e.split("-"),i=n.pop();return t=n.reduce((s,a)=>s[a],r),{target:t,key:i}}else return{target:t,key:e}}const fv=/-\d+$/;function Rd(r,e,t){if(Gt.str(t)){if(fv.test(t)){const s=t.replace(fv,""),{target:a,key:c}=ip(r,s);Array.isArray(a[c])||(a[c]=[])}const{target:n,key:i}=ip(r,t);e.__r3f.previousAttach=n[i],n[i]=e}else e.__r3f.previousAttach=t(r,e)}function dv(r,e,t){var n,i;if(Gt.str(t)){const{target:s,key:a}=ip(r,t),c=e.__r3f.previousAttach;c===void 0?delete s[a]:s[a]=c}else(n=e.__r3f)==null||n.previousAttach==null||n.previousAttach(r,e);(i=e.__r3f)==null||delete i.previousAttach}function Dy(r,{children:e,key:t,ref:n,...i},{children:s,key:a,ref:c,...u}={},h=!1){const f=r.__r3f,p=Object.entries(i),m=[];if(h){const y=Object.keys(u);for(let M=0;M<y.length;M++)i.hasOwnProperty(y[M])||p.unshift([y[M],Iy+"remove"])}p.forEach(([y,M])=>{var x;if((x=r.__r3f)!=null&&x.primitive&&y==="object"||Gt.equ(M,u[y]))return;if(/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(y))return m.push([y,M,!0,[]]);let _=[];y.includes("-")&&(_=y.split("-")),m.push([y,M,!1,_]);for(const E in i){const w=i[E];E.startsWith(`${y}-`)&&m.push([E,w,!1,E.split("-")])}});const g={...i};return f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.args&&(g.args=f.memoizedProps.args),f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.attach&&(g.attach=f.memoizedProps.attach),{memoized:g,changes:m}}function Pd(r,e){var t;const n=r.__r3f,i=n==null?void 0:n.root,s=i==null||i.getState==null?void 0:i.getState(),{memoized:a,changes:c}=Qb(e)?e:Dy(r,e),u=n==null?void 0:n.eventCount;r.__r3f&&(r.__r3f.memoizedProps=a);for(let m=0;m<c.length;m++){let[g,y,M,x]=c[m];if(Cd(r)){const b="srgb",U="srgb-linear";g==="encoding"?(g="colorSpace",y=y===3001?b:U):g==="outputEncoding"&&(g="outputColorSpace",y=y===3001?b:U)}let _=r,E=_[g];if(x.length&&(E=x.reduce((w,b)=>w[b],r),!(E&&E.set))){const[w,...b]=x.reverse();_=b.reverse().reduce((U,P)=>U[P],r),g=w}if(y===Iy+"remove")if(_.constructor){let w=hv.get(_.constructor);w||(w=new _.constructor,hv.set(_.constructor,w)),y=w[g]}else y=0;if(M&&n)y?n.handlers[g]=y:delete n.handlers[g],n.eventCount=Object.keys(n.handlers).length;else if(E&&E.set&&(E.copy||E instanceof As)){if(Array.isArray(y))E.fromArray?E.fromArray(y):E.set(...y);else if(E.copy&&y&&y.constructor&&E.constructor===y.constructor)E.copy(y);else if(y!==void 0){var h;const w=(h=E)==null?void 0:h.isColor;!w&&E.setScalar?E.setScalar(y):E instanceof As&&y instanceof As?E.mask=y.mask:E.set(y),!by()&&s&&!s.linear&&w&&E.convertSRGBToLinear()}}else{var f;if(_[g]=y,(f=_[g])!=null&&f.isTexture&&_[g].format===In&&_[g].type===Ai&&s){const w=_[g];Cd(w)&&Cd(s.gl)?w.colorSpace=s.gl.outputColorSpace:w.encoding=s.gl.outputEncoding}}So(r)}if(n&&n.parent&&r.raycast&&u!==n.eventCount){const m=cu(r).getState().internal,g=m.interaction.indexOf(r);g>-1&&m.interaction.splice(g,1),n.eventCount&&m.interaction.push(r)}return!(c.length===1&&c[0][0]==="onUpdate")&&c.length&&(t=r.__r3f)!=null&&t.parent&&rp(r),r}function So(r){var e,t;const n=(e=r.__r3f)==null||(t=e.root)==null||t.getState==null?void 0:t.getState();n&&n.internal.frames===0&&n.invalidate()}function rp(r){r.onUpdate==null||r.onUpdate(r)}function eC(r,e){r.manual||(Cy(r)?(r.left=e.width/-2,r.right=e.width/2,r.top=e.height/2,r.bottom=e.height/-2):r.aspect=e.width/e.height,r.updateProjectionMatrix(),r.updateMatrixWorld())}function eu(r){return(r.eventObject||r.object).uuid+"/"+r.index+r.instanceId}function tC(){var r;const e=typeof self<"u"&&self||typeof window<"u"&&window;if(!e)return bo.DefaultEventPriority;switch((r=e.event)==null?void 0:r.type){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return bo.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return bo.ContinuousEventPriority;default:return bo.DefaultEventPriority}}function Uy(r,e,t,n){const i=t.get(e);i&&(t.delete(e),t.size===0&&(r.delete(n),i.target.releasePointerCapture(n)))}function nC(r,e){const{internal:t}=r.getState();t.interaction=t.interaction.filter(n=>n!==e),t.initialHits=t.initialHits.filter(n=>n!==e),t.hovered.forEach((n,i)=>{(n.eventObject===e||n.object===e)&&t.hovered.delete(i)}),t.capturedMap.forEach((n,i)=>{Uy(t.capturedMap,e,n,i)})}function iC(r){function e(u){const{internal:h}=r.getState(),f=u.offsetX-h.initialClick[0],p=u.offsetY-h.initialClick[1];return Math.round(Math.sqrt(f*f+p*p))}function t(u){return u.filter(h=>["Move","Over","Enter","Out","Leave"].some(f=>{var p;return(p=h.__r3f)==null?void 0:p.handlers["onPointer"+f]}))}function n(u,h){const f=r.getState(),p=new Set,m=[],g=h?h(f.internal.interaction):f.internal.interaction;for(let _=0;_<g.length;_++){const E=_a(g[_]);E&&(E.raycaster.camera=void 0)}f.previousRoot||f.events.compute==null||f.events.compute(u,f);function y(_){const E=_a(_);if(!E||!E.events.enabled||E.raycaster.camera===null)return[];if(E.raycaster.camera===void 0){var w;E.events.compute==null||E.events.compute(u,E,(w=E.previousRoot)==null?void 0:w.getState()),E.raycaster.camera===void 0&&(E.raycaster.camera=null)}return E.raycaster.camera?E.raycaster.intersectObject(_,!0):[]}let M=g.flatMap(y).sort((_,E)=>{const w=_a(_.object),b=_a(E.object);return!w||!b?_.distance-E.distance:b.events.priority-w.events.priority||_.distance-E.distance}).filter(_=>{const E=eu(_);return p.has(E)?!1:(p.add(E),!0)});f.events.filter&&(M=f.events.filter(M,f));for(const _ of M){let E=_.object;for(;E;){var x;(x=E.__r3f)!=null&&x.eventCount&&m.push({..._,eventObject:E}),E=E.parent}}if("pointerId"in u&&f.internal.capturedMap.has(u.pointerId))for(let _ of f.internal.capturedMap.get(u.pointerId).values())p.has(eu(_.intersection))||m.push(_.intersection);return m}function i(u,h,f,p){const m=r.getState();if(u.length){const g={stopped:!1};for(const y of u){const M=_a(y.object)||m,{raycaster:x,pointer:_,camera:E,internal:w}=M,b=new D(_.x,_.y,0).unproject(E),U=A=>{var C,Y;return(C=(Y=w.capturedMap.get(A))==null?void 0:Y.has(y.eventObject))!=null?C:!1},P=A=>{const C={intersection:y,target:h.target};w.capturedMap.has(A)?w.capturedMap.get(A).set(y.eventObject,C):w.capturedMap.set(A,new Map([[y.eventObject,C]])),h.target.setPointerCapture(A)},L=A=>{const C=w.capturedMap.get(A);C&&Uy(w.capturedMap,y.eventObject,C,A)};let F={};for(let A in h){let C=h[A];typeof C!="function"&&(F[A]=C)}let G={...y,...F,pointer:_,intersections:u,stopped:g.stopped,delta:f,unprojectedPoint:b,ray:x.ray,camera:E,stopPropagation(){const A="pointerId"in h&&w.capturedMap.get(h.pointerId);if((!A||A.has(y.eventObject))&&(G.stopped=g.stopped=!0,w.hovered.size&&Array.from(w.hovered.values()).find(C=>C.eventObject===y.eventObject))){const C=u.slice(0,u.indexOf(y));s([...C,y])}},target:{hasPointerCapture:U,setPointerCapture:P,releasePointerCapture:L},currentTarget:{hasPointerCapture:U,setPointerCapture:P,releasePointerCapture:L},nativeEvent:h};if(p(G),g.stopped===!0)break}}return u}function s(u){const{internal:h}=r.getState();for(const f of h.hovered.values())if(!u.length||!u.find(p=>p.object===f.object&&p.index===f.index&&p.instanceId===f.instanceId)){const m=f.eventObject.__r3f,g=m==null?void 0:m.handlers;if(h.hovered.delete(eu(f)),m!=null&&m.eventCount){const y={...f,intersections:u};g.onPointerOut==null||g.onPointerOut(y),g.onPointerLeave==null||g.onPointerLeave(y)}}}function a(u,h){for(let f=0;f<h.length;f++){const p=h[f].__r3f;p==null||p.handlers.onPointerMissed==null||p.handlers.onPointerMissed(u)}}function c(u){switch(u){case"onPointerLeave":case"onPointerCancel":return()=>s([]);case"onLostPointerCapture":return h=>{const{internal:f}=r.getState();"pointerId"in h&&f.capturedMap.has(h.pointerId)&&requestAnimationFrame(()=>{f.capturedMap.has(h.pointerId)&&(f.capturedMap.delete(h.pointerId),s([]))})}}return function(f){const{onPointerMissed:p,internal:m}=r.getState();m.lastEvent.current=f;const g=u==="onPointerMove",y=u==="onClick"||u==="onContextMenu"||u==="onDoubleClick",x=n(f,g?t:void 0),_=y?e(f):0;u==="onPointerDown"&&(m.initialClick=[f.offsetX,f.offsetY],m.initialHits=x.map(w=>w.eventObject)),y&&!x.length&&_<=2&&(a(f,m.interaction),p&&p(f)),g&&s(x);function E(w){const b=w.eventObject,U=b.__r3f,P=U==null?void 0:U.handlers;if(U!=null&&U.eventCount)if(g){if(P.onPointerOver||P.onPointerEnter||P.onPointerOut||P.onPointerLeave){const L=eu(w),F=m.hovered.get(L);F?F.stopped&&w.stopPropagation():(m.hovered.set(L,w),P.onPointerOver==null||P.onPointerOver(w),P.onPointerEnter==null||P.onPointerEnter(w))}P.onPointerMove==null||P.onPointerMove(w)}else{const L=P[u];L?(!y||m.initialHits.includes(b))&&(a(f,m.interaction.filter(F=>!m.initialHits.includes(F))),L(w)):y&&m.initialHits.includes(b)&&a(f,m.interaction.filter(F=>!m.initialHits.includes(F)))}}i(x,f,_,E)}}return{handlePointer:c}}const Ny=r=>!!(r!=null&&r.render),Oy=Ye.createContext(null),rC=(r,e)=>{const t=Wb((c,u)=>{const h=new D,f=new D,p=new D;function m(_=u().camera,E=f,w=u().size){const{width:b,height:U,top:P,left:L}=w,F=b/U;E.isVector3?p.copy(E):p.set(...E);const G=_.getWorldPosition(h).distanceTo(p);if(Cy(_))return{width:b/_.zoom,height:U/_.zoom,top:P,left:L,factor:1,distance:G,aspect:F};{const A=_.fov*Math.PI/180,C=2*Math.tan(A/2)*G,Y=C*(b/U);return{width:Y,height:C,top:P,left:L,factor:b/Y,distance:G,aspect:F}}}let g;const y=_=>c(E=>({performance:{...E.performance,current:_}})),M=new le;return{set:c,get:u,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},xr:null,scene:null,invalidate:(_=1)=>r(u(),_),advance:(_,E)=>e(_,E,u()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new Yp,pointer:M,mouse:M,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const _=u();g&&clearTimeout(g),_.performance.current!==_.performance.min&&y(_.performance.min),g=setTimeout(()=>y(u().performance.max),_.performance.debounce)}},size:{width:0,height:0,top:0,left:0,updateStyle:!1},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:m},setEvents:_=>c(E=>({...E,events:{...E.events,..._}})),setSize:(_,E,w,b,U)=>{const P=u().camera,L={width:_,height:E,top:b||0,left:U||0,updateStyle:w};c(F=>({size:L,viewport:{...F.viewport,...m(P,f,L)}}))},setDpr:_=>c(E=>{const w=Ly(_);return{viewport:{...E.viewport,dpr:w,initialDpr:E.viewport.initialDpr||w}}}),setFrameloop:(_="always")=>{const E=u().clock;E.stop(),E.elapsedTime=0,_!=="never"&&(E.start(),E.elapsedTime=0),c(()=>({frameloop:_}))},previousRoot:void 0,internal:{active:!1,priority:0,frames:0,lastEvent:Ye.createRef(),interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,subscribe:(_,E,w)=>{const b=u().internal;return b.priority=b.priority+(E>0?1:0),b.subscribers.push({ref:_,priority:E,store:w}),b.subscribers=b.subscribers.sort((U,P)=>U.priority-P.priority),()=>{const U=u().internal;U!=null&&U.subscribers&&(U.priority=U.priority-(E>0?1:0),U.subscribers=U.subscribers.filter(P=>P.ref!==_))}}}}}),n=t.getState();let i=n.size,s=n.viewport.dpr,a=n.camera;return t.subscribe(()=>{const{camera:c,size:u,viewport:h,gl:f,set:p}=t.getState();if(u.width!==i.width||u.height!==i.height||h.dpr!==s){var m;i=u,s=h.dpr,eC(c,u),f.setPixelRatio(h.dpr);const g=(m=u.updateStyle)!=null?m:typeof HTMLCanvasElement<"u"&&f.domElement instanceof HTMLCanvasElement;f.setSize(u.width,u.height,g)}c!==a&&(a=c,p(g=>({viewport:{...g.viewport,...g.viewport.getCurrentViewport(c)}})))}),t.subscribe(c=>r(c)),t};let tu,sC=new Set,oC=new Set,aC=new Set;function Id(r,e){if(r.size)for(const{callback:t}of r.values())t(e)}function ya(r,e){switch(r){case"before":return Id(sC,e);case"after":return Id(oC,e);case"tail":return Id(aC,e)}}let Ld,Dd;function Ud(r,e,t){let n=e.clock.getDelta();for(e.frameloop==="never"&&typeof r=="number"&&(n=r-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=r),Ld=e.internal.subscribers,tu=0;tu<Ld.length;tu++)Dd=Ld[tu],Dd.ref.current(Dd.store.getState(),n,t);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}function lC(r){let e=!1,t=!1,n,i,s;function a(h){i=requestAnimationFrame(a),e=!0,n=0,ya("before",h),t=!0;for(const p of r.values()){var f;s=p.store.getState(),s.internal.active&&(s.frameloop==="always"||s.internal.frames>0)&&!((f=s.gl.xr)!=null&&f.isPresenting)&&(n+=Ud(h,s))}if(t=!1,ya("after",h),n===0)return ya("tail",h),e=!1,cancelAnimationFrame(i)}function c(h,f=1){var p;if(!h)return r.forEach(m=>c(m.store.getState(),f));(p=h.gl.xr)!=null&&p.isPresenting||!h.internal.active||h.frameloop==="never"||(f>1?h.internal.frames=Math.min(60,h.internal.frames+f):t?h.internal.frames=2:h.internal.frames=1,e||(e=!0,requestAnimationFrame(a)))}function u(h,f=!0,p,m){if(f&&ya("before",h),p)Ud(h,p,m);else for(const g of r.values())Ud(h,g.store.getState());f&&ya("after",h)}return{loop:a,invalidate:c,advance:u}}function Fy(){const r=Ye.useContext(Oy);if(!r)throw new Error("R3F: Hooks can only be used within the Canvas component!");return r}function cr(r=t=>t,e){return Fy()(r,e)}function cC(r,e=0){const t=Fy(),n=t.getState().internal.subscribe,i=Ry(r);return ul(()=>n(i,e,t),[e,n,t]),null}const Do=new Map,{invalidate:pv,advance:mv}=lC(Do),{reconciler:Ku,applyProps:_o}=jb(Do,tC),yo={objects:"shallow",strict:!1},uC=(r,e)=>{const t=typeof r=="function"?r(e):r;return Ny(t)?t:new P_({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...r})};function hC(r,e){const t=typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement;if(e){const{width:n,height:i,top:s,left:a,updateStyle:c=t}=e;return{width:n,height:i,top:s,left:a,updateStyle:c}}else if(typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement&&r.parentElement){const{width:n,height:i,top:s,left:a}=r.parentElement.getBoundingClientRect();return{width:n,height:i,top:s,left:a,updateStyle:t}}else if(typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas)return{width:r.width,height:r.height,top:0,left:0,updateStyle:t};return{width:0,height:0,top:0,left:0}}function fC(r){const e=Do.get(r),t=e==null?void 0:e.fiber,n=e==null?void 0:e.store;e&&console.warn("R3F.createRoot should only be called once!");const i=typeof reportError=="function"?reportError:console.error,s=n||rC(pv,mv),a=t||Ku.createContainer(s,bo.ConcurrentRoot,null,!1,null,"",i,null);e||Do.set(r,{fiber:a,store:s});let c,u=!1,h;return{configure(f={}){let{gl:p,size:m,scene:g,events:y,onCreated:M,shadows:x=!1,linear:_=!1,flat:E=!1,legacy:w=!1,orthographic:b=!1,frameloop:U="always",dpr:P=[1,2],performance:L,raycaster:F,camera:G,onPointerMissed:A}=f,C=s.getState(),Y=C.gl;C.gl||C.set({gl:Y=uC(p,r)});let Z=C.raycaster;Z||C.set({raycaster:Z=new xy});const{params:K,...ce}=F||{};if(Gt.equ(ce,Z,yo)||_o(Z,{...ce}),Gt.equ(K,Z.params,yo)||_o(Z,{params:{...Z.params,...K}}),!C.camera||C.camera===h&&!Gt.equ(h,G,yo)){h=G;const ie=G instanceof nl,ue=ie?G:b?new kr(0,0,0,0,.1,1e3):new tn(75,0,.1,1e3);ie||(ue.position.z=5,G&&(_o(ue,G),("aspect"in G||"left"in G||"right"in G||"bottom"in G||"top"in G)&&(ue.manual=!0,ue.updateProjectionMatrix())),!C.camera&&!(G!=null&&G.rotation)&&ue.lookAt(0,0,0)),C.set({camera:ue}),Z.camera=ue}if(!C.scene){let ie;g!=null&&g.isScene?ie=g:(ie=new Ap,g&&_o(ie,g)),C.set({scene:xo(ie)})}if(!C.xr){var j;const ie=(He,re)=>{const ge=s.getState();ge.frameloop!=="never"&&mv(He,!0,ge,re)},ue=()=>{const He=s.getState();He.gl.xr.enabled=He.gl.xr.isPresenting,He.gl.xr.setAnimationLoop(He.gl.xr.isPresenting?ie:null),He.gl.xr.isPresenting||pv(He)},Fe={connect(){const He=s.getState().gl;He.xr.addEventListener("sessionstart",ue),He.xr.addEventListener("sessionend",ue)},disconnect(){const He=s.getState().gl;He.xr.removeEventListener("sessionstart",ue),He.xr.removeEventListener("sessionend",ue)}};typeof((j=Y.xr)==null?void 0:j.addEventListener)=="function"&&Fe.connect(),C.set({xr:Fe})}if(Y.shadowMap){const ie=Y.shadowMap.enabled,ue=Y.shadowMap.type;if(Y.shadowMap.enabled=!!x,Gt.boo(x))Y.shadowMap.type=Ma;else if(Gt.str(x)){var ve;const Fe={basic:bv,percentage:Qu,soft:Ma,variance:Ei};Y.shadowMap.type=(ve=Fe[x])!=null?ve:Ma}else Gt.obj(x)&&Object.assign(Y.shadowMap,x);(ie!==Y.shadowMap.enabled||ue!==Y.shadowMap.type)&&(Y.shadowMap.needsUpdate=!0)}const H=by();H&&("enabled"in H?H.enabled=!w:"legacyMode"in H&&(H.legacyMode=w)),u||_o(Y,{outputEncoding:_?3e3:3001,toneMapping:E?Wi:sp}),C.legacy!==w&&C.set(()=>({legacy:w})),C.linear!==_&&C.set(()=>({linear:_})),C.flat!==E&&C.set(()=>({flat:E})),p&&!Gt.fun(p)&&!Ny(p)&&!Gt.equ(p,Y,yo)&&_o(Y,p),y&&!C.events.handlers&&C.set({events:y(s)});const oe=hC(r,m);return Gt.equ(oe,C.size,yo)||C.setSize(oe.width,oe.height,oe.updateStyle,oe.top,oe.left),P&&C.viewport.dpr!==Ly(P)&&C.setDpr(P),C.frameloop!==U&&C.setFrameloop(U),C.onPointerMissed||C.set({onPointerMissed:A}),L&&!Gt.equ(L,C.performance,yo)&&C.set(ie=>({performance:{...ie.performance,...L}})),c=M,u=!0,this},render(f){return u||this.configure(),Ku.updateContainer(vt.jsx(dC,{store:s,children:f,onCreated:c,rootElement:r}),a,null,()=>{}),s},unmount(){By(r)}}}function dC({store:r,children:e,onCreated:t,rootElement:n}){return ul(()=>{const i=r.getState();i.set(s=>({internal:{...s.internal,active:!0}})),t&&t(i),r.getState().events.connected||i.events.connect==null||i.events.connect(n)},[]),vt.jsx(Oy.Provider,{value:r,children:e})}function By(r,e){const t=Do.get(r),n=t==null?void 0:t.fiber;if(n){const i=t==null?void 0:t.store.getState();i&&(i.internal.active=!1),Ku.updateContainer(null,n,null,()=>{i&&setTimeout(()=>{try{var s,a,c,u;i.events.disconnect==null||i.events.disconnect(),(s=i.gl)==null||(a=s.renderLists)==null||a.dispose==null||a.dispose(),(c=i.gl)==null||c.forceContextLoss==null||c.forceContextLoss(),(u=i.gl)!=null&&u.xr&&i.xr.disconnect(),$b(i),Do.delete(r)}catch{}},500)})}}Ku.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:Ye.version});const Nd={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function pC(r){const{handlePointer:e}=iC(r);return{priority:1,enabled:!0,compute(t,n,i){n.pointer.set(t.offsetX/n.size.width*2-1,-(t.offsetY/n.size.height)*2+1),n.raycaster.setFromCamera(n.pointer,n.camera)},connected:void 0,handlers:Object.keys(Nd).reduce((t,n)=>({...t,[n]:e(n)}),{}),update:()=>{var t;const{events:n,internal:i}=r.getState();(t=i.lastEvent)!=null&&t.current&&n.handlers&&n.handlers.onPointerMove(i.lastEvent.current)},connect:t=>{var n;const{set:i,events:s}=r.getState();s.disconnect==null||s.disconnect(),i(a=>({events:{...a.events,connected:t}})),Object.entries((n=s.handlers)!=null?n:[]).forEach(([a,c])=>{const[u,h]=Nd[a];t.addEventListener(u,c,{passive:h})})},disconnect:()=>{const{set:t,events:n}=r.getState();if(n.connected){var i;Object.entries((i=n.handlers)!=null?i:[]).forEach(([s,a])=>{if(n&&n.connected instanceof HTMLElement){const[c]=Nd[s];n.connected.removeEventListener(c,a)}}),t(s=>({events:{...s.events,connected:void 0}}))}}}}function gv(r,e){let t;return(...n)=>{window.clearTimeout(t),t=window.setTimeout(()=>r(...n),e)}}function mC({debounce:r,scroll:e,polyfill:t,offsetSize:n}={debounce:0,scroll:!1,offsetSize:!1}){const i=t||(typeof window>"u"?class{}:window.ResizeObserver);if(!i)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[s,a]=Ye.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),c=Ye.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:s,orientationHandler:null}),u=r?typeof r=="number"?r:r.scroll:null,h=r?typeof r=="number"?r:r.resize:null,f=Ye.useRef(!1);Ye.useEffect(()=>(f.current=!0,()=>void(f.current=!1)));const[p,m,g]=Ye.useMemo(()=>{const _=()=>{if(!c.current.element)return;const{left:E,top:w,width:b,height:U,bottom:P,right:L,x:F,y:G}=c.current.element.getBoundingClientRect(),A={left:E,top:w,width:b,height:U,bottom:P,right:L,x:F,y:G};c.current.element instanceof HTMLElement&&n&&(A.height=c.current.element.offsetHeight,A.width=c.current.element.offsetWidth),Object.freeze(A),f.current&&!yC(c.current.lastBounds,A)&&a(c.current.lastBounds=A)};return[_,h?gv(_,h):_,u?gv(_,u):_]},[a,n,u,h]);function y(){c.current.scrollContainers&&(c.current.scrollContainers.forEach(_=>_.removeEventListener("scroll",g,!0)),c.current.scrollContainers=null),c.current.resizeObserver&&(c.current.resizeObserver.disconnect(),c.current.resizeObserver=null),c.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",c.current.orientationHandler))}function M(){c.current.element&&(c.current.resizeObserver=new i(g),c.current.resizeObserver.observe(c.current.element),e&&c.current.scrollContainers&&c.current.scrollContainers.forEach(_=>_.addEventListener("scroll",g,{capture:!0,passive:!0})),c.current.orientationHandler=()=>{g()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",c.current.orientationHandler))}const x=_=>{!_||_===c.current.element||(y(),c.current.element=_,c.current.scrollContainers=zy(_),M())};return vC(g,!!e),gC(m),Ye.useEffect(()=>{y(),M()},[e,g,m]),Ye.useEffect(()=>y,[]),[x,s,p]}function gC(r){Ye.useEffect(()=>{const e=r;return window.addEventListener("resize",e),()=>void window.removeEventListener("resize",e)},[r])}function vC(r,e){Ye.useEffect(()=>{if(e){const t=r;return window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",t,!0)}},[r,e])}function zy(r){const e=[];if(!r||r===document.body)return e;const{overflow:t,overflowX:n,overflowY:i}=window.getComputedStyle(r);return[t,n,i].some(s=>s==="auto"||s==="scroll")&&e.push(r),[...e,...zy(r.parentElement)]}const _C=["x","y","top","bottom","left","right","width","height"],yC=(r,e)=>_C.every(t=>r[t]===e[t]),xC=Ye.forwardRef(function({children:e,fallback:t,resize:n,style:i,gl:s,events:a=pC,eventSource:c,eventPrefix:u,shadows:h,linear:f,flat:p,legacy:m,orthographic:g,frameloop:y,dpr:M,performance:x,raycaster:_,camera:E,scene:w,onPointerMissed:b,onCreated:U,...P},L){Ye.useMemo(()=>Zb(Hb),[]);const F=Nx(),[G,A]=mC({scroll:!0,debounce:{scroll:50,resize:0},...n}),C=Ye.useRef(null),Y=Ye.useRef(null);Ye.useImperativeHandle(L,()=>C.current);const Z=Ry(b),[K,ce]=Ye.useState(!1),[j,ve]=Ye.useState(!1);if(K)throw K;if(j)throw j;const H=Ye.useRef(null);ul(()=>{const ie=C.current;A.width>0&&A.height>0&&ie&&(H.current||(H.current=fC(ie)),H.current.configure({gl:s,events:a,shadows:h,linear:f,flat:p,legacy:m,orthographic:g,frameloop:y,dpr:M,performance:x,raycaster:_,camera:E,scene:w,size:A,onPointerMissed:(...ue)=>Z.current==null?void 0:Z.current(...ue),onCreated:ue=>{ue.events.connect==null||ue.events.connect(c?Jb(c)?c.current:c:Y.current),u&&ue.setEvents({compute:(Fe,He)=>{const re=Fe[u+"X"],ge=Fe[u+"Y"];He.pointer.set(re/He.size.width*2-1,-(ge/He.size.height)*2+1),He.raycaster.setFromCamera(He.pointer,He.camera)}}),U==null||U(ue)}}),H.current.render(vt.jsx(F,{children:vt.jsx(Py,{set:ve,children:vt.jsx(Ye.Suspense,{fallback:vt.jsx(Kb,{set:ce}),children:e??null})})})))}),Ye.useEffect(()=>{const ie=C.current;if(ie)return()=>By(ie)},[]);const oe=c?"none":"auto";return vt.jsx("div",{ref:Y,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:oe,...i},...P,children:vt.jsx("div",{ref:G,style:{width:"100%",height:"100%"},children:vt.jsx("canvas",{ref:C,style:{display:"block"},children:t})})})}),SC=Ye.forwardRef(function(e,t){return vt.jsx(Ux,{children:vt.jsx(xC,{...e,ref:t})})});function Uo(){return Uo=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},Uo.apply(null,arguments)}const ky=parseInt(Qa.replace(/\D+/g,"")),Hy=ky>=125?"uv1":"uv2";var MC=Object.defineProperty,wC=(r,e,t)=>e in r?MC(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,EC=(r,e,t)=>(wC(r,e+"",t),t);class TC{constructor(){EC(this,"_listeners")}addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}var AC=Object.defineProperty,bC=(r,e,t)=>e in r?AC(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,it=(r,e,t)=>(bC(r,typeof e!="symbol"?e+"":e,t),t);const nu=new Ds,vv=new ur,CC=Math.cos(70*(Math.PI/180)),_v=(r,e)=>(r%e+e)%e;let RC=class extends TC{constructor(e,t){super(),it(this,"object"),it(this,"domElement"),it(this,"enabled",!0),it(this,"target",new D),it(this,"minDistance",0),it(this,"maxDistance",1/0),it(this,"minZoom",0),it(this,"maxZoom",1/0),it(this,"minPolarAngle",0),it(this,"maxPolarAngle",Math.PI),it(this,"minAzimuthAngle",-1/0),it(this,"maxAzimuthAngle",1/0),it(this,"enableDamping",!1),it(this,"dampingFactor",.05),it(this,"enableZoom",!0),it(this,"zoomSpeed",1),it(this,"enableRotate",!0),it(this,"rotateSpeed",1),it(this,"enablePan",!0),it(this,"panSpeed",1),it(this,"screenSpacePanning",!0),it(this,"keyPanSpeed",7),it(this,"zoomToCursor",!1),it(this,"autoRotate",!1),it(this,"autoRotateSpeed",2),it(this,"reverseOrbit",!1),it(this,"reverseHorizontalOrbit",!1),it(this,"reverseVerticalOrbit",!1),it(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),it(this,"mouseButtons",{LEFT:ps.ROTATE,MIDDLE:ps.DOLLY,RIGHT:ps.PAN}),it(this,"touches",{ONE:ms.ROTATE,TWO:ms.DOLLY_PAN}),it(this,"target0"),it(this,"position0"),it(this,"zoom0"),it(this,"_domElementKeyEvents",null),it(this,"getPolarAngle"),it(this,"getAzimuthalAngle"),it(this,"setPolarAngle"),it(this,"setAzimuthalAngle"),it(this,"getDistance"),it(this,"getZoomScale"),it(this,"listenToKeyEvents"),it(this,"stopListenToKeyEvents"),it(this,"saveState"),it(this,"reset"),it(this,"update"),it(this,"connect"),it(this,"dispose"),it(this,"dollyIn"),it(this,"dollyOut"),it(this,"getScale"),it(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>f.phi,this.getAzimuthalAngle=()=>f.theta,this.setPolarAngle=k=>{let me=_v(k,2*Math.PI),z=f.phi;z<0&&(z+=2*Math.PI),me<0&&(me+=2*Math.PI);let _e=Math.abs(me-z);2*Math.PI-_e<_e&&(me<z?me+=2*Math.PI:z+=2*Math.PI),p.phi=me-z,n.update()},this.setAzimuthalAngle=k=>{let me=_v(k,2*Math.PI),z=f.theta;z<0&&(z+=2*Math.PI),me<0&&(me+=2*Math.PI);let _e=Math.abs(me-z);2*Math.PI-_e<_e&&(me<z?me+=2*Math.PI:z+=2*Math.PI),p.theta=me-z,n.update()},this.getDistance=()=>n.object.position.distanceTo(n.target),this.listenToKeyEvents=k=>{k.addEventListener("keydown",De),this._domElementKeyEvents=k},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",De),this._domElementKeyEvents=null},this.saveState=()=>{n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=()=>{n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(i),n.update(),u=c.NONE},this.update=(()=>{const k=new D,me=new D(0,1,0),z=new Ln().setFromUnitVectors(e.up,me),_e=z.clone().invert(),$=new D,de=new Ln,Ce=2*Math.PI;return function(){const Mt=n.object.position;z.setFromUnitVectors(e.up,me),_e.copy(z).invert(),k.copy(Mt).sub(n.target),k.applyQuaternion(z),f.setFromVector3(k),n.autoRotate&&u===c.NONE&&K(Y()),n.enableDamping?(f.theta+=p.theta*n.dampingFactor,f.phi+=p.phi*n.dampingFactor):(f.theta+=p.theta,f.phi+=p.phi);let Ct=n.minAzimuthAngle,Ht=n.maxAzimuthAngle;isFinite(Ct)&&isFinite(Ht)&&(Ct<-Math.PI?Ct+=Ce:Ct>Math.PI&&(Ct-=Ce),Ht<-Math.PI?Ht+=Ce:Ht>Math.PI&&(Ht-=Ce),Ct<=Ht?f.theta=Math.max(Ct,Math.min(Ht,f.theta)):f.theta=f.theta>(Ct+Ht)/2?Math.max(Ct,f.theta):Math.min(Ht,f.theta)),f.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,f.phi)),f.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(g,n.dampingFactor):n.target.add(g),n.zoomToCursor&&G||n.object.isOrthographicCamera?f.radius=He(f.radius):f.radius=He(f.radius*m),k.setFromSpherical(f),k.applyQuaternion(_e),Mt.copy(n.target).add(k),n.object.matrixAutoUpdate||n.object.updateMatrix(),n.object.lookAt(n.target),n.enableDamping===!0?(p.theta*=1-n.dampingFactor,p.phi*=1-n.dampingFactor,g.multiplyScalar(1-n.dampingFactor)):(p.set(0,0,0),g.set(0,0,0));let yt=!1;if(n.zoomToCursor&&G){let Yt=null;if(n.object instanceof tn&&n.object.isPerspectiveCamera){const fn=k.length();Yt=He(fn*m);const ji=fn-Yt;n.object.position.addScaledVector(L,ji),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const fn=new D(F.x,F.y,0);fn.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/m)),n.object.updateProjectionMatrix(),yt=!0;const ji=new D(F.x,F.y,0);ji.unproject(n.object),n.object.position.sub(ji).add(fn),n.object.updateMatrixWorld(),Yt=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Yt!==null&&(n.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Yt).add(n.object.position):(nu.origin.copy(n.object.position),nu.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(nu.direction))<CC?e.lookAt(n.target):(vv.setFromNormalAndCoplanarPoint(n.object.up,n.target),nu.intersectPlane(vv,n.target))))}else n.object instanceof kr&&n.object.isOrthographicCamera&&(yt=m!==1,yt&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/m)),n.object.updateProjectionMatrix()));return m=1,G=!1,yt||$.distanceToSquared(n.object.position)>h||8*(1-de.dot(n.object.quaternion))>h?(n.dispatchEvent(i),$.copy(n.object.position),de.copy(n.object.quaternion),yt=!1,!0):!1}})(),this.connect=k=>{n.domElement=k,n.domElement.style.touchAction="none",n.domElement.addEventListener("contextmenu",Ne),n.domElement.addEventListener("pointerdown",J),n.domElement.addEventListener("pointercancel",fe),n.domElement.addEventListener("wheel",be)},this.dispose=()=>{var k,me,z,_e,$,de;n.domElement&&(n.domElement.style.touchAction="auto"),(k=n.domElement)==null||k.removeEventListener("contextmenu",Ne),(me=n.domElement)==null||me.removeEventListener("pointerdown",J),(z=n.domElement)==null||z.removeEventListener("pointercancel",fe),(_e=n.domElement)==null||_e.removeEventListener("wheel",be),($=n.domElement)==null||$.ownerDocument.removeEventListener("pointermove",ae),(de=n.domElement)==null||de.ownerDocument.removeEventListener("pointerup",fe),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",De)};const n=this,i={type:"change"},s={type:"start"},a={type:"end"},c={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=c.NONE;const h=1e-6,f=new tp,p=new tp;let m=1;const g=new D,y=new le,M=new le,x=new le,_=new le,E=new le,w=new le,b=new le,U=new le,P=new le,L=new D,F=new le;let G=!1;const A=[],C={};function Y(){return 2*Math.PI/60/60*n.autoRotateSpeed}function Z(){return Math.pow(.95,n.zoomSpeed)}function K(k){n.reverseOrbit||n.reverseHorizontalOrbit?p.theta+=k:p.theta-=k}function ce(k){n.reverseOrbit||n.reverseVerticalOrbit?p.phi+=k:p.phi-=k}const j=(()=>{const k=new D;return function(z,_e){k.setFromMatrixColumn(_e,0),k.multiplyScalar(-z),g.add(k)}})(),ve=(()=>{const k=new D;return function(z,_e){n.screenSpacePanning===!0?k.setFromMatrixColumn(_e,1):(k.setFromMatrixColumn(_e,0),k.crossVectors(n.object.up,k)),k.multiplyScalar(z),g.add(k)}})(),H=(()=>{const k=new D;return function(z,_e){const $=n.domElement;if($&&n.object instanceof tn&&n.object.isPerspectiveCamera){const de=n.object.position;k.copy(de).sub(n.target);let Ce=k.length();Ce*=Math.tan(n.object.fov/2*Math.PI/180),j(2*z*Ce/$.clientHeight,n.object.matrix),ve(2*_e*Ce/$.clientHeight,n.object.matrix)}else $&&n.object instanceof kr&&n.object.isOrthographicCamera?(j(z*(n.object.right-n.object.left)/n.object.zoom/$.clientWidth,n.object.matrix),ve(_e*(n.object.top-n.object.bottom)/n.object.zoom/$.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function oe(k){n.object instanceof tn&&n.object.isPerspectiveCamera||n.object instanceof kr&&n.object.isOrthographicCamera?m=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ie(k){oe(m/k)}function ue(k){oe(m*k)}function Fe(k){if(!n.zoomToCursor||!n.domElement)return;G=!0;const me=n.domElement.getBoundingClientRect(),z=k.clientX-me.left,_e=k.clientY-me.top,$=me.width,de=me.height;F.x=z/$*2-1,F.y=-(_e/de)*2+1,L.set(F.x,F.y,1).unproject(n.object).sub(n.object.position).normalize()}function He(k){return Math.max(n.minDistance,Math.min(n.maxDistance,k))}function re(k){y.set(k.clientX,k.clientY)}function ge(k){Fe(k),b.set(k.clientX,k.clientY)}function Pe(k){_.set(k.clientX,k.clientY)}function we(k){M.set(k.clientX,k.clientY),x.subVectors(M,y).multiplyScalar(n.rotateSpeed);const me=n.domElement;me&&(K(2*Math.PI*x.x/me.clientHeight),ce(2*Math.PI*x.y/me.clientHeight)),y.copy(M),n.update()}function st(k){U.set(k.clientX,k.clientY),P.subVectors(U,b),P.y>0?ie(Z()):P.y<0&&ue(Z()),b.copy(U),n.update()}function et(k){E.set(k.clientX,k.clientY),w.subVectors(E,_).multiplyScalar(n.panSpeed),H(w.x,w.y),_.copy(E),n.update()}function at(k){Fe(k),k.deltaY<0?ue(Z()):k.deltaY>0&&ie(Z()),n.update()}function tt(k){let me=!1;switch(k.code){case n.keys.UP:H(0,n.keyPanSpeed),me=!0;break;case n.keys.BOTTOM:H(0,-n.keyPanSpeed),me=!0;break;case n.keys.LEFT:H(n.keyPanSpeed,0),me=!0;break;case n.keys.RIGHT:H(-n.keyPanSpeed,0),me=!0;break}me&&(k.preventDefault(),n.update())}function pe(){if(A.length==1)y.set(A[0].pageX,A[0].pageY);else{const k=.5*(A[0].pageX+A[1].pageX),me=.5*(A[0].pageY+A[1].pageY);y.set(k,me)}}function O(){if(A.length==1)_.set(A[0].pageX,A[0].pageY);else{const k=.5*(A[0].pageX+A[1].pageX),me=.5*(A[0].pageY+A[1].pageY);_.set(k,me)}}function Te(){const k=A[0].pageX-A[1].pageX,me=A[0].pageY-A[1].pageY,z=Math.sqrt(k*k+me*me);b.set(0,z)}function Ee(){n.enableZoom&&Te(),n.enablePan&&O()}function ye(){n.enableZoom&&Te(),n.enableRotate&&pe()}function Ae(k){if(A.length==1)M.set(k.pageX,k.pageY);else{const z=_t(k),_e=.5*(k.pageX+z.x),$=.5*(k.pageY+z.y);M.set(_e,$)}x.subVectors(M,y).multiplyScalar(n.rotateSpeed);const me=n.domElement;me&&(K(2*Math.PI*x.x/me.clientHeight),ce(2*Math.PI*x.y/me.clientHeight)),y.copy(M)}function je(k){if(A.length==1)E.set(k.pageX,k.pageY);else{const me=_t(k),z=.5*(k.pageX+me.x),_e=.5*(k.pageY+me.y);E.set(z,_e)}w.subVectors(E,_).multiplyScalar(n.panSpeed),H(w.x,w.y),_.copy(E)}function Le(k){const me=_t(k),z=k.pageX-me.x,_e=k.pageY-me.y,$=Math.sqrt(z*z+_e*_e);U.set(0,$),P.set(0,Math.pow(U.y/b.y,n.zoomSpeed)),ie(P.y),b.copy(U)}function N(k){n.enableZoom&&Le(k),n.enablePan&&je(k)}function R(k){n.enableZoom&&Le(k),n.enableRotate&&Ae(k)}function J(k){var me,z;n.enabled!==!1&&(A.length===0&&((me=n.domElement)==null||me.ownerDocument.addEventListener("pointermove",ae),(z=n.domElement)==null||z.ownerDocument.addEventListener("pointerup",fe)),ct(k),k.pointerType==="touch"?At(k):he(k))}function ae(k){n.enabled!==!1&&(k.pointerType==="touch"?xe(k):qe(k))}function fe(k){var me,z,_e;ut(k),A.length===0&&((me=n.domElement)==null||me.releasePointerCapture(k.pointerId),(z=n.domElement)==null||z.ownerDocument.removeEventListener("pointermove",ae),(_e=n.domElement)==null||_e.ownerDocument.removeEventListener("pointerup",fe)),n.dispatchEvent(a),u=c.NONE}function he(k){let me;switch(k.button){case 0:me=n.mouseButtons.LEFT;break;case 1:me=n.mouseButtons.MIDDLE;break;case 2:me=n.mouseButtons.RIGHT;break;default:me=-1}switch(me){case ps.DOLLY:if(n.enableZoom===!1)return;ge(k),u=c.DOLLY;break;case ps.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enablePan===!1)return;Pe(k),u=c.PAN}else{if(n.enableRotate===!1)return;re(k),u=c.ROTATE}break;case ps.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enableRotate===!1)return;re(k),u=c.ROTATE}else{if(n.enablePan===!1)return;Pe(k),u=c.PAN}break;default:u=c.NONE}u!==c.NONE&&n.dispatchEvent(s)}function qe(k){if(n.enabled!==!1)switch(u){case c.ROTATE:if(n.enableRotate===!1)return;we(k);break;case c.DOLLY:if(n.enableZoom===!1)return;st(k);break;case c.PAN:if(n.enablePan===!1)return;et(k);break}}function be(k){n.enabled===!1||n.enableZoom===!1||u!==c.NONE&&u!==c.ROTATE||(k.preventDefault(),n.dispatchEvent(s),at(k),n.dispatchEvent(a))}function De(k){n.enabled===!1||n.enablePan===!1||tt(k)}function At(k){switch(ke(k),A.length){case 1:switch(n.touches.ONE){case ms.ROTATE:if(n.enableRotate===!1)return;pe(),u=c.TOUCH_ROTATE;break;case ms.PAN:if(n.enablePan===!1)return;O(),u=c.TOUCH_PAN;break;default:u=c.NONE}break;case 2:switch(n.touches.TWO){case ms.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(),u=c.TOUCH_DOLLY_PAN;break;case ms.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ye(),u=c.TOUCH_DOLLY_ROTATE;break;default:u=c.NONE}break;default:u=c.NONE}u!==c.NONE&&n.dispatchEvent(s)}function xe(k){switch(ke(k),u){case c.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ae(k),n.update();break;case c.TOUCH_PAN:if(n.enablePan===!1)return;je(k),n.update();break;case c.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;N(k),n.update();break;case c.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;R(k),n.update();break;default:u=c.NONE}}function Ne(k){n.enabled!==!1&&k.preventDefault()}function ct(k){A.push(k)}function ut(k){delete C[k.pointerId];for(let me=0;me<A.length;me++)if(A[me].pointerId==k.pointerId){A.splice(me,1);return}}function ke(k){let me=C[k.pointerId];me===void 0&&(me=new le,C[k.pointerId]=me),me.set(k.pageX,k.pageY)}function _t(k){const me=k.pointerId===A[0].pointerId?A[1]:A[0];return C[me.pointerId]}this.dollyIn=(k=Z())=>{ue(k),n.update()},this.dollyOut=(k=Z())=>{ie(k),n.update()},this.getScale=()=>m,this.setScale=k=>{oe(k),n.update()},this.getZoomScale=()=>Z(),t!==void 0&&this.connect(t),this.update()}};const yv=new _n,iu=new D;class Qp extends Wp{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Ze(e,3)),this.setAttribute("uv",new Ze(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Ju(t,6,1);return this.setAttribute("instanceStart",new ii(n,3,0)),this.setAttribute("instanceEnd",new ii(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new Ju(n,t*2,1);return this.setAttribute("instanceColorStart",new ii(i,t,0)),this.setAttribute("instanceColorEnd",new ii(i,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Fp(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),yv.setFromBufferAttribute(t),this.boundingBox.union(yv))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)iu.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(iu)),iu.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(iu));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class Vy extends Qp{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e,t=3){const n=e.length-t,i=new Float32Array(2*n);if(t===3)for(let s=0;s<n;s+=t)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];else for(let s=0;s<n;s+=t)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5],i[2*s+6]=e[s+6],i[2*s+7]=e[s+7];return super.setColors(i,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class $p extends vi{constructor(e){super({type:"LineMaterial",uniforms:Yu.clone(Yu.merge([Re.common,Re.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new le(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${ky>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const Od=new Tt,xv=new D,Sv=new D,Sn=new Tt,Mn=new Tt,Bi=new Tt,Fd=new D,Bd=new rt,wn=new Sy,Mv=new D,ru=new _n,su=new yn,zi=new Tt;let Hi,Cs;function wv(r,e,t){return zi.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),zi.multiplyScalar(1/zi.w),zi.x=Cs/t.width,zi.y=Cs/t.height,zi.applyMatrix4(r.projectionMatrixInverse),zi.multiplyScalar(1/zi.w),Math.abs(Math.max(zi.x,zi.y))}function PC(r,e){const t=r.matrixWorld,n=r.geometry,i=n.attributes.instanceStart,s=n.attributes.instanceEnd,a=Math.min(n.instanceCount,i.count);for(let c=0,u=a;c<u;c++){wn.start.fromBufferAttribute(i,c),wn.end.fromBufferAttribute(s,c),wn.applyMatrix4(t);const h=new D,f=new D;Hi.distanceSqToSegment(wn.start,wn.end,f,h),f.distanceTo(h)<Cs*.5&&e.push({point:f,pointOnLine:h,distance:Hi.origin.distanceTo(f),object:r,face:null,faceIndex:c,uv:null,[Hy]:null})}}function IC(r,e,t){const n=e.projectionMatrix,s=r.material.resolution,a=r.matrixWorld,c=r.geometry,u=c.attributes.instanceStart,h=c.attributes.instanceEnd,f=Math.min(c.instanceCount,u.count),p=-e.near;Hi.at(1,Bi),Bi.w=1,Bi.applyMatrix4(e.matrixWorldInverse),Bi.applyMatrix4(n),Bi.multiplyScalar(1/Bi.w),Bi.x*=s.x/2,Bi.y*=s.y/2,Bi.z=0,Fd.copy(Bi),Bd.multiplyMatrices(e.matrixWorldInverse,a);for(let m=0,g=f;m<g;m++){if(Sn.fromBufferAttribute(u,m),Mn.fromBufferAttribute(h,m),Sn.w=1,Mn.w=1,Sn.applyMatrix4(Bd),Mn.applyMatrix4(Bd),Sn.z>p&&Mn.z>p)continue;if(Sn.z>p){const w=Sn.z-Mn.z,b=(Sn.z-p)/w;Sn.lerp(Mn,b)}else if(Mn.z>p){const w=Mn.z-Sn.z,b=(Mn.z-p)/w;Mn.lerp(Sn,b)}Sn.applyMatrix4(n),Mn.applyMatrix4(n),Sn.multiplyScalar(1/Sn.w),Mn.multiplyScalar(1/Mn.w),Sn.x*=s.x/2,Sn.y*=s.y/2,Mn.x*=s.x/2,Mn.y*=s.y/2,wn.start.copy(Sn),wn.start.z=0,wn.end.copy(Mn),wn.end.z=0;const M=wn.closestPointToPointParameter(Fd,!0);wn.at(M,Mv);const x=p_.lerp(Sn.z,Mn.z,M),_=x>=-1&&x<=1,E=Fd.distanceTo(Mv)<Cs*.5;if(_&&E){wn.start.fromBufferAttribute(u,m),wn.end.fromBufferAttribute(h,m),wn.start.applyMatrix4(a),wn.end.applyMatrix4(a);const w=new D,b=new D;Hi.distanceSqToSegment(wn.start,wn.end,b,w),t.push({point:b,pointOnLine:w,distance:Hi.origin.distanceTo(b),object:r,face:null,faceIndex:m,uv:null,[Hy]:null})}}}class Gy extends nn{constructor(e=new Qp,t=new $p({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let a=0,c=0,u=t.count;a<u;a++,c+=2)xv.fromBufferAttribute(t,a),Sv.fromBufferAttribute(n,a),i[c]=c===0?0:i[c-1],i[c+1]=i[c]+xv.distanceTo(Sv);const s=new Ju(i,2,1);return e.setAttribute("instanceDistanceStart",new ii(s,1,0)),e.setAttribute("instanceDistanceEnd",new ii(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Hi=e.ray;const a=this.matrixWorld,c=this.geometry,u=this.material;Cs=u.linewidth+s,c.boundingSphere===null&&c.computeBoundingSphere(),su.copy(c.boundingSphere).applyMatrix4(a);let h;if(n)h=Cs*.5;else{const p=Math.max(i.near,su.distanceToPoint(Hi.origin));h=wv(i,p,u.resolution)}if(su.radius+=h,Hi.intersectsSphere(su)===!1)return;c.boundingBox===null&&c.computeBoundingBox(),ru.copy(c.boundingBox).applyMatrix4(a);let f;if(n)f=Cs*.5;else{const p=Math.max(i.near,ru.distanceToPoint(Hi.origin));f=wv(i,p,u.resolution)}ru.expandByScalar(f),Hi.intersectsBox(ru)!==!1&&(n?PC(this,t):IC(this,i,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Od),this.material.uniforms.resolution.value.set(Od.z,Od.w))}}class LC extends Gy{constructor(e=new Vy,t=new $p({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const DC=Ye.forwardRef(function({points:e,color:t=16777215,vertexColors:n,linewidth:i,lineWidth:s,segments:a,dashed:c,...u},h){var f,p;const m=cr(_=>_.size),g=Ye.useMemo(()=>a?new Gy:new LC,[a]),[y]=Ye.useState(()=>new $p),M=(n==null||(f=n[0])==null?void 0:f.length)===4?4:3,x=Ye.useMemo(()=>{const _=a?new Qp:new Vy,E=e.map(w=>{const b=Array.isArray(w);return w instanceof D||w instanceof Tt?[w.x,w.y,w.z]:w instanceof le?[w.x,w.y,0]:b&&w.length===3?[w[0],w[1],w[2]]:b&&w.length===2?[w[0],w[1],0]:w});if(_.setPositions(E.flat()),n){t=16777215;const w=n.map(b=>b instanceof ze?b.toArray():b);_.setColors(w.flat(),M)}return _},[e,a,n,M]);return Ye.useLayoutEffect(()=>{g.computeLineDistances()},[e,g]),Ye.useLayoutEffect(()=>{c?y.defines.USE_DASH="":delete y.defines.USE_DASH,y.needsUpdate=!0},[c,y]),Ye.useEffect(()=>()=>{x.dispose(),y.dispose()},[x]),Ye.createElement("primitive",Uo({object:g,ref:h},u),Ye.createElement("primitive",{object:x,attach:"geometry"}),Ye.createElement("primitive",Uo({object:y,attach:"material",color:t,vertexColors:!!n,resolution:[m.width,m.height],linewidth:(p=i??s)!==null&&p!==void 0?p:1,dashed:c,transparent:M===4},u)))}),UC=Ye.forwardRef(({threshold:r=15,geometry:e,...t},n)=>{const i=Ye.useRef(null);Ye.useImperativeHandle(n,()=>i.current,[]);const s=Ye.useMemo(()=>[0,0,0,1,0,0],[]),a=Ye.useRef(),c=Ye.useRef();return Ye.useLayoutEffect(()=>{const u=i.current.parent,h=e??(u==null?void 0:u.geometry);if(!h||a.current===h&&c.current===r)return;a.current=h,c.current=r;const p=new Op(h,r).attributes.position.array;i.current.geometry.setPositions(p),i.current.geometry.attributes.instanceStart.needsUpdate=!0,i.current.geometry.attributes.instanceEnd.needsUpdate=!0,i.current.computeLineDistances()}),Ye.createElement(DC,Uo({segments:!0,points:s,ref:i,raycast:()=>null},t))}),NC=Ye.forwardRef(({makeDefault:r,camera:e,regress:t,domElement:n,enableDamping:i=!0,keyEvents:s=!1,onChange:a,onStart:c,onEnd:u,...h},f)=>{const p=cr(P=>P.invalidate),m=cr(P=>P.camera),g=cr(P=>P.gl),y=cr(P=>P.events),M=cr(P=>P.setEvents),x=cr(P=>P.set),_=cr(P=>P.get),E=cr(P=>P.performance),w=e||m,b=n||y.connected||g.domElement,U=Ye.useMemo(()=>new RC(w),[w]);return cC(()=>{U.enabled&&U.update()},-1),Ye.useEffect(()=>(s&&U.connect(s===!0?b:s),U.connect(b),()=>void U.dispose()),[s,b,t,U,p]),Ye.useEffect(()=>{const P=G=>{p(),t&&E.regress(),a&&a(G)},L=G=>{c&&c(G)},F=G=>{u&&u(G)};return U.addEventListener("change",P),U.addEventListener("start",L),U.addEventListener("end",F),()=>{U.removeEventListener("start",L),U.removeEventListener("end",F),U.removeEventListener("change",P)}},[a,c,u,U,p,M]),Ye.useEffect(()=>{if(r){const P=_().controls;return x({controls:U}),()=>x({controls:P})}},[r,U]),Ye.createElement("primitive",Uo({ref:f,object:U,enableDamping:i},h))}),Ev="#94a3b8",OC="#e7e2d8",FC="#f59e0b";function BC(r,e,t){const n=t.map(({a,b:c})=>({a:Math.max(a,r),b:Math.min(c,e)})).filter(({a,b:c})=>c>a).sort((a,c)=>a.a-c.a),i=[];let s=r;for(const a of n)a.a>s&&i.push({a:s,b:a.a}),s=Math.max(s,a.b);return s<e&&i.push({a:s,b:e}),{solid:i,openings:n}}function zC({room:r,side:e,doors:t}){const{width:n,depth:i,height:s,wallThickness:a}=r,c=Math.min(210,s),u=e==="top"||e==="bottom",h=u?-a:0,f=u?n+a:i,p=t.map(M=>({a:M.offset,b:M.offset+M.width})),{solid:m,openings:g}=Ye.useMemo(()=>BC(h,f,p),[r,t]),y=(M,x,_,E)=>{const w=(M+x)/2,b=x-M;if(u){const P=e==="top"?-i/2-a/2:i/2+a/2;return{position:[w-n/2,_+E/2,P],size:[b,E,a]}}return{position:[e==="left"?-n/2-a/2:n/2+a/2,_+E/2,w-i/2],size:[a,E,b]}};return vt.jsxs("group",{children:[m.map((M,x)=>{const{position:_,size:E}=y(M.a,M.b,0,s);return vt.jsxs("mesh",{position:_,children:[vt.jsx("boxGeometry",{args:E}),vt.jsx("meshStandardMaterial",{color:Ev,transparent:!0,opacity:.55})]},`s${x}`)}),g.map((M,x)=>{const _=s-c,E=y(M.a,M.b,c,_),{position:w,size:b}=y(M.a,M.b,0,c);return vt.jsxs("group",{children:[_>0&&vt.jsxs("mesh",{position:E.position,children:[vt.jsx("boxGeometry",{args:E.size}),vt.jsx("meshStandardMaterial",{color:Ev,transparent:!0,opacity:.55})]}),vt.jsxs("mesh",{position:w,children:[vt.jsx("boxGeometry",{args:b}),vt.jsx("meshStandardMaterial",{color:FC,transparent:!0,opacity:.25})]})]},`o${x}`)})]})}function kC(){const r=Br(h=>h.room),e=Br(h=>h.doors),t=Br(h=>h.placed),n=Br(h=>h.furniture),i=Br(h=>h.selectedId),s=Br(h=>h.select),{width:a,depth:c,wallThickness:u}=r;return vt.jsxs(vt.Fragment,{children:[vt.jsx("ambientLight",{intensity:.7}),vt.jsx("directionalLight",{position:[300,500,200],intensity:1.1}),vt.jsx("directionalLight",{position:[-200,300,-300],intensity:.3}),vt.jsxs("mesh",{position:[0,-2,0],children:[vt.jsx("boxGeometry",{args:[a+2*u,4,c+2*u]}),vt.jsx("meshStandardMaterial",{color:OC})]}),["top","bottom","left","right"].map(h=>vt.jsx(zC,{room:r,side:h,doors:e.filter(f=>f.wall===h)},h)),t.map(h=>{const f=n.find(y=>y.id===h.furnitureId);if(!f)return null;const p=h.id===i,m=f.kind==="wall",g=m?r.height:f.height;return vt.jsxs("mesh",{position:[h.x-a/2,g/2,h.y-c/2],rotation:[0,-h.rotation*Math.PI/180,0],onClick:y=>{y.stopPropagation(),s(h.id)},children:[vt.jsx("boxGeometry",{args:[f.width,g,f.depth]}),vt.jsx("meshStandardMaterial",{color:f.color,transparent:m,opacity:m?.75:1,emissive:p?"#2563eb":"#000000",emissiveIntensity:p?.35:0}),vt.jsx(UC,{color:"rgba(0,0,0,0.4)"})]},h.id)})]})}function YC(){const r=Br(t=>t.room),e=Math.max(r.width,r.depth);return vt.jsxs("div",{className:"view3d",children:[vt.jsxs(SC,{camera:{position:[e*.7,e*.8,e*.9],fov:50,near:1,far:2e4},onPointerMissed:()=>Br.getState().select(null),children:[vt.jsx("color",{attach:"background",args:["#dbeafe"]}),vt.jsx(kC,{}),vt.jsx(NC,{target:[0,r.height/4,0],maxDistance:e*4,minDistance:50})]}),vt.jsx("div",{className:"view3d-hint",children:"드래그: 회전 · 휠/핀치: 줌 · 우클릭/두 손가락: 이동"})]})}export{YC as View3D};
