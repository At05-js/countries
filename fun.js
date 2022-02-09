const aplicacion = document.querySelector('.container');
const url = 'https://restcountries.com/v3.1/all';
fetch(url)
.then(res => res.json())
.then(data => {
    console.log(data);
    Object.keys(data).sort();
    data.forEach(element=>{
        showCountry(element);
    })
})
.catch(err => console.log(err))

function showCountry(data){
    
    console.log(data.name.common)
    const country = document.createElement('div');
    country.classList.add("county");
    
    country.innerHTML=`<tr>
    <img src=${data.flags.png} width=60px>
    <td>${data.name.official}</td>
    <td>${data.capital}</td>
    <td>${data.region}</td>
    <td>${data.population}</td>
    </tr>`;
    aplicacion.appendChild(country)
}
