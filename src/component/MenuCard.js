import React from 'react'


const MenuCard = ({ menu }) => {
    return (
        <>
            <section className="main-card--container">
                {
                    menu.map((cur) => {

                        const { id, name, description, image, price } = cur

                        return (
                            <>
                                <div className="card-container" key = {id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <span className="card-id card-circle">{id}</span>
                                            <h1 className="card-name">{name}</h1>
                                            <span className="description">{description}</span>
                                            <img src={image} alt="" className="card-media" />
                                            <span className="price">{price}</span>
                                            <span className="card-tag">Order Now</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </section>
        </>
    )
}

export default MenuCard
