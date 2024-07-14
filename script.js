// login - register
var navbar = document.getElementById('navbar')

function toggleBtn() {
    navbar.classList.toggle("hideMenu")
}
var modalRegister = document.getElementById('modalRegister');
var modalLogin = document.getElementById('modalLogin');
function back() {
    modalRegister.style.display = 'none'
    modalLogin.style.display = 'none'
}
function formLogin() {
    modalRegister.style.display = 'none';
    modalLogin.style.display = 'flex';
}

function formRegister() {
    modalLogin.style.display = 'none';
    modalRegister.style.display = 'flex';
    navbar.classList.remove('hideMenu')
}

document.addEventListener('click', function (event) {
    if (event.target === modalRegister) {
        modalRegister.style.display = 'none';
    } else if (event.target === modalLogin) {
        modalLogin.style.display = 'none';
    }
}
)


// slice show
var index = 0;
changeImage = function () {
    var imgs = ['b1.jpg', 'b2.png', 'b3.jpg', 'b4.jpg'];
    document.getElementById('header').style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/${imgs[index]}')`;
    index++;
    if (index == imgs.length) {
        index = 0;
    }
}
setInterval(changeImage, 2000);

// pagination

// const product = [
//     { id: 1, location: 'Hoan Kiem District, Ha Noi', image: 'images/house-1.jpg', name: 'Ja Cosmo Hotel' ,rating:['class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-regular fa-star"'], guest: 'Family', price: '$ 200', dataLocation:'Ha Noi', dataHotel:'Ja Cosmo', type:'Bedroom / Bathroom / Wifi'},
//     { id: 2, location: 'District 1, Ho Chi Minh City', image: 'images/house-2.jpg', name: 'Tuong Vy Signature' ,rating:['class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-sold fa-star-half-at"'], guest: 'Family', price: '$ 100', dataLocation:'Ho Chi Minh', dataHotel:'Tuong Vy', type:'Bedroom / Bathroom / Wifi / Pool'},
//     { id: 3, location: 'District 4, Ho Chi Minh City', image: 'images/house-3.jpg', name: 'Millennium Saigon' ,rating:['class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star-half-alt"', 'class="fa-regular fa-star"'], guest: '3 Guest', price: '$ 150', dataLocation:'Ho Chi Minh', dataHotel:'Millennium', type:'Bedroom / Bathroom / Wifi'},
//     { id: 4, location: 'Hoan Kiem District, Ha Noi', image: 'images/house-4.jpg', name: 'Hotel Du Palace' ,rating:['class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star-half-alt"', 'class="fa-regular fa-star"'], guest: '3 Guest', price: '$ 125', dataLocation:'Ha Noi', dataHotel:'Du Palace', type:'Bedroom / Bathroom / Wifi'},
//     { id: 5, location: 'Nha Trang Beach, Nha Trang', image: 'images/house-5.jpg', name: 'The Signature Hotel Nha Trang' ,rating:['class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star"'], guest: '3 Guest', price: '$ 200', dataLocation:'Nha Trang', dataHotel:'The Signature', type:'Bedroom / Bathroom / Wifi'},
//     { id: 6, location: 'Nha Trang Beach, Nha Trang', image: 'images/house-6.jpg', name: 'Oceanfront Residence Nha Trang' ,rating:['class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star-half-alt"', 'class="fa-regular fa-star"'], guest: '4 Guest', price: '$ 160', dataLocation:'Nha Trang', dataHotel:'Ja Cosmo', type:'Bedroom / Bathroom / Wifi / Pool'},
//     { id: 7, location: 'Tan Mai Street, Ha Long', image: 'images/house-7.jpg', name: "D'Lecia Ha Long Hotel" ,rating:['class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-regular fa-star"'], guest: '4 Guest', price: '$ 220', dataLocation:'Quang Ninh', dataHotel:"D'Lecia", type:'Bedroom / Bathroom / Wifi / Pool'},
//     { id: 8, location: 'Ha Long City, Ha Long', image: 'images/house-8.jpg', name: 'Harmony Ha Long Hotel' ,rating:['class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-regular fa-star"', 'class="fa-regular fa-star"'], guest: '2 Guest', price: '$ 175', dataLocation:'Quang Ninh', dataHotel:'Ja Cosmo', type:'Bedroom / Bathroom / Wifi '},
//     { id: 9, location: 'Dong Da District, Ha Noi', image: 'images/house-9.jpg', name: 'Eli Rina Hotel' ,rating:['class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star-half-alt"', 'class="fa-regular fa-star"'], guest: '3 Guest', price: '$ 120', dataLocation:'Ha Noi', dataHotel:'Ja Cosmo', type:'Bedroom / Bathroom / Wifi '},
//     { id: 10, location: 'Hoan Kiem District, Ha Noi', image: 'images/house-10.jpg', name: 'Shining Central Hotel' ,rating:['class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star"'], guest: '4 Guest', price: '$ 200', dataLocation:'Ha Noi', dataHotel:'Ja Cosmo', type:'Bedroom / Bathroom / Wifi / Kitchen'},
//     { id: 11, location: 'Ha Long City, Quang Ninh Province', image: 'images/house-11.jpg', name: 'DeLaSea Ha Long Hotel' ,rating:['class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star-half-alt"', 'class="fa-regular fa-star"'], guest: '4 Guest', price: '$ 162', dataLocation:'Quang Ninh', dataHotel:'Ja Cosmo', type:'Bedroom / Bathroom / Wifi '},
//     { id: 12, location: 'Minh Khai Street, Nha Trang', image: 'images/house-12.jpg', name: 'Capital Beachfront Nha Trang' ,rating:['class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-regular fa-star"'], guest: '2 Guest', price: '$ 165', dataLocation:'Nha Trang', dataHotel:'Ja Cosmo', type:'Bedroom / Bathroom / Wifi '},
//     { id: 13, location: 'Ha Long City, Quang Ninh Province', image: 'images/house-13.jpg', name: 'DeLaSea Ha Long Hotel' ,rating:['class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star"', 'class="fa-solid fa-star-half-alt"'], guest: '4 Guest', price: '$ 190', dataLocation:'Quang Ninh', dataHotel:'Ja Cosmo', type:'Bedroom / Bathroom / Wifi / Pool'}

