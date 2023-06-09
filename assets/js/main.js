/* Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
Milestone 1
 Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
BONUS
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
Formattare le date in formato italiano (gg/mm/aaaa)
Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone. */







const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


//Creiamo il nostro array di oggetti che rappresentano ciascun post.

let postObjects;

for (let i = 0; i < posts.length; i++) {
    postObjects = posts[i];
    console.log(postObjects)

}

//recupero gli elementi dall'array di oggetti

const {id, content, media, author, likes ,created} = posts



const post1 = [posts[0]['id'], posts[0]['content'], posts[0]['media'], posts[0]['author'], posts[0]['likes'], posts[0]['created']]


const post2 = [posts[1]['id'], posts[1]['content'], posts[1]['media'], posts[1]['author'], posts[1]['likes'], posts[1]['created']]


const post3 = [posts[2]['id'], posts[2]['content'], posts[2]['media'], posts[2]['author'], posts[2]['likes'], posts[2]['created']]


const post4 = [posts[3]['id'], posts[3]['content'], posts[3]['media'], posts[3]['author'], posts[3]['likes'], posts[3]['created']]


const post5 = [posts[4]['id'], posts[4]['content'], posts[4]['media'], posts[4]['author'], posts[4]['likes'], posts[4]['created']]



const postArray = [
    post1,

    post2,

    post3,

    post4,

    post5
]


const authorArray = [
    posts[0]['author'],

    posts[1]['author'],

    posts[2]['author'],

    posts[3]['author'],

    posts[4]['author']    
]

console.log(authorArray, 'array degli autori')




console.log(postArray)
//stampo i post nella dom(feed)

//seleziono il container nella dom

const containerElement = document.getElementById('container')
console.log(containerElement)

//creo una variabile per avere una data casuale

function generateRandomDate() {
    return new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
    }
    
    (new generateRandomDate()).toLocaleDateString('en-US')





                            

    //ciclo per stampare i post nella dom
   
    
  //ciclo l'array degli autori in modo da avere accesso ai dati all'interno  
for (let i = 0; i < authorArray.length; i++) {
        const element = authorArray[i];
         console.log(element, 'helloooooooooooooooooooooooooo')
          
           
}




//scrivo il contenuto da inserire nella dom 

for (let i = 0; i < postArray.length; i++) {
     const postSrc = postArray[i];
     const postInTheDom = ` <div class="post">
                            <div class="post__header">
                                <div class="post-meta">                    
                                    <div class="post-meta__icon">
                                        <img class="profile-pic" src="${authorArray[i]['image']}" alt="Phil Mangione">                    
                                    </div>
                                    <div class="post-meta__data">
                                        <div class="post-meta__author">${authorArray[i]['name']}</div>
                                        <div class="post-meta__time">${generateRandomDate()}</div>
                                    </div>                    
                                </div>
                            </div>
                            <div class="post__text">${postArray[i][1]}</div>
                            <div class="post__image">
                                <img src="${postArray[i][2]}" alt="">
                            </div>
                            <div class="post__footer">
                                <div class="likes js-likes">
                                    <div class="likes__cta">
                                        <a class="like-button  js-like-button" href="#" data-postid="1">
                                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                            <span class="like-button__label">Mi Piace</span>
                                        </a>
                                    </div>
                                    <div class="likes__counter">
                                        Piace a <b id="like-counter-1" class="js-likes-counter">${postArray[i][4]}</b> persone
                                    </div>
                                </div> 
                            </div>            
                            </div>`

    containerElement.insertAdjacentHTML('beforeend', postInTheDom)
    
}





