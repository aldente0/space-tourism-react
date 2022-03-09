import {PageMainText} from './PageMainText';
import {PageAdditionalText} from './PageAdditionalText';

function PageTextAndPagination(props) {
    const {
        textClassName,
        title = '',
        description,
        role = '',
        fullName = '',
        underSliderTecnology = false,
        additionalText = false,
        travel = '',
        distance = '',
    } = props;

    return (
        <div className={`pageTextAndPagination pageTextAndPagination__${textClassName}`}>
        <div className={`swiper__pagination ${textClassName}__pagination`}></div>

        <PageMainText
            className={`${textClassName}__text`}
            description={description}
            title={title ? title : null}
            role={role ? role : null} 
            fullName={fullName ? fullName : null}
            underSliderTecnology={underSliderTecnology}
        />
        {
            additionalText ? (
                <PageAdditionalText
                    travel={travel}
                    distance={distance}
                />
            ) : null
        }
    </div>
    )
}

export {PageTextAndPagination};