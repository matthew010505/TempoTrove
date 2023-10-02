/*for(var i=0;i<document.querySelectorAll(".series").length;i++){
    document.querySelectorAll(".series")[i].addEventListener("click",handleclick);
}
function handleclick(){
    var buttoninnerhtml=this.innerHTML;
    switch(buttoninnerhtml){
        case "pw":
            var wiz= new Audio("songs/pw.mp3");
            wiz.play();
            break;
            default:console.log(buttoninnerhtml);

    }*/
var wiz;
var mi;
var av;
var huk;
var ff;
var bat;
var andrew;
var jack;
var ciao;

for(var i=0;i<document.querySelectorAll(".series").length;i++){
    document.querySelectorAll(".series")[i].addEventListener("click",handleclick);
}
function handleclick(){
    var buttoninnerhtml=this.innerHTML;
    switch(buttoninnerhtml){
        case "pw":
            wiz= new Audio("songs/pw.mp3");
            wiz.play();
            break;
        case "tc":
                mi= new Audio("songs/tc.mp3");
                mi.play();
                break;
        case "rdj":
                    av= new Audio("songs/rdj.mp3");
                    av.play();
                    break;
        case "hukum":
                        huk= new Audio("songs/hukum.mp3");
                        huk.play();
                        break;
        case "dom":
                ff= new Audio("songs/ff.mp3");
                ff.play();
                break;
        case "matthew":
                    interstellar= new Audio("songs/matthew.mp3");
                    interstellar.play();
                    break;
        case "batman":
                        bat= new Audio("songs/batman.mp3");
                        bat.play();
                        break;
        case "tate":
                            andrew= new Audio("songs/tate.mp3");
                            andrew.play();
                            break;
        case "jacksparrow":
                                jack= new Audio("songs/jack.mp3");
                                jack.play();
                                break;
        case "heist":
                                    ciao= new Audio("songs/heist.mp3");
                                    ciao.play();
                                    break;
         default:console.log(buttoninnerhtml);

    }
}

