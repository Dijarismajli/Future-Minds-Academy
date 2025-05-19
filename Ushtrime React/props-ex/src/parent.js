import { CardChildComponent } from "./card"

export const Parent = () => {

    const fruits = [{
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
    },
    ]
    return (
        <>
            <h1>Parent component</h1>

            <div style={{ display: 'flex', gap: '20px' }}>
                {fruits.map((fruitInfo) => <CardChildComponent fruits={fruitInfo} key={fruitInfo.id} />

                )}

            </div>
        </>
    )
}