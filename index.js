const inputText = document.querySelector('.inputText');
const btn = document.querySelector('.btn');
const toBuyList = document.querySelector('.toBuyList');

btn.addEventListener("click", ()=> {
    const item = document.createElement('li');
    item.innerText = inputText.value;
    item.classList.add('toBuyAdded');
    toBuyList.appendChild(item);
    inputText.value = '';

    item.addEventListener('click', ()=> {
        item.classList.add('toBuyCompleted');
    })

    item.addEventListener('dblclick', ()=> {
        toBuyList.removeChild(item);        
    })

})
btn.addEventListener('mouseover', ()=> {
    document.body.style.backgroundImage = 'url(pic2_2.jpg)';
})
btn.addEventListener('mouseout', ()=> {
    document.body.style.backgroundImage = 'url(pic2.jpeg)';
})
