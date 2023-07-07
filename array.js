const id = document.getElementById("txt-id")
const names = document.getElementById("txt-name")
const price = document.getElementById("txt-price")
const btnPost = document.querySelector(".btn-post")
const tblDate = document.getElementById("tbl-data")
const list = []
var changevalue = -1 ;
getData();
function getautoid(){
    id.value = list.length+1;
}
//add to list
btnPost.addEventListener("click",function(){
    if(names.value == ''){
        names.focus();
        return;
    }
    else if(price.value == ''){
        price.focus();
        return;
    }
    if( changevalue == -1 ) {
        var item = {
            "id":id.value,
            "names":names.value,
            "price":price.value
        };
        list.push(item);
    }
    else{
        list[changevalue]['names'] = names.value;
        list[changevalue]['price'] = price.value;
        changevalue = -1;
    }
    getData();
    names.value = "";
    price.value = "";
    names.focus();
});
// getdata
function getData(){
    var total = 0;
    let tr = `
        <tr>
           <th width="80">ID</th>
           <th >Name</th>
           <th width="80">Price</th>
           <th width="80">Action</th>
        </tr>
    `
    list.forEach((e,i) =>{
        tr+=`
        <tr>
            <td>${e['id']}</td>
            <td>${e['names']}</td>
            <td>${e['price']}</td>
            <td align="center">
                <i class="fa-solid fa-pen-to-square btn-edit"></i>
            </td>
        </tr>
        `
        total += parseFloat(e['price']);
    });
    var trtotal = `
        <tr>
            <td colspan="2">Total</td>
            <td colspan="2">${total}</td>
        </tr>
    `
    tblDate.innerHTML = tr + trtotal;
    getautoid();
    var btnEdit = document.querySelectorAll(".btn-edit");
    btnEdit.forEach((e,i) =>{
        e.addEventListener("click",function(){
            id.value = list[i]['id']
            names.value = list[i]['names']
            price.value = list[i]['price']
            changevalue = i ;
        })
    })
}
document.addEventListener("keypress",function(en){
    if(en.key == 'Enter'){
        btnPost.click();
    }
})


