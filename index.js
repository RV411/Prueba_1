const ArrayVowel = ["a","e","i","o","u"];
const ArrayChange=["ai","enter","imes","ober","ufat"];
const ArrayReg=[/ai/mg,/enter/mg,/imes/mg,/ober/mg,/ufat/mg];

const buttonCipher=document.querySelector("#buttonCipher");
const buttonDecipher=document.querySelector("#buttonDecipher");
const buttonCop=document.querySelector("#buttonCoppy");

function Cipher(){
    const text=document.getElementById("textOld").value.toLowerCase();
    if(text!=""){ document.getElementById("noResuelto").style.visibility = "hidden";}
    else{ document.getElementById("noResuelto").style.visibility = "visible"; }
    let newText="";
    for(let x of text){
        if(x==ArrayVowel[0]){
            x=ArrayChange[0];
        }else if(x==ArrayVowel[1]){
            x=ArrayChange[1];
        }else if(x==ArrayVowel[2]){
            x=ArrayChange[2];
        }else if(x==ArrayVowel[3]){
            x=ArrayChange[3];
        }else if(x==ArrayVowel[4]){
            x=ArrayChange[4];
        }
        newText+=x;
    }
    document.getElementById("textNew").innerHTML=newText;
    document.getElementById("buttonCoppy").style.visibility = 'visible';
    document.getElementById("textOld").value = '';
}

function Decipher(){
    const text=document.getElementById("textOld").value.toLowerCase();
    if(text!=""){ document.getElementById("noResuelto").style.visibility = "hidden";}
    else{ document.getElementById("noResuelto").style.visibility = "visible"; }
    
	const atext = text.replace(ArrayReg[0], ArrayVowel[0]);
	const etext = atext.replace(ArrayReg[1], ArrayVowel[1]);
	const itext = etext.replace(ArrayReg[2], ArrayVowel[2]);
	const otext = itext.replace(ArrayReg[3], ArrayVowel[3]);
	const utext = otext.replace(ArrayReg[4], ArrayVowel[4]);
    document.getElementById("textNew").innerHTML=utext;
    document.getElementById("buttonCoppy").style.visibility = 'visible';
    document.getElementById("textOld").value = '';

}

function Copy() {
    const text= document.querySelector("#textNew").value;
    navigator.clipboard.writeText(text);
}

buttonCipher.onclick=Cipher;
buttonDecipher.onclick=Decipher;
buttonCop.onclick=Copy;