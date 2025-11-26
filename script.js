var nos = parseInt(prompt("Enter the no. of students:"));

        for(let i=1;i<=nos;i++)
       
    {
         var name=prompt("Enter the name " + i + " of the student:");
let result=input();

        function input()
        {
            
        let m1 = parseInt(prompt("Enter Mark1:"));
         document.write("Mark1 " + m1 + "<br/>");

          let m2 = parseInt(prompt("Enter Mark2:"));
         document.write("Mark2 " + m2 + "<br/>");

          let m3 = parseInt(prompt("Enter Mark3:"));
         document.write("Mark3 " + m3 + "<br/>");

          let m4 = parseInt(prompt("Enter Mark4:"));
         document.write("Mark4 " + m4 + "<br/>");

          let m5 = parseInt(prompt("Enter Mark5:"));
         document.write("Mark5 " + m5 + "<br/>");

         var total = m1+m2+m3+m4+m5;
         return total;
         
        }
        document.write("The name of the student is " + name + "<br/>");
        document.write("Total marks of five subjects : " + result + "<br/>");
     alert("Total marks of five subjects : " + result );
       let avg = result/5;
       alert("Average marks of a student : " + avg );
      document.write("Average marks of a student : " + avg + "<br/>");
      if (avg>=90) 
        document.write("Grade A+ </br>");
      else if (avg>80 && avg<90) 
         document.write("Grade A </br>");
       else if (avg >= 70 && avg < 80)
     document.write("Grade B </br>");
     else if (avg>60 && avg<69) 
     document.write("Grade C </br>");
     else if (avg>50 && avg<59) 
     document.write("Grade D </br>");
    else if (avg<50)
      document.write("Failed");
    }