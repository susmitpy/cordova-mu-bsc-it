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
        document.getElementById("info").addEventListener("click",info);
        document.getElementById("acc").addEventListener("click",acc);
        document.getElementById("lang").addEventListener("click",lang);
        document.getElementById("locale").addEventListener("click",locale);
        document.getElementById("date").addEventListener("click",date);
        document.getElementById("curr").addEventListener("click",curr);
        document.getElementById("vib").addEventListener("click",vib);
        document.getElementById("pat").addEventListener("click",pat);
        document.getElementById("net").addEventListener("click",net);
        document.addEventListener("online",online,false);
        document.addEVentListener("offline",offline,false);
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

function info(){
    var cordova = "Cordova: " + device.cordova;
    var model = "\nModel: " + device.model;
    var platform = "\nPlatform: " + device.platform;
    var uuid = "\nUUID: " + device.uuid;
    var version = "\nVersion: " + device.version;
    alert(cordova+model+platform+uuid+version);
}

function acc(){
    navigator.accelerometer.getCurrentAcceleration(onSuc,onErr);
    function onSuc(a){
        var x = "X: " + a.x;
        var y = "\nY: " + a.y;
        var z = "\nZ: " + a.z;
        var t = "\nTimestamp: " + a.timestamp;
        alert(x+y+z+t);
    }
    function onErr(){alert("Error");}
}

function lang(){
    navigator.globalization.getPreferredLanguage(onSuc, onErr);

    function onSuc(l){
        alert(l.value);
    }

    function onErr(){alert("Error");}
}

function locale(){
    navigator.globalization.getLocaleName(onSuc, onErr);

    function onSuc(l){
        alert(l.value);
    }

    function onErr(){alert("Error");}
}

function date(){
    var d = new Date();
    var options = {
        formatLength: "short",
        selector: "date and time"
    };

    navigator.globalization.dateToString(d, onSuc, onErr, options);

    function onSuc(l){
        alert(l.value);
    }

    function onErr(){alert("Error");}
}

function curr(){
    var cc = "USD";
    navigator.globalization.getCurrencyPattern(cc, onSuc, onErr);

    function onSuc(l){
        alert(l.code);
    }

    function onErr(){alert("Error");}
}

function vib(){
    navigator.vibrate(3000);
}

function pat(){
    var pattern = [3000,1000,2000,1000]
    navigator.vibrate(pat);
}

function net(){
    var n = navigator.connection.type;
    var s = {}
    s[Connection.UNKNOWN] = "Unknown";
    s[Connection.ETHERNET] = "ETHERNET";
    s[Connection.WIFI] = "ETHERNET";
    s[Connection.CELL_2G] = "CELL_2G";
    s[Connection.CELL_3G] = "CELL_2G";
    s[Connection.CELL_4G] = "CELL_4G";
    s[Connection.NONE] = "NONE";
    alert(s[n]);
}

function online(){
    alert("Online!");
}

function offline(){
    alert("Offline");
}