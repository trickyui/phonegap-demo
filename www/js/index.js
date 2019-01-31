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
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');

    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        console.log('Received Event: ' + id);
        navigator.splashscreen.show();

    }
};

function testAjax() {
    $.ajax({
        method: "GET",
        url:"./test.html",
        datatype: "text",
        success: function(resp){
            $('.modal-dialog').html(resp);
        }
    })
}

function onButtonPress(e) {
    if (e == 'c') {
        navigator.camera.getPicture(onSuccess, onFail);
        function onSuccess() {
            alert("Camera cleanup success.")
        }
        function onFail(message) {
            alert('Failed because: ' + message);
        }
    } else if (e == 'l') {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        function onSuccess(position) {
            alert('Latitude: ' + position.coords.latitude + '\n' +
                'Longitude: ' + position.coords.longitude + '\n' +
                'Altitude: ' + position.coords.altitude + '\n' +
                'Accuracy: ' + position.coords.accuracy + '\n' +
                'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
                'Heading: ' + position.coords.heading + '\n' +
                'Speed: ' + position.coords.speed + '\n' +
                'Timestamp: ' + position.timestamp + '\n');
        };

        function onError(error) {
            alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
        }
    }else if(e == 'd') {
        var string = device.platform;
        var deviceVersion = device.version;
        var model = device.model;
        alert('Device Platform :' + string + '\n' +
            'Device Version: '+ deviceVersion + '\n' +
            'Device Model: ' + model);
    }else if(e == 'b') {
        window.addEventListener("batterystatus", onBatteryStatus, false); 
        function onBatteryStatus(info) { 
            alert("Battery Status: " + info.level + "% \n" + " isPlugged: " + info.isPlugged); 
        }
    }
    else if(e == 'v') {
        navigator.vibrate(3000);
    }
}
