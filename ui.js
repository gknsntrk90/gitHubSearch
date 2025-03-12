// class ismi oluşturucaz constructor methodu ile
class UI {
    constructor(){
        this.profile = document.getElementById("profile");
    }

    // Profil arayüzünü ekrana basma
    showProfile(user){
        const created_at = new Date(user.created_at).toLocaleDateString();

        // bu profile içinde innerHTML ulaşıyoruz
        this.profile.innerHTML = `
         <div class="container border my-4 p-4">
        <div class="row">
            <div class="col-md-3">
                <img class="img-fluid" src="${user.avatar_url}" alt="">
                <a href="${user.html_url} target="_blank" class="btn btn-primary my-4 w-100">Profili Göster</a>
            </div>

            <div class="col-md-9">
                <span class="badge bg-primary fs-6 mt-1">Açık Repolar: ${user.public_repos}</span>
                <span class="badge bg-success fs-6 mt-1">Açık Gistler: ${user.public_gists}</span>
                <span class="badge bg-info fs-6 mt-1">Takipçiler: ${user.followers}</span>
                <span class="badge bg-secondary fs-6 mt-1">Takip Edilenler: ${user.following}</span>

                <ul class="list-group my-5">
                    <li class="list-group-item">Hakkında: ${user.bio}</li>
                    <li class="list-group-item">Şirket: ${user.company}</li>
                    <li class="list-group-item">Website: ${user.blog}</li>
                    <li class="list-group-item">Konum: ${user.location}</li>
                    <li class="list-group-item">Hesap Oluşturuldu: ${created_at}</li>
                </ul>
            </div>
        </div>
    </div>

    
    <div class="container p-3" id="repos"></div>
    

        `;
    }

    showRepos(repos) {
let output = ' <h3 class="fs-1">En Son Repolar</h3>';

        repos.forEach((repo) => {
output += `
<div class="border p-3 mb-4">
        <div class="row">

            <div class="col-md-6">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
                <span class="badge bg-primary">Yıldız : ${repo.stargazers_count}</span>
                <span class="badge bg-secondary">İzleyenler : ${repo.watchers_count}</span>
                <span class="badge bg-success">Fork'lar : ${repo.forks_count}</span>
            </div>
        </div>
    </div>
`;
        });

        //html'e gönderme
        document.getElementById("repos").innerHTML = output;
    }

    // Uyarı mesajı oluşturma
    showAlert(message, classname){
        // div oluşturma
        const div = document.createElement("div");
        // class ekleme
        div.className = classname;

        // Yazıyı ekleme
        div.innerText = message;

        // Göndereceğimiz yerin elemanı alma
        const outlet = document.querySelector('#alert');

        // html'e gönderme
        outlet.appendChild(div);

        setTimeout(()=> {
// Alert'i 4 saniye sonra kaldır
this.clearAlert();
        }, 4000);
    }

    //Uyarıyı ekrandan silme
    clearAlert(){
        // Ekrandaki alert 
        const currentAlert = document.querySelector('.alert');
        // alert varsa onu kaldır
        if(currentAlert) {
            currentAlert.remove()
        }
    }

    // arayüzü temizleme
    clearProfile() {
        this.profile.innerHTML = '';
    }
}

export default UI;