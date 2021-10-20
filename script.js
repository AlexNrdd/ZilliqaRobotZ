


    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    canvas.width=350;
    canvas.height=700;


    examplImg = new Image();
    examplImg.src = 'example1.png';

    // body parts of avatar
    var body =  new Array();
    body[1] = new Image();
    body[1].src = 'img/body1.png';
    body[2] = new Image();
    body[2].src = 'img/body2.png';
    body[3] = new Image();
    body[3].src = 'img/body3.png';
    body[4] = new Image();
    body[4].src = 'img/body4.png';
    body[5] = new Image();
    body[5].src = 'img/body5.png';
    body[6] = new Image();
    body[6].src = 'img/bodyepic.png';
    

    // left leg hip
    var legL =  new Array();
    legL[1] = new Image();
    legL[1].src = 'img/legL1.png';
    legL[2] = new Image();
    legL[2].src = 'img/legL2.png';
    legL[3] = new Image();
    legL[3].src = 'img/legL3.png';

    // left leg shin
    var legLF =  new Array();
    legLF[1] = new Image();
    legLF[1].src = 'img/legLF1.png';
    legLF[2] = new Image();
    legLF[2].src = 'img/legLF2.png';
    legLF[3] = new Image();
    legLF[3].src = 'img/legLF3.png';

     // right leg hip
     var legR =  new Array();
     legR[1] = new Image();
     legR[1].src = 'img/legR1.png';
     legR[2] = new Image();
     legR[2].src = 'img/legR2.png';
     legR[3] = new Image();
     legR[3].src = 'img/legR3.png';

     // right leg shin
    var legRF =  new Array();
    legRF[1] = new Image();
    legRF[1].src = 'img/legRF1.png';
    legRF[2] = new Image();
    legRF[2].src = 'img/legRF2.png';
    legRF[3] = new Image();
    legRF[3].src = 'img/legRF3.png';

    // left arm
    var armL =  new Array();
    armL[1] = new Image();
    armL[1].src = 'img/armL1.png';
    armL[2] = new Image();
    armL[2].src = 'img/armL2.png';
    armL[3] = new Image();
    armL[3].src = 'img/armL3.png';

    // left forearm
    var armLF =  new Array();
    armLF[1] = new Image();
    armLF[1].src = 'img/armLF1.png';
    armLF[2] = new Image();
    armLF[2].src = 'img/armLF2.png';
    armLF[3] = new Image();
    armLF[3].src = 'img/armLF3.png';
    armLF[4] = new Image();
    armLF[4].src = 'img/armLF4.png';
    armLF[5] = new Image();
    armLF[5].src = 'img/armLF5.png';
    armLF[6] = new Image();
    armLF[6].src = 'img/armLF6.png';
    armLF[7] = new Image();
    armLF[7].src = 'img/armLF7epic.png';

    // right arm
    var armR =  new Array();
    armR[1] = new Image();
    armR[1].src = 'img/armR1.png';
    armR[2] = new Image();
    armR[2].src = 'img/armR2.png';
    armR[3] = new Image();
    armR[3].src = 'img/armR3.png';

    // right forearm
    var armRF =  new Array();
    armRF[1] = new Image();
    armRF[1].src = 'img/armRF1.png';
    armRF[2] = new Image();
    armRF[2].src = 'img/armRF2.png';
    armRF[3] = new Image();
    armRF[3].src = 'img/armRF3.png';
    armRF[4] = new Image();
    armRF[4].src = 'img/armRF4.png';
    armRF[5] = new Image();
    armRF[5].src = 'img/armRF5.png';
    armRF[6] = new Image();
    armRF[6].src = 'img/armRF6.png';
    armRF[7] = new Image();
    armRF[7].src = 'img/armRF7epic.png';

    //head
    var head =  new Array();
    head[1] = new Image();
    head[1].src = 'img/head1.png';
    head[2] = new Image();
    head[2].src = 'img/head2.png';
    head[3] = new Image();
    head[3].src = 'img/head3.png';
    head[4] = new Image();
    head[4].src = 'img/head4.png';
    head[5] = new Image();
    head[5].src = 'img/head5.png';
    head[6] = new Image();
    head[6].src = 'img/head6.png';


    //eyes
    var eyes =  new Array();
    eyes[1] = new Image();
    eyes[1].src = 'img/eyes1.png';
    eyes[2] = new Image();
    eyes[2].src = 'img/eyes2.png';
    eyes[3] = new Image();
    eyes[3].src = 'img/eyes3.png';
    eyes[4] = new Image();
    eyes[4].src = 'img/eyes4.png';
    eyes[5] = new Image();
    eyes[5].src = 'img/eyes5.png';
    eyes[6] = new Image();
    eyes[6].src = 'img/eyes6.png';
    eyes[7] = new Image();
    eyes[7].src = 'img/eyes7Rare.png';

    //smile
    var smile =  new Array();
    smile[1] = new Image();
    smile[1].src = 'img/smile1.png';
    smile[2] = new Image();
    smile[2].src = 'img/smile2.png';
    smile[3] = new Image();
    smile[3].src = 'img/smile3.png';
    smile[4] = new Image();
    smile[4].src = 'img/smile4.png';

    //menu
    var menu =  new Array();
    menu[1] = new Image();
    menu[1].src = 'img/menu1.png';
    menu[2] = new Image();
    menu[2].src = 'img/menu2Rare.png';
    menu[3] = new Image();
    menu[3].src = 'img/epic.png';

    examplImg.onload = function(){
        ctx.drawImage(examplImg,0,0);
    }
    
    var seed;
    var seedN  =new Array();
    var rarity;
    var rarityStr;
    

    function buildAva()
    {
        ctx.fillStyle = "#ffffff";   // almost black back
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        console.log("buildavafunc")
        // random seed  1231231..
        // last digit= bodynum,    pre-last digit = left leg hip, 3 form end = left leg shin
        seed=0;

        //var rarity;
        //rarity= Math.floor(Math.random()*100)+1; //chose rarity of drop

        for (let i=0;i<14;i++)  // i - current digit position in id
        {
            var pieceNum = 3; //number of pieces 
            switch (i) {
                case 0: pieceNum=5; break;  //chose from 5 body variants
                case 6: pieceNum=6; break;  //chose from 6 left arms
                case 8: pieceNum=6; break;  //chose from 6 r arms
                case 9: pieceNum=5; break;   //chose from 5 heads
                case 10: pieceNum=6; break;   //6 eyes
                case 11: pieceNum=4; break; //4 smile
                case 12: pieceNum=1; break;
                default: pieceNum = 3;    //other parts has 3 variants
            }
            seedN[i]=Math.floor(Math.random()*pieceNum)+1;

            if (rarity<11){ //check if rare
                seedN[9]=6;  //set rare head
                seedN[10]=7; //set rare eyes
                seedN[12]=2;
                rarityStr='rare';
            } else if (rarity> 10 && rarity<14){
                seedN[0]=6; //set epic body
                seedN[6]=7; //set epic arm
                seedN[8]=7; //set epic arm
                seedN[9]=6;  //set rare head
                seedN[10]=7; //set rare eyes
                seedN[12]=3;    //set menu bar
                rarityStr='epic';
            } else rarityStr='common';

            seed= seed+ seedN[i] * Math.pow(10,i);
        }
        //console.log(seed);
        //var seed1=Math.floor(Math.random()*1000000)+1;
        var hexString = seed.toString(16);

        document.getElementById("seed").innerHTML = seed;
        document.getElementById("seed2").innerHTML = hexString;
        var x=25,y=80;
        ctx.drawImage(body[seedN[0]],x,y); 
        ctx.drawImage(legL[seedN[1]],x,y);
        ctx.drawImage(legLF[seedN[2]],x,y);
        ctx.drawImage(legR[seedN[3]],x,y);
        ctx.drawImage(legRF[seedN[4]],x,y);
        ctx.drawImage(armL[seedN[5]],x,y);
        ctx.drawImage(armLF[seedN[6]],x,y);
        ctx.drawImage(armR[seedN[7]],x,y);
        ctx.drawImage(armRF[seedN[8]],x,y);
        ctx.drawImage(head[seedN[9]],x,y);
        ctx.drawImage(eyes[seedN[10]],x,y);
        ctx.drawImage(smile[seedN[11]],x,y);

        ctx.drawImage(menu[seedN[12]],x,-480);

        //var grd = ctx.createLinearGradient(0,0,0,600);
        //grd.addColorStop(0, "#e5ebfc");
        //grd.addColorStop(1, "#f9fafc");
        //ctx.fillStyle = grd;
        //ctx.drawImage(faceMonitor,0,0);
        

    }

    function buildAll()
    {
        rarity= Math.floor(Math.random()*100)+1;
        
        buildAva();
    }
    function buildRare()
    {
        rarity= Math.floor(Math.random()*13)+1;
        buildAva();
    }
/*

    function loadImg(){
        var link = document.createElement('a');
        link.download = 'filename.png';
        link.href = document.getElementById('canvas').toDataURL()
        link.click();
        link.delete;

    }
*/
    function loadImg(){
        let link = document.createElement('a');
        let imgName=rarityStr+seed+'.png';
        link.setAttribute('download', imgName);
        let canvas = document.getElementById('canvas');
      let dataURL = canvas.toDataURL('image/png');
      let url = dataURL.replace(/^data:image\/png/,'data:application/octet-stream');
        link.setAttribute('href',url);
        link.click();
    }


    


