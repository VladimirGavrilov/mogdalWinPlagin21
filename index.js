//показать цену в модалке
const deserts = [
    {   id: 1,
        prise: 20,
        title: 'Пироженое', 
        image: 'https://s2.best-wallpaper.net/wallpaper/1024x768/1308/Dessert-cake-strawberries-sweet-food_1024x768.jpg',        
        text:'Dessert Kuchen, Erdbeeren, süße Speisen'
    },
    {
        id: 2,
        prise: 70,
        title: ' Мороженое', 
        image: 'https://apelsin-plus.com.ua/files/import/755733554_lozhka-dlya-morozhenogo.jpg',
        text: 'Фруктовый салат с мороженым'
    },
    {
        id: 3,
        prise: 120,
        title: 'Пироженое',
        image: 'https://s2.best-wallpaper.net/wallpaper/1024x768/1308/Dessert-cake-strawberries-sweet-food_1024x768.jpg',
        text: 'Dessert Kuchen, Erdbeeren, süße Speisen'
    }
]
const toHTML = (desert) => 
    `<div class="col">
        <div class="card">
            <img src="${desert.image}"
                        class="card-img-top" style="height: 300px; " alt="${ desert.title }">
            <div class="card-body">
                <h5 class="card-title">${ desert.title }</h5>
                <p class="card-text">${ desert.text}</p>
                <a href="#" class="btn btn-primary" data-btn = "price">Посмотреть цену</a>
                <a href="#" class="btn btn-danger">Удалить</a>
            </div>
        </div>
    </div>`


function render() {
    const html = deserts.map(toHTML ).join('')
    document.getElementById('desert').innerHTML = html
}
render()
const modal = $.modal({
    title: 'Титул окна!',
    closable: true,
    content: `
        <>Контент модального окна!</>
    
    `,
    width: '300px',
    //параметру кнопок
    footerButtons: [
        {
            text: 'Ok',
            type: 'primary',
            handler(){
                console.log('Primary btn clicked')
            }
        },
        {
            text: 'Cansel',
            type: 'danger',
            handler(){
                console.log('Danger btn clicked')
            }
        },
        

    ]


}
);
document.addEventListener('click', event => {
    const btnType = event.target.dataset.btn
    // console.log( 'Clict', event.target.dataset.close )
    if (btnType == 'price') {
        modal.open()

    }
})