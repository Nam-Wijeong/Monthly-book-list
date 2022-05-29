const write = document.querySelector('.write');
const memo = document.querySelector('.memo');
const memos = document.querySelector('.memos')
const clearBtn = document.querySelector('.clear');


function getMemo(){
    for(let i = 0; i < localStorage.length; i++){
        let memoBox = localStorage.getItem(`memo${i}`);
        memos.innerHTML += `
        <article class="memoBox">
            <h2 class="bookTitle">🍂 Title : ${memoBox}</h2>
        </article>
        `
    }
}
getMemo();

function onAdd() {
    if(memo.value === '') {
        memo.focus();
        return;
    }
    localStorage.setItem(`memo${localStorage.length}`, memo.value);
    memo.value = '';
    memos.innerHTML = '';
    getMemo();

    memo.value = '';
    memo.focus();
}

write.addEventListener('click', ()=>{
    onAdd();
})

memo.addEventListener('keydown', (event)=>{
    const keyName = event.key;
    if(event.isComposing){
        return;
    } else if(keyName === 'Enter'){
       onAdd();
    //    localStorage.clear();
    }
})

clearBtn.addEventListener('click', ()=> {
    localStorage.clear();
    memo.value = '';
    memos.innerHTML = '';
    memo.focus();
})