# import random

# def guessing_game():

#     lower_bound = 1
#     upper_bound = 10
#     max_guesses = 5
#     number_of_guesses = 0
#     target = random.randint(lower_bound, upper_bound)

    
#     while max_guesses > 0:
#         user_guess = input(f"Guess a number between {lower_bound} and {upper_bound}: ")
        
#         if user_guess.isdigit():
#             valid_guess = int(user_guess)
            
#             if valid_guess == target:
#                 number_of_guesses += 1
#                 print(f"Congratulations! You guessed the correct number in {number_of_guesses} guess(es)!")
#                 break

#             elif valid_guess < target:
#                 number_of_guesses += 1
#                 max_guesses -= 1
#                 print(f"Too low. {max_guesses} guess(es) remaining")

#             elif valid_guess > target:
#                 number_of_guesses += 1
#                 max_guesses -= 1
#                 print(f"Too high. {max_guesses} guess(es) remaining")
            
#         else:
#             print(f"'{user_guess}' is not a valid guess. Please enter an integer.")
    
#     if max_guesses == 0:
#         print(f"Game over! You couldn't guess the number. The correct number was {target}.")

# guessing_game()

description = "skjdbfvsdkbfvskjlfbkvsdjfn"

print(f"{description}")
print("jsbfkdsnjsd")