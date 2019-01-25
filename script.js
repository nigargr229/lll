var x1=0,x2=0,a=1,b=-10,c=9;

//ax2+bx+c=0

if(a !=0){

        var d = Math.pow(b,2)-4*a*c;

        if(d>0)
        {
            x1=(-b+Math.sqrt(d))/2*a;
            x2=(-b-Math.sqrt(d))/2*a;

            console.log("X1="+x1+" X2 ="+ x2);
        }
        else if(d==0)  
        {
            x1= -b/2*a;

            console.log("X= "+x1);

        }  
        else
        {
            console.log("tenliyin helli yoxdur");

        }
        
}
else{console.log("a=0 ola bilmez")}