// ];

// let perPage = 4;
// let currentPage = 1;
// let start = 0;
// let end = perPage;

// function renderProduct(){
//     html='';
//     const content = product.map((item, index) =>{
//         html += '<div class="house" data-location='+ item.dataLocation + 'data-hotel = "' + item.dataHotel + '">'
//         html += '<div class="house-img">';
//         html += '<a href="#"><img src= "' + item.image + '" alt=""></a>';
//         html += '</div>';
//         html += '<div class="house-info">';
//         html += '<span class="house-location"><i class="fa-solid fa-location-dot"></i>' + item.location + '</span>';
//         html += '<a href="#"><h3>' + item.name + '</h3></a>';
//         html += '<p>' + item.type + '</p>';
//         html += '<i' + item.rating[0] + '></i>';
//         html += '<i' + item.rating[1] + '></i>';
//         html += '<i' + item.rating[2] + '></i>';
//         html += '<i' + item.rating[3] + '></i>';
//         html += '<i' + item.rating[4] + '></i>';
//         html += '<div class="house-price">';
//         html += '<p>' + item.guest + '</p>';
//         html += '<h4>' + item.price + '<span>/ day</span></h4>';
//         html += '</div>';
//         html += '</div>';
//         html += '</div>';
//     })
//     document.getElementById('product').innerHTML = html;
// }

// renderProduct()



// current button

function activeButton(btnActive) {
    btnList.forEach(btn => {
        btn.classList.remove('active');
    })
    btnActive.classList.add('active');
};

// filter
var btnList = document.querySelectorAll('.filter .filter-btn');
var hotelList = document.querySelectorAll('.house');
btnList.forEach(btn => {
    btn.addEventListener('click', e => {
        activeButton(e.currentTarget);
        let location = e.currentTarget.getAttribute('data-location');
        hotelList.forEach(house => {
            let locationHotel = house.getAttribute('data-location');
            if (location == 'all' || locationHotel == location) {
                house.classList.remove('hide');
            }
            else {
                house.classList.add('hide');
            };
        });
    });


});

// hide list hotel & show hotel-details
hotelList.forEach((hotel) => {
    hotel.onclick = function (e) {
        document.querySelector('.container').classList.add('hide');
        var dataHotel = e.currentTarget.getAttribute('data-hotel');
        console.log(dataHotel);
        house(houseData[dataHotel]);
    };
});


