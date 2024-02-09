
step1: create the header (score container with side title)
step2: create rock,paper,scissor (RPS) buttons.
step3: create onClick event for RPS btns
        - if user clicks rock and computer chooses paper, display "You lose!"
        - if user clicks paper and computer chooses rock, display "You win!"
        - if both users choose the same, it's a tie!
step4: when click of a btn (R or P or S), swap the divs (we need to hide game div and display result page) which also contains PLAY AGAIN  btn 
step5:  generate random choice out of R,P,S for computer choice using math.random
step6: change the score number in the score display based on the winner/loser.
        <!-- initially score will be 0, after playing , the updated score should retain and doesn't change on replay /on refreshing page(store score in local storage) -->
step7: create rules btn in bottom  right corner that shows a modal with the rules.
step8: create close button inside the modal has an onclick event that closes the rules modal box.
step9: Only if user wins over CPU choice , display the NEXT btn which takes to the Hurray page onClick of that btn.
step10:create hurray.html and design the page accordingly.