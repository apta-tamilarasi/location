const user=[
	{
		f:"mike",
		l:"london",
		
	},

	{
		f:"tim",
		l:"us",
		
	},

	{
		f:"john",
		l:"australia",
		
	}
 ]

 document.write(JSON.stringify(user)+"<br><br>")

 let a=user.map(function(e,b){
	console.log(e,b)
	if(true){
		var lo=e.f
		var loc=e.l
	}
	 return [lo,loc]
	 
 })

 console.log(a)

 

 for(i=0;i<a.length;i++){
	console.log(a[i])

 document.write(`${(a[i])[0]} lives in ${(a[i])[1]}<br><br>`)

 console.log(`${(a[i])[0]} lives in ${(a[i])[1]}`)
}

// let a=user.map(function(e){
// 	if(true){
// 		var b=`${(e.f)} lives in ${(e.l)}<br>`
	
// 	}
// 	 return b
	 
//  })

//  document.write(a)



