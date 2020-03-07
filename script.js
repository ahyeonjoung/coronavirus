var Nav = (function() {
  
  var
  	nav 		= $('.nav'),
  	burger	= $('.burger'),
    page 		= $('.page'),
    section = $('.section'),
    link		= nav.find('.nav__link'),
    navH		= nav.innerHeight(),
    isOpen 	= true,
    hasT 		= false;
  
  var toggleNav = function() {
    nav.toggleClass('nav--active');
    burger.toggleClass('burger--close');
    shiftPage();
  };
  
  var shiftPage = function() {
    if (!isOpen) {
      page.css({
        'transform': 'translateY(' + navH + 'px)',
        '-webkit-transform': 'translateY(' + navH + 'px)'
      });
      isOpen = true;
    } else {
      page.css({
        'transform': 'none',
        '-webkit-transform': 'none'
      });
      isOpen = false;
    }
  };
  
  var switchPage = function(e) {
    var self = $(this);
    var i = self.parents('.nav__item').index();
    var s = section.eq(i);
    var a = $('section.section--active');
    var t = $(e.target);
    
    if (!hasT) {
      if (i == a.index()) {
        return false;
      }
      a
      .addClass('section--hidden')
      .removeClass('section--active');

      s.addClass('section--active');

      hasT = true;

      a.on('transitionend webkitTransitionend', function() {
        $(this).removeClass('section--hidden');
        hasT = false;
        a.off('transitionend webkitTransitionend');
      });
    }

    return false;
  };
  
  var keyNav = function(e) {
    var a = $('section.section--active');
    var aNext = a.next();
    var aPrev = a.prev();
    var i = a.index();
    
    
    if (!hasT) {
      if (e.keyCode === 37) {
      
        if (aPrev.length === 0) {
          aPrev = section.last();
        }

        hasT = true;

        aPrev.addClass('section--active');
        a
          .addClass('section--hidden')
          .removeClass('section--active');

        a.on('transitionend webkitTransitionend', function() {
          a.removeClass('section--hidden');
          hasT = false;
          a.off('transitionend webkitTransitionend');
        });

      } else if (e.keyCode === 39) {

        if (aNext.length === 0) {
          aNext = section.eq(0)
        } 


        aNext.addClass('section--active');
        a
          .addClass('section--hidden')
          .removeClass('section--active');

        hasT = true;

        aNext.on('transitionend webkitTransitionend', function() {
          a.removeClass('section--hidden');
          hasT = false;
          aNext.off('transitionend webkitTransitionend');
        });

      } else {
        return
      }
    }  
  };
    
  var bindActions = function() {
    burger.on('click', toggleNav);
    link.on('click', switchPage);
    $(document).on('ready', function() {
       page.css({
        'transform': 'translateY(' + navH + 'px)',
         '-webkit-transform': 'translateY(' + navH + 'px)'
      });
    });
    $('body').on('keydown', keyNav);
  };
  
  var init = function() {
    bindActions();
  };
  
  return {
    init: init
  };
  
}());

Nav.init();

var chartData = [{
  "date": "2020-02-22",
  "distance": 218,
  "townName": "218",
  "townSize": 17,
  "number": 433,
  "longitude": -96.796988,
}, {
  "date": "2020-02-23",
  "distance": 349,
  "townName": "602",
  "townSize": 11,
  "number": 602,
  "longitude": -97.516428,
}, {
  "date": "2020-02-24",
  "distance": 603,
  "townName": "833",
  "townSize": 10,
  "number": 833,
  "longitude": -94.578567,
}, {
  "date": "2020-02-25",
  "distance": 534,
  "townName": "977",
  "townSize": 18,
  "number": 977,
  "longitude": -104.990251,
},{
  "date": "2020-02-26",
  "distance": 534,
  "townName": "1261",
  "townSize": 18,
  "number": 1261,
  "longitude": -104.990251,
},{
  "date": "2020-02-27",
  "distance": 534,
  "townName": "1595",
  "townSize": 18,
  "number": 1595,
  "longitude": -104.990251,
},{
  "date": "2020-02-28",
  "distance": 218,
  "townName": "2337",
  "townSize": 17,
  "number": 2337,
  "longitude": -96.796988,
},{
  "date": "2020-02-29",
  "distance": 218,
  "townName": "3150",
  "townSize": 17,
  "number": 3150,
  "longitude": -96.796988,
},{
  "date": "2020-03-01",
  "distance": 218,
  "townName": "3736",
  "townSize": 17,
  "number": 3736,
  "longitude": -96.796988,
},{
  "date": "2020-03-02",
  "distance": 218,
  "townName": "4335",
  "townSize": 17,
  "number": 4335,
  "longitude": -96.796988,
},{
  "date": "2020-03-03",
  "distance": 218,
  "townName": "5186",
  "townSize": 17,
  "number": 5186,
  "longitude": -96.796988,
},{
  "date": "2020-03-04",
  "distance": 218,
  "townName": "5621",
  "townSize": 17,
  "number": 5621,
  "longitude": -96.796988,
},{
  "date": "2020-03-05",
  "distance": 218,
  "townName": "6088",
  "townSize": 17,
  "number": 6088,
  "longitude": -96.796988,
},{
  "date": "2020-03-06",
  "distance": 218,
  "townName": "6593",
  "townSize": 17,
  "number": 6593,
  "longitude": -96.796988,
}];

var chart = AmCharts.makeChart("chartdiv", {
  type: "serial",
  theme:"light",
  dataDateFormat: "YYYY-MM-DD",
  dataProvider: chartData,
  startDuration: 1,
  categoryField: "date",
  valueAxes:[{
    axisAlpha:0,
    dashLength:2
  }],
  categoryAxis: {
    parseDates: true,
    minPeriod: "DD",
    autoGridCount: false,
    gridCount: 50,
    gridAlpha:0,    
    dateFormats: [{
      period: 'DD',
      format: 'DD'
    }, {
      period: 'WW',
      format: 'MMM DD'
    }, {
      period: 'MM',
      format: 'MMM'
    }, {
      period: 'YYYY',
      format: 'YYYY'
    }]
  },

  graphs: [{
    valueField: "number",
    title: "number/city",
    valueAxis: "a2",
    lineColor: "#90afde",
    lineThickness: 1,
    bullet: "round",
    bulletSizeField: "townSize",
    bulletBorderColor: "#90afde",
    bulletBorderAlpha: 1,
    bulletBorderThickness: 2,    
    bulletAlpha:1,
    bulletColor: "#FFFFFF",
    labelText: "[[townName]]",
    labelPosition: "bottom",
    labelOffset: 10,
    balloonText: "number: [[value]]",
    showBalloon: true
  }],
  chartCursor: {
    zoomable: false,
    categoryBalloonDateFormat: "DD",
    valueBalloonsEnabled: false,
    cursorAlpha: 0.1,
    cursorColor:"#90afde",
    fullWidth: true
  }
});

