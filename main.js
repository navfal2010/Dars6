let paper = "0)Qog'oz"

let scissors = "1)Qaychi"

let well = "2)Quduq"

let first = +prompt(`Iltimos raqamlardan birini tanleng:\n${paper}\n${scissors}\n${well}`)

let bot = (Math.round(Math.random() * 2))


if (first === 0 || first === 1 || first === 2) {

    if (bot === 0) {
        alert("Kampyuter Qog'oz ni tanladi")
    }

    else if (bot === 1) {
        alert("Kampyuter Qaychi ni tanladi")
    }

    else {
        alert("Kampyuter Quduq ni tanladi")
    }


    if ((first === 1 && bot === 0) ||
        (first === 2 && bot === 1) ||
        (first === 0 && bot === 2)) {
        alert("Siz g'alaba qildingiz")
    }

    else if (first === bot) {
        alert("Durrang");
    }

    else {
        alert("Kampyuter g'alaba qildi");
    }

}

else{
    alert('Iltimos berilgan soni kiriting!')
}
