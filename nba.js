//
//
//$(document).ready(function () {
//    var sportsObject = [];
//
//    $("#initiateplayerData").click(function (event) {
//        var filterNum = parseInt($("#filterbutton option:selected").val());
//        
//        sportsObject.sort(function (a, b) {
//            if (a[2] > b[2]) {
//                return 1;
//            } else if (a[2] < b[2]) {
//                return -1;
//            } else {
//                return 0;
//            }
//        });
//        sportsObject.sort(function (a, b) {
//            if (a[1] > b[1]) {
//                return 1;
//            } else if (a[1] < b[1]) {
//                return -1;
//            } else {
//                return 0;
//            }
//        });
//        sportsObject.sort(function (a, b) {
//            if (parseInt(a[filterNum]) > parseInt(b[filterNum])) {
//                return -1;
//            } else if (parseInt(a[filterNum]) < parseInt(b[filterNum])) {
//                return 1;
//            } else {
//                return 0;
//            }
//        });
//        $("#datavalidationrecords").hide();
//        $("#datavalidationone").hide();
//        $("#datavalidationtwo").hide();
//        
//        var count = 0;
//        if (isNaN(parseInt($('#numrecords').val()))){
//            $("#datavalidationrecords").show();
//            count++;
//        } else {
//            var minofRecords = parseInt($('#numrecords').val());
//        }
//        
//        if (isNaN(parseInt($('#minleveloneinput').val()))){
//            $("#datavalidationone").show();
//            count++;
//        } else {
//            var minleveloneFilter = parseInt($('#minleveloneinput').val());
//        }
//        if (isNaN(parseInt($('#minleveltwoinput').val()))){
//            $("#datavalidationtwo").show();
//            count++;
//        } else {
//            var minleveltwoFilter = parseInt($('#minleveltwoinput').val());
//        }
//        if(count > 0){
//            return false;
//        }
//        
//        $("#datavalidationrecords").hide();
//        $("#datavalidationone").hide();
//        $("#datavalidationtwo").hide();
//        
//        count = 0;
//        $("#maintable").html("<tbody><tr><th colspan='11'>Cumulatives Stats NBA 2016-2017 Regular Season</th></tr><tr>                        <th>Player</th><th>Current Team</th><th>Games</th><th>2PT</th><th>2PT %</th><th>3PT</th><th>3PT %</th><th>FT</th><th>FT %</th><th>Points</th><th>PPG</th></tr></tbody>");
//        for (var i = 0; i < sportsObject.length; i++) {
//            if (count < minofRecords && sportsObject[i][parseInt($("#minlevelone option:selected").val())] >= minleveloneFilter && sportsObject[i][parseInt($("#minleveltwo option:selected").val())] > minleveltwoFilter){
//                $("#maintable").append("<tr><td>" + sportsObject[i][2] + " " + sportsObject[i][1] + "</td><td>" + sportsObject[i][3] + " " + sportsObject[i][4] + "</td><td>" + sportsObject[i][5] + "</td><td>" + sportsObject[i][7].toString() + "/" + sportsObject[i][6].toString() + "</td><td>" + sportsObject[i][12] + "%</td><td>" + sportsObject[i][9].toString() + "/" + sportsObject[i][8].toString() + "</td><td>" + sportsObject[i][13] + "%</td><td>" + sportsObject[i][11].toString() + "/" + sportsObject[i][10].toString() + "</td><td>" + sportsObject[i][14].toString() + "%</td><td>" + sportsObject[i][15].toLocaleString() + "</td><td>" + sportsObject[i][16] + "</td></tr>");
//                count++;
//            }
//        }
//        return false;
//    });
//
//    $.ajax({
//        type: "GET",
//        url: "https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/cumulative_player_stats.json?playerstats=2PA,2PM,3PA,3PM,FTA,FTM",
//        dataType: 'json',
//        async: true,
//        headers: {
//            "Authorization": "Basic " + btoa("peteyoon14" + ":" + "9rEaCo8N$0y94vd")
//        },
//        success: function (data) {
//            var sportsData = data.cumulativeplayerstats.playerstatsentry;
//            for (var i = 0; i < sportsData.length; i++) {
//                sportsObject[i] = new Array(17);
//                sportsObject[i][0] = sportsData[i].player.ID;
//                sportsObject[i][1] = sportsData[i].player.LastName;
//                sportsObject[i][2] = sportsData[i].player.FirstName;
//                if (sportsData[i].hasOwnProperty('team')) {
//                    sportsObject[i][3] = sportsData[i].team.City;
//                    sportsObject[i][4] = sportsData[i].team.Name;
//                } else {
//                    sportsObject[i][3] = 'NOT ON TEAM';
//                    sportsObject[i][4] = '';
//                }
//                sportsObject[i][5] = sportsData[i].stats.GamesPlayed['#text'];
//                sportsObject[i][6] = sportsData[i].stats.Fg2PtAtt['#text'];
//                sportsObject[i][7] = sportsData[i].stats.Fg2PtMade['#text'];
//                sportsObject[i][8] = sportsData[i].stats.Fg3PtAtt['#text'];
//                sportsObject[i][9] = sportsData[i].stats.Fg3PtMade['#text'];
//                sportsObject[i][10] = sportsData[i].stats.FtAtt['#text'];
//                sportsObject[i][11] = sportsData[i].stats.FtMade['#text'];
//                sportsObject[i][12] = (parseInt(sportsObject[i][7])/parseInt(sportsObject[i][6])*100).toFixed(2);
//                sportsObject[i][13] = (parseInt(sportsObject[i][9])/parseInt(sportsObject[i][8])*100).toFixed(2);
//                sportsObject[i][14] = (parseInt(sportsObject[i][11])/parseInt(sportsObject[i][10])*100).toFixed(2);
//                for (var j = 12; j < 15; j++){
//                    if (isNaN(sportsObject[i][j])){
//                        sportsObject[i][j] = 0;
//                        sportsObject[i][j] = sportsObject[i][j].toFixed(2);
//                    }
//                }
//                sportsObject[i][15] = parseInt(sportsObject[i][7])*2 + parseInt(sportsObject[i][9])*3 + parseInt(sportsObject[i][11]);
//                sportsObject[i][16] = (sportsObject[i][15]/parseInt(sportsObject[i][5])).toFixed(2);
//            }
//        }
//    });
//});
var master = angular.module('myApp', []);
master.controller('myController', function ($scope, $http) {
    $http({
        method: "GET",
        url: "https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/cumulative_player_stats.json?playerstats=2PA,2PM,3PA,3PM,FTA,FTM",
        dataType: 'json',
        async: true,
        headers: {
            "Authorization": "Basic " + btoa("peteyoon14" + ":" + "9rEaCo8N$0y94vd")
        },
    }).then(function (response) {
        $scope.stats = response.data.cumulativeplayerstats.playerstatsentry;
    })
    
});
master.filter('percent', function () {
    return function (input) {
        return parseInt(input) + "%";
    };
});

master.filter('num', function () {
    return function (input) {
        return parseInt(input);
    };
});
