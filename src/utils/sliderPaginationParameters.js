function sliderPaginationParameters(classNamePaginationElem, paginationElems) {
	return {
		el: '.swiper__pagination',
		clickable: true,
		bulletClass: `pagination${classNamePaginationElem}__elem`,
		bulletActiveClass: `pagination${classNamePaginationElem}__elem_active`,
		renderBullet: function (index, className) {
			console.log(paginationElems);
			return `<span key='${index}' class='${
				paginationElems[index] + ' ' + className
			}'>${paginationElems[index]}</span>`;
		},
	};
}

export { sliderPaginationParameters };
