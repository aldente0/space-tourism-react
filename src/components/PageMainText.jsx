function PageMainText({description, title, fullName, role, underSliderTecnology, className}) {
    return (
        <div className={'pageMainText' + ' ' + className}>
            {title && <h1 key={title} className='page__title animate__animated animate__fadeInDown'>{title}</h1>}
            {role && <span key={role} className="page__role">{role}</span>}
            {underSliderTecnology && <h6 className="page__underSlider">THE TERMINOLOGY…</h6>}
            {fullName && <h4 key={fullName} className="page__fullName animate__animated animate__fadeInDown">{fullName}</h4>}
            <p key={description} className='page__descr animate__animated animate__fadeInDown'>{description}</p>
        </div>
    )
}

export {PageMainText}