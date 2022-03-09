import { useMemo } from 'react/cjs/react.development';

function useSliderPagination(collectionWithImg, type = 'default') {
	const sliderPaginationElems = useMemo(() => {
		const res = [];
		if (type === 'name') {
			for (let i = 0; i < collectionWithImg.length; i++) {
				res.push(collectionWithImg[i].name);
			}

			return res;
		} else if (type === 'number') {
			for (let i = 0; i < collectionWithImg.length; i++) {
				res.push(i + 1);
			}

			return res;
		} else if (type === 'default') {
			console.log(collectionWithImg);
			for (let i = 0; i < 4; i++) {
				res.push('');
			}

			return res;
		}
	}, []);

	return sliderPaginationElems;
}

export { useSliderPagination };
