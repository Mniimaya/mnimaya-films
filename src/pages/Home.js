import React from 'react'
import Intro from '../components/Intro/Intro'
import CategorySlider from '../components/CategorySlider/CategorySlider'
import { sliderApi } from '../API/SliderApi'


function Home() {
    const [itemsTop, setItemsTop] = React.useState('');


    const requestsSliders = async () => {
        sliderApi.getTop10((data) => setItemsTop(data));
    };

    React.useEffect(() => {
        requestsSliders();
    }, [])

    return (
        <>
            <Intro />
            {itemsTop ? <CategorySlider data={itemsTop.docs} title="Топ 10 в онлайн-кинотеатре" /> : ""}
        </>

    )
}

export default Home