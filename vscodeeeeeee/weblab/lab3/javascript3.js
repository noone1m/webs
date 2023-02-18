// Car Array
const cars = [
	{
		make: 'Toyota',
		model: 'Camry',
		year: 2021,
		price: 28000,
		image: 'https://via.placeholder.com/400x200'
	},
	{
		make: 'Honda',
		model: 'Civic',
		year: 2022,
		price: 25000,
		image: 'https://via.placeholder.com/400x200'
	},
	{
		make: 'Nissan',
		model: 'Altima',
		year: 2021,
		price: 27000,
		image: 'https://via.placeholder.com/400x200'
	},
	{
		make: 'Ford',
		model: 'Mustang',
		year: 2022,
		price: 40000,
		image: 'https://via.placeholder.com/400x200'
	},
	{
		make: 'Chevrolet',
		model: 'Corvette',
		year: 2022,
		price: 65000,
		image: 'https://via.placeholder.com/400x200'
	},
];

function averageGrade(cars){ 
    let sum = 0; 
    for (let i = 0; i < cars.length; i++) { 
       sum += cars[i]['price']; 
    } 
    return sum / cars.length; 
} 
// Car List
const carList = document.getElementById('car-list');
function displayCars(cars) {
	carList.innerHTML = '';
	cars.forEach((car) => {
		const carEl = document.createElement('div');
		carEl.classList.add('car');
		carEl.innerHTML = `
			<img src="${car.image}" alt="${car.make} ${car.model}">
			<h3>${car.make} ${car.model}</h3>
			<p>Year: ${car.year}</p>
			<p>Price: $${car.price}</p>
		`;
		carList.appendChild(carEl);
	});
}
document.write("<h5>Average Price: " + averageGrade(cars) + "</h5>");
// Initial Display
displayCars(cars);


