import random

def generate_random_word(length):
    with open("corncob_lowercase.txt", "r") as file:
        word_list = file.read().splitlines()

    filtered_words = [word for word in word_list if len(word) == length]
    random_word = random.choice(filtered_words).lower() if filtered_words else None
    return random_word
    
def show_guess(guess, word):
    correct_letters = {
        letter for letter, correct in zip(guess, word) if letter == correct
    }
    misplaced_letters = set(guess) & set(word) - correct_letters
    wrong_letters = set(guess) - set(word)

    print("Correct letters:", ", ".join(sorted(correct_letters)))
    print("Misplaced letters:", ", ".join(sorted(misplaced_letters)))
    print("Wrong letters:", ", ".join(sorted(wrong_letters)))

def game_over(word):
    print(f"The word was {word}")

def main():
    # Pre-process
    target = generate_random_word(5)

    # Process (main loop)
    for guess_num in range(1, 7):
        guess = input(f"Guess #{guess_num}: ").lower()

        show_guess(guess, target)
        if guess == target:
            break

    # Post-process
    else:
        game_over(target)

if __name__ == "__main__":
    main()