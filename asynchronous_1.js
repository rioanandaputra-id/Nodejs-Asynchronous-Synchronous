// Synchronous
// const getUserSync = (id) => {
// 	// let nama = '';
// 	// if (id === 1) {
// 	// 	nama = 'rio';
// 	// } else {
// 	// 	nama = 'ananda';
// 	// }

// 	const nama = id === 1 ? "Rio" : "Ananda";
// 	return { id, nama };
// };

// const userSatu1 = getUserSync(1);
// console.log(userSatu1);

// const userDua1 = getUserSync(2);
// console.log(userDua1);

// const halo1 = "Hello Word!";
// console.log(halo1);

// Asynchronous
const getUser = (id, cb) => {
	const time = id === 1 ? 3000 : 2000;

	setTimeout(() => {
		const nama = id === 1 ? "Rio" : "Ananda";
		cb({ id, nama });
	}, time);
};

const userSatu = getUser(1, (hasil) => {
	console.log(hasil);
});

const userDua = getUser(2, (hasil) => {
	console.log(hasil);
});

const halo = "Hello Word!";
console.log(halo);
