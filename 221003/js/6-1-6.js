$('.slider02').slick({
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		slidesToShow: 6,//スライドを画面に3枚見せる
		slidesToScroll: 6,//1回のスクロールで3枚の写真を移動して見せる
		prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
		nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
		dots: true,//下部ドットナビゲーションの表示
		responsive: [
			{
			breakpoint: 769,//モニターの横幅が769px以下の見せ方
			settings: {
				slidesToShow: 3,//スライドを画面に6枚見せる
				slidesToScroll: 3,//1回のスクロールで6枚の写真を移動して見せる
			}
		},
		{
			breakpoint: 375,//モニターの横幅が375px以下の見せ方
			settings: {
				slidesToShow: 3,//スライドを画面に3枚見せる
				slidesToScroll: 3,//1回のスクロールで3枚の写真を移動して見せる
			}
		}
	]
	});
