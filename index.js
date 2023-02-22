
            let i=1;
            let j=0;
            let arr = new Array();
            arr[0] = new Array();
            arr[0][0] = new Array();
            arr[0][1] = new Array();
            arr[0][2] = new Array();
            
			function GFG_click(clicked) {
                if(i%2 != 0)
                {
                    document.getElementById(clicked).innerHTML="X";
                    document.getElementById(clicked).disabled=true;
                    i+=1;
                }
                else {
                    document.getElementById(clicked).innerHTML="O";
                    document.getElementById(clicked).disabled=true;
                    i+=1;
                }

                if(clicked==="row1-col1")
                {
                    arr[0][0][0] = document.getElementById(clicked).textContent;
                    checking();
                }
                if(clicked==="row1-col2")
                {
                    arr[0][0][1] = document.getElementById(clicked).textContent;
                    checking();
                }
                if(clicked==="row1-col3")
                {
                    arr[0][0][2] = document.getElementById(clicked).textContent;
                    checking();
                }
                if(clicked==="row2-col1")
                {
                    arr[0][1][0] = document.getElementById(clicked).textContent;
                    checking();
                }
                if(clicked==="row2-col2")
                {
                    arr[0][1][1] = document.getElementById(clicked).textContent;
                    checking();
                }
                if(clicked==="row2-col3")
                {
                    arr[0][1][2] = document.getElementById(clicked).textContent;
                    checking();
                }
                if(clicked==="row3-col1")
                {
                    arr[0][2][0] = document.getElementById(clicked).textContent;
                    checking();
                }
                if(clicked==="row3-col2")
                {
                    arr[0][2][1] = document.getElementById(clicked).textContent;
                    checking();
                }
                if(clicked==="row3-col3")
                {
                    arr[0][2][2] = document.getElementById(clicked).textContent;
                    checking();
                }
                    
                function checking() {
                    if(((arr[0][0][0] == "X") &&(arr[0][0][1] == "X") && (arr[0][0][2] == "X")) || ((arr[0][1][0] == "X") &&(arr[0][1][1] == "X") && (arr[0][1][2] == "X")) || ((arr[0][2][0] == "X") &&(arr[0][2][1] == "X") && (arr[0][2][2] == "X")))
                    {
                        j+=1;
                        document.getElementById("result").textContent="X WON";
                        disable();
                    }
                    
                    if(((arr[0][0][0] == "X") &&(arr[0][1][0] == "X") && (arr[0][2][0] == "X")) || ((arr[0][0][1] == "X") &&(arr[0][1][1] == "X") && (arr[0][2][1] == "X")) || ((arr[0][0][2] == "X") &&(arr[0][1][2] == "X") && (arr[0][2][2] == "X")))
                    {
                        j+=1;
                        document.getElementById("result").textContent="X WON";
                        disable();
                    }
                    if(((arr[0][0][0] == "O") &&(arr[0][0][1] == "O") && (arr[0][0][2] == "O")) || ((arr[0][1][0] == "O") &&(arr[0][1][1] == "O") && (arr[0][1][2] == "O")) || ((arr[0][2][0] == "O") &&(arr[0][2][1] == "O") && (arr[0][2][2] == "O")))
                    {
                        j+=1;
                        document.getElementById("result").textContent="O WON";
                        disable();
                    }
                    if(((arr[0][0][0] == "O") &&(arr[0][1][0] == "O") && (arr[0][2][0] == "O")) || ((arr[0][0][1] == "O") &&(arr[0][1][1] == "O") && (arr[0][2][1] == "O")) || ((arr[0][0][2] == "O") &&(arr[0][1][2] == "O") && (arr[0][2][2] == "O")))
                    {
                        j+=1;
                        document.getElementById("result").textContent="O WON";
                        disable();
                    }
                    if(((arr[0][0][0] == "X") &&(arr[0][1][1] == "X") && (arr[0][2][2] == "X")) || ((arr[0][0][2] == "X") &&(arr[0][1][1] == "X") && (arr[0][2][0] == "X")))
                    {
                        j+=1;
                        document.getElementById("result").textContent="X WON";
                        disable();
                    }
                    if(((arr[0][0][0] == "O") &&(arr[0][1][1] == "O") && (arr[0][2][2] == "O")) || ((arr[0][0][2] == "O") &&(arr[0][1][1] == "O") && (arr[0][2][0] == "O")))
                    {
                        j+=1;
                        document.getElementById("result").textContent="O WON";
                        disable();
                    }
                    if((i==10) && (j==0))
                        document.getElementById("result").textContent="DRAW";

                    gsap.to("#result",{
                        x:"680px",
                        duration: 5,
                    });    
                    
                }
                
			}	

            let reset = () =>{
                location.reload();
            };

            function disable() 
            {
                document.getElementById("row1-col1").disabled=true;
                document.getElementById("row1-col2").disabled=true;
                document.getElementById("row1-col3").disabled=true;
                document.getElementById("row2-col1").disabled=true;
                document.getElementById("row2-col2").disabled=true;
                document.getElementById("row2-col3").disabled=true;
                document.getElementById("row3-col1").disabled=true;
                document.getElementById("row3-col2").disabled=true;
                document.getElementById("row3-col3").disabled=true;
            }

            
            