//your JS code here. If required.
const output = document.querySelector('#output');

const defaultOutput = ()=> output.innerHTML = `<tr id='loading' ><td colspan='2' >loading...</td> </tr>`;

defaultOutput();

const promise1 = new Promise((resolve,reject)=>{
	const time = Math.floor(Math.random() * 3) + 1;
	setTimeout(()=>{
		resolve(time);
	},time*1000);
	
})
const promise2 = new Promise((resolve,reject)=>{
	const time = Math.floor(Math.random() * 3) + 1;
	setTimeout(()=>{
		resolve(time);
	},time*1000);
	
})
const promise3 = new Promise((resolve,reject)=>{
	const time = Math.floor(Math.random() * 3) + 1;
	setTimeout(()=>{
		resolve(time);
	},time*1000);
	
})

Promise.all([promise1,promise2,promise3]).then(values=>{
	let tableBody = '';
	values.forEach((value,i) =>{
		tableBody += `<tr><td>Promise ${i+1}</td><td>${value} </td></tr>`;
	})
	tableBody += `<tr><td>Total</td><td>${values.reduce((acc,cur)=> acc+cur)} </td></tr>`;

	
	output.innerHTML = tableBody;	
})




