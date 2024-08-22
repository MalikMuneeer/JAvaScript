let n=prompt("Enter number:");
n=Number.parseInt(n);
// for(let i=1; i<=n;i++)
// {
//     for(let j=1; j<=i; j++){
//         document.write("*");
//     }
//     document.write("<br>");
// }


for(let i=0;i<=n;i++)
	{
		for(let j=0;j<=n;j++)
		{
			if(i<n/2)
			{
				if(j<=n/2+i && j>=n/2-i)
				{
					document.write("*");
				}
                
				else{
					document.write("&nbsp");
				}
                // document.write("<br>");
			}
			else{
				if(j>=i-n/2 && j<=n-(i-n/2))
				{
					document.write("*");
				}
				else{
					document.write("&nbsp"); 
				}
                // document.write("<br>");
			}
            
		}
        document.write("<br>");
    }