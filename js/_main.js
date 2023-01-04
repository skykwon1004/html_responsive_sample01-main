$(function () {

    // top banner

    const topBammerLInk = $('.top_banner i');
    topBannerClose = () => {
        $('.top_banner').addClass('on');
    }
    topBammerLInk.on('click', topBannerClose);

    // mainSlide  
    const mainSlide = $('.main_slide');

    const slideMainEvent = (e, itm, count) => {
        console.log(itm.$slider)
        const current = itm.$slider.find('.slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.mainVisual .main_slide_num span').text(count ? (count + 1) : 1);
        $('.mainVisual .main_slide_num strong').text(itm.slideCount);
    }

    const slideDefaultOption = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
    }



    mainSlide.on('init', slideMainEvent);
    mainSlide.slick({ ...slideDefaultOption, autoplaySpeed: 4000 });
    mainSlide.on('afterChange', slideMainEvent);



    const slideUnSlick = itm => {
        const w = $(window).width();
        console.log(w);
        w < 1200
            ? itm.slick('unslick')
            : itm.not('.slick-initialized').slick({ ...slideDefaultOption, autoplaySpeed: 4000 })
    };
    $(window).on('load resize', () => slideUnSlick(mainSlide));

    const slideLeftArrow = $('.mainVisual .left_arrow');
    const slideRightArrow = $('.mainVisual .right_arrow');

    slideLeftArrow.on('click', () => { mainSlide.slick('slickPrev') });
    slideRightArrow.on('click', () => { mainSlide.slick('slickNext') });

    const slideDots = $('.mainVisual .main_slide_dots li');

    slideDotsLink = (itm, e) => {
        const tg = e.currentTarget;
        const idx = $(tg).parent().index();
        const idx2 = [...tg.parentElement.children].indexOf(tg)
        console.log(tg.parentElement, [...tg.parentElement.parentElement.children], [...tg.parentElement.parentElement.children].indexOf(tg.parentElement))
        itm.slick('slickGoTo', idx2);
    }

    slideDots.on('click', e => slideDotsLink(mainSlide, e));



    //이벤트객체 외에 다른 매개변수도 함께 넘겨주려고 할 경우에는 익명함수를 써야 하는데 이 때는 이벤트객체가 handleClick함수로 가는 것이 아니라 handleClick함수를 감싸고 있는 익명함수에 자동으로 이벤트 객체가 넘어가기 때문에 위와 같이 익명함수에서 이벤트객체를 인자로 받아주고 그 인자를 handleClick 함수에 매개변수로 넘겨줘야 한다.

    // //이벤트객체를 제외한 다른 매개변수가 있는 함수의 경우
    // handleClick = (name, e) => {
    // 	console.log('my name is ' + name, e);
    //   //my name is mango가 출력되고 이벤트 객체도 출력된다.
    // }
    // <button onClick={(e)=>handleClick('mango', e)}></button>









});