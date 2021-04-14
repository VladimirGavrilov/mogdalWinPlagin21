//показать цену в модалке
const deserts = [
    {   id: 1,
        prise: 20,
        title: 'Пироженое', 
        image: 'https://aipa.ru/127040-thickbox_default/sladkiy-keksik-almaznaya-vyshivka-mozaika-granni.jpg',
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
        image: 'https://centro-pol.ru/wp-content/uploads/2018/12/3-13.jpg',
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
                <a href="#" class="btn btn-primary" data-btn = "price" data-id='${ desert.id}'>Посмотреть цену</a>
                <a href="#" class="btn btn-danger" data-btn = "remove" data-id='${ desert.id}'>Удалить</a>
            </div>
        </div>
    </div>`


function render() {
    const html = deserts.map(toHTML ).join('')
    document.getElementById('desert').innerHTML = html
}
render()
////////////////
const modalPrece = $.modal({
    title: 'Цена на товар!',
    closable: true,
    width: '300px',
    //параметру кнопок
    footerButtons: [
        {
            text: 'закрыть',
            type: 'primary',
            handler() {
                modalPrece.close()
            }
        },]
    }
);
 
/////////////
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
);/*- end create modal window-*/
document.addEventListener('click', event => {
    event.preventDefault(false)
    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id
    
    // console.log( 'id', event.target.dataset.id )
    if (btnType === 'price') {
        const prase1 = deserts.find(item => item.id == id)
        modalPrece.open()    
        modalPrece.setContent(`Цена на ${prase1.title} = <h3>${prase1.prise}</h3> тугриков`)

    } else if (btnType === 'remove') {
        const prase1 = deserts.find(item => item.id == id)
        $.confirm(
            {
                title: 'Вы уверенны!',
                content: `Вы  удаляете  <h3>${prase1.title}</h3>`,
            }).then(() => {
                console.log('remove')
            }).catch(() => {
                console.log('Cancel')
            })
        // const prase1 = deserts.find(item => item.id == id)
        // confirmModal.setContent(`Вы точно хотите удалить ${prase1.title} `)
        //  document.querySelector().destroy()
        

    }
})