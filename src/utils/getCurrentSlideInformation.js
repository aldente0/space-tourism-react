function getCurrentSlideInformation(swiper, collectionWithImg) {
	const index = swiper.activeIndex;
	const elem = Array.from(swiper.slides[index].classList);

	const currentSlide = elem.find((item) => {
		for (let i = 0; i < collectionWithImg.length; i++) {
			if (collectionWithImg[i].name.includes(item)) {
				return collectionWithImg[i].name.includes(item);
			}
		}
	});

	return currentSlide;
}

export { getCurrentSlideInformation };
