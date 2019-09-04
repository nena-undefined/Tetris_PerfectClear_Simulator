let mino = ["I", "L", "O", "Z", "T", "J", "S"]
let pics_src = ["img/I.png", "img/L.png", "img/O.png", "img/Z.png", "img/T.png", "img/J.png", "img/S.png"];

//
let num_tumo = -1

function get_imgName(c){
  for(let i = 0; i < 7; ++i){
    if(c == mino[i]){
      return  mino[i] + ".png";
    }
  }
  return -1;
}

function print_is_perfect(){
  if(num_tumo == -1){
    alert("次のツモを表示してください");
    return;
  }
  let target = document.getElementById("target");
  let s = ""
  
  if(array[num_tumo].is_perfect == 1){
    s += "<h3>パフェはあります</h3>\n<br>";
    s += "<table class=\"table table-striped mx-auto col-12\">"

  
    s += "<thead><tr><th>1つ目に使うミノ</th><th>2つ目に使うミノ</th><th>3つ目に使うミノ</th><th>テト譜例</th></tr></thead>\n"

    for(let i = 0; i < array[num_tumo].list.length; ++i){
      s += "<tr>"
      for(let j = 0; j < 3; ++j){
        //s += "<img src=\"img/" + get_imgName(array[num_tumo].list[i][j]) + "\", width=\"120\", height=\"90\">\n";
        s += "<th><img src=\"img/" + get_imgName(array[num_tumo].list[i][j]) + "\"class=\"img-fluid\" alt=\"Responsive image\"></th>\n";
      }
       s += "<th><a class=\"btn btn-primary mx-auto\" href=\"" + tetofu[array[num_tumo].list[i]] + "\"# target=\"_blank\" role=\"button\">テト譜</a></th></tr>\n";
     // s += `<th><a href="${tetofu[array[num_tumo].list[i]]}" target="_blank" class="center-block" >テト譜</a></th></tr>\n`;
    }
    s += "</tbody></table>"
  }else{
    s += "<h3>パフェはないです</h3>";
  }
  target.innerHTML = s;
  console.log(s);
}

function change_tumo(){
  let rnd = Math.floor(Math.random() * 840);
  let idx = Array(4);

  num_tumo = rnd;

  for(let i = 0; i < 4; ++i){
    for(let j = 0; j < 7; ++j){
      if(array[rnd].ord[i] == mino[j]){
        idx[i] = j;
        break;
      }
    }
  }

  document.getElementById("mypic1").src=pics_src[idx[0]];
  document.getElementById("mypic2").src=pics_src[idx[1]];
  document.getElementById("mypic3").src=pics_src[idx[2]]; 
  document.getElementById("mypic4").src=pics_src[idx[3]];
}