const houseData = ({
    "Ja Cosmo": {
        name: "Ja Cosmo Hotel",
        location: "Location: in Hoan Kiem District, Ha Noi City",
        images: ['house-1-1.jpg', 'house-1-2.jpg', 'house-1-3.jpg', 'house-1-4.jpg', 'house-1-5.jpg'],
        desc: "Located in the heart of Hanoi, Ja Cosmo Hotel is a 3-minute walk from Thang Long Puppet Theater and less than 1 km from Hoan Kiem Lake. The property is less than 1 km from Trang Tien Plaza, 2.7 km from Hanoi Railway Station and 3.1 km from Hue Imperial Citadel. The property offers a 24-hour front desk, airport pick-up service, room service and free Wi-Fi in all rooms.",
        reviews: '245 Reviews',
        rating: ['fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-regular fa-star'],
        price: '200',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14896.229452685397!2d105.844622296056!3d21.030390639906187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abbf59d8f429%3A0x7830a3dfd6e566a1!2zSG_DoG4gS2nhur9tLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1720693160360!5m2!1svi!2s'
    },
    "Tuong Vy": {
        name: "Tuong Vy Signature",
        location: "Location: District 1, Ho Chi Minh City",
        images: ['house-2-1.jpg', 'house-2-2.jpg', 'house-2-3.jpg', 'house-2-4.jpg', 'house-2-5.jpg'],
        desc: "Located in a convenient location in the city. Ho Chi Minh, Tuong Vy Signature offers air-conditioned rooms with free Wi-Fi, private parking and room service. This 4-star hotel offers a 24-hour front desk and tour desk. This property is non-smoking and located an 8-minute walk from Ben Thanh Market.",
        reviews: '402 Reviews',
        rating: ['fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star-half-alt'],
        price: '200',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31355.7696739585!2d106.6777628842288!3d10.77517636988736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f9ed887b%3A0x14aded5703768989!2zUXXhuq1uIDEsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1720705070120!5m2!1svi!2s',
    },
    "Millennium": {
        name: "Millennium Saigon",
        location: "Location: District 4, Ho Chi Minh City",
        images: ['house-3-1.jpg', 'house-3-2.jpg', 'house-3-3.jpg', 'house-3-4.jpg', 'house-3-5.jpg'],
        desc: "The aparthotel has a balcony where guests can enjoy city views, a seating area, a TV, a fully equipped kitchen with a refrigerator and microwave, and a private bathroom equipped with a shower and toiletries. free multiplication. A stove and kettle are provided.",
        reviews: '150 Reviews',
        rating: ['fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star-half-alt', 'fa-regular fa-star'],
        price: '150',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31355.7696739585!2d106.6777628842288!3d10.77517636988736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f9ed887b%3A0x14aded5703768989!2zUXXhuq1uIDEsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1720705070120!5m2!1svi!2s',
    },
    "Du Palace": {
        name: "Hotel Du Palace",
        location: "Location: District 4, Ho Chi Minh City",
        images: ['house-4-1.jpg', 'house-4-2.jpg', 'house-4-3.jpg', 'house-4-4.jpg', 'house-4-5.jpg'],
        desc: "The aparthotel has a balcony where guests can enjoy city views, a seating area, a TV, a fully equipped kitchen with a refrigerator and microwave, and a private bathroom equipped with a shower and toiletries. free multiplication. A stove and kettle are provided.",
        reviews: '242 Reviews',
        rating: ['fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star-half-alt', 'fa-regular fa-star'],
        price: '125',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14896.229452685397!2d105.844622296056!3d21.030390639906187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abbf59d8f429%3A0x7830a3dfd6e566a1!2zSG_DoG4gS2nhur9tLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1720693160360!5m2!1svi!2s',
    },
    "The Signature": {
        name: "The Signature Hotel Nha Trang",
        location: "Location: Nha Trang Beach, Nha Trang",
        images: ['house-5-1.jpg', 'house-5-2.jpg', 'house-5-3.jpg', 'house-5-4.jpg', 'house-5-5.jpg'],
        desc: "Located in Nha Trang, a 5-minute walk from Nha Trang Beach, The Signature Hotel Nha Trang offers rooms with a fitness center, free private parking, a restaurant and a private beach area. This 5-star hotel offers room service and concierge services. The property offers a 24-hour front desk, airport pick-up service, children's club and free Wi-Fi in all rooms.",
        reviews: '270 Reviews',
        rating: ['fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star'],
        price: '200',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.2155654014737!2d109.1951382746796!3d12.233678488018004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3170676df3d13491%3A0xa372058e222a1b89!2zVHLhuqduIFBow7osIE5oYSBUcmFuZywgS2jDoW5oIEjDsmEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1720709738956!5m2!1svi!2s',
    },
    "D'Lecia": {
        name: "D'Lecia Ha Long Hotel",
        location: "Location: Tan Mai Street, Ha Long",
        images: ['house-7-1.jpg', 'house-7-2.jpg', 'house-7-3.jpg', 'house-7-4.jpg', 'house-7-5.jpg'],
        desc: "D'Lecia Ha Long Hotel features an outdoor swimming pool, shared lounge, restaurant and bar in Ha Long. The property is about 1.8 km from Marina Bay Beach, 2.2 km from Bai Chay and 4.1 km from Queen Cable Car. The property offers a 24-hour front desk, airport shuttle, room service and free WiFi throughout the property.",
        reviews: '220 Reviews',
        rating: ['fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star'],
        price: '200',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29805.303836337047!2d107.0160623991943!3d20.966045262698202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a5896bfde7551%3A0xa242a0cf37455a5a!2zQsOjaSBDaMOheSwgVHAuIEjhuqEgTG9uZywgUXXhuqNuZyBOaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1720805966588!5m2!1svi!2s',
    },

});