/**
 * Chart events
 */
chart.addListener("changed", function(event) {
  resetMarkers();
  if ( event.index === undefined )
    return;
  highlightMarker(chart.dataProvider[event.index].marker);
});

chart.addListener("init", function() {
  chart.chartCursor.addListener("onHideCursor", function() {
    resetMarkers();
  });
});

/**
 * Create a map
 */
var map;

function mapInit() {

  // set map options
  var mapOptions = {
    center: {
      lat: 37.561381,
      lng: 126.945029
    },
    zoom: 10
  };

  // create map instance
  map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

  // add markers (and assemble data for the lines)
   var locations = [['경기도 가평군 청평면 청평리 301-4 2층 201호 ,202호 (경춘로 871)'	,37.7413548256	,127.4227294396],
['경기도 가평군 청평면 청평리 301-4 3층 304호, 4층 407,408호 (경춘로 871)'	,37.7413548256	,127.4227294396],
['경기도 가평군 청평면 청평리 301-4 6층 602, 608호 (경춘로 871 )'	,37.7413548256	,127.4227294396],
['경기도 가평군 청평면 고재길 184'	,37.7022767359	,127.5065222950],
['경기도 가평군 청평면 골안길 7-28'	,37.7421612140	,127.4214519568],
['경기도 가평군 청평면 은고개로 19'	,37.7402418229	,127.4240845741],
['경기도 가평군 청평중앙로 82번길 9 3동 414호'	,37.7396410738	,127.4232756699],
['경기도 가평군 청평면 청평리 301-4 2층 203호 (경춘로 871)'	,37.7413548256	,127.4227294396],
['경기도 가평군 청평면 청평리 301-4 5층 508호 (경춘로 871 )'	,37.7413548256	,127.4227294396],
['경기도 가평군 청평면 청평리 301-4 7층 (경춘로 871)'	,37.7413548256	,127.4227294396],
['경기도 가평군 청평면 청평리 416번지 2층 1호, 3층 1호 (잠곡로 11)'	,37.7371028806	,127.4200394257],
['경기도 가평군 청평면 청평중앙로 72'	,37.7392947993	,127.4218442387],
['경기도 가평군 청평면 청평리 317-4번지 2층,3층 (청평중앙로 76)'	,37.7395196694	,127.4219476115],
['경기도 가평군 청평면 청평리 301-4 1층 104호 (경춘로 871 )'	,37.7413548256	,127.4227294396],
['경기도 고양시 덕양구 화중로 76'	,37.6338526434	,126.8310655825],
['경기도 고양시 은빛로 61 2층'	,37.6378312183	,126.8347385556],
['경기도 고양시 일산동구 장항동 890-3 제3층 제302호(중앙로 1195 )'	,37.6532214674	,126.7764801603],
['경기도 고양시 덕양구 동헌로 125-23'	,37.7087918347	,126.8705388983],
['경기도 고양시 덕양구 원흥동 629-1 4층 417호 (삼송로 12 )'	,37.6496036916	,126.8753125508],
['경기도 고양시 덕양구 화정동 909-1 4층 (은빛로 41)'	,37.6380801401	,126.8324040801],
['경기도 고양시 덕양구 화정동 967-1 (지하2층 전관)(화중로104번길 26)'	,37.6358278671	,126.8325111900],
['경기도 고양시 덕양구 화정동 967-1 8층 1.2.7.8호 (화중로104번길 26)'	,37.6358278671	,126.8325111900],
['경기도 고양시 덕양구 화정동 967-1번지 10층 1001,2,5~8호(화중로104번길 26)'	,37.6358278671	,126.8325111900],
['경기도 고양시 덕양구 화정동 967-1번지 10층 1004호 (화중로104번길 26)'	,37.6358278671	,126.8325111900],
['경기도 고양시 덕양구 화정동 967-1번지 614호 (화중로104번길 26)'	,37.6358278671	,126.8325111900],
['경기도 고양시 덕양구 화정동 967-1번지 803호 (화중로104번길 26)'	,37.6358278671	,126.8325111900],
['경기도 고양시 덕양구 화정동 967-1번지 806호 (화중로104번길 26)'	,37.6358278671	,126.8325111900],
['경기도 고양시 일산동구 숲속마을로 38, 3층'	,37.6672997279	,126.7990716299],
['경기도 고양시 일산동구 장항동 898-1 504호 (장백로 172)'	,37.6501605360	,126.7777132553],
['경기도 고양시 일산동구 중앙로 1194 502-2호 (마두동 798-3)'	,37.6534662253	,126.7772613258],
['경기도 고양시 일산서구 주엽동 114번지 4층 401호,402호 (주화로 84 )'	,37.6702416029	,126.7588485665],
['경기도 고양시 일산서구 주엽동 19 6층 (강성로 145 )'	,37.6715408327	,126.7597397576],
['경기도 고양시 일산서구 탄현동 1563-3 303호 (일현로 47 )'	,37.6914852414	,126.7627131814],
['경기도 고양시 덕양구 원흥동 629-1 4층 416호 (삼송로 12 )'	,37.6496036916	,126.8753125508],
['경기도 고양시 덕양구 화정동 906-3번지 3층 (화중로130번길 52 )'	,37.6381103569	,126.8346246296],
['경기도 고양시 덕양구 화정동 967-1 (9층 전관) (화중로104번길 26)'	,37.6358278671	,126.8325111900],
['경기도 고양시 덕양구 화정동 967-1 805호 (화중로104번길 26)'	,37.6358278671	,126.8325111900],
['경기도 고양시 덕양구 화정동 967-1,2번지 609호 (화중로104번길 26)'	,37.6358278671	,126.8325111900],
['경기도 고양시 덕양구 화정동 967-1번지 10층 1003호 (화중로104번길 26)'	,37.6358278671	,126.8325111900],
['경기도 고양시 덕양구 화정동 967-1번지 304호 (화중로104번길 26)'	,37.6358278671	,126.8325111900],
['경기도 고양시 덕양구 화정동 967-1번지 605,606호 (화중로104번길 26)'	,37.6358278671	,126.8325111900],
['경기도 고양시 덕양구 화정동 967-1번지 7층 전체 (화중로104번길 26)'	,37.6358278671	,126.8325111900],
['경기도 과천시 별양동 1-11번지 305-1호(별양상가로 7)'	,37.4279392943	,126.9929171619],
['경기도 과천시 별양동 1-19 9층, 10층 (별양상가3로 11 )'	,37.4262182774	,126.9918102161],
['경기도 과천시 참마을로 10-10~12'	,	,],
['경기도 과천시 새술막길 18 1~2층'	,37.4290743508	,126.9906912810],
['경기도 과천시 별양상가2로 20'	,37.4267499326	,126.9924993020],
['경기도 과천시 별양동 1-13 4층 (별양상가2로 14 )'	,37.4272455238	,126.9929511475],
['경기도 과천시 별양상가로 7 5층'	,37.4279392943	,126.9929171619],
['경기도 광명시 새터로 57'	,37.4731845433	,126.8542131053],
['경기도 광명시 시청로 34, 2층 (철산동 225-2)'	,37.4796837991	,126.8641492718],
['경기도 광명시 한내일로41'	,37.4558815236	,126.8824801240],
['경기도 광주시 초월읍 산이리 91-4 3층 (산수로 11-23 )'	,37.3647322379	,127.3132467532],
['경기도 광주시 경안로 25번길 31 (2층)'	,37.4069441792	,127.2566984785],
['경기도 광주시 역동로 34번길 33 2층'	,37.4078080214	,127.2572209578],
['경기도 광주시 역동로 34번길 33 3층'	,37.4078080214	,127.2572209578],
['경기도 광주시 송정동 334-1 가동 2-3층 전부 (중앙로 307-7)'	,37.4272254046	,127.2568686048],
['경기도 광주시 경안동 74-18번지 외 1필지 3층 (중앙로 150 )'	,37.4128356634	,127.2572040674],
['경기도 광주시 초월읍 산이리 91-4 1층 일부 (산수로 11-23)'	,37.3647322379	,127.3132467532],
['경기도 구리시 수택동 534-2 502호, 503호 (경춘로 274 )'	,37.6024479630	,127.1451715932],
['경기도 구리시 수택동 516-28 3층 (수택천로 11-2)'	,37.5984483561	,127.1445638224],
['경기도 구리시 동구릉로 120 6층'	,37.6097555187	,127.1369293038],
['경기도 구리시 검배로 61 4,5층'	,37.5966992225	,127.1455909365],
['경기도 구리시 갈매동 604-10 7층 701호~704호 (갈매중앙로 81-8)'	,	,],
['경기도 구리시 왕숙천로 507 2층'	,37.6197502325	,127.1422029278],
['경기도 구리시 아차산로405번길 40'	,37.5915643932	,127.1291180254],
['경기도 구리시 수택동 534-2 (2층)'	,37.6024479630	,127.1451715932],
['경기도 구리시 수택동 487-7번지 2층 (검배로 54 )'	,37.5967816466	,127.1444813986],
['경기도 구리시 검배로48번길 10 2층'	,37.5971973539	,127.1434291022],
['경기도 구리시 갈매중앙로 89-5 7층'	,37.6323367991	,127.1170651197],
['경기도 군포시 산본동 80번지 5층 501호, 502호 (산본천로199번길 58 )'	,37.3723925054	,126.9375376592],
['경기도 군포시 당산로135번길 39 (3층)'	,37.3622498191	,126.9426712510],
['경기도 군포시 산본동 80번지 3층 301호 (산본천로199번길 58 )'	,37.3723925054	,126.9375376592],
['경기도 군포시 산본천로 199번길 39 208호외 6호'	,37.3716719380	,126.9379785750],
['경기도 군포시 군포로 787-1 (2층)'	,37.3752506132	,126.9410689635],
['경기도 김포시 봉화로 9-23 (3층)'	,37.6170240677	,126.7159933428],
['경기도 김포시 북변동 277-17 (2층,3층) (중구로 83 )'	,37.6277960896	,126.7108543016],
['경기도 김포시 북변중로 68 (2,3층)'	,37.6268559989	,126.7096119047],
['경기도 김포시 사우동 253-3 5층 501호-1,2호 (사우중로11번길 9)'	,37.6164917001	,126.7156669230],
['경기도 김포시 양촌읍 양곡2로 30번길 7-23'	,37.6550769596	,126.6278409216],
['경기도 김포시 월곶면 포내리 111-3 3층 2호 (김포대학로 104 )'	,37.7286425122	,126.5467052334],
['경기도 김포시 사우동 253-3 4층 404호 (사우중로11번길 9 )'	,37.6164917001	,126.7156669230],
['경기도 김포시 풍무동 풍무2지구 40블럭 7로트'	,	,],
['경기도 김포시 월곶면 군하리 55-11 2층 (애기봉로 11)'	,37.7162348541	,126.5557070745],
['경기도 김포시 254-3 제 5층 제 1호'	,	,],
['경기도 김포시 사우동 253-3 3층 303호 (사우중로11번길 9)'	,37.6164917001	,126.7156669230],
['경기도 김포시 풍무로 145-1'	,37.6085810029	,126.7231040142],
['경기도 김포시 사우동 253-3 5층 505호 (사우중로11번길 9)'	,37.6164917001	,126.7156669230],
['경기도 김포시 사우동 253-3 3층 306호 (사우중로11번길 9 )'	,37.6164917001	,126.7156669230],
['경기도 김포시 사우동 251-4 2,3층 (사우중로 13)'	,37.6167463367	,126.7166400158],
['경기도 남양주시 화도읍 마석우리 220-18 4층 (마석로 28 )'	,37.6533354555	,127.3068514560],
['경기도 남양주시 화도읍 창현리 495-1 3층 (마석중앙로 38-1 )'	,37.6525055821	,127.3037204842],
['경기도 남양주시 화도읍 마석우리 253-2번지 2층(경춘로 2004)'	,37.6508660311	,127.3106261443],
['경기도 남양주시 홍유릉로248번길 47 102동 903호'	,37.6285110891	,127.2025647549],
['경기도 남양주시 평내동 578-3 10층 1001호(평내로 29번길 41)'	,37.6453360980	,127.2349138247],
['경기도 남양주시 와부읍 덕소리 112-3 4층(덕소로97번길 6)'	,37.5855887705	,127.2128660348],
['경기도 남양주시 별내중앙로 30 (3층)'	,37.6458608018	,127.1256179615],
['경기도 남양주시 별내동 1006-1 5층 502호 (별내중앙로 34 )'	,37.6458608018	,127.1256179615],
['경기도 남양주시 미금로 24 아파트내 상가 지하1층'	,37.6076184815	,127.1533128366],
['경기도 남양주시 다산신도시 지금지구 8-3블럭 4층'	,	,],
['경기도 남양주시 금곡동 419-11 4층 401호 (금곡로 43)'	,37.6341418372	,127.2080064485],
['경기도 남양주시 가운로 1길 19 3층'	,37.6045328759	,127.1566247299],
['경기도 남양주시 화도읍 월산리 65-3번지 다동 (경춘로 2238)'	,37.6556440979	,127.3360755820],
['경기도 남양주시 평내동 596-3 2층, 3층 301호 (평내로161번길 4-3)'	,37.6476086557	,127.2428640068],
['경기도 남양주시 퇴계원면 퇴계원리 60-31 2층 (도제원로 104 )'	,37.6573526765	,127.1456276062],
['경기도 남양주시 오남로 진건오남로 512번길 6, 3층'	,	,],
['경기도 남양주시 별내중앙로 30 (4,5층)'	,37.6458608018	,127.1256179615],
['경기도 남양주시 별내동 931-3 2~6층 (순화궁로 347)'	,37.6576637860	,127.1253427367],
['경기도 남양주시 별내5로 5번길 8-5 401호'	,37.6504409248	,127.1132627590],
['경기도 남양주시 늘을2로14번길 3 6층'	,37.6540301351	,127.2440518749],
['경기도 남양주시 늘을3로 65-6 7층'	,37.6596360052	,127.2475265540],
['경기도 남양주시 미금로 157'	,37.6163050496	,127.1593446404],
['경기도 동두천시 지행동 695-5, 803호 (동두천로 129)'	,37.8929722174	,127.0547001781],
['경기도 동두천시 생연동 601-19번지 7층(전부) (중앙로 280)'	,37.9062430852	,127.0543683607],
['경기도 동두천시 생연동 612-23 2.3층 (중앙로 296)'	,37.9076844138	,127.0547332337],
['경기도 동두천시 중앙로 278 (3층)'	,37.9061349985	,127.0543114320],
['경기도 부천시 원미구 중동로 254번길 36 204호,205호'	,37.5019003952	,126.7710232105],
['경기도 부천시 중동 798-1 3층 (부일로 354 )'	,37.4875983086	,126.7693261558],
['경기도 부천시 원미구 중동로 254번길 36 8층 804호,805호'	,37.5019003952	,126.7710232105],
['경기도 부천시 원미구 중동 1146 8층 808호( 중동로254번길 36)'	,37.5019003952	,126.7710232105],
['경기도 부천시 원미구 중동 1146 8층 801호 ( 중동로254번길 36)'	,37.5019003952	,126.7710232105],
['경기도 부천시 원미구 중동 1146 4층 408호 ( 중동로254번길 36)'	,37.5019003952	,126.7710232105],
['경기도 부천시 원미구 상동 546-8 3층 301호,302호 (소향로 29 )'	,37.5038145960	,126.7510223614],
['경기도 부천시 소사구 송내동 396-4 4층 (경인로 64 )'	,37.4833766775	,126.7623520227],
['경기도 부천시 석천로44번길 29, 지하'	,37.4911528871	,126.7626663133],
['경기도 부천시 경인로 161 3층'	,37.4841195268	,126.7734412018],
['경기도 부천시 원미구 중동로 254번길 36 8층 806호,807호'	,37.5019003952	,126.7710232105],
['경기도 부천시 원미구 부일로 449번길 40 부광빌딩 (6층)'	,37.4878994253	,126.7806321711],
['경기도 부천시 원미구 역곡동 220-1 4층 (부일로 781 )'	,37.4879870658	,126.8156043711],
['경기도 부천시 원미구 중동 1146 8층 802호 ( 중동로254번길 36)'	,37.5019003952	,126.7710232105],
['경기도 부천시 원미구 중동 1146 7층 ( 중동로254번길 36)'	,37.5019003952	,126.7710232105],
['경기도 성남시 매화로37번길 9 건물 앞'	,37.4110285649	,127.1327904725],
['경기도 성남시 분당구 분당로 263'	,	,],
['경기도 성남시 분당구 이매동 91-1 2층 전체 (방아로 9 )'	,37.3980571889	,127.1299108378],
['경기도 성남시 분당구 황새울로 335번길 10'	,37.3866406946	,127.1219308958],
['경기도 성남시 분당구 황새울로335번길 10 (4층)'	,37.3866406946	,127.1219308958],
['경기도 성남시 성남대로 1222 5층6층'	,37.4388024252	,127.1282395326],
['경기도 성남시 수정구 성남대로 1222 6층 일부'	,37.4388024252	,127.1282395326],
['경기도 성남시 수정구 수정로171번길 7-1 (3층)'	,37.4435215299	,127.1383498613],
['경기도 성남시 수정로 158'	,37.4421619374	,127.1375451046],
['경기도 성남시 원터로 15'	,37.4287201445	,127.1442659696],
['경기도 성남시 중원구 광명로 110 지하,2층,3층'	,37.4356889660	,127.1408215486],
['경기도 성남시 중원구 광명로 81 3층 301호'	,37.4346920659	,127.1380401753],
['경기도 성남시 중원구 산성대로 202'	,37.4370223146	,127.1409369885],
['경기도 성남시 중원구 산성대로 202 (5층)'	,37.4370223146	,127.1409369885],
['경기도 성남시 중원구 성남대로1147번길 10 2,3,4층'	,37.4320272450	,127.1279005764],
['경기도 성남시 중원구 성남동 2612번지 4층 (광명로 130)'	,37.4367499964	,127.1426539771],
['경기도 성남시 중원구 원터로 105번길 28 (성남동 2584)'	,37.4347442415	,127.1396786193],
['경기도 성남시 둔촌대로 388'	,37.4325577408	,127.1591195953],
['경기도 성남시 분당구 미금일로90번길 36-9 3층'	,37.3492593642	,127.1107662858],
['경기도 성남시 분당구 장미로 139 (3,4층)'	,37.4141428019	,127.1357101852],
['경기도 성남시 분당구 황새울로258번길 10-3 2층 전체'	,37.3802219704	,127.1163543931],
['경기도 성남시 분당구 황새울로335번길 10'	,37.3866406946	,127.1219308958],
['경기도 성남시 수정구 성남대로 1222 5층 일부'	,37.4388024252	,127.1282395326],
['경기도 성남시 수정구 수정로 71 (306,307호)'	,37.4400547318	,127.1283207197],
['경기도 성남시 수정구 위례광장로 19, 1001호~1003호'	,37.4656026581	,127.1404017302],
['경기도 성남시 야탑로 95 4층'	,37.4100863534	,127.1292421328],
['경기도 성남시 중원구 광명로 100번길 9 3층'	,37.4349143295	,127.1406280442],
['경기도 성남시 중원구 광명로 132 (4, 5층)'	,37.4368848790	,127.1428802137],
['경기도 성남시 중원구 성남동 2612번지 5층 (광명로 130)'	,37.4367499964	,127.1426539771],
['경기도 수원시 웰빙타운로 41'	,37.3050153095	,127.0467255328],
['경기도 수원시 팔달구 효원로249번길 18-1'	,37.2634290170	,127.0297012343],
['경기도 수원시 권선구 세류동 42-40 4층 센터(팔달로 110번길 19)'	,37.2661798642	,127.0116980415],
['경기도 수원시 영통구 동수원로 514 2층'	,37.2727134717	,127.0469210187],
['경기도 수원시 영통구 영통로214번길 17, 5층'	,37.2465158514	,127.0580864190],
['경기도 수원시 장안구 경수대로 1082-7, 3층전체 4층 전체'	,37.3098976530	,126.9943653677],
['경기도 수원시 장안구 영화동 438-11번지 외 1필지 3층 전체 (영화로 1)(영화로 1)'	,37.2874532121	,127.0103923980],
['경기도 수원시 장안구 파장동 209-1 115호 (경수대로 1082-7)'	,37.3098976530	,126.9943653677],
['경기도 수원시 장안구 파장동 209-1 1층 122호 (경수대로 1082-7)'	,37.3098976530	,126.9943653677],
['경기도 수원시 장안구 파장동 209-1번지112,125,126,127호 (경수대로 1082-7)'	,37.3098976530	,126.9943653677],
['경기도 수원시 정조로 384번길 28'	,37.2441042084	,127.0160345970],
['경기도 수원시 팔달구 팔달로 3가 79 4층 전체 (행궁로 77 )'	,	,],
['경기도 수원시 팔달구 화서동 644-4 501,504호 (덕영대로697번길 21-7)'	,37.2851281950	,126.9908949791],
['경기도 수원시 경수대로 927번길 17'	,37.3010407831	,127.0082281900],
['경기도 수원시 권선구 경수대로191번길 20'	,37.2445186555	,127.0162826203],
['경기도 수원시 권선구 세권로 1771 (3층)'	,	,],
['경기도 수원시 권선구 효원로 90 4층 전체'	,37.2661798700	,127.0116191253],
['경기도 수원시 영통구 봉영로 1612 3층'	,37.2544088046	,127.0750001575],
['경기도 수원시 영통구 청명로21번길 20 (4층)'	,37.2502704110	,127.0792455204],
['경기도 수원시 장안구 송죽동 444-1 2층 201호 (만석로 207) (만석로 207 )'	,37.3048972674	,127.0009193334],
['경기도 수원시 장안구 영화동 446-3 2층 201호 (장안로7번길 18 )'	,37.2863181177	,127.0059492471],
['경기도 수원시 장안구 파장동 209-1 205호 (경수대로 1082-7)'	,37.3098976530	,126.9943653677],
['경기도 수원시 장안구 파장동 209-1 203호, 204호(경수대로 1082-7)'	,37.3098976530	,126.9943653677],
['경기도 수원시 장안구 파장동 627-9 4층 1/2 (경수대로 1030)'	,37.3072849470	,126.9995318462],
['경기도 수원시 팔달구 매산로 27-1'	,	,],
['경기도 수원시 팔달구 매산로 46 4층 전체(매산로2가 61-3)'	,37.2682344874	,127.0063431072],
['경기도 수원시 팔달구 향교로 37, 2층'	,37.2689913834	,127.0049789681],
['경기도 수원시 권선구 경수대로 191번지길 20, 1층 일부, 2층 일부'	,37.2445186555	,127.0162826203],
['경기도 시흥시 봉우재로 65'	,37.3481926074	,126.7464192782],
['경기도 시흥시 신천로 91(신천동) 765-2번지 3층'	,37.4384352304	,126.7857729132],
['경기도 시흥시 정왕동 1881-1 4층 402,403호 (함송로13번길 )'	,37.3642519215	,126.7317236234],
['경기도 안산시 단원구 고잔동 542-2 313호 (안산천서로 9)'	,37.3172854590	,126.8422691450],
['경기도 안산시 단원구 고잔동 542-2 312호 (안산천서로 9)'	,37.3172854590	,126.8422691450],
['경기도 안산시 단원구 고잔동 542-2 411호 (안산천서로 9 )'	,37.3172854590	,126.8422691450],
['경기도 안산시 단원구 고잔동 542-2 413-2호 (안산천서로 9)'	,37.3172854590	,126.8422691450],
['경기도 안산시 단원구 고잔동 542-2 415호 (안산천서로 9)'	,37.3172854590	,126.8422691450],
['경기도 안산시 단원구 고잔동 542-2 315호 (안산천서로 9)'	,37.3172854590	,126.8422691450],
['경기도 안산시 상록구 이동 720 401,402,403호 (437-030 )'	,	,],
['경기도 안산시 상록구 이동 716-4 403호 (중보로 47 )'	,37.3074228180	,126.8517990691],
['경기도 안산시 상록구 광덕1로 350 4층'	,37.3064007975	,126.8488007046],
['경기도 안산시 단원구 원곡동 800-13 4층 (원곡로 12 )'	,37.3283335363	,126.7916639126],
['경기도 안산시 단원구 광덕3로 257 3층'	,37.3119772035	,126.8413554316],
['경기도 안산시 단원구 고잔동 729-7 404호 (광덕4로 250 )'	,37.3142553741	,126.8403239949],
['경기도 안산시 단원구 고잔동 729 301~305호 (광덕4로 220)'	,	,],
['경기도 안산시 단원구 고잔동 703-3 305,306호 (광덕4로 148 )'	,37.3146714307	,126.8287713884],
['경기도 안산시 단원구 고잔동 542-2 5,6층 (안산천서로 9)'	,37.3172854590	,126.8422691450],
['경기도 안산시 단원구 고잔동 542-2 414호 (안산천서로 9)'	,37.3172854590	,126.8422691450],
['경기도 안산시 단원구 고잔동 542-2 410호 (안산천서로 9)'	,37.3172854590	,126.8422691450],
['경기도 안산시 단원구 고잔동 542-2 314호 (안산천서로 9)'	,37.3172854590	,126.8422691450],
['경기도 안산시 단원구 고잔동 542-2 312-2호 (안산천서로 9)'	,37.3172854590	,126.8422691450],
['경기도 안산시 단원구 고잔동 542-2 310~311호 (안산천서로 9)'	,37.3172854590	,126.8422691450],
['경기도 안산시 단원구 고잔동 542-2 304호 (안산천서로 9)'	,37.3172854590	,126.8422691450],
['경기도 안산시 단원구 고잔동 542-2 412호 (안산천서로 9 )'	,37.3172854590	,126.8422691450],
['경기도 안산시 단원구 고잔동 729-7 306호 (광덕4로 250 )'	,37.3142553741	,126.8403239949],
['경기도 안산시 단원구 고잔로 122 401호'	,37.3185616492	,126.8398860225],
['경기도 안산시 단원구 민속공원로 98'	,37.3138661784	,126.8390500971],
['경기도 안산시 단원구 원곡로 25'	,37.3296136795	,126.7920552409],
['경기도 안산시 상록구 이동 716-4 406호 (중보로 47 )'	,37.3074228180	,126.8517990691],
['경기도 안산시 단원구 고잔1길 16 306, 307호'	,37.3179513143	,126.8351265652],
['경기도 안산시 단원구 고잔2길 16 (612호)'	,37.3175605920	,126.8328260281],
['경기도 안산시 단원구 고잔동 542-2 203호 (안산천서로 9 )'	,37.3172854590	,126.8422691450],
['경기도 안성시 공도읍 용두리 104-2 2층 전체 (덕봉서원로 27 )'	,37.0067682956	,127.1695804053],
['경기도 안양시 만안구 장내로 140번길 11-3 (3~4층)'	,	,],
['경기도 안양시 동안구 관악대로 346 5층'	,37.4033890279	,126.9613981206],
['경기도 안양시 만안구 안양동 782-7외 1필지 2층 전체 (병목안로 8 )'	,37.3995555278	,126.9193425362],
['경기도 안양시 동안구 관양동 1490-44번지 2층 (인덕원로 24 )'	,37.4016088380	,126.9742290842],
['경기도 안양시 동안구 관양동 1452번지 2층 (관악대로 334 )'	,37.4030829444	,126.9621437078],
['경기도 안양시 동안구 관양동 1446-1번지 3층 (관악대로 334 )'	,37.4031362501	,126.9600090700],
['경기도 안양시 동안구 관악대로 356번길 15, 2층'	,37.4030829444	,126.9621437078],
['경기도 안양시 만안구 안양동 622-181 2층, 3층 (장내로 148 )'	,37.3978557736	,126.9239295567],
['경기도 안양시 만안구 안양동 1195-55 3층 (안양로319번길 42 )'	,37.3991131255	,126.9180668481],
['경기도 안양시 동안구 호계1동 949-17번지 6층 (경수대로 557 )'	,37.3723657266	,126.9572832142],
['경기도 안양시 동안구 관양동 1505-27번지 6층 (흥안대로 522 )'	,37.4004112041	,126.9773127529],
['경기도 안양시 동안구 관양동 1505-25, 9층 901호 (흥안대로 524)'	,37.4006905167	,126.9773126580],
['경기도 안양시 동안구 관양동 1465-6번지 지하1층~지상5층 (관악대로404번길 10 )'	,37.4040848137	,126.9675870516],
['경기도 안양시 동안구 관양동 1446-1번지 4층 (관악대로 334 )'	,37.4031362501	,126.9600090700],
['경기도 안양시 동안구 관악대로 480 3층 304호'	,37.4023839681	,126.9753356123],
['경기도 양주시 평화로 1410, 4층'	,37.8167021138	,127.0464244088],
['경기도 양주시 덕계동 451-12 (평화로1466번길 13 )'	,37.8208633820	,127.0492889613],
['경기도 양평군 양평읍 양근리 410-11,13번지 3층 (양평시장1길 18 )'	,37.4901095053	,127.4910056388],
['경기도 양평군 양평읍 오빈리 431-3 (경강로 1649-26 )'	,37.5052706853	,127.4624008308],
['경기도 양평군 양평읍 초롱길 12'	,37.4999161853	,127.5176674672],
['경기도 양평군 양서면 양수리 537-9외 3필지 (북한강로 51 )'	,37.5487116143	,127.3215444461],
['경기도 양평군 양평읍 양근리 170-5 3층 301호 (시민로39번길 22)'	,37.4922708708	,127.4955879440],
['경기도 양평군 양평읍 역전길 3 지하1층'	,37.4917226318	,127.4887320316],
['경기도 양평군 양평읍 남북로75 1층,2층 (공흥리 441-9)'	,37.4893900169	,127.5014826307],
['경기도 여주시 가남읍 태평리 268-3외 7필지 11층 제1107호 (일신로 29 )'	,37.2137834491	,127.5420678549],
['경기도 여주시 세종로45번길 16, 3층'	,37.2932471356	,127.6378062648],
['경기도 여주시 창동 148번지 4층 (세종로40번길 5-1)'	,37.2943599021	,127.6352781199],
['경기도 여주시 대신면 대신로 295-32'	,37.3681548913	,127.6381321359],
['경기도 여주시 세종로 45번길 8-16'	,	,],
['경기도 여주시 하동 126-19외 1필지 2층 (여흥로47번길 15-1)'	,37.2989137203	,127.6294965650],
['경기도 오산시 성호대로 122 4층 402호,403호'	,37.1484197455	,127.0747755907],
['경기도 오산시 오산로 235(오산동) 5층 501, 502호'	,37.1478919013	,127.0682577744],
['경기도 용인시 기흥구 강남로 7 703,4호'	,37.2712155268	,127.1264616777],
['경기도 용인시 기흥구 강남서로 18 6,7층'	,37.2726563777	,127.1272194375],
['경기도 용인시 기흥구 구갈동 581 502호 (강남로 7)'	,37.2712155268	,127.1264616777],
['경기도 용인시 기흥구 구갈동 581 8층전체 (강남로 7)'	,	,],
['경기도 용인시 기흥구 구갈동353-6번지 5층 (구갈로72번길 14-1)'	,37.2803202056	,127.1129680969],
['경기도 용인시 기흥구 구성로 77번길 17'	,37.2965962191	,127.1187437283],
['경기도 용인시 기흥구 신갈로 48 (7층)'	,37.2708207716	,127.1058513759],
['경기도 용인시 기흥구 죽전로 6 3층'	,37.3201487724	,127.1093257255],
['경기도 용인시 기흥구 강남로 7 701,2호'	,37.2712155268	,127.1264616777],
['경기도 용인시 기흥구 강남로 9 5층'	,37.2714855991	,127.1266876096],
['경기도 용인시 기흥구 구갈동 581 501호 (강남로 7)'	,37.2712155268	,127.1264616777],
['경기도 용인시 기흥구 구갈동 581 601호 (강남로 7)'	,37.2712155268	,127.1264616777],
['경기도 용인시 기흥구 구갈동 594-1 306~308호 (강남동로 6)'	,37.2713223372	,127.1277133221],
['경기도 용인시 기흥구 구갈로72번길 10-1'	,37.2803205719	,127.1125734428],
['경기도 용인시 기흥구 동백중앙로61-19 3층'	,37.2604354209	,127.1600710608],
['경기도 용인시 기흥구 신길동 70번지 7층 703호'	,37.2711540534	,127.1059645745],
['경기도 용인시 기흥구 죽전로 7'	,37.3206802722	,127.1094392937],
['경기도 용인시 기흥구 중부대로 659 (2층)'	,37.2677374485	,127.1349114704],
['경기도 용인시 수지구 죽전1동 452번지 5층 (정든로6번길 2)'	,37.3269845159	,127.1126073826],
['경기도 용인시 수지구 풍덕천로129번길 16-6 (5층)'	,37.3245663532	,127.0955447956],
['경기도 용인시 수지구 풍덕천로129번길 3 (3층)'	,37.3235391385	,127.0956112283],
['경기도 의정부시 민락동 732-12 9층(전체) (용현로 97 )'	,37.7413158097	,127.0867925677],
['경기도 의정부시 신촌로 65-1 (2~5층)'	,37.7504839353	,127.0418241707],
['경기도 의정부시 가능로85번길 26'	,37.7479616352	,127.0406768605],
['경기도 의정부시 호원동 455-8 2층,3층(일부) (평화로 224)'	,37.7117946821	,127.0478259421],
['경기도 의정부시 호원동 455-3 2층 211호 (평화로 220 )'	,37.7114882950	,127.0479845291],
['경기도 의정부시 호원동 454-27 4층(전체) (평화로 197)'	,37.7093801640	,127.0476770572],
['경기도 의정부시 호원동 119-32 2층(전체) (호암로 85-16)'	,37.7080741330	,127.0467123424],
['경기도 의정부시 태평로 40 (3층) (4층)'	,37.7360743282	,127.0508469332],
['경기도 의정부시 의정부동 567-1 3층(전체) (신흥로 220 )'	,37.7355454899	,127.0435974382],
['경기도 의정부시 시민로 118 가동 1층'	,37.7382106188	,127.0482616659],
['경기도 의정부시 가능동 647-30 3층(전부) (가능로 97 )'	,37.7468980792	,127.0419924861],
['경기도 의정부시 호원동 85-19 3층,4층(전체) (호암로 143-1 )'	,37.7135160604	,127.0463753118],
['경기도 의정부시 의정부동 9-24 3층(전체) (호국로 1329 )'	,37.7441285109	,127.0517371045],
['경기도 이천시 창전동 457-2 1동 2층 전체 (애련정로125번길 47 )'	,37.2814922610	,127.4473479207],
['경기도 이천시 양진로 114번길 19'	,37.3029642267	,127.4275214393],
['경기도 이천시 창전동 469-13 4층 401호(애련정로87번길 3)'	,37.2781572540	,127.4500682433],
['경기도 이천시 양진로 133'	,37.3038772673	,127.4266806263],
['경기도 이천시 양진로114번길 15'	,37.3026059300	,127.4269329119],
['경기도 이천시 향교로 24 외 1필지 3층 상가'	,37.2847719123	,127.4401051885],
['경기도 이천시 송정동 346-32 2층 우측 (회안대로 891 )'	,37.2950780503	,127.4405144417],
['경기도 이천시 사음동 11외 1필지 (양진로 133)'	,37.3038772673	,127.4266806263],
['경기도 이천시 서희로 40 (2,3층)'	,37.2791043597	,127.4425755854],
['경기도 이천시 관고동 7-24번지 1.2,3층 (영창로159번길 12-4)'	,37.2821303987	,127.4405183976],
['경기도 이천시 신하리 272 2층 (대산로 524)'	,37.2631392196	,127.4818149295],
['경기도 파주시 금촌동 765-1 702호~706호 ( 금정12길 2 )'	,37.7589826701	,126.7752049863],
['경기도 파주시 금빛로 27 6층 605호,607호'	,37.7521447343	,126.7662050431],
['경기도 파주시 문산읍 문향로 39번길 51 2,3층'	,37.8546595918	,126.7829217866],
['경기도 파주시 야당동 1066-2 601호,602호,603호 (경의로 1068 )'	,37.7124802984	,126.7596287331],
['경기도 파주시 금촌동 988-1 제6층 601호 (금빛로 24 )'	,37.7518666696	,126.7668186666],
['경기도 파주시 금촌동 958-9 4층 (번영로 1)'	,37.7575636012	,126.7728489788],
['경기도 파주시 시청로 25 4층'	,37.7590652653	,126.7759877520],
['경기도 파주시 한마음1길 38 (4층)'	,37.7569203940	,126.7710466750],
['경기도 파주시 금촌동 329-99 3층 전체 (중앙로 325 )'	,37.7644490808	,126.7739852451],
['경기도 평택시 비전동 608-7 2층 (중앙1로 84)'	,36.9966336967	,127.0920898429],
['경기도 평택시 평택 2로 6, 2층 일부'	,36.9920776394	,127.0875013943],
['경기도 평택시 지산3로 75'	,37.0813698863	,127.0632297470],
['경기도 평택시 조개터로 25번길 13 2층'	,36.9896611406	,127.1013038306],
['경기도 평택시 중앙로 179 2층'	,36.9918314617	,127.1028118647],
['경기도 평택시 지산동 1070번지 2층 전체 (지산2로96번길 4)'	,37.0797580896	,127.0610354840],
['경기도 평택시 평택시 평택로 152 2,3,4층'	,36.9990481284	,127.0798361698],
['경기도 평택시 평택3로 30(2층)'	,36.9915505062	,127.0936116057],
['경기도 평택시 합정동 762-7 4층, 5층 (평택4로 39)'	,36.9915184177	,127.1000031868],
['경기도 평택시 비전동 764-12 4층 (중앙로 207 )'	,36.9911890425	,127.1059225723],
['경기도 평택시 비전동 760-3 (평택4로 53)'	,36.9925810897	,127.1007234645],
['경기도 평택시 중앙로 179 2층'	,36.9918314617	,127.1028118647],
['경기도 평택시 조개터로 25번길 13 2층'	,36.9896611406	,127.1013038306],
['경기도 포천시 소흘읍 송우로 53 5층 501호'	,37.8285913546	,127.1430035275],
['경기도 포천시 선단동 526-7 2층 (호국로 940 )'	,37.8491429972	,127.1632552277],
['경기도 포천시 소흘읍 솔모루로 109번길 13 3층 306호(송우리 222-61)'	,37.8309193935	,127.1474720587],
['경기도 포천시 소흘읍 솔모루로 124-32 2.3층'	,37.8328075469	,127.1505541394],
['경기도 포천시 소흘읍 솔모루로 109번길 13 3층 306호(송우리 222-61)'	,37.8309193935	,127.1474720587],
['경기도 포천시 선단동461-1 2층, 3층(호국로 959 )'	,37.8514227974	,127.1629420223],
['경기도 하남시 덕풍동 744번지 801,802,803,804,805호 (덕풍동로 111-21)'	,	,],
['경기도 하남시 덕풍동 744-1 1동 305호 (덕풍동로 111-15 )'	,37.5512880512	,127.2079489352],
['경기도 하남시 감일동 45번지 40-12'	,	,],
['경기도 하남시 감일동 176번지 (서하남로48번길 46)'	,37.5140191275	,127.1503196856],
['경기도 하남시 대청로 5 601호'	,37.5396834840	,127.2130088002],
['경기도 하남시 미사신도시 근상 16-3블럭 604,605,606호'	,	,],
['경기도 하남시 풍산동 미사지구근린상업시설용지 16블록 2로트 602호'	,	,],
['경기도 화성시 봉담읍 동화리 600-2 401호 (동화길 93-14)'	,37.2168498399	,126.9598668694],
['경기도 화성시 봉담읍 동화길 93-14 (4층)'	,37.2168498399	,126.9598668694],
['경기도 화성시 반송동 88-12 5층 501, 502호 (동탄중심상가2길 5)'	,37.2059165298	,127.0726672488],
['경기도 화성시 경기대로 1036, 1038 A동 1층 103호'	,37.2082483557	,127.0351452844],
['경기도 화성시 향남읍 토성로 14'	,37.1287770473	,126.9312657957],
['경기도 화성시 향남읍 상신하길로328번길 26 401호'	,37.1163936324	,126.9136013624],
['경기도 화성시 진안동 524-1 501호 (병점로 37-6 )'	,37.2108874917	,127.0383120165],
['경기도 화성시 진안동 524-1 4층 401~404호 (병점로 37-6)'	,37.2108874917	,127.0383120165],
['경기도 화성시 봉담읍 삼천병마로 1334 (2층)'	,37.2235778675	,126.9529561329],
['경기도 화성시 진안동 524-1 1층 107호 (병점로 37-6)'	,37.2108874917	,127.0383120165],
['경기도 화성시 봉담읍 동화역말길 73-15'	,37.2171315912	,126.9671786290],
['경기도 화성시 봉담읍 동화리 415-2외 2필지 2층 전체 (삼천병마로 1336 )'	,37.2237671086	,126.9530123453],
['경기도 화성시 반송동 88-12 5층 503호 (동탄중심상가2길 5)'	,37.2059165298	,127.0726672488],
['경기도 화성시 경기대로 1036, 1038 A동 402호'	,37.2082483557	,127.0351452844],
['경기도 화성시 진안동 524-1 101, 102호 (병점로 37-6 )'	,37.2108874917	,127.0383120165]

];
     var infowindow = new google.maps.InfoWindow();
     var marker, i;
     for (i = 0; i < locations.length; i++) {
       marker = new google.maps.Marker({
         id:i,
         position: new google.maps.LatLng(locations[i][1], locations[i][2]),
         map: map
       });
       google.maps.event.addListener(marker, 'click', (function(marker, i) {
         return function() {
           infowindow.setContent(locations[i][0]);
           infowindow.open(map, marker);
         }
       })(marker, i));
       if(marker)
       {
         marker.addListener('click', function() {
           map.setZoom(15);
           map.setCenter(this.getPosition());
         });
         }
     }
  var points = [];
  for (var i = 0; i < chart.dataProvider.length; i++) {
    var dp = chart.dataProvider[i];
    dp.marker = addMarker(dp.latitude, dp.longitude, dp.townName, i);
    points.push(new google.maps.LatLng(dp.latitude, dp.longitude))
  }

  // add path
  var path = new google.maps.Polyline({
    path: points,
    geodesic: true,
    strokeColor: '#000000',
    strokeOpacity: 0.3,
    strokeWeight: 2
  });
  path.setMap(map);
}
google.maps.event.addDomListener(window, 'load', mapInit);

/**
 * Map-related functions
 */
function addMarker(lat, long, title, id) {
  // cretae marker
  var coord = new google.maps.LatLng(lat, long);
  var marker = new google.maps.Marker({
    position: coord,
    opacity: 0.5,
    animation: google.maps.Animation.DROP,
    map: map,
    title: title,
    id: id
  });

  // add events
  google.maps.event.addListener(marker, 'mouseover', function() {
    resetMarkers();
    highlightMarker(this);
    chart.chartCursor.showCursorAt(chart.chartData[this.id].category);
  });
  google.maps.event.addListener(marker, 'mouseout', function() {
    resetMarkers();
    chart.chartCursor.hideCursor();
  });

  return marker;
}

function highlightMarker(marker) {
  marker.setOpacity(1);
}

function getMarkers() {
  return chart.dataProvider.map(function(element, index, array) {
    return element.marker;
  })
}

function resetMarkers() {
  var markers = getMarkers()
  for (var i = 0; i < markers.length; i++) {
    if (markers[i] !== undefined)
      markers[i].setOpacity(0.5);
  }
}

function removeMarker() {
  if (chart.mapMarker !== undefined)
    chart.mapMarker.setMap(null);
}