
function players_name() {
  
player_name1 = localStorage.getItem("Player_1_Name");

player_name2 = localStorage.getItem("Player_2_Name");

player1_score = 0;

player2_score = 0;

document.getElementById("player1").innerHTML = player_name1 + ":";

document.getElementById("player2").innerHTML = player_name2 + ":";

document.getElementById("player1_score").innerHTML = player1_score;

document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player_name1;

document.getElementById("question_turn").innerHTML = "Question Turn - " + player_name2;
}

 

function send() {

    get_value1 = document.getElementById("number_1").value;

    get_value2 = document.getElementById("number_2").value;

    operator = document.getElementById("operator").value;

    actual_answer_multiplication = parseInt(get_value1) * parseInt(get_value2);

    actual_answer_division = parseInt(get_value1) / parseInt(get_value2);

    actual_answer_add = parseInt(get_value1) + parseInt(get_value2);

    actual_answer_subtraction = parseInt(get_value1) - parseInt(get_value2);

    document.getElementById("value").innerHTML =  get_value1 + operator + get_value2 

    document.getElementById("number_1").value = "";

    document.getElementById("number_2").value = "";

    document.getElementById("operator").value = "";

}

answer_turn = "player1";

question_turn = "player2";

function check() {

get_answer = document.getElementById("input_check_box").value;

if (operator == '+' ) {

    if(get_answer == actual_answer_add) {

        
    
        if (answer_turn == "player1") {
    
            player1_score = player1_score + 1;

            document.getElementById("player1_score").innerHTML = player1_score;
            
            }
            
            else {
            
                player2_score = player2_score + 1;
                
                document.getElementById("player2_score").innerHTML = player2_score;
            
            }     
    
        }
        else {

            document.getElementById("player1_score").innerHTML = player1_score;

            document.getElementById("player2_score").innerHTML = player2_score; 

        }    

}
else if (operator == '-' ){

    if(get_answer == actual_answer_subtraction) {
    
        if (answer_turn == "player1") {
    
            player1_score = player1_score + 1;
            
            document.getElementById("player1_score").innerHTML = player1_score;
            
            }
            
            else {
            
                player2_score = player2_score + 1;
            
                document.getElementById("player2_score").innerHTML = player2_score;
            
            }
    
    }
    else {
        
        document.getElementById("player1_score").innerHTML = player1_score;

        document.getElementById("player2_score").innerHTML = player2_score;  
    }
}
else if (operator == '*'){

    if(get_answer == actual_answer_multiplication) {
    
        if (answer_turn == "player1") {
    
            player1_score = player1_score + 1;
            
            document.getElementById("player1_score").innerHTML = player1_score;
            
            }
            
            else {
            
                player2_score = player2_score + 1;
            
                document.getElementById("player2_score").innerHTML = player2_score;
            
            }
    
    }
    else {
        
        document.getElementById("player1_score").innerHTML = player1_score;

        document.getElementById("player2_score").innerHTML = player2_score;  
    }
}
else if (operator == '/'){

    if(get_answer == actual_answer_division) {
    
        if (answer_turn == "player1") {
    
            player1_score = player1_score + 1;
            
            document.getElementById("player1_score").innerHTML = player1_score;
            
            }
            
            else {
            
                player2_score = player2_score + 1;
            
                document.getElementById("player2_score").innerHTML = player2_score;
            
            }
    
    }
    else {
        
        document.getElementById("player1_score").innerHTML = player1_score;

        document.getElementById("player2_score").innerHTML = player2_score;  
    }

}


if(question_turn == "player1") {

    question_turn = "player2"
    
    document.getElementById("question_turn").innerHTML = "Question Turn - " + player_name2;
    
    }
    
    else {
    
    question_turn = "player1"
        
    document.getElementById("question_turn").innerHTML = "Question Turn - " + player_name1;
        
    }
    
    if(answer_turn == "player1") {
    
        answer_turn = "player2"
        
        document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player_name2;
        
        }
        
        else {
        
            answer_turn = "player1"
            
            document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player_name1;
           
        }

document.getElementById("value").innerHTML = "";

document.getElementById("input_check_box").value = "";

}

