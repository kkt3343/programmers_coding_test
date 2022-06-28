// ==UserScript==
// @name         Namuwiki_power_ad_delete_script
// @encoding     utf-8
// @namespace    https://github.com/kkt3343/programmers_coding_test/tree/main
// @homepageURL  https://github.com/kkt3343/programmers_coding_test/tree/main
// @updateURL    https://github.com/kkt3343/programmers_coding_test/raw/main/namuwiki_ad_del.js
// @downloadURL  https://github.com/kkt3343/programmers_coding_test/raw/main/namuwiki_ad_del.js
//
// @version      3.6.0
// @description  This script can remove power link ads on Namuwiki.
// @author       kkt3343
//
// @match        https://namu.wiki/w/*
// @exclude      https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4:%EB%8C%80%EB%AC%B8
// @icon         https://www.google.com/s2/favicons?sz=64&domain=namu.wiki
// @grant        none
// @run-at       document-start
// ==/UserScript==

(() => {
    function delad(){
        var powerlink1 = 'https://w.namu.la/s/c9a62e8f39c5d7c146a5717bba8f8e26c84ad979137902370a1f2a4344cb9893';
        var powerlink2 = 'https://w.namu.la/s/8c1f1ba5362f931adf3562614fdb623c5b6cca9fac1de16ac4ee385310050e44';

        var xstr1 = '/html/body/div/div/div[2]/div/div/div/div/div/div/div/div';
        var v1 = document.evaluate(xstr1, document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);
        var v1_to_v2 = v1.singleNodeValue.childNodes[0];
        var xstr2, v2;
        if(v1_to_v2.tagName=='ARTICLE'){
            xstr2 = xstr1 +'/article/div[5]/div/div/div/div/div/div/div/div[5]/div/div/div';
        }
        else if(v1_to_v2.tagName=='DIV'){
            xstr2 = xstr1 +'/div[1]/div[5]/div/div/div/div/div/div/div/div[5]/div/div/div';
        }
        else{
        }
        v2 = document.evaluate(xstr2, document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);
        var num = v2.singleNodeValue.childElementCount;

        var xstr = xstr2 + '/div['+ String(num) +']/div[1]/div';
        var v = document.evaluate(xstr, document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);
        var num2 = v.singleNodeValue.childElementCount;

        var flag = true;
        for (var j = 1; j < 6 && flag; j++){
            var img_tmp = v.singleNodeValue.childNodes[num2-j].getElementsByTagName('img');
            var keycount = 0;
            for(var i = 0; i < img_tmp.length; i++){
                if(img_tmp[i].src == powerlink1){
                    keycount++;
                }
                if(img_tmp[i].src == powerlink2){
                    keycount++;
                }
            }
            if(keycount == 2){
                console.warn("광고div");
                flag = false;
                v.singleNodeValue.childNodes[num2-j].remove();
                console.warn("실행 완료_start_form");
            }
            else{
                console.warn("광고div아님");
            }
        }
    }
    setTimeout(delad, 800);

    const elt = document.createElement('script');
    elt.innerHTML =
    `
    var arr = new Array();
    function is_same_previous_url(){
        if(arr[arr.length - 1] == arr[arr.length - 2]){
            arr.pop();
        }
        else{
            var tmpstr = arr[arr.length - 1];
            arr.length = 0;
            arr.push(tmpstr);

            //여기부터
            var powerlink1 = 'https://w.namu.la/s/c9a62e8f39c5d7c146a5717bba8f8e26c84ad979137902370a1f2a4344cb9893';
            var powerlink2 = 'https://w.namu.la/s/8c1f1ba5362f931adf3562614fdb623c5b6cca9fac1de16ac4ee385310050e44';

            var xstr1 = '/html/body/div/div/div[2]/div/div/div/div/div/div/div/div';
            var v1 = document.evaluate(xstr1, document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);
            var v1_to_v2 = v1.singleNodeValue.childNodes[0];
            var xstr2, v2;
            if(v1_to_v2.tagName=='ARTICLE'){
                xstr2 = xstr1 +'/article/div[5]/div/div/div/div/div/div/div/div[5]/div/div/div';
            }
            else if(v1_to_v2.tagName=='DIV'){
                xstr2 = xstr1 +'/div[1]/div[5]/div/div/div/div/div/div/div/div[5]/div/div/div';
            }
            else{
            }
            v2 = document.evaluate(xstr2, document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);
            var num = v2.singleNodeValue.childElementCount;

            var xstr = xstr2 + '/div['+ String(num) +']/div[1]/div';
            var v = document.evaluate(xstr, document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);
            var num2 = v.singleNodeValue.childElementCount;

            var flag = true;
            for (var j = 1; j < 6 && flag; j++){
                var img_tmp = v.singleNodeValue.childNodes[num2-j].getElementsByTagName('img');
                var keycount = 0;
                for(var i = 0; i < img_tmp.length; i++){
                    if(img_tmp[i].src == powerlink1){
                        keycount++;
                    }
                    if(img_tmp[i].src == powerlink2){
                        keycount++;
                    }
                }
                if(keycount == 2){
                    console.warn("광고div");
                    flag = false;
                    v.singleNodeValue.childNodes[num2-j].remove();
                    console.warn("실행 완료_start_form");
                }
                else{
                    console.warn("광고div아님");
                }
            }
            //여기까지
        }
    }
    function reload_delad(){
        var target = document.querySelector('title');
        if(!target){
            window.setTimeout(reload_delad,500);
            return;
        }
        arr.push(target.innerHTML);
        var observer = new MutationObserver(function(mutations) {
            arr.push(target.innerHTML);
            is_same_previous_url();
        });

        var config = { subtree: true, characterData: true, childList: true };
        observer.observe(target, config);
    }
    reload_delad();
    `;
    document.head.appendChild(elt);
})()