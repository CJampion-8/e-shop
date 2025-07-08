import items from '../data/items.js';
import ItemCard from '../components/ItemCard.js';

export default function Home() {
    return (
        <>
            <div className="item-list">
                {items.map((item) => (
                    <ItemCard
                        key={item.title}
                        item={item}
                    />
                ))}
            </div>
        </>
    )
}