var arr = new Array();
function divisor(s){
    var str_length = s.length;
    for(var i=1;i<=str_length/2;i++){
        arr.push(i);
    }
}

function solution(s){
    if(s.length==1){
        return 1;
    }
    var answer = 1000;
    var tmp = 0;
    divisor(s);
    for(var e = 0; e < arr.length; e++){
        tmp = calculate(s, arr[e]);
        if(answer > tmp){
            answer = tmp;
        }
    }
    return answer;
}

function calculate(s, cut_size){
    var arr_inside = new Array();
    var arr_inside_duplicate = new Array();
    var str = "";
    
    for(var i=0;i<s.length-cut_size;i++){ //n개씩 자르기
        var tmp1 = s.substring(i*cut_size,(i+1)*cut_size);
        arr_inside.push(tmp1);
    }
    if(cut_size==1){ //1개씩 자를 때 마지막에 하나 안들어가는 것 추가
        arr_inside.push(s.substring(s.length-1,s.length));
    }
    
    for(var i=0;i<arr_inside.length-1;i++){
        if(arr_inside[i]==arr_inside[i+1] && arr_inside[i] != ""){
            //만약에 다음배열도 같다면 압축이 가능하다.
            arr_inside_duplicate.push(arr_inside[i]);
            arr_inside[i] = "KKT3343";
        }
    }
    
    var count = 1;
    var key = false;
    for(var i=0;i<arr_inside.length;i++){
        if(arr_inside[i]!=""){
            if(arr_inside[i]=="KKT3343"){
                arr_inside[i] = "";
                count++;
                key = true;
            }
            else{
                if(key = true && count > 1){
                    key = false;
                    arr_inside[i] = String(count) + arr_inside[i];
                    count = 1;   
                }
            }   
        }
    }
    
    for(var i=0;i<arr_inside.length;i++){
        if(arr_inside[i] != ""){
            str = str + arr_inside[i];
        }
    }
    answer = str.length;
    return answer;
}

var strtmp = "aabbaccc";
console.log(solution(strtmp));