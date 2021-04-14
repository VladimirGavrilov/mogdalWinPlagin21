//добавление мепода в прототип метод добовляет элемент после элемента
Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling)
}
function noop() {}
function _createModalFoter(buttons = []) {
    if (buttons.length == 0) {
        return document.createElement('div')
    }
    const wrap = document.createElement('div')
    wrap.classList.add('modal-footer')
    buttons.forEach( btn => {
        const $btn = document.createElement('button')
        $btn.textContent = btn.text
        $btn.classList.add('btn')
        $btn.classList.add(`btn-${ btn.type || secondary }`)
        $btn.onclick = btn.handler || noop

        wrap.appendChild($btn)
    })


    return wrap
}
function _createModal(options) {
    const DEFAULT_WIDTH = '600px';
    const modal = document.createElement('div');
    

    modal.classList.add('vmodal');
    modal.insertAdjacentHTML('afterBegin',
        ` 
        <div class="modal-overlay" data-close = 'true'>
        <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH };">
                <div class="modal-header">
                    <span class="modal-title">
                        ${options.title || 'Window'}
                    </span>
                    ${options.closable ?`<span class="modal-close" data-close = 'true'>&times;</span>`:''}
                </div>
                <div class="modal-body" data-content='true'>
                    ${options.content || ""}
                </div>              
            </div>
        </div>     
        `
    );
    const footer = _createModalFoter(options.footerButtons)
    footer.appendAfter(modal.querySelector('[data-content]'))
    //insertAdjacentHTML end
    document.querySelector('.container').appendChild(modal);
    return modal    
}

$.modal = function (options) {
    // знак  $ показывает что в переменной node элемент 
    const $modal = _createModal(options);
    const ANIMATION_SPEED = 1500;
    let destroyed = false;
    let closing = false;
    const modal = {
        open(){
            if (destroyed) {
                return console.lod('Modal is destroy')                
            }            
            !closing && $modal.classList.add('open')            
        },
        close(){
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            closing = false
            setTimeout(() => {
                    $modal.classList.remove('hide');
            if (typeof options.onClose === 'function') {
                options.onClose()
            }        

                }, ANIMATION_SPEED
            )
            
        },

    }
    const listiner = event =>{
         // console.log( 'Clict', event.target.dataset.close )
        if (event.target.dataset.close) {
            modal.close()
            
        }  
    }

    $modal.addEventListener('click', listiner) ;
    return Object.assign(modal, {
        destroy(){
            $modal.parentNode.removeChild($modal);//удаляем элемент из элемента!
            $modal.removeEventListener;
            destroyed = true;
        },
        setContent(html){
            $modal.querySelector('[data-content]').innerHTML = html
        }

    }) 
}