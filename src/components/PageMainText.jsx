function PageMainText({description, name}) {
    return (
        <div className="pageMainText">
            <h1 key={name} className='page__title animate__animated animate__fadeInDown'>{name}</h1>
            <p key={description} className='page__descr animate__animated animate__fadeInDown'>{description}</p>
        </div>
    )
}

export {PageMainText}