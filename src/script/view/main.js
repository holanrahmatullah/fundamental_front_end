import '../component/club-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
const main = () => {
    const searchElement = document.querySelector("search-bar");
    // const buttonSearchElement = document.querySelector("#searchButtonElement");
    const clubListElement = document.querySelector("club-list");

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchClub(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    // const renderResult = results => {
    //     clubListElement.innerHTML = "";
    //     results.forEach(club => {
    //         const {
    //             name,
    //             fanArt,
    //             description
    //         } = club;
    //         const clubElement = document.createElement("div");
    //         clubElement.setAttribute("class", "club");

    //         clubElement.innerHTML = `
    //            <img class="fan-art-club" src="${fanArt}" alt="Fan Art">
    //            <div class="club-info">
    //                <h2>${name}</h2>
    //                <p>${description}</p>
    //            </div>`;

    //         clubListElement.appendChild(clubElement);
    //     })
    // };

    const renderResult = results => {
        clubListElement.clubs = results;
    };


    // const fallbackResult = message => {
    //     clubListElement.innerHTML = "";
    //     clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    // };

    const fallbackResult = message => {
        clubListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;

// // Mengambil Data dari data-source.js karena harus membaca data tersebut terlebih dahulu,agar main.js bisa terbaca
// import '../component/search-bar.js';
// import DataSource from '../data/data-source.js';

// const main = () => {
//     const searchElement = document.querySelector("search-bar");
//     // tidak membutuhkan buttonsearchelement karena sekarang kita dapat mengakses button pada komponen pencarian melaulu seachElement
//     // const buttonSearchElement = document.querySelector("#searchButtonElement");
//     const clubListElement = document.querySelector("#clubList");

//     // const onButtonSearchClicked = () => {
//     //     DataSource.searchClub(searchElement.value)
//     //         .then(renderResult)
//     //         .catch(fallbackResult)
//     // };

//     // Di Bawah ini Contoh promise
//     const onButtonSearchClicked = async () => {
//         try {
//             const results = await DataSource.searchClub(searchElement.value);
//             renderResult(results);
//         } catch (message) {
//             fallbackResult(message)

//         }
//     }

//     const renderResult = (results) => {
//         clubListElement.innerHTML = "";
//         results.forEach(function (club) {
//             const {
//                 name,
//                 fanArt,
//                 description
//             } = club;
//             const clubElement = document.createElement("div");
//             clubElement.setAttribute("class", "club");

//             clubElement.innerHTML = `
//             <img class="fan-art-club" src=" ${fanArt}" alt="Fan Art">

//                 <div class="club-info">
//                 <h2>${name}</h2>

//                 <p>${description}</p>
//                 </div>`;
//             clubListElement.appendChild(clubElement);
//         })
//     };

//     const fallbackResult = (message) => {
//         clubListElement.innerHTML = "";
//         clubListElement.innerHTML += `<h2 class="placeholder"> ${message}</h2>`
//     };

//     // merubahnya menjadu event click
//     // buttonSearchElement.addEventListener("click", onButtonSearchClicked);
//     searchElement.clickEvent = onButtonSearchClicked;
// };
// export default main;