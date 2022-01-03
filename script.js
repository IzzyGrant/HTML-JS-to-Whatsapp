    /* EN LA VARIABLE "Whats1" DEBERAS ASIGNAR EL MUMERO AL QUE LE LLEGARA EL MENSAJE CONSTRUIDO*/
    
    function prov1(){
        var whats1 = "https://wa.me/TUNUMEROAQUI?text="
        var start = "Hola, escibe los siguientes articulos: \n%0a"
        var name1, cant1, listItem1, name2, cant2, listItem2, name3, cant3, listItem3, name4, cant4, listItem4, name5, cant5, listItem5, name6, cant6, listItem6;
        name1=cant1=listItem1=name2=cant2=listItem2=name3=cant3=listItem3=name4=cant4=listItem4=name5=cant5=listItem5=name6=cant6=listItem6="";
        var msgBuild = "";
        var objNumber = 0;

        var item1 = document.querySelector("#item1").checked;
        var item2 = document.querySelector("#item2").checked;
        var item3 = document.querySelector("#item3").checked;
        var item4 = document.querySelector("#item4").checked;
        var item5 = document.querySelector("#item5").checked;
        var item6 = document.querySelector("#item6").checked;
        if(item1 == true){
            cant1 = document.getElementById("cant1").value;
            listItem1 = document.getElementById("uni1").value;
            name1 = " Objeto 1  %0a";
            objNumber++;
        }
        if(item2 == true){
            cant2 = document.getElementById("cant2").value;
            listItem2 = document.getElementById("uni2").value;
            name2 = " Objeto 2  %0a";
            objNumber++;
        }
        if(item3 == true){
            cant3 = document.getElementById("cant3").value;
            listItem3 = document.getElementById("uni3").value;
            name3 = " Objeto 3  %0a";
            objNumber++;
        }
        if(item4 == true){
            cant4 = document.getElementById("cant4").value;
            listItem4 = document.getElementById("uni4").value;
            name4 = " Objeto 4  %0a";
            objNumber++;
        }
        if(item5 == true){
            cant5 = document.getElementById("cant5").value;
            listItem5 = document.getElementById("uni5").value;
            name5 = " Objeto 5  %0a";
            objNumber++;
        }
        if(item6 == true){
            cant6 = document.getElementById("cant6").value;
            listItem6 = document.getElementById("uni6").value;
            name6 = " Objeto 6  %0a";
            objNumber++;
        }

        msgBuild = whats1 + start + cant1 + listItem1 + name1 +
        cant2 + listItem2 + name2 + cant3 + listItem3 + name3 +
        cant4 + listItem4 + name4 + cant5 + listItem5 + name5 +
        cant6 + listItem6 + name6;

        if(objNumber >= 1){
            alert("Se abrirá WhatsApp con " + objNumber + " elemento(s).\nPuede modificar el mensaje antes de enviar.");
            window.open(msgBuild);
        }else{ alert("Selecciona almenos un elemento."); }
    }


    /* bY IZZY G OSORIO (nikaylez@gmail.com) */