function house({
    name = '',
    location = '',
    images = '',
    desc = '',
    reviews = '',
    rating = '',
    price = '',
    map = ''
}) {
    const main = document.getElementById('house-details');


    if (main) {
        main.classList.add('house-details');
        main.innerHTML = `
                <div class="house-title">
            <h1>${name}</h1>
            <div class="row">
                <div>
                    <i class="${rating[0]}"></i>
                    <i class="${rating[1]}"></i>
                    <i class="${rating[2]}"></i>
                    <i class="${rating[3]}"></i>
                    <i class="${rating[4]}"></i>
                    <span>${reviews}</span>
                </div>
                <div>
                    <p>Location: ${location}</p>
                </div>
            </div>
        </div>
        <div class="gallery">
            <div class="gallery-img gallery-img-1"><img src="images/${images[0]}" alt=""></div>
            <div class="gallery-img"><img src="images/${images[1]}" alt=""></div>
            <div class="gallery-img"><img src="images/${images[2]}" alt=""></div>
            <div class="gallery-img"><img src="images/${images[3]}" alt=""></div>
            <div class="gallery-img"><img src="images/${images[4]}" alt=""></div>
        </div>
        <div class="small-details">
            <h2>Entire rental unit hosted by Brandon</h2>
            <p>4 guest &nbsp; &nbsp; bathroom &nbsp; &nbsp; pool</p>
            <h4>$ ${price} / day</h4>
        </div>
        <hr class="line">
        <form class="check-form">
            <div>
                <label for="">Check-in</label>
                <input type="text" placeholder="Add date">
            </div>
            <div>
                <label for="">Check-out</label>
                <input type="text" placeholder="Add date">
            </div>
            <div>
                <label for="" class="guest-field">Guest</label>
                <input type="text" placeholder="2 guest">
            </div>
            <button type="submit">Check Availability</button>
        </form>

        <ul class="details-list">
            <li><i class="fa-solid fa-house-chimney"></i>Entire Home
                <span>You will have the entire flat for you.</span>
            </li>
            <li><i class="fa-solid fa-paintbrush"></i>Enhanced Clean
                <span>This host has committed to staybnb's cleaning process.</span>
            </li>
            <li><i class="fa-solid fa-location-dot"></i>Great Location
                <span>90% of recent guests gave the location a 5 star rating.</span>
            </li>
            <li><i class="fa-solid fa-heart"></i>Great check-in Experience
                <span>100% of recent guests gave the check-in process a 5 star rating.</span>
            </li>
        </ul>

        <hr class="line">

        <p class="home-desc">${desc}</p>
        <hr class="line">

        <div class="map">
            <h3>Location Map</h3>
            <iframe
                src="${map}"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            <p>It's like a home away from home.</p>
        </div>

        <hr class="line">

        <div class="host">
            <img src="images/host.png" alt="">
            <div>
                <h2>Hosted by Brandon</h2>
                <p><span>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-alt"></i>
                    </span> &nbsp; &nbsp; 272 reviews &nbsp; &nbsp; Response rate 93% &nbsp;
                    &nbsp; Response time: 53 min</p>
            </div>
        </div>
        <a href="" class="contact-host">Contact Host</a>
        <div class="container">
            <div class="footer">
                <a href="http://facebook.com/"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="http://youtube.com/"><i class="fa-brands fa-youtube"></i></a>
                <a href="http://twitter.com/"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="http://linkedin.com/"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="http://instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                <hr>
                <p>Copyright @ 2024, Travel VietNam </p>
            </div>
        </div>

        `;
        addClickEventToGallery();

    };

};
// show galleryImgs with overlay('modal')

