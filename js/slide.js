// swiper1
new Swiper('.swiper1', {
	pagination : { // 페이징 설정
		el : '.swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
	},
	navigation : { // 네비게이션 설정
		nextEl : '.swiper-button-next', // 다음 버튼 클래스명
		prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
	},
});

// swiper2
new Swiper('.swiper2', {
	loop : true, // 무한 루프 슬라이드, 반복이 되며 슬라이드가 끝이 없다.
	pagination : {
		el : '.swiper-pagination',
	},
});

// swiper3
new Swiper('.swiper3', {
	loop : true, // 무한 루프 슬라이드, 반복이 되며 슬라이드가 끝이 없다.
	pagination : {
		el : '.swiper-pagination',
	},
});

// swiper4
new Swiper('.swiper4', {
	loop : true, // 무한 루프 슬라이드, 반복이 되며 슬라이드가 끝이 없다.
	pagination : {
		el : '.swiper-pagination',
	},
});