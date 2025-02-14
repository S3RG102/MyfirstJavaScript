function submit(){
    const a = Number(document.querySelector('.SJ').value);
    const b = Number(document.querySelector('.SF').value);

    let c = a + b;

    document.querySelector('.text-a').value = c;
}