function addClickEventToGallery() {
    const galleryImgs = document.querySelectorAll('.gallery-img img');
    galleryImgs.forEach(img => {
        img.addEventListener('click', function () {
            const overlay = document.createElement('div');
            overlay.classList.add('modal');
            const enlargedImg = document.createElement('img');
            enlargedImg.src = img.src;
            enlargedImg.className = 'enlarged-img';
            overlay.appendChild(enlargedImg);
            document.body.appendChild(overlay);
            enlargedImg.addEventListener('click', function (e) {
                e.stopPropagation();
            });
            overlay.addEventListener('click', function () {
                document.body.removeChild(overlay);
            });
        });
    });
}

let apiUser = "http://localhost:3000/user";

document.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
});

function formRegister() {
    document.getElementById('modalRegister').style.display = 'block';
}

function formLogin() {
    document.getElementById('modalLogin').style.display = 'block';
}

function back() {
    document.getElementById('modalRegister').style.display = 'none';
    document.getElementById('modalLogin').style.display = 'none';
}

function getUser(callback) {
    fetch(apiUser)
        .then(function(res) {
            return res.json();
        })
        .then(callback)
        .catch(function(err) {
            console.error("Có lỗi xảy ra:", err);
        });
}

function handleLogin(data) {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let isAuthenticated = false;

    data.forEach((user) => {
        if (user.email === email && user.password === password) {
            isAuthenticated = true;
        }
    });

    if (isAuthenticated) {
        alert("Đăng nhập thành công");
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('email', email);
        replaceSignUpLink();
        location.reload();
    } else {
        alert("Sai tên đăng nhập hoặc mật khẩu");
    }
}

function login() {
    getUser(handleLogin);
}

function replaceSignUpLink() {
    let registerBtns = document.querySelectorAll('.register-btn');
    if (registerBtns) {
        registerBtns.forEach(btn => {
            btn.innerHTML = '<i class="fa-solid fa-circle-user" id="userIcon"></i>';
            btn.classList.remove('register-btn');
            btn.removeAttribute('onclick');
            btn.addEventListener('click', toggleLogoutMenu);
        });
    }
}

function toggleLogoutMenu() {
    let logoutMenu = document.getElementById('logoutMenu');
    if (logoutMenu.style.display === 'none' || logoutMenu.style.display === '') {
        logoutMenu.style.display = 'block';
    } else {
        logoutMenu.style.display = 'none';
    }
}

function logout() {
    alert("Đăng xuất thành công");
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('email');
    let registerBtns = document.querySelectorAll('#userIcon').parentNode;
    if (registerBtns) {
        registerBtns.forEach(btn => {
            btn.innerHTML = 'Sign Up Now';
            btn.classList.add('register-btn');
            btn.setAttribute('onclick', 'formRegister()');
        });
        document.getElementById('logoutMenu').style.display = 'none';
    }
    location.reload();
}

function checkLoginStatus() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        let registerBtns = document.querySelectorAll('.register-btn');
        if (registerBtns) {
            registerBtns.forEach(btn => {
                btn.style.display = 'none';
            });
        }
        let userIcons = document.querySelectorAll('#userIcon');
        if (userIcons) {
            userIcons.forEach(icon => {
                icon.style.display = 'inline';
            });
        }
    } else {
        let registerBtns = document.querySelectorAll('.register-btn');
        if (registerBtns) {
            registerBtns.forEach(btn => {
                btn.style.display = 'inline';
            });
        }
        let userIcons = document.querySelectorAll('#userIcon');
        if (userIcons) {
            userIcons.forEach(icon => {
                icon.style.display = 'none';
            });
        }
    }
}

document.getElementById('loginButton').addEventListener('click', login);

function registerUser() {
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    if (password !== confirmPassword) {
        alert('Mật khẩu và mật khẩu xác nhận không khớp.');
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
        alert('Email phải có định dạng @gmail.com.');
        return;
    }

    fetch(apiUser)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(users => {
            const userExists = users.some(user => user.email === email);
            if (userExists) {
                alert('Email đã tồn tại.');
                return;
            }

            const newUser = {
                email: email,
                password: password
            };

            return fetch(apiUser, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });
        })
        .then(response => {
            if (response && !response.ok) {
                throw new Error('Network response was not ok');
            }
            return response ? response.json() : null;
        })
        .then(data => {
            if (data) {
                console.log('Success:', data);
                alert('Đăng ký thành công!');
                location.reload();  // Thêm dòng này để tải lại trang sau khi đăng ký thành công
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Đăng ký thất bại.');
        });
}


