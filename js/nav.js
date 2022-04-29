const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
    <div class="nav">
    <img src="image/logo2.png" class="MedTimely" alt="">
    <div class="Top-items" >
        <div   class="searchbar">
            <input type="text" class="search-box" placeholder="Search Medicine">
            <button class = "search-btn">search</button>
        </div>
        <a href="#"><img src = "image/user.png" alt=""></a>
        <a href="#"><img src = "image/cart.png" alt=""> </a>

    </div>
</div>
    <ul class="links-container">
    <li class="link-item"> <a href="#" class="link">Home</a> </li>
    <li class="link-item"> <a href="#" class="link">SkinCare</a> </li>
    <li class="link-item"> <a href="#" class="link">DailyMed</a> </li>
    <li class="link-item"> <a href="#" class="link">More</a> </li>
    </ul>
    `;
}
createNav();