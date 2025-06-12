
import { useState } from "react";
import { CardChildComponent } from "./card";

const initialFruits = [
    {
        id: 1,
        name: 'Bananja',
        color: 'yellow',
        taste: 'sweet',
        image: 'https://www.cuisinelangelique.com/infotheque/wp-content/uploads/2023/03/banane-1a-1200x838.jpg'
    },
    {
        id: 2,
        name: 'Apple',
        color: 'Green',
        taste: 'sour',
        image: 'https://healthiersteps.com/wp-content/uploads/2021/12/green-apple-benefits.jpeg'
    },
    {
        id: 3,
        name: 'Strawberry',
        color: 'red',
        taste: 'sweet',
        image: 'https://weresmartworld.com/sites/default/files/styles/full_screen/public/2021-05/aardbeien-3.jpg?itok=VKyyMjjg'
    }
];

export const Parent = () => {
    const [fruits] = useState(initialFruits);

    return (
        <>
            <h1>Fruit Cards</h1>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {fruits.map(fruit => (
                    <CardChildComponent
                        key={fruit.id}
                        fruit={fruit}
                    />
                ))}
            </div>
        </>
    );
};