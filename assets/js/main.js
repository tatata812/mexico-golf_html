$(function () {

  $(".header__open-btn").click(function () {
    $(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
    $(".header-sp").toggleClass("open-menu"); //ナビゲーションにクラスを付与
  });

  $(".header-sp").click(function () {
    $(".header__open-btn").toggleClass("active"); //ボタン自身に activeクラスを付与し
    $(".header-sp").toggleClass("open-menu"); //ナビゲーションにクラスを付与
  });

  $(".header-sp__nav-link").click(function () {
    //ナビゲーションのリンクがクリックされたら
    $("header__open-btn").removeClass("active"); //ボタンの activeクラスを除去し
  });


  // ヘッダー隠れる動き

  let startPos = 0;
  let winScrollTop = 0;
  const Header = $('.wrap-header');
  $(window).on('scroll', function () {
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos && winScrollTop > 100) { // ここにコードを追加
      $(Header).addClass('is-hide');
    } else {
      $(Header).removeClass('is-hide');
    }
    startPos = winScrollTop;
  });


  $(".top-to-js").click(function () {
    $("body,html").animate({
        scrollTop: 0 //ページトップまでスクロール
      },
      500
    ); //ページトップスクロールの速さ。
    return false; //親要素へのイベント伝播を止める
  });


  $(".main-visual-js").slick({
    lazyLoad: 'ondemand',
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000, // フェードアニメーションの速度設定
    dots: true,
    arrows: true,
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        arrows: false,
      }
    }, ],
  });

  $(".top-info-js").slick({
    autoplay: false,
    dots: true,
    arrows: true,
    slidesToShow: 4,
    responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          arrows: false,

        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
    ],
  });

  // トップページ info タブ
  $(".top-info__tab-item").on("click", function () { //１．タブをクリックしたときに
    var i = $(this).index(); //２．クリックしたタブが何個目かをiに代入
    $(".top-info__tab-item").removeClass("active"); //３．全てのボックスからactiveクラスを外す
    $(".top-info__box-item").removeClass("active"); //３．全てのボックスからactiveクラスを外す
    $(".top-info__tab-item").eq(i).addClass("active"); //４．ボックスのi番目にactiveクラスを付ける
    $(".top-info__box-item").eq(i).addClass("active"); //４．ボックスのi番目にactiveクラスを付ける
  });


  //フェードイン
  $(window).scroll(function () {
    const windowHeight = $(window).height(); //ウィンドウの高さ
    const scroll = $(window).scrollTop(); //スクロール量

    $(".fade-in-js").each(function () {
      const targetPosition = $(this).offset().top; //要素の上からの距離
      if (scroll > targetPosition - windowHeight + 200) {
        $(this).addClass("action");
      }
    });
  });
})

// パララックス

var image = document.getElementsByClassName('sub-top-js');
new simpleParallax(image, {
  scale: 1.2,
});