import random

def generate_random_word(length):
    with open("corncob_lowercase.txt", "r") as file:
        word_list = file.read().splitlines()

    filtered_words = [word for word in word_list if len(word) == length]
    random_word = random.choice(filtered_words).lower() if filtered_words else None
    return random_word

random_word = generate_random_word(5)
print(random_word)
