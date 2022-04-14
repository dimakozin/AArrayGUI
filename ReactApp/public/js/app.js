async function test(){
    let value = await eel.test_py()();
    alert(value);
}

document.getElementById("open-leafs").onclick = test;
