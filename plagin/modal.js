function _createModal(options) {
    const DEFAULT_WIDTH = '600px';
    const modal = document.createElement('div');
    modal.classList.add('vmodal');
    modal.insertAdjacentHTML('afterBegin',
        ` 
        <div class="modal-overlay" data-close = "1">
        <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH };">
                <div class="modal-header">
                    <span class="modal-title">
                        ${options.title || 'Window'}
                    </span>
                    ${options.closable ?`<span class="modal-close" data-close = "1">&times;</span>`:''}
                </div>
                <div class="modal-body">
                    ${options.content || ""}
                </div>
                <div class="modal-footer">
                    <button>Ok</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>     
        `
    );
    //insertAdjacentHTML end
    document.querySelector('.container').appendChild(modal);
    return modal    
}

$.modal = function (options) {
    // знак  $ показывает что в переменной node элемент 
    const $modal = _createModal(options);
    const ANIMATION_SPEED = 1500;
    let closing = false;
    const modal = {
        open(){            
            !closing && $modal.classList.add('open')            
        },
        close(){
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            closing = false
            setTimeout(() => {
                    $modal.classList.remove('hide');
                }, ANIMATION_SPEED
            )
            
        },

    }

    $modal.addEventListener('click', event => {        
        // console.log( 'Clict', event.target.dataset.close )
        if (event.target.dataset.close == trues) {
            modal.close()
            
        }        
    }) ;
    return modal
}