import Github from "./github.js";
import UI from "./ui.js";
//github ve ui class'larının örneğini oluşturma
const github = new Github();
const ui = new UI();

// html'den id ve class'lara erişmek
const searchUser = document.getElementById('search-user');
const searchButton = document.getElementById('search-button');

// tıklama eylemi veriyoruz searchbuttona'a
searchButton.addEventListener('click', getInput);
searchUser.addEventListener('keypress',(e) => {
    if(e.code === 'Enter') {
        getInput();
    }
});

function getInput(){
    // Eğer input'un içi doluysa api isteği atıyoruz
    if(searchUser.value !== ""){
        github
        .getUser(searchUser.value)
        .then((data) => {
            //eğer gelen verideki mesaj 'not found' ise
            if(data.profile.message === "Not Found"){
                //hata mesajı göster
                ui.showAlert("Aradığınız Kullanıcı Bulunamadı,", "alert alert-danger");
            }else{
                //kullanıcıyı göster
                ui.showProfile(data.profile);
                //porjelerini göster
                ui.showRepos(data.repos);
            }
        });
    }else{
        
        // Eğer input boş ise uyarı ver
        ui.showAlert('Alert alanı boş olamaz', 'alert alert-danger');
        ui.clearProfile();
    }

    searchUser.value = '';
}


// tema
const themeBtn = document.getElementById("theme");

themeBtn.addEventListener("click",changeTheme);

function changeTheme () {
    const body = document.querySelector('body');
    body.classList.toggle('bg-dark');
    body.classList.toggle('text-bg-dark');

    if(body.classList.contains('bg-dark')){
        themeBtn.innerText = 'Açık Mod';
    }else{
        themeBtn.innerText = 'Koyu Mod';
    }
  }





//*github api key; 054961fec1b532ebcbdb25df293460a3dccde01b */
// * Client ID Ov23li5CsqP6BzrchiQt */ 