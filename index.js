const modal = $.modal({
    title: 'Титул окна!',
    closable: true,
    content: `
        <p>Контент модального окна!</p>
    
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