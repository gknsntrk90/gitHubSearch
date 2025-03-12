// class oluşturuyoruz ve bu classların oluşması için method girmeliyiz constructor olacak bu
class Github{
    constructor(){
        this.client_id = "Ov23li5CsqP6BzrchiQt";
        this.client_secret = "054961fec1b532ebcbdb25df293460a3dccde01b";
        this.repos_count = 10;
        this.repos_sort = 'asc';
    }

    // getUser ile kullanıcıyı al async ve await fetch ile apiyi çek
    async getUser(user){
        
            const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
            );

            //Kullanıcının repolarını çekme
            const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

            // gelen cevabı json'a çevirme await ile
            const profile = await profileResponse.json();
            const repos = await repoResponse.json();

            // işlenmiş veriyi fonksiyonun çağırıldığı yere gönderme
            return{
                profile,
                repos,
            }

            
        }
    }



export default Github;


//* hata yönetme */
 //try catch kullan hatayıda al
//  try{
//     const profileResponse = await fetch(`https://api.github.com/users/${user}`)

//     // gelen cevabı json'a çevirme await ile
//     const profile = await profileResponse.json();

//     return profile;
// }catch(err){
    
//     console.log(err);
// }