/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.getElementById("add").addEventListener("click",add);
        document.getElementById("sub").addEventListener("click",sub);
        document.getElementById("mul").addEventListener("click",mul);
        document.getElementById("div").addEventListener("click",div);
        document.getElementById("power").addEventListener("click",power);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

function getN1(){
    return parseInt(document.getElementById("n1").value);
}

function getN2(){
    return parseInt(document.getElementById("n2").value);
}

function ans(a){
    alert("Answer: " + a);
}

function add(){
    ans(getN1()+getN2());
}

function sub(){
    ans(getN1()-getN2());
}

function mul(){
    ans(getN1()*getN2());
}

function div(){
    ans(getN1()/getN2());
}

function dialogAlert(ans){
    var title = "ANSWER";
    var mssg = ans;
    var btnName = "Alright!";
    navigator.notification.alert(mssg,cb,title,btnName);

    function cb(){}
}

function power(){
    var title = "OPTION";
    var mssg = "Number: ";
    var btnLbls = ["SQUARE","CUBE"];
    var defTxt = "";
    navigator.notification.prompt(mssg,cb,title,btnLbls,defTxt);

    function cb(res){
        var n = parseInt(res.input1);
        if (res.buttonIndex == 1){
            dialogAlert(n*n);
        }
        else{
            dialogAlert(n*n*n);
        }
    }
}