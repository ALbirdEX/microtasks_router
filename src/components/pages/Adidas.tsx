import React from 'react';
import Model1 from '../../assets/adidas/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp'
import Model2 from '../../assets/adidas/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp'
import Model3
    from '../../assets/adidas/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp'
import {Link} from "react-router-dom";
import {v1} from "uuid";


const adidasModel1 = Model1
const adidasModel2 = Model2
const adidasModel3 = Model3

export type AdidasItem = {
    id: string
    model: string;
    collection: string;
    price: string;
    picture: string;
}

export const modelId = {
    model1: v1(),
    model2: v1(),
    model3: v1(),
}

export const adidasArr: AdidasItem[] = [
    {
        id: modelId.model1,
        model: 'ADIDAS ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: adidasModel1,

    },
    {
        id: modelId.model2,
        model: 'ADIDAS ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: adidasModel2
    },
    {
        id: modelId.model3,
        model: 'ADIDAS SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: adidasModel3
    }
]

export const Adidas = () => {

    return (
        <div>
            <h2>ADIDAS</h2>
            {/*  <img src={adidasModel1} alt="Model1"/>
                <img src={adidasModel2} alt="Model2"/>
                <img src={adidasModel3} alt="Model3"/>*/}

            {adidasArr.map((adidas) => (
                <Link key={adidas.id} to={`/adidas/${adidas.id}`}>
                    <img
                        src={adidas.picture}
                        alt={adidas.model}
                        //style={{width: '200px',height: "auto", margin: '20px'}}
                    />
                </Link>
            ))}
            <div style={{display: "flex", justifyContent: "center"}}>
                {/*добавить для центорвки*/}
            </div>
            <p>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                to using 'Content here,
                content here', making it look like readable English. Many desktop publishing packages and web page
                editors now use Lorem Ipsum
                as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                infancy. Various versions
                have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                Where does it come from?
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                Virginia, looked up one of the
                more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum"
                (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the
                Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
        </div>
    );
};

