function PageAdditionalText({distance, travel}) {
    return (
        <div className="pageAdditionalText">
            <div className="divider"></div>
                <div className="destination__adventure">
                    <span>AVG. DISTANCE</span><br />
                    <p className="animate__animated animate__fadeInDown" key={distance}>{distance}</p>
                </div>
                <div className="destination__adventure animate__animated animate__fadeInDown">
                    <span>Est. travel time</span><br />
                    <p className="animate__animated animate__fadeInDown" key={travel}>{travel}</p>
                </div>
        </div>
    )
}

export {PageAdditionalText};